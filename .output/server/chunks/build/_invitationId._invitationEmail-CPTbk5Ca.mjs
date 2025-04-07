import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useNavigate } from '@tanstack/react-router';
import { B as ta, a5 as va, u as ue, y as ye, d as de, n as ne, i as ie, k as ke, O, a6 as ut, a7 as $r } from '../nitro/nitro.mjs';
import { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { toast } from 'sonner';
import { u } from './useSignOut-DrUzyn0C.mjs';
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

const ve = function() {
  const { data: c } = ta(), { invitationId: m, invitationEmail: n } = va.useParams(), [t, r] = useState("initial"), o = useNavigate(), p = u(), h = t === "loading" ? "Processing your invitation..." : t === "success" ? "Your invitation has been accepted!" : t === "error" ? "There was a problem with your invitation" : "";
  useEffect(() => {
    if (!n || !m) {
      o({ to: "/sign-in", reloadDocument: true });
      return;
    }
  }, []);
  const f = async () => {
    if (r("loading"), !(c == null ? void 0 : c.user.id)) {
      localStorage.setItem("invitationEmail", n), toast.error("You have to sign in before we can make you join an organization"), r("must-signin");
      return;
    }
    if (c.user.email !== n) {
      toast.error(`You must sign in using the email: ${n}`), localStorage.setItem("invitationEmail", n), r("must-change-account");
      return;
    }
    const { data: l } = await ut.acceptInvitation({ invitationId: m });
    (l == null ? void 0 : l.invitation) ? (toast.info("You have joined the organization"), r("success"), await ut.setActive({ organizationId: l == null ? void 0 : l.member.organizationId }), await $r({ query: { disableCookieCache: true } }), setTimeout(() => o({ to: "/chat" }), 1e3)) : r("error");
  };
  return jsx("div", { className: "flex min-h-screen items-center justify-center bg-muted/40 p-4", children: jsxs(ue, { className: "mx-auto max-w-md w-full", children: [jsxs(ye, { className: "text-center", children: [jsx(de, { className: "text-xl", children: "Organization Invitation" }), jsx(ne, { className: `${t === "error" ? " text-destructive" : ""}`, children: h })] }), jsx(ie, { className: "flex justify-center", children: t === "initial" ? jsx("div", { children: jsx("p", { className: "font-medium", children: "You have been invited to join an organization" }) }) : t === "loading" ? jsxs("div", { className: "flex flex-col items-center gap-4", children: [jsx("div", { className: "h-12 w-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin" }), jsx("p", { className: "text-sm text-muted-foreground", children: "Please wait while we process your invitation" })] }) : t === "success" ? jsxs("div", { className: "flex flex-col items-center gap-4 text-center", children: [jsx("div", { className: "h-12 w-12 rounded-full bg-green-100 flex items-center justify-center", children: jsx(Check, { className: "h-6 w-6 text-green-600" }) }), jsxs("div", { children: [jsx("p", { className: "font-medium", children: "You have successfully joined the organization" }), jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "You now have access to all resources shared with you" })] })] }) : t === "error" ? jsxs("div", { className: "flex flex-col items-center gap-4 text-center", children: [jsx("div", { className: "h-12 w-12 rounded-full bg-red-100 flex items-center justify-center", children: jsx(X, { className: "h-6 w-6 text-red-600" }) }), jsxs("div", { children: [jsx("p", { className: "font-medium", children: "This invitation is invalid or has expired" }), jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Please contact your organization admin for a new invitation" })] })] }) : jsxs("div", { className: "flex flex-col items-center gap-4 text-center", children: [jsx("div", { className: "h-12 w-12 rounded-full bg-red-100 flex items-center justify-center", children: jsx(X, { className: "h-6 w-6 text-red-600" }) }), jsx("div", { children: jsx("p", { className: "font-medium", children: "This invitation could not be accepted you have to sign in or switch your account" }) })] }) }), jsx(ke, { className: "flex justify-center", children: t === "initial" ? jsx(O, { onClick: () => f(), children: "Accept invitation" }) : t === "error" ? jsx(O, { onClick: () => o({ to: "/sign-up" }), children: "Return to Home" }) : t === "must-signin" ? jsx(O, { onClick: () => o({ to: "/sign-in" }), children: "sign me in" }) : t === "must-change-account" ? jsx(O, { onClick: () => p(), children: "switch account" }) : jsx(Fragment, {}) })] }) });
};

export { ve as component };
//# sourceMappingURL=_invitationId._invitationEmail-CPTbk5Ca.mjs.map
