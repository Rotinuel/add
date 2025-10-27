import { connectDB } from "@/lib/db";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();
  const order = await Order.create(data);

  // Decrement stock if product exists
  if (data.productId) {
    await Product.findByIdAndUpdate(data.productId, { $inc: { stock: -1 } });
  }

  return NextResponse.json(order);
}
