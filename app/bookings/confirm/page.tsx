"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Define a clear type for your reservation
interface Reservation {
  type: "hotel" | "logistics";
  name?: string;
  email?: string;

  // Hotel fields
  hotel?: string;
  roomType?: string;
  guests?: number;
  checkIn?: string;
  checkOut?: string;

  // Logistics fields
  pickupLocation?: string;
  dropoffLocation?: string;
  date?: string;
  vehicleType?: string;

  // Common
  notes?: string;
}

export default function ConfirmPage() {
  const [reservation, setReservation] = useState<Reservation | null>(null);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("reservation");
    if (!saved) {
      router.push("/reservations");
    } else {
      setReservation(JSON.parse(saved));
    }
  }, [router]);

  if (!reservation)
    return (
      <div className="text-center p-10 text-gray-400">
        Loading your reservation...
      </div>
    );

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl bg-gray-900 rounded-2xl p-10 shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold mb-4 text-yellow-400">
          Reservation Confirmed ✅
        </h1>

        <p className="text-gray-400 mb-6">
          Here’s a summary of your {reservation.type} booking:
        </p>

        {/* Shared Info */}
        <div className="space-y-2 text-gray-200 mb-6">
          {reservation.name && (
            <p>
              <strong>Name:</strong> {reservation.name}
            </p>
          )}
          {reservation.email && (
            <p>
              <strong>Email:</strong> {reservation.email}
            </p>
          )}
        </div>

        {/* Hotel Booking Summary */}
        {reservation.type === "hotel" && (
          <div className="space-y-2 text-gray-200">
            {reservation.hotel && (
              <p>
                <strong>Hotel:</strong> {reservation.hotel}
              </p>
            )}
            {reservation.roomType && (
              <p>
                <strong>Room Type:</strong> {reservation.roomType}
              </p>
            )}
            {reservation.guests && (
              <p>
                <strong>Guests:</strong> {reservation.guests}
              </p>
            )}
            {reservation.checkIn && (
              <p>
                <strong>Check-in:</strong> {reservation.checkIn}
              </p>
            )}
            {reservation.checkOut && (
              <p>
                <strong>Check-out:</strong> {reservation.checkOut}
              </p>
            )}
          </div>
        )}

        {/* Logistics Booking Summary */}
        {reservation.type === "logistics" && (
          <div className="space-y-2 text-gray-200">
            {reservation.pickupLocation && (
              <p>
                <strong>Pickup Location:</strong> {reservation.pickupLocation}
              </p>
            )}
            {reservation.dropoffLocation && (
              <p>
                <strong>Dropoff Location:</strong> {reservation.dropoffLocation}
              </p>
            )}
            {reservation.date && (
              <p>
                <strong>Date:</strong> {reservation.date}
              </p>
            )}
            {reservation.vehicleType && (
              <p>
                <strong>Vehicle Type:</strong> {reservation.vehicleType}
              </p>
            )}
          </div>
        )}

        {reservation.notes && (
          <p className="mt-4 text-gray-300 italic">
            <strong>Notes:</strong> {reservation.notes}
          </p>
        )}

        <button
          onClick={() => {
            localStorage.removeItem("reservation");
            router.push("/");
          }}
          className="mt-8 w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Return to Home
        </button>
      </div>
    </section>
  );
}
