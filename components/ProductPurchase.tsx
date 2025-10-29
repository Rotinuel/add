// "use client";

// import { useState } from "react";
// import { loadPaystackScript } from "@/utils/paystack";

// interface ProductPurchaseClientProps {
//   product: {
//     id: string;
//     name: string;
//     price: number;
//   };
// }

// interface PaystackResponse {
//   reference: string;
//   status: string;
// }

// export default function ProductPurchaseClient({ product }: ProductPurchaseClientProps) {
//   const [email, setEmail] = useState("");

//   const handlePay = async () => {
//     const Paystack = await loadPaystackScript();
//     if (!Paystack?.Pop) return alert("Unable to load Paystack.");

//     const handler = Paystack.Pop.setup({
//       key: process.env.NEXT_PUBLIC_PAYSTACK_KEY as string,
//       email,
//       amount: product.price * 100,
//       currency: "NGN",
//       ref: `PROD-${Date.now()}`,
//       callback: (response: PaystackResponse) => {
//         alert(`Payment successful! Ref: ${response.reference}`);
//       },
//       onClose: () => console.log("Payment window closed."),
//     });

//     handler.openIframe();
//   };

//   return (
//     <div className="space-y-4">
//       <input
//         type="email"
//         placeholder="Enter your email"
//         className="border w-full px-3 py-2 rounded focus:ring-2 focus:ring-green-500"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button
//         onClick={handlePay}
//         className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold transition"
//       >
//         Pay with Paystack
//       </button>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { loadPaystackScript } from "@/utils/paystack";

interface ProductPurchaseClientProps {
  product: {
    _id: string;
    name: string;
    price: number;
  };
}

interface PaystackResponse {
  reference: string;
  status: string;
}

export default function ProductPurchaseClient({ product }: ProductPurchaseClientProps) {
  const [email, setEmail] = useState("");

  const handlePay = async () => {
    const Paystack = await loadPaystackScript();
    if (!Paystack?.Pop) return alert("Unable to load Paystack.");

    const handler = Paystack.Pop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_KEY as string,
      email,
      amount: product.price * 100,
      currency: "NGN",
      ref: `PROD-${Date.now()}`,
      callback: (response: PaystackResponse) => {
        alert(`Payment successful! Ref: ${response.reference}`);
      },
      onClose: () => console.log("Payment window closed."),
    });

    handler.openIframe();
  };

  return (
    <div className="space-y-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="border w-full px-3 py-2 rounded focus:ring-2 focus:ring-green-500"
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
  );
}

