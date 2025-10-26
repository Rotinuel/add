"use client";

import { useState } from "react";
import { Grid, List } from "lucide-react";
import EventCard from "@/components/EventCard";

interface Event {
  title: string;
  price: number;
  venue: string;
  sdate: string;
  edate: string;
  image: string;
  description: string;
}

export default function EventsPage() {

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Events");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    "All Events",
    "Concert",
    "Comedy",
    "Cultural",
    "Dance",
    "Food",
    "Workshop",
  ];

  const events = [
    {
      title: "Trade Fair/Exhibition",
      price: 350000,
      venue: "National Stadium Abuja",
      sdate: "Dec 21, 2025",
      edate: "Jan 02, 2026",
      image: "/eventcards/Tradefair.png",
      category: "concert",
      description: "Tech innovation, lifestyle, and market showcase.",
    },
    {
      title: "Tour Abuja",
      price: 150000,
      venue: "Iconic Tourist Spots in Abuja",
      sdate: "Dec 21, 2025",
      edate: "Jan 02, 2026",
      image: "/eventcards/Tour-Abuja.png",
      category: "concert",
      description: "Explore iconic city landmarks and cultural sites.",
    },
    {
      title: "Shop Abuja",
      price: 200000,
      venue: "National Stadium Abuja",
      sdate: "Dec 23, 2025",
      edate: "Jan 02, 2026",
      image: "/eventcards/Shop.png",
      category: "concert",
      description: "Shopping, Entertainment, Lifestyle and Culture.",
    },
    {
      title: "Pool Party (Exclusive Party)",
      price: 75000,
      venue: "Abuja Continental Hotels",
      sdate: "Dec 24, 2025",
      edate: "",
      image: "/eventcards/Pool.png",
      category: "concert",
      description: "Vibes, drinks, music and pool side energy.",
    },
    {
      title: "Abuja Night Life Experience",
      price: 250000,
      venue: "Abuja Continental Hotels",
      sdate: "Dec 24, 2025",
      edate: "",
      image: "/eventcards/Nightlife.png",
      category: "concert",
      description: "Clubs, concerts, celebrity DJs, and nightlife fun..",
    },
    {
      title: "Christmas Carol Challenge",
      price: 2500,
      venue: "Abuja Continental Hotels",
      sdate: "Dec 25, 2025",
      edate: "",
      image: "/eventcards/Carol.png",
      category: "concert",
      description: "Choirs competing in melody, harmony, and passion..",
    },
    {
      title: "Global NAIJA Summit",
      price: 100000,
      venue: "World Trade Center",
      sdate: "Dec 23, 2025",
      edate: "",
      image: "/eventcards/Summit.png",
      category: "concert",
      description: "Business, innovation, networking, and leadership insights..",
    },
    {
      title: "Xtravaganza Newtworking Mixer",
      price: 180000,
      venue: "Abuja Continental Hotels",
      sdate: "Dec 26, 2025",
      edate: "Jan 02, 2026",
      // image: "/eventcards/.png",
      category: "concert",
      description: "Meet top executives, founders, and creative professionals..",
    },
    {
      title: "Wellness Day",
      price: 150000,
      venue: "National Stadium Abuja",
      sdate: "Dec 26, 2025",
      edate: "",
      image: "/eventcards/Wellness.png",
      category: "concert",
      description: "Fitness, health, relaxation, and mindfulness experience..",
    },
    {
      title: "Sports Tournament",
      price: 20000,
      venue: "National Stadium Abuja",
      sdate: "Dec 20, 2025",
      edate: "Dec 30, 2025",
      // image: "/eventcards/Wellness.png",
      category: "concert",
      description: "Football, volleyball, and team competitions..",
    },
    {
      title: "Movie Premier",
      price: 125000,
      venue: "National Stadium Abuja",
      sdate: "",
      edate: "",
      // image: "/eventcards/Detty.png",
      category: "concert",
      description: "Red carpet moments, screenings, and film stars..",
    },
    {
      title: "Cross Over Concert",
      price: 125000,
      venue: "National Stadium Abuja",
      sdate: "Dec 31, 2025",
      edate: "Jan 01, 2026",
      // image: "/eventcards/Detty.png",
      category: "concert",
      description: "Countdown night with live music and fireworks..",
    },
    {
      title: "Cultural Carnival Day",
      price: 125000,
      venue: "National Stadium Abuja",
      sdate: "Dec 31 , 2025",
      edate: "",
      // image: "/eventcards/Detty.png",
      category: "concert",
      description: "Cultural displays, music, dance, and local artistry.",
    },
    {
      title: "City Rave",
      price: 30000,
      venue: "National Stadium Abuja",
      sdate: "Dec 25, 2025",
      edate: "Jan 02, 2026",
      // image: "/eventcards/.png",
      category: "concert",
      description: "High-energy rave with DJs, lights, and street vibes.",
    },
    {
      title: "DETTY & LIT",
      price: 30000,
      venue: "National Stadium",
      sdate: "Dec 24, 2025",
      edate: "Jan 02, 2026",
      image: "/eventcards/Detty.png",
      category: "concert",
      description: "Party hard with top DJs, performers, and influencers.",
    },
    {
      title: "Vibes on Vibes",
      price: 30000,
      venue: "National Stadium Abuja",
      sdate: "Dec 30, 2025",
      edate: "Jan 02, 2026",
      image: "/eventcards/Vibes.png",
      category: "concert",
      description: "Non-stop music, dance, and entertainment fusion.",
    },
    {
      title: "Cloud Elixir",
      price: 30000,
      venue: "National Stadium Abuja",
      sdate: "Dec 24, 2025",
      edate: "Jan 02, 2026",
      image: "/eventcards/Elixir.png",
      category: "concert",
      description: "A luxury party experience with cocktails and lights.",
    },
    {
      title: "Wet & Wild",
      price: 30000,
      venue: "National Stadium Abuja",
      sdate: "Dec 20, 2025",
      edate: "Jan 02, 2026",
      image: "/eventcards/Wet.png",
      category: "Concert",
      description: "Water games, music, and outdoor fun.",
    },
    {
      title: "Hike of Hikes Challenge",
      price: 5000,
      venue: "National Stadium Abuja",
      sdate: "Dec 27, 2025",
      edate: "",
      image: "/eventcards/hike.png",
      category: "concert",
      description: "Fitness hike, adventure trails, and team spirit.",
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      activeCategory === "All Events" || event.category === activeCategory;
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    // <main className="min-h-screen bg-gray-50 py-12">
    //   <div className="max-w-7xl mx-auto px-6">
    //     {/* Header */}

    //     {/* Full-width section header */}
    //     <div className="w-full mb-10">
    //       <h1 className="text-3xl md:text-4xl font-bold text-white bg-[#008236] py-5 text-center rounded-xl shadow-md border border-green-800">
    //         Abuja Detty December 2025
    //       </h1>
    //     </div>


    //     {/* Responsive Grid */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    //       {events.map((event, index) => (
    //         <EventCard
    //           key={index}
    //           {...event}
    //           onViewMore={() => setSelectedEvent(event)}
    //         />
    //       ))}
    //     </div>
    //   </div>

    //   {/* Modal */}
    //   {selectedEvent && (
    //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50">
    //       <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative">
    //         <button
    //           onClick={() => setSelectedEvent(null)}
    //           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
    //         >
    //           ✕
    //         </button>
    //         <h2 className="text-2xl font-bold mb-2 text-[#008236]">
    //           {selectedEvent.title}
    //         </h2>
    //         <p className="text-gray-600 mb-4">{selectedEvent.description}</p>
    //         <ul className="text-sm text-gray-700 space-y-1 mb-4">
    //           <li><strong>Venue:</strong> {selectedEvent.venue || "TBA"}</li>
    //           <li>
    //             <strong>Date:</strong> {selectedEvent.sdate || "TBA"}
    //             {selectedEvent.edate && ` - ${selectedEvent.edate}`}
    //           </li>
    //           <li>
    //             <strong>Price:</strong> ₦
    //             {selectedEvent.price.toLocaleString("en-NG", {
    //               minimumFractionDigits: 2,
    //             })}
    //           </li>
    //         </ul>
    //         <button
    //           onClick={() => setSelectedEvent(null)}
    //           className="w-full bg-[#008236] hover:bg-green-700 text-white py-2 rounded-md font-semibold mt-4"
    //         >
    //           Close
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </main>
    <section className="py-10 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl font-bold text-green-700 border-b-4 border-green-700 pb-2 mb-8 inline-block">
        ABUJA DETTY DECEMBER 2025
      </h1>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-100 text-gray-800 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-md text-sm font-medium border ${
                activeCategory === cat
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-green-600 border-green-600 hover:bg-green-50"
              } transition-colors`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Mode Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-md border ${
              viewMode === "grid"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-green-600 border-green-600 hover:bg-green-50"
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-md border ${
              viewMode === "list"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-green-600 border-green-600 hover:bg-green-50"
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Events Count */}
      <p className="text-sm text-gray-600 mb-4">
        Showing {filteredEvents.length} of {events.length} events
      </p>

      {/* Event Cards Grid / List */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            : "flex flex-col gap-4"
        }
      >
        {filteredEvents.map((event, i) => (
          <EventCard key={i} {...event} />
        ))}
      </div>
    </section>
  );
}
