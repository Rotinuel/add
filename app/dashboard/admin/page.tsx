"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// Define Reservation type
interface Reservation {
  _id: string;
  name: string;
  email: string;
  type: "hotel" | "logistics";
  createdAt: string;

  // Hotel-specific
  guests?: number;
  checkIn?: string;
  checkOut?: string;

  // Logistics-specific
  pickupLocation?: string;
  dropoffLocation?: string;
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [filter, setFilter] = useState<"all" | "hotel" | "logistics">("all");
  const router = useRouter();

  // Fetch reservations
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/reservations");
      const data = await res.json();
      if (data.success) setReservations(data.reservations);
    };
    fetchData();
  }, []);

  const filtered =
    filter === "all"
      ? reservations
      : reservations.filter((r) => r.type === filter);

  // Protect admin route
  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.replace("/login");
      return;
    }
    if (session.user?.role !== "admin") {
      router.replace("/dashboard");
      return;
    }
  }, [session, status, router]);

  if (status === "loading" || !session) {
    return <div className="p-8">Loading...</div>;
  }

  const user = session.user;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-gray-700">
        Welcome, <span className="font-semibold">{user.name}</span>! You have admin access.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Link
          href="/dashboard/products"
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          Manage Products
        </Link>
        <Link
          href="/dashboard/events"
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
        >
          Manage Events
        </Link>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-4 pt-6 mb-4">
        {["all", "hotel", "logistics"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type as "all" | "hotel" | "logistics")}
            className={`px-4 py-2 rounded font-medium ${
              filter === type
                ? "bg-blue-600 text-white"
                : "bg-white border text-gray-700 hover:bg-gray-100"
            }`}
          >
            {type === "all"
              ? "All"
              : type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Reservation Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Email</th>
              <th className="p-4 font-semibold">Type</th>
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold">Details</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((r) => (
                <tr key={r._id} className="border-t hover:bg-gray-50">
                  <td className="p-4">{r.name}</td>
                  <td className="p-4">{r.email}</td>
                  <td className="p-4 capitalize">{r.type}</td>
                  <td className="p-4">
                    {new Date(r.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-gray-700">
                    {r.type === "hotel"
                      ? `${r.guests ?? "-"} guests, ${r.checkIn ?? "-"} → ${
                          r.checkOut ?? "-"
                        }`
                      : `Pickup: ${r.pickupLocation ?? "-"}`}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="text-center p-6 text-gray-500 italic"
                >
                  No reservations found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
