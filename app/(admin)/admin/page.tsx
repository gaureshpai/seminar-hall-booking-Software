import { getBookings, getUsers } from '@/actions/adminActions';
import BookingsClient from '@/components/BookingsClient';
import DataOverview from '@/components/DataOverview';
import UsersClient from '@/components/UsersClient';

export default async function Page() {
  const bookings = await getBookings();
  const users = await getUsers();

  return(
    <div>
      <DataOverview bookings={bookings} />
      <BookingsClient bookings={bookings} />
      <UsersClient users={users} />
    </div>
    
  ) ;
}