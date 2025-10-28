"use client";

import { useState } from "react";
import Step1 from "@/app/sponsors/Step1";
import Step2 from "@/app/sponsors/Step2";
import Step3 from "@/app/sponsors/Step3";

export default function SponsorPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-black text-white py-8 px-6 md:px-12 lg:px-24 space-y-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Want your brand to own the spotlight this season?
        </h2>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl text-gray-200">
          Abuja Detty December isn’t just about fun — it’s a movement that brings together over
          <span className="text-green-400 font-semibold"> 100,000+ </span>
          culture lovers, foodies, creators, and community shapers.
        </p>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl text-gray-200">
          From rising brands to household names, we give you the platform to be seen, felt,
          and remembered — right where the vibes live.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-green-400 mt-4">
          Let’s put your brand at the center of the experience.
        </p>
      </div>

      {/* Form Section */}
      <div className="flex justify-center items-start py-6 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="w-full max-w-4xl border-4 border-green-400 bg-white shadow-lg rounded-lg p-6 sm:p-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            Become a Sponsor
          </h1>

          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="bg-green-600 text-white font-medium px-6 py-2 rounded shadow-[3px_3px_0px_0px_#facc15] hover:bg-green-700 transition"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={nextStep}
                className="bg-green-600 text-white font-medium px-6 py-2 rounded shadow-[3px_3px_0px_0px_#facc15] hover:bg-green-700 transition"
              >
                Next
              </button>
            ) : (
              <button
                className="bg-green-600 text-white font-medium px-6 py-2 rounded shadow-[3px_3px_0px_0px_#facc15] hover:bg-green-700 transition"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
