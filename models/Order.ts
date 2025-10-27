import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
  eventId: { type: Schema.Types.ObjectId, ref: "Event" },
  amount: Number,
  reference: String,
  status: { type: String, default: "pending" },
  email: String,
}, { timestamps: true });

export const Order = models.Order || model("Order", OrderSchema);
