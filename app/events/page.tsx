import EventCard from "@/components/EventCard";

export default function Home() {
  const events = [
    {
      title: "Trade Fair/Exhibition",
      price: 350000,
      venue: "",
      category: "Exhibition",
      sdate: "Dec 12, 2025",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Tour Abuja",
      price: 150000,
      venue: "",
      category: "Tourism",
      sdate: "Dec 12, 2025",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Shop Abuja",
      price: 200000,
      venue: "",
      category: "Market Place",

      sdate: "Dec 16, 2025 1:01 AM",
      edate: "Dec 16, 2025 1:01 AM",
      description: "Shopping, Entertainment, Lifestyle and Culture.",
    },
    {
      title: "Pool Party (Exclusive Party)",
      price: 960000,
      venue: "SIA Pitch 1",
      category: "Market Place",
      capacity: 5000,
      type: "All night",
      sdate: "Dec 16, 2025 1:01 AM",
      edate: "Dec 16, 2025 1:01 AM",
      description: "Shopping, Entertainment, Lifestyle and Culture.",
    },
    {
      title: "Abuja Night Life Experience",
      price: 250000,
      venue: "Nil",
      category: "Market Place",
      capacity: 5000,
      type: "All night",
      sdate: "Dec 16, 2025 1:01 AM",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Christmas Carol Challenge",
      price: 250000,
      venue: "Nil",
      category: "Market Place",
      capacity: 5000,
      type: "All night",
      sdate: "Dec 16, 2025 1:01 AM",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Global NAIJA Summit",
      price: 250000,
      venue: "Nil",
      category: "Market Place",
      capacity: 5000,
      type: "All night",
      sdate: "Dec 16, 2025 1:01 AM",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Xtravaganza Newtworking Mixer",
      price: 250000,
      venue: "Nil",
      category: "Market Place",
      capacity: 5000,
      type: "All night",
      sdate: "Dec 16, 2025 1:01 AM",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Wellness Day",
      price: 250000,
      venue: "Nil",
      category: "Market Place",
      capacity: 5000,
      type: "All night",
      sdate: "Dec 16, 2025 1:01 AM",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Sports Tournament",
      price: 250000,
      venue: "Nil",
      category: "Market Place",
      capacity: 5000,
      type: "All night",
      sdate: "Dec 16, 2025 1:01 AM",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Movie Premier",
      price: 250000,
      venue: "Nil",
      category: "Market Place",
      capacity: 5000,
      type: "All night",
      sdate: "Dec 16, 2025 1:01 AM",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Cross Over Concert",
      price: 250000,
      venue: "Nil",
      category: "Market Place",
      capacity: 5000,
      type: "All night",
      sdate: "Dec 16, 2025 1:01 AM",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Cultural Carnival Day 1",
      price: 250000,
      venue: "Nil",
      category: "Market Place",
      capacity: 5000,
      type: "All night",
      sdate: "Dec 16, 2025 1:01 AM",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Cultural Carnival Day 2",
      price: 250000,
      venue: "Nil",
      category: "Market Place",
      capacity: 5000,
      type: "All night",
      sdate: "Dec 16, 2025 1:01 AM",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "City Rave",
      price: 250000,
      venue: "Nil",
      category: "Market Place",
      capacity: 5000,
      type: "All night",
      sdate: "Dec 16, 2025 1:01 AM",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "DETTY & LIT",
      price: 30000,
      venue: "National Stadium",
      sdate: "Dec 24, 2025",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Vibes on Vibes",
      price: 30000,
      venue: "National Stadium Abuja",
      sdate: "Dec 30, 2025",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Cloud Elixir",
      price: 30000,
      venue: "National Stadium Abuja",
      sdate: "Dec 24, 2025",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Wet & Wild",
      price: 30000,
      venue: "National Stadium Abuja",
      sdate: "Dec 29, 2025",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Hike of Hikes Challenge",
      price: 5000,
      venue: "National Stadium Abuja",
      sdate: "Dec 27, 2025",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },

  ];

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-10 text-green-500">
          Abuja Detty December 2025
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </main>
  );
}
