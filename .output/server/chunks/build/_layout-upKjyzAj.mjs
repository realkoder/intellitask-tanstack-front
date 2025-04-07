import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
import { a } from './getRequestClient-BlbUj71l.mjs';
import { q } from './client-BOYEY5wa.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import '@tanstack/start-server-core';
import 'tiny-invariant';

const c = () => import('./_layout-DqotXblt.mjs'), m = q("app_routes_authed_layout_tsx--getTeamspaces_createServerFn_handler", "/_server", (e, t) => _.__executeServer(e, t)), p = q("app_routes_authed_layout_tsx--getChatrooms_createServerFn_handler", "/_server", (e, t) => i.__executeServer(e, t)), _ = createServerFn().handler(m, async () => {
  try {
    const e = a(), { data: t } = await e.chatrooms.getParticipatingTeamspaces();
    return t;
  } catch {
    return [];
  }
}), i = createServerFn().handler(p, async () => {
  const e = a(), { data: t } = await e.chatrooms.getParticipatingChatroomsWithLatestMessages();
  return console.log("chatrooms", t), t;
}), h = createFileRoute("/_authed/_layout")({ component: lazyRouteComponent(c, "component", () => h.ssr) });

export { p as getChatrooms_createServerFn_handler, m as getTeamspaces_createServerFn_handler };
//# sourceMappingURL=_layout-upKjyzAj.mjs.map
