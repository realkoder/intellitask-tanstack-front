import { Environment, Local } from './client';
import { createAuthClient } from 'better-auth/react';
import { emailOTPClient, organizationClient } from 'better-auth/client/plugins';
import { adminClient } from 'better-auth/client/plugins';

const getBetterAuthRequestClient = () => {
  const env = import.meta.env.DEV ? Local : Environment('staging');

  return createAuthClient({
    baseURL: env,
    plugins: [organizationClient(), adminClient(), emailOTPClient()],
  });
};

export const {
  useSession,
  getSession,
  signIn,
  signUp,
  signOut,
  emailOtp,
  verifyEmail,
  organization,
  useListOrganizations,
  useActiveOrganization,
} = getBetterAuthRequestClient();
