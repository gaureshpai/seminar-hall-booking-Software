"use server";

import BookingModel from "@/models/Booking";
import dbConnect from "@/lib/dbConnect";
import UserModel, { User } from "@/models/User";

export interface Booking {
  id: string;
  _id: string;
  Date: string;
  Time: string;
  Department: string;
  Event: string;
  FacultyIncharge: string;
  Hall: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  status: string;
}

export interface SanitizedUser {
  _id: string;
  username: string;
  email: string;
  isAdmin: string;
}

export async function getBookings(): Promise<Booking[]> {
  await dbConnect();
  const bookings = await BookingModel.find().lean();

  const cleanBookings = bookings.map((booking: any) => ({
    id: booking._id.toString(),
    _id: booking._id.toString(),
    Date: booking.Date ? booking.Date.toISOString() : "",
    Time: booking.Time || "",
    Department: booking.Department || "",
    Event: booking.Event || "",
    FacultyIncharge: booking.FacultyIncharge || "",
    Hall: booking.Hall || "",
    email: booking.email || "",
    status: booking.status || "pending",
    createdAt: booking.createdAt ? booking.createdAt.toISOString() : "",
    updatedAt: booking.updatedAt ? booking.updatedAt.toISOString() : "",
    userId: booking.userId ? booking.userId.toString() : "",
  }));

  return cleanBookings;
}

export async function updateBookingStatus(bookingId: string, status: string) {
  await dbConnect();

  const updatedBooking = await BookingModel.findByIdAndUpdate(
    bookingId,
    { status },
    { new: true }
  ).lean() as unknown as Booking & { _id: { toString(): string } };

  if (!updatedBooking) return null;

  const result: Booking = {
    id: bookingId,
    _id: bookingId,
    Date: "",
    Time: "",
    Department: "",
    Event: "",
    FacultyIncharge: "",
    Hall: "",
    email: "",
    status: status,
    createdAt: "",
    updatedAt: "",
    userId: "",
  };

  if (updatedBooking._id) {
    result.id = updatedBooking._id.toString();
    result._id = updatedBooking._id.toString();
  }

  if (updatedBooking.Date) result.Date = updatedBooking.Date.toString();
  if (updatedBooking.Time) result.Time = updatedBooking.Time as string;
  if (updatedBooking.Department) result.Department = updatedBooking.Department as string;
  if (updatedBooking.Event) result.Event = updatedBooking.Event as string;
  if (updatedBooking.FacultyIncharge) result.FacultyIncharge = updatedBooking.FacultyIncharge as string;
  if (updatedBooking.Hall) result.Hall = updatedBooking.Hall as string;
  if (updatedBooking.email) result.email = updatedBooking.email as string;
  if (updatedBooking.status) result.status = updatedBooking.status as string;
  if (updatedBooking.createdAt) result.createdAt = updatedBooking.createdAt.toString();
  if (updatedBooking.updatedAt) result.updatedAt = updatedBooking.updatedAt.toString();
  if (updatedBooking.userId) result.userId = updatedBooking.userId.toString();

  return result;
}

export async function getUsers(): Promise<SanitizedUser[]> {
  await dbConnect();

  const users = await UserModel.find().lean();

  const cleanedUsers = users.map((user: any) => ({
    _id: user._id.toString(),
    username: user.username || "",
    email: user.email || "",
    isAdmin: user.isAdmin || "regular",

  }));

  return cleanedUsers;
}

export async function changeRole(userId: string, roleChange: string) {
  await dbConnect();

  const user = await UserModel.findByIdAndUpdate(
    userId,
    { isAdmin: roleChange },
    { new: true }
  ).lean() as unknown as User;

  console.log(user);

  if (!user._id) throw new Error("User Not Found");

  const sanitizedUser: SanitizedUser = {
    _id: user._id.toString(),
    username: user.username || "",
    email: user.email || "",
    isAdmin: user.isAdmin || "regular",
  };

  return sanitizedUser;
}