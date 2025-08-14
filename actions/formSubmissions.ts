"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import BookingModel from "@/models/Booking";
import { IBooking } from '../models/Booking';
import { getServerSession } from "next-auth";
import { transporter } from "@/lib/mailer";

type BookingInput = {
  Date: Date;
  Time: string;
  Department: string;
  Event: string;
  FacultyIncharge: string;
  Hall: string;
  email: string;
};

export async function saveBooking(content: BookingInput): Promise<IBooking> {
  await dbConnect();
  const session = await getServerSession(authOptions);
  console.log(session);

  const userId = session?.user?.id;
  if (!userId) {
    throw new Error("User is not authorized");
  }

  const booking = await BookingModel.create(
    {
      userId,
      Date: content.Date,
      Time: content.Time,
      Department: content.Department,
      Event: content.Event,
      Hall: content.Hall,
      email: content.email,
      FacultyIncharge: content.FacultyIncharge,
    }
  )

  console.log(booking);

  const saved = await BookingModel.findOne({
    _id: booking._id
  });

  if (!saved) {
    throw new Error("No Bookings found")
  }
  console.log(saved);

  const plainBooking = {
    id: saved._id.toString(),
    userId: saved.userId.toString(),
    Date: saved.Date.toISOString(),
    Time: saved.Time,
    Department: saved.Department,
    Event: saved.Event,
    Hall: saved.Event,
    email: saved.email,
    FacultyIncharge: saved.FacultyIncharge,
    createdAt: saved.createdAt.toISOString(),
    updatedAt: saved.updatedAt.toISOString(),
  };

  return plainBooking as IBooking;
}

async function sendMail(to: string, sub: string, msg: string) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      subject: sub,
      html: msg,
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export default sendMail;