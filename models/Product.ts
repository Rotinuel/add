// import mongoose, { Schema, Document, Model } from "mongoose";

// export interface IProduct extends Document {
//   name: string;
//   description: string;
//   price: number;
//   image?: string;
//   category?: string;
//   createdAt: Date;
// }

// const ProductSchema = new Schema<IProduct>(
//   {
//     name: { type: String, required: true },
//     description: { type: String },
//     price: { type: Number, required: true },
//     image: { type: String },
//     category: { type: String },
//   },
//   { timestamps: { createdAt: true, updatedAt: false } }
// );

// export const Product: Model<IProduct> =
//   mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);


import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  image: String,
  stock: { type: Number, default: 0 },
  category: String,
}, { timestamps: true });

export const Product = models.Product || model("Product", ProductSchema);
