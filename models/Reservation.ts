import mongoose, { Schema, models } from "mongoose";

const ReservationSchema = new Schema(
  {
    hotel: String,
    roomType: String,
    guests: Number,
    kids: Number,
    checkIn: String,
    checkOut: String,
    transport: String,
    notes: String,
    email: String,
  },
  { timestamps: true }
);

const Reservation =
  models.Reservation || mongoose.model("Reservation", ReservationSchema);

export default Reservation;
