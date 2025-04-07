import { jsxs, jsx } from 'react/jsx-runtime';
import { useAtom, useSetAtom } from 'jotai';
import { ag as Ta, E as Es, a4 as fe, O, u as ue, v, y as ye$1, d as de, p as la, x as Oe, z as je, M as Me, n as ne, k as ke, i as ie, q as Os, a2 as te, e as ee, a3 as Nt, a1 as mt } from '../nitro/nitro.mjs';
import { Home, ChevronRight, Briefcase, Settings, Lock, FileText, Users, FolderPlus, RefreshCw, PlusCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { N as Ne, p as pe, x as xe, y as ye$2, l as le } from './collapsible-g0t8x5gf.mjs';
import { toast } from 'sonner';
import { b, h, f, p, u, y, g, v as v$1 } from './dialog-BARnul6K.mjs';
import { d } from './checkbox-C_SO_KyM.mjs';
import { i } from './avatar-pWQn_6aq.mjs';
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
import '@radix-ui/react-tabs';
import '@radix-ui/react-collapsible';
import '@radix-ui/react-checkbox';
import '@radix-ui/react-avatar';

function _({ teamspaceId: u$1, children: n }) {
  const v = useNavigate(), [o, g$1] = useState(false), c = useSetAtom(Es), b$1 = useSetAtom(Os), [a, d$1] = useState({ name: "", description: "", context: "", isPrivate: false }), m = (h) => {
    d$1({ ...a, [h.target.name]: h.target.value });
  }, t = (h) => {
    d$1({ ...a, isPrivate: h });
  };
  return jsxs(b, { children: [jsx(h, { asChild: true, children: n || jsxs(O, { size: "sm", className: "bg-indigo-600 hover:bg-indigo-700 text-white hover:cursor-pointer", children: [jsx(FolderPlus, { className: "h-4 w-4 mr-2" }), " New Project"] }) }), jsx(f, { className: "sm:max-w-[500px]", children: jsxs("form", { onSubmit: async (h) => {
    if (h.preventDefault(), !a.name.trim()) {
      toast.error("Project name is required");
      return;
    }
    g$1(true);
    try {
      const w = fe(), f = (await w.auth.handler()).userID, { data: p } = await w.chatrooms.createProject({ teamspaceId: u$1, name: a.name, description: a.description, context: a.context, creatorId: f, isPrivate: a.isPrivate, members: [{ projectId: "", userId: f, role: "OWNER", invitedByUserId: f, hasAccepted: true }] });
      b$1(p.id), c((I) => I.map((C) => C.id === u$1 ? { ...C, projects: [...C.projects, p] } : C)), toast.success("Project created successfully"), v({ to: "/project/$projectId", params: { projectId: p.id }, viewTransition: true });
    } catch (w) {
      console.error("Error creating project:", w), toast.error("Failed to create project");
    } finally {
      g$1(false);
    }
  }, children: [jsxs(p, { children: [jsx("div", { className: "h-1.5 bg-emerald-500 w-full absolute top-0 left-0 rounded-t-lg" }), jsx(u, { className: "text-xl mt-2", children: "Create New Project" }), jsx(y, { children: "Create a project in this teamspace to organize your work." })] }), jsxs("div", { className: "grid gap-4 py-4", children: [jsxs("div", { className: "grid gap-2", children: [jsxs(te, { htmlFor: "project-name", children: ["Project Name ", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(ee, { id: "project-name", name: "name", value: a.name, onChange: m, placeholder: "e.g. Marketing Campaign", required: true })] }), jsxs("div", { className: "grid gap-2", children: [jsx(te, { htmlFor: "project-description", children: "Description" }), jsx(Nt, { id: "project-description", name: "description", value: a.description, onChange: m, placeholder: "What is this project about?" })] }), jsxs("div", { className: "grid gap-2", children: [jsx(te, { htmlFor: "project-context", children: "Context" }), jsx(Nt, { id: "project-context", name: "context", value: a.context, onChange: m, placeholder: "Any specific context for this project" })] }), jsxs("div", { className: "flex items-center space-x-2", children: [jsx(d, { id: "isPrivate", checked: a.isPrivate, onCheckedChange: t }), jsxs("div", { className: "grid gap-1.5 leading-none", children: [jsxs(te, { htmlFor: "isPrivate", className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center", children: [jsx(Lock, { className: "h-3.5 w-3.5 mr-1.5 text-muted-foreground" }), "Make project private"] }), jsx("p", { className: "text-xs text-muted-foreground", children: "Private projects are only visible to invited members" })] })] })] }), jsxs(g, { children: [jsx(v$1, { asChild: true, children: jsx(O, { variant: "outline", type: "button", disabled: o, children: "Cancel" }) }), jsx(O, { type: "submit", className: "bg-emerald-600 hover:bg-emerald-700", disabled: o, children: o ? "Creating..." : "Create Project" })] })] }) })] });
}
const J = (u) => {
  switch (u) {
    case "OWNER":
      return "bg-green-100 text-green-800 border-green-200";
    case "ADMIN":
      return "bg-red-100 text-red-800 border-red-200";
    case "CONTRIBUTOR":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "VIEWER":
      return "bg-gray-100 text-gray-800 border-gray-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};
function ye({ members: u }) {
  const [n, v] = useState(false), [o, g] = useState(false), c = 5, b = u.filter((s, f, p) => f === p.findIndex((I) => {
    var _a, _b;
    return ((_a = I.user) == null ? void 0 : _a.id) === ((_b = s.user) == null ? void 0 : _b.id);
  })), a = b.filter((s) => !s.hasLeft), d = b.filter((s) => s.hasLeft), m = (s, f) => {
    const p = { OWNER: 0, ADMIN: 1, CONTRIBUTOR: 2, VIEWER: 3 };
    return (p[s.role] || 4) - (p[f.role] || 4);
  }, t = [...a].sort(m), i$1 = [...d].sort(m), h = n ? t : t.slice(0, a.length >= c ? c : a.length), w = a.length > c && !n;
  return jsxs("div", { className: "space-y-3", children: [jsx("div", { children: h.map((s) => {
    var _a, _b, _c, _d, _e, _f;
    return jsx("div", { className: "py-1.5", children: jsxs("div", { className: "flex items-center justify-between group", children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx(i, { className: "h-7 w-7", children: ((_a = s.user) == null ? void 0 : _a.image) ? jsx("img", { src: s.user.image, alt: ((_b = s.user) == null ? void 0 : _b.name) || "User" }) : jsx("div", { className: "bg-gray-200 h-full w-full flex items-center justify-center text-gray-700 text-xs", children: (((_c = s.user) == null ? void 0 : _c.name) || "U").charAt(0) }) }), jsx(la, { children: jsxs(Oe, { children: [jsx(je, { asChild: true, children: jsx("span", { className: "text-sm font-medium truncate max-w-[120px]", children: ((_d = s.user) == null ? void 0 : _d.name) || "Unknown User" }) }), jsxs(Me, { children: [jsx("p", { children: ((_e = s.user) == null ? void 0 : _e.name) || "Unknown User" }), jsx("p", { className: "text-xs text-muted-foreground", children: (_f = s.user) == null ? void 0 : _f.email })] })] }) })] }), jsx(mt, { className: J(s.role), children: s.role })] }) }, s.id);
  }) }), w && jsx(O, { variant: "ghost", size: "sm", className: "w-full text-xs h-7", onClick: () => v(true), children: jsxs("span", { className: "flex items-center", children: ["Show ", a.length - c, " More ", jsx(ChevronDown, { className: "ml-1 h-3 w-3" })] }) }), n && a.length > c && jsx(O, { variant: "ghost", size: "sm", className: "w-full text-xs h-7", onClick: () => v(false), children: jsxs("span", { className: "flex items-center", children: ["Show Less ", jsx(ChevronUp, { className: "ml-1 h-3 w-3" })] }) }), d.length > 0 && jsxs(xe, { open: o, onOpenChange: g, className: "mt-3", children: [jsxs("div", { className: "flex items-center text-xs text-muted-foreground", children: [jsx("div", { className: "h-px bg-border flex-grow mr-2" }), jsx(ye$2, { asChild: true, children: jsxs("button", { className: "flex items-center gap-1 px-2 py-1 rounded-sm hover:bg-muted/50 transition-colors", children: [jsxs("span", { children: ["Former Members (", d.length, ")"] }), o ? jsx(ChevronUp, { className: "h-3 w-3" }) : jsx(ChevronDown, { className: "h-3 w-3" })] }) }), jsx("div", { className: "h-px bg-border flex-grow ml-2" })] }), jsx(le, { className: "pt-2", children: jsx("div", { className: "space-y-1.5", children: i$1.map((s) => {
    var _a, _b, _c, _d, _e, _f;
    return jsx("div", { children: jsxs("div", { className: "relative flex items-center justify-between group py-1.5", children: [jsx("div", { className: "absolute inset-0 rounded-md bg-muted/30 pointer-events-none" }), jsxs("div", { className: "flex items-center gap-2 z-10", children: [jsxs("div", { className: "relative", children: [jsx(i, { className: "h-7 w-7", children: ((_a = s.user) == null ? void 0 : _a.image) ? jsx("img", { src: s.user.image, alt: ((_b = s.user) == null ? void 0 : _b.name) || "User", className: "filter grayscale" }) : jsx("div", { className: "bg-gray-200 h-full w-full flex items-center justify-center text-gray-700 text-xs", children: (((_c = s.user) == null ? void 0 : _c.name) || "U").charAt(0) }) }), jsx("div", { className: "absolute -bottom-1 -right-1 rounded-full w-3 h-3 bg-muted border border-background flex items-center justify-center", children: jsx("span", { className: "text-[8px]", children: "\xD7" }) })] }), jsx(la, { children: jsxs(Oe, { children: [jsx(je, { asChild: true, children: jsx("span", { className: "text-sm font-medium truncate max-w-[120px] text-muted-foreground", children: ((_d = s.user) == null ? void 0 : _d.name) || "Unknown User" }) }), jsxs(Me, { children: [jsx("p", { children: ((_e = s.user) == null ? void 0 : _e.name) || "Unknown User" }), jsx("p", { className: "text-xs text-muted-foreground", children: (_f = s.user) == null ? void 0 : _f.email }), jsx("p", { className: "text-xs text-red-500 mt-1", children: "No longer a member" })] })] }) })] }), jsx(mt, { className: `${J(s.role)} opacity-70`, children: s.role })] }) }, s.id);
  }) }) })] })] });
}
const xr = function() {
  var _a, _b;
  const { teamspaceId: n } = Ta.useParams(), [v$1, o] = useAtom(Es), [g, c] = useState(false), [b, a] = useState(true), [d, m] = useState("");
  useEffect(() => {
    fe().auth.handler().then(({ userID: i }) => {
      m(i);
    });
  }, []);
  const t = v$1.find((i) => i.id === n);
  return useEffect(() => {
    t && a(false);
  }, [t]), b ? jsxs("div", { className: "flex-1 flex flex-col", children: [jsx("div", { className: "h-1.5 bg-gray-200 w-full" }), jsxs("div", { className: "p-6 max-w-5xl mx-auto w-full flex-1", children: [jsxs("div", { className: "mb-8 relative", children: [jsx(Ne, { className: "h-10 w-60 mb-2" }), jsx(Ne, { className: "h-4 w-full max-w-md mb-4" })] }), jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [jsx("div", { className: "md:col-span-2 space-y-6", children: jsxs("div", { children: [jsx("div", { className: "flex justify-between items-center mb-4", children: jsx(Ne, { className: "h-8 w-40" }) }), jsxs("div", { className: "space-y-3", children: [jsx(Ne, { className: "h-24 w-full" }), jsx(Ne, { className: "h-24 w-full" })] })] }) }), jsxs("div", { className: "space-y-6", children: [jsx(Ne, { className: "h-60 w-full" }), jsx(Ne, { className: "h-60 w-full" })] })] })] })] }) : t ? jsxs("div", { className: "flex-1 flex flex-col", children: [jsx("div", { className: "h-1.5 bg-indigo-500 w-full" }), jsxs("div", { className: "p-6 max-w-5xl mx-auto w-full flex-1", children: [jsxs("div", { className: "flex items-center text-sm text-muted-foreground mb-4", children: [jsxs(Link, { to: "/chat", className: "flex items-center hover:text-foreground transition-colors", children: [jsx(Home, { className: "h-3.5 w-3.5 mr-1" }), "Home"] }), jsx(ChevronRight, { className: "h-3.5 w-3.5 mx-1.5" }), jsxs("span", { className: "font-medium text-foreground flex items-center", children: [jsx(Briefcase, { className: "h-3.5 w-3.5 mr-1.5" }), "Teamspace"] })] }), jsxs("div", { className: "mb-8 relative", children: [jsxs("div", { className: "flex items-center gap-3 mb-2", children: [jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700", children: jsx(Briefcase, { className: "h-5 w-5" }) }), jsxs("div", { children: [jsx("h1", { className: "text-3xl font-bold", children: t.name }), jsxs("div", { className: "flex items-center mt-1", children: [jsx("span", { className: "inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20", children: "Teamspace" }), t.members && t.members.length > 0 && jsxs("span", { className: "ml-2 text-sm text-muted-foreground", children: [t.members.length, " member", t.members.length !== 1 ? "s" : ""] })] })] })] }), jsx("div", { className: "mt-2", children: jsx("p", { className: "text-muted-foreground", children: t.description || "No description provided" }) }), jsx("div", { className: "absolute top-0 right-0", children: jsxs(O, { size: "sm", variant: "outline", children: [jsx(Settings, { className: "h-4 w-4 mr-2" }), " Teamspace Settings"] }) })] }), jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [jsxs("div", { className: "md:col-span-2 space-y-6", children: [jsxs("div", { children: [jsxs("div", { className: "flex justify-between items-center mb-4", children: [jsx("h2", { className: "text-xl font-semibold", children: "Projects" }), jsx(_, { teamspaceId: t.id })] }), t.projects && t.projects.length > 0 ? jsx("div", { className: "space-y-3", children: t.projects.map((i) => {
    var _a2, _b2, _c, _d;
    return jsx(ue, { className: v("cursor-pointer transition-all border-l-4 border-l-transparent", "hover:shadow-md hover:border-l-indigo-500 hover:bg-muted/30"), children: jsxs(Link, { to: "/project/$projectId", params: { projectId: i.id }, className: "block", children: [jsxs(ye$1, { className: "pb-2", children: [jsxs(de, { className: "text-lg flex items-center", children: [i.name, i.isPrivate && jsx(la, { children: jsxs(Oe, { children: [jsx(je, { asChild: true, children: jsx("span", { children: jsx(Lock, { className: "h-3 w-3 ml-2 text-red-500" }) }) }), jsx(Me, { children: jsx("p", { children: "Private" }) })] }) })] }), jsx(ne, { children: i.description || "No description" })] }), jsx(ke, { className: "pt-2 text-sm text-muted-foreground", children: jsxs("div", { className: "flex items-center gap-4", children: [jsxs("div", { className: "flex items-center", children: [jsx(FileText, { className: "h-4 w-4 mr-1" }), ((_a2 = i.chatrooms) == null ? void 0 : _a2.length) || 0, " chat", ((_b2 = i.chatrooms) == null ? void 0 : _b2.length) !== 1 ? "s" : ""] }), jsxs("div", { className: "flex items-center", children: [jsx(Users, { className: "h-4 w-4 mr-1" }), ((_c = i.members) == null ? void 0 : _c.length) || 1, " member", ((_d = i.members) == null ? void 0 : _d.length) !== 1 ? "s" : ""] })] }) })] }) }, i.id);
  }) }) : jsxs("div", { className: "border rounded-lg p-8 text-center bg-muted/20", children: [jsx("h3", { className: "font-medium mb-2", children: "No projects yet" }), jsx("p", { className: "text-muted-foreground mb-4", children: "Start by creating your first project in this teamspace" }), jsx(_, { teamspaceId: n, children: jsxs(O, { variant: "outline", children: [jsx(FolderPlus, { className: "h-4 w-4 mr-2" }), " Create Project"] }) })] })] }), jsxs("div", { children: [jsx("h2", { className: "text-xl font-semibold mb-4", children: "Recent Activity" }), jsx("div", { className: "border rounded-lg p-4 bg-muted/20 text-center", children: jsx("p", { className: "text-muted-foreground", children: "Activity feed coming soon" }) })] })] }), jsxs("div", { className: "space-y-6", children: [jsxs(ue, { className: "border-t-4 border-t-indigo-500", children: [jsxs(ye$1, { children: [jsxs(de, { className: "flex items-center justify-between", children: [jsx("span", { children: "Teamspace Context" }), jsx(O, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0 hover:cursor-pointer", onClick: () => c(!g), children: jsx(Settings, { className: "h-4 w-4" }) })] }), jsx(ne, { children: "Add context about what this teamspace is for" })] }), jsx(ie, { children: g ? jsxs("div", { className: "space-y-4", children: [jsx("textarea", { className: "w-full min-h-[150px] p-3 border rounded-md", placeholder: "Describe what this teamspace is used for...", value: t.context }), jsxs("div", { className: "flex justify-end space-x-2", children: [jsx(O, { variant: "outline", size: "sm", onClick: () => c(false), children: "Cancel" }), jsx(O, { size: "sm", onClick: () => c(false), children: "Save" })] })] }) : jsx("div", { className: "text-sm", children: jsx("p", { children: t.context }) }) })] }), jsxs(ue, { className: "border-t-4 border-t-indigo-500", children: [jsxs(ye$1, { children: [jsx(de, { children: "Members" }), jsx(ne, { children: "People with access to this teamspace" })] }), jsx(ie, { children: t.members && t.members.length > 0 ? jsx(ye, { members: t.members }) : jsx("div", { className: "text-sm text-muted-foreground", children: "Only you have access to this teamspace" }) }), jsx(ke, { children: jsx(pe, { type: "teamspace", teamspaceId: t.id, members: t.members || [], userId: d, onMembersChanged: () => {
    fe().chatrooms.getTeamspaces().then(({ data: i }) => {
      i && o(i);
    });
  }, children: jsxs(O, { size: "sm", variant: "outline", className: "w-full border-indigo-600/20 text-indigo-700 hover:bg-indigo-50 hover:cursor-pointer", children: [jsx(Users, { className: "h-4 w-4 mr-2" }), " Manage Members"] }) }) })] }), jsxs(ue, { className: "border-t-4 border-t-indigo-500", children: [jsx(ye$1, { children: jsxs(de, { className: "flex items-center justify-between", children: [jsx("span", { children: "Teamspace Stats" }), jsx(O, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", children: jsx(RefreshCw, { className: "h-4 w-4" }) })] }) }), jsx(ie, { children: jsxs("div", { className: "space-y-2", children: [jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-muted-foreground", children: "Projects" }), jsx("span", { className: "font-medium", children: ((_a = t.projects) == null ? void 0 : _a.length) || 0 })] }), jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-muted-foreground", children: "Members" }), jsx("span", { className: "font-medium", children: ((_b = t.members) == null ? void 0 : _b.length) || 0 })] }), jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-muted-foreground", children: "Created" }), jsx("span", { className: "font-medium", children: new Date(t.createdAt).toLocaleDateString() })] })] }) })] })] })] })] })] }) : jsxs("div", { className: "flex-1 flex flex-col items-center justify-center p-8 text-center", children: [jsx("h2", { className: "text-2xl font-bold mb-4", children: "No teamspace selected" }), jsx("p", { className: "text-muted-foreground mb-6", children: "Select a teamspace from the sidebar to view its details and projects" }), jsxs(O, { variant: "outline", children: [jsx(PlusCircle, { className: "h-4 w-4 mr-2" }), " Create New Teamspace"] })] });
};

export { xr as component };
//# sourceMappingURL=_teamspaceId-DSVOHVhG.mjs.map
