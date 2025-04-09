import { jsxs, jsx } from 'react/jsx-runtime';
import { useNavigate } from '@tanstack/react-router';
import { toast } from 'sonner';
import { Plus, Check, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { j as Ja, k as Ka, f as Yt, a as $, $ as $e, I as Ie, Q as Qe, z as ze, b as be, c as ct } from '../nitro/nitro.mjs';
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
import 'jotai';
import '@vercel/analytics';
import 'zod';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-label';
import 'better-auth/react';
import 'better-auth/client/plugins';
import 'input-otp';
import '@radix-ui/react-select';
import '@radix-ui/react-tooltip';
import '@radix-ui/react-radio-group';
import '@radix-ui/react-scroll-area';
import '@radix-ui/react-separator';
import '@radix-ui/react-dialog';
import '@radix-ui/react-checkbox';
import 'uuid';
import 'cmdk';
import '@radix-ui/react-avatar';
import '@radix-ui/react-dropdown-menu';
import 'framer-motion';
import 'motion/react';
import 'marked';
import 'react-markdown';
import 'remark-gfm';
import '@radix-ui/react-hover-card';
import 'qss';
import 'node:stream';
import 'isbot';
import 'react-dom/server';

const Ct = function() {
  const { data: r } = Ja(), { data: o, error: A } = Ka(), m = useNavigate(), [u, g] = useState(/* @__PURE__ */ new Map());
  useEffect(() => {
    if (!r) return;
    (async () => {
      const N = await Promise.all(r == null ? void 0 : r.map(async (a) => {
        var _a;
        const s = await Yt.getFullOrganization({ query: { organizationId: a.id } });
        return { id: a.id, memberCount: (((_a = s.data) == null ? void 0 : _a.members) || []).length };
      })), x = new Map(N.map(({ id: a, memberCount: s }) => [a, s]));
      g(x);
    })();
  }, [r]);
  const c = () => {
    m({ to: "/create-organization" });
  }, f = async (i) => {
    await Yt.setActive({ organizationId: i }), toast.success("Organization switched successfully"), m({ to: "/chat", reloadDocument: true });
  };
  return jsxs("div", { className: "space-y-8 m-4", children: [jsxs("div", { className: "flex items-center justify-between", children: [jsxs("div", { children: [jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Organizations" }), jsx("p", { className: "text-muted-foreground mt-1", children: "Manage your organizations and teams" })] }), jsxs($, { onClick: c, children: [jsx(Plus, { className: "mr-2 h-4 w-4" }), "New Organization"] })] }), (r == null ? void 0 : r.length) === 0 ? jsx($e, { className: "m-4", children: jsxs(Ie, { className: "flex flex-col items-center justify-center py-12", children: [jsx("p", { className: "mb-4 text-muted-foreground text-center", children: "You don't have any organizations yet" }), jsxs($, { onClick: c, children: [jsx(Plus, { className: "mr-2 h-4 w-4" }), "Create your first organization"] })] }) }) : jsx("div", { className: "grid gap-6 m-8 sm:grid-cols-2 lg:grid-cols-3", children: r == null ? void 0 : r.map((i) => jsxs($e, { className: `transition-all ${(o == null ? void 0 : o.id) === i.id ? "border-primary" : ""}`, children: [jsxs(Qe, { children: [jsxs("div", { className: "flex items-start justify-between", children: [jsx(ze, { children: i.name }), (o == null ? void 0 : o.id) === i.id && jsx("div", { className: "rounded-full bg-primary/10 p-1", children: jsx(Check, { className: "h-4 w-4 text-primary" }) })] }), jsxs(be, { children: ["Created on ", new Date(i.createdAt).toLocaleDateString()] })] }), jsxs(Ie, { children: [jsx("p", { className: "text-sm text-muted-foreground", children: i.description || "No description provided" }), jsxs("div", { className: "mt-4 flex items-center text-sm", children: [jsx(Users, { className: "mr-1 h-4 w-4 text-muted-foreground" }), jsxs("span", { children: [u.get(i.id), " members"] })] })] }), jsx(ct, { children: (o == null ? void 0 : o.id) === i.id ? jsx($, { variant: "outline", className: "w-full", disabled: true, children: "Current Organization" }) : jsx($, { className: "w-full", onClick: () => f(i.id), children: "Switch to this organization" }) })] }, i.id)) })] });
};

export { Ct as component };
//# sourceMappingURL=index-DGwTvHhm.mjs.map
