import { jsxs, jsx } from 'react/jsx-runtime';
import { createFileRoute, Outlet, lazyRouteComponent, useNavigate, Link, useRouter } from '@tanstack/react-router';
import { d as de$1, a as ae$1, s as se, o as oe$1, j, r as r$3, n as ne, e as re, x as xe, w as we, h as he, b as be, P, v as ve, W, K, X, $, Z as Z$1, g as ee, F, t as te$1, J as J$1, Y, c as ce$1, p as pe, f as fe, i as ge, m as me, l as ie, q as le, U, _, k } from './index-eGnkU4Qz.mjs';
import * as y from 'react';
import { useEffect, useState, useRef, useMemo } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { SquarePen, PanelLeftIcon, ChevronDown, Factory, Users, Settings, Server, Plus, ChevronLeft, ChevronRight, ChevronUp, Briefcase, MessageSquare, ChevronsUpDown, Sparkles, BadgeCheck, CreditCard, Bell, LogOut, X as X$1, Check, PlusCircle, BriefcaseIcon, Search, FolderOpen, Folder } from 'lucide-react';
import * as it from '@radix-ui/react-separator';
import { useAtomValue, useSetAtom, useAtom, atom } from 'jotai';
import { toast } from 'sonner';
import * as a from '@radix-ui/react-dialog';
import * as vn from '@radix-ui/react-label';
import * as r$1 from '@radix-ui/react-checkbox';
import { r as r$2, a as a$1 } from './getRequestClient-BlbUj71l.mjs';
import { v4 } from 'uuid';
import { Command } from 'cmdk';
import * as r from '@radix-ui/react-avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import { q, D } from './client-BOYEY5wa.mjs';
import { createAuthClient } from 'better-auth/react';
import { organizationClient, adminClient, emailOTPClient } from 'better-auth/client/plugins';
import { createServerFn } from '@tanstack/start-client-core';
import '@radix-ui/react-dropdown-menu';
import '@radix-ui/react-scroll-area';
import '@radix-ui/react-tooltip';
import 'clsx';
import 'tailwind-merge';
import '@tanstack/start-server-core';
import 'tiny-invariant';

