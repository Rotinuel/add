import EventCard from "@/components/EventCard";

export default function Home() {
  const events = [
    {
      title: "Trade Fair/Exhibition",
      price: 350000,
      venue: "",
      sdate: "Dec 21, 2025",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Tour Abuja",
      price: 150000,
      venue: "Iconic Tourist Spots in Abuja",
      sdate: "Dec 22, 2025",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Shop Abuja",
      price: 200000,
      venue: "",
      sdate: "Dec 23, 2025",
      edate: "Jan 02, 2026",
      description: "Shopping, Entertainment, Lifestyle and Culture.",
    },
    {
      title: "Pool Party (Exclusive Party)",
      price: 75000,
      venue: "",
      sdate: "Dec 24, 2025",
      edate: "",
      description: "Shopping, Entertainment, Lifestyle and Culture.",
    },
    {
      title: "Abuja Night Life Experience",
      price: 250000,
      venue: "",
      sdate: "Dec 24, 2025",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Christmas Carol Challenge",
      price: 2500,
      venue: "Abuja Continental Hotels",
      sdate: "Dec 25, 2025",
      edate: "",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Global NAIJA Summit",
      price: 100000,
      venue: "World Trade Center",
      sdate: "",
      edate: "",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Xtravaganza Newtworking Mixer",
      price: 180000,
      venue: "Abuja Continental Hotels",
      sdate: "Dec 16, 2025",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Wellness Day",
      price: 150000,
      venue: "National Stadium Abuja",
      sdate: "Dec 28, 2025",
      edate: "",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Sports Tournament",
      price: 20000,
      venue: "National Stadium Abuja",
      sdate: "Dec 29, 2025",
      edate: "Dec 30, 2025",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Movie Premier",
      price: 125000,
      venue: "National Stadium Abuja",
      sdate: "",
      edate: "",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Cross Over Concert",
      price: 125000,
      venue: "National Stadium Abuja",
      sdate: "Dec 31, 2025",
      edate: "Jan 01, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Cultural Carnival Day 1",
      price: 0,
      venue: "National Stadium Abuja",
      sdate: "Dec 31, 2025",
      edate: "Jan 01, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "Cultural Carnival Day 2",
      price: 125000,
      venue: "National Stadium Abuja",
      sdate: "Jan 01 , 2026",
      edate: "Jan 02, 2026",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "City Rave",
      price: 30000,
      venue: "National Stadium Abuja",
      sdate: "Dec 23, 2025",
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
