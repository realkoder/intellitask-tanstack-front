import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useNavigate, Link } from '@tanstack/react-router';
import { useAtom, useSetAtom } from 'jotai';
import { ah as Sa, E as Es, H as He, O, u as ue, y as ye, d as de, n as ne, i as ie, aa as Ge, ab as Pe, ac as Be, v, p as la, x as Oe, z as je$1, M as Me, k as ke, a4 as fe, a2 as te, e as ee, a3 as Nt, ai as As, a1 as mt } from '../nitro/nitro.mjs';
import { Home, ChevronRight, Briefcase, FolderOpen, Lock, MessageSquarePlus, MessageCircle, Users, Settings, FileIcon, Trash2, AlertCircle, ChevronDown, ChevronUp, Upload, X, CheckCircle } from 'lucide-react';
import * as y from 'react';
import { useState, useEffect } from 'react';
import { N as Ne$1, p as pe, x as xe$1, y as ye$1, l as le } from './collapsible-g0t8x5gf.mjs';
import { toast } from 'sonner';
import { b, h, f, p, u, y as y$1, g, v as v$1 } from './dialog-BARnul6K.mjs';
import { d } from './checkbox-C_SO_KyM.mjs';
import { cva } from 'class-variance-authority';
import { i } from './avatar-pWQn_6aq.mjs';
import { useFileUpload, FileUpload } from '@ark-ui/react';
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

