import { jsx, jsxs } from 'react/jsx-runtime';
import * as j$1 from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as K$1 from '@radix-ui/react-dialog';
import { ChevronRightIcon, XIcon, CheckIcon } from 'lucide-react';
import * as Ve from '@radix-ui/react-tooltip';
import { atom } from 'jotai';
import * as je from '@radix-ui/react-scroll-area';
import * as re$1 from '@radix-ui/react-dropdown-menu';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function r(...e) {
  return twMerge(clsx(e));
}
const I = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "bg-primary text-primary-foreground shadow hover:bg-primary/90", destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90", outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-9 px-4 py-2", sm: "h-8 rounded-md px-3 text-xs", lg: "h-10 rounded-md px-8", icon: "h-9 w-9" } }, defaultVariants: { variant: "default", size: "default" } }), P = j$1.forwardRef(({ className: e, variant: t, size: o, asChild: n = false, ...g }, h) => jsx(n ? Slot : "button", { className: r("cursor-pointer", I({ variant: t, size: o, className: e })), ref: h, ...g }));
P.displayName = "Button";
const x = 768;
function W() {
  const [e, t] = j$1.useState(void 0);
  return j$1.useEffect(() => {
    const o = window.matchMedia(`(max-width: ${x - 1}px)`), n = () => {
      t(window.innerWidth < x);
    };
    return o.addEventListener("change", n), t(window.innerWidth < x), () => o.removeEventListener("change", n);
  }, []), !!e;
}
function F({ ...e }) {
  return jsx(K$1.Root, { "data-slot": "sheet", ...e });
}
function K({ ...e }) {
  return jsx(K$1.Close, { "data-slot": "sheet-close", ...e });
}
function k({ ...e }) {
  return jsx(K$1.Portal, { "data-slot": "sheet-portal", ...e });
}
function _({ className: e, ...t }) {
  return jsx(K$1.Overlay, { "data-slot": "sheet-overlay", className: r("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/10", e), ...t });
}
function X({ className: e, children: t, side: o = "right", ...n }) {
  return jsxs(k, { children: [jsx(_, {}), jsxs(K$1.Content, { "data-slot": "sheet-content", className: r("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", o === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", o === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", o === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", o === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", e), ...n, children: [t, jsxs(K$1.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [jsx(XIcon, { className: "size-4" }), jsx("span", { className: "sr-only", children: "Close" })] })] })] });
}
function $({ className: e, ...t }) {
  return jsx("div", { "data-slot": "sheet-header", className: r("flex flex-col gap-1.5 p-4", e), ...t });
}
function J({ className: e, ...t }) {
  return jsx(K$1.Title, { "data-slot": "sheet-title", className: r("text-foreground font-semibold tracking-tight", e), ...t });
}
function Q({ className: e, ...t }) {
  return jsx(K$1.Description, { "data-slot": "sheet-description", className: r("text-muted-foreground text-sm", e), ...t });
}
function R({ delayDuration: e = 0, ...t }) {
  return jsx(Ve.Provider, { "data-slot": "tooltip-provider", delayDuration: e, ...t });
}
function U({ ...e }) {
  return jsx(R, { children: jsx(Ve.Root, { "data-slot": "tooltip", ...e }) });
}
function Y({ ...e }) {
  return jsx(Ve.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function Z({ className: e, sideOffset: t = 4, children: o, ...n }) {
  return jsx(Ve.Portal, { children: jsxs(Ve.Content, { "data-slot": "tooltip-content", sideOffset: t, className: r("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-sm rounded-md px-3 py-1.5 text-xs", e), ...n, children: [o, jsx(Ve.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })] }) });
}
const ee = atom([]), te = atom(), oe = atom(), ae = atom([]), ne = atom(), re = atom({});
atom(null);
atom("projects");
const se = atom({});
atom({});
const B = j$1.forwardRef(({ className: e, ...t }, o) => jsx("textarea", { className: r("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e), ref: o, ...t }));
B.displayName = "Textarea";
const j = j$1.forwardRef(({ className: e, children: t, ...o }, n) => jsxs(je.Root, { ref: n, className: r("relative overflow-hidden", e), ...o, children: [jsx(je.Viewport, { className: "h-full w-full rounded-[inherit]", children: t }), jsx(y, {}), jsx(je.Corner, {})] }));
j.displayName = je.Root.displayName;
const y = j$1.forwardRef(({ className: e, orientation: t = "vertical", ...o }, n) => jsx(je.ScrollAreaScrollbar, { ref: n, orientation: t, className: r("flex touch-none select-none transition-colors", t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", e), ...o, children: jsx(je.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" }) }));
y.displayName = je.ScrollAreaScrollbar.displayName;
function de({ ...e }) {
  return jsx(re$1.Root, { "data-slot": "dropdown-menu", ...e });
}
function ie({ ...e }) {
  return jsx(re$1.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function le({ ...e }) {
  return jsx(re$1.Trigger, { "data-slot": "dropdown-menu-trigger", ...e });
}
function ce({ className: e, sideOffset: t = 4, ...o }) {
  return jsx(re$1.Portal, { children: jsx(re$1.Content, { "data-slot": "dropdown-menu-content", sideOffset: t, className: r("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md", e), ...o }) });
}
function ue({ ...e }) {
  return jsx(re$1.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function me({ className: e, inset: t, variant: o = "default", ...n }) {
  return jsx(re$1.Item, { "data-slot": "dropdown-menu-item", "data-inset": t, "data-variant": o, className: r("focus:bg-accent hover:cursor-pointer focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), ...n });
}
function pe({ className: e, children: t, checked: o, ...n }) {
  return jsxs(re$1.CheckboxItem, { "data-slot": "dropdown-menu-checkbox-item", className: r("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), checked: o, ...n, children: [jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: jsx(re$1.ItemIndicator, { children: jsx(CheckIcon, { className: "size-4" }) }) }), t] });
}
function fe({ className: e, inset: t, ...o }) {
  return jsx(re$1.Label, { "data-slot": "dropdown-menu-label", "data-inset": t, className: r("px-2 py-1.5 text-sm font-semibold data-[inset]:pl-8", e), ...o });
}
function ge({ className: e, ...t }) {
  return jsx(re$1.Separator, { "data-slot": "dropdown-menu-separator", className: r("bg-border -mx-1 my-1 h-px", e), ...t });
}
function he({ ...e }) {
  return jsx(re$1.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function be({ className: e, inset: t, children: o, ...n }) {
  return jsxs(re$1.SubTrigger, { "data-slot": "dropdown-menu-sub-trigger", "data-inset": t, className: r("focus:bg-accent hover:cursor-pointer focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8", e), ...n, children: [o, jsx(ChevronRightIcon, { className: "ml-auto size-4" })] });
}
function ve({ className: e, ...t }) {
  return jsx(re$1.SubContent, { "data-slot": "dropdown-menu-sub-content", className: r("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg", e), ...t });
}
function xe(e, t = false) {
  return [...e].sort((o, n) => {
    var _a, _b;
    const g = ((_a = o.messages) == null ? void 0 : _a.length) ? o.messages.reduce((p, f) => {
      const v = new Date(p.createdAt).getTime();
      return new Date(f.createdAt).getTime() > v ? f : p;
    }, o.messages[0]) : null, h = ((_b = n.messages) == null ? void 0 : _b.length) ? n.messages.reduce((p, f) => {
      const v = new Date(p.createdAt).getTime();
      return new Date(f.createdAt).getTime() > v ? f : p;
    }, n.messages[0]) : null, b = g ? new Date(g.createdAt).getTime() : new Date(o.updatedAt || o.createdAt).getTime(), w = h ? new Date(h.createdAt).getTime() : new Date(n.updatedAt || n.createdAt).getTime();
    return t ? b - w : w - b;
  });
}
function we(e) {
  var _a;
  return ((_a = e.messages) == null ? void 0 : _a.length) ? new Date(e.messages.reduce((t, o) => new Date(o.createdAt) > new Date(t.createdAt) ? o : t, e.messages[0]).createdAt) : new Date(e.updatedAt);
}
function ye(e, t) {
  return e.members.find((o) => o.user.id === t);
}

export { $, B, F, J, K, P, Q, R, U, W, X, Y, Z, ae as a, be as b, ce as c, de as d, ee as e, re as f, ge as g, he as h, ie as i, fe as j, j as k, le as l, me as m, ne as n, oe as o, pe as p, r, se as s, te as t, ue as u, ve as v, we as w, xe as x, ye as y };
//# sourceMappingURL=index-BPPryd0z.mjs.map
