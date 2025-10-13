import EventCard from "@/components/EventCard";

export default function Home() {
  const events = [
    {
      title: "Tech Hub",
      price: 960000,
      venue: "Main Bowl",
      category: "Market Place",
      capacity: 5000,
      type: "All night",
      date: "Dec 16, 2025 1:01 AM",
      description: "Tech Hub display and marketplace.",
    },
    {
      title: "EA Market Place",
      price: 960000,
      venue: "SIA Pitch 1",
      category: "Market Place",
      capacity: 5000,
      type: "All night",
      date: "Dec 16, 2025 1:01 AM",
      description: "Shopping, Entertainment, Lifestyle and Culture.",
    },
    {
      title: "EA Market Place",
      price: 960000,
      venue: "SIA Pitch 1",
      category: "Market Place",
      capacity: 5000,
      type: "All night",
      date: "Dec 16, 2025 1:01 AM",
      description: "Shopping, Entertainment, Lifestyle and Culture.",
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
