"use client";

import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const target = new Date("December 20, 2025 23:59:00").getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background images */}
      <div
        className="flex transition-transform duration-[2000ms] ease-in-out h-full w-[300%]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Abuja Detty December</h1>
        <div className="flex gap-4 text-2xl md:text-3xl font-semibold">
          <div>
            {timeLeft.days}
            <span className="block text-sm font-normal">Days</span>
          </div>
          <div>
            {timeLeft.hours}
            <span className="block text-sm font-normal">Hours</span>
          </div>
          <div>
            {timeLeft.minutes}
            <span className="block text-sm font-normal">Minutes</span>
          </div>
          <div>
            {timeLeft.seconds}
            <span className="block text-sm font-normal">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
