import { Outlet } from 'react-router';
import type { Route } from './+types';
import { getAuth } from '@clerk/react-router/ssr.server';
import { redirect } from 'react-router';

export async function loader(args: Route.LoaderArgs) {
  const { userId } = await getAuth(args)
  if (!userId) {
    return redirect('/')
  }
}
export default function LoggedWrapper() {
  return <Outlet />;
}