"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { loadPaystackScript } from "@/utils/paystack"; // helper we’ll define below

interface EventBookingModalProps {
  open: boolean;
  onClose: () => void;
  event: {
    id: string;
    title: string;
    price: number;
  };
}

export default function EventBookingModal({ open, onClose, event }: EventBookingModalProps) {
  const [email, setEmail] = useState("");

  if (!open) return null;

  const handlePay = async () => {
    const Paystack = await loadPaystackScript();
    const handler = Paystack?.Pop?.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
      email,
      amount: event.price * 100,
      currency: "NGN",
      ref: `EVT-${Date.now()}`,
      callback: function (response: any) {
        alert(`Payment successful! Ref: ${response.reference}`);
        onClose();
      },
      onClose: function () {
        console.log("Payment window closed.");
      },
    });
    handler.openIframe();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>
        <h2 className="text-xl font-semibold mb-4">{event.title}</h2>
        <p className="text-lg font-bold text-green-600 mb-3">
          ₦{event.price.toLocaleString("en-NG")}
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="border w-full px-3 py-2 rounded mb-4 focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handlePay}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold transition"
        >
          Pay with Paystack
        </button>
      </div>
    </div>
  );
}
