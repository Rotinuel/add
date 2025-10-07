"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Ticket, Heart } from "lucide-react";
import Image from "next/image";

const images = [
    "/background/background1.png",
    "/background/background2.png",
    "/background/background3.png",
    "/background/background4.png",
    "/background/background5.png",
    "/background/background6.png",
];

export default function HeroSection() {
    const [index, setIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const target = new Date("December 20, 2025 23:59:00").getTime();
        const now = new Date().getTime();
        const diff = target - now;

        return diff <= 0
            ? { days: 0, hours: 0, minutes: 0, seconds: 0 }
            : {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            };
    }

    useEffect(() => {
        const changeImage = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length); // loops forever
        }, 5000);

        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);

        return () => {
            clearInterval(changeImage);
            clearInterval(timer);
        };
    }, []);

    return (
        <section className="relative h-[90vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
            {/* Background carousel */}
            {images.map((img, i) => (
                <Image
                    key={i}
                    src={img}
                    alt={`Background ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${i === index ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Text content */}
            <div className="relative z-10 px-6">
                <h1 className="text-5xl md:text-7xl font-bold mb-2">
                    Abuja Detty December
                </h1>
                <p className="text-7xl text-[#488d17] mb-6">2025</p>
                <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-8">
                    Nigeria&apos;s biggest December celebration — music, dance, contests, and unforgettable memories.
                </p>

                {/* Countdown */}
                <div className="flex justify-center gap-4 mb-4">
                    {[
                        { label: "Days", value: timeLeft.days },
                        { label: "Hours", value: timeLeft.hours },
                        { label: "Mins", value: timeLeft.minutes },
                        { label: "Secs", value: timeLeft.seconds },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="bg-white/10 rounded-lg px-4 py-3 w-20 md:w-24"
                        >
                            <p className="text-3xl font-semibold">
                                {String(item.value).padStart(2, "0")}
                            </p>
                            <p className="text-sm text-gray-300">{item.label}</p>
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="/tickets"
                        className="flex items-center gap-2 bg-[#488d17] hover:bg-[#3a7412] px-6 py-3 rounded-lg font-medium"
                    >
                        <Ticket size={18} /> Get Tickets
                    </Link>
                    <Link
                        href="/vote"
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-medium"
                    >
                        ❤️ Vote Now
                    </Link>
                    <Link
                        href="/sponsor"
                        className="flex items-center gap-2 border border-gray-200 bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium"
                    >
                        <Heart size={18} /> Sponsor Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
