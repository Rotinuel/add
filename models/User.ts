import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  verifyToken: String ,
  verifyTokenExpiry: Date,
  role: { 
    type: [
        {
            type: String,
            enum: ["user", "admin"],
            default: ["user"] // 'admin' or 'user'
        }
  ]}, 
}, { timestamps: true });

export const User = models.User || model("User", UserSchema);
