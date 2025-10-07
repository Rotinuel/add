import mongoose, { Schema, models } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ['superadmin', 'admin', 'staff', 'vendor', 'user'],
    default: 'user',
  },
});

const User = models.User || mongoose.model('User', UserSchema);
export default User;
