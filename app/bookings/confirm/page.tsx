"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ConfirmPage() {
  const [reservation, setReservation] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("reservation");
    if (!saved) {
      router.push("/reservations");
    } else {
      setReservation(JSON.parse(saved));
    }
  }, [router]);

  if (!reservation) return <div className="text-center p-10 text-gray-400">Loading your reservation...</div>;

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl bg-gray-900 rounded-2xl p-10 shadow-xl">
        <h1 className="text-3xl font-bold mb-4 text-yellow-400">Reservation Confirmed ✅</h1>
        <p className="text-gray-400 mb-6">Here’s a summary of your booking:</p>

        <div className="space-y-2 text-gray-200">
          <p><strong>Hotel:</strong> {reservation.hotel}</p>
          <p><strong>Room Type:</strong> {reservation.roomType}</p>
          <p><strong>Guests:</strong> {reservation.guests}</p>
          <p><strong>Check-in:</strong> {reservation.checkIn}</p>
          <p><strong>Check-out:</strong> {reservation.checkOut}</p>
          <p><strong>Transport:</strong> {reservation.transport}</p>
          {reservation.notes && <p><strong>Notes:</strong> {reservation.notes}</p>}
        </div>

        <button
          onClick={() => router.push("/")}
          className="mt-8 w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Return to Home
        </button>
      </div>
    </section>
  );
}
