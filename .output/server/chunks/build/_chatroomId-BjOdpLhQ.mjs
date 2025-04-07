import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { createFileRoute, Link } from '@tanstack/react-router';
import y__default, { memo, useRef, useCallback, useEffect, createContext, forwardRef, useMemo, useState, isValidElement, useContext, Suspense, useLayoutEffect } from 'react';
import { v4 } from 'uuid';
import { AnimatePresence as AnimatePresence$1, motion as motion$1 } from 'framer-motion';
import { r, _, d as de$1, y as ye$1, P, o as oe$1, k, c as ce, m as me$1, p as pe$1, f as fe$1, u as ue$1, W, K, X as X$1, Q, h as he$1, b as be, v as ve$1 } from './index-eGnkU4Qz.mjs';
import { animate, useMotionValue, useSpring, AnimatePresence, motion } from 'motion/react';
import { SparklesIcon, UserIcon, ChevronDown, Globe, Telescope, BrainCircuit, Split, ArrowUpIcon, AudioLines, ChevronRight, Folder, FileText, Check, Bot, Star, Settings, MessageSquareIcon, Smile, MessageSquare, Edit } from 'lucide-react';
import { a, r as r$1 } from './getRequestClient-BlbUj71l.mjs';
import { useSetAtom, useAtom } from 'jotai';
import { z } from 'zod';
import { cva } from 'class-variance-authority';
import { marked } from 'marked';
import sr from 'react-markdown';
import or from 'remark-gfm';
import * as Je from '@radix-ui/react-hover-card';
import { encode } from 'qss';
import { toast } from 'sonner';
import { q } from './client-BOYEY5wa.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import '@radix-ui/react-slot';
import '@radix-ui/react-dropdown-menu';
import '@radix-ui/react-scroll-area';
import '@radix-ui/react-dialog';
import '@radix-ui/react-tooltip';
import 'clsx';
import 'tailwind-merge';
import '@tanstack/start-server-core';
import 'tiny-invariant';

