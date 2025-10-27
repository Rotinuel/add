import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  phone: { type: String, unique: true, required: true},
  password: String,
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
