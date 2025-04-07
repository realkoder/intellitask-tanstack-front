import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod';
import OtpVerifyUser from '../components/OtpVerifyUser';

const tokenQueryParams = z.object({
  email: z.string().catch('')
})

export const Route = createFileRoute('/verify-account')({
  validateSearch: (search) => tokenQueryParams.parse(search),
  component: RouteComponent,
})

function RouteComponent() {
  const emailReqParam = Route.useSearch({
    select: s => s.email
  });

  return (
    <OtpVerifyUser emailReqParam={emailReqParam} />
  );
}
