import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";

interface ProductDoc {
  _id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const product = (await Product.findById(params.id).lean()) as ProductDoc | null;

    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      product: {
        id: product._id.toString(),
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image || "/placeholder.jpg",
      },
    });
  } catch (error) {
    // ✅ Safe, ESLint-compliant error handling
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
