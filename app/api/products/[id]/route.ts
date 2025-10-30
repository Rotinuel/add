import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";

// ✅ Define the product type
interface ProductDoc {
  _id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
}

// ✅ Correct handler signature for App Router
export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; // 👈 Important: await the params

    await connectDB();

    const product = (await Product.findById(id).lean()) as ProductDoc | null;

    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    // ✅ Return normalized product object
    return NextResponse.json({
      success: true,
      _id: product._id.toString(),
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image || "/placeholder.jpg",
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "An unexpected error occurred";

    console.error("Product fetch error:", message);

    return NextResponse.json(
      { success: false, message: "Server error", error: message },
      { status: 500 }
    );
  }
}
