import { L, D } from './client-BOYEY5wa.mjs';
import { getWebRequest } from '@tanstack/start-server-core';

const r = (e) => {
  const s = D("staging");
  return new L(s, { auth: { cookie: e }, requestInit: { credentials: "include" } });
}, a = () => {
  var _a, _b;
  const e = D("staging");
  return new L(e, { auth: { cookie: (_b = (_a = getWebRequest()) == null ? void 0 : _a.headers.get("cookie")) != null ? _b : void 0 }, requestInit: { credentials: "include" } });
}, u = () => {
  var _a, _b;
  const e = D("staging");
  return new L(e, { auth: { cookie: (_b = (_a = getWebRequest()) == null ? void 0 : _a.headers.get("cookie")) != null ? _b : void 0 }, requestInit: { cache: "force-cache", credentials: "include" } });
};

export { a, r, u };
//# sourceMappingURL=getRequestClient-BlbUj71l.mjs.map
