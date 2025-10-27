"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

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
    </div>
  );
}
