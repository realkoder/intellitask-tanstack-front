import { createFileRoute, redirect } from '@tanstack/react-router';
import { getRequestClientWithAuthAndCache } from '../lib/getRequestClient';
import { createServerFn } from '@tanstack/react-start';

export const checkExistingOrganization = createServerFn()
  .handler(async () => {
    const client = getRequestClientWithAuthAndCache();
    const { data } = await client.auth.getIfUserHasActiveOrganization();

    if (data.hasActiveOrganization) return;
    throw redirect({ to: '/create-organization' })
  })

export const Route = createFileRoute('/_authed')({
  async beforeLoad({ context, location }) {

    if (!context.user?.id) {
      throw redirect({
        to: '/sign-in'
      })
    }
    await checkExistingOrganization();

    if (location.href === "/organization-settings" || location.href === "/members") {
      if (context?.session?.activeOrganizationMemberRole !== "owner" && context?.session?.activeOrganizationMemberRole !== "admin") {
        throw redirect({
          to: '/chat'
        })
      }
    }
  },
})
