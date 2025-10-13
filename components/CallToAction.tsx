import { FaTicketAlt, FaTrophy } from 'react-icons/fa';

export default function CallToAction() {
  return (
    <section className="bg-green-700 bg-gradient-to-br from-green-600 to-green-800 text-white py-20 text-center px-4">
      <h2 className="text-4xl font-bold mb-4">Ready to Join the Celebration?</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        Don&apos;t miss out on Nigeria&apos;s biggest December celebration. Get your tickets now and be part of history!
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="#events"
          className="flex items-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition duration-300"
        >
          <FaTicketAlt />
          Browse Events
        </a>
        <a
          href="#voting"
          className="flex items-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-green-700 transition duration-300"
        >
          <FaTrophy />
          Start Voting
        </a>
      </div>
    </section>
  );
}
