import { jsxs, jsx } from 'react/jsx-runtime';
import { Outlet } from '@tanstack/react-router';
import { g as g$1, W as W$1 } from '../nitro/nitro.mjs';
import * as l from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { MessageCircle, SquarePen, PanelLeftIcon, XIcon } from 'lucide-react';
import * as h from '@radix-ui/react-dialog';
import * as g from '@radix-ui/react-tooltip';
import * as ae from '@radix-ui/react-separator';
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
import '@tanstack/react-router-devtools';
import 'uuid';
import 'framer-motion';
import 'clsx';
import 'tailwind-merge';
import 'motion/react';
import 'marked';
import 'react-markdown';
import 'remark-gfm';
import '@radix-ui/react-scroll-area';
import 'better-auth/react';
import 'better-auth/client/plugins';
import 'node:stream';
import 'isbot';
import 'react-dom/server';

const M = 768;
function re() {
  const [t, a] = l.useState(void 0);
  return l.useEffect(() => {
    const i = window.matchMedia(`(max-width: ${M - 1}px)`), o = () => {
      a(window.innerWidth < M);
    };
    return i.addEventListener("change", o), a(window.innerWidth < M), () => i.removeEventListener("change", o);
  }, []), !!t;
}
const ie = l.forwardRef(({ className: t, type: a, ...i }, o) => jsx("input", { type: a, className: g$1("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t), ref: o, ...i }));
ie.displayName = "Input";
function R({ className: t, orientation: a = "horizontal", decorative: i = true, ...o }) {
  return jsx(ae.Root, { "data-slot": "separator-root", decorative: i, orientation: a, className: g$1("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", t), ...o });
}
function ne({ ...t }) {
  return jsx(h.Root, { "data-slot": "sheet", ...t });
}
function oe({ ...t }) {
  return jsx(h.Portal, { "data-slot": "sheet-portal", ...t });
}
function se({ className: t, ...a }) {
  return jsx(h.Overlay, { "data-slot": "sheet-overlay", className: g$1("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t), ...a });
}
function le({ className: t, children: a, side: i = "right", ...o }) {
  return jsxs(oe, { children: [jsx(se, {}), jsxs(h.Content, { "data-slot": "sheet-content", className: g$1("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", i === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", i === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", i === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", i === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", t), ...o, children: [a, jsxs(h.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [jsx(XIcon, { className: "size-4" }), jsx("span", { className: "sr-only", children: "Close" })] })] })] });
}
function de({ className: t, ...a }) {
  return jsx("div", { "data-slot": "sheet-header", className: g$1("flex flex-col gap-1.5 p-4", t), ...a });
}
function ce({ className: t, ...a }) {
  return jsx(h.Title, { "data-slot": "sheet-title", className: g$1("text-foreground font-semibold tracking-tight", t), ...a });
}
function ue({ className: t, ...a }) {
  return jsx(h.Description, { "data-slot": "sheet-description", className: g$1("text-muted-foreground text-sm", t), ...a });
}
function P({ delayDuration: t = 0, ...a }) {
  return jsx(g.Provider, { "data-slot": "tooltip-provider", delayDuration: t, ...a });
}
function j({ ...t }) {
  return jsx(P, { children: jsx(g.Root, { "data-slot": "tooltip", ...t }) });
}
function L({ ...t }) {
  return jsx(g.Trigger, { "data-slot": "tooltip-trigger", ...t });
}
function H({ className: t, sideOffset: a = 4, children: i, ...o }) {
  return jsx(g.Portal, { children: jsxs(g.Content, { "data-slot": "tooltip-content", sideOffset: a, className: g$1("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-sm rounded-md px-3 py-1.5 text-xs", t), ...o, children: [i, jsx(g.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })] }) });
}
const fe = "sidebar_state", me = 60 * 60 * 24 * 7, he = "16rem", pe = "18rem", be = "3rem", ge = "b", K = l.createContext(null);
function z() {
  const t = l.useContext(K);
  if (!t) throw new Error("useSidebar must be used within a SidebarProvider.");
  return t;
}
const T = l.forwardRef(({ defaultOpen: t = true, open: a, onOpenChange: i, className: o, style: s, children: f, ...v }, p) => {
  const c = re(), [b, m] = l.useState(false), [F, U] = l.useState(t), x = a != null ? a : F, N = l.useCallback((d) => {
    const u = typeof d == "function" ? d(x) : d;
    i ? i(u) : U(u), document.cookie = `${fe}=${u}; path=/; max-age=${me}`;
  }, [i, x]), y = l.useCallback(() => c ? m((d) => !d) : N((d) => !d), [c, N, m]);
  l.useEffect(() => {
    const d = (u) => {
      u.key === ge && (u.metaKey || u.ctrlKey) && (u.preventDefault(), y());
    };
    return window.addEventListener("keydown", d), () => window.removeEventListener("keydown", d);
  }, [y]);
  const E = x ? "expanded" : "collapsed", J = l.useMemo(() => ({ state: E, open: x, setOpen: N, isMobile: c, openMobile: b, setOpenMobile: m, toggleSidebar: y }), [E, x, N, c, b, m, y]);
  return jsx(K.Provider, { value: J, children: jsx(P, { delayDuration: 0, children: jsx("div", { "data-slot": "sidebar-wrapper", style: { "--sidebar-width": he, "--sidebar-width-icon": be, ...s }, className: g$1("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", o), ref: p, ...v, children: f }) }) });
});
T.displayName = "SidebarProvider";
function ve({ side: t = "left", variant: a = "sidebar", collapsible: i = "offcanvas", className: o, children: s, ...f }) {
  const { isMobile: v, state: p, openMobile: c, setOpenMobile: b } = z();
  return i === "none" ? jsx("div", { "data-slot": "sidebar", className: g$1("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", o), ...f, children: s }) : v ? jsxs(ne, { open: c, onOpenChange: b, ...f, children: [jsxs(de, { className: "sr-only", children: [jsx(ce, { children: "Sidebar" }), jsx(ue, { children: "Displays the mobile sidebar." })] }), jsx(le, { "data-sidebar": "sidebar", "data-slot": "sidebar", "data-mobile": "true", className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden", style: { "--sidebar-width": pe }, side: t, children: jsx("div", { className: "flex h-full w-full flex-col", children: s }) })] }) : jsxs("div", { className: "group peer text-sidebar-foreground hidden md:block", "data-state": p, "data-collapsible": p === "collapsed" ? i : "", "data-variant": a, "data-side": t, "data-slot": "sidebar", children: [jsx("div", { className: g$1("relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", a === "floating" || a === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)") }), jsx("div", { className: g$1("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", t === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", a === "floating" || a === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", o), ...f, children: jsx("div", { "data-sidebar": "sidebar", className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm", children: s }) })] });
}
function W({ className: t, onClick: a, ...i }) {
  const { toggleSidebar: o } = z();
  return jsxs(W$1, { "data-sidebar": "trigger", "data-slot": "sidebar-trigger", variant: "ghost", size: "icon", className: g$1("h-7 w-7", t), onClick: (s) => {
    a == null ? void 0 : a(s), o();
  }, ...i, children: [jsx(PanelLeftIcon, {}), jsx("span", { className: "sr-only", children: "Toggle Sidebar" })] });
}
function xe({ className: t, ...a }) {
  const { toggleSidebar: i } = z();
  return jsx("button", { "data-sidebar": "rail", "data-slot": "sidebar-rail", "aria-label": "Toggle Sidebar", tabIndex: -1, onClick: i, title: "Toggle Sidebar", className: g$1("hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", t), ...a });
}
function $({ className: t, ...a }) {
  return jsx("main", { "data-slot": "sidebar-inset", className: g$1("bg-background relative flex min-h-svh flex-1 flex-col", "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", t), ...a });
}
function we({ className: t, ...a }) {
  return jsx("div", { "data-slot": "sidebar-header", "data-sidebar": "header", className: g$1("flex flex-col gap-2 p-2", t), ...a });
}
function Ne({ className: t, ...a }) {
  return jsx("div", { "data-slot": "sidebar-footer", "data-sidebar": "footer", className: g$1("flex flex-col gap-2 p-2", t), ...a });
}
function ye({ className: t, ...a }) {
  return jsx("div", { "data-slot": "sidebar-content", "data-sidebar": "content", className: g$1("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", t), ...a });
}
function S({ className: t, ...a }) {
  return jsx("div", { "data-slot": "sidebar-group", "data-sidebar": "group", className: g$1("relative flex w-full min-w-0 flex-col p-2", t), ...a });
}
function C({ className: t, asChild: a = false, ...i }) {
  return jsx(a ? Slot : "div", { "data-slot": "sidebar-group-label", "data-sidebar": "group-label", className: g$1("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", t), ...i });
}
function k({ className: t, ...a }) {
  return jsx("ul", { "data-slot": "sidebar-menu", "data-sidebar": "menu", className: g$1("flex w-full min-w-0 flex-col gap-1", t), ...a });
}
function D({ className: t, ...a }) {
  return jsx("li", { "data-slot": "sidebar-menu-item", "data-sidebar": "menu-item", className: g$1("group/menu-item relative", t), ...a });
}
const Se = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", { variants: { variant: { default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground", outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]" }, size: { default: "h-8 text-sm", sm: "h-7 text-xs", lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!" } }, defaultVariants: { variant: "default", size: "default" } });
function _({ asChild: t = false, isActive: a = false, variant: i = "default", size: o = "default", tooltip: s, className: f, ...v }) {
  const p = t ? Slot : "button", { isMobile: c, state: b } = z(), m = jsx(p, { "data-slot": "sidebar-menu-button", "data-sidebar": "menu-button", "data-size": o, "data-active": a, className: g$1(Se({ variant: i, size: o }), f), ...v });
  return s ? (typeof s == "string" && (s = { children: s }), jsxs(j, { children: [jsx(L, { asChild: true, children: m }), jsx(H, { side: "right", align: "center", hidden: b !== "collapsed" || c, ...s })] })) : m;
}
const I = { recentChats: [{ title: "Project Planning Assistant", date: new Date(2024, 2, 20), url: "#" }, { title: "Code Review Helper", date: new Date(2024, 2, 19), url: "#" }, { title: "Bug Analysis Chat", date: new Date(2024, 2, 18), url: "#" }], lastWeekChats: [{ title: "API Design Discussion", date: new Date(2024, 2, 15), url: "#" }, { title: "Database Schema Planning", date: new Date(2024, 2, 14), url: "#" }], lastMonthChats: [{ title: "Architecture Overview", date: new Date(2024, 1, 28), url: "#" }, { title: "Performance Optimization", date: new Date(2024, 1, 25), url: "#" }], previousChats: [{ title: "Initial Project Setup", date: new Date(2023, 11, 15), url: "#" }, { title: "Requirements Analysis", date: new Date(2023, 11, 10), url: "#" }] };
function q({ ...t }) {
  return jsxs(ve, { className: "border-r-0", ...t, children: [jsx(we, { children: jsxs("div", { className: "flex items-center justify-between p-2", children: [jsxs("div", { className: "flex items-center gap-3", children: [jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary", children: jsx(MessageCircle, { className: "h-5 w-5 text-primary-foreground" }) }), jsx("span", { className: "text-lg font-semibold", children: "simple-ai" })] }), jsx(P, { children: jsxs(j, { children: [jsx(L, { asChild: true, children: jsxs(W$1, { size: "icon", variant: "ghost", children: [jsx(SquarePen, { className: "h-5 w-5" }), jsx("span", { className: "sr-only", children: "New Chat" })] }) }), jsx(H, { children: jsx("p", { children: "New Chat" }) })] }) })] }) }), jsx(ye, { children: jsxs("div", { className: "flex flex-col gap-4", children: [jsxs(S, { children: [jsx(C, { children: "Recent" }), jsx(k, { children: I.recentChats.map((a) => jsx(D, { children: jsxs(_, { className: "w-full justify-start", children: [jsx(MessageCircle, { className: "mr-2 h-4 w-4" }), a.title] }) }, a.title)) })] }), jsxs(S, { children: [jsx(C, { children: "Previous 7 Days" }), jsx(k, { children: I.lastWeekChats.map((a) => jsx(D, { children: jsxs(_, { className: "w-full justify-start", children: [jsx(MessageCircle, { className: "mr-2 h-4 w-4" }), a.title] }) }, a.title)) })] }), jsxs(S, { children: [jsx(C, { children: "Previous 30 Days" }), jsx(k, { children: I.lastMonthChats.map((a) => jsx(D, { children: jsxs(_, { className: "w-full justify-start", children: [jsx(MessageCircle, { className: "mr-2 h-4 w-4" }), a.title] }) }, a.title)) })] }), jsxs(S, { children: [jsx(C, { children: "Previous Years" }), jsx(k, { children: I.previousChats.map((a) => jsx(D, { children: jsxs(_, { className: "w-full justify-start", children: [jsx(MessageCircle, { className: "mr-2 h-4 w-4" }), a.title] }) }, a.title)) })] })] }) }), jsx(xe, {}), jsx(Ne, { className: "flex items-center" })] });
}
function G({ ...t }) {
  return jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...t });
}
function V({ className: t, ...a }) {
  return jsx("ol", { "data-slot": "breadcrumb-list", className: g$1("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", t), ...a });
}
function X({ className: t, ...a }) {
  return jsx("li", { "data-slot": "breadcrumb-item", className: g$1("inline-flex items-center gap-1.5", t), ...a });
}
function Y({ className: t, ...a }) {
  return jsx("span", { "data-slot": "breadcrumb-page", role: "link", "aria-disabled": "true", "aria-current": "page", className: g$1("text-foreground font-normal", t), ...a });
}
function Xe() {
  return jsxs(T, { children: [jsx(q, {}), jsxs($, { className: "flex flex-col h-screen overflow-y-auto", children: [jsx("header", { className: "sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background", children: jsxs("div", { className: "flex flex-1 items-center gap-2 px-3", children: [jsx(W, {}), jsx(R, { orientation: "vertical", className: "mr-2 h-4" }), jsx(G, { children: jsx(V, { children: jsx(X, { children: jsx(Y, { className: "line-clamp-1", children: "Project Management & Task Tracking" }) }) }) })] }) }), jsx("div", { className: "h-full overflow-y-hidden", children: jsx(Outlet, {}) })] })] });
}
const Ye = function() {
  return jsxs(T, { children: [jsx(q, {}), jsxs($, { className: "flex flex-col h-screen overflow-y-auto", children: [jsx("header", { className: "sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background", children: jsxs("div", { className: "flex flex-1 items-center gap-2 px-3", children: [jsx(W, {}), jsx(R, { orientation: "vertical", className: "mr-2 h-4" }), jsx(G, { children: jsx(V, { children: jsx(X, { children: jsx(Y, { className: "line-clamp-1", children: "Project Management & Task Tracking" }) }) }) })] }) }), jsx("div", { className: "h-full overflow-y-hidden", children: jsx(Outlet, {}) })] })] });
};

export { Ye as component, Xe as default };
//# sourceMappingURL=_layout-C0-Ejm-I.mjs.map
