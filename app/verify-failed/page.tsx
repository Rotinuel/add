"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";

export default function VerifyFailedPage() {
  const router = useRouter();

  useEffect(() => {
    toast.error("Email verification failed ❌");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-red-100 text-center px-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-6">
          <Image
            src="/ADDHNI.png" // use your logo or an error icon
            alt="Verification failed"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        <h1 className="text-3xl font-semibold text-red-600 mb-2">
          Verification Failed
        </h1>
        <p className="text-gray-600 mb-6">
          Sorry, we couldn’t verify your email. The link may have expired or is invalid.
        </p>

        <button
          onClick={() => router.push("/register")}
          className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
