"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function VerifyPage() {
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
