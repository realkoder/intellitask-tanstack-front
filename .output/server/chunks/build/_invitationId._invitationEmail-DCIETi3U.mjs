import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useNavigate } from '@tanstack/react-router';
import { T as Tt, R as Rn, e as ao, $ as $e, Q as Qe, z as ze, b as be, I as Ie, c as ct, a as $, f as Yt, g as Js } from '../nitro/nitro.mjs';
import { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';
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

const ye = function() {
  const { data: c } = Tt(), { invitationId: m, invitationEmail: r } = Rn.useParams(), [t, o] = useState("initial"), n = useNavigate(), p = ao(), h = t === "loading" ? "Processing your invitation..." : t === "success" ? "Your invitation has been accepted!" : t === "error" ? "There was a problem with your invitation" : "";
  useEffect(() => {
    if (!r || !m) {
      n({ to: "/sign-in", reloadDocument: true });
      return;
    }
  }, []);
  const f = async () => {
    if (o("loading"), !(c == null ? void 0 : c.user.id)) {
      localStorage.setItem("invitationEmail", r), toast.error("You have to sign in before we can make you join an organization"), o("must-signin");
      return;
    }
    if (c.user.email !== r) {
      toast.error(`You must sign in using the email: ${r}`), localStorage.setItem("invitationEmail", r), o("must-change-account");
      return;
    }
    const { data: l, error: P } = await Yt.acceptInvitation({ invitationId: m });
    (l == null ? void 0 : l.invitation) ? (toast.info("You have joined the organization"), o("success"), await Yt.setActive({ organizationId: l == null ? void 0 : l.member.organizationId }), await Js({ query: { disableCookieCache: true } }), setTimeout(() => n({ to: "/chat" }), 1e3)) : o("error");
  };
  return jsx("div", { className: "flex min-h-screen items-center justify-center bg-muted/40 p-4", children: jsxs($e, { className: "mx-auto max-w-md w-full", children: [jsxs(Qe, { className: "text-center", children: [jsx(ze, { className: "text-xl", children: "Organization Invitation" }), jsx(be, { className: `${t === "error" ? " text-destructive" : ""}`, children: h })] }), jsx(Ie, { className: "flex justify-center", children: t === "initial" ? jsx("div", { children: jsx("p", { className: "font-medium", children: "You have been invited to join an organization" }) }) : t === "loading" ? jsxs("div", { className: "flex flex-col items-center gap-4", children: [jsx("div", { className: "h-12 w-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin" }), jsx("p", { className: "text-sm text-muted-foreground", children: "Please wait while we process your invitation" })] }) : t === "success" ? jsxs("div", { className: "flex flex-col items-center gap-4 text-center", children: [jsx("div", { className: "h-12 w-12 rounded-full bg-green-100 flex items-center justify-center", children: jsx(Check, { className: "h-6 w-6 text-green-600" }) }), jsxs("div", { children: [jsx("p", { className: "font-medium", children: "You have successfully joined the organization" }), jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "You now have access to all resources shared with you" })] })] }) : t === "error" ? jsxs("div", { className: "flex flex-col items-center gap-4 text-center", children: [jsx("div", { className: "h-12 w-12 rounded-full bg-red-100 flex items-center justify-center", children: jsx(X, { className: "h-6 w-6 text-red-600" }) }), jsxs("div", { children: [jsx("p", { className: "font-medium", children: "This invitation is invalid or has expired" }), jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Please contact your organization admin for a new invitation" })] })] }) : jsxs("div", { className: "flex flex-col items-center gap-4 text-center", children: [jsx("div", { className: "h-12 w-12 rounded-full bg-red-100 flex items-center justify-center", children: jsx(X, { className: "h-6 w-6 text-red-600" }) }), jsx("div", { children: jsx("p", { className: "font-medium", children: "This invitation could not be accepted you have to sign in or switch your account" }) })] }) }), jsx(ct, { className: "flex justify-center", children: t === "initial" ? jsx($, { onClick: () => f(), children: "Accept invitation" }) : t === "error" ? jsx($, { onClick: () => n({ to: "/sign-up" }), children: "Return to Home" }) : t === "must-signin" ? jsx($, { onClick: () => n({ to: "/sign-in" }), children: "sign me in" }) : t === "must-change-account" ? jsx($, { onClick: () => p(), children: "switch account" }) : jsx(Fragment, {}) })] }) });
};

export { ye as component };
//# sourceMappingURL=_invitationId._invitationEmail-DCIETi3U.mjs.map
