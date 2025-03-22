import { jsx, jsxs } from 'react/jsx-runtime';
import { h as hn, V as Vn, q as qn } from '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:url';
import '@tanstack/router-core';
import 'tiny-invariant';
import '@tanstack/start-server-core';
import '@tanstack/start-client-core';
import '@tanstack/react-router';
import '@tanstack/react-router-devtools';
import 'react';
import 'uuid';
import 'framer-motion';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'motion/react';
import 'lucide-react';
import 'marked';
import 'react-markdown';
import 'remark-gfm';
import '@radix-ui/react-scroll-area';
import 'better-auth/react';
import 'better-auth/client/plugins';
import 'node:stream';
import 'isbot';
import 'react-dom/server';

function A() {
  var _a;
  (_a = hn().data) == null ? void 0 : _a.session.token;
  const t = async () => {
    try {
      const o = await Vn.email({ email: "test@gmail.com", password: "password123", image: "", name: "Test User" });
      console.log("RESPONSE", o);
    } catch (o) {
      console.error("Error signing up:", o);
    }
  }, i = async () => {
    try {
      const o = await qn.email({ email: "test@gmail.com", password: "password123" });
      console.log("SIGINININ", o);
    } catch (o) {
      console.error("Error signing up:", o);
    }
  }, s = async () => {
    try {
      console.log("OKEOfd");
      const o = await qn.social({ provider: "apple" });
      console.log("SIGINININ", o);
    } catch (o) {
      console.error("Error signing up:", o);
    }
  };
  return jsx("div", { className: "bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10", children: jsxs("div", { className: "w-full max-w-sm md:max-w-3xl", children: [jsx("div", { children: "Login here" }), jsx("button", { onClick: () => t(), children: "OPRET MIG" }), jsx("button", { onClick: () => i(), children: "LUK MIG IND!!!" }), jsx("button", { onClick: () => s(), children: "APPLE NU\u{1F34F}\u{1F34E}\u{1F34F}\u{1F34E}" })] }) });
}
const K = function() {
  var _a;
  (_a = hn().data) == null ? void 0 : _a.session.token;
  const i = async () => {
    try {
      const r = await Vn.email({ email: "test@gmail.com", password: "password123", image: "", name: "Test User" });
      console.log("RESPONSE", r);
    } catch (r) {
      console.error("Error signing up:", r);
    }
  }, s = async () => {
    try {
      const r = await qn.email({ email: "test@gmail.com", password: "password123" });
      console.log("SIGINININ", r);
    } catch (r) {
      console.error("Error signing up:", r);
    }
  }, o = async () => {
    try {
      console.log("OKEOfd");
      const r = await qn.social({ provider: "apple" });
      console.log("SIGINININ", r);
    } catch (r) {
      console.error("Error signing up:", r);
    }
  };
  return jsx("div", { className: "bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10", children: jsxs("div", { className: "w-full max-w-sm md:max-w-3xl", children: [jsx("div", { children: "Login here" }), jsx("button", { onClick: () => i(), children: "OPRET MIG" }), jsx("button", { onClick: () => s(), children: "LUK MIG IND!!!" }), jsx("button", { onClick: () => o(), children: "APPLE NU\u{1F34F}\u{1F34E}\u{1F34F}\u{1F34E}" })] }) });
};

export { K as component, A as default };
//# sourceMappingURL=login-Ck_xKl4z.mjs.map
