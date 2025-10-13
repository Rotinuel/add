"use client";
import { Trophy } from "lucide-react";
import Link from "next/link";

const competitions = [
    {
        title: "Cultural Carnival Showcase",
        category: "Carnival",
        description:
            "States, communities, and cultural groups showcase their heritage through elaborate costumes, traditional dances, and cultural presentations. Celebrating the diversity and beauty of Nigerian culture.",
        voteLink: "/vote/carnival",
        participateLink: "/participate/carnival",
    },
    {
        title: "Miss Abuja Detty December 2025",
        category: "MissADD",
        description:
            "The premier beauty pageant celebrating Nigerian women. Contestants compete in traditional wear, evening gown, talent, and Q&A segments. Winner receives ₦5M cash prize, brand ambassadorships, and international pageant opportunities.",
        voteLink: "/vote/missadd",
        participateLink: "/participate/missadd",
    },
];

export default function CompetitionsPage() {
    return (
        <main className="flex flex-col min-h-screen bg-green-800">
            {/* 🌿 Green banner text */}
            <section className="bg-green-900 text-white text-center py-3 px-4 font-medium">
                Vote for your favorites and be part of Nigeria&apos;s most exciting talent competitions
            </section>

            {/* 🏆 Competition Section */}
            <section className="flex-1 py-16 px-6 md:px-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold">Join the Competition</h2>
                <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
                    Show off your talents and compete for amazing prizes in our exciting contests.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
                    {competitions.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 flex flex-col justify-between text-left"
                        >
                            <div>
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {item.title}
                                    </h3>
                                    <Trophy className="text-red-500 w-6 h-6" />
                                </div>
                                <p className="text-green-700 font-medium mt-1">{item.category}</p>
                                <p className="text-gray-600 mt-3 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 mt-6">
                                {/* <Link
                  href={item.voteLink}
                  className="w-full sm:w-auto text-center bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Vote Now
                </Link> */}
                                <Link
                                    href={item.participateLink}
                                    className="w-full sm:w-auto text-center bg-red-500 border border-gray-300 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition"
                                >
                                    Participate
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 🔘 View All Contests Button */}
                <div className="mt-12">
                    <Link
                        href="/contests"
                        className="inline-block bg-white text-green-800 font-semibold py-3 px-8 rounded-xl shadow hover:bg-gray-100 transition"
                    >
                        View All Contests
                    </Link>
                </div>
            </section>
        </main>
    );
}