const Te = y.forwardRef(({ className: a, type: t, ...s }, o) => jsx("input", { type: t, className: r$3("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", a), ref: o, ...s }));
Te.displayName = "Input";
function Re({ className: a, orientation: t = "horizontal", decorative: s = true, ...o }) {
  return jsx(it.Root, { "data-slot": "separator-root", decorative: s, orientation: t, className: r$3("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", a), ...o });
}
const Dt = "sidebar_state", Pt = 60 * 60 * 24 * 7, At = "16rem", zt = "18rem", Et = "3rem", Rt = "b", ca = y.createContext(null);
function de() {
  const a = y.useContext(ca);
  if (!a) throw new Error("useSidebar must be used within a SidebarProvider.");
  return a;
}
const _e = y.forwardRef(({ defaultOpen: a = true, open: t, onOpenChange: s, className: o, style: l, children: v, ...c }, b) => {
  const N = oe$1(), [h, k] = y.useState(false), [d, m] = y.useState(a), g = t != null ? t : d, f = y.useCallback((S) => {
    const T = typeof S == "function" ? S(g) : S;
    s ? s(T) : m(T), document.cookie = `${Dt}=${T}; path=/; max-age=${Pt}`;
  }, [s, g]), I = y.useCallback(() => N ? k((S) => !S) : f((S) => !S), [N, f, k]);
  y.useEffect(() => {
    const S = (T) => {
      T.key === Rt && (T.metaKey || T.ctrlKey) && (T.preventDefault(), I());
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [I]);
  const w = g ? "expanded" : "collapsed", F = y.useMemo(() => ({ state: w, open: g, setOpen: f, isMobile: N, openMobile: h, setOpenMobile: k, toggleSidebar: I }), [w, g, f, N, h, k, I]);
  return jsx(ca.Provider, { value: F, children: jsx(j, { delayDuration: 0, children: jsx("div", { "data-slot": "sidebar-wrapper", style: { "--sidebar-width": At, "--sidebar-width-icon": Et, ...l }, className: r$3("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", o), ref: b, ...c, children: v }) }) });
});
_e.displayName = "SidebarProvider";
function _t({ side: a = "left", variant: t = "sidebar", collapsible: s = "offcanvas", className: o, children: l, ...v }) {
  const { isMobile: c, state: b, openMobile: N, setOpenMobile: h } = de();
  return s === "none" ? jsx("div", { "data-slot": "sidebar", className: r$3("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", o), ...v, children: l }) : c ? jsxs(ce$1, { open: N, onOpenChange: h, ...v, children: [jsxs(pe, { className: "sr-only", children: [jsx(fe, { children: "Sidebar" }), jsx(ge, { children: "Displays the mobile sidebar." })] }), jsx(me, { "data-sidebar": "sidebar", "data-slot": "sidebar", "data-mobile": "true", className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden", style: { "--sidebar-width": zt }, side: a, children: jsx("div", { className: "flex h-full w-full flex-col", children: l }) })] }) : jsxs("div", { className: "group peer text-sidebar-foreground hidden md:block", "data-state": b, "data-collapsible": b === "collapsed" ? s : "", "data-variant": t, "data-side": a, "data-slot": "sidebar", children: [jsx("div", { className: r$3("relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)") }), jsx("div", { className: r$3("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", a === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", o), ...v, children: jsx("div", { "data-sidebar": "sidebar", className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm", children: l }) })] });
}
function la({ className: a, onClick: t, ...s }) {
  const { toggleSidebar: o } = de();
  return jsxs(P, { "data-sidebar": "trigger", "data-slot": "sidebar-trigger", variant: "ghost", size: "icon", className: r$3("h-7 w-7", a), onClick: (l) => {
    t == null ? void 0 : t(l), o();
  }, ...s, children: [jsx(PanelLeftIcon, {}), jsx("span", { className: "sr-only", children: "Toggle Sidebar" })] });
}
function Bt({ className: a, ...t }) {
  const { toggleSidebar: s } = de();
  return jsx("button", { "data-sidebar": "rail", "data-slot": "sidebar-rail", "aria-label": "Toggle Sidebar", tabIndex: -1, onClick: s, title: "Toggle Sidebar", className: r$3("hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", a), ...t });
}
function da({ className: a, ...t }) {
  return jsx("main", { "data-slot": "sidebar-inset", className: r$3("bg-background relative flex min-h-svh flex-1 flex-col", "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", a), ...t });
}
function Lt({ className: a, ...t }) {
  return jsx("div", { "data-slot": "sidebar-header", "data-sidebar": "header", className: r$3("flex flex-col gap-2 p-2", a), ...t });
}
function $t({ className: a, ...t }) {
  return jsx("div", { "data-slot": "sidebar-footer", "data-sidebar": "footer", className: r$3("flex flex-col gap-2 p-2", a), ...t });
}
function Ut({ className: a, ...t }) {
  return jsx(Re, { "data-slot": "sidebar-separator", "data-sidebar": "separator", className: r$3("bg-sidebar-border mx-2 w-auto", a), ...t });
}
function Ft({ className: a, ...t }) {
  return jsx("div", { "data-slot": "sidebar-content", "data-sidebar": "content", className: r$3("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", a), ...t });
}
function oe({ className: a, ...t }) {
  return jsx("div", { "data-slot": "sidebar-group", "data-sidebar": "group", className: r$3("relative flex w-full min-w-0 flex-col p-2", a), ...t });
}
function ce({ className: a, asChild: t = false, ...s }) {
  return jsx(t ? Slot : "div", { "data-slot": "sidebar-group-label", "data-sidebar": "group-label", className: r$3("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", a), ...s });
}
function ae({ className: a, ...t }) {
  return jsx("ul", { "data-slot": "sidebar-menu", "data-sidebar": "menu", className: r$3("flex w-full min-w-0 flex-col gap-1", a), ...t });
}
function Z({ className: a, ...t }) {
  return jsx("li", { "data-slot": "sidebar-menu-item", "data-sidebar": "menu-item", className: r$3("group/menu-item relative", a), ...t });
}
const Wt = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", { variants: { variant: { default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground", outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]" }, size: { default: "h-8 text-sm", sm: "h-7 text-xs", lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!" } }, defaultVariants: { variant: "default", size: "default" } });
function J({ asChild: a = false, isActive: t = false, variant: s = "default", size: o = "default", tooltip: l, className: v, ...c }) {
  const b = a ? Slot : "button", { isMobile: N, state: h } = de(), k = jsx(b, { "data-slot": "sidebar-menu-button", "data-sidebar": "menu-button", "data-size": o, "data-active": t, className: r$3(Wt({ variant: s, size: o }), v), ...c });
  return l ? (typeof l == "string" && (l = { children: l }), jsxs(he, { children: [jsx(be, { asChild: true, children: k }), jsx(ve, { side: "right", align: "center", hidden: h !== "collapsed" || N, ...l })] })) : k;
}
function Vt({ items: a, className: t }) {
  const s = useNavigate(), [o, l] = useAtom(ie), [v, c] = useAtom(le), [b, N] = y.useState(false), [h, k] = y.useState(null), [d, m] = useAtom(ne), [g, f] = useAtom(re), [I, w] = useAtom(de$1);
  y.useEffect(() => {
    if (g) {
      const i = a.find((p) => {
        var _a2;
        return (_a2 = p.projects) == null ? void 0 : _a2.find((x) => x.id === g);
      });
      i && ((!d || d !== i.id) && m(i.id), l((p) => ({ ...p, [i.id]: true })));
    }
  }, [g, a, m, d]), y.useEffect(() => {
    var _a2;
    if (I == null ? void 0 : I.projectId) {
      const i = I.projectId;
      let p;
      for (const x of a) {
        const M = (_a2 = x.projects) == null ? void 0 : _a2.find((A) => A.id === i);
        if (M) {
          p = M, (!d || d !== x.id) && m(x.id), l((A) => ({ ...A, [x.id]: true }));
          break;
        }
      }
      p && (!g || g !== p.id) && f(p.id), p && c((x) => ({ ...x, [p.id]: true }));
    }
  }, [I, a, m, f, d, g]);
  const F = (i) => {
    l((p) => ({ ...p, [i.id]: !p[i.id] })), (!d || d !== i.id) && (m(i.id), g && g !== i.id && (f(void 0), w(void 0)));
  }, S = (i) => {
    m(i.id), g && g !== i.id && (f(void 0), w(void 0)), s({ to: "/teamspace/$teamspaceId", params: { teamspaceId: i.id }, viewTransition: true });
  }, T = (i) => {
    if (c((p) => ({ ...p, [i.id]: !p[i.id] })), !d || d !== i.teamspaceId) {
      const p = a.find((x) => x.id === i.teamspaceId);
      p && (m(p.id), l((x) => ({ ...x, [p.id]: true })));
    }
    f(i.id), I && I.projectId !== i.id && w(void 0), s({ to: "/project/$projectId", params: { projectId: i.id }, viewTransition: true });
  }, _ = (i) => {
    var _a2;
    if (i.projectId) {
      let p;
      for (const x of a) {
        const M = (_a2 = x.projects) == null ? void 0 : _a2.find((A) => A.id === i.projectId);
        if (M) {
          p = M, (!d || d !== x.id) && m(x.id);
          break;
        }
      }
      p && f(p.id);
    }
    w(i), s({ to: "/chat/$chatroomId", params: { chatroomId: i.id }, viewTransition: true });
  }, W = () => {
    N(!b);
  }, X = (i) => {
    k(i.id), N(false), S(i);
  }, re$1 = (i, p = 2) => {
    const x = (I == null ? void 0 : I.id) === i.id, M = p * 12;
    return jsx("div", { children: jsx(Z, { children: jsxs(J, { className: "w-full justify-start hover:bg-accent/50", onClick: () => _(i), style: { paddingLeft: `${M}px` }, children: [jsx(MessageSquare, { className: `mr-2 h-4 w-4 ${x ? "text-orange-500" : ""}` }), i.name.length > 20 ? i.name.slice(0, 20) + "..." : i.name] }) }) }, i.id);
  }, me = (i, p = 1) => {
    const x = v[i.id], M = g === i.id, A = i.chatrooms && i.chatrooms.length > 0, ne = p * 12;
    return jsxs("div", { children: [jsx(Z, { children: jsxs(J, { className: "w-full justify-start hover:bg-accent/50", onClick: () => T(i), style: { paddingLeft: `${ne}px` }, children: [x && A ? jsx(FolderOpen, { className: `mr-2 h-5 w-5 ${M ? "text-emerald-500" : ""}` }) : jsx(Folder, { className: `mr-2 h-5 w-5 ${M ? "text-emerald-500" : ""}` }), i.name.length > 20 ? i.name.slice(0, 20) + "..." : i.name] }) }), A && x && jsx("div", { children: i.chatrooms.map((ee) => re$1(ee, p + 1)) })] }, i.id);
  }, B = (i, p = 0, x = false) => {
    const M = o[i.id], A = d === i.id || x, ne = i.projects && i.projects.length > 0, ee = p === 0 ? 0 : p * 12;
    return jsxs("div", { children: [jsx(Z, { children: jsxs(J, { className: "w-full justify-start hover:bg-accent/50", onClick: () => {
      S(i), F(i);
    }, style: { paddingLeft: ee ? `${ee}px` : void 0 }, children: [M ? jsx(BriefcaseIcon, { className: `mr-2 h-5 w-5 ${A ? "text-indigo-500" : ""}` }) : jsx(Briefcase, { className: `mr-2 h-5 w-5 ${A ? "text-indigo-500" : ""}` }), i.name.length > 20 ? i.name.slice(0, 20) + "..." : i.name] }) }), ne && M && jsx("div", { children: i.projects.map((he) => me(he, p + 1)) })] }, i.id);
  }, we = a.slice(0, 4), V = a.length > 4 ? a.slice(4) : [], ue = h ? a.find((i) => i.id === h) : null;
  return jsxs("div", { className: t, children: [we.map((i) => B(i)), ue && B(ue, 0, true), V.length > 0 && jsxs("div", { children: [jsx(Z, { children: jsxs(J, { className: "w-full justify-start mt-1 text-muted-foreground", onClick: W, children: [b ? jsx(ChevronUp, { className: "mr-2 h-4 w-4" }) : jsx(ChevronDown, { className: "mr-2 h-4 w-4" }), "Show ", V.length, " more"] }) }), b && jsx("div", { className: "pl-2 py-1 space-y-1 border-l-2 border-muted ml-2 mt-1", children: V.map((i) => jsx(Z, { children: jsxs(J, { className: "w-full justify-start text-sm hover:bg-accent/50", onClick: () => X(i), children: [jsx(Briefcase, { className: `mr-2 h-4 w-4 ${d === i.id ? "text-primary" : ""}` }), i.name] }) }, i.id)) })] })] });
}
const Ht = "/_server/assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp", Gt = a.Root, qt = a.Trigger, Kt = a.Portal, Yt = a.Close, ma = y.forwardRef(({ className: a$1, ...t }, s) => jsx(a.Overlay, { ref: s, className: r$3("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", a$1), ...t }));
ma.displayName = a.Overlay.displayName;
const ua = y.forwardRef(({ className: a$1, children: t, ...s }, o) => jsxs(Kt, { children: [jsx(ma, {}), jsxs(a.Content, { ref: o, className: r$3("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", a$1), ...s, children: [t, jsxs(a.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [jsx(X$1, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Close" })] })] })] }));
ua.displayName = a.Content.displayName;
const ha = ({ className: a, ...t }) => jsx("div", { className: r$3("flex flex-col space-y-1.5 text-center sm:text-left", a), ...t });
ha.displayName = "DialogHeader";
const pa = ({ className: a, ...t }) => jsx("div", { className: r$3("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", a), ...t });
pa.displayName = "DialogFooter";
const ga = y.forwardRef(({ className: a$1, ...t }, s) => jsx(a.Title, { ref: s, className: r$3("text-lg font-semibold leading-none tracking-tight", a$1), ...t }));
ga.displayName = a.Title.displayName;
const fa = y.forwardRef(({ className: a$1, ...t }, s) => jsx(a.Description, { ref: s, className: r$3("text-sm text-muted-foreground", a$1), ...t }));
fa.displayName = a.Description.displayName;
function H({ className: a, ...t }) {
  return jsx(vn.Root, { "data-slot": "label", className: r$3("text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", a), ...t });
}
const Zt = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", { variants: { variant: { default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80", secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80", destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80", outline: "text-foreground" } }, defaultVariants: { variant: "default" } });
function Ge({ className: a, variant: t, ...s }) {
  return jsx("div", { className: r$3(Zt({ variant: t }), a), ...s });
}
const ke = y.forwardRef(({ className: a, ...t }, s) => jsx(r$1.Root, { ref: s, className: r$3("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", a), ...t, children: jsx(r$1.Indicator, { className: r$3("flex items-center justify-center text-current"), children: jsx(Check, { className: "h-4 w-4" }) }) }));
ke.displayName = r$1.Root.displayName;
const ba = y.forwardRef(({ className: a, ...t }, s) => jsx(Command, { ref: s, className: r$3("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", a), ...t }));
ba.displayName = Command.displayName;
const va = y.forwardRef(({ className: a, ...t }, s) => jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), jsx(Command.Input, { ref: s, className: r$3("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", a), ...t })] }));
va.displayName = Command.Input.displayName;
const xa = y.forwardRef(({ className: a, ...t }, s) => jsx(Command.List, { ref: s, className: r$3("max-h-[300px] overflow-y-auto overflow-x-hidden", a), ...t }));
xa.displayName = Command.List.displayName;
const Na = y.forwardRef((a, t) => jsx(Command.Empty, { ref: t, className: "py-6 text-center text-sm", ...a }));
Na.displayName = Command.Empty.displayName;
const wa = y.forwardRef(({ className: a, ...t }, s) => jsx(Command.Group, { ref: s, className: r$3("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", a), ...t }));
wa.displayName = Command.Group.displayName;
const Jt = y.forwardRef(({ className: a, ...t }, s) => jsx(Command.Separator, { ref: s, className: r$3("-mx-1 h-px bg-border", a), ...t }));
Jt.displayName = Command.Separator.displayName;
const ya = y.forwardRef(({ className: a, ...t }, s) => jsx(Command.Item, { ref: s, className: r$3("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", a), ...t }));
ya.displayName = Command.Item.displayName;
function te({ className: a, ...t }) {
  return jsx(r.Root, { "data-slot": "avatar", className: r$3("relative flex size-8 shrink-0 overflow-hidden rounded-full", a), ...t });
}
function qe({ className: a, ...t }) {
  return jsx(r.Image, { "data-slot": "avatar-image", className: r$3("aspect-square size-full", a), ...t });
}
function Ke({ className: a, ...t }) {
  return jsx(r.Fallback, { "data-slot": "avatar-fallback", className: r$3("bg-muted flex size-full items-center justify-center rounded-full", a), ...t });
}
const Qt = () => {
  const a = D("staging");
  return createAuthClient({ baseURL: a, plugins: [organizationClient(), adminClient(), emailOTPClient()] });
}, { useSession: Be, getSession: Xt, signIn: Br, signUp: Lr, signOut: er, emailOtp: $r, verifyEmail: Ur, organization: ar, useListOrganizations: Ca, useActiveOrganization: Ia } = Qt();
function tr() {
  const a = useNavigate(), [t, s] = useState(false), o = useSetAtom(ae$1), l = useSetAtom(ne), v = useSetAtom(re), c = Ia(), [b, N] = useState(false), [h, k$1] = useState(1), d = [{ id: 1, label: "Teamspace Details" }, { id: 2, label: "Teamspace Members" }, { id: 3, label: "Project Details" }, { id: 4, label: "Project Members" }], [m, g] = useState({ name: "", description: "", context: "" }), [f, I] = useState({ name: "Default Project", description: "", context: "", isPrivate: false }), [w, F] = useState([]), [S, T] = useState([]), [_$1, W] = useState("CONTRIBUTOR"), [X, re$1] = useState(""), [me, B] = useState([]), [we, V] = useState(false), ue = (n) => {
    re$1(n), V(true);
    const { data: C } = c;
    if (!C || !C.members) {
      B([]), V(false);
      return;
    }
    r$2().auth.handler().then(({ user: j }) => {
      const E = j == null ? void 0 : j.email;
      setTimeout(() => {
        if (n.trim() === "") B([]);
        else try {
          console.log("Organization members:", C.members);
          const q = C.members.filter((O) => {
            if (!(O == null ? void 0 : O.user)) return false;
            const K = O.user.name && O.user.name.toLowerCase().includes(n.toLowerCase()), pe = O.user.email && O.user.email.toLowerCase().includes(n.toLowerCase()), ie = E && O.user.email === E;
            return (K || pe) && !ie;
          }).map((O) => (console.log("Processing member:", O), { memberId: O.id, userId: O.user.id, name: O.user.name || "Unknown", email: O.user.email || "", image: O.user.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(O.user.name || "Unknown")}`, role: "CONTRIBUTOR" }));
          console.log("Search results:", q), B(q);
        } catch (q) {
          console.error("Error filtering organization members:", q), B([]);
        }
        V(false);
      }, 300);
    }).catch((j) => {
      console.error("Error getting current user:", j), V(false), B([]);
    });
  }, i = (n) => {
    if (console.log("Adding user to teamspace:", n), w.some((j) => j.email === n.email)) {
      toast.error("This user has already been added");
      return;
    }
    const C = { id: v4(), userId: n.userId, role: _$1, invitedByUserId: "", teamspaceId: "", email: n.email, name: n.name || "Unknown", image: n.image };
    console.log("Created new teamspace member:", C), F((j) => [...j, C]), re$1(""), B([]);
  }, p = (n) => {
    g({ ...m, [n.target.name]: n.target.value });
  }, x = (n) => {
    I({ ...f, [n.target.name]: n.target.value });
  }, M = (n) => {
    I({ ...f, isPrivate: n });
  }, A = (n) => {
    n && (F(w.filter((C) => C.id !== n)), T(S.filter((C) => C.id !== n)));
  }, ne$1 = () => {
    if (h === 1 && !m.name.trim()) {
      toast.error("Teamspace name is required");
      return;
    }
    if (h === 2 && console.log("Teamspace members before going to step 3:", w), h === 3 && !f.name.trim()) {
      toast.error("Project name is required");
      return;
    }
    k$1(h + 1);
  }, ee = () => {
    k$1(h - 1);
  }, he$1 = (n) => {
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
  const Aa = (n, C) => {
    if (console.log("Toggle project member:", n.name, C), C) {
      const j = { id: n.id, projectId: "", userId: n.userId, role: n.role, invitedByUserId: "", email: n.email, name: n.name, image: n.image };
      console.log("Adding to project members:", j), T((E) => [...E, j]);
    } else console.log("Removing from project members:", n.id), T((j) => j.filter((E) => E.id !== n.id));
  }, Fe = async (n) => {
    if (n.preventDefault(), !t) {
      s(true);
      try {
        const C = r$2(), { session: j, userID: E, user: q } = await C.auth.handler();
        console.log("Current user:", { userID: E, email: q.email }), console.log("All teamspace members before filtering:", w);
        const O = w.filter((D) => D.email && D.email !== q.email).map((D) => (console.log("Adding member to teamspace API request:", D), { userId: D.userId, role: D.role, invitedByUserId: E, teamspaceId: "" }));
        console.log("Final teamspace members list for API:", O), console.log("Creating teamspace:", m.name);
        const { data: K } = await C.chatrooms.createTeamspace({ name: m.name, description: m.description, context: m.context, creatorId: E, members: O });
        console.log("Teamspace created:", K), console.log("All project members before filtering:", S);
        const pe = S.filter((D) => D.email && D.email !== q.email).map((D) => (console.log("Adding member to project API request:", D), { projectId: "", userId: D.userId, role: D.role, invitedByUserId: E }));
        console.log("Final project members list for API:", pe), console.log("Creating project:", f.name);
        const { data: ie } = await C.chatrooms.createProject({ teamspaceId: K.id, name: f.name, description: f.description, context: f.context, creatorId: E, isPrivate: f.isPrivate, members: pe });
        console.log("Project created:", ie), K.projects.push(ie), o((D) => [...D, K]), l(K.id), v(ie.id), toast.success("Teamspace and project created successfully"), N(false), setTimeout(() => {
          a({ to: "/teamspace/$teamspaceId", params: { teamspaceId: K.id }, viewTransition: true });
        }, 100);
      } catch (C) {
        console.error("Error creating teamspace:", C), toast.error("Failed to create teamspace");
      } finally {
        s(false);
      }
    }
  }, We = () => {
    k$1(1), g({ name: "", description: "", context: "" }), I({ name: "Default Project", description: "", context: "", isPrivate: false }), F([]), T([]), W("CONTRIBUTOR"), re$1(""), B([]), V(false);
  };
  useEffect(() => {
    b || We();
  }, [b]);
  const za = () => {
    switch (h) {
      case 1:
        return jsxs("div", { className: "space-y-4", children: [jsxs("h3", { className: "font-medium text-lg flex items-center", children: [jsx("div", { className: "flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 mr-2", children: jsx("span", { className: "text-xs font-semibold", children: "1" }) }), "Teamspace Details"] }), jsxs("div", { className: "grid gap-3", children: [jsxs("div", { className: "grid gap-2", children: [jsxs(H, { htmlFor: "teamspace-name", children: ["Teamspace Name ", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(Te, { id: "teamspace-name", name: "name", value: m.name, onChange: p, placeholder: "e.g. Marketing Team", required: true })] }), jsxs("div", { className: "grid gap-2", children: [jsx(H, { htmlFor: "teamspace-description", children: "Description" }), jsx(k, { id: "teamspace-description", name: "description", value: m.description, onChange: p, placeholder: "What is this teamspace for?" })] }), jsxs("div", { className: "grid gap-2", children: [jsx(H, { htmlFor: "teamspace-context", children: "Context" }), jsx(k, { id: "teamspace-context", name: "context", value: m.context, onChange: p, placeholder: "Any additional context for AI assistants" })] })] })] });
      case 2:
        return jsxs("div", { className: "space-y-4", children: [jsxs("h3", { className: "font-medium text-lg flex items-center", children: [jsx("div", { className: "flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 mr-2", children: jsx("span", { className: "text-xs font-semibold", children: "2" }) }), "Teamspace Members"] }), jsxs("div", { className: "space-y-4", children: [jsxs("div", { className: "flex items-center justify-between", children: [jsx(H, { children: "Search for users" }), jsxs("div", { className: "flex items-center gap-2", children: [jsx(H, { htmlFor: "member-role", className: "text-sm", children: "Role:" }), jsxs("select", { id: "member-role", value: _$1, onChange: (n) => W(n.target.value), className: "px-3 py-1 text-sm border rounded-md", children: [jsx("option", { value: "OWNER", children: "Owner" }), jsx("option", { value: "ADMIN", children: "Admin" }), jsx("option", { value: "CONTRIBUTOR", children: "Contributor" }), jsx("option", { value: "VIEWER", children: "Viewer" })] })] })] }), jsx("div", { className: "relative", children: jsxs(ba, { className: "rounded-lg border shadow-md", children: [jsx(va, { placeholder: "Search users by name or email...", value: X, onValueChange: ue }), jsx(xa, { children: we ? jsx("div", { className: "py-6 text-center text-sm", children: "Searching..." }) : me.length === 0 && X ? jsx(Na, { children: "No users found." }) : jsx(wa, { heading: "Users", children: jsx(_, { className: "h-[200px]", children: me.map((n) => jsxs(ya, { value: n.email, className: "flex items-center justify-between cursor-pointer", children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx(te, { children: jsx("img", { src: n.image, alt: n.name }) }), jsxs("div", { children: [jsx("p", { className: "text-sm font-medium", children: n.name }), jsx("p", { className: "text-xs text-muted-foreground", children: n.email })] })] }), jsx(P, { type: "button", variant: "ghost", size: "icon", onClick: () => i(n), children: jsx(PlusCircle, { className: "h-4 w-4" }) })] }, n.memberId)) }) }) })] }) }), w.length > 0 && jsxs("div", { className: "mt-4", children: [jsx("h4", { className: "text-sm font-medium mb-2", children: "Selected Members" }), jsx(_, { className: "h-[200px]", children: jsx("div", { className: "border rounded-md divide-y", children: w.map((n) => jsxs("div", { className: "flex items-center justify-between p-3", children: [jsxs("div", { className: "flex items-center gap-3", children: [n.image && jsx(te, { className: "h-8 w-8", children: jsx("img", { src: n.image, alt: n.name || n.email || "" }) }), jsxs("div", { children: [n.name && jsx("p", { className: "text-sm font-medium", children: n.name }), jsx("p", { className: "text-xs text-muted-foreground", children: n.email })] }), jsx(Ge, { className: he$1(n.role), children: n.role })] }), jsxs(P, { variant: "ghost", size: "sm", onClick: () => A(n.id), className: "h-8 w-8 p-0", children: [jsx(X$1, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Remove" })] })] }, n.id)) }) })] }), w.length === 0 && jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "No members added yet. You will be added as an Owner automatically." })] })] });
      case 3:
        return jsxs("div", { className: "space-y-4", children: [jsxs("h3", { className: "font-medium text-lg flex items-center", children: [jsx("div", { className: "flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 mr-2", children: jsx("span", { className: "text-xs font-semibold", children: "3" }) }), "Project Details"] }), jsxs("div", { className: "grid gap-3", children: [jsxs("div", { className: "grid gap-2", children: [jsxs(H, { htmlFor: "project-name", children: ["Project Name ", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(Te, { id: "project-name", name: "name", value: f.name, onChange: x, placeholder: "e.g. General", required: true })] }), jsxs("div", { className: "grid gap-2", children: [jsx(H, { htmlFor: "project-description", children: "Description" }), jsx(k, { id: "project-description", name: "description", value: f.description, onChange: x, placeholder: "What is this project about?" })] }), jsxs("div", { className: "grid gap-2", children: [jsx(H, { htmlFor: "project-context", children: "Context" }), jsx(k, { id: "project-context", name: "context", value: f.context, onChange: x, placeholder: "Any specific context for this project" })] }), jsxs("div", { className: "flex items-center space-x-2 mt-2", children: [jsx(ke, { id: "isPrivate", checked: f.isPrivate, onCheckedChange: M }), jsxs("div", { className: "grid gap-1.5 leading-none", children: [jsx(H, { htmlFor: "isPrivate", className: "text-sm font-medium leading-none flex items-center", children: "Make project private" }), jsx("p", { className: "text-xs text-muted-foreground", children: "Private projects are only visible to invited members" })] })] })] })] });
      case 4:
        return jsxs("div", { className: "space-y-4", children: [jsxs("h3", { className: "font-medium text-lg flex items-center", children: [jsx("div", { className: "flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 mr-2", children: jsx("span", { className: "text-xs font-semibold", children: "4" }) }), "Project Members"] }), jsx("p", { className: "text-sm text-muted-foreground", children: "Select which teamspace members to include in this project:" }), jsxs("div", { className: "text-xs text-muted-foreground mb-2", children: ["Available members: ", w.length, ", Selected for project: ", S.length] }), w.length > 0 ? jsx(_, { className: "h-[300px] border rounded-md", children: jsx("div", { className: "divide-y", children: w.map((n) => {
          var _a2;
          const C = S.some((j) => j.id === n.id);
          return jsx("div", { className: "flex items-center justify-between p-3", children: jsxs("div", { className: "flex items-center gap-3", children: [jsx(ke, { id: `project-member-${n.id}`, checked: C, onCheckedChange: (j) => {
            Aa(n, !!j);
          } }), jsxs("div", { className: "flex items-center gap-2", children: [n.image && jsx(te, { className: "h-8 w-8", children: jsx("img", { src: n.image, alt: n.name || n.email || "" }) }), jsxs("div", { children: [n.name && jsx("p", { className: "text-sm font-medium", children: n.name }), jsx("p", { className: "text-xs text-muted-foreground", children: n.email }), jsxs("p", { className: "text-xs text-muted-foreground", children: ["User ID: ", (_a2 = n.userId) == null ? void 0 : _a2.slice(0, 6), "..."] })] })] }), jsx(Ge, { className: he$1(n.role), children: n.role })] }) }, n.id);
        }) }) }) : jsx("p", { className: "text-sm", children: "No teamspace members to select from. You will be added as an Owner automatically." })] });
      default:
        return null;
    }
  }, Ea = () => jsx("div", { className: "flex justify-center mb-6", children: d.map((n, C) => jsxs("div", { className: "flex items-center", children: [jsx("div", { className: `flex items-center justify-center w-8 h-8 rounded-full border-2 ${n.id === h ? n.id <= 2 ? "border-indigo-600 bg-indigo-600 text-white" : "border-emerald-600 bg-emerald-600 text-white" : n.id < h ? n.id <= 2 ? "border-indigo-600 bg-indigo-100 text-indigo-600" : "border-emerald-600 bg-emerald-100 text-emerald-600" : "border-gray-300 bg-white text-gray-500"}`, children: n.id < h ? jsx(Check, { className: "w-4 h-4" }) : jsx("span", { className: "text-xs", children: n.id }) }), C < d.length - 1 && jsx("div", { className: `w-10 h-1 ${n.id < h ? n.id <= 1 ? "bg-indigo-600" : "bg-emerald-600" : "bg-gray-300"}` })] }, n.id)) });
  return jsx(j, { children: jsxs(he, { children: [jsx(be, { asChild: true, children: jsxs(Gt, { open: b, onOpenChange: (n) => {
    t && !n || N(n);
  }, children: [jsx(qt, { asChild: true, children: jsxs(P, { variant: "ghost", size: "icon", className: "h-6 w-6 p-0 ml-1 rounded-full hover:cursor-pointer", children: [jsx(Plus, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Create Teamspace" })] }) }), jsx(ua, { className: "sm:max-w-[600px]", children: jsxs("form", { onSubmit: (n) => {
    n.preventDefault(), h === 4 && Fe(n);
  }, children: [jsxs(ha, { children: [jsx("div", { className: `h-1.5 w-full absolute top-0 left-0 rounded-t-lg ${h <= 2 ? "bg-indigo-500" : "bg-emerald-500"}` }), jsx(ga, { className: "text-xl mt-2", children: "Create New Teamspace" }), jsx(fa, { children: "Create a teamspace with a default project to organize your work." })] }), Ea(), jsx("div", { className: "py-4", children: za() }), jsxs(pa, { className: "flex justify-between", children: [jsx("div", { children: h > 1 && jsxs(P, { type: "button", variant: "outline", onClick: ee, disabled: t, children: [jsx(ChevronLeft, { className: "h-4 w-4 mr-2" }), "Back"] }) }), jsxs("div", { className: "flex gap-2", children: [jsx(Yt, { asChild: true, children: jsx(P, { variant: "outline", type: "button", disabled: t, onClick: We, children: "Cancel" }) }), h < 4 ? jsxs(P, { type: "button", onClick: ne$1, className: `${h <= 2 ? "bg-indigo-600 hover:bg-indigo-700" : "bg-emerald-600 hover:bg-emerald-700"}`, disabled: t, children: ["Next", jsx(ChevronRight, { className: "h-4 w-4 ml-2" })] }) : jsx(P, { type: "button", onClick: (n) => Fe(n), className: "bg-emerald-600 hover:bg-emerald-700", disabled: t, children: t ? "Creating..." : "Create Teamspace & Project" })] })] })] }) })] }) }), jsx(ve, { children: jsx("p", { children: "Create Teamspace" }) })] }) });
}
const rr = () => {
  const a = useRouter();
  return async () => {
    await er(), a.navigate({ to: "/sign-in", reloadDocument: true });
  };
};
function nr() {
  const { isMobile: a } = de(), t = Be().data, s = rr(), o = t == null ? void 0 : t.user;
  return jsx(ae, { children: jsx(Z, { children: jsxs(W, { children: [jsx(K, { asChild: true, children: jsxs(J, { size: "lg", className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground", children: [jsxs(te, { className: "h-8 w-8 rounded-lg", children: [jsx(qe, { src: (o == null ? void 0 : o.image) || "", alt: (o == null ? void 0 : o.name) || "" }), jsx(Ke, { className: "rounded-lg", children: "CN" })] }), jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [jsx("span", { className: "truncate font-semibold", children: o == null ? void 0 : o.name }), jsx("span", { className: "truncate text-xs", children: o == null ? void 0 : o.email })] }), jsx(ChevronsUpDown, { className: "ml-auto size-4" })] }) }), jsxs(X, { className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg", side: a ? "bottom" : "right", align: "start", sideOffset: 4, children: [jsx(U, { className: "p-0 font-normal", children: jsxs("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm", children: [jsxs(te, { className: "h-8 w-8 rounded-lg", children: [jsx(qe, { src: (o == null ? void 0 : o.image) || "", alt: (o == null ? void 0 : o.name) || "" }), jsx(Ke, { className: "rounded-lg", children: "CN" })] }), jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [jsx("span", { className: "truncate font-semibold", children: o == null ? void 0 : o.name }), jsx("span", { className: "truncate text-xs", children: o == null ? void 0 : o.email })] })] }) }), jsx(Y, {}), jsx($, { children: jsxs(J$1, { children: [jsx(Sparkles, {}), "Upgrade to Pro"] }) }), jsx(Y, {}), jsxs($, { children: [jsxs(J$1, { children: [jsx(BadgeCheck, {}), "Account"] }), jsxs(J$1, { children: [jsx(CreditCard, {}), "Billing"] }), jsxs(J$1, { children: [jsx(Bell, {}), "Notifications"] })] }), jsx(Y, {}), jsxs(J$1, { onClick: s, className: "text-red-500 focus:text-red-500", children: [jsx(LogOut, {}), "Log out"] })] })] }) }) });
}
function Sa({ ...a }) {
  const t = useNavigate(), s = useAtomValue(ae$1), o = useAtomValue(se), [l, v] = useAtom(de$1), c = useSetAtom(ne), b = useSetAtom(re), N = useMemo(() => xe(o || []), [o]), h = useMemo(() => {
    const g = /* @__PURE__ */ new Date(), f = new Date(g.getTime() - 7 * 24 * 60 * 60 * 1e3), I = new Date(g.getTime() - 30 * 24 * 60 * 60 * 1e3), w = N.slice(0, 5), F = N.filter((_) => we(_) >= f && !w.some((X) => X.id === _.id)).slice(0, 5), S = N.filter((_) => {
      const W = we(_);
      return W < f && W >= I;
    }).slice(0, 5), T = N.filter((_) => we(_) < I).slice(0, 5);
    return { recent: w, previousWeek: F, previousMonth: S, previous: T };
  }, [N]), k = (g) => {
    var _a2;
    if (v(g), g.projectId) {
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
    v(void 0), b(void 0), c(void 0), setTimeout(() => {
      t({ to: "/chat", viewTransition: true });
    }, 100);
  }, m = (g) => jsx(Z, { children: jsx(J, { className: "max-w-full text-left", onClick: () => k(g), children: jsxs("div", { className: "flex items-center w-full overflow-hidden", children: [jsx(MessageSquare, { className: `h-4 w-4 flex-shrink-0 ${(l == null ? void 0 : l.id) === g.id ? "text-orange-500" : ""}` }), jsx("span", { className: "ml-2 truncate", children: g.name.length > 20 ? g.name.slice(0, 20) + "..." : g.name })] }) }) }, g.id);
  return jsxs(_t, { className: "border-r-0 overflow-hidden", ...a, children: [jsx(Lt, { children: jsxs("div", { className: "flex items-center justify-between p-2", children: [jsx("button", { className: "flex items-start hover:cursor-pointer", onClick: d, children: jsx("img", { src: Ht, alt: "IntelliOptima", className: "h-8 object-contain object-left" }) }), jsx(j, { children: jsxs(he, { children: [jsx(be, { asChild: true, children: jsxs(P, { size: "icon", variant: "ghost", onClick: d, children: [jsx(SquarePen, { className: "h-5 w-5" }), jsx("span", { className: "sr-only", children: "New Chat" })] }) }), jsx(ve, { children: jsx("p", { children: "New Chat" }) })] }) })] }) }), jsx(Ft, { className: "overflow-hidden", children: jsxs("div", { className: "flex flex-col gap-4 overflow-hidden", children: [jsxs(oe, { children: [jsxs("div", { className: "flex items-center justify-between", children: [jsx(ce, { children: "Teamspaces" }), jsx(tr, {})] }), jsx(ae, { children: jsx(Vt, { items: s }) })] }), jsx(Ut, {}), jsxs(oe, { children: [jsx(ce, { children: "Recent" }), jsx(ae, { children: h.recent.map(m) })] }), h.previousWeek.length > 0 && jsxs(oe, { children: [jsx(ce, { children: "Previous 7 Days" }), jsx(ae, { children: h.previousWeek.map(m) })] }), h.previousMonth.length > 0 && jsxs(oe, { children: [jsx(ce, { children: "Previous 30 Days" }), jsx(ae, { children: h.previousMonth.map(m) })] }), h.previous.length > 0 && jsxs(oe, { children: [jsx(ce, { children: "Previous" }), jsx(ae, { children: h.previous.map(m) })] }), !N.length && jsx("div", { className: "px-4 py-3 text-sm text-muted-foreground", children: "No recent chats. Start a new conversation using the button above." })] }) }), jsx(Bt, {}), jsx($t, { className: "flex items-center", children: jsx(nr, {}) })] });
}
function Ta({ ...a }) {
  return jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...a });
}
function ka({ className: a, ...t }) {
  return jsx("ol", { "data-slot": "breadcrumb-list", className: r$3("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", a), ...t });
}
function ja({ className: a, ...t }) {
  return jsx("li", { "data-slot": "breadcrumb-item", className: r$3("inline-flex items-center gap-1.5", a), ...t });
}
function Oa({ className: a, ...t }) {
  return jsx("span", { "data-slot": "breadcrumb-page", role: "link", "aria-disabled": "true", "aria-current": "page", className: r$3("text-foreground font-normal", a), ...t });
}
const ir = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-building-2'%3e%3cpath%20d='M6%2022V4a2%202%200%200%201%202-2h8a2%202%200%200%201%202%202v18Z'/%3e%3cpath%20d='M6%2012H4a2%202%200%200%200-2%202v6a2%202%200%200%200%202%202h2'/%3e%3cpath%20d='M18%209h2a2%202%200%200%201%202%202v9a2%202%200%200%201-2%202h-2'/%3e%3cpath%20d='M10%206h4'/%3e%3cpath%20d='M10%2010h4'/%3e%3cpath%20d='M10%2014h4'/%3e%3cpath%20d='M10%2018h4'/%3e%3c/svg%3e";
function Ma() {
  const { data: a, error: t } = Ia(), s = a, { data: o } = Ca(), l = useNavigate();
  useEffect(() => {
    t && c();
  }, [t]);
  const v = async (b, N) => {
    await ar.setActive({ organizationId: b }), await Xt({ query: { disableCookieCache: true } }), l(N ? { to: N } : { reloadDocument: true });
  }, c = async () => {
    o && (s == null ? void 0 : s.id) && o.filter((b) => b.id !== s.id).length > 0 ? await v(o.filter((b) => b.id !== s.id)[0].id) : o && o.length > 0 ? await v(o[0].id) : await v("");
  };
  return { changeActiveOrganization: v, activeOrganization: s, changeActiveOrganizationIfAny: c };
}
const Da = () => {
  var _a2;
  const { activeOrganization: a, changeActiveOrganization: t } = Ma(), { data: s } = Ca(), o = (_a2 = Be().data) == null ? void 0 : _a2.user, l = a == null ? void 0 : a.members.some((c) => c.user.email === (o == null ? void 0 : o.email) && (c.role === "owner" || c.role === "admin")), v = async (c) => {
    await t(c);
  };
  return jsx("div", { className: "flex items-center gap-4", children: jsxs(W, { children: [jsx(K, { asChild: true, children: jsxs(P, { variant: "ghost", className: "flex items-center gap-2 p-1", children: [jsx(te, { className: "h-8 w-8", children: jsx(AvatarImage, { src: (a == null ? void 0 : a.logo) || ir, alt: o == null ? void 0 : o.name, className: "h-8 w-8" }) }), a && jsxs("div", { className: "flex items-center gap-1", children: [jsx("span", { className: "", children: a.name }), jsx(ChevronDown, { className: "h-4 w-4" })] })] }) }), jsx(X, { align: "end", className: "w-56", children: jsxs($, { children: [jsxs(Z$1, { children: [jsx(ee, { children: jsxs(Link, { className: "flex", to: "/organizations", children: [jsx(Factory, { className: "mr-2 h-4 w-4" }), jsx("span", { children: "Organizations" })] }) }), jsx(F, { children: jsxs(te$1, { children: [s && s.map((c) => jsx(J$1, { onClick: () => v(c.id), className: c.id === (a == null ? void 0 : a.id) ? "bg-accent" : "", children: c.name }, c.id)), jsx(Y, {}), jsx(J$1, { asChild: true, children: jsx(Link, { to: "/organizations", children: "Manage Organizations" }) })] }) })] }), jsx(J$1, { asChild: true, disabled: !l, children: jsxs(Link, { to: "/members", children: [jsx(Users, { className: "mr-2 h-4 w-4" }), jsx("span", { children: "Team Members" })] }) }), jsx(J$1, { asChild: true, disabled: !l, children: jsxs(Link, { to: "/organization-settings", children: [jsx(Settings, { className: "mr-2 h-4 w-4" }), jsx("span", { children: "Settings" })] }) }), jsx(J$1, { asChild: true, disabled: !l, children: jsxs(Link, { to: "/chat", children: [jsx(Server, { className: "mr-2 h-4 w-4" }), jsx("span", { children: "AI Providers" })] }) })] }) })] }) });
}, sr = atom([]), or = () => {
  const { data: a } = Be(), [t, s] = useAtom(sr);
  return useEffect(() => {
    t.length > 0 || (async () => {
      const { data: l } = await r$2().auth.getOrganizationInvitationsByEmail();
      l && s(l);
    })();
  }, [a == null ? void 0 : a.user.id]), { organizationInvitations: t, refetchInvitations: async () => {
    const { data: l } = await r$2().auth.getOrganizationInvitationsByEmail();
    l && s(l);
  } };
};
function Pa(a) {
  const { changeActiveOrganization: t, changeActiveOrganizationIfAny: s } = Ma(), { refetchInvitations: o } = or(), [l, v] = useState(false), c = useRef(void 0);
  useEffect(() => {
    if (!(l || !a || c.current)) return (async () => await b())(), () => {
      c.current && (console.log("CLOSING DOWN"), c.current.close());
    };
  }, [a]);
  const b = async () => {
    if (!l) {
      c.current && c.current.close(), v(true);
      try {
        c.current = await r$2().eventStreamer.eventsStream(), c.current.socket.on("close", () => {
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
        console.error("Error connecting to chat:", d), v(false);
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
const cr = () => Promise.resolve().then(() => hr), lr = q("app_routes_authed_layout_tsx--getTeamspaces_createServerFn_handler", "/_server", (a, t) => Le.__executeServer(a, t)), Le = createServerFn().handler(lr, async () => {
  try {
    const a = a$1(), { data: t } = await a.chatrooms.getParticipatingTeamspaces();
    return t;
  } catch {
    return [];
  }
}), dr = q("app_routes_authed_layout_tsx--getChatrooms_createServerFn_handler", "/_server", (a, t) => $e.__executeServer(a, t)), $e = createServerFn().handler(dr, async () => {
  const a = a$1(), { data: t } = await a.chatrooms.getParticipatingChatroomsWithLatestMessages();
  return console.log("chatrooms", t), t;
}), Ue = createFileRoute("/_authed/_layout")({ component: lazyRouteComponent(cr, "component", () => Ue.ssr) });
function mr() {
  const a = useAtomValue(de$1), t = useSetAtom(ae$1), s = useSetAtom(se), { userId: o } = Ue.useRouteContext();
  return Pa(o), useEffect(() => {
    const l = async () => {
      const c = await Le();
      t(c);
    }, v = async () => {
      const c = await $e();
      s(c);
    };
    Promise.all([l(), v()]);
  }, []), jsxs(_e, { children: [jsx(Sa, {}), jsxs(da, { className: "flex flex-col h-screen overflow-y-auto", children: [jsxs("header", { className: "sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background p-4", children: [jsxs("div", { className: "flex flex-1 items-center gap-2 px-3", children: [jsx(la, {}), jsx(Re, { orientation: "vertical", className: "mr-2 h-4" }), jsx(Ta, { children: jsx(ka, { children: jsx(ja, { children: jsx(Oa, { className: "line-clamp-1", children: a == null ? void 0 : a.name }) }) }) })] }), jsx(Da, {})] }), jsx("div", { className: "h-full overflow-y-hidden", children: jsx(Outlet, {}) })] })] });
}
const ur = function() {
  const t = useAtomValue(de$1), s = useSetAtom(ae$1), o = useSetAtom(se), { userId: l } = Ue.useRouteContext();
  return Pa(l), useEffect(() => {
    const v = async () => {
      const b = await Le();
      s(b);
    }, c = async () => {
      const b = await $e();
      o(b);
    };
    Promise.all([v(), c()]);
  }, []), jsxs(_e, { children: [jsx(Sa, {}), jsxs(da, { className: "flex flex-col h-screen overflow-y-auto", children: [jsxs("header", { className: "sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background p-4", children: [jsxs("div", { className: "flex flex-1 items-center gap-2 px-3", children: [jsx(la, {}), jsx(Re, { orientation: "vertical", className: "mr-2 h-4" }), jsx(Ta, { children: jsx(ka, { children: jsx(ja, { children: jsx(Oa, { className: "line-clamp-1", children: t == null ? void 0 : t.name }) }) }) })] }), jsx(Da, {})] }), jsx("div", { className: "h-full overflow-y-hidden", children: jsx(Outlet, {}) })] })] });
}, hr = Object.freeze(Object.defineProperty({ __proto__: null, component: ur, default: mr }, Symbol.toStringTag, { value: "Module" }));

export { ur as component, mr as default };
//# sourceMappingURL=_layout-DqotXblt.mjs.map
