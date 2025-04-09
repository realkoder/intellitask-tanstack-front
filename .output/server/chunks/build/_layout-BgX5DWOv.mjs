import { jsx, jsxs } from 'react/jsx-runtime';
import { createFileRoute, Outlet, useNavigate, Link, useRouter } from '@tanstack/react-router';
import { r, W, R, n as ne, e as ee$1, a as ae$1, t as te, o as oe$1, x as xe, w as we, U, Y as Y$1, P, Z as Z$1, d as de$1, l as le, c as ce$1, u as ue, h as he, b as be, i as ie, v as ve, m as me, g as ge, F, $, J as J$1, Q, X as X$1, f as re, s as se, j as fe, k as j$1, B } from './index-BPPryd0z.mjs';
import * as j from 'react';
import { useEffect, useState, useRef, useMemo } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { X, Check, Search, SquarePen, PanelLeftIcon, ChevronDown, Factory, Users, Settings, Server, Plus, ChevronLeft, ChevronRight, ChevronUp, Briefcase, MessageSquare, ChevronsUpDown, Sparkles, BadgeCheck, CreditCard, Bell, LogOut, PlusCircle, BriefcaseIcon, FolderOpen, Folder } from 'lucide-react';
import * as os from '@radix-ui/react-separator';
import { atom, useAtomValue, useSetAtom, useAtom } from 'jotai';
import { toast } from 'sonner';
import * as K from '@radix-ui/react-dialog';
import * as yr from '@radix-ui/react-label';
import * as Ut$1 from '@radix-ui/react-checkbox';
import { u, r as r$1 } from './getRequestClient-NbhzxsPk.mjs';
import { v4 } from 'uuid';
import { Command } from 'cmdk';
import * as da$1 from '@radix-ui/react-avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import { J, H as H$1 } from './client-DLHNdpZv.mjs';
import { createAuthClient } from 'better-auth/react';
import { organizationClient, adminClient, emailOTPClient } from 'better-auth/client/plugins';
import { createServerFn } from '@tanstack/start-client-core';
import '@radix-ui/react-tooltip';
import '@radix-ui/react-scroll-area';
import '@radix-ui/react-dropdown-menu';
import 'clsx';
import 'tailwind-merge';
import '@tanstack/start-server-core';
import 'tiny-invariant';

