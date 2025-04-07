import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { v, E as Es, O, e as ee, a0 as Ct, a1 as mt, a4 as fe } from '../nitro/nitro.mjs';
import * as y from 'react';
import { useState } from 'react';
import { b as b$1, h, f, p, u, y as y$1, g } from './dialog-BARnul6K.mjs';
import { i } from './avatar-pWQn_6aq.mjs';
import { Users, Search, Plus, X } from 'lucide-react';
import * as b from '@radix-ui/react-tabs';
import { toast } from 'sonner';
import { useSetAtom } from 'jotai';
import * as k from '@radix-ui/react-collapsible';

function Ne({ className: r, ...n }) {
  return jsx("div", { "data-slot": "skeleton", className: v("bg-primary/10 animate-pulse rounded-md", r), ...n });
}
const ne = b.Root, j = y.forwardRef(({ className: r, ...n }, l) => jsx(b.List, { ref: l, className: v("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", r), ...n }));
j.displayName = b.List.displayName;
const R = y.forwardRef(({ className: r, ...n }, l) => jsx(b.Trigger, { ref: l, className: v("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", r), ...n }));
R.displayName = b.Trigger.displayName;
const I = y.forwardRef(({ className: r, ...n }, l) => jsx(b.Content, { ref: l, className: v("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", r), ...n }));
I.displayName = b.Content.displayName;
function pe(r) {
  const [n, l] = useState(false), [P, O$1] = useState("current"), [v, B] = useState(""), [A, D] = useState(false), S = useSetAtom(Es), N = [...r.type === "teamspace" ? r.members.filter((e) => {
    var _a, _b, _c, _d;
    return ((_b = (_a = e.user) == null ? void 0 : _a.name) == null ? void 0 : _b.toLowerCase().includes(v.toLowerCase())) || ((_d = (_c = e.user) == null ? void 0 : _c.email) == null ? void 0 : _d.toLowerCase().includes(v.toLowerCase()));
  }).filter((e, t, a) => t === a.findIndex((c) => {
    var _a, _b;
    return ((_a = c.user) == null ? void 0 : _a.id) === ((_b = e.user) == null ? void 0 : _b.id);
  })) : r.members.filter((e) => {
    var _a, _b, _c, _d;
    return ((_b = (_a = e.user) == null ? void 0 : _a.name) == null ? void 0 : _b.toLowerCase().includes(v.toLowerCase())) || ((_d = (_c = e.user) == null ? void 0 : _c.email) == null ? void 0 : _d.toLowerCase().includes(v.toLowerCase()));
  }).filter((e, t, a) => t === a.findIndex((c) => {
    var _a, _b;
    return ((_a = c.user) == null ? void 0 : _a.id) === ((_b = e.user) == null ? void 0 : _b.id);
  }))].sort((e, t) => {
    if (e.hasLeft !== t.hasLeft) return e.hasLeft ? 1 : -1;
    const a = { OWNER: 0, ADMIN: 1, CONTRIBUTOR: 2, VIEWER: 3 };
    return (a[e.role] || 4) - (a[t.role] || 4);
  }), W = (e) => {
    switch (e) {
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
  }, $ = async (e) => {
    if (!A) {
      D(true);
      try {
        const t = fe();
        if (r.type === "teamspace") {
          const a = r.members.find((f) => f.id === e);
          if (!a) {
            toast.error("Member not found");
            return;
          }
          const c = a.hasLeft;
          await t.chatrooms.changeTeamspaceMemberStatus(r.teamspaceId, e, { kickStatus: !c }), S((f) => f.map((o) => {
            var _a, _b;
            if (o.id === r.teamspaceId) {
              const L = ((_a = o.members) == null ? void 0 : _a.map((d) => d.id === e ? { ...d, hasLeft: !a.hasLeft } : d)) || [], g = ((_b = o.projects) == null ? void 0 : _b.map((d) => {
                var _a2, _b2;
                const M = ((_a2 = d.members) == null ? void 0 : _a2.map((u) => {
                  var _a3, _b3;
                  return ((_a3 = u.user) == null ? void 0 : _a3.id) === ((_b3 = a.user) == null ? void 0 : _b3.id) ? { ...u, hasLeft: !a.hasLeft } : u;
                })) || [], m = ((_b2 = d.chatrooms) == null ? void 0 : _b2.map((u) => {
                  var _a3;
                  const p = ((_a3 = u.members) == null ? void 0 : _a3.map((T) => {
                    var _a4, _b3;
                    return ((_a4 = T.user) == null ? void 0 : _a4.id) === ((_b3 = a.user) == null ? void 0 : _b3.id) ? { ...T, hasLeft: !a.hasLeft } : T;
                  })) || [];
                  return { ...u, members: p };
                })) || [];
                return { ...d, members: M, chatrooms: m };
              })) || [];
              return { ...o, members: L, projects: g };
            }
            return o;
          })), c ? toast.success("Member re-invited successfully") : toast.success("Member removed successfully");
        } else {
          const a = r.members.find((f) => f.id === e);
          if (!a) {
            toast.error("Member not found");
            return;
          }
          const c = a.hasLeft;
          await t.chatrooms.changeProjectMemberStatus(r.projectId, e, { kickStatus: !c }), S((f) => f.map((o) => {
            var _a;
            if (o.id === r.teamspaceId) {
              const L = ((_a = o.projects) == null ? void 0 : _a.map((g) => {
                var _a2, _b;
                if (g.id === r.projectId) {
                  const d = ((_a2 = g.members) == null ? void 0 : _a2.map((m) => m.id === e ? { ...m, hasLeft: !a.hasLeft } : m)) || [], M = ((_b = g.chatrooms) == null ? void 0 : _b.map((m) => {
                    var _a3;
                    const u = ((_a3 = m.members) == null ? void 0 : _a3.map((p) => {
                      var _a4, _b2;
                      return ((_a4 = p.user) == null ? void 0 : _a4.id) === ((_b2 = a.user) == null ? void 0 : _b2.id) ? { ...p, hasLeft: !a.hasLeft } : p;
                    })) || [];
                    return { ...m, members: u };
                  })) || [];
                  return { ...g, members: d, chatrooms: M };
                }
                return g;
              })) || [];
              return { ...o, projects: L };
            }
            return o;
          })), setTimeout(() => l(false), 500), c ? toast.success("Member re-invited successfully") : toast.success("Member removed successfully");
        }
      } catch (t) {
        console.error("Error updating member status:", t), toast.error("Failed to update member status");
      } finally {
        D(false);
      }
    }
  }, E = (() => {
    const { userId: e } = r;
    if (r.type === "teamspace") {
      const t = r.members.find((a) => a.user.id === e);
      return (t == null ? void 0 : t.role) === "OWNER" || (t == null ? void 0 : t.role) === "ADMIN";
    } else {
      const t = r.members.find((a) => a.user.id === e);
      return (t == null ? void 0 : t.role) === "OWNER" || (t == null ? void 0 : t.role) === "ADMIN";
    }
  })(), U = (e) => {
    var _a, _b, _c, _d, _e;
    const t = e.hasLeft;
    return jsxs("div", { className: "flex items-center justify-between", children: [jsxs("div", { className: "flex items-center gap-3", children: [jsx(i, { className: `h-8 w-8 ${t ? "opacity-50" : ""}`, children: ((_a = e.user) == null ? void 0 : _a.image) ? jsx("img", { src: e.user.image, alt: ((_b = e.user) == null ? void 0 : _b.name) || "User", className: t ? "grayscale" : "" }) : jsx("div", { className: `bg-gray-200 h-full w-full flex items-center justify-center text-gray-700 ${t ? "bg-gray-100" : ""}`, children: (((_c = e.user) == null ? void 0 : _c.name) || "U").charAt(0) }) }), jsxs("div", { children: [jsxs("div", { className: `font-medium flex items-center ${t ? "text-muted-foreground" : ""}`, children: [((_d = e.user) == null ? void 0 : _d.name) || "Unknown User", t && jsx("span", { className: "ml-2 text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-500", children: "Left" })] }), jsx("div", { className: "text-sm text-muted-foreground", children: ((_e = e.user) == null ? void 0 : _e.email) || "" })] })] }), jsxs("div", { className: "flex items-center gap-2", children: [jsx(mt, { className: `${W(e.role)} ${t ? "opacity-50" : ""}`, children: e.role }), E && e.user.id !== r.userId && jsx(O, { variant: t ? "outline" : "ghost", size: "icon", disabled: A, onClick: () => $(e.id), className: `h-8 w-8 ${t ? "border-green-200 hover:bg-green-50 hover:text-green-700" : ""}`, title: t ? "Re-invite member" : "Remove member", children: t ? jsx(Plus, { className: "h-4 w-4 text-green-600" }) : jsx(X, { className: "h-4 w-4" }) })] })] }, e.id);
  };
  return jsxs(b$1, { open: n, onOpenChange: l, children: [jsx(h, { asChild: true, children: r.children || jsxs(O, { size: "sm", variant: "outline", className: "w-full border-indigo-600/20 text-indigo-700 hover:bg-indigo-50", children: [jsx(Users, { className: "h-4 w-4 mr-2" }), " Manage Members"] }) }), jsxs(f, { className: "sm:max-w-[550px]", children: [jsxs(p, { children: [jsxs(u, { children: ["Manage ", r.type === "teamspace" ? "Teamspace" : "Project", " Members"] }), jsxs(y$1, { children: ["View and manage who has access to this ", r.type] })] }), jsxs(ne, { defaultValue: "current", value: P, onValueChange: O$1, className: "mt-4", children: [jsxs(j, { className: "grid w-full grid-cols-2", children: [jsx(R, { value: "current", children: "Current Members" }), jsx(R, { value: "invite", disabled: !E, children: "Invite Members" })] }), jsxs(I, { value: "current", className: "mt-4", children: [jsx("div", { className: "mb-4", children: jsxs("div", { className: "relative", children: [jsx(Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), jsx(ee, { type: "text", placeholder: "Search members...", className: "pl-8", value: v, onChange: (e) => B(e.target.value) })] }) }), jsx(Ct, { className: "h-[320px] rounded-md border p-4", children: jsx("div", { className: "space-y-4", children: N.length > 0 ? jsxs(Fragment, { children: [N.some((e) => !e.hasLeft) && jsxs("div", { className: "mb-3", children: [jsx("h3", { className: "text-sm font-medium mb-2", children: "Active Members" }), jsx("div", { className: "space-y-3", children: N.filter((e) => !e.hasLeft).map(U) })] }), N.some((e) => e.hasLeft) && jsxs("div", { className: "mt-4", children: [jsxs("div", { className: "mb-2 flex items-center text-xs text-muted-foreground", children: [jsx("div", { className: "h-px bg-border flex-grow mr-2" }), jsx("span", { children: "Former Members" }), jsx("div", { className: "h-px bg-border flex-grow ml-2" })] }), jsx("div", { className: "space-y-3 mt-3", children: N.filter((e) => e.hasLeft).map(U) })] })] }) : jsx("div", { className: "text-center py-8 text-muted-foreground", children: "No members found" }) }) })] }), jsx(I, { value: "invite", className: "mt-4", children: jsxs("div", { className: "bg-muted/40 rounded-md p-8 text-center", children: [jsx("h3", { className: "font-medium mb-2", children: "Invite Members" }), jsx("p", { className: "text-muted-foreground mb-6", children: "This feature is coming soon" }), jsx(O, { variant: "outline", onClick: () => O$1("current"), children: "Back to Current Members" })] }) })] }), jsx(g, { children: jsx(O, { variant: "outline", onClick: () => l(false), children: "Close" }) })] })] });
}
const xe = k.Root, ye = k.Trigger, le = y.forwardRef(({ className: r, ...n }, l) => jsx(k.Content, { ref: l, className: v("overflow-hidden transition-all duration-300 ease-in-out", r), ...n }));
le.displayName = "CollapsibleContent";

export { Ne as N, le as l, pe as p, xe as x, ye as y };
//# sourceMappingURL=collapsible-g0t8x5gf.mjs.map
