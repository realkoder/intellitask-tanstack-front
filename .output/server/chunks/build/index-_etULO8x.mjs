import { jsxs, jsx } from 'react/jsx-runtime';
import { UserPlus, MoreHorizontal, Settings, Trash2 } from 'lucide-react';
import * as j from 'react';
import { useState, useMemo } from 'react';
import { Label } from '@radix-ui/react-label';
import { k as Ka, n as Hi, q as Vi, a as $$1, v as vn, x as xn, r as mi, w as wn, s as yn, N as Nn, t as Xt, $ as $e, Q as Qe, z as ze, b as be, I as Ie, u as fa, B as ga, C as ba, D as Qi, F as he, G as yt, f as Yt, L as f } from '../nitro/nitro.mjs';
import { toast } from 'sonner';
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

const $ = j.forwardRef(({ className: i, ...n }, t) => jsx("div", { className: "relative w-full overflow-auto", children: jsx("table", { ref: t, className: f("w-full caption-bottom text-sm", i), ...n }) }));
$.displayName = "Table";
const E = j.forwardRef(({ className: i, ...n }, t) => jsx("thead", { ref: t, className: f("[&_tr]:border-b", i), ...n }));
E.displayName = "TableHeader";
const Y = j.forwardRef(({ className: i, ...n }, t) => jsx("tbody", { ref: t, className: f("[&_tr:last-child]:border-0", i), ...n }));
Y.displayName = "TableBody";
const ue = j.forwardRef(({ className: i, ...n }, t) => jsx("tfoot", { ref: t, className: f("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", i), ...n }));
ue.displayName = "TableFooter";
const C = j.forwardRef(({ className: i, ...n }, t) => jsx("tr", { ref: t, className: f("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", i), ...n }));
C.displayName = "TableRow";
const u = j.forwardRef(({ className: i, ...n }, t) => jsx("th", { ref: t, className: f("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", i), ...n }));
u.displayName = "TableHead";
const g = j.forwardRef(({ className: i, ...n }, t) => jsx("td", { ref: t, className: f("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", i), ...n }));
g.displayName = "TableCell";
const ge = j.forwardRef(({ className: i, ...n }, t) => jsx("caption", { ref: t, className: f("mt-4 text-sm text-muted-foreground", i), ...n }));
ge.displayName = "TableCaption";
const fe = ({ viewMode: i, onChange: n }) => jsxs("div", { className: "border rounded-md p-1 flex", children: [jsxs($$1, { variant: i === "grid" ? "default" : "ghost", size: "sm", className: "rounded-sm", onClick: () => n("grid"), children: [jsxs("div", { className: "grid grid-cols-2 gap-0.5 h-3 w-3 mr-2", children: [jsx("div", { className: "bg-current rounded-sm" }), jsx("div", { className: "bg-current rounded-sm" }), jsx("div", { className: "bg-current rounded-sm" }), jsx("div", { className: "bg-current rounded-sm" })] }), "Grid"] }), jsxs($$1, { variant: i === "table" ? "default" : "ghost", size: "sm", className: "rounded-sm", onClick: () => n("table"), children: [jsxs("div", { className: "flex flex-col justify-between h-3 w-3 mr-2", children: [jsx("div", { className: "bg-current h-0.5 w-full rounded-sm" }), jsx("div", { className: "bg-current h-0.5 w-full rounded-sm" }), jsx("div", { className: "bg-current h-0.5 w-full rounded-sm" })] }), "Table"] })] }), B = [{ id: "gpt-4o", name: "GPT-4o", enabled: true }, { id: "gpt-4o-mini", name: "GPT-4o Mini", enabled: true }, { id: "claude-3.5-sonnet", name: "Claude 3.5 Sonnet", enabled: false }, { id: "claude-3-opus", name: "Claude 3 Opus", enabled: false }, { id: "claude-3-haiku", name: "Claude 3 Haiku", enabled: false }, { id: "gemini-1.5-pro", name: "Gemini 1.5 Pro", enabled: false }, { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash", enabled: false }], ia = function() {
  const { data: n, isRefetching: t } = Ka(), d = n, [f, _] = useState([]), [J, x] = useState(false), [K, b] = useState(false), [N, Q] = useState(null), [M, T] = useState(false), [I, V] = useState("grid"), D = useMemo(() => {
    var _a;
    const s = d == null ? void 0 : d.members.map((r) => ({ id: r.id, invitationId: void 0, email: r.user.email, name: r.user.name, status: "accepted", role: r.role, models: B })), c = (_a = d == null ? void 0 : d.invitations.filter((r) => r.status === "pending")) == null ? void 0 : _a.map((r) => {
      var _a2;
      return { id: void 0, invitationId: r.id, email: r.email, name: (_a2 = r.email.split("@")[0]) != null ? _a2 : "Unkown Name", status: r.status, role: r.role, models: B };
    });
    return [...s != null ? s : [], ...c != null ? c : []];
  }, [d]), q = async () => {
    const s = f.filter((l) => d.invitations.some((c) => c.email.toLowerCase() === l.email.toLowerCase() && c.status === "pending") || d.members.some((c) => c.user.email.toLowerCase() === l.email.toLowerCase()));
    if (s.length > 0) {
      let l = s.map((c) => c.email + ", ").toString();
      l = l.substring(0, l.length - 2), toast.error(`You have already invited ${l}.`);
      return;
    }
    T(true), await Promise.all(f.map(async (l) => {
      await Yt.inviteMember({ email: l.email, role: l.role, organizationId: d.id });
    })), toast.success(`${f.length} new invitations have been sent succesfully - wait for their acceptantance.`), T(false), x(false);
  }, k = async (s, l) => {
    s && !l ? await Yt.removeMember({ memberIdOrEmail: s, organizationId: d.id }) : l && await Yt.cancelInvitation({ invitationId: l });
  }, W = (s) => {
  }, X = () => {
  }, A = (s) => {
    Q({ ...s }), b(true);
  };
  return d ? jsxs("div", { className: "space-y-6 m-8", children: [jsxs("div", { className: "flex items-center justify-between", children: [jsxs("div", { children: [jsxs("h1", { className: "text-3xl font-bold tracking-tight", children: [(d == null ? void 0 : d.name) + " - ", " Team Members"] }), jsx("p", { className: "text-muted-foreground mt-1", children: "Manage your organization's team members and their permissions" })] }), jsxs("div", { className: "flex items-center gap-2", children: [jsx(fe, { viewMode: I, onChange: V }), jsxs(Hi, { open: J, onOpenChange: x, children: [jsx(Vi, { asChild: true, children: jsxs($$1, { children: [jsx(UserPlus, { className: "mr-2 h-4 w-4" }), "Invite Member"] }) }), jsxs(vn, { className: "min-w-1/3 flex flex-col items-center", children: [jsx(xn, { className: "text-center", children: "Invite new members" }), jsx(mi, { invitees: f, setInvitees: _ }), jsxs(wn, { children: [jsx($$1, { variant: "outline", onClick: () => x(false), children: "Cancel" }), jsx($$1, { onClick: q, disabled: f.length === 0 || M, children: M ? "Sending..." : "Send Invitation" })] })] })] })] })] }), jsx(Hi, { open: K, onOpenChange: b, children: jsxs(vn, { className: "sm:max-w-md", children: [jsxs(yn, { children: [jsx(xn, { children: "AI Model Access" }), jsxs(Nn, { children: ["Configure which AI models ", N == null ? void 0 : N.name, " can access"] })] }), jsx("div", { className: "space-y-4 py-2 max-h-[60vh] overflow-y-auto", children: N == null ? void 0 : N.models.map((s) => jsxs("div", { className: "flex items-center justify-between py-2 border-b", children: [jsxs("div", { className: "flex items-center space-x-2", children: [jsx(Xt, { id: `model-${s.id}`, checked: s.enabled, onCheckedChange: () => W(s.id) }), jsx(Label, { htmlFor: `model-${s.id}`, className: "cursor-pointer", children: s.name })] }), s.enabled ? jsx("span", { className: "text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full", children: "Enabled" }) : jsx("span", { className: "text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full", children: "Disabled" })] }, s.id)) }), jsxs(wn, { children: [jsx($$1, { variant: "outline", onClick: () => b(false), children: "Cancel" }), jsx($$1, { onClick: X, children: "Save Changes" })] })] }) }), I === "grid" ? jsxs($e, { children: [jsxs(Qe, { children: [jsx(ze, { children: "Team Members" }), jsxs(be, { children: ["Your organization has ", d.members.length, " members"] })] }), jsx(Ie, { children: jsx("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-3", children: D.map((s) => jsx($e, { className: "overflow-hidden border bg-background", children: jsx(Ie, { className: "p-0", children: jsxs("div", { className: "flex flex-col", children: [jsxs("div", { className: "flex items-center justify-between p-4", children: [jsxs("div", { className: "flex items-center space-x-3", children: [jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary", children: s.name.charAt(0).toUpperCase() }), jsxs("div", { children: [jsxs("p", { className: "font-medium", children: [s.name, " - ", s.email] }), jsxs("div", { className: "flex items-center space-x-2", children: [jsx("span", { className: "text-sm text-muted-foreground", children: s.role }), s.status === "pending" && jsx("span", { className: "text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full", children: "Pending" })] })] })] }), jsxs(fa, { children: [jsx(ga, { asChild: true, children: jsxs($$1, { variant: "ghost", size: "icon", children: [jsx(MoreHorizontal, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Menu" })] }) }), jsxs(ba, { align: "end", children: [jsx(Qi, { children: "Actions" }), jsxs(he, { onClick: () => A(s), children: [jsx(Settings, { className: "mr-2 h-4 w-4" }), "Configure AI Models"] }), jsx(yt, {}), jsxs(he, { className: "text-destructive", onClick: () => k(s.email, s.invitationId), children: [jsx(Trash2, { className: "mr-2 h-4 w-4" }), s.status === "accepted" ? "Remove Member" : "Cancel invitation"] })] })] })] }), jsxs("div", { className: "border-t p-4 bg-muted/40", children: [jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-xs text-muted-foreground", children: "AI Models" }), jsxs("span", { className: "text-xs font-medium", children: [s.models.filter((l) => l.enabled).length, " of ", s.models.length, " enabled"] })] }), jsxs("div", { className: "mt-2 flex flex-wrap gap-1", children: [s.models.filter((l) => l.enabled).slice(0, 3).map((l) => jsx("span", { className: "text-xs bg-primary/10 text-primary px-2 py-1 rounded-full", children: l.name }, l.id)), s.models.filter((l) => l.enabled).length > 3 && jsxs("span", { className: "text-xs bg-primary/10 text-primary px-2 py-1 rounded-full", children: ["+", s.models.filter((l) => l.enabled).length - 3, " more"] }), s.models.filter((l) => l.enabled).length === 0 && jsx("span", { className: "text-xs text-muted-foreground", children: "No models enabled" })] })] })] }) }) }, s.email)) }) })] }) : jsxs($e, { children: [jsxs(Qe, { children: [jsx(ze, { children: "Team Members" }), jsxs(be, { children: ["Your organization has ", d.members.length, " members"] })] }), jsx(Ie, { children: jsxs($, { children: [jsx(E, { children: jsxs(C, { children: [jsx(u, { children: "Name" }), jsx(u, { children: "Role" }), jsx(u, { children: "Status" }), jsx(u, { children: "AI Models" }), jsx(u, { className: "text-right", children: "Actions" })] }) }), jsx(Y, { children: D.map((s) => jsxs(C, { children: [jsx(g, { className: "font-medium", children: jsxs("div", { className: "flex items-center space-x-2", children: [jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm", children: s.name.charAt(0).toUpperCase() }), jsxs("span", { children: [s.name, " - ", s.email] })] }) }), jsx(g, { children: s.role }), jsx(g, { children: s.status === "accepted" ? jsxs("span", { className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800", children: [jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-green-600 mr-1" }), "Active"] }) : jsxs("span", { className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800", children: [jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-amber-600 mr-1" }), "Pending"] }) }), jsx(g, { children: jsxs("div", { className: "flex items-center space-x-1", children: [jsx("span", { className: "text-sm font-medium", children: s.models.filter((l) => l.enabled).length }), jsx("span", { className: "text-sm text-muted-foreground", children: "enabled" })] }) }), jsx(g, { className: "text-right", children: jsxs("div", { className: "flex items-center justify-end space-x-1", children: [jsxs($$1, { variant: "ghost", size: "sm", onClick: () => A(s), children: [jsx(Settings, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Configure AI Models" })] }), jsxs($$1, { variant: "ghost", size: "sm", onClick: () => k(s.email, s.invitationId), children: [jsx(Trash2, { className: "h-4 w-4 text-destructive" }), jsx("span", { className: "sr-only", children: "Delete" })] })] }) })] }, s.id)) })] }) })] })] }) : jsx("div", { className: "flex items-center justify-center h-full", children: jsx("div", { className: "animate-pulse", children: "Loading..." }) });
};

export { ia as component };
//# sourceMappingURL=index-_etULO8x.mjs.map
