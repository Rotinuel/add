"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Megaphone, X } from "lucide-react";

export default function VotePopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Always show popup whenever page is loaded or refreshed
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div
        className={`bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative [animation:fadeIn_0.3s_ease-out_forwards]`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        <div className="flex items-center mb-4">
          <Megaphone className="text-green-700 mr-2" size={24} />
          <h2 className="text-lg font-semibold text-gray-800">
            The Abuja Detty December Raffle is Live!
          </h2>
        </div>

        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Grab your ticket today and stand a chance to win exciting prizes - from solar systems to exclusive gifts.
        </p>

        <Link
          href="https://kyrosautomobile.com"
          onClick={() => setIsOpen(false)}
          className="block text-center bg-green-700 text-white font-semibold py-2.5 rounded-lg hover:bg-green-800 transition"
        >
          Get Ticket
        </Link>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
