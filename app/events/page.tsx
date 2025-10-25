"use client";

import { useState } from "react";
import EventCard from "@/components/EventCard";

interface Event {
  title: string;
  price: number;
  venue: string;
  sdate: string;
  edate: string;
  description: string;
}

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events = [
    {
      title: "Trade Fair/Exhibition",
      price: 350000,
      venue: "National Stadium Abuja",
      sdate: "Dec 21, 2025",
      edate: "Jan 02, 2026",
      description: "Tech innovation, lifestyle, and market showcase.",
    },
    {
      title: "Tour Abuja",
      price: 150000,
      venue: "Iconic Tourist Spots in Abuja",
      sdate: "Dec 21, 2025",
      edate: "Jan 02, 2026",
      description: "Explore iconic city landmarks and cultural sites.",
    },
    {
      title: "Shop Abuja",
      price: 200000,
      venue: "National Stadium Abuja",
      sdate: "Dec 23, 2025",
      edate: "Jan 02, 2026",
      description: "Shopping, Entertainment, Lifestyle and Culture.",
    },
    {
      title: "Pool Party (Exclusive Party)",
      price: 75000,
      venue: "Abuja Continental Hotels",
      sdate: "Dec 24, 2025",
      edate: "Dec 24, 2025",
      description: "Vibes, drinks, music and pool side energy.",
    },
    {
      title: "Abuja Night Life Experience",
      price: 250000,
      venue: "",
      sdate: "Dec 24, 2025",
      edate: "Jan 02, 2026",
      description: "Clubs, concerts, celebrity DJs, and nightlife fun..",
    },
    {
      title: "Christmas Carol Challenge",
      price: 2500,
      venue: "Abuja Continental Hotels",
      sdate: "Dec 25, 2025",
      edate: "",
      description: "Choirs competing in melody, harmony, and passion..",
    },
    {
      title: "Global NAIJA Summit",
      price: 100000,
      venue: "World Trade Center",
      sdate: "",
      edate: "",
      description: "Business, innovation, networking, and leadership insights..",
    },
    {
      title: "Xtravaganza Newtworking Mixer",
      price: 180000,
      venue: "Abuja Continental Hotels",
      sdate: "Dec 16, 2025",
      edate: "Jan 02, 2026",
      description: "Meet top executives, founders, and creative professionals..",
    },
    {
      title: "Wellness Day",
      price: 150000,
      venue: "National Stadium Abuja",
      sdate: "Dec 28, 2025",
      edate: "",
      description: "Fitness, health, relaxation, and mindfulness experience..",
    },
    {
      title: "Sports Tournament",
      price: 20000,
      venue: "National Stadium Abuja",
      sdate: "Dec 20, 2025",
      edate: "Dec 30, 2025",
      description: "Football, volleyball, and team competitions..",
    },
    {
      title: "Movie Premier",
      price: 125000,
      venue: "National Stadium Abuja",
      sdate: "",
      edate: "",
      description: "Red carpet moments, screenings, and film stars..",
    },
    {
      title: "Cross Over Concert",
      price: 125000,
      venue: "National Stadium Abuja",
      sdate: "Dec 31, 2025",
      edate: "Jan 01, 2026",
      description: "Countdown night with live music and fireworks..",
    },
    {
      title: "Cultural Carnival Day 1",
      price: 0,
      venue: "National Stadium Abuja",
      sdate: "Dec 31, 2025",
      edate: "Jan 01, 2026",
      description: "Free entry to experience Abuja’s culture and creativity.",
    },
    {
      title: "Cultural Carnival Day 2",
      price: 125000,
      venue: "National Stadium Abuja",
      sdate: "Jan 01 , 2026",
      edate: "Jan 02, 2026",
      description: "Cultural displays, music, dance, and local artistry.",
    },
    {
      title: "City Rave",
      price: 30000,
      venue: "National Stadium Abuja",
      sdate: "Dec 23, 2025",
      edate: "Jan 02, 2026",
      description: "High-energy rave with DJs, lights, and street vibes.",
    },
    {
      title: "DETTY & LIT",
      price: 30000,
      venue: "National Stadium",
      sdate: "Dec 24, 2025",
      edate: "Jan 02, 2026",
      description: "Party hard with top DJs, performers, and influencers.",
    },
    {
      title: "Vibes on Vibes",
      price: 30000,
      venue: "National Stadium Abuja",
      sdate: "Dec 30, 2025",
      edate: "Jan 02, 2026",
      description: "Non-stop music, dance, and entertainment fusion.",
    },
    {
      title: "Cloud Elixir",
      price: 30000,
      venue: "National Stadium Abuja",
      sdate: "Dec 24, 2025",
      edate: "Jan 02, 2026",
      description: "A luxury party experience with cocktails and lights.",
    },
    {
      title: "Wet & Wild",
      price: 30000,
      venue: "National Stadium Abuja",
      sdate: "Dec 29, 2025",
      edate: "Jan 02, 2026",
      description: "Water games, music, and outdoor fun.",
    },
    {
      title: "Hike of Hikes Challenge",
      price: 5000,
      venue: "National Stadium Abuja",
      sdate: "Dec 27, 2025",
      edate: "Jan 02, 2026",
      description: "Fitness hike, adventure trails, and team spirit.",
    },

  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        {/* Full-width section header */}
        <div className="w-full mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white bg-[#008236] py-5 text-center rounded-xl shadow-md border border-green-800">
            Abuja Detty December 2025
          </h1>
        </div>


        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              {...event}
              onViewMore={() => setSelectedEvent(event)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-2 text-[#008236]">
              {selectedEvent.title}
            </h2>
            <p className="text-gray-600 mb-4">{selectedEvent.description}</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li><strong>Venue:</strong> {selectedEvent.venue || "TBA"}</li>
              <li>
                <strong>Date:</strong> {selectedEvent.sdate || "TBA"}
                {selectedEvent.edate && ` - ${selectedEvent.edate}`}
              </li>
              <li>
                <strong>Price:</strong> ₦
                {selectedEvent.price.toLocaleString("en-NG", {
                  minimumFractionDigits: 2,
                })}
              </li>
            </ul>
            <button
              onClick={() => setSelectedEvent(null)}
              className="w-full bg-[#008236] hover:bg-green-700 text-white py-2 rounded-md font-semibold mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
