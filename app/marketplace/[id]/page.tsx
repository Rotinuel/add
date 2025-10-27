"use client"

import Image from "next/image";
import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";
import ProductPurchase from "@/components/ProductPurchase";

interface ProductClient {
  id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  await connectDB();

  const productDoc = await Product.findById(params.id).lean();

  if (!productDoc) return <p className="p-8">Product not found</p>;

  // ✅ Transform _id → id and ensure correct typing
  const product: ProductClient = {
    id: productDoc._id.toString(),
    name: productDoc.name,
    price: productDoc.price,
    description: productDoc.description,
    image: productDoc.image || "/placeholder.jpg",
  };

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
