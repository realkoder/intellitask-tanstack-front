import { redirect } from '@tanstack/react-router';
import { a } from './getRequestClient-NbhzxsPk.mjs';
import { J } from './client-DLHNdpZv.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import '@tanstack/start-server-core';
import 'tiny-invariant';

const o = J("app_routes_authed_tsx--checkExistingOrganization_createServerFn_handler", "/_server", (e, r) => c.__executeServer(e, r)), c = createServerFn().handler(o, async () => {
  const e = a(), { data: r } = await e.auth.getIfUserHasActiveOrganization();
  if (!r.hasActiveOrganization) throw redirect({ to: "/create-organization" });
});

export { o as checkExistingOrganization_createServerFn_handler };
//# sourceMappingURL=_authed-uwNsAFki.mjs.map
