import { L, H } from './client-DLHNdpZv.mjs';
import { getWebRequest } from '@tanstack/start-server-core';

const r = (e) => {
  const o = H();
  return new L(o, { auth: { cookie: e }, requestInit: { credentials: "include" } });
}, u = () => {
  var _a, _b;
  const e = H();
  return new L(e, { auth: { cookie: (_b = (_a = getWebRequest()) == null ? void 0 : _a.headers.get("cookie")) != null ? _b : void 0 }, requestInit: { credentials: "include" } });
}, a = () => {
  var _a, _b;
  const e = H();
  return new L(e, { auth: { cookie: (_b = (_a = getWebRequest()) == null ? void 0 : _a.headers.get("cookie")) != null ? _b : void 0 }, requestInit: { cache: "force-cache", credentials: "include" } });
};

export { a, r, u };
//# sourceMappingURL=getRequestClient-NbhzxsPk.mjs.map
