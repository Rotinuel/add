import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Reservation from "@/models/Reservation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    await connectDB();

    // Save to MongoDB
    const newReservation = await Reservation.create(data);

    // Send confirmation email
    await resend.emails.send({
      from: "Bookings <noreply@yourdomain.com>",
      to: data.email,
      subject: `Reservation Confirmation - ${
        data.type === "hotel" ? "Hotel" : "Logistics"
      }`,
      html: `
        <h2>Hi ${data.name},</h2>
        <p>Your ${data.type} reservation has been received!</p>
        ${
          data.type === "hotel"
            ? `<p><strong>Check-in:</strong> ${data.checkIn}<br/>
               <strong>Check-out:</strong> ${data.checkOut}<br/>
               <strong>Guests:</strong> ${data.guests}</p>`
            : `<p><strong>Pickup Location:</strong> ${data.pickupLocation}</p>`
        }
        <p>We'll contact you shortly to confirm all details.</p>
        <p>— The Reservations Team</p>
      `,
    });

    return NextResponse.json({ success: true, reservation: newReservation });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Reservation error:", message);

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, reservations });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
