import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";

// GET all products
export async function GET() {
  await connectDB();
  const products = await Product.find({});
  return NextResponse.json(products);
}

// POST new product
export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();
  const product = await Product.create(data);
  return NextResponse.json(product);
}