const je = memo(({ blur: t = 0, inactiveZone: n = 0.7, proximity: r$1 = 0, spread: a = 20, variant: p = "default", glow: c = false, className: i, movementDuration: m = 2, borderWidth: C = 1, disabled: h = true }) => {
  const N = useRef(null), s = useRef({ x: 0, y: 0 }), k = useRef(0), S = useCallback((d) => {
    N.current && (k.current && cancelAnimationFrame(k.current), k.current = requestAnimationFrame(() => {
      var _a, _b;
      const f = N.current;
      if (!f) return;
      const { left: w, top: o, width: x, height: z } = f.getBoundingClientRect(), B = (_a = d == null ? void 0 : d.x) != null ? _a : s.current.x, g = (_b = d == null ? void 0 : d.y) != null ? _b : s.current.y;
      d && (s.current = { x: B, y: g });
      const E = [w + x * 0.5, o + z * 0.5], y = Math.hypot(B - E[0], g - E[1]), b = 0.5 * Math.min(x, z) * n;
      if (y < b) {
        f.style.setProperty("--active", "0");
        return;
      }
      const v = B > w - r$1 && B < w + x + r$1 && g > o - r$1 && g < o + z + r$1;
      if (f.style.setProperty("--active", v ? "1" : "0"), !v) return;
      const I = parseFloat(f.style.getPropertyValue("--start")) || 0, T = (180 * Math.atan2(g - E[1], B - E[0]) / Math.PI + 90 - I + 180) % 360 - 180, R = I + T;
      animate(I, R, { duration: m, ease: [0.16, 1, 0.3, 1], onUpdate: (O) => {
        f.style.setProperty("--start", String(O));
      } });
    }));
  }, [n, r$1, m]);
  return useEffect(() => {
    if (h) return;
    const d = () => S(), f = (w) => S(w);
    return window.addEventListener("scroll", d, { passive: true }), document.body.addEventListener("pointermove", f, { passive: true }), () => {
      k.current && cancelAnimationFrame(k.current), window.removeEventListener("scroll", d), document.body.removeEventListener("pointermove", f);
    };
  }, [S, h]), jsxs(Fragment, { children: [jsx("div", { className: r("pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity", c && "opacity-100", p === "white" && "border-white", h && "!block") }), jsx("div", { ref: N, style: { "--blur": `${t}px`, "--spread": a, "--start": "0", "--active": "0", "--glowingeffect-border-width": `${C}px`, "--repeating-conic-gradient-times": "5", "--gradient": p === "white" ? `repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  var(--black),
                  var(--black) calc(25% / var(--repeating-conic-gradient-times))
                )` : `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
                radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
                radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), 
                radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  #dd7bbb 0%,
                  #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
                  #5a922c calc(50% / var(--repeating-conic-gradient-times)), 
                  #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
                  #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
                )` }, className: r("pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity", c && "opacity-100", t > 0 && "blur-[var(--blur)] ", i, h && "!hidden"), children: jsx("div", { className: r("glow", "rounded-[inherit]", 'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]', "after:[border:var(--glowingeffect-border-width)_solid_transparent]", "after:[background:var(--gradient)] after:[background-attachment:fixed]", "after:opacity-[var(--active)] after:transition-opacity after:duration-300", "after:[mask-clip:padding-box,border-box]", "after:[mask-composite:intersect]", "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]") }) })] });
});
je.displayName = "GlowingEffect";
const Ee = [{ id: "openai", name: "OpenAI", expanded: true, agents: [{ id: "gpt-4o", name: "GPT-4o", description: "Most capable agent" }, { id: "gpt-4-turbo", name: "GPT-4 Turbo", description: "Fast and powerful" }, { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo", description: "Balanced performance" }] }, { id: "anthropic", name: "Anthropic", agents: [{ id: "claude-3-opus", name: "Claude 3 Opus", description: "Most powerful Claude agent" }, { id: "claude-3-sonnet", name: "Claude 3 Sonnet", description: "Balanced performance" }, { id: "claude-3-haiku", name: "Claude 3 Haiku", description: "Fast responses" }] }, { id: "meta", name: "Meta", agents: [{ id: "llama-3-70b", name: "Llama 3 70B", description: "Largest Llama agent" }, { id: "llama-3-8b", name: "Llama 3 8B", description: "Efficient performance" }] }];
function en({ selectedAgents: t, onSelectAgents: n, isOpen: r$1, onClose: a, multiSelectMode: p = false, maxSelections: c = 4, searchTerm: i = "", onAgentSelect: m, keyboardNavigation: C = false }) {
  const [h, N] = useState(Ee), [s, k] = useState("provider"), S = useRef(null), [d, f] = useState(0), [w, o] = useState([]);
  useRef(false);
  const [x, z] = useState(i);
  useEffect(() => {
    const y = (b) => {
      S.current && !S.current.contains(b.target) && a();
    };
    return r$1 && document.addEventListener("mousedown", y), () => {
      document.removeEventListener("mousedown", y);
    };
  }, [r$1, a]), useEffect(() => {
    if (!r$1 || !C) return;
    const y = (b) => {
      if (b.key === "ArrowDown") b.preventDefault(), f((v) => v < w.length - 1 ? v + 1 : v);
      else if (b.key === "ArrowUp") b.preventDefault(), f((v) => v > 0 ? v - 1 : 0);
      else if (b.key === "Enter" && d >= 0 && d < w.length) {
        b.preventDefault(), b.stopPropagation();
        const v = w[d];
        m ? m(v) : g(v);
      }
    };
    return document.addEventListener("keydown", y, { capture: true }), () => {
      document.removeEventListener("keydown", y, { capture: true });
    };
  }, [r$1, C, d, w, m]), useEffect(() => {
    z(i);
  }, [i]), useEffect(() => {
    if (!r$1) return;
    const y = i.toLowerCase(), b = Ee.map((I) => {
      const $ = I.name.toLowerCase().includes(y), T = I.agents.filter((O) => O.name.toLowerCase().includes(y)), R = y ? $ || T.length > 0 : I.expanded;
      return { ...I, expanded: R, agents: T };
    }).filter((I) => I.name.toLowerCase().includes(y) || I.agents.length > 0);
    N(b);
    const v = [];
    b.forEach((I) => {
      I.expanded && v.push(...I.agents);
    }), o(v), v.length > 0 && f(0), y && v.length === 0 && a();
  }, [i, r$1, a]);
  const B = (y) => {
    N(h.map((b) => b.id === y ? { ...b, expanded: !b.expanded } : b));
  }, g = (y) => {
    const b = t.some((v) => v.id === y.id);
    p ? b ? n(t.filter((v) => v.id !== y.id)) : t.length < c && n([...t, y]) : (n([y]), m || a());
  }, E = (y) => {
    const b = h.find((v) => v.id === y);
    return b ? t.filter((v) => b.agents.some((I) => I.id === v.id)).length : 0;
  };
  return r$1 ? jsxs("div", { ref: S, className: "w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50 h-[350px] flex flex-col", children: [jsxs("div", { className: "flex border-b border-gray-200 flex-shrink-0", children: [jsx("button", { className: r("flex-1 py-2 text-sm font-medium", s === "provider" ? "border-b-2 border-black" : "text-gray-500"), onClick: () => k("provider"), children: "AI Agents" }), jsx("button", { className: r("flex-1 py-2 text-sm font-medium", s === "agent" ? "border-b-2 border-black" : "text-gray-500"), onClick: () => k("agent"), children: "Agents" })] }), i && jsxs("div", { className: "px-3 py-2 text-xs text-gray-500 border-b border-gray-200", children: ['Searching for: "', i, '"'] }), jsxs("div", { className: "overflow-y-auto flex-1", children: [h.length === 0 && jsx("div", { className: "p-3 text-sm text-gray-500", children: "No agents found" }), h.map((y) => {
    const b = E(y.id);
    return jsxs("div", { className: "text-sm", children: [jsxs("div", { className: "flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer", onClick: () => B(y.id), children: [b > 0 && jsx("div", { className: "flex items-center justify-center h-5 w-5 rounded-full bg-red-100 text-red-600 text-xs font-medium mr-1", children: b }), y.expanded ? jsx(ChevronDown, { className: "h-4 w-4 text-gray-500 mr-1" }) : jsx(ChevronRight, { className: "h-4 w-4 text-gray-500 mr-1" }), jsx(Folder, { className: "h-4 w-4 text-gray-500 mr-2" }), jsx("span", { children: y.name })] }), y.expanded && y.agents.map((v) => {
      const I = t.some((R) => R.id === v.id), T = w.findIndex((R) => R.id === v.id) === d;
      return jsxs("div", { className: r("flex items-center pl-10 pr-3 py-2 cursor-pointer", T ? "bg-gray-200" : "hover:bg-gray-100"), onClick: () => {
        m ? m(v) : g(v);
      }, children: [jsx(FileText, { className: "h-4 w-4 text-gray-500 mr-2" }), jsx("span", { className: "flex-1", children: v.name }), I && jsx(Check, { className: "h-4 w-4 text-red-500" })] }, v.id);
    })] }, y.id);
  })] })] }) : null;
}
function tn(t, n = 1) {
  const r = useRef(null);
  return useLayoutEffect(() => {
    const a = r.current;
    if (a) {
      const p = window.getComputedStyle(a), c = Number.parseInt(p.lineHeight, 10) || 20, i = Number.parseInt(p.paddingTop, 10) + Number.parseInt(p.paddingBottom, 10), m = c * n + i;
      a.style.height = "0px";
      const C = Math.max(a.scrollHeight, m);
      a.style.height = `${C + 2}px`;
    }
  }, [r, t, n]), r;
}
const { Children: nn, isValidElement: rn, cloneElement: an } = y__default, X = (t) => t.includes("gpt") ? jsx(BrainCircuit, { className: "h-5 w-5" }) : t.includes("claude") ? jsx(Bot, { className: "h-5 w-5" }) : t.includes("llama") ? jsx(Star, { className: "h-5 w-5" }) : jsx(BrainCircuit, { className: "h-5 w-5" }), Re = { id: "gpt-4o", name: "GPT-4o", description: "Most capable model" }, ve = createContext({}), Pe = ["What's the first rule of Fight Club?", "Who is Tyler Durden?", "Where is Andrew Laeddis Hiding?", "Write a Javascript method to reverse a string", "How to assemble your own PC?", "Explain quantum computing in simple terms", "Write a short story about a robot that falls in love", "What are the ethical implications of AI?", "Design a database schema for a social media app", "Explain how blockchain works to a 5-year-old", "Create a regex for validating email addresses", "What's the difference between REST and GraphQL?", "Suggest five names for my tech startup", "How would you implement a binary search tree?", "Explain the concept of recursion with an example", "Write a haiku about coding at midnight", "What's the significance of P vs NP problem?", "How does natural language processing work?", "Explain the CAP theorem in distributed systems", "Design a simple chatbot algorithm", "What are the pros and cons of microservices?", "How would you optimize a slow-loading website?", "Explain neural networks without technical jargon", "What is technical debt and how do you manage it?", "Write a function to detect a palindrome"], sn = [{ id: "openai", name: "OpenAI", expanded: true, agents: [{ id: "gpt-4o", name: "GPT-4o", description: "Most capable agent" }, { id: "gpt-4-turbo", name: "GPT-4 Turbo", description: "Fast and powerful" }, { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo", description: "Balanced performance" }] }, { id: "anthropic", name: "Anthropic", agents: [{ id: "claude-3-opus", name: "Claude 3 Opus", description: "Most powerful Claude agent" }, { id: "claude-3-sonnet", name: "Claude 3 Sonnet", description: "Balanced performance" }, { id: "claude-3-haiku", name: "Claude 3 Haiku", description: "Fast responses" }] }, { id: "meta", name: "Meta", agents: [{ id: "llama-3-70b", name: "Llama 3 70B", description: "Largest Llama agent" }, { id: "llama-3-8b", name: "Llama 3 8B", description: "Efficient performance" }] }];
function xe({ children: t, className: n, variant: r$1 = "default", value: a, onChange: p, onSubmit: c, loading: i, onStop: m, rows: C = 1, hasMessages: h = false, onAISelect: N, onMentionSelectionChange: s }) {
  const [k, S] = useState(0), d = useRef(null), f = oe$1(), w = useRef(null), o = useRef(null), [x, z] = useState(/* @__PURE__ */ new Set()), [B, g] = useState(false), [E, y] = useState([Re]), [b, v] = useState(false), [I, $] = useState(false), [T, R] = useState(null), O = useRef([]), j = useRef(-1), [K$1, te] = useState(a || ""), [yn, qe] = useState(0), [Ne, ke] = useState({ top: 0, left: 10 }), [wn, Xe] = useState([]), Qe = (u) => {
    if (T !== null && b) {
      if (u.key === "Enter") {
        u.preventDefault();
        return;
      } else if (u.key === "Escape") {
        u.preventDefault(), v(false), R(null), j.current = -1, s && s(false);
        return;
      }
    }
    if (u.key === "Enter" && !u.shiftKey && c) {
      if (typeof K$1 != "string" || K$1.trim().length === 0) return;
      if (T !== null) {
        u.preventDefault();
        return;
      }
      u.preventDefault(), c();
    }
  };
  useEffect(() => {
    if (b && w.current) {
      const u = w.current.getBoundingClientRect();
      ke({ top: u.top - 370, left: u.left + 10 });
      const M = () => {
        if (w.current) {
          const A = w.current.getBoundingClientRect();
          ke({ top: A.top - 370, left: A.left + 10 });
        }
      };
      return window.addEventListener("resize", M), () => window.removeEventListener("resize", M);
    }
  }, [b]);
  const ne = () => {
    d.current = setInterval(() => {
      S((u) => (u + 1) % Pe.length);
    }, 4e3);
  }, Ce = () => {
    document.visibilityState !== "visible" && d.current ? (clearInterval(d.current), d.current = null) : document.visibilityState === "visible" && !h && ne();
  };
  useEffect(() => (h || ne(), document.addEventListener("visibilitychange", Ce), () => {
    d.current && clearInterval(d.current), document.removeEventListener("visibilitychange", Ce);
  }), [h]), useEffect(() => {
    h && d.current ? (clearInterval(d.current), d.current = null) : !h && !d.current && ne();
  }, [h]), useEffect(() => {
    a !== void 0 && te(a);
  }, [a]);
  const Me = [{ icon: jsx(Globe, { className: "h-4 w-4" }), label: "Web-Search", description: "Quick web look-up" }, { icon: jsx(Telescope, { className: "h-4 w-4" }), label: "Deep-Research", description: "Deep web research, on specific input" }, { icon: jsx(BrainCircuit, { className: "h-4 w-4" }), label: "Reasoning", description: "Think deeply, before answering" }], Se = (u) => {
    z((M) => {
      const A = new Set(M);
      return A.has(u) ? A.delete(u) : A.add(u), A;
    });
  }, Je = (u) => {
    $(u), v(true);
  }, Ae = () => {
    I ? ($(false), y([Re]), v(false)) : Je(true);
  };
  useEffect(() => {
    if (b && T !== null) {
      const u = [];
      sn.forEach((M) => {
        const A = M.agents.filter((P) => T ? P.name.toLowerCase().includes(T.toLowerCase()) : true);
        u.push(...A.map((P) => ({ id: P.id, name: P.name, description: P.description })));
      }), Xe(u), qe(u.length > 0 ? 0 : -1);
    }
  }, [T, b]);
  const Ie = (u) => {
    const M = [];
    let A = 0;
    for (; A < u.length; ) {
      const P = u.indexOf("@", A);
      if (P === -1) break;
      if (!(P === 0 || u[P - 1] === " ")) {
        A = P + 1;
        continue;
      }
      let H = u.indexOf(" ", P + 1);
      H === -1 && (H = u.length), M.push({ start: P, end: H, consumed: false }), A = H;
    }
    return M;
  }, Ye = (u) => {
    const M = u.target.value;
    te(M), p && p(u);
    const A = Ie(M);
    if (O.current = A, A.length === 0) {
      R(null), b && !I && v(false), j.current = -1, s && s(false);
      return;
    }
    const P = A[A.length - 1];
    if (P.end === M.length) {
      const H = M.slice(P.start + 1, P.end);
      R(H), j.current = A.length - 1, b || (v(true), $(false)), s && s(true);
    } else T !== null && (R(null), b && !I && v(false), j.current = -1, s && s(false));
  }, Ze = (u) => {
    var _a;
    const M = { id: u.id, name: u.name, description: u.description, icon: X(u.id) };
    if (T !== null && j.current >= 0) {
      const A = O.current[j.current];
      if (A && o.current) {
        const P = K$1.substring(0, A.start), W = K$1.substring(A.end), H = P + `@${M.name}` + (W.startsWith(" ") ? "" : " ") + W;
        if (te(H), p && o.current) {
          const q = (_a = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")) == null ? void 0 : _a.set;
          if (q) {
            q.call(o.current, H);
            const nt = new Event("input", { bubbles: true });
            o.current.dispatchEvent(nt);
          }
        }
        y([M]), v(false), R(null), j.current = -1, s && s(false);
        const tt = Ie(H);
        O.current = tt, setTimeout(() => {
          if (o.current) {
            o.current.focus();
            const q = P.length + `@${M.name} `.length;
            o.current.selectionStart = q, o.current.selectionEnd = q;
          }
        }, 0);
      }
    }
  }, Te = { value: K$1, onChange: Ye, onSubmit: c, loading: i, onStop: m, variant: r$1, rows: C, placeholder: h ? "Type a message..." : Pe[k], hasMessages: h, onAISelect: N, onMentionSelectionChange: s }, et = () => {
    const u = x.size;
    return f ? jsx("div", { className: "flex items-center justify-center py-3 px-2", children: jsxs(W, { open: B, onOpenChange: g, children: [jsx(K, { asChild: true, children: jsxs(P, { variant: "ghost", className: "h-8 px-4 rounded-full flex items-center gap-2 bg-gray-100 text-gray-600 hover:bg-gray-200", children: [jsx(Settings, { className: "h-4 w-4" }), jsxs("span", { className: "text-xs font-medium", children: ["Tools ", u > 0 && `(${u})`] })] }) }), jsx(X$1, { align: "end", className: "w-56", onCloseAutoFocus: (M) => M.preventDefault(), children: Me.map((M, A) => jsx(Q, { checked: x.has(A), onCheckedChange: () => Se(A), onSelect: (P) => P.preventDefault(), children: jsxs("div", { className: "flex items-center gap-2", children: [M.icon, jsx("span", { children: M.label })] }) }, M.label)) })] }) }) : jsx("div", { className: "flex flex-wrap items-center gap-2 py-3 px-2", children: Me.map((M, A) => jsxs(P, { variant: "ghost", className: `h-8 px-4 rounded-full flex items-center gap-2 ${x.has(A) ? "bg-gray-300 text-gray-800 hover:bg-gray-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`, onClick: () => Se(A), children: [M.icon, jsx("span", { className: "text-xs font-medium", children: M.label })] }, M.label)) });
  };
  return jsx(ve.Provider, { value: Te, children: jsxs("div", { className: "relative w-full", children: [b && jsx("div", { className: "fixed z-[999] shadow-lg", style: { top: `${Ne.top}px`, left: `${Ne.left}px` }, children: jsx(en, { selectedAgents: E.map((u) => ({ id: u.id, name: u.name, description: u.description })), onSelectAgents: (u) => {
    T || y(u.map((M) => ({ id: M.id, name: M.name, description: M.description, icon: X(M.id) })));
  }, isOpen: b, onClose: () => {
    v(false), R(null), j.current = -1, s && s(false);
  }, multiSelectMode: I, maxSelections: 4, searchTerm: T || "", onAgentSelect: T !== null ? Ze : void 0, keyboardNavigation: T !== null }) }), jsxs("div", { ref: w, className: r("relative", r$1 === "default" && "flex flex-col items-end w-full p-2 rounded-2xl border border-input bg-transparent focus-within:ring-1 focus-within:ring-slate-300 focus-within:outline-none", r$1 === "unstyled" && "flex items-start gap-2 w-full", n), children: [jsx(je, { blur: 0, borderWidth: 1.7, spread: 25, glow: true, disabled: false, proximity: 64, inactiveZone: 0.01 }), jsxs("div", { className: "relative flex flex-col items-end w-full z-10", children: [jsxs("div", { className: "flex w-full items-end", children: [jsx(P, { type: "button", variant: "ghost", size: "icon", className: "h-10 w-10 rounded-full hover:bg-gray-100 mr-2", onClick: Ae, children: X(E[0].id) }), nn.map(t, (u) => {
    if (rn(u)) {
      const M = u.type;
      if (M && (M.displayName === "ChatInputTextArea" || M === ee)) return an(u, { ref: (P) => {
        o.current = P;
        const W = u.ref;
        typeof W == "function" ? W(P) : W && "current" in W && (W.current = P);
      }, placeholder: T !== null ? "Type model name..." : Te.placeholder, onKeyDown: Qe });
    }
    return u;
  })] }), jsx("div", { className: "flex w-full items-center justify-between mt-2", children: jsxs("div", { className: "flex items-center gap-2", children: [I && E.length > 1 && jsxs("div", { className: "flex items-center gap-1", children: [jsx("div", { className: "flex -space-x-1", children: E.slice(0, 2).map((u, M) => jsx("div", { className: "h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center border border-white", children: u.icon || X(u.id) }, u.id)) }), jsxs("span", { className: "text-xs text-gray-500", children: [E.length, " models"] })] }), jsxs(P, { type: "button", variant: "ghost", className: r("h-8 rounded-full px-3 flex items-center gap-1.5 text-xs font-normal", I ? "bg-red-50 text-red-600 hover:bg-red-100" : "bg-gray-100 hover:bg-gray-100"), onClick: Ae, children: [jsx(Split, { className: "h-4 w-4" }), jsx("span", { children: "Multiprompt" })] }), et()] }) })] })] })] }) });
}
xe.displayName = "ChatInput";
function ee({ onSubmit: t, value: n, onChange: r$1, className: a, variant: p, ...c }) {
  var _a, _b;
  const i = useContext(ve), [m, C] = useState(""), h = (_a = n != null ? n : i.value) != null ? _a : m, N = r$1 != null ? r$1 : i.onChange, s = t != null ? t : i.onSubmit, k$1 = (_b = i.rows) != null ? _b : 1, S = i.placeholder || "", d = i.hasMessages || false, f = useRef(null), w = p != null ? p : i.variant === "default" ? "unstyled" : "default", o = tn(h, k$1), x = useCallback((g) => {
    o && (typeof o == "function" ? o(g) : "current" in o && (o.current = g)), f.current = g;
  }, [o]);
  return jsxs("div", { className: "relative w-full", children: [jsx(k, { ref: x, ...c, value: h, onChange: (g) => {
    N ? N(g) : C(g.target.value);
  }, onKeyDown: (g) => {
    if (s && g.key === "Enter" && !g.shiftKey) {
      if (typeof h != "string" || h.trim().length === 0) return;
      g.preventDefault(), s();
    }
  }, className: r("max-h-[400px] min-h-0 resize-none overflow-x-hidden", w === "unstyled" && "border-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none", a), rows: k$1, placeholder: void 0 }), !h && jsx("div", { className: "absolute pointer-events-none top-0 left-0 right-0 bottom-0 flex items-center px-3 py-2", children: jsx(AnimatePresence$1, { mode: "wait", children: d ? jsx("span", { className: "text-muted-foreground truncate", children: S }) : jsx(motion$1.span, { initial: { opacity: 0, y: -5 }, animate: { opacity: 0.5, y: 0 }, exit: { opacity: 0, y: 5 }, transition: { duration: 0.3 }, className: "text-muted-foreground truncate", children: S }, S) }) })] });
}
ee.displayName = "ChatInputTextArea";
function ye({ onSubmit: t, loading: n, onStop: r$1, className: a, ...p }) {
  const c = useContext(ve), i = n != null ? n : c.loading, m = r$1 != null ? r$1 : c.onStop, C = t != null ? t : c.onSubmit;
  if (i && m) return jsx(P, { onClick: m, className: r("shrink-0 rounded-full p-1.5 h-fit border dark:border-zinc-600 hover:cursor-pointer", a), ...p, children: jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-label": "Stop", children: [jsx("title", { children: "Stop" }), jsx("rect", { x: "6", y: "6", width: "12", height: "12" })] }) });
  const h = typeof c.value != "string" || c.value.trim().length === 0, N = c.audio;
  return jsxs("div", { className: "flex gap-1", children: [jsx(P, { className: r("shrink-0 rounded-full p-1.5 h-fit border dark:border-zinc-600 hover:cursor-pointer", a), disabled: h, onClick: (s) => {
    s.preventDefault(), h || (C == null ? void 0 : C());
  }, ...p, children: jsx(ArrowUpIcon, {}) }), jsx(P, { className: r("shrink-0 rounded-full p-1.5 h-fit border bg-red-500 hover:bg-red-600/95! dark:border-zinc-600 hover:cursor-pointer", a), disabled: N, onClick: (s) => {
    s.preventDefault(), h || (C == null ? void 0 : C());
  }, ...p, children: jsx(AudioLines, {}) })] });
}
ye.displayName = "ChatInputSubmit";
function on() {
  const t = useRef(null), [n, r] = useState(false), [a, p] = useState(true), c = useRef(false), i = useRef(false), m = useRef(false), C = useRef(false), h = useCallback((d) => d == null ? void 0 : d.closest("[data-radix-scroll-area-viewport]"), []), N = useCallback((d) => {
    const { scrollTop: f, scrollHeight: w, clientHeight: o } = d;
    return Math.abs(w - f - o) < 10;
  }, []), s = useCallback((d) => {
    d && d.scrollTo({ top: d.scrollHeight, behavior: "instant" });
  }, []), k = useCallback((d) => {
    const { scrollHeight: f, clientHeight: w } = d, o = f > w, x = N(d);
    r(o && !x), i.current || p(x);
  }, [N]);
  return useEffect(() => {
    const d = t.current, f = h(d);
    if (!d || !f) return;
    s(f);
    const w = setTimeout(() => {
      c.current || (s(f), C.current = true);
    }, 200), o = new ResizeObserver(() => {
      !C.current && !c.current && s(f);
    });
    return o.observe(d), () => {
      clearTimeout(w), o.disconnect();
    };
  }, [h, s]), useEffect(() => {
    const d = t.current, f = h(d);
    if (!d || !f) return;
    k(f);
    const w = () => {
      C.current || (C.current = true), m.current || (c.current = true), i.current || k(f);
    }, o = () => {
      i.current = true, c.current = true;
    }, x = () => {
      i.current = false, k(f);
    }, z = () => {
      i.current = true, c.current = true, setTimeout(() => {
        i.current = false, k(f);
      }, 200);
    };
    let B;
    const g = new MutationObserver(() => {
      m.current = true, window.clearTimeout(B), (a && !c.current || a && C.current && !i.current) && f.scrollTo({ top: f.scrollHeight, behavior: "instant" }), k(f), B = window.setTimeout(() => {
        m.current = false;
      }, 100);
    });
    return f.addEventListener("scroll", w, { passive: true }), f.addEventListener("touchstart", o), f.addEventListener("touchend", x), f.addEventListener("wheel", z, { passive: true }), g.observe(d, { childList: true, subtree: true, attributes: true, characterData: true }), () => {
      window.clearTimeout(B), g.disconnect(), f.removeEventListener("scroll", w), f.removeEventListener("touchstart", o), f.removeEventListener("touchend", x), f.removeEventListener("wheel", z);
    };
  }, [h, k, a]), [t, n, () => {
    const d = h(t.current);
    d && (p(true), c.current = false, d.scrollTo({ top: d.scrollHeight, behavior: m.current ? "instant" : "smooth" }));
  }];
}
function ln({ onClick: t, alignment: n = "right", className: r$1 }) {
  return jsx(P, { variant: "secondary", size: "icon", className: r("absolute bottom-4 rounded-full shadow-lg hover:bg-secondary", { left: "left-4", center: "left-1/2 -translate-x-1/2", right: "right-4" }[n], r$1), onClick: t, children: jsx(ChevronDown, { className: "h-4 w-4" }) });
}
const we = forwardRef(({ children: t, className: n, scrollButtonAlignment: r$1 = "right" }, a) => {
  const [p, c, i] = on();
  return jsxs(_, { className: "flex-1 relative", ref: a, children: [jsx("div", { ref: p, children: jsx("div", { className: r(n, "min-h-0 z-10"), children: t }) }), c && jsx(ln, { onClick: i, alignment: r$1, className: "absolute bottom-4 rounded-full shadow-lg hover:bg-secondary" })] });
});
we.displayName = "ChatMessageArea";
const de = "my-4 overflow-x-auto w-fit rounded-xl text-zinc-50 bg-zinc-900 dark:bg-zinc-900 border border-border p-4", ue = (t) => typeof t == "string" ? t : Array.isArray(t) ? t.map(ue).join("") : isValidElement(t) ? ue(t.props.children) : "", We = memo(async ({ children: t, className: n, language: r$1, ...a }) => {
  const { codeToTokens: p, bundledLanguages: c } = await import('shiki'), i = ue(t);
  if (!(r$1 in c)) return jsx("pre", { ...a, className: r(de, n), children: jsx("code", { className: "whitespace-pre-wrap", children: t }) });
  const { tokens: m } = await p(i, { lang: r$1, themes: { light: "github-dark", dark: "github-light" } });
  return jsx("pre", { ...a, className: r(de, n), children: jsx("code", { className: "whitespace-pre-wrap", children: m.map((C, h) => jsxs("span", { children: [C.map((N, s) => {
    const k = typeof N.htmlStyle == "string" ? void 0 : N.htmlStyle;
    return jsx("span", { style: k, children: N.content }, `token-${s}`);
  }), h !== m.length - 1 && `
`] }, `line-${h}`)) }) });
});
We.displayName = "HighlightedPre";
const He = ({ children: t, language: n, className: r$1, ...a }) => jsx(Suspense, { fallback: jsx("pre", { ...a, className: r(de, r$1), children: jsx("code", { className: "whitespace-pre-wrap", children: t }) }), children: jsx(We, { language: n, ...a, children: t }) });
He.displayName = "CodeBlock";
const cn = { h1: ({ children: t, ...n }) => jsx("h1", { className: "mt-2 scroll-m-20 text-4xl font-bold", ...n, children: t }), h2: ({ children: t, ...n }) => jsx("h2", { className: "mt-8 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0", ...n, children: t }), h3: ({ children: t, ...n }) => jsx("h3", { className: "mt-4 scroll-m-20 text-xl font-semibold tracking-tight", ...n, children: t }), h4: ({ children: t, ...n }) => jsx("h4", { className: "mt-4 scroll-m-20 text-lg font-semibold tracking-tight", ...n, children: t }), h5: ({ children: t, ...n }) => jsx("h5", { className: "mt-4 scroll-m-20 text-lg font-semibold tracking-tight", ...n, children: t }), h6: ({ children: t, ...n }) => jsx("h6", { className: "mt-4 scroll-m-20 text-base font-semibold tracking-tight", ...n, children: t }), p: ({ children: t, ...n }) => jsx("p", { className: "leading-6 [&:not(:first-child)]:mt-4", ...n, children: t }), strong: ({ children: t, ...n }) => jsx("span", { className: "font-semibold", ...n, children: t }), a: ({ children: t, ...n }) => jsx("a", { className: "font-medium underline underline-offset-4", target: "_blank", rel: "noreferrer", ...n, children: t }), ol: ({ children: t, ...n }) => jsx("ol", { className: "my-4 ml-6 list-decimal", ...n, children: t }), ul: ({ children: t, ...n }) => jsx("ul", { className: "my-4 ml-6 list-disc", ...n, children: t }), li: ({ children: t, ...n }) => jsx("li", { className: "mt-2", ...n, children: t }), blockquote: ({ children: t, ...n }) => jsx("blockquote", { className: "mt-4 border-l-2 pl-6 italic", ...n, children: t }), hr: (t) => jsx("hr", { className: "my-4 md:my-8", ...t }), table: ({ children: t, ...n }) => jsx("div", { className: "my-6 w-full overflow-y-auto", children: jsx("table", { className: "relative w-full overflow-hidden border-none text-sm", ...n, children: t }) }), tr: ({ children: t, ...n }) => jsx("tr", { className: "last:border-b-none m-0 border-b", ...n, children: t }), th: ({ children: t, ...n }) => jsx("th", { className: "px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", ...n, children: t }), td: ({ children: t, ...n }) => jsx("td", { className: "px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", ...n, children: t }), img: ({ alt: t, ...n }) => jsx("img", { className: "rounded-md", alt: t, ...n }), code: ({ children: t, node: n, className: r$1, ...a }) => {
  const p = /language-(\w+)/.exec(r$1 || "");
  return p ? jsx(He, { language: p[1], className: r$1, ...a, children: t }) : jsx("code", { className: r("rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", r$1), ...a, children: t });
}, pre: ({ children: t }) => jsx(Fragment, { children: t }) };
function dn(t) {
  return t ? marked.lexer(t).map((r) => r.raw) : [];
}
const De = memo(({ content: t, className: n }) => jsx(sr, { remarkPlugins: [or], components: cn, className: n, children: t }), (t, n) => t.content === n.content);
De.displayName = "MemoizedMarkdownBlock";
const me = memo(({ content: t, id: n, className: r }) => useMemo(() => dn(t || ""), [t]).map((p, c) => jsx(De, { content: p, className: r }, `${n}-block_${c}`)));
me.displayName = "MarkdownContent";
const un = ({ children: t, url: n, className: r$1, width: a = 200, height: p = 125, isStatic: c = false, imageSrc: i = "" }) => {
  let m;
  c ? m = i : m = `https://api.microlink.io/?${encode({ url: n, screenshot: true, meta: false, embed: "screenshot.url", colorScheme: "dark", "viewport.isMobile": true, "viewport.deviceScaleFactor": 1, "viewport.width": a * 3, "viewport.height": p * 3 })}`;
  const [C, h] = y__default.useState(false), [N, s] = y__default.useState(false);
  y__default.useEffect(() => {
    s(true);
  }, []);
  const k = { stiffness: 100, damping: 15 }, S = useMotionValue(0), d = useSpring(S, k), f = (w) => {
    const o = w.target.getBoundingClientRect(), z = (w.clientX - o.left - o.width / 2) / 2;
    S.set(z);
  };
  return jsxs(Fragment, { children: [N ? jsx("div", { className: "hidden", children: jsx("img", { src: m, width: a, height: p, alt: "hidden image" }) }) : null, jsxs(Je.Root, { openDelay: 50, closeDelay: 100, onOpenChange: (w) => {
    h(w);
  }, children: [jsx(Je.Trigger, { onMouseMove: f, className: r("text-black dark:text-white", r$1), href: n, target: "_blank", rel: "noopener noreferrer", children: t }), jsx(Je.Content, { className: "[transform-origin:var(--radix-hover-card-content-transform-origin)]", side: "top", align: "center", sideOffset: 10, children: jsx(AnimatePresence, { children: C && jsx(motion.div, { initial: { opacity: 0, y: 20, scale: 0.6 }, animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } }, exit: { opacity: 0, y: 20, scale: 0.6 }, className: "shadow-xl rounded-xl", style: { x: d }, children: jsx(Link, { to: n, className: "block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800", style: { fontSize: 0 }, target: "_blank", rel: "noopener noreferrer", children: jsx("img", { src: c ? i : m, width: a, height: p, className: "rounded-lg", alt: "preview image" }) }) }) }) })] })] });
}, mn = cva("flex gap-4 w-full", { variants: { variant: { default: "", bubble: "", full: "p-5" }, type: { incoming: "justify-start mr-auto", outgoing: "justify-end ml-auto" } }, compoundVariants: [{ variant: "full", type: "outgoing", className: "bg-muted" }, { variant: "full", type: "incoming", className: "bg-background" }], defaultVariants: { variant: "default", type: "incoming" } }), Ge = y__default.createContext(null), Ue = () => y__default.useContext(Ge), he = y__default.forwardRef(({ className: t, variant: n = "default", type: r$1 = "incoming", id: a, children: p, ...c }, i) => jsx(Ge.Provider, { value: { variant: n, type: r$1, id: a }, children: jsx("div", { ref: i, className: r(mn({ variant: n, type: r$1, className: t })), ...c, children: p }) }));
he.displayName = "ChatMessage";
const hn = cva("w-8 h-8 flex items-center rounded-full justify-center ring-1 shrink-0 bg-transparent overflow-hidden", { variants: { type: { incoming: "ring-border", outgoing: "ring-muted-foreground/30" } }, defaultVariants: { type: "incoming" } }), fe = y__default.forwardRef(({ className: t, icon: n, imageSrc: r$1, ...a }, p) => {
  var _a, _b;
  const i = (_b = (_a = Ue()) == null ? void 0 : _a.type) != null ? _b : "incoming", m = n != null ? n : i === "incoming" ? jsx(SparklesIcon, {}) : jsx(UserIcon, {});
  return jsx("div", { ref: p, className: r(hn({ type: i, className: t })), ...a, children: r$1 ? jsx("img", { src: r$1, alt: "Avatar", className: "h-full w-full object-cover" }) : jsx("div", { className: "translate-y-px [&_svg]:size-4 [&_svg]:shrink-0", children: m }) });
});
fe.displayName = "ChatMessageAvatar";
const fn = cva("flex flex-col gap-2", { variants: { variant: { default: "", bubble: "rounded-xl px-3 py-2", full: "" }, type: { incoming: "", outgoing: "" } }, compoundVariants: [{ variant: "bubble", type: "incoming", className: "bg-secondary text-secondary-foreground" }, { variant: "bubble", type: "outgoing", className: "bg-primary text-primary-foreground" }], defaultVariants: { variant: "default", type: "incoming" } }), pn = () => jsxs("div", { className: "relative overflow-hidden", children: [jsx("span", { className: "text-sm text-muted-foreground", children: "View thinking process" }), jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_2s_infinite]" })] }), pe = y__default.forwardRef(({ className: t, content: n, id: r$1, showCursor: a = false, reasoning: p = "", isReasoning: c = false, sources: i = [], children: m, ...C }, h) => {
  var _a, _b, _c;
  const N = Ue(), [s, k] = y__default.useState(false), S = (_a = N == null ? void 0 : N.variant) != null ? _a : "default", d = (_b = N == null ? void 0 : N.type) != null ? _b : "incoming", f = (_c = r$1 != null ? r$1 : N == null ? void 0 : N.id) != null ? _c : "";
  return jsxs("div", { ref: h, className: r(fn({ variant: S, type: d, className: t })), ...C, children: [p && p.length > 0 && jsxs("div", { className: "w-full mt-2 border rounded-md overflow-hidden", children: [jsxs("button", { type: "button", onClick: () => k(!s), className: "w-full flex items-center justify-between px-3 py-4 text-sm text-muted-foreground bg-[#F8FAFC] hover:cursor-pointer transition-colors", children: [jsx("span", { children: n === "" ? jsx(pn, {}) : "View thinking process" }), jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: `h-4 w-4 shrink-0 transition-transform duration-200 ${s ? "rotate-180" : ""}`, children: jsx("path", { d: "m6 9 6 6 6-6" }) })] }), s && jsx("div", { className: "bg-[#F8FAFC] px-3 py-4 text-sm whitespace-pre-wrap", children: jsx(me, { id: `${f}-reasoning`, content: p }) })] }), n.length > 0 && jsxs(Fragment, { children: [jsx(me, { id: f, content: n }), a && jsx("span", { className: "ml-1 inline-block h-4 w-2 animate-pulse bg-current" })] }), i && i.length > 0 && jsxs("div", { className: "mt-3 border-t pt-2 text-sm", children: [jsx("p", { className: "font-medium text-muted-foreground mb-2", children: "Sources:" }), jsx("div", { className: "space-y-2", children: i.map((w, o) => jsxs("div", { className: "flex items-start gap-2", children: [jsxs("span", { className: "text-xs text-muted-foreground mt-1", children: ["[", o + 1, "]"] }), jsx(un, { url: w.url, className: "text-primary hover:underline flex-1", children: w.title || w.url })] }, w.id)) })] }), m] });
});
pe.displayName = "ChatMessageContent";
function gn({ onReact: t, onReply: n, onEdit: r, className: a, messageData: p }) {
  const [c, i] = useState(false), m = useRef(null), C = useRef(null), h = ["\u{1F44D}", "\u2764\uFE0F", "\u{1F602}", "\u{1F389}", "\u{1F64C}", "\u{1F440}"], N = (s) => {
    t && t(s), i(false);
  };
  return useEffect(() => {
    const s = (k) => {
      m.current && !m.current.contains(k.target) && C.current && !C.current.contains(k.target) && i(false);
    };
    return document.addEventListener("mousedown", s), () => {
      document.removeEventListener("mousedown", s);
    };
  }, []), jsxs("div", { className: `relative w-[7.5rem] ${a}`, children: [jsxs("div", { className: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm flex items-center px-1 relative", children: [jsxs(he$1, { children: [jsx(be, { asChild: true, children: jsx("button", { ref: C, className: "p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400", onClick: () => i(!c), "aria-label": "Add reaction", children: jsx(Smile, { className: "h-5 w-5" }) }) }), jsx(ve$1, { sideOffset: 8, children: "Add reaction" })] }), jsxs(he$1, { children: [jsx(be, { asChild: true, children: jsx("button", { className: "p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400", onClick: n, "aria-label": "Reply", children: jsx(MessageSquare, { className: "h-5 w-5" }) }) }), jsx(ve$1, { sideOffset: 8, children: "Reply" })] }), jsxs(he$1, { children: [jsx(be, { asChild: true, children: jsx("button", { className: "p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400", onClick: r, "aria-label": "Edit", children: jsx(Edit, { className: "h-5 w-5" }) }) }), jsx(ve$1, { sideOffset: 8, children: "Edit" })] })] }), c && jsx("div", { ref: m, className: "absolute right-0 top-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-2 z-10", children: jsx("div", { className: "flex gap-1", children: h.map((s, k) => jsx("button", { onClick: () => N(s), className: "hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full text-lg", children: s }, k)) }) })] });
}
const oe = ({ messageData: t, isLastChunk: n = true, userID: r, userImage: a, onReply: p, chatroom: c }) => {
  var _a, _b;
  const [i, m] = useState(false), C = t.data.senderId === r, [h] = useAtom(de$1), N = (h == null ? void 0 : h.members.length) !== 1;
  if (!C) {
    const s = (_b = (_a = c == null ? void 0 : c.members) == null ? void 0 : _a.find((k) => k.user.id === t.data.senderId)) == null ? void 0 : _b.user.image;
    return jsxs("div", { className: `relative group py-3 ${N ? "hover:bg-gray-100 px-2 rounded-lg" : ""} `, onMouseEnter: () => m(true), onMouseLeave: () => m(false), children: [jsxs(he, { id: t.data.id || t.identifier, className: "w-full overflow-hidden", children: [jsx(fe, { icon: t.data.isAiGenerated ? jsx(SparklesIcon, {}) : jsx(UserIcon, {}), imageSrc: t.data.isAiGenerated ? void 0 : s, className: "flex-shrink-0" }), jsx(pe, { content: t.data.content, showCursor: !n && t.data.isAiGenerated, reasoning: t.data.reasoning, isReasoning: !!t.data.reasoning && t.data.reasoning.length > 0, sources: t.data.sources, className: "break-words overflow-hidden" })] }, t.data.id || t.identifier), N && jsx("div", { className: `absolute -top-7 -right-2 transition-opacity duration-200 ${i ? "opacity-100" : "opacity-0"}`, children: jsx(gn, { messageData: t, onReply: p }) })] });
  }
  return jsx("div", { className: "relative group py-2", onMouseEnter: () => m(true), onMouseLeave: () => m(false), children: jsxs(he, { id: t.data.id || t.identifier, variant: "bubble", type: "outgoing", className: "w-full overflow-hidden", children: [jsx(pe, { content: t.data.content, sources: t.data.sources, className: "break-words overflow-hidden" }), a && jsx(fe, { imageSrc: a, className: "flex-shrink-0" })] }, t.data.id || t.identifier) });
}, bn = ({ message: t, userID: n, userImage: r, stream: a, allMessages: p = [] }) => {
  const [c, i] = useState(false), [m, C] = useState(""), [h, N] = useState(false), [s] = useAtom(de$1), k = t.data.id || t.identifier, S = useMemo(() => p.filter((g) => g.data.parentMessageId === k).map((g) => g.data), [p, k]), d = S.length > 0, w = !!!t.data.parentMessageId && (d || t.data.isThreadStarter), o = async () => {
    if (!(!m.trim() || !s || h)) {
      N(true);
      try {
        const g = k, E = v4();
        if (a) await a.send({ data: { chatroomId: s.id, parentMessageId: g, isAiGenerated: false, senderId: n, content: m.trim(), attachments: [], isReasoning: false, reasoning: "", sources: [] }, identifier: E, isLastChunk: true, startIndex: 0, totalChunks: 1 });
        else {
          const b = await r$1().chats.chat({ userId: n, chatroomId: s.id });
          await b.send({ data: { chatroomId: s.id, parentMessageId: g, isAiGenerated: false, senderId: n, content: m.trim(), attachments: [], isReasoning: false, reasoning: "", sources: [] }, identifier: E, isLastChunk: true, startIndex: 0, totalChunks: 1 }), b.close();
        }
        C("");
      } catch (g) {
        console.error("Error sending reply:", g), toast.error("Failed to send reply. Please try again.");
      } finally {
        N(false);
      }
    }
  }, x = () => {
    var _a, _b;
    const g = S[S.length - 1], E = S.length, [y, b] = useState(false), [v, I] = useState(false), $ = useMemo(() => {
      const T = new Set(S.map((R) => R.senderId));
      return Array.from(T).map((R) => {
        var _a2, _b2;
        const O = (_a2 = s == null ? void 0 : s.members) == null ? void 0 : _a2.find((j) => j.user.id === R);
        return { id: R, isAi: ((_b2 = S.find((j) => j.senderId === R)) == null ? void 0 : _b2.isAiGenerated) || false, name: (O == null ? void 0 : O.user.name) || "User", image: O == null ? void 0 : O.user.image };
      });
    }, [S, s]);
    return jsxs(P, { variant: "ghost", size: "sm", className: "w-full sm:w-[90%] md:w-[80%] flex items-center justify-start gap-1 py-1 text-xs text-muted-foreground bg-white relative", onClick: () => i(true), onMouseEnter: () => {
      b(true), I(true);
    }, onMouseLeave: () => {
      b(false), I(false);
    }, children: [jsxs("div", { className: "flex items-center min-w-[80px] z-10", children: [jsx(MessageSquareIcon, { size: 12, className: "mr-1" }), jsxs("span", { children: [E, " ", E === 1 ? "reply" : "replies"] })] }), jsxs("div", { className: "relative h-6 flex-1 overflow-hidden", children: [jsxs("div", { className: `absolute left-0 flex transition-all duration-500 ease-in-out ${v ? "opacity-0 transform -translate-y-full" : "opacity-100 transform translate-y-0"}`, children: [$.slice(0, 3).map((T, R) => jsx("div", { className: "w-6 h-6 rounded-md flex items-center justify-center ml-2 bg-gray-100", children: T.isAi ? jsx(SparklesIcon, { size: 12 }) : T.image ? jsx("img", { src: T.image, className: "w-6 h-6 rounded-md", alt: "user" }) : jsx(UserIcon, { size: 12 }) }, R)), $.length > 3 && jsx("div", { className: "w-5 h-5 rounded-md flex items-center justify-center ml-2 bg-gray-100", children: jsxs("span", { className: "text-xs", children: ["+", $.length - 3] }) })] }), jsx("div", { className: `absolute left-0 h-6 flex items-center transition-all duration-500 ease-in-out ${v ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-full"}`, children: jsxs("div", { className: "ml-2 flex items-center w-full overflow-hidden", children: [(g == null ? void 0 : g.isAiGenerated) ? jsx(SparklesIcon, { size: 12, className: "flex-shrink-0" }) : (() => {
      var _a2;
      const T = (_a2 = s == null ? void 0 : s.members) == null ? void 0 : _a2.find((O) => O.user.id === (g == null ? void 0 : g.senderId)), R = T == null ? void 0 : T.user.image;
      return R ? jsx("img", { src: R, className: "w-6 h-6 rounded-md flex-shrink-0", alt: (T == null ? void 0 : T.user.name) || "User" }) : jsx(UserIcon, { size: 12, className: "flex-shrink-0" });
    })(), g && jsxs("span", { className: "ml-2 truncate text-muted-foreground/70 w-full max-w-[calc(100%-24px)]", children: [((_a = g.content) == null ? void 0 : _a.substring(0, 70)) || "", ((_b = g.content) == null ? void 0 : _b.length) > 70 ? "..." : ""] })] }) })] }), jsx(ChevronRight, { className: `ml-auto transition-all duration-300 ease-in-out z-10 ${y ? "opacity-100 text-black" : "opacity-0"}` })] });
  }, z = useRef(t.data.content);
  useEffect(() => {
    z.current = t.data.content;
  }, [t.data.content]);
  const B = () => {
    i(true);
  };
  return jsxs("div", { className: `relative w-full ${d ? "hover:bg-gray-100 px-2 rounded-lg" : ""}`, children: [jsx(oe, { messageData: { ...t, data: { ...t.data, content: z.current } }, isLastChunk: t.isLastChunk, userID: n, userImage: r, onReply: B, chatroom: s }), w && jsx("div", { className: "pl-4 sm:pl-8 pb-1", children: jsx(x, {}) }), jsx(ce, { open: c, onOpenChange: i, children: jsxs(me$1, { side: "right", className: "p-0 flex flex-col w-full sm:min-w-[600px] md:min-w-[750px] lg:min-w-[800px] xl:min-w-[900px] max-w-[95vw]", children: [jsx(pe$1, { className: "px-3 sm:px-4 py-3 border-b sticky top-0 bg-white z-10", children: jsxs("div", { className: "flex justify-between items-center", children: [jsx(fe$1, { className: "text-base sm:text-lg", children: d ? `Thread (${S.length} ${S.length === 1 ? "reply" : "replies"})` : "Reply to message" }), jsx(ue$1, { className: "hover:cursor-pointer" })] }) }), jsxs("div", { className: "flex-1 flex flex-col h-[calc(100vh-140px)] overflow-hidden", children: [jsx(we, { scrollButtonAlignment: "right", className: "flex-1 px-1 sm:px-2 py-4", children: jsxs("div", { className: "space-y-4", children: [jsx("div", { className: "w-full border-b border-gray-200 mb-6 p-2 sm:p-3 hover:bg-gray-100", style: { maxWidth: "95%" }, children: jsx(oe, { messageData: { ...t, data: { ...t.data, content: z.current } }, isLastChunk: t.isLastChunk, userID: n, userImage: r, onReply: B, chatroom: s }) }), S.map((g) => jsx("div", { className: "w-full border-b border-gray-200 mb-4 hover:bg-gray-100 p-2 sm:p-3", style: { maxWidth: "95%" }, children: jsx(oe, { messageData: { identifier: g.id, data: g, startIndex: 0, totalChunks: 1, isLastChunk: true }, isLastChunk: true, userID: n, userImage: r, onReply: B, chatroom: s }) }, g.id))] }) }), jsx("div", { className: "p-2 sm:p-3 border-t mt-auto bg-white", children: jsxs(xe, { value: m, onChange: (g) => C(g.target.value), onSubmit: o, hasMessages: true, children: [jsx(ee, { placeholder: h ? "Sending..." : "Reply in thread...", autoFocus: true, disabled: h, onKeyDown: (g) => {
    g.key === "Enter" && !g.shiftKey && (g.preventDefault(), o());
  } }), jsx(ye, { disabled: !m.trim() || h })] }) })] })] }) })] });
}, vn = q("app_routes_authed_layout_chat_chatroomId_tsx--fetchChatroomWithMessages_createServerFn_handler", "/_server", (t, n) => Ke.__executeServer(t, n)), Ke = createServerFn().validator((t) => t).handler(vn, async ({ data: t }) => {
  const { data: n } = await a().chatrooms.getChatroom(t.chatroomId);
  return { chatroom: n };
}), Be = createFileRoute("/_authed/_layout/chat/$chatroomId")({ params: z.object({ chatroomId: z.string() }), beforeLoad: async (t) => {
  const { chatroomId: n } = t.params;
  return { chatroom: (await Ke({ data: { chatroomId: n } })).chatroom };
}, component: xn });
function xn({ className: t, ...n }) {
  const { userId: r, chatroom: a } = Be.useRouteContext(), { chatroomId: p } = Be.useParams(), c = useRef(void 0), [i, m] = useState(false), [C, h] = useState([]), [N, s] = useState(""), k = useSetAtom(de$1), S = useRef(null), d = async (o) => {
    if (!(i || !N.trim() && !o)) try {
      if (!c.current && (await f(a.id), !c.current)) {
        console.error("Couldn't establish chat connection");
        return;
      }
      await c.current.send({ data: { chatroomId: a.id || "", parentMessageId: null, isThreadStarter: false, senderId: r, content: o || N, attachments: [], isReasoning: false, reasoning: "", sources: [] }, identifier: v4(), isLastChunk: true, startIndex: 0, totalChunks: 1 }), s("");
    } catch (x) {
      console.error("Error sending message:", x);
    }
  };
  useEffect(() => {
    var _a;
    if (k(a), ((_a = a.messages) == null ? void 0 : _a.length) > 0) {
      const o = a.messages.map((x) => ({ identifier: x.id, data: x, startIndex: 0, totalChunks: 1, isLastChunk: true }));
      h(o);
    } else h([]);
    return f(a.id), () => {
      c.current && c.current.close();
    };
  }, [p]);
  const f = async (o) => {
    c.current && c.current.close(), m(true);
    try {
      c.current = await r$1().chats.chat({ userId: r, chatroomId: o || o || "" }), c.current.socket.on("close", () => {
        console.log("Socket closed, will attempt to reconnect if needed");
      }), c.current.socket.on("open", async () => {
        m(false);
        const x = localStorage.getItem("pendingMessage");
        x && (await d(x), localStorage.removeItem("pendingMessage"));
      });
      for await (const x of c.current) h((z) => {
        const B = z.findIndex((E) => E.identifier === x.identifier);
        if (x.identifier.startsWith("parent-")) return z;
        if (B >= 0) {
          const E = [...z], y = E[B];
          if (x.isLastChunk) E[B] = x;
          else {
            const b = x.startIndex <= 1, v = { ...y, data: { ...y.data, content: b ? x.data.content : y.data.content + x.data.content, reasoning: b ? x.data.reasoning || "" : (y.data.reasoning || "") + (x.data.reasoning || ""), sources: x.data.sources ? [...y.data.sources || [], ...x.data.sources.filter((I) => !(y.data.sources || []).some(($) => $.id === I.id))] : y.data.sources }, isLastChunk: x.isLastChunk, totalChunks: x.totalChunks, startIndex: x.startIndex };
            E[B] = v;
          }
          return E;
        } else return [...z, x];
      });
    } catch (x) {
      console.error("Error connecting to chat:", x), m(false);
    }
  }, w = jsxs(xe, { value: N, onChange: (o) => s(o.target.value), onSubmit: d, hasMessages: C.length > 0, children: [jsx(ee, { placeholder: i ? "Connecting..." : "Type a message...", autoFocus: true, disabled: i, onKeyDown: (o) => {
    o.key === "Enter" && !o.shiftKey && (o.preventDefault(), d());
  } }), jsx(ye, { disabled: i || !N.trim() })] });
  return jsxs("div", { className: "flex-1 flex flex-col h-full", ...n, children: [jsx(we, { scrollButtonAlignment: "center", className: "flex-1 overflow-y-auto", children: jsxs("div", { className: "max-w-4xl mx-auto w-full px-4 py-8 space-y-4", children: [C.filter((o) => !o.data.parentMessageId).map((o) => {
    var _a;
    return jsx(bn, { message: o, userID: r, userImage: (_a = ye$1(a, o.data.senderId)) == null ? void 0 : _a.user.image, stream: c.current, allMessages: C }, o.identifier || o.data.id);
  }), jsx("div", { ref: S })] }) }), jsx("div", { className: "px-2 py-4 max-w-4xl mx-auto w-full", children: w })] });
}

export { vn as fetchChatroomWithMessages_createServerFn_handler };
//# sourceMappingURL=_chatroomId-BjOdpLhQ.mjs.map
