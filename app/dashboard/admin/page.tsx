"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [reservations, setReservations] = useState([])
  const [filter, setFilter] = useState("all");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/reservations");
      const data = await res.json();
      if (data.success) setReservations(data.reservations);
    };
    fetchData();
  }, []);

  const filtered = filter === "all"
    ? reservations
    : reservations.filter((r: any) => r.type === filter);


  useEffect(() => {
    if (status === "loading") return; // wait until session loads

    if (!session) {
      // not logged in → redirect
      router.replace("/login");
      return;
    }

    if (session.user?.role !== "admin") {
      // logged in but not admin → redirect
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
      <p className="text-gray-700">Welcome, {user.name}! You have admin access.</p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Link href="/dashboard/products" className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
          Manage Products
        </Link>
        <Link href="/dashboard/events" className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
          Manage Events
        </Link>
      </div>
      <div className="flex gap-4 pt-4 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded ${filter === "all" ? "bg-blue-600 text-white" : "bg-white border"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("hotel")}
          className={`px-4 py-2 rounded ${filter === "hotel" ? "bg-blue-600 text-white" : "bg-white border"}`}
        >
          Hotels
        </button>
        <button
          onClick={() => setFilter("logistics")}
          className={`px-4 py-2 rounded ${filter === "logistics" ? "bg-blue-600 text-white" : "bg-white border"}`}
        >
          Logistics
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Type</th>
              <th className="p-4">Date</th>
              <th className="p-4">Details</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r: any) => (
              <tr key={r._id} className="border-t">
                <td className="p-4">{r.name}</td>
                <td className="p-4">{r.email}</td>
                <td className="p-4 capitalize">{r.type}</td>
                <td className="p-4">{new Date(r.createdAt).toLocaleDateString()}</td>
                <td className="p-4">
                  {r.type === "hotel"
                    ? `${r.guests} guests, ${r.checkIn} → ${r.checkOut}`
                    : `Pickup: ${r.pickupLocation}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
