// app/events/page.tsx
import EventCard from '@/components/EventCard';
import Link from 'next/link';

export default function EventsPage() {
  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Unforgettable Events</h2>
      <p className="text-center text-gray-600 mb-10">
        From electrifying concerts to cultural showcases, experience the best of December in Abuja.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <EventCard
          date="Mon, Dec 15"
          type="Music"
          title="Opening Concert 2025"
          venue="Transcorp Hilton Abuja"
          capacity={5000}
        />

        <EventCard
          date="Thu, Dec 18"
          type="Culture"
          title="Cultural Festival"
          venue="Transcorp Hilton Abuja"
          capacity={3000}
        />

        <EventCard
          date="Sat, Dec 20"
          type="Festival"
          title="Abuja Detty December Festival 2025"
          venue="Transcorp Hilton Abuja"
          capacity={2000}
          isPlaceholder={true}
        />
      </div>

      <div className="text-center mt-10">
        <Link
          href="/events/all"
          className="inline-block bg-green-800 text-white py-3 px-6 rounded hover:bg-green-700 transition"
        >
          View All Events →
        </Link>
      </div>
    </main>
  );
}
