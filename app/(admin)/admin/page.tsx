import { getBookings } from '@/actions/adminActions';
import DataOverview from '@/components/DataOverview';

export default async function Page() {
  const bookings = await getBookings();

  return <DataOverview bookings={bookings} />;
}