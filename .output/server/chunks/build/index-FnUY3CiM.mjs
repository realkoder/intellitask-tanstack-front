import { jsxs, jsx } from 'react/jsx-runtime';
import { useNavigate, Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { V as Dr, A as pa, O, u as ue, y as ye, d as de, n as ne, i as ie, a2 as te, e as ee, a3 as Nt, k as ke, a6 as ut } from '../nitro/nitro.mjs';
import { toast } from 'sonner';
import { Users, Save } from 'lucide-react';
import { b, f, u, g } from './dialog-BARnul6K.mjs';
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
import 'framer-motion';
import 'motion/react';
import '@radix-ui/react-dropdown-menu';
import 'uuid';
import 'marked';
import 'react-markdown';
import 'remark-gfm';
import '@radix-ui/react-hover-card';
import 'qss';
import '@radix-ui/react-dialog';
import 'node:stream';
import 'isbot';
import 'react-dom/server';

const Le = function() {
  var _a, _b, _c;
  const { data: l, refetch: D } = Dr(), i = l, [r, h] = useState(""), [o, g$1] = useState(""), [u$1, d] = useState(true), [x, c] = useState(false);
  useNavigate();
  const { changeActiveOrganizationIfAny: y } = pa();
  useEffect(() => {
    l && (h(i.name), g$1(JSON.parse(i.metadata).description), d(false));
  }, [l]);
  const w = async () => {
    if (!r || !o) {
      toast.error("Organization name is required");
      return;
    }
    d(true);
    const { data: t, error: f } = await ut.update({ data: { name: r, metadata: { description: o } } });
    t ? toast.info("Organization credentials updated!") : f && (toast.error("Organization credentials could not be updated!"), console.error("Organization credentials could not be updated!", f)), D(), d(false);
  }, S = async () => {
    await ut.delete({ organizationId: i.id }), y();
  };
  return i ? jsxs("div", { className: "space-y-8 m-8", children: [jsxs("div", { children: [jsxs("h1", { className: "text-3xl font-bold tracking-tight", children: ["Organization Settings - ", i == null ? void 0 : i.name] }), jsx("p", { className: "text-muted-foreground mt-1", children: "Manage your organization preferences" })] }), jsx(b, { open: x, onOpenChange: c, children: jsxs(f, { children: [jsx(u, { children: "Confirm Deletion" }), jsx("p", { children: "Are you sure you want to delete this organization? This action cannot be undone." }), jsxs(g, { children: [jsx(O, { variant: "outline", onClick: () => c(false), children: "Cancel" }), jsx(O, { variant: "destructive", onClick: () => S(), children: "Delete Organization" })] })] }) }), jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [jsxs(ue, { children: [jsxs(ye, { className: "flex flex-row justify-between", children: [jsxs("div", { children: [jsx(de, { children: "General Information" }), jsx(ne, { children: "Update your organization's basic details." }), jsxs(ne, { children: [i == null ? void 0 : i.name, " has a total of ", (_a = i == null ? void 0 : i.members.length) != null ? _a : 0, " members and ", (_b = i.invitations.filter((t) => t.status === "pending").length) != null ? _b : 0, " pending invitaitons."] })] }), jsx("div", { children: jsx(O, { children: jsxs(Link, { className: "flex", to: "/members", children: [jsx(Users, { className: "mr-2 h-4 w-4" }), jsx("span", { children: "Manage members" })] }) }) })] }), jsxs(ie, { className: "space-y-4", children: [jsxs("div", { className: "space-y-2", children: [jsx(te, { htmlFor: "org-name", children: "Organization Name" }), jsx(ee, { id: "org-name", maxLength: 50, value: r, onChange: (t) => h(t.target.value) })] }), jsxs("div", { className: "space-y-2", children: [jsx(te, { htmlFor: "org-description", children: "Description" }), jsx(Nt, { id: "org-description", value: o, maxLength: 1e3, onChange: (t) => g$1(t.target.value), rows: 4 })] })] }), jsx(ke, { children: jsxs(O, { onClick: w, disabled: u$1 || r === i.name && o === JSON.parse((_c = i.metadata) != null ? _c : "{description: ''}").description, children: [jsx(Save, { className: "mr-2 h-4 w-4" }), u$1 ? "Saving..." : "Save Changes"] }) })] }), jsxs(ue, { children: [jsxs(ye, { children: [jsx(de, { children: "Danger Zone" }), jsx(ne, { children: "Irreversible actions for your organization" })] }), jsx(ie, { className: "space-y-4", children: jsxs("div", { className: "rounded-lg border border-destructive/20 p-4", children: [jsx("h3", { className: "font-medium text-destructive", children: "Delete Organization" }), jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "This action cannot be undone. All data will be permanently deleted." }), jsx(O, { variant: "destructive", className: "mt-4", onClick: () => c(true), children: "Delete Organization" })] }) })] })] })] }) : jsx("div", { className: "flex items-center justify-center h-full", children: "Loading..." });
};

export { Le as component };
//# sourceMappingURL=index-FnUY3CiM.mjs.map
