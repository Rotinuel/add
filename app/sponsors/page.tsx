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
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-16">
      <div className="w-full max-w-5xl border-8 border-green-400 bg-white shadow-lg rounded-lg p-8">
        <h1 className="justify-center">Want your brand to own the spotlight this season? Abuja Detty December isn’t just about fun — it’s a movement that brings together over 100,000+ culture lovers, foodies, creators, and community shapers.From rising brands to household names, we give you the platform to be seen, felt, and remembered — right where the vibes live. Let’s put your brand at the center of the experience.</h1>

        <h1 className="text-3xl font-semibold text-center mb-8">
          Become a Sponsor
        </h1>

        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}

        <div className="flex justify-center gap-4 mt-10">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="bg-red-600 text-white font-medium px-6 py-2 rounded shadow-[4px_4px_0px_0px_#facc15] hover:bg-red-700"
            >
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={nextStep}
              className="bg-red-600 text-white font-medium px-6 py-2 rounded shadow-[4px_4px_0px_0px_#facc15] hover:bg-red-700"
            >
              Next
            </button>
          ) : (
            <button
              className="bg-red-600 text-white font-medium px-6 py-2 rounded shadow-[4px_4px_0px_0px_#facc15] hover:bg-red-700"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
