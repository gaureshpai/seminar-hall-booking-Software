"use server";
import { getBookings } from '@/actions/adminActions';
import BookingsClient from './_components/BookingsClient';


export default async function Page() {
  const bookings = await getBookings(); 

  return <BookingsClient bookings={bookings} />; 
}