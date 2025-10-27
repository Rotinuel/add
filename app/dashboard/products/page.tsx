"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function ProductsDashboard() {
  const { data, mutate } = useSWR("/api/products", fetcher);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Products</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Title</th>
            <th className="p-2">Price</th>
            <th className="p-2">Stock</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((p: any) => (
            <tr key={p._id} className="border-t">
              <td className="p-2">{p.title}</td>
              <td className="p-2">₦{p.price}</td>
              <td className="p-2">{p.stock}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}
