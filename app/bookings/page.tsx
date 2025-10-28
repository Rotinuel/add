"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    hotel: "",
    roomType: "",
    guests: "",
    checkIn: "",
    checkOut: "",
    transport: "",
    notes: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        localStorage.setItem("reservation", JSON.stringify(formData));
        router.push("/reservations/confirm");
      } else {
        alert("Error submitting reservation.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error.");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center py-16 px-6">
      <div className="text-center mb-12 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Book Your Stay & Ride 🚗🏨
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Plan your Abuja Detty December experience with comfort and ease.
          Reserve your hotel and transport all in one place.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-2xl p-8 md:p-10 shadow-2xl w-full max-w-2xl space-y-6"
      >
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">Select Hotel</label>
          <select
            name="hotel"
            value={formData.hotel}
            onChange={handleChange}
            className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-400 outline-none"
          >
            <option value="">Choose your hotel</option>
            <option>Transcorp Hilton</option>
            <option>Fraser Suites</option>
            <option>Nordic Hotel</option>
            <option>Barcelona Hotel</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Room Type</label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-400 outline-none"
            >
              <option value="">Select room type</option>
              <option>Standard</option>
              <option>Deluxe</option>
              <option>Executive Suite</option>
              <option>Penthouse</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Guests</label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-400 outline-none"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Check-in</label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Check-out</label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-400 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">Transport</label>
          <select
            name="transport"
            value={formData.transport}
            onChange={handleChange}
            className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-400 outline-none"
          >
            <option value="">Select</option>
            <option>Airport Pickup</option>
            <option>Shuttle Service</option>
            <option>Private Chauffeur</option>
            <option>No Transport</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">Notes</label>
          <textarea
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-400 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition"
        >
          Confirm Reservation
        </button>
      </form>
    </section>
  );
}
