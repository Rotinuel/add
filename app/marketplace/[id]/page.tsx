"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ProductPurchase from "@/components/ProductPurchase";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/products/${params.id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [params.id]);

  if (!product) return <p>Loading...</p>;

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
        <Image
          src={product.image ?? "/placeholder.jpg"}
          alt={product.name}
          width={800}
          height={600}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-green-600 text-lg font-semibold mb-4">
          ₦{product.price.toLocaleString("en-NG")}
        </p>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <ProductPurchase product={product} />
      </div>
    </main>
  );
}
