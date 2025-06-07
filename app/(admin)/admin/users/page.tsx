import { getUsers } from '@/actions/adminActions';
import UsersClient from '@/components/UsersClient';

export default async function Page() {
  const users = await getUsers();

  return <UsersClient users={users} />;
}