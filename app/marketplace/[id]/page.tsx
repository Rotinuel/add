import Image from "next/image";
import ProductPurchase from "@/components/ProductPurchase";

interface Product {
  _id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ unwrap the Promise (Next.js 15+)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`, {
    cache: "no-store",
  });

  const data = await res.json();
  const product = data?.product as Product | null;

  if (!product)
    return <p className="p-8 text-center text-gray-600">Product not found</p>;

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
