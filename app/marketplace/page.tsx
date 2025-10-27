import Image from "next/image";
import Link from "next/link";
import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";

export default async function ShopPage() {
  await connectDB();
  const products = await Product.find().sort({ createdAt: -1 }).lean();

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Market Place</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id.toString()} className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <Image
                src={p.image || "/placeholder.jpg"}
                alt={p.name}
                width={400}
                height={300}
                className="rounded-t-xl object-cover w-full h-56"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{p.name}</h2>
                <p className="text-green-600 font-bold mb-3">
                  ₦{p.price.toLocaleString("en-NG")}
                </p>
                <Link
                  href={`/shop/${p._id}`}
                  className="block text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
