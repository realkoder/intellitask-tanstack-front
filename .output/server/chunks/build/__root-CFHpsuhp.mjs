import { J, H } from './client-DLHNdpZv.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import { getWebRequest } from '@tanstack/start-server-core';
import 'tiny-invariant';

const s = J("app_routes_root_tsx--fetchBetterAuth_createServerFn_handler", "/_server", (r, t) => h.__executeServer(r, t)), h = createServerFn({ method: "GET" }).handler(s, async () => {
  const r = H(), t = getWebRequest().headers;
  try {
    const e = await fetch(r + "/api/authorize", { method: "GET", headers: t, credentials: "include" });
    return e.ok ? { data: await e.json() } : { data: null };
  } catch (e) {
    return console.error("Auth error:", e), { data: null };
  }
});

export { s as fetchBetterAuth_createServerFn_handler };
//# sourceMappingURL=__root-CFHpsuhp.mjs.map
