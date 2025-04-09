import { jsxs, jsx } from 'react/jsx-runtime';
import { useNavigate, Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { k as Ka, j as Ja, l as ha, n as Hi, v as vn, x as xn, w as wn, a as $, $ as $e, Q as Qe, z as ze, b as be, I as Ie, o as Q, i as ie, p as Ee, c as ct, f as Yt } from '../nitro/nitro.mjs';
import { toast } from 'sonner';
import { Users, Save } from 'lucide-react';
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

const je = function() {
  var _a, _b, _c;
  const { data: l, refetch: D } = Ka(), a = l, { data: Z } = Ja(), [r, g] = useState(""), [o, h] = useState(""), [u, d] = useState(true), [x, c] = useState(false);
  useNavigate();
  const { changeActiveOrganizationIfAny: y } = ha();
  useEffect(() => {
    l && (g(a.name), h(JSON.parse(a.metadata).description), d(false));
  }, [l]);
  const w = async () => {
    if (!r || !o) {
      toast.error("Organization name is required");
      return;
    }
    d(true);
    const { data: t, error: f } = await Yt.update({ data: { name: r, metadata: { description: o } } });
    t ? toast.info("Organization credentials updated!") : f && (toast.error("Organization credentials could not be updated!"), console.error("Organization credentials could not be updated!", f)), D(), d(false);
  }, L = async () => {
    await Yt.delete({ organizationId: a.id }), y();
  };
  return a ? jsxs("div", { className: "space-y-8 m-8", children: [jsxs("div", { children: [jsxs("h1", { className: "text-3xl font-bold tracking-tight", children: ["Organization Settings - ", a == null ? void 0 : a.name] }), jsx("p", { className: "text-muted-foreground mt-1", children: "Manage your organization preferences" })] }), jsx(Hi, { open: x, onOpenChange: c, children: jsxs(vn, { children: [jsx(xn, { children: "Confirm Deletion" }), jsx("p", { children: "Are you sure you want to delete this organization? This action cannot be undone." }), jsxs(wn, { children: [jsx($, { variant: "outline", onClick: () => c(false), children: "Cancel" }), jsx($, { variant: "destructive", onClick: () => L(), children: "Delete Organization" })] })] }) }), jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [jsxs($e, { children: [jsxs(Qe, { className: "flex flex-row justify-between", children: [jsxs("div", { children: [jsx(ze, { children: "General Information" }), jsx(be, { children: "Update your organization's basic details." }), jsxs(be, { children: [a == null ? void 0 : a.name, " has a total of ", (_a = a == null ? void 0 : a.members.length) != null ? _a : 0, " members and ", (_b = a.invitations.filter((t) => t.status === "pending").length) != null ? _b : 0, " pending invitaitons."] })] }), jsx("div", { children: jsx($, { children: jsxs(Link, { className: "flex", to: "/members", children: [jsx(Users, { className: "mr-2 h-4 w-4" }), jsx("span", { children: "Manage members" })] }) }) })] }), jsxs(Ie, { className: "space-y-4", children: [jsxs("div", { className: "space-y-2", children: [jsx(Q, { htmlFor: "org-name", children: "Organization Name" }), jsx(ie, { id: "org-name", maxLength: 50, value: r, onChange: (t) => g(t.target.value) })] }), jsxs("div", { className: "space-y-2", children: [jsx(Q, { htmlFor: "org-description", children: "Description" }), jsx(Ee, { id: "org-description", value: o, maxLength: 1e3, onChange: (t) => h(t.target.value), rows: 4 })] })] }), jsx(ct, { children: jsxs($, { onClick: w, disabled: u || r === a.name && o === JSON.parse((_c = a.metadata) != null ? _c : "{description: ''}").description, children: [jsx(Save, { className: "mr-2 h-4 w-4" }), u ? "Saving..." : "Save Changes"] }) })] }), jsxs($e, { children: [jsxs(Qe, { children: [jsx(ze, { children: "Danger Zone" }), jsx(be, { children: "Irreversible actions for your organization" })] }), jsx(Ie, { className: "space-y-4", children: jsxs("div", { className: "rounded-lg border border-destructive/20 p-4", children: [jsx("h3", { className: "font-medium text-destructive", children: "Delete Organization" }), jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "This action cannot be undone. All data will be permanently deleted." }), jsx($, { variant: "destructive", className: "mt-4", onClick: () => c(true), children: "Delete Organization" })] }) })] })] })] }) : jsx("div", { className: "flex items-center justify-center h-full", children: "Loading..." });
};

export { je as component };
//# sourceMappingURL=index-Cax3CenD.mjs.map
