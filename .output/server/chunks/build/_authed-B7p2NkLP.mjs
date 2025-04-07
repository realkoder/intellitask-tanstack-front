import { redirect } from '@tanstack/react-router';
import { u } from './getRequestClient-BlbUj71l.mjs';
import { q } from './client-BOYEY5wa.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import '@tanstack/start-server-core';
import 'tiny-invariant';

const o = q("app_routes_authed_tsx--checkExistingOrganization_createServerFn_handler", "/_server", (e, r) => c.__executeServer(e, r)), c = createServerFn().handler(o, async () => {
  const e = u(), { data: r } = await e.auth.getIfUserHasActiveOrganization();
  if (!r.hasActiveOrganization) throw redirect({ to: "/create-organization" });
});

export { o as checkExistingOrganization_createServerFn_handler };
//# sourceMappingURL=_authed-B7p2NkLP.mjs.map
