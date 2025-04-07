import { jsx, jsxs } from 'react/jsx-runtime';
import * as y$1 from 'react';
import * as a from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { v as v$1 } from '../nitro/nitro.mjs';

const b = a.Root, h = a.Trigger, m = a.Portal, v = a.Close, d = y$1.forwardRef(({ className: e, ...t }, s) => jsx(a.Overlay, { ref: s, className: v$1("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e), ...t }));
d.displayName = a.Overlay.displayName;
const f = y$1.forwardRef(({ className: e, children: t, ...s }, r) => jsxs(m, { children: [jsx(d, {}), jsxs(a.Content, { ref: r, className: v$1("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e), ...s, children: [t, jsxs(a.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [jsx(X, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Close" })] })] })] }));
f.displayName = a.Content.displayName;
const p = ({ className: e, ...t }) => jsx("div", { className: v$1("flex flex-col space-y-1.5 text-center sm:text-left", e), ...t });
p.displayName = "DialogHeader";
const g = ({ className: e, ...t }) => jsx("div", { className: v$1("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), ...t });
g.displayName = "DialogFooter";
const u = y$1.forwardRef(({ className: e, ...t }, s) => jsx(a.Title, { ref: s, className: v$1("text-lg font-semibold leading-none tracking-tight", e), ...t }));
u.displayName = a.Title.displayName;
const y = y$1.forwardRef(({ className: e, ...t }, s) => jsx(a.Description, { ref: s, className: v$1("text-sm text-muted-foreground", e), ...t }));
y.displayName = a.Description.displayName;

export { b, f, g, h, p, u, v, y };
//# sourceMappingURL=dialog-BARnul6K.mjs.map
