"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";

export default function VerifySuccessPage() {
  const router = useRouter();

  useEffect(() => {
    toast.success("Your email has been verified successfully 🎉");
    const timer = setTimeout(() => {
      router.push("/login");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 text-center px-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-6">
          <Image
            src="/ADDHNI.png" // you can use your logo or any image
            alt="Verified"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        <h1 className="text-3xl font-semibold text-green-700 mb-2">
          Email Verified!
        </h1>
        <p className="text-gray-600 mb-6">
          Your email has been successfully verified. You’ll be redirected to
          login shortly.
        </p>

        <button
          onClick={() => router.push("/login")}
          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
