"use client";
import { Trophy, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-10 h-10 text-green-700 mx-auto" />,
    title: "Premium Events",
    description:
      "Curated experiences with top-tier artists and performers from across Nigeria and beyond.",
  },
  {
    icon: <Trophy className="w-10 h-10 text-red-600 mx-auto" />,
    title: "Exciting Contests",
    description:
      "Showcase your talents and compete for amazing prizes in our various competition categories.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-600 mx-auto" />,
    title: "Safe & Secure",
    description:
      "Professional security, organized logistics, and a safe environment for all attendees.",
  },
];

export default function WhyChooseADD() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        Why Choose ADD 2025?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 max-w-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