const Ie = j.forwardRef(({ className: a, type: t, ...s }, o) => jsx("input", { type: t, className: r("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", a), ref: o, ...s }));
Ie.displayName = "Input";
function ta({ className: a, orientation: t = "horizontal", decorative: s = true, ...o }) {
  return jsx(os.Root, { "data-slot": "separator-root", decorative: s, orientation: t, className: r("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", a), ...o });
}
const Nt = "sidebar_state", wt = 60 * 60 * 24 * 7, yt = "16rem", Ct = "18rem", It = "3rem", St = "b", ra = j.createContext(null);
function de() {
  const a = j.useContext(ra);
  if (!a) throw new Error("useSidebar must be used within a SidebarProvider.");
  return a;
}
const na = j.forwardRef(({ defaultOpen: a = true, open: t, onOpenChange: s, className: o, style: l, children: x, ...c }, b) => {
  const N = W(), [h, k] = j.useState(false), [d, m] = j.useState(a), g = t != null ? t : d, f = j.useCallback((S) => {
    const T = typeof S == "function" ? S(g) : S;
    s ? s(T) : m(T), document.cookie = `${Nt}=${T}; path=/; max-age=${wt}`;
  }, [s, g]), I = j.useCallback(() => N ? k((S) => !S) : f((S) => !S), [N, f, k]);
  j.useEffect(() => {
    const S = (T) => {
      T.key === St && (T.metaKey || T.ctrlKey) && (T.preventDefault(), I());
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [I]);
  const w = g ? "expanded" : "collapsed", F = j.useMemo(() => ({ state: w, open: g, setOpen: f, isMobile: N, openMobile: h, setOpenMobile: k, toggleSidebar: I }), [w, g, f, N, h, k, I]);
  return jsx(ra.Provider, { value: F, children: jsx(R, { delayDuration: 0, children: jsx("div", { "data-slot": "sidebar-wrapper", style: { "--sidebar-width": yt, "--sidebar-width-icon": It, ...l }, className: r("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", o), ref: b, ...c, children: x }) }) });
});
na.displayName = "SidebarProvider";
function Tt({ side: a = "left", variant: t = "sidebar", collapsible: s = "offcanvas", className: o, children: l, ...x }) {
  const { isMobile: c, state: b, openMobile: N, setOpenMobile: h } = de();
  return s === "none" ? jsx("div", { "data-slot": "sidebar", className: r("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", o), ...x, children: l }) : c ? jsxs(F, { open: N, onOpenChange: h, ...x, children: [jsxs($, { className: "sr-only", children: [jsx(J$1, { children: "Sidebar" }), jsx(Q, { children: "Displays the mobile sidebar." })] }), jsx(X$1, { "data-sidebar": "sidebar", "data-slot": "sidebar", "data-mobile": "true", className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden", style: { "--sidebar-width": Ct }, side: a, children: jsx("div", { className: "flex h-full w-full flex-col", children: l }) })] }) : jsxs("div", { className: "group peer text-sidebar-foreground hidden md:block", "data-state": b, "data-collapsible": b === "collapsed" ? s : "", "data-variant": t, "data-side": a, "data-slot": "sidebar", children: [jsx("div", { className: r("relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)") }), jsx("div", { className: r("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", a === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", o), ...x, children: jsx("div", { "data-sidebar": "sidebar", className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm", children: l }) })] });
}
function kt({ className: a, onClick: t, ...s }) {
  const { toggleSidebar: o } = de();
  return jsxs(P, { "data-sidebar": "trigger", "data-slot": "sidebar-trigger", variant: "ghost", size: "icon", className: r("h-7 w-7", a), onClick: (l) => {
    t == null ? void 0 : t(l), o();
  }, ...s, children: [jsx(PanelLeftIcon, {}), jsx("span", { className: "sr-only", children: "Toggle Sidebar" })] });
}
function jt({ className: a, ...t }) {
  const { toggleSidebar: s } = de();
  return jsx("button", { "data-sidebar": "rail", "data-slot": "sidebar-rail", "aria-label": "Toggle Sidebar", tabIndex: -1, onClick: s, title: "Toggle Sidebar", className: r("hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", a), ...t });
}
function Ot({ className: a, ...t }) {
  return jsx("main", { "data-slot": "sidebar-inset", className: r("bg-background relative flex min-h-svh flex-1 flex-col", "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", a), ...t });
}
function Mt({ className: a, ...t }) {
  return jsx("div", { "data-slot": "sidebar-header", "data-sidebar": "header", className: r("flex flex-col gap-2 p-2", a), ...t });
}
function Dt({ className: a, ...t }) {
  return jsx("div", { "data-slot": "sidebar-footer", "data-sidebar": "footer", className: r("flex flex-col gap-2 p-2", a), ...t });
}
function At({ className: a, ...t }) {
  return jsx(ta, { "data-slot": "sidebar-separator", "data-sidebar": "separator", className: r("bg-sidebar-border mx-2 w-auto", a), ...t });
}
function Pt({ className: a, ...t }) {
  return jsx("div", { "data-slot": "sidebar-content", "data-sidebar": "content", className: r("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", a), ...t });
}
function oe({ className: a, ...t }) {
  return jsx("div", { "data-slot": "sidebar-group", "data-sidebar": "group", className: r("relative flex w-full min-w-0 flex-col p-2", a), ...t });
}
function ce({ className: a, asChild: t = false, ...s }) {
  return jsx(t ? Slot : "div", { "data-slot": "sidebar-group-label", "data-sidebar": "group-label", className: r("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", a), ...s });
}
function ee({ className: a, ...t }) {
  return jsx("ul", { "data-slot": "sidebar-menu", "data-sidebar": "menu", className: r("flex w-full min-w-0 flex-col gap-1", a), ...t });
}
function Y({ className: a, ...t }) {
  return jsx("li", { "data-slot": "sidebar-menu-item", "data-sidebar": "menu-item", className: r("group/menu-item relative", a), ...t });
}
const zt = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", { variants: { variant: { default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground", outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]" }, size: { default: "h-8 text-sm", sm: "h-7 text-xs", lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!" } }, defaultVariants: { variant: "default", size: "default" } });
function Z({ asChild: a = false, isActive: t = false, variant: s = "default", size: o = "default", tooltip: l, className: x, ...c }) {
  const b = a ? Slot : "button", { isMobile: N, state: h } = de(), k = jsx(b, { "data-slot": "sidebar-menu-button", "data-sidebar": "menu-button", "data-size": o, "data-active": t, className: r(zt({ variant: s, size: o }), x), ...c });
  return l ? (typeof l == "string" && (l = { children: l }), jsxs(U, { children: [jsx(Y$1, { asChild: true, children: k }), jsx(Z$1, { side: "right", align: "center", hidden: h !== "collapsed" || N, ...l })] })) : k;
}
function Et({ items: a, className: t }) {
  const s = useNavigate(), [o, l] = useAtom(re), [x, c] = useAtom(se), [b, N] = j.useState(false), [h, k] = j.useState(null), [d, m] = useAtom(te), [g, f] = useAtom(oe$1), [I, w] = useAtom(ne);
  j.useEffect(() => {
    if (g) {
      const i = a.find((p) => {
        var _a2;
        return (_a2 = p.projects) == null ? void 0 : _a2.find((v) => v.id === g);
      });
      i && ((!d || d !== i.id) && m(i.id), l((p) => ({ ...p, [i.id]: true })));
    }
  }, [g, a, m, d]), j.useEffect(() => {
    var _a2;
    if (I == null ? void 0 : I.projectId) {
      const i = I.projectId;
      let p;
      for (const v of a) {
        const M = (_a2 = v.projects) == null ? void 0 : _a2.find((P) => P.id === i);
        if (M) {
          p = M, (!d || d !== v.id) && m(v.id), l((P) => ({ ...P, [v.id]: true }));
          break;
        }
      }
      p && (!g || g !== p.id) && f(p.id), p && c((v) => ({ ...v, [p.id]: true }));
    }
  }, [I, a, m, f, d, g]);
  const F = (i) => {
    l((p) => ({ ...p, [i.id]: !p[i.id] })), (!d || d !== i.id) && (m(i.id), g && g !== i.id && (f(void 0), w(void 0)));
  }, S = (i) => {
    m(i.id), g && g !== i.id && (f(void 0), w(void 0)), s({ to: "/teamspace/$teamspaceId", params: { teamspaceId: i.id }, viewTransition: true });
  }, T = (i) => {
    if (c((p) => ({ ...p, [i.id]: !p[i.id] })), !d || d !== i.teamspaceId) {
      const p = a.find((v) => v.id === i.teamspaceId);
      p && (m(p.id), l((v) => ({ ...v, [p.id]: true })));
    }
    f(i.id), I && I.projectId !== i.id && w(void 0), s({ to: "/project/$projectId", params: { projectId: i.id }, viewTransition: true });
  }, _ = (i) => {
    var _a2;
    if (i.projectId) {
      let p;
      for (const v of a) {
        const M = (_a2 = v.projects) == null ? void 0 : _a2.find((P) => P.id === i.projectId);
        if (M) {
          p = M, (!d || d !== v.id) && m(v.id);
          break;
        }
      }
      p && f(p.id);
    }
    w(i), s({ to: "/chat/$chatroomId", params: { chatroomId: i.id }, viewTransition: true });
  }, W = () => {
    N(!b);
  }, Q = (i) => {
    k(i.id), N(false), S(i);
  }, re$1 = (i, p = 2) => {
    const v = (I == null ? void 0 : I.id) === i.id, M = p * 12;
    return jsx("div", { children: jsx(Y, { children: jsxs(Z, { className: "w-full justify-start hover:bg-accent/50", onClick: () => _(i), style: { paddingLeft: `${M}px` }, children: [jsx(MessageSquare, { className: `mr-2 h-4 w-4 ${v ? "text-orange-500" : ""}` }), i.name.length > 20 ? i.name.slice(0, 20) + "..." : i.name] }) }) }, i.id);
  }, me = (i, p = 1) => {
    const v = x[i.id], M = g === i.id, P = i.chatrooms && i.chatrooms.length > 0, ne = p * 12;
    return jsxs("div", { children: [jsx(Y, { children: jsxs(Z, { className: "w-full justify-start hover:bg-accent/50", onClick: () => T(i), style: { paddingLeft: `${ne}px` }, children: [v && P ? jsx(FolderOpen, { className: `mr-2 h-5 w-5 ${M ? "text-emerald-500" : ""}` }) : jsx(Folder, { className: `mr-2 h-5 w-5 ${M ? "text-emerald-500" : ""}` }), i.name.length > 20 ? i.name.slice(0, 20) + "..." : i.name] }) }), P && v && jsx("div", { children: i.chatrooms.map((X) => re$1(X, p + 1)) })] }, i.id);
  }, B = (i, p = 0, v = false) => {
    const M = o[i.id], P = d === i.id || v, ne = i.projects && i.projects.length > 0, X = p === 0 ? 0 : p * 12;
    return jsxs("div", { children: [jsx(Y, { children: jsxs(Z, { className: "w-full justify-start hover:bg-accent/50", onClick: () => {
      S(i), F(i);
    }, style: { paddingLeft: X ? `${X}px` : void 0 }, children: [M ? jsx(BriefcaseIcon, { className: `mr-2 h-5 w-5 ${P ? "text-indigo-500" : ""}` }) : jsx(Briefcase, { className: `mr-2 h-5 w-5 ${P ? "text-indigo-500" : ""}` }), i.name.length > 20 ? i.name.slice(0, 20) + "..." : i.name] }) }), ne && M && jsx("div", { children: i.projects.map((he) => me(he, p + 1)) })] }, i.id);
  }, ve = a.slice(0, 4), V = a.length > 4 ? a.slice(4) : [], ue = h ? a.find((i) => i.id === h) : null;
  return jsxs("div", { className: t, children: [ve.map((i) => B(i)), ue && B(ue, 0, true), V.length > 0 && jsxs("div", { children: [jsx(Y, { children: jsxs(Z, { className: "w-full justify-start mt-1 text-muted-foreground", onClick: W, children: [b ? jsx(ChevronUp, { className: "mr-2 h-4 w-4" }) : jsx(ChevronDown, { className: "mr-2 h-4 w-4" }), "Show ", V.length, " more"] }) }), b && jsx("div", { className: "pl-2 py-1 space-y-1 border-l-2 border-muted ml-2 mt-1", children: V.map((i) => jsx(Y, { children: jsxs(Z, { className: "w-full justify-start text-sm hover:bg-accent/50", onClick: () => Q(i), children: [jsx(Briefcase, { className: `mr-2 h-4 w-4 ${d === i.id ? "text-primary" : ""}` }), i.name] }) }, i.id)) })] })] });
}
const Rt = "/_server/assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp", _t = K.Root, Bt = K.Trigger, Lt = K.Portal, $t = K.Close, ia = j.forwardRef(({ className: a, ...t }, s) => jsx(K.Overlay, { ref: s, className: r("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", a), ...t }));
ia.displayName = K.Overlay.displayName;
const sa = j.forwardRef(({ className: a, children: t, ...s }, o) => jsxs(Lt, { children: [jsx(ia, {}), jsxs(K.Content, { ref: o, className: r("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", a), ...s, children: [t, jsxs(K.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [jsx(X, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Close" })] })] })] }));
sa.displayName = K.Content.displayName;
const oa = ({ className: a, ...t }) => jsx("div", { className: r("flex flex-col space-y-1.5 text-center sm:text-left", a), ...t });
oa.displayName = "DialogHeader";
const ca = ({ className: a, ...t }) => jsx("div", { className: r("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", a), ...t });
ca.displayName = "DialogFooter";
const la = j.forwardRef(({ className: a, ...t }, s) => jsx(K.Title, { ref: s, className: r("text-lg font-semibold leading-none tracking-tight", a), ...t }));
la.displayName = K.Title.displayName;
const da = j.forwardRef(({ className: a, ...t }, s) => jsx(K.Description, { ref: s, className: r("text-sm text-muted-foreground", a), ...t }));
da.displayName = K.Description.displayName;
function H({ className: a, ...t }) {
  return jsx(yr.Root, { "data-slot": "label", className: r("text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", a), ...t });
}
const Ut = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", { variants: { variant: { default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80", secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80", destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80", outline: "text-foreground" } }, defaultVariants: { variant: "default" } });
function $e({ className: a, variant: t, ...s }) {
  return jsx("div", { className: r(Ut({ variant: t }), a), ...s });
}
const Se = j.forwardRef(({ className: a, ...t }, s) => jsx(Ut$1.Root, { ref: s, className: r("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", a), ...t, children: jsx(Ut$1.Indicator, { className: r("flex items-center justify-center text-current"), children: jsx(Check, { className: "h-4 w-4" }) }) }));
Se.displayName = Ut$1.Root.displayName;
const ma = j.forwardRef(({ className: a, ...t }, s) => jsx(Command, { ref: s, className: r("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", a), ...t }));
ma.displayName = Command.displayName;
const ua = j.forwardRef(({ className: a, ...t }, s) => jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), jsx(Command.Input, { ref: s, className: r("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", a), ...t })] }));
ua.displayName = Command.Input.displayName;
const ha = j.forwardRef(({ className: a, ...t }, s) => jsx(Command.List, { ref: s, className: r("max-h-[300px] overflow-y-auto overflow-x-hidden", a), ...t }));
ha.displayName = Command.List.displayName;
const pa = j.forwardRef((a, t) => jsx(Command.Empty, { ref: t, className: "py-6 text-center text-sm", ...a }));
pa.displayName = Command.Empty.displayName;
const ga = j.forwardRef(({ className: a, ...t }, s) => jsx(Command.Group, { ref: s, className: r("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", a), ...t }));
ga.displayName = Command.Group.displayName;
const Ft = j.forwardRef(({ className: a, ...t }, s) => jsx(Command.Separator, { ref: s, className: r("-mx-1 h-px bg-border", a), ...t }));
Ft.displayName = Command.Separator.displayName;
const fa = j.forwardRef(({ className: a, ...t }, s) => jsx(Command.Item, { ref: s, className: r("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", a), ...t }));
fa.displayName = Command.Item.displayName;
function ae({ className: a, ...t }) {
  return jsx(da$1.Root, { "data-slot": "avatar", className: r("relative flex size-8 shrink-0 overflow-hidden rounded-full", a), ...t });
}
function Ue({ className: a, ...t }) {
  return jsx(da$1.Image, { "data-slot": "avatar-image", className: r("aspect-square size-full", a), ...t });
}
function Fe({ className: a, ...t }) {
  return jsx(da$1.Fallback, { "data-slot": "avatar-fallback", className: r("bg-muted flex size-full items-center justify-center rounded-full", a), ...t });
}
const Wt = () => {
  const a = H$1();
  return createAuthClient({ baseURL: a, plugins: [organizationClient(), adminClient(), emailOTPClient()] });
}, { useSession: Ee, getSession: Vt, signIn: zr, signUp: Er, signOut: Ht, emailOtp: Rr, verifyEmail: _r, organization: qt, useListOrganizations: ba, useActiveOrganization: va } = Wt();
function Gt() {
  const a = useNavigate(), [t, s] = useState(false), o = useSetAtom(ee$1), l = useSetAtom(te), x = useSetAtom(oe$1), c = va(), [b, N] = useState(false), [h, k] = useState(1), d = [{ id: 1, label: "Teamspace Details" }, { id: 2, label: "Teamspace Members" }, { id: 3, label: "Project Details" }, { id: 4, label: "Project Members" }], [m, g] = useState({ name: "", description: "", context: "" }), [f, I] = useState({ name: "Default Project", description: "", context: "", isPrivate: false }), [w, F] = useState([]), [S, T] = useState([]), [_, W] = useState("CONTRIBUTOR"), [Q, re] = useState(""), [me, B$1] = useState([]), [ve, V] = useState(false), ue = (n) => {
    re(n), V(true);
    const { data: C } = c;
    if (!C || !C.members) {
      B$1([]), V(false);
      return;
    }
    r$1().auth.handler().then(({ user: j }) => {
      const E = j == null ? void 0 : j.email;
      setTimeout(() => {
        if (n.trim() === "") B$1([]);
        else try {
          console.log("Organization members:", C.members);
          const q = C.members.filter((O) => {
            if (!(O == null ? void 0 : O.user)) return false;
            const G = O.user.name && O.user.name.toLowerCase().includes(n.toLowerCase()), pe = O.user.email && O.user.email.toLowerCase().includes(n.toLowerCase()), ie = E && O.user.email === E;
            return (G || pe) && !ie;
          }).map((O) => (console.log("Processing member:", O), { memberId: O.id, userId: O.user.id, name: O.user.name || "Unknown", email: O.user.email || "", image: O.user.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(O.user.name || "Unknown")}`, role: "CONTRIBUTOR" }));
          console.log("Search results:", q), B$1(q);
        } catch (q) {
          console.error("Error filtering organization members:", q), B$1([]);
        }
        V(false);
      }, 300);
    }).catch((j) => {
      console.error("Error getting current user:", j), V(false), B$1([]);
    });
  }, i = (n) => {
    if (console.log("Adding user to teamspace:", n), w.some((j) => j.email === n.email)) {
      toast.error("This user has already been added");
      return;
    }
    const C = { id: v4(), userId: n.userId, role: _, invitedByUserId: "", teamspaceId: "", email: n.email, name: n.name || "Unknown", image: n.image };
    console.log("Created new teamspace member:", C), F((j) => [...j, C]), re(""), B$1([]);
  }, p = (n) => {
    g({ ...m, [n.target.name]: n.target.value });
  }, v = (n) => {
    I({ ...f, [n.target.name]: n.target.value });
  }, M = (n) => {
    I({ ...f, isPrivate: n });
  }, P$1 = (n) => {
    n && (F(w.filter((C) => C.id !== n)), T(S.filter((C) => C.id !== n)));
  }, ne = () => {
    if (h === 1 && !m.name.trim()) {
      toast.error("Teamspace name is required");
      return;
    }
    if (h === 2 && console.log("Teamspace members before going to step 3:", w), h === 3 && !f.name.trim()) {
      toast.error("Project name is required");
      return;
    }
    k(h + 1);
  }, X$1 = () => {
    k(h - 1);
  }, he = (n) => {
    switch (n) {
      case "OWNER":
        return "bg-green-100 text-green-800";
      case "ADMIN":
        return "bg-red-100 text-red-800";
      case "MEMBER":
        return "bg-blue-100 text-blue-800";
      case "VIEWER":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  useEffect(() => {
    h === 4 && (console.log("Entering step 4 - Project Members selection"), T([]));
  }, [h]);
  const ya = (n, C) => {
    if (console.log("Toggle project member:", n.name, C), C) {
      const j = { id: n.id, projectId: "", userId: n.userId, role: n.role, invitedByUserId: "", email: n.email, name: n.name, image: n.image };
      console.log("Adding to project members:", j), T((E) => [...E, j]);
    } else console.log("Removing from project members:", n.id), T((j) => j.filter((E) => E.id !== n.id));
  }, Re = async (n) => {
    if (n.preventDefault(), !t) {
      s(true);
      try {
        const C = r$1(), { session: j, userID: E, user: q } = await C.auth.handler();
        console.log("Current user:", { userID: E, email: q.email }), console.log("All teamspace members before filtering:", w);
        const O = w.filter((D) => D.email && D.email !== q.email).map((D) => (console.log("Adding member to teamspace API request:", D), { userId: D.userId, role: D.role, invitedByUserId: E, teamspaceId: "" }));
        console.log("Final teamspace members list for API:", O), console.log("Creating teamspace:", m.name);
        const { data: G } = await C.chatrooms.createTeamspace({ name: m.name, description: m.description, context: m.context, creatorId: E, members: O });
        console.log("Teamspace created:", G), console.log("All project members before filtering:", S);
        const pe = S.filter((D) => D.email && D.email !== q.email).map((D) => (console.log("Adding member to project API request:", D), { projectId: "", userId: D.userId, role: D.role, invitedByUserId: E }));
        console.log("Final project members list for API:", pe), console.log("Creating project:", f.name);
        const { data: ie } = await C.chatrooms.createProject({ teamspaceId: G.id, name: f.name, description: f.description, context: f.context, creatorId: E, isPrivate: f.isPrivate, members: pe });
        console.log("Project created:", ie), G.projects.push(ie), o((D) => [...D, G]), l(G.id), x(ie.id), toast.success("Teamspace and project created successfully"), N(false), setTimeout(() => {
          a({ to: "/teamspace/$teamspaceId", params: { teamspaceId: G.id }, viewTransition: true });
        }, 100);
      } catch (C) {
        console.error("Error creating teamspace:", C), toast.error("Failed to create teamspace");
      } finally {
        s(false);
      }
    }
  }, _e = () => {
    k(1), g({ name: "", description: "", context: "" }), I({ name: "Default Project", description: "", context: "", isPrivate: false }), F([]), T([]), W("CONTRIBUTOR"), re(""), B$1([]), V(false);
  };
  useEffect(() => {
    b || _e();
  }, [b]);
  const Ca = () => {
    switch (h) {
      case 1:
        return jsxs("div", { className: "space-y-4", children: [jsxs("h3", { className: "font-medium text-lg flex items-center", children: [jsx("div", { className: "flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 mr-2", children: jsx("span", { className: "text-xs font-semibold", children: "1" }) }), "Teamspace Details"] }), jsxs("div", { className: "grid gap-3", children: [jsxs("div", { className: "grid gap-2", children: [jsxs(H, { htmlFor: "teamspace-name", children: ["Teamspace Name ", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(Ie, { id: "teamspace-name", name: "name", value: m.name, onChange: p, placeholder: "e.g. Marketing Team", required: true })] }), jsxs("div", { className: "grid gap-2", children: [jsx(H, { htmlFor: "teamspace-description", children: "Description" }), jsx(B, { id: "teamspace-description", name: "description", value: m.description, onChange: p, placeholder: "What is this teamspace for?" })] }), jsxs("div", { className: "grid gap-2", children: [jsx(H, { htmlFor: "teamspace-context", children: "Context" }), jsx(B, { id: "teamspace-context", name: "context", value: m.context, onChange: p, placeholder: "Any additional context for AI assistants" })] })] })] });
      case 2:
        return jsxs("div", { className: "space-y-4", children: [jsxs("h3", { className: "font-medium text-lg flex items-center", children: [jsx("div", { className: "flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 mr-2", children: jsx("span", { className: "text-xs font-semibold", children: "2" }) }), "Teamspace Members"] }), jsxs("div", { className: "space-y-4", children: [jsxs("div", { className: "flex items-center justify-between", children: [jsx(H, { children: "Search for users" }), jsxs("div", { className: "flex items-center gap-2", children: [jsx(H, { htmlFor: "member-role", className: "text-sm", children: "Role:" }), jsxs("select", { id: "member-role", value: _, onChange: (n) => W(n.target.value), className: "px-3 py-1 text-sm border rounded-md", children: [jsx("option", { value: "OWNER", children: "Owner" }), jsx("option", { value: "ADMIN", children: "Admin" }), jsx("option", { value: "CONTRIBUTOR", children: "Contributor" }), jsx("option", { value: "VIEWER", children: "Viewer" })] })] })] }), jsx("div", { className: "relative", children: jsxs(ma, { className: "rounded-lg border shadow-md", children: [jsx(ua, { placeholder: "Search users by name or email...", value: Q, onValueChange: ue }), jsx(ha, { children: ve ? jsx("div", { className: "py-6 text-center text-sm", children: "Searching..." }) : me.length === 0 && Q ? jsx(pa, { children: "No users found." }) : jsx(ga, { heading: "Users", children: jsx(j$1, { className: "h-[200px]", children: me.map((n) => jsxs(fa, { value: n.email, className: "flex items-center justify-between cursor-pointer", children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx(ae, { children: jsx("img", { src: n.image, alt: n.name }) }), jsxs("div", { children: [jsx("p", { className: "text-sm font-medium", children: n.name }), jsx("p", { className: "text-xs text-muted-foreground", children: n.email })] })] }), jsx(P, { type: "button", variant: "ghost", size: "icon", onClick: () => i(n), children: jsx(PlusCircle, { className: "h-4 w-4" }) })] }, n.memberId)) }) }) })] }) }), w.length > 0 && jsxs("div", { className: "mt-4", children: [jsx("h4", { className: "text-sm font-medium mb-2", children: "Selected Members" }), jsx(j$1, { className: "h-[200px]", children: jsx("div", { className: "border rounded-md divide-y", children: w.map((n) => jsxs("div", { className: "flex items-center justify-between p-3", children: [jsxs("div", { className: "flex items-center gap-3", children: [n.image && jsx(ae, { className: "h-8 w-8", children: jsx("img", { src: n.image, alt: n.name || n.email || "" }) }), jsxs("div", { children: [n.name && jsx("p", { className: "text-sm font-medium", children: n.name }), jsx("p", { className: "text-xs text-muted-foreground", children: n.email })] }), jsx($e, { className: he(n.role), children: n.role })] }), jsxs(P, { variant: "ghost", size: "sm", onClick: () => P$1(n.id), className: "h-8 w-8 p-0", children: [jsx(X, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Remove" })] })] }, n.id)) }) })] }), w.length === 0 && jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "No members added yet. You will be added as an Owner automatically." })] })] });
      case 3:
        return jsxs("div", { className: "space-y-4", children: [jsxs("h3", { className: "font-medium text-lg flex items-center", children: [jsx("div", { className: "flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 mr-2", children: jsx("span", { className: "text-xs font-semibold", children: "3" }) }), "Project Details"] }), jsxs("div", { className: "grid gap-3", children: [jsxs("div", { className: "grid gap-2", children: [jsxs(H, { htmlFor: "project-name", children: ["Project Name ", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(Ie, { id: "project-name", name: "name", value: f.name, onChange: v, placeholder: "e.g. General", required: true })] }), jsxs("div", { className: "grid gap-2", children: [jsx(H, { htmlFor: "project-description", children: "Description" }), jsx(B, { id: "project-description", name: "description", value: f.description, onChange: v, placeholder: "What is this project about?" })] }), jsxs("div", { className: "grid gap-2", children: [jsx(H, { htmlFor: "project-context", children: "Context" }), jsx(B, { id: "project-context", name: "context", value: f.context, onChange: v, placeholder: "Any specific context for this project" })] }), jsxs("div", { className: "flex items-center space-x-2 mt-2", children: [jsx(Se, { id: "isPrivate", checked: f.isPrivate, onCheckedChange: M }), jsxs("div", { className: "grid gap-1.5 leading-none", children: [jsx(H, { htmlFor: "isPrivate", className: "text-sm font-medium leading-none flex items-center", children: "Make project private" }), jsx("p", { className: "text-xs text-muted-foreground", children: "Private projects are only visible to invited members" })] })] })] })] });
      case 4:
        return jsxs("div", { className: "space-y-4", children: [jsxs("h3", { className: "font-medium text-lg flex items-center", children: [jsx("div", { className: "flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 mr-2", children: jsx("span", { className: "text-xs font-semibold", children: "4" }) }), "Project Members"] }), jsx("p", { className: "text-sm text-muted-foreground", children: "Select which teamspace members to include in this project:" }), jsxs("div", { className: "text-xs text-muted-foreground mb-2", children: ["Available members: ", w.length, ", Selected for project: ", S.length] }), w.length > 0 ? jsx(j$1, { className: "h-[300px] border rounded-md", children: jsx("div", { className: "divide-y", children: w.map((n) => {
          var _a2;
          const C = S.some((j) => j.id === n.id);
          return jsx("div", { className: "flex items-center justify-between p-3", children: jsxs("div", { className: "flex items-center gap-3", children: [jsx(Se, { id: `project-member-${n.id}`, checked: C, onCheckedChange: (j) => {
            ya(n, !!j);
          } }), jsxs("div", { className: "flex items-center gap-2", children: [n.image && jsx(ae, { className: "h-8 w-8", children: jsx("img", { src: n.image, alt: n.name || n.email || "" }) }), jsxs("div", { children: [n.name && jsx("p", { className: "text-sm font-medium", children: n.name }), jsx("p", { className: "text-xs text-muted-foreground", children: n.email }), jsxs("p", { className: "text-xs text-muted-foreground", children: ["User ID: ", (_a2 = n.userId) == null ? void 0 : _a2.slice(0, 6), "..."] })] })] }), jsx($e, { className: he(n.role), children: n.role })] }) }, n.id);
        }) }) }) : jsx("p", { className: "text-sm", children: "No teamspace members to select from. You will be added as an Owner automatically." })] });
      default:
        return null;
    }
  }, Ia = () => jsx("div", { className: "flex justify-center mb-6", children: d.map((n, C) => jsxs("div", { className: "flex items-center", children: [jsx("div", { className: `flex items-center justify-center w-8 h-8 rounded-full border-2 ${n.id === h ? n.id <= 2 ? "border-indigo-600 bg-indigo-600 text-white" : "border-emerald-600 bg-emerald-600 text-white" : n.id < h ? n.id <= 2 ? "border-indigo-600 bg-indigo-100 text-indigo-600" : "border-emerald-600 bg-emerald-100 text-emerald-600" : "border-gray-300 bg-white text-gray-500"}`, children: n.id < h ? jsx(Check, { className: "w-4 h-4" }) : jsx("span", { className: "text-xs", children: n.id }) }), C < d.length - 1 && jsx("div", { className: `w-10 h-1 ${n.id < h ? n.id <= 1 ? "bg-indigo-600" : "bg-emerald-600" : "bg-gray-300"}` })] }, n.id)) });
  return jsx(R, { children: jsxs(U, { children: [jsx(Y$1, { asChild: true, children: jsxs(_t, { open: b, onOpenChange: (n) => {
    t && !n || N(n);
  }, children: [jsx(Bt, { asChild: true, children: jsxs(P, { variant: "ghost", size: "icon", className: "h-6 w-6 p-0 ml-1 rounded-full hover:cursor-pointer", children: [jsx(Plus, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Create Teamspace" })] }) }), jsx(sa, { className: "sm:max-w-[600px]", children: jsxs("form", { onSubmit: (n) => {
    n.preventDefault(), h === 4 && Re(n);
  }, children: [jsxs(oa, { children: [jsx("div", { className: `h-1.5 w-full absolute top-0 left-0 rounded-t-lg ${h <= 2 ? "bg-indigo-500" : "bg-emerald-500"}` }), jsx(la, { className: "text-xl mt-2", children: "Create New Teamspace" }), jsx(da, { children: "Create a teamspace with a default project to organize your work." })] }), Ia(), jsx("div", { className: "py-4", children: Ca() }), jsxs(ca, { className: "flex justify-between", children: [jsx("div", { children: h > 1 && jsxs(P, { type: "button", variant: "outline", onClick: X$1, disabled: t, children: [jsx(ChevronLeft, { className: "h-4 w-4 mr-2" }), "Back"] }) }), jsxs("div", { className: "flex gap-2", children: [jsx($t, { asChild: true, children: jsx(P, { variant: "outline", type: "button", disabled: t, onClick: _e, children: "Cancel" }) }), h < 4 ? jsxs(P, { type: "button", onClick: ne, className: `${h <= 2 ? "bg-indigo-600 hover:bg-indigo-700" : "bg-emerald-600 hover:bg-emerald-700"}`, disabled: t, children: ["Next", jsx(ChevronRight, { className: "h-4 w-4 ml-2" })] }) : jsx(P, { type: "button", onClick: (n) => Re(n), className: "bg-emerald-600 hover:bg-emerald-700", disabled: t, children: t ? "Creating..." : "Create Teamspace & Project" })] })] })] }) })] }) }), jsx(Z$1, { children: jsx("p", { children: "Create Teamspace" }) })] }) });
}
const Kt = () => {
  const a = useRouter();
  return async () => {
    await Ht(), a.navigate({ to: "/sign-in", reloadDocument: true });
  };
};
function Yt() {
  const { isMobile: a } = de(), t = Ee().data, s = Kt(), o = t == null ? void 0 : t.user;
  return jsx(ee, { children: jsx(Y, { children: jsxs(de$1, { children: [jsx(le, { asChild: true, children: jsxs(Z, { size: "lg", className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground", children: [jsxs(ae, { className: "h-8 w-8 rounded-lg", children: [jsx(Ue, { src: (o == null ? void 0 : o.image) || "", alt: (o == null ? void 0 : o.name) || "" }), jsx(Fe, { className: "rounded-lg", children: "CN" })] }), jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [jsx("span", { className: "truncate font-semibold", children: o == null ? void 0 : o.name }), jsx("span", { className: "truncate text-xs", children: o == null ? void 0 : o.email })] }), jsx(ChevronsUpDown, { className: "ml-auto size-4" })] }) }), jsxs(ce$1, { className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg", side: a ? "bottom" : "right", align: "start", sideOffset: 4, children: [jsx(fe, { className: "p-0 font-normal", children: jsxs("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm", children: [jsxs(ae, { className: "h-8 w-8 rounded-lg", children: [jsx(Ue, { src: (o == null ? void 0 : o.image) || "", alt: (o == null ? void 0 : o.name) || "" }), jsx(Fe, { className: "rounded-lg", children: "CN" })] }), jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [jsx("span", { className: "truncate font-semibold", children: o == null ? void 0 : o.name }), jsx("span", { className: "truncate text-xs", children: o == null ? void 0 : o.email })] })] }) }), jsx(ge, {}), jsx(ue, { children: jsxs(me, { children: [jsx(Sparkles, {}), "Upgrade to Pro"] }) }), jsx(ge, {}), jsxs(ue, { children: [jsxs(me, { children: [jsx(BadgeCheck, {}), "Account"] }), jsxs(me, { children: [jsx(CreditCard, {}), "Billing"] }), jsxs(me, { children: [jsx(Bell, {}), "Notifications"] })] }), jsx(ge, {}), jsxs(me, { onClick: s, className: "text-red-500 focus:text-red-500", children: [jsx(LogOut, {}), "Log out"] })] })] }) }) });
}
function Zt({ ...a }) {
  const t = useNavigate(), s = useAtomValue(ee$1), o = useAtomValue(ae$1), [l, x] = useAtom(ne), c = useSetAtom(te), b = useSetAtom(oe$1), N = useMemo(() => xe(o || []), [o]), h = useMemo(() => {
    const g = /* @__PURE__ */ new Date(), f = new Date(g.getTime() - 7 * 24 * 60 * 60 * 1e3), I = new Date(g.getTime() - 30 * 24 * 60 * 60 * 1e3), w = N.slice(0, 5), F = N.filter((_) => we(_) >= f && !w.some((Q) => Q.id === _.id)).slice(0, 5), S = N.filter((_) => {
      const W = we(_);
      return W < f && W >= I;
    }).slice(0, 5), T = N.filter((_) => we(_) < I).slice(0, 5);
    return { recent: w, previousWeek: F, previousMonth: S, previous: T };
  }, [N]), k = (g) => {
    var _a2;
    if (x(g), g.projectId) {
      const f = s == null ? void 0 : s.find((I) => {
        var _a3;
        return (_a3 = I.projects) == null ? void 0 : _a3.some((w) => w.id === g.projectId);
      });
      if (f) {
        c(f.id);
        const I = (_a2 = f.projects) == null ? void 0 : _a2.find((w) => w.id === g.projectId);
        I && b(I.id);
      }
    } else c(void 0), b(void 0);
    t({ to: "/chat/$chatroomId", params: { chatroomId: g.id }, viewTransition: true });
  }, d = () => {
    x(void 0), b(void 0), c(void 0), setTimeout(() => {
      t({ to: "/chat", viewTransition: true });
    }, 100);
  }, m = (g) => jsx(Y, { children: jsx(Z, { className: "max-w-full text-left", onClick: () => k(g), children: jsxs("div", { className: "flex items-center w-full overflow-hidden", children: [jsx(MessageSquare, { className: `h-4 w-4 flex-shrink-0 ${(l == null ? void 0 : l.id) === g.id ? "text-orange-500" : ""}` }), jsx("span", { className: "ml-2 truncate", children: g.name.length > 20 ? g.name.slice(0, 20) + "..." : g.name })] }) }) }, g.id);
  return jsxs(Tt, { className: "border-r-0 overflow-hidden", ...a, children: [jsx(Mt, { children: jsxs("div", { className: "flex items-center justify-between p-2", children: [jsx("button", { className: "flex items-start hover:cursor-pointer", onClick: d, children: jsx("img", { src: Rt, alt: "IntelliOptima", className: "h-8 object-contain object-left" }) }), jsx(R, { children: jsxs(U, { children: [jsx(Y$1, { asChild: true, children: jsxs(P, { size: "icon", variant: "ghost", onClick: d, children: [jsx(SquarePen, { className: "h-5 w-5" }), jsx("span", { className: "sr-only", children: "New Chat" })] }) }), jsx(Z$1, { children: jsx("p", { children: "New Chat" }) })] }) })] }) }), jsx(Pt, { className: "overflow-hidden", children: jsxs("div", { className: "flex flex-col gap-4 overflow-hidden", children: [jsxs(oe, { children: [jsxs("div", { className: "flex items-center justify-between", children: [jsx(ce, { children: "Teamspaces" }), jsx(Gt, {})] }), jsx(ee, { children: jsx(Et, { items: s }) })] }), jsx(At, {}), jsxs(oe, { children: [jsx(ce, { children: "Recent" }), jsx(ee, { children: h.recent.map(m) })] }), h.previousWeek.length > 0 && jsxs(oe, { children: [jsx(ce, { children: "Previous 7 Days" }), jsx(ee, { children: h.previousWeek.map(m) })] }), h.previousMonth.length > 0 && jsxs(oe, { children: [jsx(ce, { children: "Previous 30 Days" }), jsx(ee, { children: h.previousMonth.map(m) })] }), h.previous.length > 0 && jsxs(oe, { children: [jsx(ce, { children: "Previous" }), jsx(ee, { children: h.previous.map(m) })] }), !N.length && jsx("div", { className: "px-4 py-3 text-sm text-muted-foreground", children: "No recent chats. Start a new conversation using the button above." })] }) }), jsx(jt, {}), jsx(Dt, { className: "flex items-center", children: jsx(Yt, {}) })] });
}
function Jt({ ...a }) {
  return jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...a });
}
function Qt({ className: a, ...t }) {
  return jsx("ol", { "data-slot": "breadcrumb-list", className: r("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", a), ...t });
}
function Xt({ className: a, ...t }) {
  return jsx("li", { "data-slot": "breadcrumb-item", className: r("inline-flex items-center gap-1.5", a), ...t });
}
function er({ className: a, ...t }) {
  return jsx("span", { "data-slot": "breadcrumb-page", role: "link", "aria-disabled": "true", "aria-current": "page", className: r("text-foreground font-normal", a), ...t });
}
const ar = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-building-2'%3e%3cpath%20d='M6%2022V4a2%202%200%200%201%202-2h8a2%202%200%200%201%202%202v18Z'/%3e%3cpath%20d='M6%2012H4a2%202%200%200%200-2%202v6a2%202%200%200%200%202%202h2'/%3e%3cpath%20d='M18%209h2a2%202%200%200%201%202%202v9a2%202%200%200%201-2%202h-2'/%3e%3cpath%20d='M10%206h4'/%3e%3cpath%20d='M10%2010h4'/%3e%3cpath%20d='M10%2014h4'/%3e%3cpath%20d='M10%2018h4'/%3e%3c/svg%3e";
function xa() {
  const { data: a, error: t } = va(), s = a, { data: o } = ba(), l = useNavigate();
  useEffect(() => {
    t && c();
  }, [t]);
  const x = async (b, N) => {
    await qt.setActive({ organizationId: b }), await Vt({ query: { disableCookieCache: true } }), l(N ? { to: N } : { reloadDocument: true });
  }, c = async () => {
    o && (s == null ? void 0 : s.id) && o.filter((b) => b.id !== s.id).length > 0 ? await x(o.filter((b) => b.id !== s.id)[0].id) : o && o.length > 0 ? await x(o[0].id) : await x("");
  };
  return { changeActiveOrganization: x, activeOrganization: s, changeActiveOrganizationIfAny: c };
}
const tr = () => {
  var _a2;
  const { activeOrganization: a, changeActiveOrganization: t } = xa(), { data: s } = ba(), o = (_a2 = Ee().data) == null ? void 0 : _a2.user, l = a == null ? void 0 : a.members.some((c) => c.user.email === (o == null ? void 0 : o.email) && (c.role === "owner" || c.role === "admin")), x = async (c) => {
    await t(c);
  };
  return jsx("div", { className: "flex items-center gap-4", children: jsxs(de$1, { children: [jsx(le, { asChild: true, children: jsxs(P, { variant: "ghost", className: "flex items-center gap-2 p-1", children: [jsx(ae, { className: "h-8 w-8", children: jsx(AvatarImage, { src: (a == null ? void 0 : a.logo) || ar, alt: o == null ? void 0 : o.name, className: "h-8 w-8" }) }), a && jsxs("div", { className: "flex items-center gap-1", children: [jsx("span", { className: "", children: a.name }), jsx(ChevronDown, { className: "h-4 w-4" })] })] }) }), jsx(ce$1, { align: "end", className: "w-56", children: jsxs(ue, { children: [jsxs(he, { children: [jsx(be, { children: jsxs(Link, { className: "flex", to: "/organizations", children: [jsx(Factory, { className: "mr-2 h-4 w-4" }), jsx("span", { children: "Organizations" })] }) }), jsx(ie, { children: jsxs(ve, { children: [s && s.map((c) => jsx(me, { onClick: () => x(c.id), className: c.id === (a == null ? void 0 : a.id) ? "bg-accent" : "", children: c.name }, c.id)), jsx(ge, {}), jsx(me, { asChild: true, children: jsx(Link, { to: "/organizations", children: "Manage Organizations" }) })] }) })] }), jsx(me, { asChild: true, disabled: !l, children: jsxs(Link, { to: "/members", children: [jsx(Users, { className: "mr-2 h-4 w-4" }), jsx("span", { children: "Team Members" })] }) }), jsx(me, { asChild: true, disabled: !l, children: jsxs(Link, { to: "/organization-settings", children: [jsx(Settings, { className: "mr-2 h-4 w-4" }), jsx("span", { children: "Settings" })] }) }), jsx(me, { asChild: true, disabled: !l, children: jsxs(Link, { to: "/chat", children: [jsx(Server, { className: "mr-2 h-4 w-4" }), jsx("span", { children: "AI Providers" })] }) })] }) })] }) });
}, rr = atom([]), nr = () => {
  const { data: a } = Ee(), [t, s] = useAtom(rr);
  return useEffect(() => {
    t.length > 0 || (async () => {
      const { data: l } = await r$1().auth.getOrganizationInvitationsByEmail();
      l && s(l);
    })();
  }, [a == null ? void 0 : a.user.id]), { organizationInvitations: t, refetchInvitations: async () => {
    const { data: l } = await r$1().auth.getOrganizationInvitationsByEmail();
    l && s(l);
  } };
};
function ir(a) {
  const { changeActiveOrganization: t, changeActiveOrganizationIfAny: s } = xa(), { refetchInvitations: o } = nr(), [l, x] = useState(false), c = useRef(void 0);
  useEffect(() => {
    if (!(l || !a || c.current)) return (async () => await b())(), () => {
      c.current && (console.log("CLOSING DOWN"), c.current.close());
    };
  }, [a]);
  const b = async () => {
    if (!l) {
      c.current && c.current.close(), x(true);
      try {
        c.current = await r$1().eventStreamer.eventsStream(), c.current.socket.on("close", () => {
          console.log("Socket closed, will attempt to reconnect if needed");
        }), c.current.socket.on("open", async () => {
          console.log("EVENTSSTREAM ON OPEN HAPPENED!");
        }), c.current.socket.on("message", async (d) => {
          if (d.data) {
            const m = JSON.parse(d.data);
            m.notification && N(m);
          }
        });
      } catch (d) {
        console.error("Error connecting to chat:", d), x(false);
      }
    }
  }, N = async (d) => {
    switch (d.notification.notificationType) {
      case "ORGANIZATION_INVITATION": {
        await h(d);
        return;
      }
      case "ORGANIZATION": {
        await k(d);
        return;
      }
      default:
        throw new Error(`Unknown notification type: ${d.notification.notificationType}`);
    }
  }, h = async (d) => {
    const m = d.notification;
    switch (m.notificationHandling) {
      case "ACCEPTED":
        await t(d.organizationId), toast.info(`${m.memberName} accepted your invitation to join ${m.organizationName}.`);
        return;
      case "CANCELED":
        await o(), toast.info(`Your invitation to join ${m.organizationName} has been canceled.`);
        return;
      case "RECEIVED":
        await o(), toast.info(`You have been invited to join ${m.organizationName} by ${m.memberName}.`);
        return;
      case "REJECTED":
        await o(), toast.info(`${m.memberName} rejected to join ${m.organizationName}.`);
        return;
      default:
        throw new Error(`Unknown notification type: ${d.notification.notificationType}`);
    }
  }, k = async (d) => {
    switch (d.notification.notificationHandling) {
      case "KICKED":
        const m = d.notification;
        a === m.kickedMemberUserId && (toast.info(`You have been kicked from ${m.organizationName}.`), setTimeout(() => s(), 1e3));
        return;
      default:
        throw new Error(`Unknown notification type: ${d.notification.notificationType}`);
    }
  };
}
const sr = J("app_routes_authed_layout_tsx--getTeamspaces_createServerFn_handler", "/_server", (a, t) => Na.__executeServer(a, t)), or = J("app_routes_authed_layout_tsx--getChatrooms_createServerFn_handler", "/_server", (a, t) => wa.__executeServer(a, t)), Na = createServerFn().handler(sr, async () => {
  try {
    const a = u(), { data: t } = await a.chatrooms.getParticipatingTeamspaces();
    return t;
  } catch {
    return [];
  }
}), wa = createServerFn().handler(or, async () => {
  const a = u(), { data: t } = await a.chatrooms.getParticipatingChatroomsWithLatestMessages();
  return console.log("chatrooms", t), t;
}), cr = createFileRoute("/_authed/_layout")({ component: lr });
function lr() {
  const a = useAtomValue(ne), t = useSetAtom(ee$1), s = useSetAtom(ae$1), { userId: o } = cr.useRouteContext();
  return ir(o), useEffect(() => {
    const l = async () => {
      const c = await Na();
      t(c);
    }, x = async () => {
      const c = await wa();
      s(c);
    };
    Promise.all([l(), x()]);
  }, []), jsxs(na, { children: [jsx(Zt, {}), jsxs(Ot, { className: "flex flex-col h-screen overflow-y-auto", children: [jsxs("header", { className: "sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background p-4", children: [jsxs("div", { className: "flex flex-1 items-center gap-2 px-3", children: [jsx(kt, {}), jsx(ta, { orientation: "vertical", className: "mr-2 h-4" }), jsx(Jt, { children: jsx(Qt, { children: jsx(Xt, { children: jsx(er, { className: "line-clamp-1", children: a == null ? void 0 : a.name }) }) }) })] }), jsx(tr, {})] }), jsx("div", { className: "h-full overflow-y-hidden", children: jsx(Outlet, {}) })] })] });
}

export { or as getChatrooms_createServerFn_handler, sr as getTeamspaces_createServerFn_handler };
//# sourceMappingURL=_layout-BgX5DWOv.mjs.map
