"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";

function VerifyPageContent() {
  const params = useSearchParams();
  const router = useRouter();
  const token = params.get("token");

  useEffect(() => {
    if (token) {
      fetch(`/api/auth/verify?token=${token}`)
        .then((res) => {
          if (res.ok) {
            toast.success("Email verified successfully!");
            router.push("/login");
          } else {
            toast.error("Invalid or expired token");
          }
        })
        .catch(() => toast.error("Verification failed"));
    }
  }, [token, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-2xl font-semibold">Verifying your email...</h2>
      <p className="text-gray-500 mt-2">Please wait a moment.</p>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="text-center p-6">Loading...</div>}>
      <VerifyPageContent />
    </Suspense>
  );
}