const Ke = cva("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", { variants: { variant: { default: "bg-background text-foreground", destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive", warning: "border-amber-500/50 text-amber-700 [&>svg]:text-amber-700" } }, defaultVariants: { variant: "default" } }), Ie = y.forwardRef(({ className: l, variant: x, ...m }, v$1) => jsx("div", { ref: v$1, role: "alert", className: v(Ke({ variant: x }), l), ...m }));
Ie.displayName = "Alert";
const Xe = y.forwardRef(({ className: l, ...x }, m) => jsx("h5", { ref: m, className: v("mb-1 font-medium leading-none tracking-tight", l), ...x }));
Xe.displayName = "AlertTitle";
const je = y.forwardRef(({ className: l, ...x }, m) => jsx("div", { ref: m, className: v("text-sm [&_p]:leading-relaxed", l), ...x }));
je.displayName = "AlertDescription";
function Qe({ project: l, onProjectUpdated: x, trigger: m, userId: v }) {
  const M = useNavigate(), C = useSetAtom(Es), [b$1, c] = useState(false), [h$1, w] = useState(false), [j, P] = useState(false), [D, y] = useState(false), [a, k] = useState(""), [o, n] = useState({ name: "", description: "", isPrivate: false }), [i, r] = useState(true);
  useEffect(() => {
    var _a;
    if (b$1) {
      n({ name: l.name || "", description: l.description || "", isPrivate: l.isPrivate || false });
      const g = ((_a = l.members) == null ? void 0 : _a.length) || 0;
      r(g <= 1), y(false), k("");
    }
  }, [b$1, l]);
  const d$1 = (g) => {
    n({ ...o, [g.target.name]: g.target.value });
  }, T = (g) => {
    n({ ...o, isPrivate: g });
  }, S = async (g) => {
    var _a;
    if (g.preventDefault(), !l.id) {
      toast.error("Project not found");
      return;
    }
    if (!o.name.trim()) {
      toast.error("Project name is required");
      return;
    }
    if (o.isPrivate && !i && !l.isPrivate) {
      toast.error("Cannot make a project private when it has multiple members");
      return;
    }
    w(true);
    try {
      const { data: s } = await fe().chatrooms.updateProject(l.id, { teamspaceId: l.teamspaceId, context: l.context, creatorId: v, name: o.name, description: o.description, isPrivate: o.isPrivate, members: o.isPrivate ? [] : (_a = l.members) == null ? void 0 : _a.map((f) => ({ projectId: l.id, userId: f.user.id, role: f.role, invitedByUserId: v })) });
      x(s), toast.success("Project settings updated successfully"), c(false);
    } catch (s) {
      console.error("Error updating project:", s), toast.error("Failed to update project");
    } finally {
      w(false);
    }
  }, L = async () => {
    if (a !== l.name) {
      toast.error("Project name does not match");
      return;
    }
    P(true);
    try {
      await fe().chatrooms.deleteProject(l.id), toast.success("Project deleted successfully"), c(false), l.teamspaceId ? (C((g) => g.map((f) => ({ ...f, projects: f.projects.filter((I) => I.id !== l.id) }))), M({ to: "/teamspace/$teamspaceId", params: { teamspaceId: l.teamspaceId } })) : M({ to: "/chat" });
    } catch (g) {
      console.error("Error deleting project:", g), toast.error("Failed to delete project");
    } finally {
      P(false);
    }
  };
  return jsxs(b, { open: b$1, onOpenChange: c, children: [jsx(h, { asChild: true, children: m || jsxs(O, { size: "sm", variant: "outline", className: "hover:cursor-pointer", children: [jsx(Settings, { className: "h-4 w-4 mr-2" }), " Project Settings"] }) }), jsx(f, { className: "sm:max-w-[500px]", children: D ? jsxs("div", { children: [jsxs(p, { children: [jsx("div", { className: "h-1.5 bg-red-500 w-full absolute top-0 left-0 rounded-t-lg" }), jsxs(u, { className: "text-xl mt-2 text-red-600 flex items-center", children: [jsx(Trash2, { className: "h-5 w-5 mr-2" }), " Delete Project"] }), jsx(y$1, { children: "This action cannot be undone. This will permanently delete the project and remove all associated chats and data." })] }), jsxs("div", { className: "py-4", children: [jsx("div", { className: "bg-red-50 border border-red-200 rounded-md p-4 mb-4", children: jsxs("div", { className: "flex items-center", children: [jsx("span", { className: "text-xl mr-2", children: "\u{1F4A9}" }), jsxs("p", { className: "text-sm text-red-800", children: ["Are you absolutely sure you want to delete ", jsx("strong", { children: l.name }), "? This action is irreversible!"] })] }) }), jsxs("div", { className: "grid gap-2", children: [jsxs(te, { htmlFor: "confirmName", className: "text-sm font-medium", children: ["To confirm, type ", jsx("span", { className: "font-bold", children: l.name }), " below:"] }), jsx(ee, { id: "confirmName", value: a, onChange: (g) => k(g.target.value), placeholder: `Type "${l.name}" to confirm` })] }), jsxs("div", { className: "flex justify-between mt-6", children: [jsx(O, { type: "button", variant: "outline", onClick: () => y(false), disabled: j, children: "Cancel" }), jsx(O, { type: "button", variant: "destructive", className: "bg-red-600 hover:bg-red-700", onClick: L, disabled: a !== l.name || j, children: j ? "Deleting..." : "Permanently Delete Project" })] })] })] }) : jsxs("form", { onSubmit: S, children: [jsxs(p, { children: [jsx("div", { className: "h-1.5 bg-emerald-500 w-full absolute top-0 left-0 rounded-t-lg" }), jsx(u, { className: "text-xl mt-2", children: "Project Settings" }), jsx(y$1, { children: "Update the details and settings of your project" })] }), jsxs("div", { className: "grid gap-4 py-4", children: [jsxs("div", { className: "grid gap-2", children: [jsxs(te, { htmlFor: "name", children: ["Project Name ", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(ee, { id: "name", name: "name", value: o.name, onChange: d$1, placeholder: "e.g. Marketing Campaign", required: true })] }), jsxs("div", { className: "grid gap-2", children: [jsx(te, { htmlFor: "description", children: "Description" }), jsx(Nt, { id: "description", name: "description", value: o.description, onChange: d$1, placeholder: "What is this project about?", rows: 3 })] }), jsxs("div", { className: "flex items-center space-x-2", children: [jsx(d, { id: "isPrivate", checked: o.isPrivate, onCheckedChange: T, disabled: !i && !l.isPrivate }), jsxs("div", { className: "grid gap-1.5 leading-none", children: [jsxs(te, { htmlFor: "isPrivate", className: `text-sm font-medium leading-none flex items-center ${!i && !l.isPrivate ? "text-muted-foreground" : ""}`, children: [jsx(Lock, { className: "h-3.5 w-3.5 mr-1.5 text-muted-foreground" }), "Make project private"] }), jsx("p", { className: "text-xs text-muted-foreground", children: "Private projects are only visible to invited members" })] })] }), !i && !l.isPrivate && jsxs(Ie, { variant: "warning", className: "bg-amber-50 text-amber-800 border-amber-200", children: [jsx(AlertCircle, { className: "h-4 w-4" }), jsx(je, { children: "Projects with multiple members cannot be made private" })] }), jsx("div", { className: "border-t pt-4 mt-2", children: jsxs("div", { className: "flex flex-col space-y-2", children: [jsx("h3", { className: "text-sm font-medium text-red-600", children: "Danger Zone" }), jsx("p", { className: "text-xs text-muted-foreground", children: "Once you delete a project, there is no going back. This action cannot be undone." }), jsxs(O, { type: "button", variant: "destructive", className: "mt-2 bg-red-600 hover:bg-red-700", onClick: () => y(true), children: [jsx(Trash2, { className: "h-4 w-4 mr-2" }), " Delete Project"] })] }) })] }), jsxs(g, { children: [jsx(v$1, { asChild: true, children: jsx(O, { variant: "outline", type: "button", disabled: h$1, children: "Cancel" }) }), jsx(O, { type: "submit", className: "bg-emerald-600 hover:bg-emerald-700", disabled: h$1, children: h$1 ? "Saving..." : "Save Changes" })] })] }) })] });
}
const xe = ({ teamspaceId: l = null, projectId: x = null, chatroomId: m = null, organizationId: v, uploadType: M = "DOCUMENT", receiverIds: C = [], onUploadComplete: b, compact: c = false, files: h = [], className: w = "" }) => {
  const j = useFileUpload({ maxFiles: 10, maxFileSize: 52428800 }), [P, D] = useState(false), [y, a] = useState(false), k = async (n) => {
    if (n.length) {
      D(true);
      try {
        const i = new FormData(), r = { teamspaceId: l || null, projectId: x || null, chatroomId: m || null, organizationId: v, uploadType: M };
        i.append("metadata", JSON.stringify(r)), C.length > 0 && i.append("receiverIds", JSON.stringify(C)), n.forEach((S) => {
          i.append("file", S);
        });
        const d = await fe().file_management.uploadFilesWithMetadata("POST", i);
        if (!d.ok) throw new Error(`Upload failed: ${d.statusText}`);
        const T = await d.json();
        console.log("Upload successful:", T), b && b(T), c && a(false);
      } catch (i) {
        console.error("Error uploading files:", i instanceof Error ? i.message : String(i));
      } finally {
        D(false);
      }
    }
  }, o = (n) => {
    if (n === 0) return "0 Bytes";
    const i = 1024, r = ["Bytes", "KB", "MB", "GB"], d = Math.floor(Math.log(n) / Math.log(i));
    return parseFloat((n / Math.pow(i, d)).toFixed(1)) + " " + r[d];
  };
  return c && !y ? jsxs("div", { className: `flex items-center gap-2 ${w}`, children: [jsxs("button", { onClick: () => a(true), className: "inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors", children: [jsx(Upload, { size: 12 }), jsx("span", { children: "Upload" })] }), h && h.length > 0 && jsxs("div", { className: "text-xs text-muted-foreground", children: [h.length, " file", h.length !== 1 ? "s" : ""] })] }) : jsx(FileUpload.RootProvider, { value: j, children: jsxs("div", { className: `relative ${w}`, children: [c && jsx("button", { onClick: () => a(false), className: "absolute right-0 top-0 p-1 text-gray-400 hover:text-gray-600 z-10", children: jsx(X, { size: 16 }) }), jsxs("div", { className: "space-y-2", children: [!c && jsx(FileUpload.Label, { className: "block text-sm font-medium text-gray-700", children: "Upload Files" }), jsx(FileUpload.Dropzone, { className: `border-2 border-dashed border-gray-300 rounded-lg text-center
            ${c ? "p-3" : "p-6"} bg-gray-50 hover:bg-gray-100 transition-colors`, children: c ? jsxs("div", { className: "flex flex-col items-center", children: [jsx(Upload, { className: "h-5 w-5 text-gray-500 mb-1" }), jsx(FileUpload.Trigger, { className: "text-xs text-emerald-600 font-medium hover:underline", children: "Choose Files" })] }) : jsxs(Fragment, { children: [jsx("p", { className: "text-gray-600 mb-2", children: "Drag your files here" }), jsx(FileUpload.Trigger, { className: "py-2 px-4 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors", children: "Choose Files" })] }) }), jsx(FileUpload.ItemGroup, { children: jsx(FileUpload.Context, { children: (n) => jsxs(Fragment, { children: [n.acceptedFiles.length > 0 && jsx("div", { className: `space-y-2 mt-2 ${c ? "max-h-32 overflow-y-auto" : ""}`, children: n.acceptedFiles.map((i) => jsxs(FileUpload.Item, { file: i, className: "flex items-center p-2 border rounded bg-white", children: [jsx(FileUpload.ItemPreview, { type: "image/*", className: "w-8 h-8 mr-2 bg-gray-100 flex items-center justify-center rounded overflow-hidden", children: jsx(FileUpload.ItemPreviewImage, { className: "max-w-full max-h-full object-cover" }) }), jsx(FileUpload.ItemPreview, { type: ".*", className: "w-8 h-8 mr-2 bg-gray-100 flex items-center justify-center rounded", children: jsx(FileIcon, { className: "h-4 w-4 text-gray-500" }) }), jsxs("div", { className: "flex-1 truncate", children: [jsx(FileUpload.ItemName, { className: "font-medium text-sm truncate" }), jsx(FileUpload.ItemSizeText, { className: "text-xs text-gray-500" })] }), P ? jsx("div", { className: "animate-pulse text-emerald-500", children: jsxs("svg", { className: "animate-spin h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }) }) : jsx(FileUpload.ItemDeleteTrigger, { className: "text-red-500 hover:text-red-700 p-1", children: jsx(X, { className: "h-4 w-4" }) })] }, i.name)) }), n.acceptedFiles.length > 0 && !P && jsxs("button", { onClick: () => k(n.acceptedFiles), className: `mt-2 py-1.5 px-3 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors
                        flex items-center justify-center gap-1.5 ${c ? "text-xs w-full" : "w-full"}`, children: [jsx(Upload, { className: `${c ? "h-3 w-3" : "h-4 w-4"}` }), jsxs("span", { children: ["Upload ", n.acceptedFiles.length, " File", n.acceptedFiles.length !== 1 ? "s" : ""] })] })] }) }) })] }), h && h.length > 0 && !c && jsxs("div", { className: "mt-4", children: [jsx("h4", { className: "text-sm font-medium mb-2 text-gray-700", children: "Uploaded Files" }), jsx("div", { className: "space-y-2 max-h-40 overflow-y-auto pr-1", children: h.map((n, i) => jsxs("div", { className: "flex items-center p-2 border rounded bg-white", children: [jsx("div", { className: "w-8 h-8 mr-2 bg-gray-100 flex items-center justify-center rounded", children: jsx(FileIcon, { className: "h-4 w-4 text-gray-500" }) }), jsxs("div", { className: "flex-1 truncate", children: [jsx("p", { className: "font-medium text-sm truncate", children: n.name || `File ${i + 1}` }), jsx("p", { className: "text-xs text-gray-500", children: n.size ? o(n.size) : "Unknown size" })] }), jsx(CheckCircle, { className: "h-4 w-4 text-emerald-500" })] }, i)) })] }), jsx(FileUpload.HiddenInput, {})] }) });
}, Ne = (l) => {
  switch (l) {
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
function Ze({ members: l }) {
  const [x, m] = useState(false), [v, M] = useState(false), C = 5, b = l.filter((a, k, o) => k === o.findIndex((n) => {
    var _a, _b;
    return ((_a = n.user) == null ? void 0 : _a.id) === ((_b = a.user) == null ? void 0 : _b.id);
  })), c = b.filter((a) => !a.hasLeft), h = b.filter((a) => a.hasLeft), w = (a, k) => {
    const o = { OWNER: 0, ADMIN: 1, CONTRIBUTOR: 2, VIEWER: 3 };
    return (o[a.role] || 4) - (o[k.role] || 4);
  }, j = [...c].sort(w), P = [...h].sort(w), D = x ? j : j.slice(0, c.length >= C ? C : c.length), y = c.length > C && !x;
  return jsxs("div", { className: "space-y-3", children: [jsx("div", { children: D.map((a) => {
    var _a, _b, _c, _d, _e2, _f;
    return jsx("div", { className: "py-1.5", children: jsxs("div", { className: "relative flex items-center justify-between group", children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx(i, { className: "h-7 w-7", children: ((_a = a.user) == null ? void 0 : _a.image) ? jsx("img", { src: a.user.image, alt: ((_b = a.user) == null ? void 0 : _b.name) || "User" }) : jsx("div", { className: "bg-gray-200 h-full w-full flex items-center justify-center text-gray-700 text-xs", children: (((_c = a.user) == null ? void 0 : _c.name) || "U").charAt(0) }) }), jsx(la, { children: jsxs(Oe, { children: [jsx(je$1, { asChild: true, children: jsx("span", { className: "text-sm font-medium truncate max-w-[120px]", children: ((_d = a.user) == null ? void 0 : _d.name) || "Unknown User" }) }), jsxs(Me, { children: [jsx("p", { children: ((_e2 = a.user) == null ? void 0 : _e2.name) || "Unknown User" }), jsx("p", { className: "text-xs text-muted-foreground", children: (_f = a.user) == null ? void 0 : _f.email })] })] }) })] }), jsx(mt, { className: Ne(a.role), children: a.role })] }) }, a.id);
  }) }), y && jsx(O, { variant: "ghost", size: "sm", className: "w-full text-xs h-7", onClick: () => m(true), children: jsxs("span", { className: "flex items-center", children: ["Show ", c.length - C, " More ", jsx(ChevronDown, { className: "ml-1 h-3 w-3" })] }) }), x && c.length > C && jsx(O, { variant: "ghost", size: "sm", className: "w-full text-xs h-7", onClick: () => m(false), children: jsxs("span", { className: "flex items-center", children: ["Show Less ", jsx(ChevronUp, { className: "ml-1 h-3 w-3" })] }) }), h.length > 0 && jsxs(xe$1, { open: v, onOpenChange: M, className: "mt-3", children: [jsxs("div", { className: "flex items-center text-xs text-muted-foreground", children: [jsx("div", { className: "h-px bg-border flex-grow mr-2" }), jsx(ye$1, { asChild: true, children: jsxs("button", { className: "flex items-center gap-1 px-2 py-1 rounded-sm hover:bg-muted/50 transition-colors", children: [jsxs("span", { children: ["Former Members (", h.length, ")"] }), v ? jsx(ChevronUp, { className: "h-3 w-3" }) : jsx(ChevronDown, { className: "h-3 w-3" })] }) }), jsx("div", { className: "h-px bg-border flex-grow ml-2" })] }), jsx(le, { className: "pt-2", children: jsx("div", { className: "space-y-1.5", children: P.map((a) => {
    var _a, _b, _c, _d, _e2, _f;
    return jsx("div", { children: jsxs("div", { className: "relative flex items-center justify-between group py-1.5", children: [jsx("div", { className: "absolute inset-0 rounded-md bg-muted/30 pointer-events-none" }), jsxs("div", { className: "flex items-center gap-2 z-10", children: [jsxs("div", { className: "relative", children: [jsx(i, { className: "h-7 w-7", children: ((_a = a.user) == null ? void 0 : _a.image) ? jsx("img", { src: a.user.image, alt: ((_b = a.user) == null ? void 0 : _b.name) || "User", className: "filter grayscale" }) : jsx("div", { className: "bg-gray-200 h-full w-full flex items-center justify-center text-gray-700 text-xs", children: (((_c = a.user) == null ? void 0 : _c.name) || "U").charAt(0) }) }), jsx("div", { className: "absolute -bottom-1 -right-1 rounded-full w-3 h-3 bg-muted border border-background flex items-center justify-center", children: jsx("span", { className: "text-[8px]", children: "\xD7" }) })] }), jsx(la, { children: jsxs(Oe, { children: [jsx(je$1, { asChild: true, children: jsx("span", { className: "text-sm font-medium truncate max-w-[120px] text-muted-foreground", children: ((_d = a.user) == null ? void 0 : _d.name) || "Unknown User" }) }), jsxs(Me, { children: [jsx("p", { children: ((_e2 = a.user) == null ? void 0 : _e2.name) || "Unknown User" }), jsx("p", { className: "text-xs text-muted-foreground", children: (_f = a.user) == null ? void 0 : _f.email }), jsx("p", { className: "text-xs text-red-500 mt-1", children: "No longer a member" })] })] }) })] }), jsx(mt, { className: `${Ne(a.role)} opacity-70`, children: a.role })] }) }, a.id);
  }) }) })] })] });
}
const _t = function() {
  var _a, _b, _c, _d, _e2;
  const { projectId: x } = Sa.useParams(), [m, v$1] = useState(false), [M, C] = useState(true), [b, c] = useState(""), [h, w] = useState(""), [j, P] = useState(false), [D, y] = useState(false), [a, k] = useAtom(Es), o = useSetAtom(He), n = Sa.useRouteContext(), [i] = useState(n.userId), r = a.flatMap((s) => s.projects || []).find((s) => s.id === x), d = a.find((s) => s.id === (r == null ? void 0 : r.teamspaceId));
  useEffect(() => {
    r && C(false);
  }, [r]);
  const T = useNavigate();
  if (M) return jsxs("div", { className: "flex-1 flex flex-col h-full", children: [jsx("div", { className: "h-1.5 bg-gray-200 w-full" }), jsxs("div", { className: "p-6 max-w-5xl mx-auto w-full flex-1", children: [jsxs("div", { className: "mb-8 relative", children: [jsx(Ne$1, { className: "h-10 w-60 mb-2" }), jsx(Ne$1, { className: "h-4 w-full max-w-md mb-4" })] }), jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [jsxs("div", { className: "md:col-span-2 space-y-6", children: [jsx("div", { children: jsx(Ne$1, { className: "h-32 w-full mb-6" }) }), jsxs("div", { children: [jsx("div", { className: "flex justify-between items-center mb-4", children: jsx(Ne$1, { className: "h-8 w-40" }) }), jsxs("div", { className: "space-y-3", children: [jsx(Ne$1, { className: "h-16 w-full" }), jsx(Ne$1, { className: "h-16 w-full" })] })] })] }), jsxs("div", { className: "space-y-6", children: [jsx(Ne$1, { className: "h-60 w-full" }), jsx(Ne$1, { className: "h-60 w-full" })] })] })] })] });
  if (!r) return jsxs("div", { className: "flex-1 flex flex-col items-center justify-center p-8 text-center", children: [jsx("h2", { className: "text-2xl font-bold mb-4", children: "Project not found" }), jsx("p", { className: "text-muted-foreground mb-6", children: "The project you're looking for doesn't exist or you don't have access to it." }), d ? jsx(O, { variant: "outline", asChild: true, children: jsx(Link, { to: "/teamspace/$teamspaceId", params: { teamspaceId: d.id }, children: "Back to Teamspace" }) }) : jsx(O, { variant: "outline", asChild: true, children: jsx(Link, { to: "/chat", children: "Go to Chat" }) })] });
  const S = async (s = "") => {
    var _a2;
    if (m) return;
    v$1(true);
    const f = As({ currentUserId: i, project: r, teamspace: d });
    try {
      const { data: I } = await fe().chatrooms.createChatroom({ chatroomCreatorId: i, chatroomMembers: f, isPrivate: false, projectId: r.id, name: s.trim() || "New Chat Conversation", teamIds: [], type: "PROJECT_CHATROOM" });
      (_a2 = r.chatrooms) == null ? void 0 : _a2.push(I), o(I), T({ to: "/chat/$chatroomId", params: { chatroomId: I.id } });
    } catch (I) {
      console.error("Error creating chatroom:", I);
    } finally {
      v$1(false), y(false), w("");
    }
  }, L = async () => {
    var _a2;
    if (!(!b.trim() || m)) try {
      v$1(true);
      const s = As({ currentUserId: i, project: r, teamspace: d }), { data: f } = await fe().chatrooms.createChatroom({ chatroomCreatorId: i, chatroomMembers: s, isPrivate: false, projectId: r.id, name: "New Chat Conversation", teamIds: [], type: "PROJECT_CHATROOM" });
      (_a2 = r.chatrooms) == null ? void 0 : _a2.push(f), localStorage.setItem("pendingMessage", b), o(f), T({ to: "/chat/$chatroomId", params: { chatroomId: f.id } });
    } catch (s) {
      console.error("Error starting quick chat:", s), v$1(false);
    }
  }, g = (s) => {
    const f = a.map((I) => {
      var _a2;
      return I.id === (d == null ? void 0 : d.id) ? { ...I, projects: (_a2 = I.projects) == null ? void 0 : _a2.map((Y) => Y.id === (r == null ? void 0 : r.id) ? s : Y) } : I;
    });
    k(f);
  };
  return jsxs("div", { className: "flex-1 flex flex-col h-full", children: [jsx("div", { className: "h-1.5 bg-emerald-500 w-full flex-shrink-0" }), jsxs("div", { className: "p-6 max-w-5xl mx-auto w-full flex-1 overflow-y-auto", children: [jsxs("div", { className: "flex items-center text-sm text-muted-foreground mb-4", children: [jsxs(Link, { to: "/chat", className: "flex items-center hover:text-foreground transition-colors", children: [jsx(Home, { className: "h-3.5 w-3.5 mr-1" }), "Home"] }), d && jsxs(Fragment, { children: [jsx(ChevronRight, { className: "h-3.5 w-3.5 mx-1.5" }), jsxs(Link, { to: "/teamspace/$teamspaceId", params: { teamspaceId: d.id }, className: "flex items-center hover:text-foreground transition-colors", children: [jsx(Briefcase, { className: "h-3.5 w-3.5 mr-1.5" }), d.name] })] }), jsx(ChevronRight, { className: "h-3.5 w-3.5 mx-1.5" }), jsxs("span", { className: "font-medium text-foreground flex items-center", children: [jsx(FolderOpen, { className: "h-3.5 w-3.5 mr-1.5" }), "Project"] })] }), jsxs("div", { className: "mb-8 relative", children: [jsxs("div", { className: "flex items-center gap-3 mb-2", children: [jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700", children: jsx(FolderOpen, { className: "h-5 w-5" }) }), jsxs("div", { children: [jsx("h1", { className: "text-3xl font-bold", children: r.name }), jsxs("div", { className: "flex items-center mt-1", children: [jsx("span", { className: "inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20", children: "Project" }), r.isPrivate && jsxs("span", { className: "ml-2 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20", children: [jsx(Lock, { className: "h-3 w-3 mr-1" }), "Private"] }), d && jsxs("span", { className: "ml-2 text-sm text-muted-foreground flex items-center", children: [jsx(Briefcase, { className: "h-3 w-3 mr-1" }), d.name] })] })] })] }), jsx("div", { className: "mt-2", children: jsx("p", { className: "text-muted-foreground", children: r.description || "No description provided" }) }), jsx("div", { className: "absolute top-0 right-0", children: jsx(Qe, { project: r, userId: i, onProjectUpdated: g }) })] }), jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [jsxs("div", { className: "md:col-span-2 space-y-6", children: [jsxs(ue, { className: "border-b-4 border-b-emerald-500", children: [jsxs(ye, { className: "pb-3", children: [jsx(de, { children: "New chat in this project" }), jsx(ne, { children: "Start a new conversation in the context of this project" })] }), jsx(ie, { children: jsxs(Ge, { value: b, onChange: (s) => c(s.target.value), onSubmit: L, hasMessages: false, children: [jsx(Pe, { placeholder: m ? "Creating chat..." : "Type a message to start a new chat...", disabled: m, onKeyDown: (s) => {
    s.key === "Enter" && !s.shiftKey && (s.preventDefault(), L());
  } }), jsx(Be, { disabled: m || !b.trim() })] }) })] }), jsxs("div", { children: [jsxs("div", { className: "flex justify-between items-center mb-4", children: [jsx("h2", { className: "text-xl font-semibold", children: "Chats in this project" }), D ? jsxs("div", { className: "flex items-center gap-2", children: [jsx("input", { type: "text", className: "px-3 py-1 border rounded-md text-sm", placeholder: "Chatroom name...", value: h, onChange: (s) => w(s.target.value), onKeyDown: (s) => {
    s.key === "Enter" ? S(h) : s.key === "Escape" && (y(false), w(""));
  }, autoFocus: true }), jsx(O, { size: "sm", onClick: () => S(h), disabled: m, className: "bg-emerald-600 hover:bg-emerald-700 text-white hover:cursor-pointer", children: "Create" }), jsx(O, { size: "sm", variant: "ghost", onClick: () => {
    y(false), w("");
  }, className: "hover:cursor-pointer", children: "Cancel" })] }) : jsxs(O, { size: "sm", onClick: () => y(true), disabled: m, className: "bg-emerald-600 hover:bg-emerald-700 text-white hover:cursor-pointer", children: [jsx(MessageSquarePlus, { className: "h-4 w-4 mr-2" }), " New Chat"] })] }), r.chatrooms && r.chatrooms.length > 0 ? jsx("div", { className: "space-y-3", children: r.chatrooms.map((s) => {
    var _a2;
    return jsx(ue, { className: v("cursor-pointer transition-all border-l-4 border-l-transparent", "hover:shadow-md hover:border-l-emerald-500 hover:bg-muted/30"), onClick: () => {
      o(s), T({ to: "/chat" });
    }, children: jsx(ye, { className: "py-3", children: jsxs("div", { className: "flex items-center justify-between", children: [jsxs(de, { className: "text-base flex items-center", children: [jsx(MessageCircle, { className: "h-4 w-4 mr-2" }), s.name, s.isPrivate && jsx(la, { children: jsxs(Oe, { children: [jsx(je$1, { asChild: true, children: jsx("span", { children: jsx(Lock, { className: "h-3 w-3 ml-2 text-red-500" }) }) }), jsx(Me, { children: jsx("p", { children: "Private" }) })] }) })] }), jsx("div", { className: "flex items-center gap-3 text-muted-foreground text-xs", children: jsxs("div", { className: "flex items-center", children: [jsx(Users, { className: "h-3 w-3 mr-1" }), ((_a2 = s.members) == null ? void 0 : _a2.length) || 1] }) })] }) }) }, s.id);
  }) }) : jsxs("div", { className: "border rounded-lg p-8 text-center bg-muted/20", children: [jsx("h3", { className: "font-medium mb-2", children: "No chats yet" }), jsx("p", { className: "text-muted-foreground mb-4", children: "Start by creating your first chat in this project" }), jsxs(O, { variant: "outline", onClick: () => y(true), className: "border-emerald-600/20 text-emerald-700 hover:bg-emerald-50", children: [jsx(MessageSquarePlus, { className: "h-4 w-4 mr-2" }), " Create Chat"] })] })] })] }), jsxs("div", { className: "space-y-6", children: [jsxs(ue, { className: "border-t-4 border-t-emerald-500", children: [jsxs(ye, { children: [jsxs(de, { className: "flex items-center justify-between", children: [jsx("span", { children: "Project Context" }), jsx(O, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0 hover:cursor-pointer", onClick: () => P(!j), children: jsx(Settings, { className: "h-4 w-4" }) })] }), jsx(ne, { children: "Information about this project's purpose" })] }), jsx(ie, { children: j ? jsxs("div", { className: "space-y-4", children: [jsx("textarea", { className: "w-full min-h-[150px] p-3 border rounded-md", placeholder: "Describe what this teamspace is used for...", value: r.context }), jsxs("div", { className: "flex justify-end space-x-2", children: [jsx(O, { variant: "outline", size: "sm", onClick: () => P(false), children: "Cancel" }), jsx(O, { size: "sm", onClick: () => P(false), children: "Save" })] })] }) : jsx("div", { className: "text-sm", children: jsx("p", { children: r.context }) }) })] }), jsxs(ue, { className: "border-t-4 border-t-emerald-500", children: [jsxs(ye, { children: [jsx(de, { children: "Members" }), jsx(ne, { children: "People with access to this project" })] }), jsx(ie, { children: r.members && r.members.length > 0 ? jsx(Ze, { members: r.members }) : jsx("div", { className: "text-sm text-muted-foreground", children: "Only you have access to this project" }) }), jsx(ke, { children: jsx(pe, { type: "project", projectId: r.id, teamspaceId: r.teamspaceId, members: r.members || [], userId: i, onMembersChanged: () => {
    fe().chatrooms.getTeamspaces().then(({ data: s }) => {
      s && k(s);
    });
  }, children: jsxs(O, { size: "sm", variant: "outline", className: "w-full border-emerald-600/20 text-emerald-700 hover:bg-emerald-50 hover:cursor-pointer", children: [jsx(Users, { className: "h-4 w-4 mr-2" }), " Manage Members"] }) }) })] }), jsxs(ue, { className: "border-t-4 border-t-emerald-500", children: [jsx(ye, { children: jsx(de, { children: "Project Stats" }) }), jsx(ie, { children: jsxs("div", { className: "space-y-2", children: [jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-muted-foreground", children: "Chats" }), jsx("span", { className: "font-medium", children: ((_a = r.chatrooms) == null ? void 0 : _a.length) || 0 })] }), jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-muted-foreground", children: "Members" }), jsx("span", { className: "font-medium", children: ((_b = r.members) == null ? void 0 : _b.length) || 1 })] }), jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-muted-foreground", children: "Files" }), jsx("span", { className: "font-medium", children: ((_c = r.files) == null ? void 0 : _c.length) || 0 })] }), jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-muted-foreground", children: "Created" }), jsx("span", { className: "font-medium", children: new Date(r.createdAt).toLocaleDateString() })] }), r.isPrivate && jsxs("div", { className: "flex justify-between items-center pt-2 mt-2 border-t", children: [jsxs("span", { className: "text-muted-foreground flex items-center", children: [jsx(Lock, { className: "h-3.5 w-3.5 mr-1.5 text-red-500" }), "Visibility"] }), jsx("span", { className: "font-medium text-sm bg-gray-100 px-2 py-0.5 rounded", children: "Private" })] })] }) })] }), jsxs(ue, { className: "border-t-4 border-t-emerald-500", children: [jsxs(ye, { className: "pb-2", children: [jsxs(de, { className: "flex items-center justify-between", children: [jsx("span", { children: "Project Files" }), jsx(xe, { teamspaceId: d == null ? void 0 : d.id, projectId: r.id, organizationId: ((_d = n.session) == null ? void 0 : _d.activeOrganizationId) || void 0, compact: true, files: r.files || [], className: "ml-auto" })] }), jsx(ne, { children: "Upload and manage files for this project" })] }), jsx(ie, { children: r.files && r.files.length > 0 ? jsx("div", { className: "space-y-2 max-h-64 overflow-y-auto pr-1", children: r.files.map((s, f) => jsxs("div", { className: "flex items-center p-2 border rounded bg-white hover:bg-gray-50 transition-colors", children: [jsx("div", { className: "w-8 h-8 mr-2 bg-gray-100 flex items-center justify-center rounded", children: jsx(FileIcon, { className: "h-4 w-4 text-gray-500" }) }), jsxs("div", { className: "flex-1 truncate", children: [jsx("p", { className: "font-medium text-sm truncate", children: s.fileName || `File ${f + 1}` }), jsx("p", { className: "text-xs text-muted-foreground", children: new Date(s.createdAt).toLocaleDateString() })] })] }, f)) }) : jsxs("div", { className: "text-center py-6 bg-muted/20 rounded-lg border border-dashed", children: [jsx(FileIcon, { className: "h-8 w-8 mx-auto text-muted-foreground mb-2" }), jsx("p", { className: "text-sm text-muted-foreground mb-3", children: "No files uploaded yet" }), jsx(xe, { projectId: r.id, organizationId: ((_e2 = n.session) == null ? void 0 : _e2.activeOrganizationId) || void 0, compact: true })] }) })] })] })] })] })] });
};

export { _t as component };
//# sourceMappingURL=_projectId-DFGTUSU4.mjs.map
