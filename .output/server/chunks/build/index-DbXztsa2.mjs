import { jsxs, jsx } from 'react/jsx-runtime';
import { UserPlus, MoreHorizontal, Settings, Trash2 } from 'lucide-react';
import * as y$1 from 'react';
import { useState, useMemo } from 'react';
import { Label } from '@radix-ui/react-label';
import { V as Dr, O, af as ts, u as ue$1, y as ye, d as de, n as ne, i as ie, C as ws, D as xs, N as Ns, $ as mi, P as ui, R as hi, a6 as ut, v } from '../nitro/nitro.mjs';
import { b, h, f, u as u$1, g, p as p$1, y as y$2 } from './dialog-BARnul6K.mjs';
import { toast } from 'sonner';
import { d } from './checkbox-C_SO_KyM.mjs';
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
import 'jotai';
import '@vercel/analytics';
import 'zod';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
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
import '@radix-ui/react-checkbox';

const B = y$1.forwardRef(({ className: t, ...i }, n) => jsx("div", { className: "relative w-full overflow-auto", children: jsx("table", { ref: n, className: v("w-full caption-bottom text-sm", t), ...i }) }));
B.displayName = "Table";
const $ = y$1.forwardRef(({ className: t, ...i }, n) => jsx("thead", { ref: n, className: v("[&_tr]:border-b", t), ...i }));
$.displayName = "TableHeader";
const Y = y$1.forwardRef(({ className: t, ...i }, n) => jsx("tbody", { ref: n, className: v("[&_tr:last-child]:border-0", t), ...i }));
Y.displayName = "TableBody";
const pe = y$1.forwardRef(({ className: t, ...i }, n) => jsx("tfoot", { ref: n, className: v("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t), ...i }));
pe.displayName = "TableFooter";
const y = y$1.forwardRef(({ className: t, ...i }, n) => jsx("tr", { ref: n, className: v("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", t), ...i }));
y.displayName = "TableRow";
const p = y$1.forwardRef(({ className: t, ...i }, n) => jsx("th", { ref: n, className: v("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", t), ...i }));
p.displayName = "TableHead";
const u = y$1.forwardRef(({ className: t, ...i }, n) => jsx("td", { ref: n, className: v("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", t), ...i }));
u.displayName = "TableCell";
const ue = y$1.forwardRef(({ className: t, ...i }, n) => jsx("caption", { ref: n, className: v("mt-4 text-sm text-muted-foreground", t), ...i }));
ue.displayName = "TableCaption";
const fe = ({ viewMode: t, onChange: i }) => jsxs("div", { className: "border rounded-md p-1 flex", children: [jsxs(O, { variant: t === "grid" ? "default" : "ghost", size: "sm", className: "rounded-sm", onClick: () => i("grid"), children: [jsxs("div", { className: "grid grid-cols-2 gap-0.5 h-3 w-3 mr-2", children: [jsx("div", { className: "bg-current rounded-sm" }), jsx("div", { className: "bg-current rounded-sm" }), jsx("div", { className: "bg-current rounded-sm" }), jsx("div", { className: "bg-current rounded-sm" })] }), "Grid"] }), jsxs(O, { variant: t === "table" ? "default" : "ghost", size: "sm", className: "rounded-sm", onClick: () => i("table"), children: [jsxs("div", { className: "flex flex-col justify-between h-3 w-3 mr-2", children: [jsx("div", { className: "bg-current h-0.5 w-full rounded-sm" }), jsx("div", { className: "bg-current h-0.5 w-full rounded-sm" }), jsx("div", { className: "bg-current h-0.5 w-full rounded-sm" })] }), "Table"] })] }), U = [{ id: "gpt-4o", name: "GPT-4o", enabled: true }, { id: "gpt-4o-mini", name: "GPT-4o Mini", enabled: true }, { id: "claude-3.5-sonnet", name: "Claude 3.5 Sonnet", enabled: false }, { id: "claude-3-opus", name: "Claude 3 Opus", enabled: false }, { id: "claude-3-haiku", name: "Claude 3 Haiku", enabled: false }, { id: "gemini-1.5-pro", name: "Gemini 1.5 Pro", enabled: false }, { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash", enabled: false }], la = function() {
  const { data: i } = Dr(), n = i, [f$1, E] = useState([]), [_, g$1] = useState(false), [J, x] = useState(false), [b$1, K] = useState(null), [C, M] = useState(false), [T, Q] = useState("grid"), I = useMemo(() => {
    var _a;
    const s = n == null ? void 0 : n.members.map((r) => ({ id: r.id, invitationId: void 0, email: r.user.email, name: r.user.name, status: "accepted", role: r.role, models: U })), o = (_a = n == null ? void 0 : n.invitations.filter((r) => r.status === "pending")) == null ? void 0 : _a.map((r) => {
      var _a2;
      return { id: void 0, invitationId: r.id, email: r.email, name: (_a2 = r.email.split("@")[0]) != null ? _a2 : "Unkown Name", status: r.status, role: r.role, models: U };
    });
    return [...s != null ? s : [], ...o != null ? o : []];
  }, [n]), V = async () => {
    const s = f$1.filter((l) => n.invitations.some((o) => o.email.toLowerCase() === l.email.toLowerCase() && o.status === "pending") || n.members.some((o) => o.user.email.toLowerCase() === l.email.toLowerCase()));
    if (s.length > 0) {
      let l = s.map((o) => o.email + ", ").toString();
      l = l.substring(0, l.length - 2), toast.error(`You have already invited ${l}.`);
      return;
    }
    M(true), await Promise.all(f$1.map(async (l) => {
      await ut.inviteMember({ email: l.email, role: l.role, organizationId: n.id });
    })), toast.success(`${f$1.length} new invitations have been sent succesfully - wait for their acceptantance.`), M(false), g$1(false);
  }, D = async (s, l) => {
    s && !l ? await ut.removeMember({ memberIdOrEmail: s, organizationId: n.id }) : l && await ut.cancelInvitation({ invitationId: l });
  }, q = (s) => {
  }, W = () => {
  }, k = (s) => {
    K({ ...s }), x(true);
  };
  return n ? jsxs("div", { className: "space-y-6 m-8", children: [jsxs("div", { className: "flex items-center justify-between", children: [jsxs("div", { children: [jsxs("h1", { className: "text-3xl font-bold tracking-tight", children: [(n == null ? void 0 : n.name) + " - ", " Team Members"] }), jsx("p", { className: "text-muted-foreground mt-1", children: "Manage your organization's team members and their permissions" })] }), jsxs("div", { className: "flex items-center gap-2", children: [jsx(fe, { viewMode: T, onChange: Q }), jsxs(b, { open: _, onOpenChange: g$1, children: [jsx(h, { asChild: true, children: jsxs(O, { children: [jsx(UserPlus, { className: "mr-2 h-4 w-4" }), "Invite Member"] }) }), jsxs(f, { className: "min-w-1/3 flex flex-col items-center", children: [jsx(u$1, { className: "text-center", children: "Invite new members" }), jsx(ts, { invitees: f$1, setInvitees: E }), jsxs(g, { children: [jsx(O, { variant: "outline", onClick: () => g$1(false), children: "Cancel" }), jsx(O, { onClick: V, disabled: f$1.length === 0 || C, children: C ? "Sending..." : "Send Invitation" })] })] })] })] })] }), jsx(b, { open: J, onOpenChange: x, children: jsxs(f, { className: "sm:max-w-md", children: [jsxs(p$1, { children: [jsx(u$1, { children: "AI Model Access" }), jsxs(y$2, { children: ["Configure which AI models ", b$1 == null ? void 0 : b$1.name, " can access"] })] }), jsx("div", { className: "space-y-4 py-2 max-h-[60vh] overflow-y-auto", children: b$1 == null ? void 0 : b$1.models.map((s) => jsxs("div", { className: "flex items-center justify-between py-2 border-b", children: [jsxs("div", { className: "flex items-center space-x-2", children: [jsx(d, { id: `model-${s.id}`, checked: s.enabled, onCheckedChange: () => q(s.id) }), jsx(Label, { htmlFor: `model-${s.id}`, className: "cursor-pointer", children: s.name })] }), s.enabled ? jsx("span", { className: "text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full", children: "Enabled" }) : jsx("span", { className: "text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full", children: "Disabled" })] }, s.id)) }), jsxs(g, { children: [jsx(O, { variant: "outline", onClick: () => x(false), children: "Cancel" }), jsx(O, { onClick: W, children: "Save Changes" })] })] }) }), T === "grid" ? jsxs(ue$1, { children: [jsxs(ye, { children: [jsx(de, { children: "Team Members" }), jsxs(ne, { children: ["Your organization has ", n.members.length, " members"] })] }), jsx(ie, { children: jsx("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-3", children: I.map((s) => jsx(ue$1, { className: "overflow-hidden border bg-background", children: jsx(ie, { className: "p-0", children: jsxs("div", { className: "flex flex-col", children: [jsxs("div", { className: "flex items-center justify-between p-4", children: [jsxs("div", { className: "flex items-center space-x-3", children: [jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary", children: s.name.charAt(0).toUpperCase() }), jsxs("div", { children: [jsxs("p", { className: "font-medium", children: [s.name, " - ", s.email] }), jsxs("div", { className: "flex items-center space-x-2", children: [jsx("span", { className: "text-sm text-muted-foreground", children: s.role }), s.status === "pending" && jsx("span", { className: "text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full", children: "Pending" })] })] })] }), jsxs(ws, { children: [jsx(xs, { asChild: true, children: jsxs(O, { variant: "ghost", size: "icon", children: [jsx(MoreHorizontal, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Menu" })] }) }), jsxs(Ns, { align: "end", children: [jsx(mi, { children: "Actions" }), jsxs(ui, { onClick: () => k(s), children: [jsx(Settings, { className: "mr-2 h-4 w-4" }), "Configure AI Models"] }), jsx(hi, {}), jsxs(ui, { className: "text-destructive", onClick: () => D(s.email, s.invitationId), children: [jsx(Trash2, { className: "mr-2 h-4 w-4" }), s.status === "accepted" ? "Remove Member" : "Cancel invitation"] })] })] })] }), jsxs("div", { className: "border-t p-4 bg-muted/40", children: [jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-xs text-muted-foreground", children: "AI Models" }), jsxs("span", { className: "text-xs font-medium", children: [s.models.filter((l) => l.enabled).length, " of ", s.models.length, " enabled"] })] }), jsxs("div", { className: "mt-2 flex flex-wrap gap-1", children: [s.models.filter((l) => l.enabled).slice(0, 3).map((l) => jsx("span", { className: "text-xs bg-primary/10 text-primary px-2 py-1 rounded-full", children: l.name }, l.id)), s.models.filter((l) => l.enabled).length > 3 && jsxs("span", { className: "text-xs bg-primary/10 text-primary px-2 py-1 rounded-full", children: ["+", s.models.filter((l) => l.enabled).length - 3, " more"] }), s.models.filter((l) => l.enabled).length === 0 && jsx("span", { className: "text-xs text-muted-foreground", children: "No models enabled" })] })] })] }) }) }, s.email)) }) })] }) : jsxs(ue$1, { children: [jsxs(ye, { children: [jsx(de, { children: "Team Members" }), jsxs(ne, { children: ["Your organization has ", n.members.length, " members"] })] }), jsx(ie, { children: jsxs(B, { children: [jsx($, { children: jsxs(y, { children: [jsx(p, { children: "Name" }), jsx(p, { children: "Role" }), jsx(p, { children: "Status" }), jsx(p, { children: "AI Models" }), jsx(p, { className: "text-right", children: "Actions" })] }) }), jsx(Y, { children: I.map((s) => jsxs(y, { children: [jsx(u, { className: "font-medium", children: jsxs("div", { className: "flex items-center space-x-2", children: [jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm", children: s.name.charAt(0).toUpperCase() }), jsxs("span", { children: [s.name, " - ", s.email] })] }) }), jsx(u, { children: s.role }), jsx(u, { children: s.status === "accepted" ? jsxs("span", { className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800", children: [jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-green-600 mr-1" }), "Active"] }) : jsxs("span", { className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800", children: [jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-amber-600 mr-1" }), "Pending"] }) }), jsx(u, { children: jsxs("div", { className: "flex items-center space-x-1", children: [jsx("span", { className: "text-sm font-medium", children: s.models.filter((l) => l.enabled).length }), jsx("span", { className: "text-sm text-muted-foreground", children: "enabled" })] }) }), jsx(u, { className: "text-right", children: jsxs("div", { className: "flex items-center justify-end space-x-1", children: [jsxs(O, { variant: "ghost", size: "sm", onClick: () => k(s), children: [jsx(Settings, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Configure AI Models" })] }), jsxs(O, { variant: "ghost", size: "sm", onClick: () => D(s.email, s.invitationId), children: [jsx(Trash2, { className: "h-4 w-4 text-destructive" }), jsx("span", { className: "sr-only", children: "Delete" })] })] }) })] }, s.id)) })] }) })] })] }) : jsx("div", { className: "flex items-center justify-center h-full", children: jsx("div", { className: "animate-pulse", children: "Loading..." }) });
};

export { la as component };
//# sourceMappingURL=index-DbXztsa2.mjs.map
