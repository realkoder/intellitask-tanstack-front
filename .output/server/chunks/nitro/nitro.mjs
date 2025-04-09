import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import http, { Server as Server$2 } from 'node:http';
import https, { Server as Server$1 } from 'node:https';
import { EventEmitter } from 'node:events';
import { Buffer as Buffer$1 } from 'node:buffer';
import { promises, existsSync } from 'node:fs';
import { resolve as resolve$1, dirname as dirname$1, join } from 'node:path';
import { createHash } from 'node:crypto';
import { AsyncLocalStorage } from 'node:async_hooks';
import invariant from 'vinxi/lib/invariant';
import { virtualId, handlerModule, join as join$1 } from 'vinxi/lib/path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { isRedirect, isNotFound, isPlainObject as isPlainObject$1, encode as encode$1 } from '@tanstack/router-core';
import T from 'tiny-invariant';
import { eventHandler as eventHandler$1, toWebRequest, getResponseStatus, getEvent, createStartHandler, defineHandlerCallback, transformReadableStreamWithRouter, transformPipeableStreamWithRouter, getHeaders } from '@tanstack/start-server-core';
import { startSerializer, createServerFn, mergeHeaders as mergeHeaders$2 } from '@tanstack/start-client-core';
import { createRouter as createRouter$2, createRootRoute, Link, useRouter, ErrorComponent, createFileRoute, RouterProvider, lazyRouteComponent, redirect, Outlet, HeadContent, Scripts, useNavigate } from '@tanstack/react-router';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Provider, useAtomValue, atom, useSetAtom, useAtom } from 'jotai';
import { Toaster, toast } from 'sonner';
import { inject } from '@vercel/analytics';
import { z as z$1 } from 'zod';
import * as j from 'react';
import j__default, { useState, useEffect, useRef, forwardRef, useMemo, createContext as createContext$1, memo, useContext, useCallback, useLayoutEffect, Suspense, isValidElement } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as yr from '@radix-ui/react-label';
import { createAuthClient } from 'better-auth/react';
import { organizationClient, adminClient, emailOTPClient } from 'better-auth/client/plugins';
import { Mail, ArrowLeft, Bell, ExternalLink, Check, Info, Users, X, Upload, UserPlus, Circle, SquarePen, PanelLeftIcon, ChevronDown, Factory, Settings, Server, Globe, Telescope, BrainCircuit, Split, ArrowUpIcon, AudioLines, Plus, ChevronLeft, ChevronRight, ChevronUp, Briefcase, MessageSquare, ChevronsUpDown, Sparkles, BadgeCheck, CreditCard, LogOut, ChevronRightIcon, Folder, FileText, Bot, Star, SparklesIcon, UserIcon, MessageSquareIcon, XIcon, PlusCircle, BriefcaseIcon, CheckIcon, Smile, Edit, Search, FolderOpen, Minus } from 'lucide-react';
import { OTPInput, OTPInputContext } from 'input-otp';
import * as J from '@radix-ui/react-select';
import * as Ve from '@radix-ui/react-tooltip';
import * as st from '@radix-ui/react-radio-group';
import * as je from '@radix-ui/react-scroll-area';
import * as os from '@radix-ui/react-separator';
import * as K from '@radix-ui/react-dialog';
import * as Ut from '@radix-ui/react-checkbox';
import { v4 } from 'uuid';
import { Command } from 'cmdk';
import * as da from '@radix-ui/react-avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import * as re from '@radix-ui/react-dropdown-menu';
import { AnimatePresence, motion } from 'framer-motion';
import { animate, useMotionValue, useSpring, AnimatePresence as AnimatePresence$1, motion as motion$1 } from 'motion/react';
import { marked } from 'marked';
import bs from 'react-markdown';
import vs from 'remark-gfm';
import * as _t from '@radix-ui/react-hover-card';
import { encode as encode$2 } from 'qss';
import { PassThrough } from 'node:stream';
import { isbot } from 'isbot';
import ft from 'react-dom/server';

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = /* @__PURE__ */ Object.create(null);
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map(
      (_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`
    ).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function o(n){throw new Error(`${n} is not implemented yet!`)}let i$1 = class i extends EventEmitter{__unenv__={};readableEncoding=null;readableEnded=true;readableFlowing=false;readableHighWaterMark=0;readableLength=0;readableObjectMode=false;readableAborted=false;readableDidRead=false;closed=false;errored=null;readable=false;destroyed=false;static from(e,t){return new i(t)}constructor(e){super();}_read(e){}read(e){}setEncoding(e){return this}pause(){return this}resume(){return this}isPaused(){return  true}unpipe(e){return this}unshift(e,t){}wrap(e){return this}push(e,t){return  false}_destroy(e,t){this.removeAllListeners();}destroy(e){return this.destroyed=true,this._destroy(e),this}pipe(e,t){return {}}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return this.destroy(),Promise.resolve()}async*[Symbol.asyncIterator](){throw o("Readable.asyncIterator")}iterator(e){throw o("Readable.iterator")}map(e,t){throw o("Readable.map")}filter(e,t){throw o("Readable.filter")}forEach(e,t){throw o("Readable.forEach")}reduce(e,t,r){throw o("Readable.reduce")}find(e,t){throw o("Readable.find")}findIndex(e,t){throw o("Readable.findIndex")}some(e,t){throw o("Readable.some")}toArray(e){throw o("Readable.toArray")}every(e,t){throw o("Readable.every")}flatMap(e,t){throw o("Readable.flatMap")}drop(e,t){throw o("Readable.drop")}take(e,t){throw o("Readable.take")}asIndexedPairs(e){throw o("Readable.asIndexedPairs")}};let l$1 = class l extends EventEmitter{__unenv__={};writable=true;writableEnded=false;writableFinished=false;writableHighWaterMark=0;writableLength=0;writableObjectMode=false;writableCorked=0;closed=false;errored=null;writableNeedDrain=false;destroyed=false;_data;_encoding="utf8";constructor(e){super();}pipe(e,t){return {}}_write(e,t,r){if(this.writableEnded){r&&r();return}if(this._data===void 0)this._data=e;else {const s=typeof this._data=="string"?Buffer$1.from(this._data,this._encoding||t||"utf8"):this._data,a=typeof e=="string"?Buffer$1.from(e,t||this._encoding||"utf8"):e;this._data=Buffer$1.concat([s,a]);}this._encoding=t,r&&r();}_writev(e,t){}_destroy(e,t){}_final(e){}write(e,t,r){const s=typeof t=="string"?this._encoding:"utf8",a=typeof t=="function"?t:typeof r=="function"?r:void 0;return this._write(e,s,a),true}setDefaultEncoding(e){return this}end(e,t,r){const s=typeof e=="function"?e:typeof t=="function"?t:typeof r=="function"?r:void 0;if(this.writableEnded)return s&&s(),this;const a=e===s?void 0:e;if(a){const u=t===s?void 0:t;this.write(a,u,s);}return this.writableEnded=true,this.writableFinished=true,this.emit("close"),this.emit("finish"),this}cork(){}uncork(){}destroy(e){return this.destroyed=true,delete this._data,this.removeAllListeners(),this}compose(e,t){throw new Error("Method not implemented.")}};const c=class{allowHalfOpen=true;_destroy;constructor(e=new i$1,t=new l$1){Object.assign(this,e),Object.assign(this,t),this._destroy=g(e._destroy,t._destroy);}};function _(){return Object.assign(c.prototype,i$1.prototype),Object.assign(c.prototype,l$1.prototype),c}function g(...n){return function(...e){for(const t of n)t(...e);}}const m=_();let A$1 = class A extends m{__unenv__={};bufferSize=0;bytesRead=0;bytesWritten=0;connecting=false;destroyed=false;pending=false;localAddress="";localPort=0;remoteAddress="";remoteFamily="";remotePort=0;autoSelectFamilyAttemptedAddresses=[];readyState="readOnly";constructor(e){super();}write(e,t,r){return  false}connect(e,t,r){return this}end(e,t,r){return this}setEncoding(e){return this}pause(){return this}resume(){return this}setTimeout(e,t){return this}setNoDelay(e){return this}setKeepAlive(e,t){return this}address(){return {}}unref(){return this}ref(){return this}destroySoon(){this.destroy();}resetAndDestroy(){const e=new Error("ERR_SOCKET_CLOSED");return e.code="ERR_SOCKET_CLOSED",this.destroy(e),this}};class y extends i$1{aborted=false;httpVersion="1.1";httpVersionMajor=1;httpVersionMinor=1;complete=true;connection;socket;headers={};trailers={};method="GET";url="/";statusCode=200;statusMessage="";closed=false;errored=null;readable=false;constructor(e){super(),this.socket=this.connection=e||new A$1;}get rawHeaders(){const e=this.headers,t=[];for(const r in e)if(Array.isArray(e[r]))for(const s of e[r])t.push(r,s);else t.push(r,e[r]);return t}get rawTrailers(){return []}setTimeout(e,t){return this}get headersDistinct(){return p(this.headers)}get trailersDistinct(){return p(this.trailers)}}function p(n){const e={};for(const[t,r]of Object.entries(n))t&&(e[t]=(Array.isArray(r)?r:[r]).filter(Boolean));return e}class w extends l$1{statusCode=200;statusMessage="";upgrading=false;chunkedEncoding=false;shouldKeepAlive=false;useChunkedEncodingByDefault=false;sendDate=false;finished=false;headersSent=false;strictContentLength=false;connection=null;socket=null;req;_headers={};constructor(e){super(),this.req=e;}assignSocket(e){e._httpMessage=this,this.socket=e,this.connection=e,this.emit("socket",e),this._flush();}_flush(){this.flushHeaders();}detachSocket(e){}writeContinue(e){}writeHead(e,t,r){e&&(this.statusCode=e),typeof t=="string"&&(this.statusMessage=t,t=void 0);const s=r||t;if(s&&!Array.isArray(s))for(const a in s)this.setHeader(a,s[a]);return this.headersSent=true,this}writeProcessing(){}setTimeout(e,t){return this}appendHeader(e,t){e=e.toLowerCase();const r=this._headers[e],s=[...Array.isArray(r)?r:[r],...Array.isArray(t)?t:[t]].filter(Boolean);return this._headers[e]=s.length>1?s:s[0],this}setHeader(e,t){return this._headers[e.toLowerCase()]=t,this}setHeaders(e){for(const[t,r]of Object.entries(e))this.setHeader(t,r);return this}getHeader(e){return this._headers[e.toLowerCase()]}getHeaders(){return this._headers}getHeaderNames(){return Object.keys(this._headers)}hasHeader(e){return e.toLowerCase()in this._headers}removeHeader(e){delete this._headers[e.toLowerCase()];}addTrailers(e){}flushHeaders(){}writeEarlyHints(e,t){typeof t=="function"&&t();}}const E=(()=>{const n=function(){};return n.prototype=Object.create(null),n})();function R(n={}){const e=new E,t=Array.isArray(n)||H(n)?n:Object.entries(n);for(const[r,s]of t)if(s){if(e[r]===void 0){e[r]=s;continue}e[r]=[...Array.isArray(e[r])?e[r]:[e[r]],...Array.isArray(s)?s:[s]];}return e}function H(n){return typeof n?.entries=="function"}function S(n={}){if(n instanceof Headers)return n;const e=new Headers;for(const[t,r]of Object.entries(n))if(r!==void 0){if(Array.isArray(r)){for(const s of r)e.append(t,String(s));continue}e.set(t,String(r));}return e}const C$1=new Set([101,204,205,304]);async function b$1(n,e){const t=new y,r=new w(t);t.url=e.url?.toString()||"/";let s;if(!t.url.startsWith("/")){const d=new URL(t.url);s=d.host,t.url=d.pathname+d.search+d.hash;}t.method=e.method||"GET",t.headers=R(e.headers||{}),t.headers.host||(t.headers.host=e.host||s||"localhost"),t.connection.encrypted=t.connection.encrypted||e.protocol==="https",t.body=e.body||null,t.__unenv__=e.context,await n(t,r);let a=r._data;(C$1.has(r.statusCode)||t.method.toUpperCase()==="HEAD")&&(a=null,delete r._headers["content-length"]);const u={status:r.statusCode,statusText:r.statusMessage,headers:r._headers,body:a};return t.destroy(),r.destroy(),u}async function O(n,e,t={}){try{const r=await b$1(n,{url:e,...t});return new Response(r.body,{status:r.status,statusText:r.statusText,headers:S(r.headers)})}catch(r){return new Response(r.toString(),{status:Number.parseInt(r.statusCode||r.code)||500,statusText:r.statusText})}}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

class H3Error extends Error {
  static __h3_error__ = true;
  statusCode = 500;
  fatal = false;
  unhandled = false;
  statusMessage;
  data;
  cause;
  constructor(message, opts = {}) {
    super(message, opts);
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== undefined) {
      obj.data = this.data;
    }
    return obj;
  }
}
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== undefined) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== undefined) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, undefined, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(undefined);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== undefined) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "accept-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => undefined);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event, { host: target.startsWith("/") }),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== undefined) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event, opts) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event, {
        host: typeof req === "string" && req.startsWith("/")
      }),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== undefined) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

class H3Event {
  "__is_event__" = true;
  // Context
  node;
  // Node
  web;
  // Web
  context = {};
  // Shared
  // Request
  _method;
  _path;
  _headers;
  _requestBody;
  // Response
  _handled = false;
  // Hooks
  _onBeforeResponseCalled;
  _onAfterResponseCalled;
  constructor(req, res) {
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : undefined;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : undefined;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === undefined ? undefined : await val;
      if (_body !== undefined) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, undefined);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, undefined);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, undefined)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, undefined, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, undefined, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, undefined, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === undefined && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const s$1=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch$1 = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s$1;
const AbortController$1 = globalThis.AbortController || i;
createFetch({ fetch: fetch$1, Headers: Headers$1, AbortController: AbortController$1 });

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}

const storageKeyProperties = [
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, createError);
  }
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore, maxDepth) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        if (maxDepth === void 0 || maxDepth > 0) {
          const dirFiles = await readdirRecursive(
            entryPath,
            ignore,
            maxDepth === void 0 ? void 0 : maxDepth - 1
          );
          files.push(...dirFiles.map((f) => entry.name + "/" + f));
        }
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    flags: {
      maxDepth: true
    },
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys(_base, topts) {
      return readdirRecursive(r("."), opts.ignore, topts?.maxDepth);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const e=globalThis.process?.getBuiltinModule?.("crypto")?.hash,r="sha256",s="base64url";function digest(t){if(e)return e(r,t,s);const o=createHash(r).update(t);return globalThis.process?.versions?.webcontainer?o.digest().toString(s):o.digest(s)}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {};



const appConfig$1 = defuFn(inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {}
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig$1));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$0 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const appConfig = {"name":"vinxi","routers":[{"name":"public","type":"static","dir":"./public","base":"/","root":"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack","order":0,"outDir":"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/.vinxi/build/public"},{"name":"client","type":"client","target":"browser","handler":"app/client.tsx","base":"/_build","build":{"sourcemap":true},"root":"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack","outDir":"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/.vinxi/build/client","order":1},{"name":"ssr","type":"http","target":"server","handler":"app/ssr.tsx","link":{"client":"client"},"root":"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack","base":"/","outDir":"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/.vinxi/build/ssr","order":2},{"name":"server","type":"http","target":"server","base":"/_server","handler":"node_modules/@tanstack/start-server-functions-handler/dist/esm/index.js","root":"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack","outDir":"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/.vinxi/build/server","order":3}],"server":{"_config":{},"preset":"node-server","experimental":{"asyncContext":true}},"root":"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack"};
				const buildManifest = {"client":{"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/app/app.css":{"file":"assets/app-Cs9mLtrU.css","src":"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/app/app.css"},"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/app/index.css":{"file":"assets/index-CB_DIBKG.css","src":"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/app/index.css"},"_angular-html-0A1EF1PY.js":{"file":"assets/angular-html-0A1EF1PY.js","name":"angular-html","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs"]},"_client-LSARlrfQ.js":{"file":"assets/client-LSARlrfQ.js","name":"client","dynamicImports":["app/routes/verify-account.tsx?tsr-split=component","app/routes/index.tsx?tsr-split=component","app/routes/accept-invitation/$invitationId.$invitationEmail.tsx?tsr-split=component","app/routes/_authed/_layout/team-chat/index.tsx?tsr-split=component","app/routes/_authed/_layout/organizations/index.tsx?tsr-split=component","app/routes/_authed/_layout/organization-settings/index.tsx?tsr-split=component","app/routes/_authed/_layout/members/index.tsx?tsr-split=component","app/routes/_authed/_layout/teamspace/$teamspaceId.tsx?tsr-split=component","app/routes/_authed/_layout/project/$projectId.tsx?tsr-split=component","node_modules/shiki/dist/index.mjs"],"assets":["assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp","assets/app-Cs9mLtrU.css","assets/index-CB_DIBKG.css"]},"_collapsible-DJ8QDLqz.js":{"file":"assets/collapsible-DJ8QDLqz.js","name":"collapsible","imports":["_client-LSARlrfQ.js"]},"_lock-D3ifyutX.js":{"file":"assets/lock-D3ifyutX.js","name":"lock","imports":["_client-LSARlrfQ.js"]},"_trash-2-SYuB1gpe.js":{"file":"assets/trash-2-SYuB1gpe.js","name":"trash-2","imports":["_client-LSARlrfQ.js"]},"app/assets/img/IntelliOptima-Black-Text-Logo.webp":{"file":"assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp","src":"app/assets/img/IntelliOptima-Black-Text-Logo.webp"},"app/routes/_authed/_layout/members/index.tsx?tsr-split=component":{"file":"assets/index-iZ0qqT8L.js","name":"index","src":"app/routes/_authed/_layout/members/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-LSARlrfQ.js","_trash-2-SYuB1gpe.js"]},"app/routes/_authed/_layout/organization-settings/index.tsx?tsr-split=component":{"file":"assets/index-BD9t5Hr3.js","name":"index","src":"app/routes/_authed/_layout/organization-settings/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-LSARlrfQ.js"]},"app/routes/_authed/_layout/organizations/index.tsx?tsr-split=component":{"file":"assets/index-Bylorr8-.js","name":"index","src":"app/routes/_authed/_layout/organizations/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-LSARlrfQ.js"]},"app/routes/_authed/_layout/project/$projectId.tsx?tsr-split=component":{"file":"assets/_projectId-BsaTQPVK.js","name":"_projectId","src":"app/routes/_authed/_layout/project/$projectId.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-LSARlrfQ.js","_collapsible-DJ8QDLqz.js","_lock-D3ifyutX.js","_trash-2-SYuB1gpe.js"]},"app/routes/_authed/_layout/team-chat/index.tsx?tsr-split=component":{"file":"assets/index-DjSMm6pi.js","name":"index","src":"app/routes/_authed/_layout/team-chat/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-LSARlrfQ.js"]},"app/routes/_authed/_layout/teamspace/$teamspaceId.tsx?tsr-split=component":{"file":"assets/_teamspaceId-oRrr0_9M.js","name":"_teamspaceId","src":"app/routes/_authed/_layout/teamspace/$teamspaceId.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-LSARlrfQ.js","_collapsible-DJ8QDLqz.js","_lock-D3ifyutX.js"]},"app/routes/accept-invitation/$invitationId.$invitationEmail.tsx?tsr-split=component":{"file":"assets/_invitationId._invitationEmail-D50Rj71-.js","name":"_invitationId._invitationEmail","src":"app/routes/accept-invitation/$invitationId.$invitationEmail.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-LSARlrfQ.js"]},"app/routes/index.tsx?tsr-split=component":{"file":"assets/index-B26PC7u_.js","name":"index","src":"app/routes/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-LSARlrfQ.js","_lock-D3ifyutX.js"]},"app/routes/verify-account.tsx?tsr-split=component":{"file":"assets/verify-account-BgszTR6X.js","name":"verify-account","src":"app/routes/verify-account.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-LSARlrfQ.js"]},"node_modules/@shikijs/langs/dist/abap.mjs":{"file":"assets/abap-DsBKuouk.js","name":"abap","src":"node_modules/@shikijs/langs/dist/abap.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/actionscript-3.mjs":{"file":"assets/actionscript-3-B_7mSSNY.js","name":"actionscript-3","src":"node_modules/@shikijs/langs/dist/actionscript-3.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/ada.mjs":{"file":"assets/ada-727ZlQH0.js","name":"ada","src":"node_modules/@shikijs/langs/dist/ada.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/angular-ts.mjs":{"file":"assets/angular-ts-BQ_2sjHF.js","name":"angular-ts","src":"node_modules/@shikijs/langs/dist/angular-ts.mjs","isDynamicEntry":true,"imports":["_angular-html-0A1EF1PY.js","node_modules/@shikijs/langs/dist/scss.mjs","node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/apache.mjs":{"file":"assets/apache-Dn00JSTd.js","name":"apache","src":"node_modules/@shikijs/langs/dist/apache.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/apex.mjs":{"file":"assets/apex-COJ4H7py.js","name":"apex","src":"node_modules/@shikijs/langs/dist/apex.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/apl.mjs":{"file":"assets/apl-DkRiwRYE.js","name":"apl","src":"node_modules/@shikijs/langs/dist/apl.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/java.mjs"]},"node_modules/@shikijs/langs/dist/applescript.mjs":{"file":"assets/applescript-DSrUkfvF.js","name":"applescript","src":"node_modules/@shikijs/langs/dist/applescript.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/ara.mjs":{"file":"assets/ara-CQ5q8R2W.js","name":"ara","src":"node_modules/@shikijs/langs/dist/ara.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/asciidoc.mjs":{"file":"assets/asciidoc-B-_AxZdj.js","name":"asciidoc","src":"node_modules/@shikijs/langs/dist/asciidoc.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/asm.mjs":{"file":"assets/asm-Dhn9LcZ4.js","name":"asm","src":"node_modules/@shikijs/langs/dist/asm.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/astro.mjs":{"file":"assets/astro-6Nq8D0ds.js","name":"astro","src":"node_modules/@shikijs/langs/dist/astro.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/postcss.mjs"]},"node_modules/@shikijs/langs/dist/awk.mjs":{"file":"assets/awk-eg146-Ew.js","name":"awk","src":"node_modules/@shikijs/langs/dist/awk.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/ballerina.mjs":{"file":"assets/ballerina-Du268qiB.js","name":"ballerina","src":"node_modules/@shikijs/langs/dist/ballerina.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/bat.mjs":{"file":"assets/bat-fje9CFhw.js","name":"bat","src":"node_modules/@shikijs/langs/dist/bat.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/beancount.mjs":{"file":"assets/beancount-jY9aw0fr.js","name":"beancount","src":"node_modules/@shikijs/langs/dist/beancount.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/berry.mjs":{"file":"assets/berry-3xVqZejG.js","name":"berry","src":"node_modules/@shikijs/langs/dist/berry.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/bibtex.mjs":{"file":"assets/bibtex-xW4inM5L.js","name":"bibtex","src":"node_modules/@shikijs/langs/dist/bibtex.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/bicep.mjs":{"file":"assets/bicep-DHo0CJ0O.js","name":"bicep","src":"node_modules/@shikijs/langs/dist/bicep.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/blade.mjs":{"file":"assets/blade-BPCFRWwN.js","name":"blade","src":"node_modules/@shikijs/langs/dist/blade.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/java.mjs"]},"node_modules/@shikijs/langs/dist/bsl.mjs":{"file":"assets/bsl-0rw82Q3C.js","name":"bsl","src":"node_modules/@shikijs/langs/dist/bsl.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/sdbl.mjs"]},"node_modules/@shikijs/langs/dist/c.mjs":{"file":"assets/c-C3t2pwGQ.js","name":"c","src":"node_modules/@shikijs/langs/dist/c.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/cadence.mjs":{"file":"assets/cadence-Olw6fvns.js","name":"cadence","src":"node_modules/@shikijs/langs/dist/cadence.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/cairo.mjs":{"file":"assets/cairo-DzT9zD9X.js","name":"cairo","src":"node_modules/@shikijs/langs/dist/cairo.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/python.mjs"]},"node_modules/@shikijs/langs/dist/clarity.mjs":{"file":"assets/clarity-CeaQPKDP.js","name":"clarity","src":"node_modules/@shikijs/langs/dist/clarity.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/clojure.mjs":{"file":"assets/clojure-DxSadP1t.js","name":"clojure","src":"node_modules/@shikijs/langs/dist/clojure.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/cmake.mjs":{"file":"assets/cmake-DbcauaCG.js","name":"cmake","src":"node_modules/@shikijs/langs/dist/cmake.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/cobol.mjs":{"file":"assets/cobol-PXo7EpZU.js","name":"cobol","src":"node_modules/@shikijs/langs/dist/cobol.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/java.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/codeowners.mjs":{"file":"assets/codeowners-Bp6g37R7.js","name":"codeowners","src":"node_modules/@shikijs/langs/dist/codeowners.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/codeql.mjs":{"file":"assets/codeql-DBtIRQT_.js","name":"codeql","src":"node_modules/@shikijs/langs/dist/codeql.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/coffee.mjs":{"file":"assets/coffee-dyiR41kL.js","name":"coffee","src":"node_modules/@shikijs/langs/dist/coffee.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/javascript.mjs"]},"node_modules/@shikijs/langs/dist/common-lisp.mjs":{"file":"assets/common-lisp-C7gG9l05.js","name":"common-lisp","src":"node_modules/@shikijs/langs/dist/common-lisp.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/coq.mjs":{"file":"assets/coq-BHyGnp0Z.js","name":"coq","src":"node_modules/@shikijs/langs/dist/coq.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/cpp.mjs":{"file":"assets/cpp-DXc6Zn63.js","name":"cpp","src":"node_modules/@shikijs/langs/dist/cpp.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/regexp.mjs","node_modules/@shikijs/langs/dist/glsl.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/c.mjs"]},"node_modules/@shikijs/langs/dist/crystal.mjs":{"file":"assets/crystal-BANhDVLs.js","name":"crystal","src":"node_modules/@shikijs/langs/dist/crystal.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/c.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/shellscript.mjs"]},"node_modules/@shikijs/langs/dist/csharp.mjs":{"file":"assets/csharp-C9e09xm7.js","name":"csharp","src":"node_modules/@shikijs/langs/dist/csharp.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/css.mjs":{"file":"assets/css-BPhBrDlE.js","name":"css","src":"node_modules/@shikijs/langs/dist/css.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/csv.mjs":{"file":"assets/csv-B0qRVHPH.js","name":"csv","src":"node_modules/@shikijs/langs/dist/csv.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/cue.mjs":{"file":"assets/cue-DtFQj3wx.js","name":"cue","src":"node_modules/@shikijs/langs/dist/cue.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/cypher.mjs":{"file":"assets/cypher-Dp08fnRF.js","name":"cypher","src":"node_modules/@shikijs/langs/dist/cypher.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/d.mjs":{"file":"assets/d-BoXegm-a.js","name":"d","src":"node_modules/@shikijs/langs/dist/d.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/dart.mjs":{"file":"assets/dart-B9wLZaAG.js","name":"dart","src":"node_modules/@shikijs/langs/dist/dart.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/dax.mjs":{"file":"assets/dax-D_iqerNF.js","name":"dax","src":"node_modules/@shikijs/langs/dist/dax.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/desktop.mjs":{"file":"assets/desktop-DEIpsLCJ.js","name":"desktop","src":"node_modules/@shikijs/langs/dist/desktop.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/diff.mjs":{"file":"assets/diff-DERFIACx.js","name":"diff","src":"node_modules/@shikijs/langs/dist/diff.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/docker.mjs":{"file":"assets/docker-BcOcwvcX.js","name":"docker","src":"node_modules/@shikijs/langs/dist/docker.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/dotenv.mjs":{"file":"assets/dotenv-Ddn3lr0y.js","name":"dotenv","src":"node_modules/@shikijs/langs/dist/dotenv.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/dream-maker.mjs":{"file":"assets/dream-maker-2V0Ap-uE.js","name":"dream-maker","src":"node_modules/@shikijs/langs/dist/dream-maker.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/edge.mjs":{"file":"assets/edge-DtcDOGsI.js","name":"edge","src":"node_modules/@shikijs/langs/dist/edge.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/html-derivative.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/elixir.mjs":{"file":"assets/elixir-BigP6_ue.js","name":"elixir","src":"node_modules/@shikijs/langs/dist/elixir.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/elm.mjs":{"file":"assets/elm-0zW53zC1.js","name":"elm","src":"node_modules/@shikijs/langs/dist/elm.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/glsl.mjs","node_modules/@shikijs/langs/dist/c.mjs"]},"node_modules/@shikijs/langs/dist/emacs-lisp.mjs":{"file":"assets/emacs-lisp-BX77sIaO.js","name":"emacs-lisp","src":"node_modules/@shikijs/langs/dist/emacs-lisp.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/erb.mjs":{"file":"assets/erb-HE-c_T40.js","name":"erb","src":"node_modules/@shikijs/langs/dist/erb.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/ruby.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/haml.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/java.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/graphql.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/jsx.mjs","node_modules/@shikijs/langs/dist/tsx.mjs","node_modules/@shikijs/langs/dist/cpp.mjs","node_modules/@shikijs/langs/dist/regexp.mjs","node_modules/@shikijs/langs/dist/glsl.mjs","node_modules/@shikijs/langs/dist/c.mjs","node_modules/@shikijs/langs/dist/shellscript.mjs","node_modules/@shikijs/langs/dist/lua.mjs","node_modules/@shikijs/langs/dist/yaml.mjs"]},"node_modules/@shikijs/langs/dist/erlang.mjs":{"file":"assets/erlang-WlOKAcJ7.js","name":"erlang","src":"node_modules/@shikijs/langs/dist/erlang.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/fennel.mjs":{"file":"assets/fennel-bCA53EVm.js","name":"fennel","src":"node_modules/@shikijs/langs/dist/fennel.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/fish.mjs":{"file":"assets/fish-BLmoVg8f.js","name":"fish","src":"node_modules/@shikijs/langs/dist/fish.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/fluent.mjs":{"file":"assets/fluent-Dayu4EKP.js","name":"fluent","src":"node_modules/@shikijs/langs/dist/fluent.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/fortran-fixed-form.mjs":{"file":"assets/fortran-fixed-form-CMvLjigt.js","name":"fortran-fixed-form","src":"node_modules/@shikijs/langs/dist/fortran-fixed-form.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/fortran-free-form.mjs"]},"node_modules/@shikijs/langs/dist/fortran-free-form.mjs":{"file":"assets/fortran-free-form-DjP-tqRL.js","name":"fortran-free-form","src":"node_modules/@shikijs/langs/dist/fortran-free-form.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/fsharp.mjs":{"file":"assets/fsharp-BPKZXYjh.js","name":"fsharp","src":"node_modules/@shikijs/langs/dist/fsharp.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/markdown.mjs"]},"node_modules/@shikijs/langs/dist/gdresource.mjs":{"file":"assets/gdresource-N9nUj_Sl.js","name":"gdresource","src":"node_modules/@shikijs/langs/dist/gdresource.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/gdshader.mjs","node_modules/@shikijs/langs/dist/gdscript.mjs"]},"node_modules/@shikijs/langs/dist/gdscript.mjs":{"file":"assets/gdscript-CCbUEAxs.js","name":"gdscript","src":"node_modules/@shikijs/langs/dist/gdscript.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/gdshader.mjs":{"file":"assets/gdshader-SKMF96pI.js","name":"gdshader","src":"node_modules/@shikijs/langs/dist/gdshader.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/genie.mjs":{"file":"assets/genie-ajMbGru0.js","name":"genie","src":"node_modules/@shikijs/langs/dist/genie.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/gherkin.mjs":{"file":"assets/gherkin--30QC5Em.js","name":"gherkin","src":"node_modules/@shikijs/langs/dist/gherkin.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/git-commit.mjs":{"file":"assets/git-commit-BhPX3RR1.js","name":"git-commit","src":"node_modules/@shikijs/langs/dist/git-commit.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/diff.mjs"]},"node_modules/@shikijs/langs/dist/git-rebase.mjs":{"file":"assets/git-rebase-uGYh9tYw.js","name":"git-rebase","src":"node_modules/@shikijs/langs/dist/git-rebase.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/shellscript.mjs"]},"node_modules/@shikijs/langs/dist/gleam.mjs":{"file":"assets/gleam-B430Bg39.js","name":"gleam","src":"node_modules/@shikijs/langs/dist/gleam.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/glimmer-js.mjs":{"file":"assets/glimmer-js-CxrE9ua0.js","name":"glimmer-js","src":"node_modules/@shikijs/langs/dist/glimmer-js.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/html.mjs"]},"node_modules/@shikijs/langs/dist/glimmer-ts.mjs":{"file":"assets/glimmer-ts-CkqoYwsv.js","name":"glimmer-ts","src":"node_modules/@shikijs/langs/dist/glimmer-ts.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/html.mjs"]},"node_modules/@shikijs/langs/dist/glsl.mjs":{"file":"assets/glsl-DBO2IWDn.js","name":"glsl","src":"node_modules/@shikijs/langs/dist/glsl.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/c.mjs"]},"node_modules/@shikijs/langs/dist/gnuplot.mjs":{"file":"assets/gnuplot-CM8KxXT1.js","name":"gnuplot","src":"node_modules/@shikijs/langs/dist/gnuplot.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/go.mjs":{"file":"assets/go-Dtn5OO9k.js","name":"go","src":"node_modules/@shikijs/langs/dist/go.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/graphql.mjs":{"file":"assets/graphql-DCjtUNCr.js","name":"graphql","src":"node_modules/@shikijs/langs/dist/graphql.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/jsx.mjs","node_modules/@shikijs/langs/dist/tsx.mjs"]},"node_modules/@shikijs/langs/dist/groovy.mjs":{"file":"assets/groovy-Blx2zv3z.js","name":"groovy","src":"node_modules/@shikijs/langs/dist/groovy.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/hack.mjs":{"file":"assets/hack-oRCDNDMe.js","name":"hack","src":"node_modules/@shikijs/langs/dist/hack.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/haml.mjs":{"file":"assets/haml-DeHWu7Vy.js","name":"haml","src":"node_modules/@shikijs/langs/dist/haml.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/handlebars.mjs":{"file":"assets/handlebars-DQyaA0Rc.js","name":"handlebars","src":"node_modules/@shikijs/langs/dist/handlebars.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/yaml.mjs"]},"node_modules/@shikijs/langs/dist/haskell.mjs":{"file":"assets/haskell-CWgbWrzg.js","name":"haskell","src":"node_modules/@shikijs/langs/dist/haskell.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/haxe.mjs":{"file":"assets/haxe-C5wWYbrZ.js","name":"haxe","src":"node_modules/@shikijs/langs/dist/haxe.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/hcl.mjs":{"file":"assets/hcl-CucaAMjX.js","name":"hcl","src":"node_modules/@shikijs/langs/dist/hcl.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/hjson.mjs":{"file":"assets/hjson-T-Tgc4AT.js","name":"hjson","src":"node_modules/@shikijs/langs/dist/hjson.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/hlsl.mjs":{"file":"assets/hlsl-ifBTmRxC.js","name":"hlsl","src":"node_modules/@shikijs/langs/dist/hlsl.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/html-derivative.mjs":{"file":"assets/html-derivative-CAzaCcJ8.js","name":"html-derivative","src":"node_modules/@shikijs/langs/dist/html-derivative.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/html.mjs":{"file":"assets/html-Dy5dLvcr.js","name":"html","src":"node_modules/@shikijs/langs/dist/html.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/http.mjs":{"file":"assets/http-D7RGPc5S.js","name":"http","src":"node_modules/@shikijs/langs/dist/http.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/shellscript.mjs","node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/graphql.mjs","node_modules/@shikijs/langs/dist/java.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/jsx.mjs","node_modules/@shikijs/langs/dist/tsx.mjs"]},"node_modules/@shikijs/langs/dist/hxml.mjs":{"file":"assets/hxml-TIA70rKU.js","name":"hxml","src":"node_modules/@shikijs/langs/dist/hxml.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/haxe.mjs"]},"node_modules/@shikijs/langs/dist/hy.mjs":{"file":"assets/hy-BMj5Y0dO.js","name":"hy","src":"node_modules/@shikijs/langs/dist/hy.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/imba.mjs":{"file":"assets/imba-bv_oIlVt.js","name":"imba","src":"node_modules/@shikijs/langs/dist/imba.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/typescript.mjs"]},"node_modules/@shikijs/langs/dist/ini.mjs":{"file":"assets/ini-BjABl1g7.js","name":"ini","src":"node_modules/@shikijs/langs/dist/ini.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/java.mjs":{"file":"assets/java-xI-RfyKK.js","name":"java","src":"node_modules/@shikijs/langs/dist/java.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/javascript.mjs":{"file":"assets/javascript-ySlJ1b_l.js","name":"javascript","src":"node_modules/@shikijs/langs/dist/javascript.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/jinja.mjs":{"file":"assets/jinja-V0eE2z2R.js","name":"jinja","src":"node_modules/@shikijs/langs/dist/jinja.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/jison.mjs":{"file":"assets/jison-BqZprYcd.js","name":"jison","src":"node_modules/@shikijs/langs/dist/jison.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/javascript.mjs"]},"node_modules/@shikijs/langs/dist/json.mjs":{"file":"assets/json-DTAJTTim.js","name":"json","src":"node_modules/@shikijs/langs/dist/json.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/json5.mjs":{"file":"assets/json5-BLCLeV30.js","name":"json5","src":"node_modules/@shikijs/langs/dist/json5.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/jsonc.mjs":{"file":"assets/jsonc-CR_dl2Bk.js","name":"jsonc","src":"node_modules/@shikijs/langs/dist/jsonc.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/jsonl.mjs":{"file":"assets/jsonl-YSxxb8je.js","name":"jsonl","src":"node_modules/@shikijs/langs/dist/jsonl.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/jsonnet.mjs":{"file":"assets/jsonnet-BfivnA6A.js","name":"jsonnet","src":"node_modules/@shikijs/langs/dist/jsonnet.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/jssm.mjs":{"file":"assets/jssm-CQPZbkWf.js","name":"jssm","src":"node_modules/@shikijs/langs/dist/jssm.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/jsx.mjs":{"file":"assets/jsx-BAng5TT0.js","name":"jsx","src":"node_modules/@shikijs/langs/dist/jsx.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/julia.mjs":{"file":"assets/julia-B15RSDUV.js","name":"julia","src":"node_modules/@shikijs/langs/dist/julia.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/cpp.mjs","node_modules/@shikijs/langs/dist/python.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/r.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/regexp.mjs","node_modules/@shikijs/langs/dist/glsl.mjs","node_modules/@shikijs/langs/dist/c.mjs"]},"node_modules/@shikijs/langs/dist/kotlin.mjs":{"file":"assets/kotlin-B5lbUyaz.js","name":"kotlin","src":"node_modules/@shikijs/langs/dist/kotlin.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/kusto.mjs":{"file":"assets/kusto-BZ4qjH1z.js","name":"kusto","src":"node_modules/@shikijs/langs/dist/kusto.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/latex.mjs":{"file":"assets/latex-B7S_v0-W.js","name":"latex","src":"node_modules/@shikijs/langs/dist/latex.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/tex.mjs","node_modules/@shikijs/langs/dist/r.mjs"]},"node_modules/@shikijs/langs/dist/lean.mjs":{"file":"assets/lean-XBlWyCtg.js","name":"lean","src":"node_modules/@shikijs/langs/dist/lean.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/less.mjs":{"file":"assets/less-BR4n0CG2.js","name":"less","src":"node_modules/@shikijs/langs/dist/less.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/liquid.mjs":{"file":"assets/liquid-ChyiIx6a.js","name":"liquid","src":"node_modules/@shikijs/langs/dist/liquid.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/javascript.mjs"]},"node_modules/@shikijs/langs/dist/log.mjs":{"file":"assets/log-Cc5clBb7.js","name":"log","src":"node_modules/@shikijs/langs/dist/log.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/logo.mjs":{"file":"assets/logo-IuBKFhSY.js","name":"logo","src":"node_modules/@shikijs/langs/dist/logo.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/lua.mjs":{"file":"assets/lua-CvWAzNxB.js","name":"lua","src":"node_modules/@shikijs/langs/dist/lua.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/c.mjs"]},"node_modules/@shikijs/langs/dist/luau.mjs":{"file":"assets/luau-Du5NY7AG.js","name":"luau","src":"node_modules/@shikijs/langs/dist/luau.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/make.mjs":{"file":"assets/make-Bvotw-X0.js","name":"make","src":"node_modules/@shikijs/langs/dist/make.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/markdown.mjs":{"file":"assets/markdown-BDiHrqA7.js","name":"markdown","src":"node_modules/@shikijs/langs/dist/markdown.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/marko.mjs":{"file":"assets/marko-DL0akeRX.js","name":"marko","src":"node_modules/@shikijs/langs/dist/marko.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/less.mjs","node_modules/@shikijs/langs/dist/scss.mjs","node_modules/@shikijs/langs/dist/javascript.mjs"]},"node_modules/@shikijs/langs/dist/matlab.mjs":{"file":"assets/matlab-C4-SGcC-.js","name":"matlab","src":"node_modules/@shikijs/langs/dist/matlab.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/mdc.mjs":{"file":"assets/mdc-CGDDvl7x.js","name":"mdc","src":"node_modules/@shikijs/langs/dist/mdc.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/markdown.mjs","node_modules/@shikijs/langs/dist/yaml.mjs","node_modules/@shikijs/langs/dist/html-derivative.mjs","node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/mdx.mjs":{"file":"assets/mdx-sdHcTMYB.js","name":"mdx","src":"node_modules/@shikijs/langs/dist/mdx.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/mermaid.mjs":{"file":"assets/mermaid-D3T736Ml.js","name":"mermaid","src":"node_modules/@shikijs/langs/dist/mermaid.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/mipsasm.mjs":{"file":"assets/mipsasm-D08_rs9c.js","name":"mipsasm","src":"node_modules/@shikijs/langs/dist/mipsasm.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/mojo.mjs":{"file":"assets/mojo-tpHetfZQ.js","name":"mojo","src":"node_modules/@shikijs/langs/dist/mojo.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/move.mjs":{"file":"assets/move-C1YtDkjL.js","name":"move","src":"node_modules/@shikijs/langs/dist/move.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/narrat.mjs":{"file":"assets/narrat-DLbgOhZU.js","name":"narrat","src":"node_modules/@shikijs/langs/dist/narrat.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/nextflow.mjs":{"file":"assets/nextflow-B0XVJmRM.js","name":"nextflow","src":"node_modules/@shikijs/langs/dist/nextflow.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/nginx.mjs":{"file":"assets/nginx-D_VnBJ67.js","name":"nginx","src":"node_modules/@shikijs/langs/dist/nginx.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/lua.mjs","node_modules/@shikijs/langs/dist/c.mjs"]},"node_modules/@shikijs/langs/dist/nim.mjs":{"file":"assets/nim-Chhr1h2T.js","name":"nim","src":"node_modules/@shikijs/langs/dist/nim.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/c.mjs","node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/glsl.mjs","node_modules/@shikijs/langs/dist/markdown.mjs","node_modules/@shikijs/langs/dist/java.mjs"]},"node_modules/@shikijs/langs/dist/nix.mjs":{"file":"assets/nix-Bjjh7dxw.js","name":"nix","src":"node_modules/@shikijs/langs/dist/nix.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/nushell.mjs":{"file":"assets/nushell-BekpkmYp.js","name":"nushell","src":"node_modules/@shikijs/langs/dist/nushell.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/objective-c.mjs":{"file":"assets/objective-c-BWx0ALLs.js","name":"objective-c","src":"node_modules/@shikijs/langs/dist/objective-c.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/objective-cpp.mjs":{"file":"assets/objective-cpp-aBZrgJR0.js","name":"objective-cpp","src":"node_modules/@shikijs/langs/dist/objective-cpp.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/ocaml.mjs":{"file":"assets/ocaml-BNioltXt.js","name":"ocaml","src":"node_modules/@shikijs/langs/dist/ocaml.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/pascal.mjs":{"file":"assets/pascal-JqZropPD.js","name":"pascal","src":"node_modules/@shikijs/langs/dist/pascal.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/perl.mjs":{"file":"assets/perl-DO8QnyoS.js","name":"perl","src":"node_modules/@shikijs/langs/dist/perl.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/java.mjs"]},"node_modules/@shikijs/langs/dist/php.mjs":{"file":"assets/php-udX19NJh.js","name":"php","src":"node_modules/@shikijs/langs/dist/php.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/java.mjs"]},"node_modules/@shikijs/langs/dist/plsql.mjs":{"file":"assets/plsql-LKU2TuZ1.js","name":"plsql","src":"node_modules/@shikijs/langs/dist/plsql.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/po.mjs":{"file":"assets/po--71hrkjd.js","name":"po","src":"node_modules/@shikijs/langs/dist/po.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/polar.mjs":{"file":"assets/polar-sY1Cc3Se.js","name":"polar","src":"node_modules/@shikijs/langs/dist/polar.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/postcss.mjs":{"file":"assets/postcss-B3ZDOciz.js","name":"postcss","src":"node_modules/@shikijs/langs/dist/postcss.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/powerquery.mjs":{"file":"assets/powerquery-CSHBycmS.js","name":"powerquery","src":"node_modules/@shikijs/langs/dist/powerquery.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/powershell.mjs":{"file":"assets/powershell-BXl-Qilg.js","name":"powershell","src":"node_modules/@shikijs/langs/dist/powershell.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/prisma.mjs":{"file":"assets/prisma-B48N-Iqd.js","name":"prisma","src":"node_modules/@shikijs/langs/dist/prisma.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/prolog.mjs":{"file":"assets/prolog-BY-TUvya.js","name":"prolog","src":"node_modules/@shikijs/langs/dist/prolog.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/proto.mjs":{"file":"assets/proto-zocC4JxJ.js","name":"proto","src":"node_modules/@shikijs/langs/dist/proto.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/pug.mjs":{"file":"assets/pug-VMgWr3jy.js","name":"pug","src":"node_modules/@shikijs/langs/dist/pug.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/html.mjs"]},"node_modules/@shikijs/langs/dist/puppet.mjs":{"file":"assets/puppet-COl1u60l.js","name":"puppet","src":"node_modules/@shikijs/langs/dist/puppet.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/purescript.mjs":{"file":"assets/purescript-Bg-kzb6g.js","name":"purescript","src":"node_modules/@shikijs/langs/dist/purescript.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/python.mjs":{"file":"assets/python-DBPt_AfP.js","name":"python","src":"node_modules/@shikijs/langs/dist/python.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/qml.mjs":{"file":"assets/qml-D8XfuvdV.js","name":"qml","src":"node_modules/@shikijs/langs/dist/qml.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/javascript.mjs"]},"node_modules/@shikijs/langs/dist/qmldir.mjs":{"file":"assets/qmldir-C8lEn-DE.js","name":"qmldir","src":"node_modules/@shikijs/langs/dist/qmldir.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/qss.mjs":{"file":"assets/qss-DhMKtDLN.js","name":"qss","src":"node_modules/@shikijs/langs/dist/qss.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/r.mjs":{"file":"assets/r-CwjWoCRV.js","name":"r","src":"node_modules/@shikijs/langs/dist/r.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/racket.mjs":{"file":"assets/racket-CzouJOBO.js","name":"racket","src":"node_modules/@shikijs/langs/dist/racket.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/raku.mjs":{"file":"assets/raku-B1bQXN8T.js","name":"raku","src":"node_modules/@shikijs/langs/dist/raku.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/razor.mjs":{"file":"assets/razor-AC3CASG2.js","name":"razor","src":"node_modules/@shikijs/langs/dist/razor.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/csharp.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/reg.mjs":{"file":"assets/reg-5LuOXUq_.js","name":"reg","src":"node_modules/@shikijs/langs/dist/reg.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/regexp.mjs":{"file":"assets/regexp-DFERiEu9.js","name":"regexp","src":"node_modules/@shikijs/langs/dist/regexp.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/rel.mjs":{"file":"assets/rel-DJlmqQ1C.js","name":"rel","src":"node_modules/@shikijs/langs/dist/rel.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/riscv.mjs":{"file":"assets/riscv-BAxNRJcx.js","name":"riscv","src":"node_modules/@shikijs/langs/dist/riscv.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/rst.mjs":{"file":"assets/rst-DOyLYcpU.js","name":"rst","src":"node_modules/@shikijs/langs/dist/rst.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html-derivative.mjs","node_modules/@shikijs/langs/dist/cpp.mjs","node_modules/@shikijs/langs/dist/python.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/shellscript.mjs","node_modules/@shikijs/langs/dist/yaml.mjs","node_modules/@shikijs/langs/dist/cmake.mjs","node_modules/@shikijs/langs/dist/ruby.mjs","node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/regexp.mjs","node_modules/@shikijs/langs/dist/glsl.mjs","node_modules/@shikijs/langs/dist/c.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/haml.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/java.mjs","node_modules/@shikijs/langs/dist/graphql.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/jsx.mjs","node_modules/@shikijs/langs/dist/tsx.mjs","node_modules/@shikijs/langs/dist/lua.mjs"]},"node_modules/@shikijs/langs/dist/ruby.mjs":{"file":"assets/ruby-BWnuaWfc.js","name":"ruby","src":"node_modules/@shikijs/langs/dist/ruby.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/haml.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/graphql.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/cpp.mjs","node_modules/@shikijs/langs/dist/c.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/shellscript.mjs","node_modules/@shikijs/langs/dist/lua.mjs","node_modules/@shikijs/langs/dist/yaml.mjs","node_modules/@shikijs/langs/dist/java.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/jsx.mjs","node_modules/@shikijs/langs/dist/tsx.mjs","node_modules/@shikijs/langs/dist/regexp.mjs","node_modules/@shikijs/langs/dist/glsl.mjs"]},"node_modules/@shikijs/langs/dist/rust.mjs":{"file":"assets/rust-Cg69lM4A.js","name":"rust","src":"node_modules/@shikijs/langs/dist/rust.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/sas.mjs":{"file":"assets/sas-CCCYgBRj.js","name":"sas","src":"node_modules/@shikijs/langs/dist/sas.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/sql.mjs"]},"node_modules/@shikijs/langs/dist/sass.mjs":{"file":"assets/sass-DjCbjd0V.js","name":"sass","src":"node_modules/@shikijs/langs/dist/sass.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/scala.mjs":{"file":"assets/scala-DPWDxuKt.js","name":"scala","src":"node_modules/@shikijs/langs/dist/scala.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/scheme.mjs":{"file":"assets/scheme-D8P4R8x9.js","name":"scheme","src":"node_modules/@shikijs/langs/dist/scheme.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/scss.mjs":{"file":"assets/scss-C31hgJw-.js","name":"scss","src":"node_modules/@shikijs/langs/dist/scss.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/sdbl.mjs":{"file":"assets/sdbl-CSHvh9SD.js","name":"sdbl","src":"node_modules/@shikijs/langs/dist/sdbl.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/shaderlab.mjs":{"file":"assets/shaderlab-B7qAK45m.js","name":"shaderlab","src":"node_modules/@shikijs/langs/dist/shaderlab.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/hlsl.mjs"]},"node_modules/@shikijs/langs/dist/shellscript.mjs":{"file":"assets/shellscript-CWGUrYGm.js","name":"shellscript","src":"node_modules/@shikijs/langs/dist/shellscript.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/shellsession.mjs":{"file":"assets/shellsession-DN36oS-i.js","name":"shellsession","src":"node_modules/@shikijs/langs/dist/shellsession.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/shellscript.mjs"]},"node_modules/@shikijs/langs/dist/smalltalk.mjs":{"file":"assets/smalltalk-RJ4jLoVH.js","name":"smalltalk","src":"node_modules/@shikijs/langs/dist/smalltalk.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/solidity.mjs":{"file":"assets/solidity-C1w2a3ep.js","name":"solidity","src":"node_modules/@shikijs/langs/dist/solidity.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/soy.mjs":{"file":"assets/soy-CxmeJsH_.js","name":"soy","src":"node_modules/@shikijs/langs/dist/soy.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/sparql.mjs":{"file":"assets/sparql-bYkjHRlG.js","name":"sparql","src":"node_modules/@shikijs/langs/dist/sparql.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/turtle.mjs"]},"node_modules/@shikijs/langs/dist/splunk.mjs":{"file":"assets/splunk-a8RH-YUw.js","name":"splunk","src":"node_modules/@shikijs/langs/dist/splunk.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/sql.mjs":{"file":"assets/sql-BBT0u3iQ.js","name":"sql","src":"node_modules/@shikijs/langs/dist/sql.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/ssh-config.mjs":{"file":"assets/ssh-config-BknIz3MU.js","name":"ssh-config","src":"node_modules/@shikijs/langs/dist/ssh-config.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/stata.mjs":{"file":"assets/stata-CXDRq8TI.js","name":"stata","src":"node_modules/@shikijs/langs/dist/stata.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/sql.mjs"]},"node_modules/@shikijs/langs/dist/stylus.mjs":{"file":"assets/stylus-Cbu_jgUK.js","name":"stylus","src":"node_modules/@shikijs/langs/dist/stylus.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/svelte.mjs":{"file":"assets/svelte-MSaWC3Je.js","name":"svelte","src":"node_modules/@shikijs/langs/dist/svelte.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/postcss.mjs"]},"node_modules/@shikijs/langs/dist/swift.mjs":{"file":"assets/swift-BSxZ-RaX.js","name":"swift","src":"node_modules/@shikijs/langs/dist/swift.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/system-verilog.mjs":{"file":"assets/system-verilog-C7L56vO4.js","name":"system-verilog","src":"node_modules/@shikijs/langs/dist/system-verilog.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/systemd.mjs":{"file":"assets/systemd-CUnW07Te.js","name":"systemd","src":"node_modules/@shikijs/langs/dist/systemd.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/talonscript.mjs":{"file":"assets/talonscript-yNdrVPqT.js","name":"talonscript","src":"node_modules/@shikijs/langs/dist/talonscript.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/tasl.mjs":{"file":"assets/tasl-CQjiPCtT.js","name":"tasl","src":"node_modules/@shikijs/langs/dist/tasl.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/tcl.mjs":{"file":"assets/tcl-C5AohmeQ.js","name":"tcl","src":"node_modules/@shikijs/langs/dist/tcl.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/templ.mjs":{"file":"assets/templ-BIXQ7kZj.js","name":"templ","src":"node_modules/@shikijs/langs/dist/templ.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/go.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/terraform.mjs":{"file":"assets/terraform-eHy1PpK4.js","name":"terraform","src":"node_modules/@shikijs/langs/dist/terraform.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/tex.mjs":{"file":"assets/tex-rYs2v40G.js","name":"tex","src":"node_modules/@shikijs/langs/dist/tex.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/r.mjs"]},"node_modules/@shikijs/langs/dist/toml.mjs":{"file":"assets/toml-8jXJkYXT.js","name":"toml","src":"node_modules/@shikijs/langs/dist/toml.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/ts-tags.mjs":{"file":"assets/ts-tags-D3g7xtbE.js","name":"ts-tags","src":"node_modules/@shikijs/langs/dist/ts-tags.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/glsl.mjs","node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/c.mjs","node_modules/@shikijs/langs/dist/java.mjs"]},"node_modules/@shikijs/langs/dist/tsv.mjs":{"file":"assets/tsv-B_m7g4N7.js","name":"tsv","src":"node_modules/@shikijs/langs/dist/tsv.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/tsx.mjs":{"file":"assets/tsx-B6W0miNI.js","name":"tsx","src":"node_modules/@shikijs/langs/dist/tsx.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/turtle.mjs":{"file":"assets/turtle-BMR_PYu6.js","name":"turtle","src":"node_modules/@shikijs/langs/dist/turtle.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/twig.mjs":{"file":"assets/twig-C4FN8sXG.js","name":"twig","src":"node_modules/@shikijs/langs/dist/twig.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/scss.mjs","node_modules/@shikijs/langs/dist/php.mjs","node_modules/@shikijs/langs/dist/python.mjs","node_modules/@shikijs/langs/dist/ruby.mjs","node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/java.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/haml.mjs","node_modules/@shikijs/langs/dist/graphql.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/jsx.mjs","node_modules/@shikijs/langs/dist/tsx.mjs","node_modules/@shikijs/langs/dist/cpp.mjs","node_modules/@shikijs/langs/dist/regexp.mjs","node_modules/@shikijs/langs/dist/glsl.mjs","node_modules/@shikijs/langs/dist/c.mjs","node_modules/@shikijs/langs/dist/shellscript.mjs","node_modules/@shikijs/langs/dist/lua.mjs","node_modules/@shikijs/langs/dist/yaml.mjs"]},"node_modules/@shikijs/langs/dist/typescript.mjs":{"file":"assets/typescript-Dj6nwHGl.js","name":"typescript","src":"node_modules/@shikijs/langs/dist/typescript.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/typespec.mjs":{"file":"assets/typespec-BpWG_bgh.js","name":"typespec","src":"node_modules/@shikijs/langs/dist/typespec.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/typst.mjs":{"file":"assets/typst-CX-D33aM.js","name":"typst","src":"node_modules/@shikijs/langs/dist/typst.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/v.mjs":{"file":"assets/v-CAQ2eGtk.js","name":"v","src":"node_modules/@shikijs/langs/dist/v.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/vala.mjs":{"file":"assets/vala-BFOHcciG.js","name":"vala","src":"node_modules/@shikijs/langs/dist/vala.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/vb.mjs":{"file":"assets/vb-CdO5JTpU.js","name":"vb","src":"node_modules/@shikijs/langs/dist/vb.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/verilog.mjs":{"file":"assets/verilog-CJaU5se_.js","name":"verilog","src":"node_modules/@shikijs/langs/dist/verilog.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/vhdl.mjs":{"file":"assets/vhdl-DYoNaHQp.js","name":"vhdl","src":"node_modules/@shikijs/langs/dist/vhdl.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/viml.mjs":{"file":"assets/viml-m4uW47V2.js","name":"viml","src":"node_modules/@shikijs/langs/dist/viml.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/vue-html.mjs":{"file":"assets/vue-html-D8tnVLkD.js","name":"vue-html","src":"node_modules/@shikijs/langs/dist/vue-html.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/vue.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/html-derivative.mjs"]},"node_modules/@shikijs/langs/dist/vue.mjs":{"file":"assets/vue-BIMzvBW9.js","name":"vue","src":"node_modules/@shikijs/langs/dist/vue.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/html-derivative.mjs"]},"node_modules/@shikijs/langs/dist/vyper.mjs":{"file":"assets/vyper-BzEH12SI.js","name":"vyper","src":"node_modules/@shikijs/langs/dist/vyper.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/wasm.mjs":{"file":"assets/wasm-ISJeQQUc.js","name":"wasm","src":"node_modules/@shikijs/langs/dist/wasm.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/wenyan.mjs":{"file":"assets/wenyan-7A4Fjokl.js","name":"wenyan","src":"node_modules/@shikijs/langs/dist/wenyan.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/wgsl.mjs":{"file":"assets/wgsl-mD5xMClh.js","name":"wgsl","src":"node_modules/@shikijs/langs/dist/wgsl.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/wikitext.mjs":{"file":"assets/wikitext-DCE3LsBG.js","name":"wikitext","src":"node_modules/@shikijs/langs/dist/wikitext.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/wolfram.mjs":{"file":"assets/wolfram-C3FkfJm5.js","name":"wolfram","src":"node_modules/@shikijs/langs/dist/wolfram.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/xml.mjs":{"file":"assets/xml-e3z08dGr.js","name":"xml","src":"node_modules/@shikijs/langs/dist/xml.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/java.mjs"]},"node_modules/@shikijs/langs/dist/xsl.mjs":{"file":"assets/xsl-Dd0NUgwM.js","name":"xsl","src":"node_modules/@shikijs/langs/dist/xsl.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/java.mjs"]},"node_modules/@shikijs/langs/dist/yaml.mjs":{"file":"assets/yaml-CVw76BM1.js","name":"yaml","src":"node_modules/@shikijs/langs/dist/yaml.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/zenscript.mjs":{"file":"assets/zenscript-ulE5f4OK.js","name":"zenscript","src":"node_modules/@shikijs/langs/dist/zenscript.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/zig.mjs":{"file":"assets/zig-DFAwn6Qs.js","name":"zig","src":"node_modules/@shikijs/langs/dist/zig.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/andromeeda.mjs":{"file":"assets/andromeeda-C3khCPGq.js","name":"andromeeda","src":"node_modules/@shikijs/themes/dist/andromeeda.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/aurora-x.mjs":{"file":"assets/aurora-x-D-2ljcwZ.js","name":"aurora-x","src":"node_modules/@shikijs/themes/dist/aurora-x.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/ayu-dark.mjs":{"file":"assets/ayu-dark-Cv9koXgw.js","name":"ayu-dark","src":"node_modules/@shikijs/themes/dist/ayu-dark.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/catppuccin-frappe.mjs":{"file":"assets/catppuccin-frappe-CD_QflpE.js","name":"catppuccin-frappe","src":"node_modules/@shikijs/themes/dist/catppuccin-frappe.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/catppuccin-latte.mjs":{"file":"assets/catppuccin-latte-DRW-0cLl.js","name":"catppuccin-latte","src":"node_modules/@shikijs/themes/dist/catppuccin-latte.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/catppuccin-macchiato.mjs":{"file":"assets/catppuccin-macchiato-C-_shW-Y.js","name":"catppuccin-macchiato","src":"node_modules/@shikijs/themes/dist/catppuccin-macchiato.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/catppuccin-mocha.mjs":{"file":"assets/catppuccin-mocha-LGGdnPYs.js","name":"catppuccin-mocha","src":"node_modules/@shikijs/themes/dist/catppuccin-mocha.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/dark-plus.mjs":{"file":"assets/dark-plus-C3mMm8J8.js","name":"dark-plus","src":"node_modules/@shikijs/themes/dist/dark-plus.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/dracula-soft.mjs":{"file":"assets/dracula-soft-BXkSAIEj.js","name":"dracula-soft","src":"node_modules/@shikijs/themes/dist/dracula-soft.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/dracula.mjs":{"file":"assets/dracula-BzJJZx-M.js","name":"dracula","src":"node_modules/@shikijs/themes/dist/dracula.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/everforest-dark.mjs":{"file":"assets/everforest-dark-BgDCqdQA.js","name":"everforest-dark","src":"node_modules/@shikijs/themes/dist/everforest-dark.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/everforest-light.mjs":{"file":"assets/everforest-light-C8M2exoo.js","name":"everforest-light","src":"node_modules/@shikijs/themes/dist/everforest-light.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/github-dark-default.mjs":{"file":"assets/github-dark-default-Cuk6v7N8.js","name":"github-dark-default","src":"node_modules/@shikijs/themes/dist/github-dark-default.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/github-dark-dimmed.mjs":{"file":"assets/github-dark-dimmed-DH5Ifo-i.js","name":"github-dark-dimmed","src":"node_modules/@shikijs/themes/dist/github-dark-dimmed.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/github-dark-high-contrast.mjs":{"file":"assets/github-dark-high-contrast-E3gJ1_iC.js","name":"github-dark-high-contrast","src":"node_modules/@shikijs/themes/dist/github-dark-high-contrast.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/github-dark.mjs":{"file":"assets/github-dark-DHJKELXO.js","name":"github-dark","src":"node_modules/@shikijs/themes/dist/github-dark.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/github-light-default.mjs":{"file":"assets/github-light-default-D7oLnXFd.js","name":"github-light-default","src":"node_modules/@shikijs/themes/dist/github-light-default.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/github-light-high-contrast.mjs":{"file":"assets/github-light-high-contrast-BfjtVDDH.js","name":"github-light-high-contrast","src":"node_modules/@shikijs/themes/dist/github-light-high-contrast.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/github-light.mjs":{"file":"assets/github-light-DAi9KRSo.js","name":"github-light","src":"node_modules/@shikijs/themes/dist/github-light.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/houston.mjs":{"file":"assets/houston-DnULxvSX.js","name":"houston","src":"node_modules/@shikijs/themes/dist/houston.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/kanagawa-dragon.mjs":{"file":"assets/kanagawa-dragon-CkXjmgJE.js","name":"kanagawa-dragon","src":"node_modules/@shikijs/themes/dist/kanagawa-dragon.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/kanagawa-lotus.mjs":{"file":"assets/kanagawa-lotus-CfQXZHmo.js","name":"kanagawa-lotus","src":"node_modules/@shikijs/themes/dist/kanagawa-lotus.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/kanagawa-wave.mjs":{"file":"assets/kanagawa-wave-DWedfzmr.js","name":"kanagawa-wave","src":"node_modules/@shikijs/themes/dist/kanagawa-wave.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/laserwave.mjs":{"file":"assets/laserwave-DUszq2jm.js","name":"laserwave","src":"node_modules/@shikijs/themes/dist/laserwave.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/light-plus.mjs":{"file":"assets/light-plus-B7mTdjB0.js","name":"light-plus","src":"node_modules/@shikijs/themes/dist/light-plus.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/material-theme-darker.mjs":{"file":"assets/material-theme-darker-BfHTSMKl.js","name":"material-theme-darker","src":"node_modules/@shikijs/themes/dist/material-theme-darker.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/material-theme-lighter.mjs":{"file":"assets/material-theme-lighter-B0m2ddpp.js","name":"material-theme-lighter","src":"node_modules/@shikijs/themes/dist/material-theme-lighter.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/material-theme-ocean.mjs":{"file":"assets/material-theme-ocean-CyktbL80.js","name":"material-theme-ocean","src":"node_modules/@shikijs/themes/dist/material-theme-ocean.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/material-theme-palenight.mjs":{"file":"assets/material-theme-palenight-Csfq5Kiy.js","name":"material-theme-palenight","src":"node_modules/@shikijs/themes/dist/material-theme-palenight.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/material-theme.mjs":{"file":"assets/material-theme-D5KoaKCx.js","name":"material-theme","src":"node_modules/@shikijs/themes/dist/material-theme.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/min-dark.mjs":{"file":"assets/min-dark-CafNBF8u.js","name":"min-dark","src":"node_modules/@shikijs/themes/dist/min-dark.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/min-light.mjs":{"file":"assets/min-light-CTRr51gU.js","name":"min-light","src":"node_modules/@shikijs/themes/dist/min-light.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/monokai.mjs":{"file":"assets/monokai-D4h5O-jR.js","name":"monokai","src":"node_modules/@shikijs/themes/dist/monokai.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/night-owl.mjs":{"file":"assets/night-owl-C39BiMTA.js","name":"night-owl","src":"node_modules/@shikijs/themes/dist/night-owl.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/nord.mjs":{"file":"assets/nord-Ddv68eIx.js","name":"nord","src":"node_modules/@shikijs/themes/dist/nord.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/one-dark-pro.mjs":{"file":"assets/one-dark-pro-DVMEJ2y_.js","name":"one-dark-pro","src":"node_modules/@shikijs/themes/dist/one-dark-pro.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/one-light.mjs":{"file":"assets/one-light-PoHY5YXO.js","name":"one-light","src":"node_modules/@shikijs/themes/dist/one-light.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/plastic.mjs":{"file":"assets/plastic-3e1v2bzS.js","name":"plastic","src":"node_modules/@shikijs/themes/dist/plastic.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/poimandres.mjs":{"file":"assets/poimandres-CS3Unz2-.js","name":"poimandres","src":"node_modules/@shikijs/themes/dist/poimandres.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/red.mjs":{"file":"assets/red-bN70gL4F.js","name":"red","src":"node_modules/@shikijs/themes/dist/red.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/rose-pine-dawn.mjs":{"file":"assets/rose-pine-dawn-Ds-gbosJ.js","name":"rose-pine-dawn","src":"node_modules/@shikijs/themes/dist/rose-pine-dawn.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/rose-pine-moon.mjs":{"file":"assets/rose-pine-moon-CjDtw9vr.js","name":"rose-pine-moon","src":"node_modules/@shikijs/themes/dist/rose-pine-moon.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/rose-pine.mjs":{"file":"assets/rose-pine-CmCqftbK.js","name":"rose-pine","src":"node_modules/@shikijs/themes/dist/rose-pine.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/slack-dark.mjs":{"file":"assets/slack-dark-BthQWCQV.js","name":"slack-dark","src":"node_modules/@shikijs/themes/dist/slack-dark.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/slack-ochin.mjs":{"file":"assets/slack-ochin-DqwNpetd.js","name":"slack-ochin","src":"node_modules/@shikijs/themes/dist/slack-ochin.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/snazzy-light.mjs":{"file":"assets/snazzy-light-Bw305WKR.js","name":"snazzy-light","src":"node_modules/@shikijs/themes/dist/snazzy-light.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/solarized-dark.mjs":{"file":"assets/solarized-dark-DXbdFlpD.js","name":"solarized-dark","src":"node_modules/@shikijs/themes/dist/solarized-dark.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/solarized-light.mjs":{"file":"assets/solarized-light-L9t79GZl.js","name":"solarized-light","src":"node_modules/@shikijs/themes/dist/solarized-light.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/synthwave-84.mjs":{"file":"assets/synthwave-84-CbfX1IO0.js","name":"synthwave-84","src":"node_modules/@shikijs/themes/dist/synthwave-84.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/tokyo-night.mjs":{"file":"assets/tokyo-night-hegEt444.js","name":"tokyo-night","src":"node_modules/@shikijs/themes/dist/tokyo-night.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/vesper.mjs":{"file":"assets/vesper-BEBZ7ncR.js","name":"vesper","src":"node_modules/@shikijs/themes/dist/vesper.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/vitesse-black.mjs":{"file":"assets/vitesse-black-Bkuqu6BP.js","name":"vitesse-black","src":"node_modules/@shikijs/themes/dist/vitesse-black.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/vitesse-dark.mjs":{"file":"assets/vitesse-dark-D0r3Knsf.js","name":"vitesse-dark","src":"node_modules/@shikijs/themes/dist/vitesse-dark.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/vitesse-light.mjs":{"file":"assets/vitesse-light-CVO1_9PV.js","name":"vitesse-light","src":"node_modules/@shikijs/themes/dist/vitesse-light.mjs","isDynamicEntry":true},"node_modules/shiki/dist/index.mjs":{"file":"assets/index-BZow0J3Q.js","name":"index","src":"node_modules/shiki/dist/index.mjs","isDynamicEntry":true,"imports":["_client-LSARlrfQ.js"],"dynamicImports":["node_modules/@shikijs/langs/dist/abap.mjs","node_modules/@shikijs/langs/dist/actionscript-3.mjs","node_modules/@shikijs/langs/dist/ada.mjs","_angular-html-0A1EF1PY.js","node_modules/@shikijs/langs/dist/angular-ts.mjs","node_modules/@shikijs/langs/dist/apache.mjs","node_modules/@shikijs/langs/dist/apex.mjs","node_modules/@shikijs/langs/dist/apl.mjs","node_modules/@shikijs/langs/dist/applescript.mjs","node_modules/@shikijs/langs/dist/ara.mjs","node_modules/@shikijs/langs/dist/asciidoc.mjs","node_modules/@shikijs/langs/dist/asm.mjs","node_modules/@shikijs/langs/dist/astro.mjs","node_modules/@shikijs/langs/dist/awk.mjs","node_modules/@shikijs/langs/dist/ballerina.mjs","node_modules/@shikijs/langs/dist/bat.mjs","node_modules/@shikijs/langs/dist/beancount.mjs","node_modules/@shikijs/langs/dist/berry.mjs","node_modules/@shikijs/langs/dist/bibtex.mjs","node_modules/@shikijs/langs/dist/bicep.mjs","node_modules/@shikijs/langs/dist/blade.mjs","node_modules/@shikijs/langs/dist/bsl.mjs","node_modules/@shikijs/langs/dist/c.mjs","node_modules/@shikijs/langs/dist/cadence.mjs","node_modules/@shikijs/langs/dist/cairo.mjs","node_modules/@shikijs/langs/dist/clarity.mjs","node_modules/@shikijs/langs/dist/clojure.mjs","node_modules/@shikijs/langs/dist/cmake.mjs","node_modules/@shikijs/langs/dist/cobol.mjs","node_modules/@shikijs/langs/dist/codeowners.mjs","node_modules/@shikijs/langs/dist/codeql.mjs","node_modules/@shikijs/langs/dist/coffee.mjs","node_modules/@shikijs/langs/dist/common-lisp.mjs","node_modules/@shikijs/langs/dist/coq.mjs","node_modules/@shikijs/langs/dist/cpp.mjs","node_modules/@shikijs/langs/dist/crystal.mjs","node_modules/@shikijs/langs/dist/csharp.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/csv.mjs","node_modules/@shikijs/langs/dist/cue.mjs","node_modules/@shikijs/langs/dist/cypher.mjs","node_modules/@shikijs/langs/dist/d.mjs","node_modules/@shikijs/langs/dist/dart.mjs","node_modules/@shikijs/langs/dist/dax.mjs","node_modules/@shikijs/langs/dist/desktop.mjs","node_modules/@shikijs/langs/dist/diff.mjs","node_modules/@shikijs/langs/dist/docker.mjs","node_modules/@shikijs/langs/dist/dotenv.mjs","node_modules/@shikijs/langs/dist/dream-maker.mjs","node_modules/@shikijs/langs/dist/edge.mjs","node_modules/@shikijs/langs/dist/elixir.mjs","node_modules/@shikijs/langs/dist/elm.mjs","node_modules/@shikijs/langs/dist/emacs-lisp.mjs","node_modules/@shikijs/langs/dist/erb.mjs","node_modules/@shikijs/langs/dist/erlang.mjs","node_modules/@shikijs/langs/dist/fennel.mjs","node_modules/@shikijs/langs/dist/fish.mjs","node_modules/@shikijs/langs/dist/fluent.mjs","node_modules/@shikijs/langs/dist/fortran-fixed-form.mjs","node_modules/@shikijs/langs/dist/fortran-free-form.mjs","node_modules/@shikijs/langs/dist/fsharp.mjs","node_modules/@shikijs/langs/dist/gdresource.mjs","node_modules/@shikijs/langs/dist/gdscript.mjs","node_modules/@shikijs/langs/dist/gdshader.mjs","node_modules/@shikijs/langs/dist/genie.mjs","node_modules/@shikijs/langs/dist/gherkin.mjs","node_modules/@shikijs/langs/dist/git-commit.mjs","node_modules/@shikijs/langs/dist/git-rebase.mjs","node_modules/@shikijs/langs/dist/gleam.mjs","node_modules/@shikijs/langs/dist/glimmer-js.mjs","node_modules/@shikijs/langs/dist/glimmer-ts.mjs","node_modules/@shikijs/langs/dist/glsl.mjs","node_modules/@shikijs/langs/dist/gnuplot.mjs","node_modules/@shikijs/langs/dist/go.mjs","node_modules/@shikijs/langs/dist/graphql.mjs","node_modules/@shikijs/langs/dist/groovy.mjs","node_modules/@shikijs/langs/dist/hack.mjs","node_modules/@shikijs/langs/dist/haml.mjs","node_modules/@shikijs/langs/dist/handlebars.mjs","node_modules/@shikijs/langs/dist/haskell.mjs","node_modules/@shikijs/langs/dist/haxe.mjs","node_modules/@shikijs/langs/dist/hcl.mjs","node_modules/@shikijs/langs/dist/hjson.mjs","node_modules/@shikijs/langs/dist/hlsl.mjs","node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/html-derivative.mjs","node_modules/@shikijs/langs/dist/http.mjs","node_modules/@shikijs/langs/dist/hxml.mjs","node_modules/@shikijs/langs/dist/hy.mjs","node_modules/@shikijs/langs/dist/imba.mjs","node_modules/@shikijs/langs/dist/ini.mjs","node_modules/@shikijs/langs/dist/java.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/jinja.mjs","node_modules/@shikijs/langs/dist/jison.mjs","node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/json5.mjs","node_modules/@shikijs/langs/dist/jsonc.mjs","node_modules/@shikijs/langs/dist/jsonl.mjs","node_modules/@shikijs/langs/dist/jsonnet.mjs","node_modules/@shikijs/langs/dist/jssm.mjs","node_modules/@shikijs/langs/dist/jsx.mjs","node_modules/@shikijs/langs/dist/julia.mjs","node_modules/@shikijs/langs/dist/kotlin.mjs","node_modules/@shikijs/langs/dist/kusto.mjs","node_modules/@shikijs/langs/dist/latex.mjs","node_modules/@shikijs/langs/dist/lean.mjs","node_modules/@shikijs/langs/dist/less.mjs","node_modules/@shikijs/langs/dist/liquid.mjs","node_modules/@shikijs/langs/dist/log.mjs","node_modules/@shikijs/langs/dist/logo.mjs","node_modules/@shikijs/langs/dist/lua.mjs","node_modules/@shikijs/langs/dist/luau.mjs","node_modules/@shikijs/langs/dist/make.mjs","node_modules/@shikijs/langs/dist/markdown.mjs","node_modules/@shikijs/langs/dist/marko.mjs","node_modules/@shikijs/langs/dist/matlab.mjs","node_modules/@shikijs/langs/dist/mdc.mjs","node_modules/@shikijs/langs/dist/mdx.mjs","node_modules/@shikijs/langs/dist/mermaid.mjs","node_modules/@shikijs/langs/dist/mipsasm.mjs","node_modules/@shikijs/langs/dist/mojo.mjs","node_modules/@shikijs/langs/dist/move.mjs","node_modules/@shikijs/langs/dist/narrat.mjs","node_modules/@shikijs/langs/dist/nextflow.mjs","node_modules/@shikijs/langs/dist/nginx.mjs","node_modules/@shikijs/langs/dist/nim.mjs","node_modules/@shikijs/langs/dist/nix.mjs","node_modules/@shikijs/langs/dist/nushell.mjs","node_modules/@shikijs/langs/dist/objective-c.mjs","node_modules/@shikijs/langs/dist/objective-cpp.mjs","node_modules/@shikijs/langs/dist/ocaml.mjs","node_modules/@shikijs/langs/dist/pascal.mjs","node_modules/@shikijs/langs/dist/perl.mjs","node_modules/@shikijs/langs/dist/php.mjs","node_modules/@shikijs/langs/dist/plsql.mjs","node_modules/@shikijs/langs/dist/po.mjs","node_modules/@shikijs/langs/dist/polar.mjs","node_modules/@shikijs/langs/dist/postcss.mjs","node_modules/@shikijs/langs/dist/powerquery.mjs","node_modules/@shikijs/langs/dist/powershell.mjs","node_modules/@shikijs/langs/dist/prisma.mjs","node_modules/@shikijs/langs/dist/prolog.mjs","node_modules/@shikijs/langs/dist/proto.mjs","node_modules/@shikijs/langs/dist/pug.mjs","node_modules/@shikijs/langs/dist/puppet.mjs","node_modules/@shikijs/langs/dist/purescript.mjs","node_modules/@shikijs/langs/dist/python.mjs","node_modules/@shikijs/langs/dist/qml.mjs","node_modules/@shikijs/langs/dist/qmldir.mjs","node_modules/@shikijs/langs/dist/qss.mjs","node_modules/@shikijs/langs/dist/r.mjs","node_modules/@shikijs/langs/dist/racket.mjs","node_modules/@shikijs/langs/dist/raku.mjs","node_modules/@shikijs/langs/dist/razor.mjs","node_modules/@shikijs/langs/dist/reg.mjs","node_modules/@shikijs/langs/dist/regexp.mjs","node_modules/@shikijs/langs/dist/rel.mjs","node_modules/@shikijs/langs/dist/riscv.mjs","node_modules/@shikijs/langs/dist/rst.mjs","node_modules/@shikijs/langs/dist/ruby.mjs","node_modules/@shikijs/langs/dist/rust.mjs","node_modules/@shikijs/langs/dist/sas.mjs","node_modules/@shikijs/langs/dist/sass.mjs","node_modules/@shikijs/langs/dist/scala.mjs","node_modules/@shikijs/langs/dist/scheme.mjs","node_modules/@shikijs/langs/dist/scss.mjs","node_modules/@shikijs/langs/dist/sdbl.mjs","node_modules/@shikijs/langs/dist/shaderlab.mjs","node_modules/@shikijs/langs/dist/shellscript.mjs","node_modules/@shikijs/langs/dist/shellsession.mjs","node_modules/@shikijs/langs/dist/smalltalk.mjs","node_modules/@shikijs/langs/dist/solidity.mjs","node_modules/@shikijs/langs/dist/soy.mjs","node_modules/@shikijs/langs/dist/sparql.mjs","node_modules/@shikijs/langs/dist/splunk.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/ssh-config.mjs","node_modules/@shikijs/langs/dist/stata.mjs","node_modules/@shikijs/langs/dist/stylus.mjs","node_modules/@shikijs/langs/dist/svelte.mjs","node_modules/@shikijs/langs/dist/swift.mjs","node_modules/@shikijs/langs/dist/system-verilog.mjs","node_modules/@shikijs/langs/dist/systemd.mjs","node_modules/@shikijs/langs/dist/talonscript.mjs","node_modules/@shikijs/langs/dist/tasl.mjs","node_modules/@shikijs/langs/dist/tcl.mjs","node_modules/@shikijs/langs/dist/templ.mjs","node_modules/@shikijs/langs/dist/terraform.mjs","node_modules/@shikijs/langs/dist/tex.mjs","node_modules/@shikijs/langs/dist/toml.mjs","node_modules/@shikijs/langs/dist/ts-tags.mjs","node_modules/@shikijs/langs/dist/tsv.mjs","node_modules/@shikijs/langs/dist/tsx.mjs","node_modules/@shikijs/langs/dist/turtle.mjs","node_modules/@shikijs/langs/dist/twig.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/typespec.mjs","node_modules/@shikijs/langs/dist/typst.mjs","node_modules/@shikijs/langs/dist/v.mjs","node_modules/@shikijs/langs/dist/vala.mjs","node_modules/@shikijs/langs/dist/vb.mjs","node_modules/@shikijs/langs/dist/verilog.mjs","node_modules/@shikijs/langs/dist/vhdl.mjs","node_modules/@shikijs/langs/dist/viml.mjs","node_modules/@shikijs/langs/dist/vue.mjs","node_modules/@shikijs/langs/dist/vue-html.mjs","node_modules/@shikijs/langs/dist/vyper.mjs","node_modules/@shikijs/langs/dist/wasm.mjs","node_modules/@shikijs/langs/dist/wenyan.mjs","node_modules/@shikijs/langs/dist/wgsl.mjs","node_modules/@shikijs/langs/dist/wikitext.mjs","node_modules/@shikijs/langs/dist/wolfram.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/xsl.mjs","node_modules/@shikijs/langs/dist/yaml.mjs","node_modules/@shikijs/langs/dist/zenscript.mjs","node_modules/@shikijs/langs/dist/zig.mjs","node_modules/@shikijs/themes/dist/andromeeda.mjs","node_modules/@shikijs/themes/dist/aurora-x.mjs","node_modules/@shikijs/themes/dist/ayu-dark.mjs","node_modules/@shikijs/themes/dist/catppuccin-frappe.mjs","node_modules/@shikijs/themes/dist/catppuccin-latte.mjs","node_modules/@shikijs/themes/dist/catppuccin-macchiato.mjs","node_modules/@shikijs/themes/dist/catppuccin-mocha.mjs","node_modules/@shikijs/themes/dist/dark-plus.mjs","node_modules/@shikijs/themes/dist/dracula.mjs","node_modules/@shikijs/themes/dist/dracula-soft.mjs","node_modules/@shikijs/themes/dist/everforest-dark.mjs","node_modules/@shikijs/themes/dist/everforest-light.mjs","node_modules/@shikijs/themes/dist/github-dark.mjs","node_modules/@shikijs/themes/dist/github-dark-default.mjs","node_modules/@shikijs/themes/dist/github-dark-dimmed.mjs","node_modules/@shikijs/themes/dist/github-dark-high-contrast.mjs","node_modules/@shikijs/themes/dist/github-light.mjs","node_modules/@shikijs/themes/dist/github-light-default.mjs","node_modules/@shikijs/themes/dist/github-light-high-contrast.mjs","node_modules/@shikijs/themes/dist/houston.mjs","node_modules/@shikijs/themes/dist/kanagawa-dragon.mjs","node_modules/@shikijs/themes/dist/kanagawa-lotus.mjs","node_modules/@shikijs/themes/dist/kanagawa-wave.mjs","node_modules/@shikijs/themes/dist/laserwave.mjs","node_modules/@shikijs/themes/dist/light-plus.mjs","node_modules/@shikijs/themes/dist/material-theme.mjs","node_modules/@shikijs/themes/dist/material-theme-darker.mjs","node_modules/@shikijs/themes/dist/material-theme-lighter.mjs","node_modules/@shikijs/themes/dist/material-theme-ocean.mjs","node_modules/@shikijs/themes/dist/material-theme-palenight.mjs","node_modules/@shikijs/themes/dist/min-dark.mjs","node_modules/@shikijs/themes/dist/min-light.mjs","node_modules/@shikijs/themes/dist/monokai.mjs","node_modules/@shikijs/themes/dist/night-owl.mjs","node_modules/@shikijs/themes/dist/nord.mjs","node_modules/@shikijs/themes/dist/one-dark-pro.mjs","node_modules/@shikijs/themes/dist/one-light.mjs","node_modules/@shikijs/themes/dist/plastic.mjs","node_modules/@shikijs/themes/dist/poimandres.mjs","node_modules/@shikijs/themes/dist/red.mjs","node_modules/@shikijs/themes/dist/rose-pine.mjs","node_modules/@shikijs/themes/dist/rose-pine-dawn.mjs","node_modules/@shikijs/themes/dist/rose-pine-moon.mjs","node_modules/@shikijs/themes/dist/slack-dark.mjs","node_modules/@shikijs/themes/dist/slack-ochin.mjs","node_modules/@shikijs/themes/dist/snazzy-light.mjs","node_modules/@shikijs/themes/dist/solarized-dark.mjs","node_modules/@shikijs/themes/dist/solarized-light.mjs","node_modules/@shikijs/themes/dist/synthwave-84.mjs","node_modules/@shikijs/themes/dist/tokyo-night.mjs","node_modules/@shikijs/themes/dist/vesper.mjs","node_modules/@shikijs/themes/dist/vitesse-black.mjs","node_modules/@shikijs/themes/dist/vitesse-dark.mjs","node_modules/@shikijs/themes/dist/vitesse-light.mjs","node_modules/shiki/dist/wasm.mjs"]},"node_modules/shiki/dist/wasm.mjs":{"file":"assets/wasm-CG6Dc4jp.js","name":"wasm","src":"node_modules/shiki/dist/wasm.mjs","isDynamicEntry":true},"virtual:$vinxi/handler/client":{"file":"assets/client-Dh8qKnJx.js","name":"client","src":"virtual:$vinxi/handler/client","isEntry":true,"imports":["_client-LSARlrfQ.js"]}},"ssr":{"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/app/app.css":{"file":"assets/app-Cs9mLtrU.css","src":"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/app/app.css"},"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/app/index.css":{"file":"assets/index-CB_DIBKG.css","src":"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/app/index.css"},"_collapsible-BJOti_Mx.js":{"file":"assets/collapsible-BJOti_Mx.js","name":"collapsible","imports":["_ssr-6lLpyHMM.js"]},"_ssr-6lLpyHMM.js":{"file":"assets/ssr-6lLpyHMM.js","name":"ssr","dynamicImports":["app/routes/verify-account.tsx?tsr-split=component","app/routes/index.tsx?tsr-split=component","app/routes/accept-invitation/$invitationId.$invitationEmail.tsx?tsr-split=component","app/routes/_authed/_layout/team-chat/index.tsx?tsr-split=component","app/routes/_authed/_layout/organizations/index.tsx?tsr-split=component","app/routes/_authed/_layout/organization-settings/index.tsx?tsr-split=component","app/routes/_authed/_layout/members/index.tsx?tsr-split=component","app/routes/_authed/_layout/teamspace/$teamspaceId.tsx?tsr-split=component","app/routes/_authed/_layout/project/$projectId.tsx?tsr-split=component"],"assets":["assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp","assets/app-Cs9mLtrU.css","assets/index-CB_DIBKG.css"]},"app/assets/img/IntelliOptima-Black-Text-Logo.webp":{"file":"assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp","src":"app/assets/img/IntelliOptima-Black-Text-Logo.webp"},"app/routes/_authed/_layout/members/index.tsx?tsr-split=component":{"file":"assets/index-_etULO8x.js","name":"index","src":"app/routes/_authed/_layout/members/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-6lLpyHMM.js"]},"app/routes/_authed/_layout/organization-settings/index.tsx?tsr-split=component":{"file":"assets/index-Cax3CenD.js","name":"index","src":"app/routes/_authed/_layout/organization-settings/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-6lLpyHMM.js"]},"app/routes/_authed/_layout/organizations/index.tsx?tsr-split=component":{"file":"assets/index-DGwTvHhm.js","name":"index","src":"app/routes/_authed/_layout/organizations/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-6lLpyHMM.js"]},"app/routes/_authed/_layout/project/$projectId.tsx?tsr-split=component":{"file":"assets/_projectId-YjFnYS-D.js","name":"_projectId","src":"app/routes/_authed/_layout/project/$projectId.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-6lLpyHMM.js","_collapsible-BJOti_Mx.js"]},"app/routes/_authed/_layout/team-chat/index.tsx?tsr-split=component":{"file":"assets/index-eU_NrPHc.js","name":"index","src":"app/routes/_authed/_layout/team-chat/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-6lLpyHMM.js"]},"app/routes/_authed/_layout/teamspace/$teamspaceId.tsx?tsr-split=component":{"file":"assets/_teamspaceId-ie4J8k8Q.js","name":"_teamspaceId","src":"app/routes/_authed/_layout/teamspace/$teamspaceId.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-6lLpyHMM.js","_collapsible-BJOti_Mx.js"]},"app/routes/accept-invitation/$invitationId.$invitationEmail.tsx?tsr-split=component":{"file":"assets/_invitationId._invitationEmail-DCIETi3U.js","name":"_invitationId._invitationEmail","src":"app/routes/accept-invitation/$invitationId.$invitationEmail.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-6lLpyHMM.js"]},"app/routes/index.tsx?tsr-split=component":{"file":"assets/index-DdG0v_8c.js","name":"index","src":"app/routes/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-6lLpyHMM.js"]},"app/routes/verify-account.tsx?tsr-split=component":{"file":"assets/verify-account-CPVu4Wht.js","name":"verify-account","src":"app/routes/verify-account.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-6lLpyHMM.js"]},"virtual:$vinxi/handler/ssr":{"file":"ssr.js","name":"ssr","src":"virtual:$vinxi/handler/ssr","isEntry":true,"imports":["_ssr-6lLpyHMM.js"]}},"server":{"_client-DLHNdpZv.js":{"file":"assets/client-DLHNdpZv.js","name":"client"},"_getRequestClient-NbhzxsPk.js":{"file":"assets/getRequestClient-NbhzxsPk.js","name":"getRequestClient","imports":["_client-DLHNdpZv.js"]},"_index-BPPryd0z.js":{"file":"assets/index-BPPryd0z.js","name":"index"},"app/assets/img/IntelliOptima-Black-Text-Logo.webp":{"file":"assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp","src":"app/assets/img/IntelliOptima-Black-Text-Logo.webp"},"app/routes/__root.tsx?tsr-directive-use-server=":{"file":"assets/__root-CFHpsuhp.js","name":"__root","src":"app/routes/__root.tsx?tsr-directive-use-server=","isDynamicEntry":true,"imports":["_client-DLHNdpZv.js"]},"app/routes/_authed.tsx?tsr-directive-use-server=":{"file":"assets/_authed-uwNsAFki.js","name":"_authed","src":"app/routes/_authed.tsx?tsr-directive-use-server=","isDynamicEntry":true,"imports":["_getRequestClient-NbhzxsPk.js","_client-DLHNdpZv.js"]},"app/routes/_authed/_layout.tsx?tsr-directive-use-server=":{"file":"assets/_layout-BgX5DWOv.js","name":"_layout","src":"app/routes/_authed/_layout.tsx?tsr-directive-use-server=","isDynamicEntry":true,"imports":["_index-BPPryd0z.js","_getRequestClient-NbhzxsPk.js","_client-DLHNdpZv.js"],"assets":["assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp"]},"app/routes/_authed/_layout/chat/$chatroomId.tsx?tsr-directive-use-server=":{"file":"assets/_chatroomId-CyAyocr2.js","name":"_chatroomId","src":"app/routes/_authed/_layout/chat/$chatroomId.tsx?tsr-directive-use-server=","isDynamicEntry":true,"imports":["_index-BPPryd0z.js","_getRequestClient-NbhzxsPk.js","_client-DLHNdpZv.js"]},"virtual:$vinxi/handler/server":{"file":"server.js","name":"server","src":"virtual:$vinxi/handler/server","isEntry":true,"dynamicImports":["app/routes/__root.tsx?tsr-directive-use-server=","app/routes/_authed.tsx?tsr-directive-use-server=","app/routes/_authed/_layout.tsx?tsr-directive-use-server=","app/routes/_authed/_layout.tsx?tsr-directive-use-server=","app/routes/_authed/_layout/chat/$chatroomId.tsx?tsr-directive-use-server="]}}};

				const routeManifest = {};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin$2(app) {
          const prodApp = createProdApp(appConfig);
          globalThis.app = prodApp;
        }

function plugin$1(app) {
	globalThis.$handle = (event) => app.h3App.handler(event);
}

/**
 * Traverses the module graph and collects assets for a given chunk
 *
 * @param {any} manifest Client manifest
 * @param {string} id Chunk id
 * @param {Map<string, string[]>} assetMap Cache of assets
 * @param {string[]} stack Stack of chunk ids to prevent circular dependencies
 * @returns Array of asset URLs
 */
function findAssetsInViteManifest(manifest, id, assetMap = new Map(), stack = []) {
	if (stack.includes(id)) {
		return [];
	}

	const cached = assetMap.get(id);
	if (cached) {
		return cached;
	}
	const chunk = manifest[id];
	if (!chunk) {
		return [];
	}

	const assets = [
		...(chunk.assets?.filter(Boolean) || []),
		...(chunk.css?.filter(Boolean) || [])
	];
	if (chunk.imports) {
		stack.push(id);
		for (let i = 0, l = chunk.imports.length; i < l; i++) {
			assets.push(...findAssetsInViteManifest(manifest, chunk.imports[i], assetMap, stack));
		}
		stack.pop();
	}
	assets.push(chunk.file);
	const all = Array.from(new Set(assets));
	assetMap.set(id, all);

	return all;
}

/** @typedef {import("../app.js").App & { config: { buildManifest: { [key:string]: any } }}} ProdApp */

function createHtmlTagsForAssets(router, app, assets) {
	return assets
		.filter(
			(asset) =>
				asset.endsWith(".css") ||
				asset.endsWith(".js") ||
				asset.endsWith(".mjs"),
		)
		.map((asset) => ({
			tag: "link",
			attrs: {
				href: joinURL(app.config.server.baseURL ?? "/", router.base, asset),
				key: join$1(app.config.server.baseURL ?? "", router.base, asset),
				...(asset.endsWith(".css")
					? { rel: "stylesheet", fetchPriority: "high" }
					: { rel: "modulepreload" }),
			},
		}));
}

/**
 *
 * @param {ProdApp} app
 * @returns
 */
function createProdManifest(app) {
	const manifest = new Proxy(
		{},
		{
			get(target, routerName) {
				invariant(typeof routerName === "string", "Bundler name expected");
				const router = app.getRouter(routerName);
				const bundlerManifest = app.config.buildManifest[routerName];

				invariant(
					router.type !== "static",
					"manifest not available for static router",
				);
				return {
					handler: router.handler,
					async assets() {
						/** @type {{ [key: string]: string[] }} */
						let assets = {};
						assets[router.handler] = await this.inputs[router.handler].assets();
						for (const route of (await router.internals.routes?.getRoutes()) ??
							[]) {
							assets[route.filePath] = await this.inputs[
								route.filePath
							].assets();
						}
						return assets;
					},
					async routes() {
						return (await router.internals.routes?.getRoutes()) ?? [];
					},
					async json() {
						/** @type {{ [key: string]: { output: string; assets: string[]} }} */
						let json = {};
						for (const input of Object.keys(this.inputs)) {
							json[input] = {
								output: this.inputs[input].output.path,
								assets: await this.inputs[input].assets(),
							};
						}
						return json;
					},
					chunks: new Proxy(
						{},
						{
							get(target, chunk) {
								invariant(typeof chunk === "string", "Chunk expected");
								const chunkPath = join$1(
									router.outDir,
									router.base,
									chunk + ".mjs",
								);
								return {
									import() {
										if (globalThis.$$chunks[chunk + ".mjs"]) {
											return globalThis.$$chunks[chunk + ".mjs"];
										}
										return import(
											/* @vite-ignore */ pathToFileURL(chunkPath).href
										);
									},
									output: {
										path: chunkPath,
									},
								};
							},
						},
					),
					inputs: new Proxy(
						{},
						{
							ownKeys(target) {
								const keys = Object.keys(bundlerManifest)
									.filter((id) => bundlerManifest[id].isEntry)
									.map((id) => id);
								return keys;
							},
							getOwnPropertyDescriptor(k) {
								return {
									enumerable: true,
									configurable: true,
								};
							},
							get(target, input) {
								invariant(typeof input === "string", "Input expected");
								if (router.target === "server") {
									const id =
										input === router.handler
											? virtualId(handlerModule(router))
											: input;
									return {
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: join$1(
												router.outDir,
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								} else if (router.target === "browser") {
									const id =
										input === router.handler && !input.endsWith(".html")
											? virtualId(handlerModule(router))
											: input;
									return {
										import() {
											return import(
												/* @vite-ignore */ joinURL(
													app.config.server.baseURL ?? "",
													router.base,
													bundlerManifest[id].file,
												)
											);
										},
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: joinURL(
												app.config.server.baseURL ?? "",
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								}
							},
						},
					),
				};
			},
		},
	);

	return manifest;
}

function plugin() {
	globalThis.MANIFEST =
		createProdManifest(globalThis.app)
			;
}

const chunks = {};
			 



			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin$2,
plugin$1,
plugin,
app
];

const assets = {
  "/assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp": {
    "type": "image/webp",
    "etag": "\"1802-X2GCuxLWqrjWp/YyoDeMj/NaYaY\"",
    "mtime": "2025-04-09T08:37:58.617Z",
    "size": 6146,
    "path": "../public/assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp"
  },
  "/assets/app-Cs9mLtrU.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1db-O5faAPbFpX3oaxe+0Uaz5KZkRXY\"",
    "mtime": "2025-04-09T08:37:58.617Z",
    "size": 475,
    "path": "../public/assets/app-Cs9mLtrU.css"
  },
  "/assets/index-CB_DIBKG.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f299-hNpHXvF2gI0wNYN9+sGYdFG5Tok\"",
    "mtime": "2025-04-09T08:37:58.617Z",
    "size": 127641,
    "path": "../public/assets/index-CB_DIBKG.css"
  },
  "/_build/.vite/manifest.json": {
    "type": "application/json",
    "etag": "\"16d44-+GsE89DF+XYmapF8c84Sx0Az1IA\"",
    "mtime": "2025-04-09T08:37:58.591Z",
    "size": 93508,
    "path": "../public/_build/.vite/manifest.json"
  },
  "/_server/assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp": {
    "type": "image/webp",
    "etag": "\"1802-X2GCuxLWqrjWp/YyoDeMj/NaYaY\"",
    "mtime": "2025-04-09T08:37:58.618Z",
    "size": 6146,
    "path": "../public/_server/assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp"
  },
  "/_build/assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp": {
    "type": "image/webp",
    "etag": "\"1802-X2GCuxLWqrjWp/YyoDeMj/NaYaY\"",
    "mtime": "2025-04-09T08:37:58.592Z",
    "size": 6146,
    "path": "../public/_build/assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp"
  },
  "/_build/assets/_invitationId._invitationEmail-D50Rj71-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"eac-g/YyQE7xsR/htUb2IUbSY5Qrchk\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 3756,
    "path": "../public/_build/assets/_invitationId._invitationEmail-D50Rj71-.js"
  },
  "/_build/assets/_projectId-BsaTQPVK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d703-xSQtI9A6iDS+bt55FdQwLGEbjSU\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 55043,
    "path": "../public/_build/assets/_projectId-BsaTQPVK.js"
  },
  "/_build/assets/_teamspaceId-oRrr0_9M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"40f8-WxZ4xrEAsBY6Q4b9GedTQUA/VG8\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 16632,
    "path": "../public/_build/assets/_teamspaceId-oRrr0_9M.js"
  },
  "/_build/assets/abap-DsBKuouk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4984-WjmeY5tJutWdsMMiLereS1vmQyo\"",
    "mtime": "2025-04-09T08:37:58.593Z",
    "size": 18820,
    "path": "../public/_build/assets/abap-DsBKuouk.js"
  },
  "/_build/assets/actionscript-3-B_7mSSNY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"377f-i/qj0UU+KqBDkAtv487cOQaqlpY\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 14207,
    "path": "../public/_build/assets/actionscript-3-B_7mSSNY.js"
  },
  "/_build/assets/ada-727ZlQH0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bd92-eqknrr8A2eGD7JvLwaNuB8kS5Wg\"",
    "mtime": "2025-04-09T08:37:58.596Z",
    "size": 48530,
    "path": "../public/_build/assets/ada-727ZlQH0.js"
  },
  "/_build/assets/andromeeda-C3khCPGq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"229d-3GfF78JdzfO32fqTvNakp2eNACA\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 8861,
    "path": "../public/_build/assets/andromeeda-C3khCPGq.js"
  },
  "/_build/assets/angular-html-0A1EF1PY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"44fd-0IotZb8ozG0Z2VHDYvx3eWjM35o\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 17661,
    "path": "../public/_build/assets/angular-html-0A1EF1PY.js"
  },
  "/_build/assets/angular-ts-BQ_2sjHF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"33b44-TDfCScmTdw0LmZP8fn0zNfibdgs\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 211780,
    "path": "../public/_build/assets/angular-ts-BQ_2sjHF.js"
  },
  "/_build/assets/apache-Dn00JSTd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"339b-eDgYgmZylp6cuLTa7fn/CGMPvKo\"",
    "mtime": "2025-04-09T08:37:58.597Z",
    "size": 13211,
    "path": "../public/_build/assets/apache-Dn00JSTd.js"
  },
  "/_build/assets/apex-COJ4H7py.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b6dc-g40D9ZEhd2BB6LeWdxtoagXYba4\"",
    "mtime": "2025-04-09T08:37:58.595Z",
    "size": 46812,
    "path": "../public/_build/assets/apex-COJ4H7py.js"
  },
  "/_build/assets/apl-DkRiwRYE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5ea8-wccLa2VNYyxTALKqWT67h451t8w\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 24232,
    "path": "../public/_build/assets/apl-DkRiwRYE.js"
  },
  "/_build/assets/app-Cs9mLtrU.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1db-O5faAPbFpX3oaxe+0Uaz5KZkRXY\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 475,
    "path": "../public/_build/assets/app-Cs9mLtrU.css"
  },
  "/_build/assets/applescript-DSrUkfvF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7503-6TCGSBUjJrLs0UOpROu2tvn9iLk\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 29955,
    "path": "../public/_build/assets/applescript-DSrUkfvF.js"
  },
  "/_build/assets/ara-CQ5q8R2W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1936-1OHn4IqZBMA9qRfRDC3s+efsTpw\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 6454,
    "path": "../public/_build/assets/ara-CQ5q8R2W.js"
  },
  "/_build/assets/asciidoc-B-_AxZdj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"15cdd-MNDvB8fzDCc1ciwChdE4ycBNU7c\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 89309,
    "path": "../public/_build/assets/asciidoc-B-_AxZdj.js"
  },
  "/_build/assets/asm-Dhn9LcZ4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9f94-ZrmUTMh5auzjdvSdIcxydxwUq9c\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 40852,
    "path": "../public/_build/assets/asm-Dhn9LcZ4.js"
  },
  "/_build/assets/astro-6Nq8D0ds.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5e07-gaQSkVYBK48dk4SXmr7TauTbB48\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 24071,
    "path": "../public/_build/assets/astro-6Nq8D0ds.js"
  },
  "/_build/assets/aurora-x-D-2ljcwZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"355b-ltA2RbrvMtKWMV4KgoBMozLYWVE\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 13659,
    "path": "../public/_build/assets/aurora-x-D-2ljcwZ.js"
  },
  "/_build/assets/awk-eg146-Ew.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1576-3jpvkXs1HSwtufcIuLhwdgfc8Wk\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 5494,
    "path": "../public/_build/assets/awk-eg146-Ew.js"
  },
  "/_build/assets/ayu-dark-Cv9koXgw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3a65-Q1j891KpAph3EWu90fhfuUDvR08\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 14949,
    "path": "../public/_build/assets/ayu-dark-Cv9koXgw.js"
  },
  "/_build/assets/ballerina-Du268qiB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f0bd-VbkpUDwod17aq/uVSpqoyY3WDT8\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 61629,
    "path": "../public/_build/assets/ballerina-Du268qiB.js"
  },
  "/_build/assets/bat-fje9CFhw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"32c0-T7XDvbbJHsWWK+PXfXK8ZFO9nI0\"",
    "mtime": "2025-04-09T08:37:58.594Z",
    "size": 12992,
    "path": "../public/_build/assets/bat-fje9CFhw.js"
  },
  "/_build/assets/beancount-jY9aw0fr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2864-72GW6jf5uxkWXQk2MSD5hoMKMH0\"",
    "mtime": "2025-04-09T08:37:58.595Z",
    "size": 10340,
    "path": "../public/_build/assets/beancount-jY9aw0fr.js"
  },
  "/_build/assets/berry-3xVqZejG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"990-Hlt1V2zfwpGD9qtoOw2FZ+/Qtiw\"",
    "mtime": "2025-04-09T08:37:58.595Z",
    "size": 2448,
    "path": "../public/_build/assets/berry-3xVqZejG.js"
  },
  "/_build/assets/bibtex-xW4inM5L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13d3-+jLmvRMc01/9WPYkOy2r3CiPCCw\"",
    "mtime": "2025-04-09T08:37:58.595Z",
    "size": 5075,
    "path": "../public/_build/assets/bibtex-xW4inM5L.js"
  },
  "/_build/assets/bicep-DHo0CJ0O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1166-Xkb6x0uI62SJyjRdm2CfMLf2U+8\"",
    "mtime": "2025-04-09T08:37:58.595Z",
    "size": 4454,
    "path": "../public/_build/assets/bicep-DHo0CJ0O.js"
  },
  "/_build/assets/blade-BPCFRWwN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a5e0-f6HyTeeu6T6OdDBoxuHeOS4TwxU\"",
    "mtime": "2025-04-09T08:37:58.595Z",
    "size": 108000,
    "path": "../public/_build/assets/blade-BPCFRWwN.js"
  },
  "/_build/assets/bsl-0rw82Q3C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"85ae-xlb78OFMsB9Xzh1nOh/FYl8Ff18\"",
    "mtime": "2025-04-09T08:37:58.595Z",
    "size": 34222,
    "path": "../public/_build/assets/bsl-0rw82Q3C.js"
  },
  "/_build/assets/c-C3t2pwGQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"120f0-X0q7J+fF1xguFqzweVaybx3UU88\"",
    "mtime": "2025-04-09T08:37:58.595Z",
    "size": 73968,
    "path": "../public/_build/assets/c-C3t2pwGQ.js"
  },
  "/_build/assets/cadence-Olw6fvns.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2981-YGEjp1eChLO0Sa0jvbm47xLwIHI\"",
    "mtime": "2025-04-09T08:37:58.595Z",
    "size": 10625,
    "path": "../public/_build/assets/cadence-Olw6fvns.js"
  },
  "/_build/assets/cairo-DzT9zD9X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b8a-wxJ8M/Cx6c5KbWq5JXYfIA0m1kI\"",
    "mtime": "2025-04-09T08:37:58.595Z",
    "size": 2954,
    "path": "../public/_build/assets/cairo-DzT9zD9X.js"
  },
  "/_build/assets/catppuccin-frappe-CD_QflpE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b230-Ye6how9tyXomcJDGSeovtQzWAi8\"",
    "mtime": "2025-04-09T08:37:58.595Z",
    "size": 45616,
    "path": "../public/_build/assets/catppuccin-frappe-CD_QflpE.js"
  },
  "/_build/assets/catppuccin-latte-DRW-0cLl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b22e-xy+/TiCHaZs8UqctXSO5FKTjVQI\"",
    "mtime": "2025-04-09T08:37:58.595Z",
    "size": 45614,
    "path": "../public/_build/assets/catppuccin-latte-DRW-0cLl.js"
  },
  "/_build/assets/catppuccin-macchiato-C-_shW-Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b235-IOuqdH140zmembMIabC2omrC0gk\"",
    "mtime": "2025-04-09T08:37:58.595Z",
    "size": 45621,
    "path": "../public/_build/assets/catppuccin-macchiato-C-_shW-Y.js"
  },
  "/_build/assets/catppuccin-mocha-LGGdnPYs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b22d-9HJY4AmCww6E1KE0oACg3a5+tEg\"",
    "mtime": "2025-04-09T08:37:58.596Z",
    "size": 45613,
    "path": "../public/_build/assets/catppuccin-mocha-LGGdnPYs.js"
  },
  "/_build/assets/clarity-CeaQPKDP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"380f-Ffd3X6c3qtWZ4+YWRbfJRCQCDak\"",
    "mtime": "2025-04-09T08:37:58.595Z",
    "size": 14351,
    "path": "../public/_build/assets/clarity-CeaQPKDP.js"
  },
  "/_build/assets/client-Dh8qKnJx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"40-lI6LXVGxyQ+mLfrTOsIcZvqya5w\"",
    "mtime": "2025-04-09T08:37:58.596Z",
    "size": 64,
    "path": "../public/_build/assets/client-Dh8qKnJx.js"
  },
  "/_build/assets/client-LSARlrfQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1204a2-lAYWa44cHQ3wVybr+D6RzIgDx3U\"",
    "mtime": "2025-04-09T08:37:58.596Z",
    "size": 1180834,
    "path": "../public/_build/assets/client-LSARlrfQ.js"
  },
  "/_build/assets/clojure-DxSadP1t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ba5-XvQPAq6oZVbBOChSwmFF834qI3s\"",
    "mtime": "2025-04-09T08:37:58.595Z",
    "size": 7077,
    "path": "../public/_build/assets/clojure-DxSadP1t.js"
  },
  "/_build/assets/cmake-DbcauaCG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"26a3-OF0ti53MjKOZGhHnxPZrTJNwpgM\"",
    "mtime": "2025-04-09T08:37:58.597Z",
    "size": 9891,
    "path": "../public/_build/assets/cmake-DbcauaCG.js"
  },
  "/_build/assets/cobol-PXo7EpZU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9e04-/2kZKXd/R7+pMc7Bnt3YlfB/cSA\"",
    "mtime": "2025-04-09T08:37:58.595Z",
    "size": 40452,
    "path": "../public/_build/assets/cobol-PXo7EpZU.js"
  },
  "/_build/assets/codeowners-Bp6g37R7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"223-LScnQcrupWjGOHlgVTaKyfzcpy0\"",
    "mtime": "2025-04-09T08:37:58.596Z",
    "size": 547,
    "path": "../public/_build/assets/codeowners-Bp6g37R7.js"
  },
  "/_build/assets/codeql-DBtIRQT_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"833a-lKLx2n2d0MGWlN8n6/Qpw05utog\"",
    "mtime": "2025-04-09T08:37:58.595Z",
    "size": 33594,
    "path": "../public/_build/assets/codeql-DBtIRQT_.js"
  },
  "/_build/assets/coffee-dyiR41kL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6c65-kCgc2O0kzsdTY7F4f/4YzIQ/zNM\"",
    "mtime": "2025-04-09T08:37:58.596Z",
    "size": 27749,
    "path": "../public/_build/assets/coffee-dyiR41kL.js"
  },
  "/_build/assets/collapsible-DJ8QDLqz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"31c7-qUnciW22R+uNX4EuNl955E8fj8Y\"",
    "mtime": "2025-04-09T08:37:58.596Z",
    "size": 12743,
    "path": "../public/_build/assets/collapsible-DJ8QDLqz.js"
  },
  "/_build/assets/common-lisp-C7gG9l05.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6f50-UrhCrL/akz/yjJZGei8g9majuXQ\"",
    "mtime": "2025-04-09T08:37:58.596Z",
    "size": 28496,
    "path": "../public/_build/assets/common-lisp-C7gG9l05.js"
  },
  "/_build/assets/coq-BHyGnp0Z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"152d-seFU9RVHpsX8P2T4XNqsODlpIfw\"",
    "mtime": "2025-04-09T08:37:58.596Z",
    "size": 5421,
    "path": "../public/_build/assets/coq-BHyGnp0Z.js"
  },
  "/_build/assets/cpp-DXc6Zn63.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"aa4ac-zNPC5owTHB7d1rYsjywymNADdIg\"",
    "mtime": "2025-04-09T08:37:58.596Z",
    "size": 697516,
    "path": "../public/_build/assets/cpp-DXc6Zn63.js"
  },
  "/_build/assets/crystal-BANhDVLs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7459-A9LSLWTvifAzJw37gxDz5xVVHw8\"",
    "mtime": "2025-04-09T08:37:58.596Z",
    "size": 29785,
    "path": "../public/_build/assets/crystal-BANhDVLs.js"
  },
  "/_build/assets/csharp-C9e09xm7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"15491-YGHWLf1hlmHcf+rVQqa1WMIwxjs\"",
    "mtime": "2025-04-09T08:37:58.596Z",
    "size": 87185,
    "path": "../public/_build/assets/csharp-C9e09xm7.js"
  },
  "/_build/assets/css-BPhBrDlE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d227-7oRpJucwQoOcqa/utG1Tc2TMc4s\"",
    "mtime": "2025-04-09T08:37:58.596Z",
    "size": 53799,
    "path": "../public/_build/assets/css-BPhBrDlE.js"
  },
  "/_build/assets/csv-B0qRVHPH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4c7-bCo2e81Ha7jwjmZrwn7sAlSRkZ0\"",
    "mtime": "2025-04-09T08:37:58.596Z",
    "size": 1223,
    "path": "../public/_build/assets/csv-B0qRVHPH.js"
  },
  "/_build/assets/cue-DtFQj3wx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"43c2-XgzrvrTJDqceNsCnQUW+EBjq+y4\"",
    "mtime": "2025-04-09T08:37:58.596Z",
    "size": 17346,
    "path": "../public/_build/assets/cue-DtFQj3wx.js"
  },
  "/_build/assets/cypher-Dp08fnRF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1795-Q/ivHt9cBrixZ8LyWvRIatDRVGM\"",
    "mtime": "2025-04-09T08:37:58.597Z",
    "size": 6037,
    "path": "../public/_build/assets/cypher-Dp08fnRF.js"
  },
  "/_build/assets/d-BoXegm-a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a805-uJ70b2/MAZJJv+j22+eZeodXKVE\"",
    "mtime": "2025-04-09T08:37:58.597Z",
    "size": 43013,
    "path": "../public/_build/assets/d-BoXegm-a.js"
  },
  "/_build/assets/dark-plus-C3mMm8J8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2389-BXT9xKjaiqBfp3OCAewo89+9Wpg\"",
    "mtime": "2025-04-09T08:37:58.597Z",
    "size": 9097,
    "path": "../public/_build/assets/dark-plus-C3mMm8J8.js"
  },
  "/_build/assets/dart-B9wLZaAG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ed2-TCk/Iq+iuge27FFP0qmL4dCR4xg\"",
    "mtime": "2025-04-09T08:37:58.596Z",
    "size": 7890,
    "path": "../public/_build/assets/dart-B9wLZaAG.js"
  },
  "/_build/assets/dax-D_iqerNF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1572-Kdb37O38EppCD9yZlcCGlzDurII\"",
    "mtime": "2025-04-09T08:37:58.597Z",
    "size": 5490,
    "path": "../public/_build/assets/dax-D_iqerNF.js"
  },
  "/_build/assets/desktop-DEIpsLCJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7eb-re77T+9BfnvaYlymlHGmq0XHpwM\"",
    "mtime": "2025-04-09T08:37:58.597Z",
    "size": 2027,
    "path": "../public/_build/assets/desktop-DEIpsLCJ.js"
  },
  "/_build/assets/diff-DERFIACx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a12-DqUlfWM3YgNzJKZU3xX7k57+Deg\"",
    "mtime": "2025-04-09T08:37:58.597Z",
    "size": 2578,
    "path": "../public/_build/assets/diff-DERFIACx.js"
  },
  "/_build/assets/docker-BcOcwvcX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6cd-68IbxZPtS8UtKOhcJpPOx3Qxas4\"",
    "mtime": "2025-04-09T08:37:58.597Z",
    "size": 1741,
    "path": "../public/_build/assets/docker-BcOcwvcX.js"
  },
  "/_build/assets/dotenv-Ddn3lr0y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5a4-0JEDMHoV24FzcAmsxuOpSYIAAUc\"",
    "mtime": "2025-04-09T08:37:58.597Z",
    "size": 1444,
    "path": "../public/_build/assets/dotenv-Ddn3lr0y.js"
  },
  "/_build/assets/dracula-BzJJZx-M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"524a-+n2NQF4pUrirtbVLSya0Zll9gp8\"",
    "mtime": "2025-04-09T08:37:58.598Z",
    "size": 21066,
    "path": "../public/_build/assets/dracula-BzJJZx-M.js"
  },
  "/_build/assets/dracula-soft-BXkSAIEj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5254-Axn1fQr9TF+GkmVdLvo6H+JJ8B8\"",
    "mtime": "2025-04-09T08:37:58.598Z",
    "size": 21076,
    "path": "../public/_build/assets/dracula-soft-BXkSAIEj.js"
  },
  "/_build/assets/dream-maker-2V0Ap-uE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2942-vmrQshSSN1my18bn7Wk5GyeP4ak\"",
    "mtime": "2025-04-09T08:37:58.598Z",
    "size": 10562,
    "path": "../public/_build/assets/dream-maker-2V0Ap-uE.js"
  },
  "/_build/assets/edge-DtcDOGsI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"937-nsPIpmQh8UDTeWAfaVoWap8PNEU\"",
    "mtime": "2025-04-09T08:37:58.597Z",
    "size": 2359,
    "path": "../public/_build/assets/edge-DtcDOGsI.js"
  },
  "/_build/assets/elixir-BigP6_ue.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"40f8-NmtKoo+89zKLxmQ+jCHRrJtlcK0\"",
    "mtime": "2025-04-09T08:37:58.598Z",
    "size": 16632,
    "path": "../public/_build/assets/elixir-BigP6_ue.js"
  },
  "/_build/assets/elm-0zW53zC1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2bb5-ZvjVT5BZtCUikmLP8awKuQpY4Xg\"",
    "mtime": "2025-04-09T08:37:58.597Z",
    "size": 11189,
    "path": "../public/_build/assets/elm-0zW53zC1.js"
  },
  "/_build/assets/emacs-lisp-BX77sIaO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c4742-yOsnIvIUkWn2bG9UJ70auexRguo\"",
    "mtime": "2025-04-09T08:37:58.598Z",
    "size": 804674,
    "path": "../public/_build/assets/emacs-lisp-BX77sIaO.js"
  },
  "/_build/assets/erb-HE-c_T40.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a2f-jrimQsjoTWQMlAdMVOSwtvGaj+A\"",
    "mtime": "2025-04-09T08:37:58.597Z",
    "size": 2607,
    "path": "../public/_build/assets/erb-HE-c_T40.js"
  },
  "/_build/assets/erlang-WlOKAcJ7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8a97-/bZEPnIAwFGcx2eG8vCZGNDwdSo\"",
    "mtime": "2025-04-09T08:37:58.598Z",
    "size": 35479,
    "path": "../public/_build/assets/erlang-WlOKAcJ7.js"
  },
  "/_build/assets/everforest-dark-BgDCqdQA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d1f1-Hu9sPs6I5PgTPGWd3WR7nOwmRy8\"",
    "mtime": "2025-04-09T08:37:58.598Z",
    "size": 53745,
    "path": "../public/_build/assets/everforest-dark-BgDCqdQA.js"
  },
  "/_build/assets/everforest-light-C8M2exoo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d1f4-DRqIliTj8jrkpY6QITy6jlt6T6w\"",
    "mtime": "2025-04-09T08:37:58.598Z",
    "size": 53748,
    "path": "../public/_build/assets/everforest-light-C8M2exoo.js"
  },
  "/_build/assets/fennel-bCA53EVm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12d7-gmCxpZILK9DxQPkJn6V8v2sOv1k\"",
    "mtime": "2025-04-09T08:37:58.599Z",
    "size": 4823,
    "path": "../public/_build/assets/fennel-bCA53EVm.js"
  },
  "/_build/assets/fish-BLmoVg8f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10a4-UpEyOfkQif5QySfBZ7Csh3FmT7E\"",
    "mtime": "2025-04-09T08:37:58.598Z",
    "size": 4260,
    "path": "../public/_build/assets/fish-BLmoVg8f.js"
  },
  "/_build/assets/fluent-Dayu4EKP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e26-vfdTPLy0K9wK7hGwyJk8k8AS2FM\"",
    "mtime": "2025-04-09T08:37:58.599Z",
    "size": 3622,
    "path": "../public/_build/assets/fluent-Dayu4EKP.js"
  },
  "/_build/assets/fortran-fixed-form-CMvLjigt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"451-qsiRF4wtdekgrSf+9P9ahl6DZQ0\"",
    "mtime": "2025-04-09T08:37:58.598Z",
    "size": 1105,
    "path": "../public/_build/assets/fortran-fixed-form-CMvLjigt.js"
  },
  "/_build/assets/fortran-free-form-DjP-tqRL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"157f4-j/0Af0d/UEZe7jWqvnoyCtvnz0U\"",
    "mtime": "2025-04-09T08:37:58.599Z",
    "size": 88052,
    "path": "../public/_build/assets/fortran-free-form-DjP-tqRL.js"
  },
  "/_build/assets/fsharp-BPKZXYjh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"646a-WUeNLFg/F1vsouTkMSpF+yp2/Ps\"",
    "mtime": "2025-04-09T08:37:58.598Z",
    "size": 25706,
    "path": "../public/_build/assets/fsharp-BPKZXYjh.js"
  },
  "/_build/assets/gdresource-N9nUj_Sl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"153b-yFQDgv2rb4qK4hemP0Z+uRwpRJ4\"",
    "mtime": "2025-04-09T08:37:58.599Z",
    "size": 5435,
    "path": "../public/_build/assets/gdresource-N9nUj_Sl.js"
  },
  "/_build/assets/gdscript-CCbUEAxs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4857-p69C27cdmBTrnBI7J4wR/e+qMKI\"",
    "mtime": "2025-04-09T08:37:58.599Z",
    "size": 18519,
    "path": "../public/_build/assets/gdscript-CCbUEAxs.js"
  },
  "/_build/assets/gdshader-SKMF96pI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18e6-kAXeqRkqTaTU+J0FprUWg2rGepE\"",
    "mtime": "2025-04-09T08:37:58.599Z",
    "size": 6374,
    "path": "../public/_build/assets/gdshader-SKMF96pI.js"
  },
  "/_build/assets/genie-ajMbGru0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d32-hNJ8nslsVzQ7NFcBKsR8yuBZXjA\"",
    "mtime": "2025-04-09T08:37:58.599Z",
    "size": 3378,
    "path": "../public/_build/assets/genie-ajMbGru0.js"
  },
  "/_build/assets/gherkin--30QC5Em.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"30ff-QB21Px5f9HaxTs766Fosy7DyORA\"",
    "mtime": "2025-04-09T08:37:58.601Z",
    "size": 12543,
    "path": "../public/_build/assets/gherkin--30QC5Em.js"
  },
  "/_build/assets/git-commit-BhPX3RR1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4da-IvXa8uXcdO14SV9E5aNp5c+QbTU\"",
    "mtime": "2025-04-09T08:37:58.600Z",
    "size": 1242,
    "path": "../public/_build/assets/git-commit-BhPX3RR1.js"
  },
  "/_build/assets/git-rebase-uGYh9tYw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3d4-g0Ti6P+HnmGx7pfIohej/YMj490\"",
    "mtime": "2025-04-09T08:37:58.600Z",
    "size": 980,
    "path": "../public/_build/assets/git-rebase-uGYh9tYw.js"
  },
  "/_build/assets/github-dark-DHJKELXO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2c8d-G52k5HF2RR+jOGOolyZJDXOaYjU\"",
    "mtime": "2025-04-09T08:37:58.599Z",
    "size": 11405,
    "path": "../public/_build/assets/github-dark-DHJKELXO.js"
  },
  "/_build/assets/github-dark-default-Cuk6v7N8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3863-ch+lyFS9QkuOdtlQcqnXQ5iOqcc\"",
    "mtime": "2025-04-09T08:37:58.599Z",
    "size": 14435,
    "path": "../public/_build/assets/github-dark-default-Cuk6v7N8.js"
  },
  "/_build/assets/github-dark-dimmed-DH5Ifo-i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3861-ZsBIvSUlsHzh+aocazJKD4XzMVc\"",
    "mtime": "2025-04-09T08:37:58.599Z",
    "size": 14433,
    "path": "../public/_build/assets/github-dark-dimmed-DH5Ifo-i.js"
  },
  "/_build/assets/github-dark-high-contrast-E3gJ1_iC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3903-b1i07XzPpd3BHF9/vi4M4mGWen8\"",
    "mtime": "2025-04-09T08:37:58.599Z",
    "size": 14595,
    "path": "../public/_build/assets/github-dark-high-contrast-E3gJ1_iC.js"
  },
  "/_build/assets/github-light-DAi9KRSo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2bb0-kCaePAc0SkqzEXT/m+0Gi8SfIkE\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 11184,
    "path": "../public/_build/assets/github-light-DAi9KRSo.js"
  },
  "/_build/assets/github-light-default-D7oLnXFd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"374c-u5ndhk1KsUHitkpMJ6KIbAiO+N0\"",
    "mtime": "2025-04-09T08:37:58.599Z",
    "size": 14156,
    "path": "../public/_build/assets/github-light-default-D7oLnXFd.js"
  },
  "/_build/assets/github-light-high-contrast-BfjtVDDH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"37c3-xDmtEk31qK1Bh5UReLYFJAKxJ5I\"",
    "mtime": "2025-04-09T08:37:58.600Z",
    "size": 14275,
    "path": "../public/_build/assets/github-light-high-contrast-BfjtVDDH.js"
  },
  "/_build/assets/gleam-B430Bg39.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a7e-s7+gJ3g+jU5Jc706I2cjYhKrPvo\"",
    "mtime": "2025-04-09T08:37:58.599Z",
    "size": 2686,
    "path": "../public/_build/assets/gleam-B430Bg39.js"
  },
  "/_build/assets/glimmer-js-CxrE9ua0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"504b-T/HPxSq5u885IW0FNI1ar7DxcB8\"",
    "mtime": "2025-04-09T08:37:58.599Z",
    "size": 20555,
    "path": "../public/_build/assets/glimmer-js-CxrE9ua0.js"
  },
  "/_build/assets/glimmer-ts-CkqoYwsv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"504b-yX8nx5mPxxotBliumC7KepZhJAA\"",
    "mtime": "2025-04-09T08:37:58.599Z",
    "size": 20555,
    "path": "../public/_build/assets/glimmer-ts-CkqoYwsv.js"
  },
  "/_build/assets/glsl-DBO2IWDn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f66-jo1NK4afiezUT879rWLqby3OPSM\"",
    "mtime": "2025-04-09T08:37:58.599Z",
    "size": 3942,
    "path": "../public/_build/assets/glsl-DBO2IWDn.js"
  },
  "/_build/assets/gnuplot-CM8KxXT1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3a3e-eg75gM9fNZE2ZlazuDhbvvtr6SA\"",
    "mtime": "2025-04-09T08:37:58.600Z",
    "size": 14910,
    "path": "../public/_build/assets/gnuplot-CM8KxXT1.js"
  },
  "/_build/assets/go-Dtn5OO9k.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bdfa-Egvh0Z9iURAjHV9rniv6m938eLw\"",
    "mtime": "2025-04-09T08:37:58.602Z",
    "size": 48634,
    "path": "../public/_build/assets/go-Dtn5OO9k.js"
  },
  "/_build/assets/graphql-DCjtUNCr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"465d-0YEaCMVVdqN60JsOfUNuozH5olw\"",
    "mtime": "2025-04-09T08:37:58.600Z",
    "size": 18013,
    "path": "../public/_build/assets/graphql-DCjtUNCr.js"
  },
  "/_build/assets/groovy-Blx2zv3z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4b9f-m7lMX7snf2Y6OvFRwIq4mswzOlY\"",
    "mtime": "2025-04-09T08:37:58.600Z",
    "size": 19359,
    "path": "../public/_build/assets/groovy-Blx2zv3z.js"
  },
  "/_build/assets/hack-oRCDNDMe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13def-+TO4Y7VybziREW7tx8ElG+X02LA\"",
    "mtime": "2025-04-09T08:37:58.601Z",
    "size": 81391,
    "path": "../public/_build/assets/hack-oRCDNDMe.js"
  },
  "/_build/assets/haml-DeHWu7Vy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20e2-11oQFmop3FwC3G6lAVTPY76+v2M\"",
    "mtime": "2025-04-09T08:37:58.600Z",
    "size": 8418,
    "path": "../public/_build/assets/haml-DeHWu7Vy.js"
  },
  "/_build/assets/handlebars-DQyaA0Rc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2fea-h6cSfAVZViW3ty9Kj+RCaG4KWHA\"",
    "mtime": "2025-04-09T08:37:58.600Z",
    "size": 12266,
    "path": "../public/_build/assets/handlebars-DQyaA0Rc.js"
  },
  "/_build/assets/haskell-CWgbWrzg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a59e-R1X6WcCCDlIcSMEXd/eORS1pbtY\"",
    "mtime": "2025-04-09T08:37:58.601Z",
    "size": 42398,
    "path": "../public/_build/assets/haskell-CWgbWrzg.js"
  },
  "/_build/assets/haxe-C5wWYbrZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"89df-Et79G3vB16QgsUONfD0LxirtsG4\"",
    "mtime": "2025-04-09T08:37:58.601Z",
    "size": 35295,
    "path": "../public/_build/assets/haxe-C5wWYbrZ.js"
  },
  "/_build/assets/hcl-CucaAMjX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"280a-Rz1HUKonELsBMnC2FOTsRQFq3Lw\"",
    "mtime": "2025-04-09T08:37:58.602Z",
    "size": 10250,
    "path": "../public/_build/assets/hcl-CucaAMjX.js"
  },
  "/_build/assets/hjson-T-Tgc4AT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3028-DA4AZoV8kS7daPMok97GQY/nYnU\"",
    "mtime": "2025-04-09T08:37:58.601Z",
    "size": 12328,
    "path": "../public/_build/assets/hjson-T-Tgc4AT.js"
  },
  "/_build/assets/hlsl-ifBTmRxC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1db5-VNcKgIsBqFnv0ab9XifijpH2SrM\"",
    "mtime": "2025-04-09T08:37:58.601Z",
    "size": 7605,
    "path": "../public/_build/assets/hlsl-ifBTmRxC.js"
  },
  "/_build/assets/houston-DnULxvSX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8a5e-lpZgdjKbVFHBYkOMCMZXYihb+Y0\"",
    "mtime": "2025-04-09T08:37:58.601Z",
    "size": 35422,
    "path": "../public/_build/assets/houston-DnULxvSX.js"
  },
  "/_build/assets/html-Dy5dLvcr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"edb0-TYya2uEwcjKKKuN+k943/hPfKJI\"",
    "mtime": "2025-04-09T08:37:58.601Z",
    "size": 60848,
    "path": "../public/_build/assets/html-Dy5dLvcr.js"
  },
  "/_build/assets/html-derivative-CAzaCcJ8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3ca-6mjQN0B4YLOjlXpn+pMYz0gYUFI\"",
    "mtime": "2025-04-09T08:37:58.601Z",
    "size": 970,
    "path": "../public/_build/assets/html-derivative-CAzaCcJ8.js"
  },
  "/_build/assets/http-D7RGPc5S.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"122e-fDlrCmze3bf/lMeXpBIKBRHIVrc\"",
    "mtime": "2025-04-09T08:37:58.601Z",
    "size": 4654,
    "path": "../public/_build/assets/http-D7RGPc5S.js"
  },
  "/_build/assets/hxml-TIA70rKU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"726-2BS/9yqZnN3RRusmSUHoYomogxM\"",
    "mtime": "2025-04-09T08:37:58.601Z",
    "size": 1830,
    "path": "../public/_build/assets/hxml-TIA70rKU.js"
  },
  "/_build/assets/hy-BMj5Y0dO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b0c-rsarcEHiZnYMrAmKQkQ/i/2Kin4\"",
    "mtime": "2025-04-09T08:37:58.602Z",
    "size": 2828,
    "path": "../public/_build/assets/hy-BMj5Y0dO.js"
  },
  "/_build/assets/imba-bv_oIlVt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d0d6-N851WYuYlyVd7qv8HD23cuwAeBA\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 53462,
    "path": "../public/_build/assets/imba-bv_oIlVt.js"
  },
  "/_build/assets/index-B26PC7u_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"747a-Ffaxnsl8AyEiyCB6WYy1vVkuwVc\"",
    "mtime": "2025-04-09T08:37:58.601Z",
    "size": 29818,
    "path": "../public/_build/assets/index-B26PC7u_.js"
  },
  "/_build/assets/index-BD9t5Hr3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f79-yasVbfApUELs1pnGVWo2C8ZunkI\"",
    "mtime": "2025-04-09T08:37:58.602Z",
    "size": 3961,
    "path": "../public/_build/assets/index-BD9t5Hr3.js"
  },
  "/_build/assets/index-BZow0J3Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e520-2zKBStrfQFJ1NQpaP7aiplZ7zyI\"",
    "mtime": "2025-04-09T08:37:58.601Z",
    "size": 124192,
    "path": "../public/_build/assets/index-BZow0J3Q.js"
  },
  "/_build/assets/index-Bylorr8-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9dd-ARzyd1NFhfAPp1hSuGb87saDrQA\"",
    "mtime": "2025-04-09T08:37:58.601Z",
    "size": 2525,
    "path": "../public/_build/assets/index-Bylorr8-.js"
  },
  "/_build/assets/index-CB_DIBKG.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f299-hNpHXvF2gI0wNYN9+sGYdFG5Tok\"",
    "mtime": "2025-04-09T08:37:58.602Z",
    "size": 127641,
    "path": "../public/_build/assets/index-CB_DIBKG.css"
  },
  "/_build/assets/index-DjSMm6pi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"37cb-NYo4SCo4+NvXIKrfyt9/W+qMUeA\"",
    "mtime": "2025-04-09T08:37:58.602Z",
    "size": 14283,
    "path": "../public/_build/assets/index-DjSMm6pi.js"
  },
  "/_build/assets/index-iZ0qqT8L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2c62-mW1lD1bnrBpU46EdwyVuk7JTgrM\"",
    "mtime": "2025-04-09T08:37:58.602Z",
    "size": 11362,
    "path": "../public/_build/assets/index-iZ0qqT8L.js"
  },
  "/_build/assets/ini-BjABl1g7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5f9-jBh85NrAGgqEDiS4a/QPtcdsy1M\"",
    "mtime": "2025-04-09T08:37:58.602Z",
    "size": 1529,
    "path": "../public/_build/assets/ini-BjABl1g7.js"
  },
  "/_build/assets/java-xI-RfyKK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6b5d-OMKyZe2D973PUPV/aZKhPsT/zYQ\"",
    "mtime": "2025-04-09T08:37:58.602Z",
    "size": 27485,
    "path": "../public/_build/assets/java-xI-RfyKK.js"
  },
  "/_build/assets/javascript-ySlJ1b_l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3058f-oEJdxvDuqoCyHeAjBlw0Zu0Ayag\"",
    "mtime": "2025-04-09T08:37:58.602Z",
    "size": 198031,
    "path": "../public/_build/assets/javascript-ySlJ1b_l.js"
  },
  "/_build/assets/jinja-V0eE2z2R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"165c-EWgCN9pJ9lVGIjRn0T+JLo/fGB4\"",
    "mtime": "2025-04-09T08:37:58.605Z",
    "size": 5724,
    "path": "../public/_build/assets/jinja-V0eE2z2R.js"
  },
  "/_build/assets/jison-BqZprYcd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2600-ptDv9/2gPXoEfFsBFqw3rm9ep10\"",
    "mtime": "2025-04-09T08:37:58.602Z",
    "size": 9728,
    "path": "../public/_build/assets/jison-BqZprYcd.js"
  },
  "/_build/assets/json-DTAJTTim.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b22-YY7Y2BPr7TP+QrvrOYZBt3jPCNw\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 2850,
    "path": "../public/_build/assets/json-DTAJTTim.js"
  },
  "/_build/assets/json5-BLCLeV30.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ce9-HtrGwR2xcBidBKRf+i87+vQaGvk\"",
    "mtime": "2025-04-09T08:37:58.602Z",
    "size": 3305,
    "path": "../public/_build/assets/json5-BLCLeV30.js"
  },
  "/_build/assets/jsonc-CR_dl2Bk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c3f-z0YDPojEZVHAOTaoBXx47qWtl6w\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 3135,
    "path": "../public/_build/assets/jsonc-CR_dl2Bk.js"
  },
  "/_build/assets/jsonl-YSxxb8je.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bdd-oYAH9EeicVEaG7E21/UeIorlEOY\"",
    "mtime": "2025-04-09T08:37:58.602Z",
    "size": 3037,
    "path": "../public/_build/assets/jsonl-YSxxb8je.js"
  },
  "/_build/assets/jsonnet-BfivnA6A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e2e-1vSxfI5qn55fmHTjAfe3rPd6nPI\"",
    "mtime": "2025-04-09T08:37:58.602Z",
    "size": 3630,
    "path": "../public/_build/assets/jsonnet-BfivnA6A.js"
  },
  "/_build/assets/jssm-CQPZbkWf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c9-+h3gqE0n2q7blHbeb7dKlIb6k7A\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 2249,
    "path": "../public/_build/assets/jssm-CQPZbkWf.js"
  },
  "/_build/assets/jsx-BAng5TT0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"31130-GUiGNuxza4CWadEWwPBI9YnCi60\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 201008,
    "path": "../public/_build/assets/jsx-BAng5TT0.js"
  },
  "/_build/assets/julia-B15RSDUV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"863a-VHRLwtZ1iAHHbjgUXbyhNnJ8Q6Q\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 34362,
    "path": "../public/_build/assets/julia-B15RSDUV.js"
  },
  "/_build/assets/kanagawa-dragon-CkXjmgJE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"42e7-+hm358z2R6HWIP4VA2TRRR+lsAA\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 17127,
    "path": "../public/_build/assets/kanagawa-dragon-CkXjmgJE.js"
  },
  "/_build/assets/kanagawa-lotus-CfQXZHmo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"42e6-JdP/XjojKBbDVeNQlQVl/w8pfP0\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 17126,
    "path": "../public/_build/assets/kanagawa-lotus-CfQXZHmo.js"
  },
  "/_build/assets/kanagawa-wave-DWedfzmr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"42e3-jnQVGWyfAUj5Bj6u8/SJs5K6KHQ\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 17123,
    "path": "../public/_build/assets/kanagawa-wave-DWedfzmr.js"
  },
  "/_build/assets/kotlin-B5lbUyaz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2274-05SYT5iCRUCd1F0IFC1yAYQc7Is\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 8820,
    "path": "../public/_build/assets/kotlin-B5lbUyaz.js"
  },
  "/_build/assets/kusto-BZ4qjH1z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3d45-eo7xvd7AvLBvmBIPqY7OVBEcy3U\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 15685,
    "path": "../public/_build/assets/kusto-BZ4qjH1z.js"
  },
  "/_build/assets/laserwave-DUszq2jm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ceb-ePBMCAX7SG0Irjogl+g1U5DwooA\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 11499,
    "path": "../public/_build/assets/laserwave-DUszq2jm.js"
  },
  "/_build/assets/latex-B7S_v0-W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e893-q1kfb7xZsdv/ts2vCe2OPtszOWw\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 59539,
    "path": "../public/_build/assets/latex-B7S_v0-W.js"
  },
  "/_build/assets/lean-XBlWyCtg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10d4-fwacqXN/kcCdpVbNAzMSslPcgzg\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 4308,
    "path": "../public/_build/assets/lean-XBlWyCtg.js"
  },
  "/_build/assets/less-BR4n0CG2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18d14-dUEnHx5ePOPMRkLxAY3XcJ9Ho3I\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 101652,
    "path": "../public/_build/assets/less-BR4n0CG2.js"
  },
  "/_build/assets/light-plus-B7mTdjB0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"26d5-Zx7qpUhhqjqkejhteLDsh7vIk0c\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 9941,
    "path": "../public/_build/assets/light-plus-B7mTdjB0.js"
  },
  "/_build/assets/liquid-ChyiIx6a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4310-ohs3zSEdl617zBRy7xWou+ag1D4\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 17168,
    "path": "../public/_build/assets/liquid-ChyiIx6a.js"
  },
  "/_build/assets/lock-D3ifyutX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"178-g9NCRsCavbHckUfGhzsd9Fj5OwE\"",
    "mtime": "2025-04-09T08:37:58.603Z",
    "size": 376,
    "path": "../public/_build/assets/lock-D3ifyutX.js"
  },
  "/_build/assets/log-Cc5clBb7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b95-n50sONtIlLHqsuhIEACjNj6b16k\"",
    "mtime": "2025-04-09T08:37:58.605Z",
    "size": 2965,
    "path": "../public/_build/assets/log-Cc5clBb7.js"
  },
  "/_build/assets/logo-IuBKFhSY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c8b-msGNmLHIaKzNcKoEjZB/drsLZTg\"",
    "mtime": "2025-04-09T08:37:58.604Z",
    "size": 3211,
    "path": "../public/_build/assets/logo-IuBKFhSY.js"
  },
  "/_build/assets/lua-CvWAzNxB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3d06-u/zV34cOJlc3odRQaL0qbjXc2ew\"",
    "mtime": "2025-04-09T08:37:58.604Z",
    "size": 15622,
    "path": "../public/_build/assets/lua-CvWAzNxB.js"
  },
  "/_build/assets/luau-Du5NY7AG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3277-BBrRmXBCOilbUBbvldFJPXoUpFw\"",
    "mtime": "2025-04-09T08:37:58.604Z",
    "size": 12919,
    "path": "../public/_build/assets/luau-Du5NY7AG.js"
  },
  "/_build/assets/make-Bvotw-X0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2336-GmoXUksPv3fKmcdAsQBdlR5ZpvU\"",
    "mtime": "2025-04-09T08:37:58.604Z",
    "size": 9014,
    "path": "../public/_build/assets/make-Bvotw-X0.js"
  },
  "/_build/assets/markdown-BDiHrqA7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"dd72-wWnTgM8pKV3OBW0Co8vO61p4goY\"",
    "mtime": "2025-04-09T08:37:58.604Z",
    "size": 56690,
    "path": "../public/_build/assets/markdown-BDiHrqA7.js"
  },
  "/_build/assets/marko-DL0akeRX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4190-l0omhJhCBkJeuD0Km+8sGQtIv7M\"",
    "mtime": "2025-04-09T08:37:58.604Z",
    "size": 16784,
    "path": "../public/_build/assets/marko-DL0akeRX.js"
  },
  "/_build/assets/material-theme-D5KoaKCx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"48b7-CJZAUj4SYa7cWrWmLW1ca67ky3Y\"",
    "mtime": "2025-04-09T08:37:58.604Z",
    "size": 18615,
    "path": "../public/_build/assets/material-theme-D5KoaKCx.js"
  },
  "/_build/assets/material-theme-darker-BfHTSMKl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"48c5-2KtadDLdcujxXy8y4Bt2hElnnOs\"",
    "mtime": "2025-04-09T08:37:58.605Z",
    "size": 18629,
    "path": "../public/_build/assets/material-theme-darker-BfHTSMKl.js"
  },
  "/_build/assets/material-theme-lighter-B0m2ddpp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"48ca-vlOlJTQln4FlkoNCT6son9MOgUc\"",
    "mtime": "2025-04-09T08:37:58.604Z",
    "size": 18634,
    "path": "../public/_build/assets/material-theme-lighter-B0m2ddpp.js"
  },
  "/_build/assets/material-theme-ocean-CyktbL80.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"48c5-38IV7Gj1pi36TR7qiSHzlCs9XIo\"",
    "mtime": "2025-04-09T08:37:58.604Z",
    "size": 18629,
    "path": "../public/_build/assets/material-theme-ocean-CyktbL80.js"
  },
  "/_build/assets/material-theme-palenight-Csfq5Kiy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"48cb-tPSCpNF7svRHRSnrhMp7s2aYFJE\"",
    "mtime": "2025-04-09T08:37:58.604Z",
    "size": 18635,
    "path": "../public/_build/assets/material-theme-palenight-Csfq5Kiy.js"
  },
  "/_build/assets/matlab-C4-SGcC-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"417d-VuVp9McrkS7IHf8dWg7wokVRT2w\"",
    "mtime": "2025-04-09T08:37:58.605Z",
    "size": 16765,
    "path": "../public/_build/assets/matlab-C4-SGcC-.js"
  },
  "/_build/assets/mdc-CGDDvl7x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4cf4-MS3S0kNbNkhkTmcWBK91Om2Ox+0\"",
    "mtime": "2025-04-09T08:37:58.605Z",
    "size": 19700,
    "path": "../public/_build/assets/mdc-CGDDvl7x.js"
  },
  "/_build/assets/mdx-sdHcTMYB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"22448-7Vo9q7xgAaixy8sQ9taS8XQ7viI\"",
    "mtime": "2025-04-09T08:37:58.605Z",
    "size": 140360,
    "path": "../public/_build/assets/mdx-sdHcTMYB.js"
  },
  "/_build/assets/mermaid-D3T736Ml.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"70ee-OY10WBbwr0cHq279BR04XAbqqMQ\"",
    "mtime": "2025-04-09T08:37:58.605Z",
    "size": 28910,
    "path": "../public/_build/assets/mermaid-D3T736Ml.js"
  },
  "/_build/assets/min-dark-CafNBF8u.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1893-d496H0Z60lAg57LiRH/wyqJ+BmM\"",
    "mtime": "2025-04-09T08:37:58.605Z",
    "size": 6291,
    "path": "../public/_build/assets/min-dark-CafNBF8u.js"
  },
  "/_build/assets/min-light-CTRr51gU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b39-AV5b5gMlIyFBg8ZLVvBtodDGnYI\"",
    "mtime": "2025-04-09T08:37:58.605Z",
    "size": 6969,
    "path": "../public/_build/assets/min-light-CTRr51gU.js"
  },
  "/_build/assets/mipsasm-D08_rs9c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d00-PoCZeS48HaIZq7IK1itXEsBGTa8\"",
    "mtime": "2025-04-09T08:37:58.605Z",
    "size": 3328,
    "path": "../public/_build/assets/mipsasm-D08_rs9c.js"
  },
  "/_build/assets/mojo-tpHetfZQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11171-Yb9heu3v3jjgRaFJO6KtJteP1zA\"",
    "mtime": "2025-04-09T08:37:58.605Z",
    "size": 70001,
    "path": "../public/_build/assets/mojo-tpHetfZQ.js"
  },
  "/_build/assets/monokai-D4h5O-jR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ecc-X4WIf5/MKovdXkpn2ucY2Fvz+nI\"",
    "mtime": "2025-04-09T08:37:58.605Z",
    "size": 7884,
    "path": "../public/_build/assets/monokai-D4h5O-jR.js"
  },
  "/_build/assets/move-C1YtDkjL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"42bb-Br136LnHpDEJW6QGhAJe3HHLtRI\"",
    "mtime": "2025-04-09T08:37:58.606Z",
    "size": 17083,
    "path": "../public/_build/assets/move-C1YtDkjL.js"
  },
  "/_build/assets/narrat-DLbgOhZU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e6e-HjKchXJIUuHOAYTWw1w+Xe8C+uM\"",
    "mtime": "2025-04-09T08:37:58.605Z",
    "size": 3694,
    "path": "../public/_build/assets/narrat-DLbgOhZU.js"
  },
  "/_build/assets/nextflow-B0XVJmRM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f76-CsdCyHhmts+bBOc+qOK8L5UQmAc\"",
    "mtime": "2025-04-09T08:37:58.606Z",
    "size": 3958,
    "path": "../public/_build/assets/nextflow-B0XVJmRM.js"
  },
  "/_build/assets/nginx-D_VnBJ67.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8b8e-au73eDRyb7x4AQhYniFJ7aqa6No\"",
    "mtime": "2025-04-09T08:37:58.605Z",
    "size": 35726,
    "path": "../public/_build/assets/nginx-D_VnBJ67.js"
  },
  "/_build/assets/night-owl-C39BiMTA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"70f1-XkEMDsROL+KqTkmkI7vaY0QDB/s\"",
    "mtime": "2025-04-09T08:37:58.606Z",
    "size": 28913,
    "path": "../public/_build/assets/night-owl-C39BiMTA.js"
  },
  "/_build/assets/nim-Chhr1h2T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"58c4-h12+HsyJt7T1sbBJGWVNMLRvp7Q\"",
    "mtime": "2025-04-09T08:37:58.606Z",
    "size": 22724,
    "path": "../public/_build/assets/nim-Chhr1h2T.js"
  },
  "/_build/assets/nix-Bjjh7dxw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3cd7-b2oU9tgnsmDhNCBlcWBvR/sxko4\"",
    "mtime": "2025-04-09T08:37:58.605Z",
    "size": 15575,
    "path": "../public/_build/assets/nix-Bjjh7dxw.js"
  },
  "/_build/assets/nord-Ddv68eIx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6863-kMtZ6hRkLXSKT61B4950edu4MjQ\"",
    "mtime": "2025-04-09T08:37:58.606Z",
    "size": 26723,
    "path": "../public/_build/assets/nord-Ddv68eIx.js"
  },
  "/_build/assets/nushell-BekpkmYp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4c71-9NpXu4I48M/9td8eqd+PTX47LXw\"",
    "mtime": "2025-04-09T08:37:58.606Z",
    "size": 19569,
    "path": "../public/_build/assets/nushell-BekpkmYp.js"
  },
  "/_build/assets/objective-c-BWx0ALLs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a4de-LhnVG/T+V4xb39yD3Sd4XmjOoYM\"",
    "mtime": "2025-04-09T08:37:58.605Z",
    "size": 107742,
    "path": "../public/_build/assets/objective-c-BWx0ALLs.js"
  },
  "/_build/assets/objective-cpp-aBZrgJR0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ad82-uNNuI4mQsIr7frh0EhvINDlWv7Y\"",
    "mtime": "2025-04-09T08:37:58.606Z",
    "size": 175490,
    "path": "../public/_build/assets/objective-cpp-aBZrgJR0.js"
  },
  "/_build/assets/ocaml-BNioltXt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10149-OZvvpFEK66mofZ+3oi0dLDaRaTE\"",
    "mtime": "2025-04-09T08:37:58.606Z",
    "size": 65865,
    "path": "../public/_build/assets/ocaml-BNioltXt.js"
  },
  "/_build/assets/one-dark-pro-DVMEJ2y_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"83fb-0g5XhPG2uspENrUTMRB2oVJl2Ws\"",
    "mtime": "2025-04-09T08:37:58.605Z",
    "size": 33787,
    "path": "../public/_build/assets/one-dark-pro-DVMEJ2y_.js"
  },
  "/_build/assets/one-light-PoHY5YXO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"62d2-RQN1eJvOzFVrdHrv5KOv5WHUyDo\"",
    "mtime": "2025-04-09T08:37:58.606Z",
    "size": 25298,
    "path": "../public/_build/assets/one-light-PoHY5YXO.js"
  },
  "/_build/assets/pascal-JqZropPD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1052-lr+ZoPrGKVsqJM1QoHr029xJXr8\"",
    "mtime": "2025-04-09T08:37:58.607Z",
    "size": 4178,
    "path": "../public/_build/assets/pascal-JqZropPD.js"
  },
  "/_build/assets/perl-DO8QnyoS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ab08-NMViW+VGZwCdvTh0WCP+2LM+hfY\"",
    "mtime": "2025-04-09T08:37:58.606Z",
    "size": 43784,
    "path": "../public/_build/assets/perl-DO8QnyoS.js"
  },
  "/_build/assets/php-udX19NJh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1bc5d-FsCsH5shOFyW9Bz+Lcl19O+o55o\"",
    "mtime": "2025-04-09T08:37:58.606Z",
    "size": 113757,
    "path": "../public/_build/assets/php-udX19NJh.js"
  },
  "/_build/assets/plastic-3e1v2bzS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"244f-x//k8Ln2Mu2aG+nMmuAM/ZSHTfI\"",
    "mtime": "2025-04-09T08:37:58.607Z",
    "size": 9295,
    "path": "../public/_build/assets/plastic-3e1v2bzS.js"
  },
  "/_build/assets/plsql-LKU2TuZ1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2179-66nxLzpa/D8qjlvdNJygXub6tgg\"",
    "mtime": "2025-04-09T08:37:58.606Z",
    "size": 8569,
    "path": "../public/_build/assets/plsql-LKU2TuZ1.js"
  },
  "/_build/assets/po--71hrkjd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"caf-QJtnbRdtshgtFh/vHENl7M1JID4\"",
    "mtime": "2025-04-09T08:37:58.606Z",
    "size": 3247,
    "path": "../public/_build/assets/po--71hrkjd.js"
  },
  "/_build/assets/poimandres-CS3Unz2-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"82d6-aUEs94AcfLqjSVpnmdfYdfX5koA\"",
    "mtime": "2025-04-09T08:37:58.607Z",
    "size": 33494,
    "path": "../public/_build/assets/poimandres-CS3Unz2-.js"
  },
  "/_build/assets/polar-sY1Cc3Se.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"127d-NOSYRoOc7FAmHph+IBabW1F64Zs\"",
    "mtime": "2025-04-09T08:37:58.607Z",
    "size": 4733,
    "path": "../public/_build/assets/polar-sY1Cc3Se.js"
  },
  "/_build/assets/postcss-B3ZDOciz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1974-HKAJmz8oM9Ow4TLrtYDUpCniZvo\"",
    "mtime": "2025-04-09T08:37:58.607Z",
    "size": 6516,
    "path": "../public/_build/assets/postcss-B3ZDOciz.js"
  },
  "/_build/assets/powerquery-CSHBycmS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"172c-kxgopLm8zX3Y22IwqLFyg+wwtvk\"",
    "mtime": "2025-04-09T08:37:58.607Z",
    "size": 5932,
    "path": "../public/_build/assets/powerquery-CSHBycmS.js"
  },
  "/_build/assets/powershell-BXl-Qilg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5082-V3rCSD+aLdU9UKo/5ptUr5wiblA\"",
    "mtime": "2025-04-09T08:37:58.607Z",
    "size": 20610,
    "path": "../public/_build/assets/powershell-BXl-Qilg.js"
  },
  "/_build/assets/prisma-B48N-Iqd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18f2-/labr3PARfCXOkX/2kdjG7jZ7yA\"",
    "mtime": "2025-04-09T08:37:58.608Z",
    "size": 6386,
    "path": "../public/_build/assets/prisma-B48N-Iqd.js"
  },
  "/_build/assets/prolog-BY-TUvya.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2caf-kNeZk1pQxeUhEolqA/pnTpYnalE\"",
    "mtime": "2025-04-09T08:37:58.607Z",
    "size": 11439,
    "path": "../public/_build/assets/prolog-BY-TUvya.js"
  },
  "/_build/assets/proto-zocC4JxJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19ae-LuR/1VuHdYt78lN9mdxOxmxX2Xk\"",
    "mtime": "2025-04-09T08:37:58.608Z",
    "size": 6574,
    "path": "../public/_build/assets/proto-zocC4JxJ.js"
  },
  "/_build/assets/pug-VMgWr3jy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3730-BM2LxvgSu9J903cUNqyeRzWEHuE\"",
    "mtime": "2025-04-09T08:37:58.607Z",
    "size": 14128,
    "path": "../public/_build/assets/pug-VMgWr3jy.js"
  },
  "/_build/assets/puppet-COl1u60l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2cf8-L2zDYI4AngBjIAtn51pR3NPWDNI\"",
    "mtime": "2025-04-09T08:37:58.607Z",
    "size": 11512,
    "path": "../public/_build/assets/puppet-COl1u60l.js"
  },
  "/_build/assets/purescript-Bg-kzb6g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"42cc-ZfEyzxkJqc0pjpjl3amzX4d7vVY\"",
    "mtime": "2025-04-09T08:37:58.607Z",
    "size": 17100,
    "path": "../public/_build/assets/purescript-Bg-kzb6g.js"
  },
  "/_build/assets/python-DBPt_AfP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11477-qWF48biXSzPgSAYrNWjkvrRi0jk\"",
    "mtime": "2025-04-09T08:37:58.609Z",
    "size": 70775,
    "path": "../public/_build/assets/python-DBPt_AfP.js"
  },
  "/_build/assets/qml-D8XfuvdV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1530-kjVm0V03MnPgTcX/HV4bbIVLc0k\"",
    "mtime": "2025-04-09T08:37:58.608Z",
    "size": 5424,
    "path": "../public/_build/assets/qml-D8XfuvdV.js"
  },
  "/_build/assets/qmldir-C8lEn-DE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3ea-+fq0/BxvZOQ+157ZaRNbUKWMmIo\"",
    "mtime": "2025-04-09T08:37:58.608Z",
    "size": 1002,
    "path": "../public/_build/assets/qmldir-C8lEn-DE.js"
  },
  "/_build/assets/qss-DhMKtDLN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e8a-xKqvlxsACkI+FJYhs89ziAnlgR0\"",
    "mtime": "2025-04-09T08:37:58.607Z",
    "size": 7818,
    "path": "../public/_build/assets/qss-DhMKtDLN.js"
  },
  "/_build/assets/r-CwjWoCRV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9008-LN0v7k5933TdJFpYP4i2BAy3Vf0\"",
    "mtime": "2025-04-09T08:37:58.608Z",
    "size": 36872,
    "path": "../public/_build/assets/r-CwjWoCRV.js"
  },
  "/_build/assets/racket-CzouJOBO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17d57-jV/MLG4UV1KVhL1eo3oXI/Ag3F0\"",
    "mtime": "2025-04-09T08:37:58.608Z",
    "size": 97623,
    "path": "../public/_build/assets/racket-CzouJOBO.js"
  },
  "/_build/assets/raku-B1bQXN8T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2972-BRwlM60SLnBHGK3aBF5NLsVSB4o\"",
    "mtime": "2025-04-09T08:37:58.607Z",
    "size": 10610,
    "path": "../public/_build/assets/raku-B1bQXN8T.js"
  },
  "/_build/assets/razor-AC3CASG2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"64d0-vHKAeDhaIeHZQN2AEpS+WsmY3t0\"",
    "mtime": "2025-04-09T08:37:58.607Z",
    "size": 25808,
    "path": "../public/_build/assets/razor-AC3CASG2.js"
  },
  "/_build/assets/red-bN70gL4F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1876-TIy/lDxhgGcsWEw99X2SyGsc2kY\"",
    "mtime": "2025-04-09T08:37:58.608Z",
    "size": 6262,
    "path": "../public/_build/assets/red-bN70gL4F.js"
  },
  "/_build/assets/reg-5LuOXUq_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"941-uDzCEo95yMEqu18z48E0TV4rICs\"",
    "mtime": "2025-04-09T08:37:58.609Z",
    "size": 2369,
    "path": "../public/_build/assets/reg-5LuOXUq_.js"
  },
  "/_build/assets/regexp-DFERiEu9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f5e-lcMPnijeMEr83/c8XE8W+IHjFDw\"",
    "mtime": "2025-04-09T08:37:58.608Z",
    "size": 8030,
    "path": "../public/_build/assets/regexp-DFERiEu9.js"
  },
  "/_build/assets/rel-DJlmqQ1C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d78-GfCEw07mZcAVlpdq4Uc0qsfbLyE\"",
    "mtime": "2025-04-09T08:37:58.608Z",
    "size": 3448,
    "path": "../public/_build/assets/rel-DJlmqQ1C.js"
  },
  "/_build/assets/riscv-BAxNRJcx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c91-7+OiQ2EYouSP/x9Vu6g4qDSB6vU\"",
    "mtime": "2025-04-09T08:37:58.608Z",
    "size": 7313,
    "path": "../public/_build/assets/riscv-BAxNRJcx.js"
  },
  "/_build/assets/rose-pine-CmCqftbK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"54ff-h7t1IkAm9sZKUd73kBTFe7jRv4o\"",
    "mtime": "2025-04-09T08:37:58.609Z",
    "size": 21759,
    "path": "../public/_build/assets/rose-pine-CmCqftbK.js"
  },
  "/_build/assets/rose-pine-dawn-Ds-gbosJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"550a-XzUApj4T28iKwTNlG8VmS8Brr0I\"",
    "mtime": "2025-04-09T08:37:58.608Z",
    "size": 21770,
    "path": "../public/_build/assets/rose-pine-dawn-Ds-gbosJ.js"
  },
  "/_build/assets/rose-pine-moon-CjDtw9vr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5509-RCWnxb+vl/IAW+9+6MTNAA59rgg\"",
    "mtime": "2025-04-09T08:37:58.609Z",
    "size": 21769,
    "path": "../public/_build/assets/rose-pine-moon-CjDtw9vr.js"
  },
  "/_build/assets/rst-DOyLYcpU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2997-Rs4wHSOddKDTNptVNHGP/g/qBKY\"",
    "mtime": "2025-04-09T08:37:58.610Z",
    "size": 10647,
    "path": "../public/_build/assets/rst-DOyLYcpU.js"
  },
  "/_build/assets/ruby-BWnuaWfc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b853-CBDMBVwxTwHfszpb+5ZGmR0bSPw\"",
    "mtime": "2025-04-09T08:37:58.609Z",
    "size": 47187,
    "path": "../public/_build/assets/ruby-BWnuaWfc.js"
  },
  "/_build/assets/rust-Cg69lM4A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3ad0-uatg9vW4dgwifZtHlAJ8UlkfiEY\"",
    "mtime": "2025-04-09T08:37:58.609Z",
    "size": 15056,
    "path": "../public/_build/assets/rust-Cg69lM4A.js"
  },
  "/_build/assets/sas-CCCYgBRj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2430-Ulj6/hmRFilMyQiOCKTAY49+yqE\"",
    "mtime": "2025-04-09T08:37:58.609Z",
    "size": 9264,
    "path": "../public/_build/assets/sas-CCCYgBRj.js"
  },
  "/_build/assets/sass-DjCbjd0V.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"24c5-VQOE5SxdZRNPnHUEabodC2zGvYs\"",
    "mtime": "2025-04-09T08:37:58.609Z",
    "size": 9413,
    "path": "../public/_build/assets/sass-DjCbjd0V.js"
  },
  "/_build/assets/scala-DPWDxuKt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7494-6XYMyk0+OWPyLMlepua3iUMhPIA\"",
    "mtime": "2025-04-09T08:37:58.609Z",
    "size": 29844,
    "path": "../public/_build/assets/scala-DPWDxuKt.js"
  },
  "/_build/assets/scheme-D8P4R8x9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c6e-0a85NbMW6rYZypC75RRGm/+mgmI\"",
    "mtime": "2025-04-09T08:37:58.609Z",
    "size": 7278,
    "path": "../public/_build/assets/scheme-D8P4R8x9.js"
  },
  "/_build/assets/scss-C31hgJw-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6dde-6l5ehv23DqO+VBs7S/Kvfeh7qbM\"",
    "mtime": "2025-04-09T08:37:58.610Z",
    "size": 28126,
    "path": "../public/_build/assets/scss-C31hgJw-.js"
  },
  "/_build/assets/sdbl-CSHvh9SD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12c5-OKkmxacX5yhejcqtA9UM8MHeuLo\"",
    "mtime": "2025-04-09T08:37:58.609Z",
    "size": 4805,
    "path": "../public/_build/assets/sdbl-CSHvh9SD.js"
  },
  "/_build/assets/shaderlab-B7qAK45m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"187f-tMmZuoOwVSqwYrl34p/ez4hjUDM\"",
    "mtime": "2025-04-09T08:37:58.611Z",
    "size": 6271,
    "path": "../public/_build/assets/shaderlab-B7qAK45m.js"
  },
  "/_build/assets/shellscript-CWGUrYGm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a6a5-PqIf7HK5ce9AA0jaiPTCCz8oFn8\"",
    "mtime": "2025-04-09T08:37:58.609Z",
    "size": 42661,
    "path": "../public/_build/assets/shellscript-CWGUrYGm.js"
  },
  "/_build/assets/shellsession-DN36oS-i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2cf-ijjiKU+V/wmp6iQkEH30DO+ABfs\"",
    "mtime": "2025-04-09T08:37:58.611Z",
    "size": 719,
    "path": "../public/_build/assets/shellsession-DN36oS-i.js"
  },
  "/_build/assets/slack-dark-BthQWCQV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"239d-LHMBsyUFh86qGFvM+u7t3WkZtbw\"",
    "mtime": "2025-04-09T08:37:58.610Z",
    "size": 9117,
    "path": "../public/_build/assets/slack-dark-BthQWCQV.js"
  },
  "/_build/assets/slack-ochin-DqwNpetd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"24d7-BiRtKEQjWndnYLM1xGeXTGnUgo4\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 9431,
    "path": "../public/_build/assets/slack-ochin-DqwNpetd.js"
  },
  "/_build/assets/smalltalk-RJ4jLoVH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f42-l7Vf5AACXqcHI6v9HLLQ5e/U1fI\"",
    "mtime": "2025-04-09T08:37:58.609Z",
    "size": 3906,
    "path": "../public/_build/assets/smalltalk-RJ4jLoVH.js"
  },
  "/_build/assets/snazzy-light-Bw305WKR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5125-tbBJwAwza6HClVoP6OvDw/UyczE\"",
    "mtime": "2025-04-09T08:37:58.609Z",
    "size": 20773,
    "path": "../public/_build/assets/snazzy-light-Bw305WKR.js"
  },
  "/_build/assets/solarized-dark-DXbdFlpD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1abe-6NRBR7/r0g2IDmknK3kpzih1ojk\"",
    "mtime": "2025-04-09T08:37:58.610Z",
    "size": 6846,
    "path": "../public/_build/assets/solarized-dark-DXbdFlpD.js"
  },
  "/_build/assets/solarized-light-L9t79GZl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1950-bOSHs4QuofVjf2ggJ3A58EemLcc\"",
    "mtime": "2025-04-09T08:37:58.610Z",
    "size": 6480,
    "path": "../public/_build/assets/solarized-light-L9t79GZl.js"
  },
  "/_build/assets/solidity-C1w2a3ep.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3f65-5xZkaZ7PKJ06FHb3d2tWrPif7r8\"",
    "mtime": "2025-04-09T08:37:58.610Z",
    "size": 16229,
    "path": "../public/_build/assets/solidity-C1w2a3ep.js"
  },
  "/_build/assets/soy-CxmeJsH_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b27-mPdboHFfZA+0O9w37vTfE2RVpt0\"",
    "mtime": "2025-04-09T08:37:58.610Z",
    "size": 6951,
    "path": "../public/_build/assets/soy-CxmeJsH_.js"
  },
  "/_build/assets/sparql-bYkjHRlG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5e8-Zr71MYkCifMlbC8e1eXpQgS2Tqw\"",
    "mtime": "2025-04-09T08:37:58.610Z",
    "size": 1512,
    "path": "../public/_build/assets/sparql-bYkjHRlG.js"
  },
  "/_build/assets/splunk-a8RH-YUw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"de3-4MJ4H3Xgn2FS0O1gBAyg9d+1VU4\"",
    "mtime": "2025-04-09T08:37:58.610Z",
    "size": 3555,
    "path": "../public/_build/assets/splunk-a8RH-YUw.js"
  },
  "/_build/assets/sql-BBT0u3iQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5cd8-UasA4b1ZmjprIlqfcTbK3Al1BNc\"",
    "mtime": "2025-04-09T08:37:58.610Z",
    "size": 23768,
    "path": "../public/_build/assets/sql-BBT0u3iQ.js"
  },
  "/_build/assets/ssh-config-BknIz3MU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e18-13MAt3uHXNsH+CLV8pBjeujxdJE\"",
    "mtime": "2025-04-09T08:37:58.611Z",
    "size": 3608,
    "path": "../public/_build/assets/ssh-config-BknIz3MU.js"
  },
  "/_build/assets/stata-CXDRq8TI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e375-HQIwWnqFfD/SkjWPNTdAzl8GBBI\"",
    "mtime": "2025-04-09T08:37:58.611Z",
    "size": 58229,
    "path": "../public/_build/assets/stata-CXDRq8TI.js"
  },
  "/_build/assets/stylus-Cbu_jgUK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7acb-QrJBH0l4Qa8a+75ma8daoHQkdpE\"",
    "mtime": "2025-04-09T08:37:58.610Z",
    "size": 31435,
    "path": "../public/_build/assets/stylus-Cbu_jgUK.js"
  },
  "/_build/assets/svelte-MSaWC3Je.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"41f6-aQxxhPl3AvtkBE8x3LiTx1PNTd8\"",
    "mtime": "2025-04-09T08:37:58.610Z",
    "size": 16886,
    "path": "../public/_build/assets/svelte-MSaWC3Je.js"
  },
  "/_build/assets/swift-BSxZ-RaX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"16371-aztFhFxt2yUng63YlKd+l1cCNI4\"",
    "mtime": "2025-04-09T08:37:58.610Z",
    "size": 90993,
    "path": "../public/_build/assets/swift-BSxZ-RaX.js"
  },
  "/_build/assets/synthwave-84-CbfX1IO0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"36d4-rw7+tMOmFbgQDhwnT0kx7VdqnBs\"",
    "mtime": "2025-04-09T08:37:58.610Z",
    "size": 14036,
    "path": "../public/_build/assets/synthwave-84-CbfX1IO0.js"
  },
  "/_build/assets/system-verilog-C7L56vO4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6895-9ZLstt7ViE0xsW265mBWgmylcMs\"",
    "mtime": "2025-04-09T08:37:58.611Z",
    "size": 26773,
    "path": "../public/_build/assets/system-verilog-C7L56vO4.js"
  },
  "/_build/assets/systemd-CUnW07Te.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f3f-uv7wy8OK67PNsOcdBMbGSWcUkaA\"",
    "mtime": "2025-04-09T08:37:58.611Z",
    "size": 7999,
    "path": "../public/_build/assets/systemd-CUnW07Te.js"
  },
  "/_build/assets/talonscript-yNdrVPqT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a1a-PfMSNPF8XjzWBP2x+zARao8kpOw\"",
    "mtime": "2025-04-09T08:37:58.611Z",
    "size": 6682,
    "path": "../public/_build/assets/talonscript-yNdrVPqT.js"
  },
  "/_build/assets/tasl-CQjiPCtT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d3e-EJXPrP7qzhwcxCXB1vhQUTgP4K0\"",
    "mtime": "2025-04-09T08:37:58.611Z",
    "size": 3390,
    "path": "../public/_build/assets/tasl-CQjiPCtT.js"
  },
  "/_build/assets/tcl-C5AohmeQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"119a-naMnNAbj3hsp7yHVV+qsc4JMx2I\"",
    "mtime": "2025-04-09T08:37:58.611Z",
    "size": 4506,
    "path": "../public/_build/assets/tcl-C5AohmeQ.js"
  },
  "/_build/assets/templ-BIXQ7kZj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5da3-VI2cCT5C2F2CZZzePb5OE+AI6s0\"",
    "mtime": "2025-04-09T08:37:58.611Z",
    "size": 23971,
    "path": "../public/_build/assets/templ-BIXQ7kZj.js"
  },
  "/_build/assets/terraform-eHy1PpK4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2d4c-2AKXbk+YdTeYUYwuZgLT6ZQAmMI\"",
    "mtime": "2025-04-09T08:37:58.611Z",
    "size": 11596,
    "path": "../public/_build/assets/terraform-eHy1PpK4.js"
  },
  "/_build/assets/tex-rYs2v40G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2498-GY1dWR56TL4mAOq3A3Gk4KyaEt4\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 9368,
    "path": "../public/_build/assets/tex-rYs2v40G.js"
  },
  "/_build/assets/tokyo-night-hegEt444.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8b51-G3BXQ+3KNXzWihQj05Fol+jGA9g\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 35665,
    "path": "../public/_build/assets/tokyo-night-hegEt444.js"
  },
  "/_build/assets/toml-8jXJkYXT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"196e-tVFZgvEJP9u6sS1zRf+JM9e+rUA\"",
    "mtime": "2025-04-09T08:37:58.611Z",
    "size": 6510,
    "path": "../public/_build/assets/toml-8jXJkYXT.js"
  },
  "/_build/assets/trash-2-SYuB1gpe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20f-4YSbcLANI6LOahi/tCJ9W3eIB9s\"",
    "mtime": "2025-04-09T08:37:58.611Z",
    "size": 527,
    "path": "../public/_build/assets/trash-2-SYuB1gpe.js"
  },
  "/_build/assets/ts-tags-D3g7xtbE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"23d7-nPvO2MmsKLyoiJzzzz+hHwnuT4I\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 9175,
    "path": "../public/_build/assets/ts-tags-D3g7xtbE.js"
  },
  "/_build/assets/tsv-B_m7g4N7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2e3-vD9JpGY0mKtBCmzkjdIj7UVuzls\"",
    "mtime": "2025-04-09T08:37:58.611Z",
    "size": 739,
    "path": "../public/_build/assets/tsv-B_m7g4N7.js"
  },
  "/_build/assets/tsx-B6W0miNI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"30860-clSlVRIEln5J0TKi23yN7Ppckyk\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 198752,
    "path": "../public/_build/assets/tsx-B6W0miNI.js"
  },
  "/_build/assets/turtle-BMR_PYu6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e82-6Tn8gYRwl5AEDyusLBpHqJKNDV4\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 3714,
    "path": "../public/_build/assets/turtle-BMR_PYu6.js"
  },
  "/_build/assets/twig-C4FN8sXG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"58e2-IY9xwZ/DVGMjKjnITYWuh2hyHU8\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 22754,
    "path": "../public/_build/assets/twig-C4FN8sXG.js"
  },
  "/_build/assets/typescript-Dj6nwHGl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"33080-PHp9OtcBpJaL17dBPjYizkICOYA\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 209024,
    "path": "../public/_build/assets/typescript-Dj6nwHGl.js"
  },
  "/_build/assets/typespec-BpWG_bgh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6e1d-0y2eGpCS5V1+2izLvykvaXM8sjg\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 28189,
    "path": "../public/_build/assets/typespec-BpWG_bgh.js"
  },
  "/_build/assets/typst-CX-D33aM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20de-H6k5NhdX+HcC0te3LFodT1NdTpg\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 8414,
    "path": "../public/_build/assets/typst-CX-D33aM.js"
  },
  "/_build/assets/v-CAQ2eGtk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"35aa-xn6YzOl88ay0GRLqFdRKXQgD05E\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 13738,
    "path": "../public/_build/assets/v-CAQ2eGtk.js"
  },
  "/_build/assets/vala-BFOHcciG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d4c-Vf2EQoiOX9yVgGeD+J3EcnXMjkA\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 3404,
    "path": "../public/_build/assets/vala-BFOHcciG.js"
  },
  "/_build/assets/vb-CdO5JTpU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1876-+TsIc4a10gYSvPYG0ceKZs9a0Vg\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 6262,
    "path": "../public/_build/assets/vb-CdO5JTpU.js"
  },
  "/_build/assets/verify-account-BgszTR6X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5a-ufkRP9RkmPxR7SHNYRA4EnWJcfY\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 2906,
    "path": "../public/_build/assets/verify-account-BgszTR6X.js"
  },
  "/_build/assets/verilog-CJaU5se_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1731-2Wl7+oWWbokqxRmYBXtAS7fuaEM\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 5937,
    "path": "../public/_build/assets/verilog-CJaU5se_.js"
  },
  "/_build/assets/vesper-BEBZ7ncR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3177-p46lCR3NVE6Z8EGnmn+1cIjrrA4\"",
    "mtime": "2025-04-09T08:37:58.613Z",
    "size": 12663,
    "path": "../public/_build/assets/vesper-BEBZ7ncR.js"
  },
  "/_build/assets/vhdl-DYoNaHQp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5ce8-VD6pQ1H7tj66J7zticC8y7ht6KE\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 23784,
    "path": "../public/_build/assets/vhdl-DYoNaHQp.js"
  },
  "/_build/assets/viml-m4uW47V2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"521a-w3MftddlFkYhYUzfHiiC8BO02Uc\"",
    "mtime": "2025-04-09T08:37:58.613Z",
    "size": 21018,
    "path": "../public/_build/assets/viml-m4uW47V2.js"
  },
  "/_build/assets/vitesse-black-Bkuqu6BP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"356d-zBk2O671hcu14yjA5BaP8bRgML4\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 13677,
    "path": "../public/_build/assets/vitesse-black-Bkuqu6BP.js"
  },
  "/_build/assets/vitesse-dark-D0r3Knsf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"35bf-NpZrPk9jdEu6IxpilmRefOR1sKI\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 13759,
    "path": "../public/_build/assets/vitesse-dark-D0r3Knsf.js"
  },
  "/_build/assets/vitesse-light-CVO1_9PV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3530-TayDmxRMvy5Bv+gyldrxxN/vEUA\"",
    "mtime": "2025-04-09T08:37:58.613Z",
    "size": 13616,
    "path": "../public/_build/assets/vitesse-light-CVO1_9PV.js"
  },
  "/_build/assets/vue-BIMzvBW9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"52ce-qxDkBJwPofg9QjdzZ2SO3HHUSpk\"",
    "mtime": "2025-04-09T08:37:58.613Z",
    "size": 21198,
    "path": "../public/_build/assets/vue-BIMzvBW9.js"
  },
  "/_build/assets/vue-html-D8tnVLkD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"21f9-qMzyTW0na6vXjyw+dRRvKFhk/fQ\"",
    "mtime": "2025-04-09T08:37:58.612Z",
    "size": 8697,
    "path": "../public/_build/assets/vue-html-D8tnVLkD.js"
  },
  "/_build/assets/vyper-BzEH12SI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"126d4-EVS+I5sq3gKoLw1+GYgk45+owmk\"",
    "mtime": "2025-04-09T08:37:58.613Z",
    "size": 75476,
    "path": "../public/_build/assets/vyper-BzEH12SI.js"
  },
  "/_build/assets/wasm-CG6Dc4jp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"97f00-rYm+CybCMCqxOZ2Np2GsfIrREbo\"",
    "mtime": "2025-04-09T08:37:58.613Z",
    "size": 622336,
    "path": "../public/_build/assets/wasm-CG6Dc4jp.js"
  },
  "/_build/assets/wasm-ISJeQQUc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2fb9-GRfG4hNxJy6vX1rhPRvGVxD62yQ\"",
    "mtime": "2025-04-09T08:37:58.613Z",
    "size": 12217,
    "path": "../public/_build/assets/wasm-ISJeQQUc.js"
  },
  "/_build/assets/wenyan-7A4Fjokl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8b1-QLWy+rOMGxhTE+ERnnV+IFj++qM\"",
    "mtime": "2025-04-09T08:37:58.613Z",
    "size": 2225,
    "path": "../public/_build/assets/wenyan-7A4Fjokl.js"
  },
  "/_build/assets/wgsl-mD5xMClh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"14a4-vXcdla3GRVvYE7Ap/mWUzN+L5LQ\"",
    "mtime": "2025-04-09T08:37:58.613Z",
    "size": 5284,
    "path": "../public/_build/assets/wgsl-mD5xMClh.js"
  },
  "/_build/assets/wikitext-DCE3LsBG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"dd30-Yj6OGzkG+hDO8Bw4di62/RIPjww\"",
    "mtime": "2025-04-09T08:37:58.613Z",
    "size": 56624,
    "path": "../public/_build/assets/wikitext-DCE3LsBG.js"
  },
  "/_build/assets/wolfram-C3FkfJm5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"41933-Fh/YxcmFymhUio4gPBtyJ+1dPF4\"",
    "mtime": "2025-04-09T08:37:58.613Z",
    "size": 268595,
    "path": "../public/_build/assets/wolfram-C3FkfJm5.js"
  },
  "/_build/assets/xml-e3z08dGr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1520-dgZJpegNZOUOlhZI7fQAJf6TDTk\"",
    "mtime": "2025-04-09T08:37:58.613Z",
    "size": 5408,
    "path": "../public/_build/assets/xml-e3z08dGr.js"
  },
  "/_build/assets/xsl-Dd0NUgwM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"569-4TUVJlPiIW3zm+r5DSsszs61Jcg\"",
    "mtime": "2025-04-09T08:37:58.613Z",
    "size": 1385,
    "path": "../public/_build/assets/xsl-Dd0NUgwM.js"
  },
  "/_build/assets/yaml-CVw76BM1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2a29-KfZDVnTHK+jue/V0/82ZqiEGVoQ\"",
    "mtime": "2025-04-09T08:37:58.613Z",
    "size": 10793,
    "path": "../public/_build/assets/yaml-CVw76BM1.js"
  },
  "/_build/assets/zenscript-ulE5f4OK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f85-TUqi2mYX5iIEBlkFqIFPod8ZiyI\"",
    "mtime": "2025-04-09T08:37:58.614Z",
    "size": 3973,
    "path": "../public/_build/assets/zenscript-ulE5f4OK.js"
  },
  "/_build/assets/zig-DFAwn6Qs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1538-yiIURTjp4ZVbURd5pPMT2ZB9cCs\"",
    "mtime": "2025-04-09T08:37:58.613Z",
    "size": 5432,
    "path": "../public/_build/assets/zig-DFAwn6Qs.js"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _2RLvhK = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const b = { "app_routes_root_tsx--fetchBetterAuth_createServerFn_handler": { functionName: "fetchBetterAuth_createServerFn_handler", importer: () => import('../build/__root-CFHpsuhp.mjs') }, "app_routes_authed_tsx--checkExistingOrganization_createServerFn_handler": { functionName: "checkExistingOrganization_createServerFn_handler", importer: () => import('../build/_authed-uwNsAFki.mjs') }, "app_routes_authed_layout_tsx--getTeamspaces_createServerFn_handler": { functionName: "getTeamspaces_createServerFn_handler", importer: () => import('../build/_layout-BgX5DWOv.mjs') }, "app_routes_authed_layout_tsx--getChatrooms_createServerFn_handler": { functionName: "getChatrooms_createServerFn_handler", importer: () => import('../build/_layout-BgX5DWOv.mjs') }, "app_routes_authed_layout_chat_chatroomId_tsx--fetchChatroomWithMessages_createServerFn_handler": { functionName: "fetchChatroomWithMessages_createServerFn_handler", importer: () => import('../build/_chatroomId-CyAyocr2.mjs') } }, $$1 = eventHandler$1(A), d = b;
async function A(r) {
  const n = toWebRequest(r);
  return await D({ request: n, event: r });
}
function z(r) {
  return r.replace(/^\/|\/$/g, "");
}
async function D({ request: r, event: n }) {
  const a = new AbortController(), i = a.signal, _ = () => a.abort();
  n.node.req.on("close", _);
  const v = r.method, w = new URL(r.url, "http://localhost:3000"), R = new RegExp(`${z("/_server")}/([^/?#]+)`), g = w.pathname.match(R), o = g ? g[1] : null, c = Object.fromEntries(w.searchParams.entries()), h = "createServerFn" in c, E = "raw" in c;
  if (typeof o != "string") throw new Error("Invalid server action param for serverFnId: " + o);
  const m = d[o];
  if (!m) throw console.log("serverFnManifest", d), new Error("Server function info not found for " + o);
  let l;
  if (l = await m.importer(), !l) throw console.log("serverFnManifest", d), new Error("Server function module not resolved for " + o);
  const s = l[m.functionName];
  if (!s) throw console.log("serverFnManifest", d), console.log("fnModule", l), new Error(`Server function module export not resolved for serverFn ID: ${o}`);
  const N = ["multipart/form-data", "application/x-www-form-urlencoded"], p = await (async () => {
    try {
      let e = await (async () => {
        if (r.headers.get("Content-Type") && N.some((t) => {
          var F;
          return (F = r.headers.get("Content-Type")) == null ? void 0 : F.includes(t);
        })) return T(v.toLowerCase() !== "get", "GET requests with FormData payloads are not supported"), await s(await r.formData(), i);
        if (v.toLowerCase() === "get") {
          let t = c;
          return h && (t = c.payload), t = t && startSerializer.parse(t), await s(t, i);
        }
        const f = await r.text(), y = startSerializer.parse(f);
        return h ? await s(y, i) : await s(...y, i);
      })();
      return e.result instanceof Response ? e.result : !h && (e = e.result, e instanceof Response) ? e : isRedirect(e) || isNotFound(e) ? C(e) : new Response(e !== void 0 ? startSerializer.stringify(e) : void 0, { status: getResponseStatus(getEvent()), headers: { "Content-Type": "application/json" } });
    } catch (e) {
      return e instanceof Response ? e : isRedirect(e) || isNotFound(e) ? C(e) : (console.info(), console.info("Server Fn Error!"), console.info(), console.error(e), console.info(), new Response(startSerializer.stringify(e), { status: 500, headers: { "Content-Type": "application/json" } }));
    }
  })();
  if (n.node.req.removeListener("close", _), E) return p;
  if (p.headers.get("Content-Type") === "application/json") {
    const f = await p.clone().text();
    f && JSON.stringify(JSON.parse(f));
  }
  return p;
}
function C(r) {
  const { headers: n, ...a } = r;
  return new Response(JSON.stringify(a), { status: 200, headers: { "Content-Type": "application/json", ...n || {} } });
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function Ia(t) {
  return jsx(RouterProvider, { router: t.router });
}
const Ns = defineHandlerCallback(async ({ request: t, router: a, responseHeaders: r }) => {
  if (typeof ft.renderToReadableStream == "function") {
    const n = await ft.renderToReadableStream(jsx(Ia, { router: a }), { signal: t.signal });
    isbot(t.headers.get("User-Agent")) && await n.allReady;
    const i = transformReadableStreamWithRouter(a, n);
    return new Response(i, { status: a.state.statusCode, headers: r });
  }
  if (typeof ft.renderToPipeableStream == "function") {
    const n = new PassThrough();
    try {
      const o = ft.renderToPipeableStream(jsx(Ia, { router: a }), { ...isbot(t.headers.get("User-Agent")) ? { onAllReady() {
        o.pipe(n);
      } } : { onShellReady() {
        o.pipe(n);
      } }, onError: (l, c) => {
        console.error("Error in renderToPipeableStream:", l, c);
      } });
    } catch (o) {
      console.error("Error in renderToPipeableStream:", o);
    }
    const i = transformPipeableStreamWithRouter(a, n);
    return new Response(i, { status: a.state.statusCode, headers: r });
  }
  throw new Error("No renderToReadableStream or renderToPipeableStream found in react-dom/server. Ensure you are using a version of react-dom that supports streaming.");
}), Cs = () => ({ routes: { __root__: { filePath: "__root.tsx", children: ["/", "/_authed", "/create-organization", "/forgot-password", "/sign-in", "/sign-up", "/verify-account", "/accept-invitation/$invitationId/$invitationEmail"], preloads: ["/_build/assets/client-Dh8qKnJx.js", "/_build/assets/client-LSARlrfQ.js"] }, "/": { filePath: "index.tsx" }, "/_authed": { filePath: "_authed.tsx", children: ["/_authed/_layout"] }, "/create-organization": { filePath: "create-organization.tsx" }, "/forgot-password": { filePath: "forgot-password.tsx" }, "/sign-in": { filePath: "sign-in.tsx" }, "/sign-up": { filePath: "sign-up.tsx" }, "/verify-account": { filePath: "verify-account.tsx" }, "/_authed/_layout": { filePath: "_authed/_layout.tsx", parent: "/_authed", children: ["/_authed/_layout/chat/$chatroomId", "/_authed/_layout/project/$projectId", "/_authed/_layout/teamspace/$teamspaceId", "/_authed/_layout/chat/", "/_authed/_layout/members/", "/_authed/_layout/organization-settings/", "/_authed/_layout/organizations/", "/_authed/_layout/team-chat/"] }, "/accept-invitation/$invitationId/$invitationEmail": { filePath: "accept-invitation/$invitationId.$invitationEmail.tsx" }, "/_authed/_layout/chat/$chatroomId": { filePath: "_authed/_layout/chat/$chatroomId.tsx", parent: "/_authed/_layout" }, "/_authed/_layout/project/$projectId": { filePath: "_authed/_layout/project/$projectId.tsx", parent: "/_authed/_layout" }, "/_authed/_layout/teamspace/$teamspaceId": { filePath: "_authed/_layout/teamspace/$teamspaceId.tsx", parent: "/_authed/_layout" }, "/_authed/_layout/chat/": { filePath: "_authed/_layout/chat/index.tsx", parent: "/_authed/_layout" }, "/_authed/_layout/members/": { filePath: "_authed/_layout/members/index.tsx", parent: "/_authed/_layout" }, "/_authed/_layout/organization-settings/": { filePath: "_authed/_layout/organization-settings/index.tsx", parent: "/_authed/_layout" }, "/_authed/_layout/organizations/": { filePath: "_authed/_layout/organizations/index.tsx", parent: "/_authed/_layout" }, "/_authed/_layout/team-chat/": { filePath: "_authed/_layout/team-chat/index.tsx", parent: "/_authed/_layout" } } });
function Is(t) {
  return globalThis.MANIFEST[t];
}
function Ts() {
  var _a2;
  const t = Cs(), a = t.routes.__root__ = t.routes.__root__ || {};
  a.assets = a.assets || [];
  let r = "";
  const n = Is("client"), i = (_a2 = n.inputs[n.handler]) == null ? void 0 : _a2.output.path;
  return i || T(i, "Could not find client entry in vinxi manifest"), a.assets.push({ tag: "script", attrs: { type: "module", suppressHydrationWarning: true, async: true }, children: `${r}import("${i}")` }), t;
}
function Ss() {
  const t = Ts();
  return { ...t, routes: Object.fromEntries(Object.entries(t.routes).map(([a, r]) => {
    const { preloads: n, assets: i } = r;
    return [a, { preloads: n, assets: i }];
  })) };
}
async function ks(t, a, r) {
  var n;
  const i = a[0];
  if (isPlainObject$1(i) && i.method) {
    const c = i, p = c.data instanceof FormData ? "formData" : "payload", u = new Headers({ ...p === "payload" ? { "content-type": "application/json", accept: "application/json" } : {}, ...c.headers instanceof Headers ? Object.fromEntries(c.headers.entries()) : c.headers });
    if (c.method === "GET") {
      const h = encode$1({ payload: startSerializer.stringify({ data: c.data, context: c.context }) });
      h && (t.includes("?") ? t += `&${h}` : t += `?${h}`);
    }
    t.includes("?") ? t += "&createServerFn" : t += "?createServerFn", c.response === "raw" && (t += "&raw");
    const g = await r(t, { method: c.method, headers: u, signal: c.signal, ...Ps(c) }), d = await Ta(g);
    if ((n = d.headers.get("content-type")) != null && n.includes("application/json")) {
      const h = startSerializer.decode(await d.json());
      if (isRedirect(h) || isNotFound(h) || h instanceof Error) throw h;
      return h;
    }
    return d;
  }
  const o = await Ta(await r(t, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(a) })), l = o.headers.get("content-type");
  return l && l.includes("application/json") ? startSerializer.decode(await o.json()) : o.text();
}
function Ps(t) {
  var _a2;
  return t.method === "POST" ? t.data instanceof FormData ? (t.data.set("__TSR_CONTEXT", startSerializer.stringify(t.context)), { body: t.data }) : { body: startSerializer.stringify({ data: (_a2 = t.data) != null ? _a2 : null, context: t.context }) } : {};
}
async function Ta(t) {
  if (!t.ok) {
    const a = t.headers.get("content-type");
    throw a && a.includes("application/json") ? startSerializer.decode(await t.json()) : new Error(await t.text());
  }
  return t;
}
function As(t) {
  return t.replace(/^\/|\/$/g, "");
}
const lt = (t, a) => {
  const r = `/${As(a)}/${t}`;
  return Object.assign((...i) => ks(r, i, async (o, l) => {
    l.headers = mergeHeaders$2(getHeaders(), l.headers);
    const c = await $fetch.native(o, l), p = getEvent(), u = mergeHeaders$2(c.headers, p.___ssrRpcResponseHeaders);
    return p.___ssrRpcResponseHeaders = u, c;
  }), { url: r, functionId: t });
}, Rs = "/_build/assets/app-Cs9mLtrU.css", Es = "/_build/assets/index-CB_DIBKG.css";
function Ba({ error: t }) {
  const a = useRouter();
  return console.error(t), jsxs("div", { className: "min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6", children: [jsx(ErrorComponent, { error: t }), jsxs("div", { className: "flex gap-2 items-center flex-wrap", children: [jsx("button", { onClick: () => {
    a.invalidate();
  }, className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold hover:cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-600", children: "Try Again" }), jsx(Link, { to: "/", className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold hover:cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-600", children: "Home" })] })] });
}
function Ga({ children: t }) {
  return jsxs("div", { className: "space-y-2 p-2 w-screen flex flex-col items-center justify-center min-h-screen", children: [jsx("div", { className: "text-gray-600 dark:text-gray-400", children: t || jsx("p", { children: "The page you are looking for does not exist." }) }), jsxs("p", { className: "flex items-center gap-2 flex-wrap", children: [jsx("button", { onClick: () => window.history.back(), className: "bg-emerald-500 text-white px-2 py-1 rounded uppercase font-black text-sm hover:cursor-pointer hover:bg-emerald-600", children: "Go back" }), jsx(Link, { to: "/", className: "bg-cyan-600 text-white px-2 py-1 rounded uppercase font-black text-sm hover:cursor-pointer hover:bg-cyan-700", children: "Start Over" })] })] });
}
const js = lt("app_routes_root_tsx--fetchBetterAuth_createServerFn_handler", "/_server"), _s = createServerFn({ method: "GET" }).handler(js), we = createRootRoute({ head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { title: "IntelliOptima | Chat" }], links: [{ rel: "preconnect", href: "https://fonts.googleapis.com" }, { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" }, { rel: "stylesheet", href: Rs }, { rel: "stylesheet", href: Es }] }), beforeLoad: async ({}) => {
  const { data: t } = await _s();
  return !t || !t.user || !t.session ? { userId: void 0, user: void 0, session: void 0 } : { userId: t.userID, user: t.user, session: t.session };
}, errorComponent: (t) => jsx(Ha, { children: jsx(Ba, { ...t }) }), notFoundComponent: () => jsx(Ga, {}), component: Os });
function Os() {
  return jsx(Ha, { children: jsxs(Provider, { children: [jsx(Toaster, {}), jsx(Outlet, {})] }) });
}
function Ha({ children: t }) {
  return inject(), jsxs("html", { children: [jsx("head", { children: jsx(HeadContent, {}) }), jsxs("body", { children: [t, jsx(Scripts, {})] })] });
}
const Ms = () => import('../build/verify-account-CPVu4Wht.mjs'), zs = z$1.object({ email: z$1.string().catch("") }), Va = createFileRoute("/verify-account")({ validateSearch: (t) => zs.parse(t), component: lazyRouteComponent(Ms, "component", () => Va.ssr) });
function f(...t) {
  return twMerge(clsx(t));
}
const $s = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "bg-primary text-primary-foreground shadow hover:bg-primary/90", destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90", outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-9 px-4 py-2", sm: "h-8 rounded-md px-3 text-xs", lg: "h-10 rounded-md px-8", icon: "h-9 w-9" } }, defaultVariants: { variant: "default", size: "default" } }), $ = j.forwardRef(({ className: t, variant: a, size: r, asChild: n = false, ...i }, o) => jsx(n ? Slot : "button", { className: f("cursor-pointer", $s({ variant: a, size: r, className: t })), ref: o, ...i }));
$.displayName = "Button";
const ie = j.forwardRef(({ className: t, type: a, ...r }, n) => jsx("input", { type: a, className: f("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t), ref: n, ...r }));
ie.displayName = "Input";
function $e({ className: t, ...a }) {
  return jsx("div", { "data-slot": "card", className: f("bg-card text-card-foreground rounded-xl border shadow-sm", t), ...a });
}
function Qe({ className: t, ...a }) {
  return jsx("div", { "data-slot": "card-header", className: f("flex flex-col gap-1.5 p-6", t), ...a });
}
function ze({ className: t, ...a }) {
  return jsx("div", { "data-slot": "card-title", className: f("leading-none font-semibold tracking-tight", t), ...a });
}
function be({ className: t, ...a }) {
  return jsx("div", { "data-slot": "card-description", className: f("text-muted-foreground text-sm", t), ...a });
}
function Ie({ className: t, ...a }) {
  return jsx("div", { "data-slot": "card-content", className: f("p-6 pt-0", t), ...a });
}
function ct({ className: t, ...a }) {
  return jsx("div", { "data-slot": "card-footer", className: f("flex items-center p-6 pt-0", t), ...a });
}
function Q({ className: t, ...a }) {
  return jsx(yr.Root, { "data-slot": "label", className: f("text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", t), ...a });
}
function Wa(t) {
  return "https://intellitask.io";
}
class Ls {
  constructor(a, r) {
    __publicField(this, "auth");
    __publicField(this, "chatrooms");
    __publicField(this, "chats");
    __publicField(this, "eventStreamer");
    __publicField(this, "fileManagement");
    __publicField(this, "fuck");
    __publicField(this, "openai");
    const n = new Hs(a, r != null ? r : {});
    this.auth = new Ft.ServiceClient(n), this.chatrooms = new Bt.ServiceClient(n), this.chats = new Gt.ServiceClient(n), this.eventStreamer = new Ht.ServiceClient(n), this.fileManagement = new Vt.ServiceClient(n), this.fuck = new Wt.ServiceClient(n), this.openai = new qt.ServiceClient(n);
  }
}
var Ft;
((t) => {
  class a {
    constructor(n) {
      __publicField(this, "baseClient");
      this.baseClient = n;
    }
    async authRouter(n, i, o, l) {
      return this.baseClient.callAPI(n, `/api/auth/${i.map(encodeURIComponent).join("/")}`, o, l);
    }
    async getIfUserHasActiveOrganization() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/organizations/has-active")).json();
    }
    async getOrganizationInvitationsByEmail() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/organizations/invitations")).json();
    }
    async getOrganizationsAttendedByUser() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/organizations/attended-by-user")).json();
    }
    async handler() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/authorize")).json();
    }
  }
  t.ServiceClient = a;
})(Ft || (Ft = {}));
var Bt;
((t) => {
  class a {
    constructor(n) {
      __publicField(this, "baseClient");
      this.baseClient = n;
    }
    async addTeamspaceMember(n, i) {
      return await (await this.baseClient.callTypedAPI("POST", `/api/teamspaces/${encodeURIComponent(n)}/members`, JSON.stringify(i))).json();
    }
    async changeProjectMemberStatus(n, i, o) {
      await this.baseClient.callTypedAPI("PATCH", `/api/projects/${encodeURIComponent(n)}/kick-member/${encodeURIComponent(i)}`, JSON.stringify(o));
    }
    async changeTeamspaceMemberStatus(n, i, o) {
      await this.baseClient.callTypedAPI("PATCH", `/api/teamspaces/${encodeURIComponent(n)}/kick-member/${encodeURIComponent(i)}`, JSON.stringify(o));
    }
    async createChatroom(n) {
      return await (await this.baseClient.callTypedAPI("POST", "/api/chatrooms", JSON.stringify(n))).json();
    }
    async createProject(n) {
      return await (await this.baseClient.callTypedAPI("POST", "/api/projects", JSON.stringify(n))).json();
    }
    async createTeamspace(n) {
      return await (await this.baseClient.callTypedAPI("POST", "/api/teamspaces", JSON.stringify(n))).json();
    }
    async deleteChatroom(n) {
      await this.baseClient.callTypedAPI("DELETE", `/api/chatrooms/${encodeURIComponent(n)}`);
    }
    async deleteOneChatroomFile(n) {
      const i = ve({ fileId: n.fileId });
      return await (await this.baseClient.callTypedAPI("DELETE", "/files/chatroom", void 0, { query: i })).json();
    }
    async deleteOneProjectFile(n) {
      const i = ve({ fileId: n.fileId, projectId: n.projectId });
      return await (await this.baseClient.callTypedAPI("DELETE", "/files/project", void 0, { query: i })).json();
    }
    async deleteOneTeamspaceFile(n) {
      const i = ve({ fileId: n.fileId });
      return await (await this.baseClient.callTypedAPI("DELETE", "/files/teamspace", void 0, { query: i })).json();
    }
    async deleteProject(n) {
      await this.baseClient.callTypedAPI("DELETE", `/api/projects/${encodeURIComponent(n)}`);
    }
    async deleteTeamspace(n) {
      await this.baseClient.callTypedAPI("DELETE", `/api/teamspaces/${encodeURIComponent(n)}`);
    }
    async getChatroom(n) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/chatrooms/${encodeURIComponent(n)}`)).json();
    }
    async getParticipatingChatroomsWithLatestMessages() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/chatrooms/participating")).json();
    }
    async getParticipatingTeamspaces() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/teamspaces/participating")).json();
    }
    async getProject(n) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/projects/${encodeURIComponent(n)}`)).json();
    }
    async getProjects(n) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/teamspaces/${encodeURIComponent(n)}/projects`)).json();
    }
    async getTeamspace(n) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/teamspaces/${encodeURIComponent(n)}`)).json();
    }
    async getTeamspaceMembers(n) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/teamspaces/${encodeURIComponent(n)}/members`)).json();
    }
    async getTeamspaces() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/teamspaces")).json();
    }
    async getUserProjects() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/user/projects")).json();
    }
    async removeTeamspaceMember(n) {
      await this.baseClient.callTypedAPI("DELETE", `/api/teamspaces/members/${encodeURIComponent(n)}`);
    }
    async updateChatroom(n, i) {
      await this.baseClient.callTypedAPI("PATCH", `/api/chatrooms/${encodeURIComponent(n)}`, JSON.stringify(i));
    }
    async updateProject(n, i) {
      return await (await this.baseClient.callTypedAPI("PATCH", `/api/projects/${encodeURIComponent(n)}`, JSON.stringify(i))).json();
    }
    async updateTeamspace(n, i) {
      await this.baseClient.callTypedAPI("PATCH", `/api/teamspaces/${encodeURIComponent(n)}`, JSON.stringify(i));
    }
    async updateTeamspaceMember(n, i) {
      await this.baseClient.callTypedAPI("PATCH", `/api/teamspaces/members/${encodeURIComponent(n)}`, JSON.stringify(i));
    }
  }
  t.ServiceClient = a;
})(Bt || (Bt = {}));
var Gt;
((t) => {
  class a {
    constructor(n) {
      __publicField(this, "baseClient");
      this.baseClient = n;
    }
    async chat(n) {
      const i = ve({ chatroomId: n.chatroomId, userId: n.userId });
      return await this.baseClient.createStreamInOut("/api/chat", { query: i });
    }
    async createChatMessageReactions(n) {
      return await (await this.baseClient.callTypedAPI("POST", "/api/chatmessage-reactions", JSON.stringify(n))).json();
    }
    async deleteChatMessageReaction(n) {
      await this.baseClient.callTypedAPI("DELETE", `/api/chatmessage-reactions/${encodeURIComponent(n)}`);
    }
    async updateChatMessageReaction(n, i) {
      await this.baseClient.callTypedAPI("PATCH", `/api/chatmessage-reactions/${encodeURIComponent(n)}`, JSON.stringify(i));
    }
  }
  t.ServiceClient = a;
})(Gt || (Gt = {}));
var Ht;
((t) => {
  class a {
    constructor(n) {
      __publicField(this, "baseClient");
      this.baseClient = n;
    }
    async eventsStream() {
      return await this.baseClient.createStreamIn("/api/events");
    }
    async stats(n) {
      await this.baseClient.callTypedAPI("GET", `/stats/${encodeURIComponent(n)}`);
    }
  }
  t.ServiceClient = a;
})(Ht || (Ht = {}));
var Vt;
((t) => {
  class a {
    constructor(n) {
      __publicField(this, "baseClient");
      this.baseClient = n;
    }
    async deleteOneFile(n, i) {
      const o = ve({ organizationId: i.organizationId });
      await this.baseClient.callTypedAPI("DELETE", `/files/${encodeURIComponent(n)}`, void 0, { query: o });
    }
    async getFilesByIds(n) {
      const i = ve({ fileIds: n.fileIds.map((l) => l) });
      return await (await this.baseClient.callTypedAPI("GET", "/api/files", void 0, { query: i })).json();
    }
    async uploadFilesWithMetadata(n, i, o) {
      return this.baseClient.callAPI(n, "/api/upload-with-metadata", i, o);
    }
  }
  t.ServiceClient = a;
})(Vt || (Vt = {}));
var Wt;
((t) => {
  class a {
    constructor(n) {
      __publicField(this, "baseClient");
      this.baseClient = n;
    }
    async createAgent(n) {
      return await (await this.baseClient.callTypedAPI("POST", "/api/agents", JSON.stringify(n))).json();
    }
    async createConfigProfile(n) {
      return await (await this.baseClient.callTypedAPI("POST", "/api/config-profile", JSON.stringify(n))).json();
    }
    async createInstructionSet(n) {
      return await (await this.baseClient.callTypedAPI("POST", "/api/instruction-set", JSON.stringify(n))).json();
    }
    async createModel(n) {
      return await (await this.baseClient.callTypedAPI("POST", "/api/model", JSON.stringify(n))).json();
    }
    async createVoiceProfile(n) {
      return await (await this.baseClient.callTypedAPI("POST", "/api/voice-profile", JSON.stringify(n))).json();
    }
    async deleteAgent(n) {
      const i = ve({ id: n.id });
      await this.baseClient.callTypedAPI("DELETE", "/api/agents:id", void 0, { query: i });
    }
    async deleteConfigProfile(n) {
      await this.baseClient.callTypedAPI("DELETE", `/api/config-profile/${encodeURIComponent(n)}`);
    }
    async deleteInstructionSet(n) {
      await this.baseClient.callTypedAPI("DELETE", `/api/instruction-set/${encodeURIComponent(n)}`);
    }
    async deleteModel(n) {
      await this.baseClient.callTypedAPI("DELETE", `/api/model/${encodeURIComponent(n)}`);
    }
    async deleteVoiceProfile(n) {
      await this.baseClient.callTypedAPI("DELETE", `/api/voice-profile/${encodeURIComponent(n)}`);
    }
    async getAgent(n) {
      const i = ve({ id: n.id });
      return await (await this.baseClient.callTypedAPI("GET", "/api/agents:id", void 0, { query: i })).json();
    }
    async getConfigProfile(n) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/config-profile/${encodeURIComponent(n)}`)).json();
    }
    async getInstructionSet(n) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/instruction-set/${encodeURIComponent(n)}`)).json();
    }
    async getModel(n) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/model/${encodeURIComponent(n)}`)).json();
    }
    async getModels() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/models")).json();
    }
    async getModelsByProvider(n) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/models/provider/${encodeURIComponent(n)}`)).json();
    }
    async getPublicAgents() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/agents")).json();
    }
    async getPublicConfigProfiles() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/config-profiles")).json();
    }
    async getPublicInstructionSets() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/instruction-sets")).json();
    }
    async getVoiceProfile(n) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/voice-profile/${encodeURIComponent(n)}`)).json();
    }
    async getVoiceProfiles() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/voice-profiles")).json();
    }
    async updateAgent(n) {
      await this.baseClient.callTypedAPI("PATCH", "/api/agents:id", JSON.stringify(n));
    }
    async updateConfigProfile(n, i) {
      await this.baseClient.callTypedAPI("PATCH", `/api/config-profile/${encodeURIComponent(n)}`, JSON.stringify(i));
    }
    async updateInstructionSet(n, i) {
      await this.baseClient.callTypedAPI("PATCH", `/api/instruction-set/${encodeURIComponent(n)}`, JSON.stringify(i));
    }
    async updateModel(n, i) {
      await this.baseClient.callTypedAPI("PATCH", `/api/model/${encodeURIComponent(n)}`, JSON.stringify(i));
    }
    async updateVoiceProfile(n, i) {
      await this.baseClient.callTypedAPI("PATCH", `/api/voice-profile/${encodeURIComponent(n)}`, JSON.stringify(i));
    }
  }
  t.ServiceClient = a;
})(Wt || (Wt = {}));
var qt;
((t) => {
  class a {
    constructor(n) {
      __publicField(this, "baseClient");
      this.baseClient = n;
    }
    async getCommunicationCoach() {
      return await (await this.baseClient.callTypedAPI("GET", "/communication-coach")).json();
    }
    async getDataAnalyst() {
      return await (await this.baseClient.callTypedAPI("GET", "/data-analyst")).json();
    }
    async getFinancialAdvisor() {
      return await (await this.baseClient.callTypedAPI("GET", "/financial-advisor")).json();
    }
    async getHRConsultant() {
      return await (await this.baseClient.callTypedAPI("GET", "/hr-consultant")).json();
    }
    async getInnovationConsultant() {
      return await (await this.baseClient.callTypedAPI("GET", "/innovation-consultant")).json();
    }
    async getLegalAdvisor() {
      return await (await this.baseClient.callTypedAPI("GET", "/legal-advisor")).json();
    }
    async getMarketingAdvisor() {
      return await (await this.baseClient.callTypedAPI("GET", "/marketing-advisor")).json();
    }
    async getProductivityCoach() {
      return await (await this.baseClient.callTypedAPI("GET", "/productivity-coach")).json();
    }
    async getProjectManager() {
      return await (await this.baseClient.callTypedAPI("GET", "/project-manager")).json();
    }
    async getSupervisor() {
      return await (await this.baseClient.callTypedAPI("GET", "/supervisor")).json();
    }
    async getTechAdvisor() {
      return await (await this.baseClient.callTypedAPI("GET", "/tech-advisor")).json();
    }
    async getWellnessCoach() {
      return await (await this.baseClient.callTypedAPI("GET", "/wellness-coach")).json();
    }
    async openaiStream(n, i, o) {
      return this.baseClient.callAPI(n, "/stream-chat", i, o);
    }
  }
  t.ServiceClient = a;
})(qt || (qt = {}));
function gt(t) {
  const a = [];
  for (const r in t) {
    const n = Array.isArray(t[r]) ? t[r] : [t[r]];
    for (const i of n) a.push(`${r}=${encodeURIComponent(i)}`);
  }
  return a.join("&");
}
function ve(t) {
  for (const a in t) t[a] === void 0 && delete t[a];
  return t;
}
function Ds(t) {
  return "encore.dev.headers." + btoa(JSON.stringify(t)).replaceAll("=", "").replaceAll("+", "-").replaceAll("/", "_");
}
class ua {
  constructor(a, r) {
    __publicField(this, "ws");
    __publicField(this, "hasUpdateHandlers", []);
    let n = ["encore-ws"];
    r && n.push(Ds(r)), this.ws = new WebSocket(a, n), this.on("error", () => {
      this.resolveHasUpdateHandlers();
    }), this.on("close", () => {
      this.resolveHasUpdateHandlers();
    });
  }
  resolveHasUpdateHandlers() {
    const a = this.hasUpdateHandlers;
    this.hasUpdateHandlers = [];
    for (const r of a) r();
  }
  async hasUpdate() {
    await new Promise((a) => {
      this.hasUpdateHandlers.push(() => a(null));
    });
  }
  on(a, r) {
    this.ws.addEventListener(a, r);
  }
  off(a, r) {
    this.ws.removeEventListener(a, r);
  }
  close() {
    this.ws.close();
  }
}
class Us {
  constructor(a, r) {
    __publicField(this, "socket");
    __publicField(this, "buffer", []);
    this.socket = new ua(a, r), this.socket.on("message", (n) => {
      this.buffer.push(JSON.parse(n.data)), this.socket.resolveHasUpdateHandlers();
    });
  }
  close() {
    this.socket.close();
  }
  async send(a) {
    return this.socket.ws.readyState === WebSocket.CONNECTING && await new Promise((r) => {
      this.socket.ws.addEventListener("open", r, { once: true });
    }), this.socket.ws.send(JSON.stringify(a));
  }
  async next() {
    for await (const a of this) return a;
  }
  async *[Symbol.asyncIterator]() {
    for (; ; ) if (this.buffer.length > 0) yield this.buffer.shift();
    else {
      if (this.socket.ws.readyState === WebSocket.CLOSED) return;
      await this.socket.hasUpdate();
    }
  }
}
class Fs {
  constructor(a, r) {
    __publicField(this, "socket");
    __publicField(this, "buffer", []);
    this.socket = new ua(a, r), this.socket.on("message", (n) => {
      this.buffer.push(JSON.parse(n.data)), this.socket.resolveHasUpdateHandlers();
    });
  }
  close() {
    this.socket.close();
  }
  async next() {
    for await (const a of this) return a;
  }
  async *[Symbol.asyncIterator]() {
    for (; ; ) if (this.buffer.length > 0) yield this.buffer.shift();
    else {
      if (this.socket.ws.readyState === WebSocket.CLOSED) return;
      await this.socket.hasUpdate();
    }
  }
}
class Bs {
  constructor(a, r) {
    __publicField(this, "socket");
    __publicField(this, "responseValue");
    let n;
    this.responseValue = new Promise((i) => n = i), this.socket = new ua(a, r), this.socket.on("message", (i) => {
      n(JSON.parse(i.data));
    });
  }
  async response() {
    return this.responseValue;
  }
  close() {
    this.socket.close();
  }
  async send(a) {
    return this.socket.ws.readyState === WebSocket.CONNECTING && await new Promise((r) => {
      this.socket.ws.addEventListener("open", r, { once: true });
    }), this.socket.ws.send(JSON.stringify(a));
  }
}
const Gs = fetch.bind(void 0);
class Hs {
  constructor(a, r) {
    __publicField(this, "baseURL");
    __publicField(this, "fetcher");
    __publicField(this, "headers");
    __publicField(this, "requestInit");
    __publicField(this, "authGenerator");
    var _a2;
    if (this.baseURL = a, this.headers = {}, typeof globalThis == "object" && !("window" in globalThis) && (this.headers["User-Agent"] = "intellitask-yrr2-Generated-TS-Client (Encore/v1.46.16)"), this.requestInit = (_a2 = r.requestInit) != null ? _a2 : {}, r.fetcher !== void 0 ? this.fetcher = r.fetcher : this.fetcher = Gs, r.auth !== void 0) {
      const n = r.auth;
      typeof n == "function" ? this.authGenerator = n : this.authGenerator = () => n;
    }
  }
  async getAuthData() {
    let a;
    if (this.authGenerator) {
      const r = this.authGenerator();
      r instanceof Promise ? a = await r : a = r;
    }
    if (a) {
      const r = {};
      return r.headers = ve({ cookie: a.cookie }), r;
    }
  }
  async createStreamInOut(a, r) {
    let { query: n, headers: i } = r != null ? r : {};
    const o = await this.getAuthData();
    o && (o.query && (n = { ...n, ...o.query }), o.headers && (i = { ...i, ...o.headers }));
    const l = n ? "?" + gt(n) : "";
    return new Us(this.baseURL + a + l, i);
  }
  async createStreamIn(a, r) {
    let { query: n, headers: i } = r != null ? r : {};
    const o = await this.getAuthData();
    o && (o.query && (n = { ...n, ...o.query }), o.headers && (i = { ...i, ...o.headers }));
    const l = n ? "?" + gt(n) : "";
    return new Fs(this.baseURL + a + l, i);
  }
  async createStreamOut(a, r) {
    let { query: n, headers: i } = r != null ? r : {};
    const o = await this.getAuthData();
    o && (o.query && (n = { ...n, ...o.query }), o.headers && (i = { ...i, ...o.headers }));
    const l = n ? "?" + gt(n) : "";
    return new Bs(this.baseURL + a + l, i);
  }
  async callTypedAPI(a, r, n, i) {
    return this.callAPI(a, r, n, { ...i, headers: { "Content-Type": "application/json", ...i == null ? void 0 : i.headers } });
  }
  async callAPI(a, r, n, i) {
    let { query: o, headers: l, ...c } = i != null ? i : {};
    const p = { ...this.requestInit, ...c, method: a, body: n != null ? n : null };
    p.headers = { ...this.headers, ...p.headers, ...l };
    const u = await this.getAuthData();
    u && (u.query && (o = { ...o, ...u.query }), u.headers && (p.headers = { ...p.headers, ...u.headers }));
    const g = o ? "?" + gt(o) : "", d = await this.fetcher(this.baseURL + r + g, p);
    if (!d.ok) {
      let h = { code: "unknown", message: `request failed: status ${d.status}` };
      try {
        const x = await d.text();
        try {
          const m = JSON.parse(x);
          Vs(m) ? h = m : h.message += ": " + JSON.stringify(m);
        } catch {
          h.message += ": " + x;
        }
      } catch (x) {
        h.message += ": " + String(x);
      }
      throw new Nt(d.status, h);
    }
    return d;
  }
}
function Vs(t) {
  return t != null && Ws(t.code) && typeof t.message == "string" && (t.details === void 0 || t.details === null || typeof t.details == "object");
}
function Ws(t) {
  return t !== void 0 && Object.values(qa).includes(t);
}
class Nt extends Error {
  constructor(a, r) {
    super(r.message);
    __publicField(this, "status");
    __publicField(this, "code");
    __publicField(this, "details");
    Object.defineProperty(this, "name", { value: "APIError", enumerable: false, configurable: true }), Object.setPrototypeOf == null ? this.__proto__ = Nt.prototype : Object.setPrototypeOf(this, Nt.prototype), Error.captureStackTrace !== void 0 && Error.captureStackTrace(this, this.constructor), this.status = a, this.code = r.code, this.details = r.details;
  }
}
var qa = ((t) => (t.OK = "ok", t.Canceled = "canceled", t.Unknown = "unknown", t.InvalidArgument = "invalid_argument", t.DeadlineExceeded = "deadline_exceeded", t.NotFound = "not_found", t.AlreadyExists = "already_exists", t.PermissionDenied = "permission_denied", t.ResourceExhausted = "resource_exhausted", t.FailedPrecondition = "failed_precondition", t.Aborted = "aborted", t.OutOfRange = "out_of_range", t.Unimplemented = "unimplemented", t.Internal = "internal", t.Unavailable = "unavailable", t.DataLoss = "data_loss", t.Unauthenticated = "unauthenticated", t))(qa || {});
const qs = () => {
  const t = Wa();
  return createAuthClient({ baseURL: t, plugins: [organizationClient(), adminClient(), emailOTPClient()] });
}, { useSession: Tt, getSession: Js, signIn: Jt, signUp: Ks, signOut: Ys, emailOtp: Kt, verifyEmail: ql, organization: Yt, useListOrganizations: Ja, useActiveOrganization: Ka } = qs(), Sa = ({ className: t }) => jsx("div", { className: "flex items-center justify-center", children: jsxs("div", { className: `${t} flex items-center justify-center`, children: [jsx("div", { className: "w-[45%] border-b border-gray-200" }), jsx("div", { className: "h-4.5 w-4.5 rounded-full border border-gray-200 m-1" }), jsx("div", { className: "w-[45%] border-b border-gray-200" })] }) }), Xs = createFileRoute("/sign-up")({ beforeLoad({ context: t }) {
  if (t.user) throw redirect({ to: "/chat" });
}, component: Qs });
function Qs() {
  const [t, a] = useState(""), [r, n] = useState(""), [i, o] = useState(""), [l, c] = useState(false), p = useNavigate();
  return useEffect(() => {
  }, []), jsx("div", { className: "flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted/30 p-4", children: jsxs($e, { className: "w-full max-w-md", children: [jsxs(Qe, { className: "space-y-1 text-center", children: [jsx(ze, { className: "text-2xl font-bold", children: "Create an account" }), jsx(be, { children: "Enter your information to create your account" })] }), jsxs("form", { onSubmit: async (g) => {
    g.preventDefault(), c(true);
    try {
      const { data: d } = await Ks.email({ email: r, name: t, password: i });
      if (d) {
        const { data: h } = await Kt.sendVerificationOtp({ email: r, type: "email-verification" });
        (h == null ? void 0 : h.success) ? (toast.success("Account created successfully!"), setTimeout(() => {
          p({ to: `/verify-account?email=${r}`, viewTransition: true, reloadDocument: true });
        }, 1e3)) : toast.error("Account not created - try again");
      } else toast.error("Failed to create account. Please try again or check your credentials.");
    } catch {
      toast.error("Failed to create account. Please try again.");
    } finally {
      c(false);
    }
  }, children: [jsxs(Ie, { className: "space-y-4", children: [jsx("div", { className: f("w-full gap-2 flex items-center", "justify-between flex-col"), children: jsxs($, { type: "button", variant: "outline", className: f("w-full gap-2 hover:cursor-pointer"), onClick: async (g) => {
    const { data: d, error: h } = await Jt.social({ provider: "google", callbackURL: "http://localhost:3000/create-organization" });
    console.log("GOOGLE SIGNIN", d, h);
  }, children: [jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "0.98em", height: "1em", viewBox: "0 0 256 262", children: [jsx("path", { fill: "#4285F4", d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" }), jsx("path", { fill: "#34A853", d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" }), jsx("path", { fill: "#FBBC05", d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" }), jsx("path", { fill: "#EB4335", d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" })] }), "Sign up with Google"] }) }), jsx(Sa, { className: "w-[90%]" }), jsxs("div", { className: "space-y-2", children: [jsx(Q, { htmlFor: "name", children: "Full Name" }), jsx(ie, { id: "name", placeholder: "John Doe", value: t, onChange: (g) => a(g.target.value), required: true })] }), jsx(Q, { htmlFor: "email", children: "Email" }), jsx(ie, { id: "email", type: "email", placeholder: "your.email@example.com", value: r, onChange: (g) => n(g.target.value), required: true }), jsxs("div", { className: "space-y-2", children: [jsx(Q, { htmlFor: "password", children: "Password" }), jsx(ie, { id: "password", type: "password", minLength: 8, value: i, onChange: (g) => o(g.target.value), required: true }), jsx("p", { className: "text-xs text-muted-foreground", children: "Password must be at least 8 characters long" })] })] }), jsx(Sa, { className: "mb-3 w-[80%]" }), jsxs(ct, { className: "flex flex-col space-y-4", children: [jsx($, { type: "submit", className: "w-full", disabled: l || t.length === 0 || r.length < 3 || i.length < 7, children: l ? "Creating account..." : "Create account" }), jsxs("div", { className: "text-center text-sm", children: ["Already have an account?", " ", jsx(Link, { to: "/sign-in", viewTransition: true, className: "text-primary hover:underline", children: "Sign in" })] }), jsxs("div", { className: "text-center text-sm", children: ["Go back?", " ", jsx(Link, { to: "/", viewTransition: true, className: "text-primary hover:underline", children: "Home" })] })] })] })] }) });
}
const Zs = createFileRoute("/sign-in")({ beforeLoad({ context: t }) {
  if (t.user) throw redirect({ to: "/chat" });
}, component: ei });
function ei() {
  const [t, a] = useState(""), [r, n] = useState(""), [i, o] = useState(false), l = useNavigate();
  useEffect(() => {
  }, []);
  const c = async () => {
    await Jt.social({ provider: "google", callbackURL: "http://localhost:3000/chat" });
  };
  return jsx("div", { className: "flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted/30 p-4", children: jsxs($e, { className: "w-full max-w-md", children: [jsxs(Qe, { className: "space-y-1 text-center", children: [jsx(ze, { className: "text-2xl font-bold", children: "Sign in" }), jsx(be, { children: "Enter your email and password to access your account" })] }), jsxs("form", { onSubmit: async (u) => {
    u.preventDefault(), o(true);
    try {
      const { data: g, error: d } = await Jt.email({ email: t, password: r, rememberMe: true });
      g ? (toast.success("Successfully signed in!"), l({ to: "/chat", reloadDocument: true, viewTransition: true })) : d.status === 403 ? (toast.error("You need to verify your account!"), setTimeout(() => {
        l({ to: `/verify-account?email=${t}`, reloadDocument: true, viewTransition: true });
      }, 1e3)) : toast.error("We could not sign you in - check your credentials");
    } catch {
      toast.error("Failed to sign in. Please check your credentials.");
    } finally {
      o(false);
    }
  }, children: [jsxs(Ie, { className: "space-y-4", children: [jsxs("div", { className: "space-y-2", children: [jsx(Q, { htmlFor: "email", children: "Email" }), jsx(ie, { id: "email", type: "email", placeholder: "your.email@example.com", value: t, onChange: (u) => a(u.target.value.toLowerCase()), required: true })] }), jsxs("div", { className: "space-y-2", children: [jsxs("div", { className: "flex items-center justify-between", children: [jsx(Q, { htmlFor: "password", children: "Password" }), jsx(Link, { to: "/forgot-password", viewTransition: true, className: "text-sm text-primary hover:underline", children: "Forgot password?" })] }), jsx(ie, { id: "password", type: "password", value: r, onChange: (u) => n(u.target.value), required: true })] }), jsx("div", { className: f("w-full gap-2 flex items-center", "justify-between flex-col"), children: jsxs($, { type: "button", variant: "outline", className: f("w-full gap-2 hover:cursor-pointer"), onClick: async (u) => c(), children: [jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "0.98em", height: "1em", viewBox: "0 0 256 262", children: [jsx("path", { fill: "#4285F4", d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" }), jsx("path", { fill: "#34A853", d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" }), jsx("path", { fill: "#FBBC05", d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" }), jsx("path", { fill: "#EB4335", d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" })] }), "Sign in with Google"] }) })] }), jsxs(ct, { className: "flex flex-col space-y-4", children: [jsx($, { type: "submit", className: "w-full", disabled: i, children: i ? "Signing in..." : "Sign in" }), jsxs("div", { className: "text-center text-sm", children: ["Don't have an account?", " ", jsx(Link, { to: "/sign-up", className: "text-primary hover:underline", children: "Sign up" })] }), jsxs("div", { className: "text-center text-sm", children: ["Go back?", " ", jsx(Link, { to: "/", viewTransition: true, className: "text-primary hover:underline", children: "Home" })] })] })] })] }) });
}
const Ya = j.forwardRef(({ className: t, containerClassName: a, ...r }, n) => jsx(OTPInput, { ref: n, containerClassName: f("flex items-center gap-2 has-[:disabled]:opacity-50", a), className: f("disabled:cursor-not-allowed", t), ...r }));
Ya.displayName = "InputOTP";
const Xa = j.forwardRef(({ className: t, ...a }, r) => jsx("div", { ref: r, className: f("flex items-center", t), ...a }));
Xa.displayName = "InputOTPGroup";
const Pe = j.forwardRef(({ index: t, className: a, ...r }, n) => {
  const i = j.useContext(OTPInputContext), { char: o, hasFakeCaret: l, isActive: c } = i.slots[t];
  return jsxs("div", { ref: n, className: f("relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", c && "z-10 ring-1 ring-ring", a), ...r, children: [o, l && jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: jsx("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })] });
});
Pe.displayName = "InputOTPSlot";
const ti = j.forwardRef(({ ...t }, a) => jsx("div", { ref: a, role: "separator", ...t, children: jsx(Minus, {}) }));
ti.displayName = "InputOTPSeparator";
const ai = createFileRoute("/forgot-password")({ component: ni });
function ni() {
  const [t, a] = useState(""), [r, n] = useState(""), [i, o] = useState(""), [l, c] = useState(false), [p, u] = useState(false), g = r.length === 6 && /^\d{6}$/.test(r) && t.length > 3 && i.length > 7, d = useNavigate(), h = async (m) => {
    m.preventDefault(), c(true);
    try {
      const { data: y, error: w } = await Kt.sendVerificationOtp({ email: t, type: "forget-password" });
      (y == null ? void 0 : y.success) && (u(true), toast.success("Password reset token sent! Please check your email."));
    } catch (y) {
      toast.error("Failed to send reset link. Please try again."), console.error("Password reset error:", y);
    } finally {
      c(false);
    }
  }, x = async () => {
    c(true);
    const { data: m, error: y } = await Kt.resetPassword({ email: t, otp: r, password: i });
    c(false), (m == null ? void 0 : m.success) ? d({ to: "/sign-in", viewTransition: true }) : (console.error("Error resetting password", y), toast.error("Something went wrong"));
  };
  return jsx("div", { className: "flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted/30 p-4", children: jsxs($e, { className: "w-full max-w-md", children: [jsxs(Qe, { className: "space-y-1 text-center", children: [jsx(ze, { className: "text-2xl font-bold", children: "Reset your password" }), jsx(be, { children: p ? "Check your email for a link to reset your password" : "Enter your email and we'll send you a link to reset your password" })] }), p ? jsxs(Ie, { className: "space-y-6 flex flex-col items-center", children: [jsxs("div", { className: "rounded-lg bg-muted p-6 text-center", children: [jsx(Mail, { className: "mx-auto mb-4 h-12 w-12 text-primary" }), jsxs("p", { className: "text-sm text-muted-foreground", children: ["We've sent a password reset token to ", jsx("strong", { children: t }), ". Please check your inbox and get the token to reset your password."] })] }), jsx(be, { children: "Please enter the 6-character code sent to your email" }), jsx("div", { className: "space-y-2", children: jsx(Ya, { maxLength: 6, value: r, onChange: (m) => n(m), children: jsxs(Xa, { children: [jsx(Pe, { index: 0 }), jsx(Pe, { index: 1 }), jsx(Pe, { index: 2 }), jsx(Pe, { index: 3 }), jsx(Pe, { index: 4 }), jsx(Pe, { index: 5 })] }) }) }), jsxs("div", { className: "space-y-2", children: [jsx(ze, { children: "New password" }), jsx(ie, { id: "password", type: "password", minLength: 8, value: i, onChange: (m) => o(m.target.value), required: true }), jsx(be, { children: "Password must be at least 8 characters long" })] }), jsx($, { className: "w-full", disabled: !g || l, onClick: () => x(), children: "Reset password" }), jsx($, { variant: "outline", className: "w-full", onClick: () => {
    u(false), a(""), o("");
  }, children: "Try another email" }), jsx("div", { className: "text-center text-sm", children: jsxs(Link, { to: "/sign-in", className: "inline-flex items-center justify-center text-primary hover:underline", children: [jsx(ArrowLeft, { className: "mr-1 h-4 w-4" }), " Back to sign in"] }) })] }) : jsxs("form", { onSubmit: h, children: [jsx(Ie, { className: "space-y-4", children: jsxs("div", { className: "space-y-2", children: [jsx(Q, { htmlFor: "email", children: "Email" }), jsxs("div", { className: "relative", children: [jsx(Mail, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), jsx(ie, { id: "email", type: "email", placeholder: "your.email@example.com", value: t, onChange: (m) => a(m.target.value.toLowerCase()), className: "pl-10", required: true })] })] }) }), jsxs(ct, { className: "flex flex-col space-y-4", children: [jsx($, { type: "submit", className: "w-full", disabled: l, children: l ? "Sending reset link..." : "Send reset link" }), jsx("div", { className: "text-center text-sm", children: jsxs(Link, { to: "/sign-in", className: "inline-flex items-center text-primary hover:underline", viewTransition: true, children: [jsx(ArrowLeft, { className: "mr-1 h-4 w-4" }), " Back to sign in"] }) })] })] })] }) });
}
function ri({ steps: t, currentStep: a, paymentPlan: r, onStepClick: n, className: i, showLabels: o = true }) {
  const [l, c] = useState(false);
  return useEffect(() => {
    c(true);
  }, []), l ? jsx("div", { className: f("w-full", i), children: jsx("div", { className: "relative flex items-center justify-center w-full", children: t.map((p, u) => {
    if (r === "enterprise" && p.id == "3") return;
    const g = p.id === a, d = p.completed || u < t.findIndex((h) => h.id === a);
    return jsxs("div", { className: "relative flex flex-col items-center flex-1", children: [u > 0 && jsx("div", { className: f("absolute top-1/2 w-full h-[2px] -translate-y-1/2 -left-1/2", d ? "bg-primary" : "bg-muted") }), jsx("button", { type: "button", onClick: () => n == null ? void 0 : n(p.id), disabled: !n, className: f("relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all", g && "ring-4 ring-primary/20", d ? "bg-primary border-primary text-primary-foreground" : g ? "border-primary bg-background text-primary" : "border-muted bg-white text-muted-foreground", n && "cursor-pointer hover:opacity-80"), "aria-current": g ? "step" : void 0, children: d ? jsx(Check, { className: "w-5 h-5" }) : jsx("span", { className: "text-sm font-medium", children: u + 1 }) }), o && jsx("div", { className: f("mt-2 text-xs font-medium text-center", g ? "text-primary" : "text-muted-foreground"), children: p.label })] }, p.id);
  }) }) }) : null;
}
const Ot = 768;
function ma() {
  const [t, a] = j.useState(void 0);
  return j.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${Ot - 1}px)`), n = () => {
      a(window.innerWidth < Ot);
    };
    return r.addEventListener("change", n), a(window.innerWidth < Ot), () => r.removeEventListener("change", n);
  }, []), !!t;
}
const Ee = j.forwardRef(({ className: t, ...a }, r) => jsx("textarea", { className: f("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t), ref: r, ...a }));
Ee.displayName = "Textarea";
function si({ onImageUpload: t, defaultImage: a, className: r, maxSizeMB: n = 5, aspectRatio: i = "square", width: o = 200, height: l = 200 }) {
  const [c, p] = useState(false), [u, g] = useState(a || null), [d, h] = useState(null), [x, m] = useState(false), y = useRef(null), w = (C) => {
    C.preventDefault(), C.stopPropagation(), C.type === "dragenter" || C.type === "dragover" ? p(true) : C.type === "dragleave" && p(false);
  }, N = (C) => C.size > n * 1024 * 1024 ? (h(`File size exceeds ${n}MB limit`), false) : C.type.startsWith("image/") ? (h(null), true) : (h("Only image files are allowed"), false), I = (C) => {
    if (!N(C)) return;
    m(true);
    const P = new FileReader();
    P.onload = (k) => {
      var _a2;
      g((_a2 = k.target) == null ? void 0 : _a2.result), m(false);
    }, P.readAsDataURL(C), t(C);
  }, _ = (C) => {
    C.preventDefault(), C.stopPropagation(), p(false), C.dataTransfer.files && C.dataTransfer.files[0] && I(C.dataTransfer.files[0]);
  }, M = (C) => {
    C.preventDefault(), C.target.files && C.target.files[0] && I(C.target.files[0]);
  }, S = () => {
    var _a2;
    (_a2 = y.current) == null ? void 0 : _a2.click();
  }, L = () => {
    g(null), y.current && (y.current.value = "");
  };
  return jsxs("div", { className: f("flex flex-col items-center", r), children: [jsxs("div", { className: f("relative flex flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50 transition-all hover:cursor-pointer", c ? "border-primary bg-primary/5" : "hover:bg-gray-100", i === "circle" ? "rounded-full" : "rounded-lg", "overflow-hidden"), style: { width: `${o}px`, height: `${l}px` }, onDragEnter: w, onDragLeave: w, onDragOver: w, onDrop: _, onClick: S, children: [x ? jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-background/80", children: jsx("div", { className: "h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" }) }) : u ? jsxs(Fragment, { children: [jsx("img", { src: u || "/placeholder.svg", alt: "Uploaded image preview", style: { width: `${o}px`, height: `${l}px` }, className: "object-cover" }), jsxs($, { variant: "destructive", size: "icon", className: "absolute right-2 top-2 h-6 w-6 rounded-full", onClick: (C) => {
    C.stopPropagation(), L();
  }, children: [jsx(X, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Remove image" })] })] }) : jsx("div", { className: "flex flex-col items-center justify-center p-4 text-center", children: jsx(Upload, { className: "mb-2 h-8 w-8 text-gray-400" }) }), jsx("input", { ref: y, type: "file", accept: "image/*", onChange: M, className: "hidden" })] }), d && jsx("p", { className: "mt-2 text-sm text-destructive", children: d }), jsx("p", { className: "mb-1 mt-2 text-sm font-normal", children: "Drag & drop an image here or click to browse" }), jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: ["Supported formats: JPG, PNG, GIF, WebP (max ", n, "MB)"] })] });
}
const ka = ({ name: t, setName: a, description: r, setDescription: n }) => jsxs($e, { className: "w-full max-w-lg", children: [jsxs(Qe, { className: "space-y-1 text-center", children: [jsx(ze, { className: "text-2xl font-bold", children: "Create your organization" }), jsx(be, { children: "Set up a teamspace for your team to collaborate" })] }), jsxs(Ie, { className: "space-y-4", children: [jsx("h4", { className: "text-center", children: "Organization Logo" }), jsx(si, { onImageUpload: () => {
}, aspectRatio: "circle", width: 100, height: 100 }), jsxs("div", { className: "space-y-2", children: [jsx(Q, { htmlFor: "org-name", children: "Organization Name" }), jsx(ie, { id: "org-name", placeholder: "Acme Inc.", value: t, maxLength: 50, onChange: (i) => a(i.target.value), required: true })] }), jsxs("div", { className: "space-y-2", children: [jsx(Q, { htmlFor: "org-description", children: "Description (optional)" }), jsx(Ee, { id: "org-description", placeholder: "What does your organization do?", value: r, maxLength: 1e3, onChange: (i) => n(i.target.value), rows: 3 })] })] })] }), ii = J.Root, oi = J.Value, Qa = j.forwardRef(({ className: t, children: a, ...r }, n) => jsxs(J.Trigger, { ref: n, className: f("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", t), ...r, children: [a, jsx(J.Icon, { asChild: true, children: jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })] }));
Qa.displayName = J.Trigger.displayName;
const Za = j.forwardRef(({ className: t, ...a }, r) => jsx(J.ScrollUpButton, { ref: r, className: f("flex cursor-default items-center justify-center py-1", t), ...a, children: jsx(ChevronUp, { className: "h-4 w-4" }) }));
Za.displayName = J.ScrollUpButton.displayName;
const en = j.forwardRef(({ className: t, ...a }, r) => jsx(J.ScrollDownButton, { ref: r, className: f("flex cursor-default items-center justify-center py-1", t), ...a, children: jsx(ChevronDown, { className: "h-4 w-4" }) }));
en.displayName = J.ScrollDownButton.displayName;
const tn = j.forwardRef(({ className: t, children: a, position: r = "popper", ...n }, i) => jsx(J.Portal, { children: jsxs(J.Content, { ref: i, className: f("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", t), position: r, ...n, children: [jsx(Za, {}), jsx(J.Viewport, { className: f("p-1", r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: a }), jsx(en, {})] }) }));
tn.displayName = J.Content.displayName;
const li = j.forwardRef(({ className: t, ...a }, r) => jsx(J.Label, { ref: r, className: f("px-2 py-1.5 text-sm font-semibold", t), ...a }));
li.displayName = J.Label.displayName;
const vt = j.forwardRef(({ className: t, children: a, ...r }, n) => jsxs(J.Item, { ref: n, className: f("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t), ...r, children: [jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: jsx(J.ItemIndicator, { children: jsx(Check, { className: "h-4 w-4" }) }) }), jsx(J.ItemText, { children: a })] }));
vt.displayName = J.Item.displayName;
const ci = j.forwardRef(({ className: t, ...a }, r) => jsx(J.Separator, { ref: r, className: f("-mx-1 my-1 h-px bg-muted", t), ...a }));
ci.displayName = J.Separator.displayName;
const di = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", { variants: { variant: { default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80", secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80", destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80", outline: "text-foreground" } }, defaultVariants: { variant: "default" } });
function it({ className: t, variant: a, ...r }) {
  return jsx("div", { className: f(di({ variant: a }), t), ...r });
}
function ui({ invitees: t, onAddInvitee: a, onRemoveInvitee: r, isSubmitting: n = false }) {
  const { data: i } = Tt(), [o, l] = useState(""), [c, p] = useState("member"), [u, g] = useState(""), d = (m) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m), h = () => {
    if (o.toLowerCase() === (i == null ? void 0 : i.user.email.toLowerCase())) {
      g("Not allowed to use your own email here");
      return;
    }
    if (!o) {
      g("Email is required");
      return;
    }
    if (!d(o)) {
      g("Please enter a valid email address");
      return;
    }
    if (t.some((m) => m.email.toLowerCase() === o.toLowerCase())) {
      g("This email has already been added");
      return;
    }
    g(""), a(o, c), l("");
  }, x = (m) => {
    switch (m) {
      case "admin":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      case "member":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "owner":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };
  return jsxs($e, { className: "w-full max-w-3xl mx-auto", children: [jsxs(Qe, { children: [jsx(ze, { className: "text-2xl", children: "Organization Setup" }), jsx(be, { children: "Invite team members to your organization" }), jsx(be, { children: "Members can always be invited when Organization is created" })] }), jsx(Ie, { className: "space-y-6", children: jsx("div", { className: "space-y-4", children: jsxs("div", { className: "grid gap-2", children: [jsx(Q, { htmlFor: "email", children: "Email Address" }), jsxs("div", { className: "flex gap-2", children: [jsxs("div", { className: "flex-1", children: [jsx(ie, { id: "email", type: "email", placeholder: "colleague@example.com", value: o, onChange: (m) => l(m.target.value.toLowerCase()), className: u ? "border-red-500" : "" }), u && jsx("p", { className: "text-sm text-red-500 mt-1", children: u })] }), jsxs(ii, { value: c, onValueChange: (m) => p(m), children: [jsx(Qa, { className: "w-[180px] hover:cursor-pointer", children: jsx(oi, { placeholder: "Select role" }) }), jsxs(tn, { children: [jsx(vt, { className: "hover:cursor-pointer", value: "owner", children: "Owner" }), jsx(vt, { className: "hover:cursor-pointer", value: "admin", children: "Admin" }), jsx(vt, { className: "hover:cursor-pointer", value: "member", children: "Member" })] })] }), jsxs($, { className: "hover:cursor-pointer", type: "button", onClick: h, children: [jsx(UserPlus, { className: "h-4 w-4 mr-2" }), "Add"] })] })] }) }) }), jsxs(ct, { className: "flex justify-center border-t p-6", children: [t.length > 0 && jsxs("div", { className: "space-y-3", children: [jsx("h3", { className: "text-sm font-medium", children: "Pending Invitations" }), jsx("div", { className: "border rounded-md divide-y", children: t.map((m) => jsxs("div", { className: "flex items-center justify-between p-3", children: [jsxs("div", { className: "flex items-center gap-3", children: [jsx(Mail, { className: "h-4 w-4 text-muted-foreground" }), jsx("span", { children: m.email }), jsx(it, { className: x(m.role), children: m.role })] }), jsxs($, { variant: "ghost", size: "sm", onClick: () => r(m.id), className: "h-8 w-8 p-0 hover:cursor-pointer", children: [jsx(X, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Remove" })] })] }, m.id)) })] }), t.length === 0 && jsx("p", { children: "No members selected for the organization" })] })] });
}
const mi = ({ invitees: t, setInvitees: a }) => {
  const [r, n] = useState(false);
  return jsx("div", { children: jsx(ui, { invitees: t, onAddInvitee: (l, c) => {
    a([...t, { email: l, role: c, id: crypto.randomUUID() }]);
  }, onRemoveInvitee: (l) => {
    a(t.filter((c) => c.id !== l));
  }, isSubmitting: r }) });
};
function dt({ delayDuration: t = 0, ...a }) {
  return jsx(Ve.Provider, { "data-slot": "tooltip-provider", delayDuration: t, ...a });
}
function _e({ ...t }) {
  return jsx(dt, { children: jsx(Ve.Root, { "data-slot": "tooltip", ...t }) });
}
function Oe({ ...t }) {
  return jsx(Ve.Trigger, { "data-slot": "tooltip-trigger", ...t });
}
function Me({ className: t, sideOffset: a = 4, children: r, ...n }) {
  return jsx(Ve.Portal, { children: jsxs(Ve.Content, { "data-slot": "tooltip-content", sideOffset: a, className: f("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-sm rounded-md px-3 py-1.5 text-xs", t), ...n, children: [r, jsx(Ve.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })] }) });
}
const an = j.forwardRef(({ className: t, ...a }, r) => jsx(st.Root, { className: f("grid gap-2", t), ...a, ref: r }));
an.displayName = st.Root.displayName;
const nn = j.forwardRef(({ className: t, ...a }, r) => jsx(st.Item, { ref: r, className: f("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", t), ...a, children: jsx(st.Indicator, { className: "flex items-center justify-center", children: jsx(Circle, { className: "h-3.5 w-3.5 fill-primary" }) }) }));
nn.displayName = st.Item.displayName;
const hi = ({ invitees: t, paymentPlan: a, setPaymentPlan: r, setCurrentStep: n }) => jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [jsxs("div", { className: "mb-8 text-center", children: [jsx("h1", { className: "text-3xl font-bold mb-2", children: "Choose your plan" }), jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Final step! Select a payment plan for your organization. You can invite team members to collaborate on your projects." })] }), jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [{ id: "starter", name: "Starter", description: "Perfect for individuals and small projects", price: "$9", billingPeriod: "per month", features: [{ name: "Up to 3 team members", included: true }, { name: "5 projects", included: true }, { name: "Basic analytics", included: true }, { name: "24-hour support", included: false }, { name: "Advanced security", included: false }] }, { id: "pro", name: "Professional", description: "Ideal for growing teams and businesses", price: "$29", billingPeriod: "per month", features: [{ name: "Up to 10 team members", included: true }, { name: "Unlimited projects", included: true }, { name: "Advanced analytics", included: true }, { name: "24-hour support", included: true }, { name: "Advanced security", included: false }], popular: true }, { id: "enterprise", name: "Enterprise", description: "For large organizations with advanced needs", price: "$99", billingPeriod: "per month", features: [{ name: "Unlimited team members", included: true }, { name: "Unlimited projects", included: true }, { name: "Advanced analytics", included: true }, { name: "24-hour priority support", included: true }, { name: "Advanced security", included: true }] }].map((o) => jsxs($e, { onClick: () => r(o.id), className: `relative hover:cursor-pointer ${a === o.id ? "border-primary" : ""}`, children: [o.popular && jsx(it, { className: "absolute -top-2 right-4 bg-primary", children: "Most Popular" }), jsxs(Qe, { children: [jsx(ze, { children: o.name }), jsx(be, { children: o.description }), jsxs("div", { className: "mt-2", children: [jsx("span", { className: "text-3xl font-bold", children: o.price }), jsx("span", { className: "text-muted-foreground ml-1", children: o.billingPeriod })] }), jsx(it, { variant: "outline", className: "mt-2 bg-green-50 text-green-700 border-green-200", children: "14-day free trial included" })] }), jsx(Ie, { children: jsx("ul", { className: "space-y-2", children: o.features.map((l, c) => jsxs("li", { className: "flex items-start", children: [l.included ? jsx(Check, { className: "h-5 w-5 text-green-500 mr-2 shrink-0" }) : jsx("div", { className: "h-5 w-5 mr-2" }), jsx("span", { className: l.included ? "" : "text-muted-foreground", children: l.name })] }, c)) }) }), jsx(ct, { children: jsx(an, { value: a || "", onValueChange: r, className: "w-full", children: jsxs("div", { className: "flex items-center space-x-2", children: [jsx(nn, { value: o.id, id: o.id }), jsx(Q, { htmlFor: o.id, className: "cursor-pointer w-full", children: jsx($, { onClick: () => r(o.id), variant: a === o.id ? "default" : "outline", className: "w-full hover:cursor-pointer", children: a === o.id ? "Selected" : "Select Plan" }) })] }) }) })] }, o.id)) }), a !== "enterprise" && jsxs("div", { children: [jsx("div", { className: "bg-muted p-4 rounded-lg mb-8", children: jsxs("div", { className: "flex items-start gap-3", children: [jsx(Info, { className: "h-5 w-5 text-blue-500 shrink-0 mt-0.5" }), jsxs("div", { children: [jsx("h3", { className: "font-medium mb-1", children: "Organization members" }), jsx("p", { className: "text-sm text-muted-foreground", children: "You can invite team members to your organization now or later. Team members will have access based on their assigned roles." }), jsx(dt, { children: jsxs(_e, { children: [jsx(Oe, { asChild: true, children: jsx($, { variant: "link", className: "p-0 h-auto text-sm", children: "Learn more about roles and permissions" }) }), jsx(Me, { className: "max-w-sm", children: jsx("p", { children: "Organization members can have different roles like Admin, Member, or Collaborator with varying levels of access to projects and settings. [^1][^2]" }) })] }) })] })] }) }), jsxs("div", { className: "flex flex-col md:flex-row gap-4 justify-between items-center", children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx(Users, { className: "h-5 w-5 text-muted-foreground" }), jsxs("span", { className: "text-sm text-muted-foreground", children: [t ? t == null ? void 0 : t.length : 0, " members invited"] })] }), jsxs("div", { className: "flex gap-4", children: [jsx($, { onClick: () => n(3), className: "hover:cursor-pointer", variant: "outline", children: "Invite Team Members" }), jsx($, { className: "hover:cursor-pointer", children: "Continue to Payment" })] })] })] })] }), Te = (t) => {
  const a = Wa();
  return new Ls(a, { auth: { cookie: t }, requestInit: { credentials: "include" } });
}, pi = atom([]), rn = () => {
  const { data: t } = Tt(), [a, r] = useAtom(pi);
  return useEffect(() => {
    a.length > 0 || (async () => {
      const { data: i } = await Te().auth.getOrganizationInvitationsByEmail();
      i && r(i);
    })();
  }, [t == null ? void 0 : t.user.id]), { organizationInvitations: a, refetchInvitations: async () => {
    const { data: i } = await Te().auth.getOrganizationInvitationsByEmail();
    i && r(i);
  } };
}, We = j.forwardRef(({ className: t, children: a, ...r }, n) => jsxs(je.Root, { ref: n, className: f("relative overflow-hidden", t), ...r, children: [jsx(je.Viewport, { className: "h-full w-full rounded-[inherit]", children: a }), jsx(sn, {}), jsx(je.Corner, {})] }));
We.displayName = je.Root.displayName;
const sn = j.forwardRef(({ className: t, orientation: a = "vertical", ...r }, n) => jsx(je.ScrollAreaScrollbar, { ref: n, orientation: a, className: f("flex touch-none select-none transition-colors", a === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", a === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", t), ...r, children: jsx(je.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" }) }));
sn.displayName = je.ScrollAreaScrollbar.displayName;
const fi = ({ className: t }) => {
  const [a, r] = useState(false), { organizationInvitations: n } = rn(), i = useRef(null);
  useEffect(() => {
    const l = (c) => {
      i.current && !i.current.contains(c.target) && r(false);
    };
    return document.addEventListener("mousedown", l), () => {
      document.removeEventListener("mousedown", l);
    };
  }, []);
  const o = () => {
    r(!a);
  };
  return jsxs("div", { className: `relative ${t}`, ref: i, children: [jsxs("button", { onClick: o, className: "relative p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer", "aria-label": "Notifications", children: [jsx(Bell, { className: "h-6 w-6 text-gray-700 hover:text-gray-900" }), n.length > 0 && jsx("div", { className: "absolute -top-2 -right-1 h-4 w-4 flex items-center justify-center bg-blue-500 rounded-full", children: jsx("span", { className: "text-white text-sm", children: n.length }) })] }), a && jsx($e, { className: "absolute top-full right-0 mt-2 w-80 shadow-md z-50", children: jsxs(Ie, { className: "p-0", children: [jsx("div", { className: "p-3 border-b", children: jsx("h3", { className: "font-medium", children: "Notifications" }) }), n.length > 0 ? jsx(We, { className: "max-h-[300px]", children: jsx("div", { className: "divide-y", children: n.map((l, c) => jsx("div", { className: "p-3 hover:bg-muted/40", children: jsxs("div", { className: "flex items-start gap-2", children: [jsx("div", { className: "h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary", children: l.organization.name.charAt(0).toUpperCase() }), jsxs("div", { className: "flex-1", children: [jsxs("p", { className: "text-sm font-medium", children: ["Invitation from ", l.organization.name] }), jsx("p", { className: "text-xs text-muted-foreground", children: "You've been invited to join this organization" }), jsx("div", { className: "mt-2 flex space-x-2", children: jsx($, { asChild: true, size: "sm", variant: "outline", className: "h-7 px-2 text-xs", children: jsxs(Link, { to: "/accept-invitation/$invitationId/$invitationEmail", params: { invitationId: l.id, invitationEmail: l.email }, children: [jsx(ExternalLink, { className: "h-3 w-3 mr-1" }), " Accept invitation"] }) }) })] })] }) }, c)) }) }) : jsx("div", { className: "p-6 text-center", children: jsx("p", { className: "text-muted-foreground text-sm", children: "No new notifications" }) })] }) })] });
};
function ha() {
  const { data: t, error: a } = Ka(), r = t, { data: n } = Ja(), i = useNavigate();
  useEffect(() => {
    a && l();
  }, [a]);
  const o = async (c, p) => {
    await Yt.setActive({ organizationId: c }), await Js({ query: { disableCookieCache: true } }), i(p ? { to: p } : { reloadDocument: true });
  }, l = async () => {
    n && (r == null ? void 0 : r.id) && n.filter((c) => c.id !== r.id).length > 0 ? await o(n.filter((c) => c.id !== r.id)[0].id) : n && n.length > 0 ? await o(n[0].id) : await o("");
  };
  return { changeActiveOrganization: o, activeOrganization: r, changeActiveOrganizationIfAny: l };
}
function on(t) {
  const { changeActiveOrganization: a, changeActiveOrganizationIfAny: r } = ha(), { refetchInvitations: n } = rn(), [i, o] = useState(false), l = useRef(void 0);
  useEffect(() => {
    if (!(i || !t || l.current)) return (async () => await c())(), () => {
      l.current && (console.log("CLOSING DOWN"), l.current.close());
    };
  }, [t]);
  const c = async () => {
    if (!i) {
      l.current && l.current.close(), o(true);
      try {
        l.current = await Te().eventStreamer.eventsStream(), l.current.socket.on("close", () => {
          console.log("Socket closed, will attempt to reconnect if needed");
        }), l.current.socket.on("open", async () => {
          console.log("EVENTSSTREAM ON OPEN HAPPENED!");
        }), l.current.socket.on("message", async (d) => {
          if (d.data) {
            const h = JSON.parse(d.data);
            h.notification && p(h);
          }
        });
      } catch (d) {
        console.error("Error connecting to chat:", d), o(false);
      }
    }
  }, p = async (d) => {
    switch (d.notification.notificationType) {
      case "ORGANIZATION_INVITATION": {
        await u(d);
        return;
      }
      case "ORGANIZATION": {
        await g(d);
        return;
      }
      default:
        throw new Error(`Unknown notification type: ${d.notification.notificationType}`);
    }
  }, u = async (d) => {
    const h = d.notification;
    switch (h.notificationHandling) {
      case "ACCEPTED":
        await a(d.organizationId), toast.info(`${h.memberName} accepted your invitation to join ${h.organizationName}.`);
        return;
      case "CANCELED":
        await n(), toast.info(`Your invitation to join ${h.organizationName} has been canceled.`);
        return;
      case "RECEIVED":
        await n(), toast.info(`You have been invited to join ${h.organizationName} by ${h.memberName}.`);
        return;
      case "REJECTED":
        await n(), toast.info(`${h.memberName} rejected to join ${h.organizationName}.`);
        return;
      default:
        throw new Error(`Unknown notification type: ${d.notification.notificationType}`);
    }
  }, g = async (d) => {
    switch (d.notification.notificationHandling) {
      case "KICKED":
        const h = d.notification;
        t === h.kickedMemberUserId && (toast.info(`You have been kicked from ${h.organizationName}.`), setTimeout(() => r(), 1e3));
        return;
      default:
        throw new Error(`Unknown notification type: ${d.notification.notificationType}`);
    }
  };
}
const ln = createFileRoute("/create-organization")({ head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { title: "IntelliOptima | Create Organization" }, { about: "" }] }), beforeLoad({ context: t }) {
  if (!t.user) throw redirect({ to: "/sign-in" });
}, component: gi }), Pa = [{ id: 1, label: "Organisation Info" }, { id: 2, label: "Details" }, { id: 3, label: "Invite" }];
function gi() {
  const t = ma(), { userId: a } = ln.useRouteContext(), [r, n] = useState(1), [i, o] = useState([true, false, false]), [l, c] = useState(""), [p, u] = useState(""), [g, d] = useState(""), [h, x] = useState([]), [m, y] = useState(), [w, N] = useState(false), I = i.filter((E) => E).length, M = (m === "enterprise" && I === 2 || I >= 2) && l.length > 1 && l.length <= 50 && p.length > 2 && p.length <= 100 && m;
  on(a);
  const { changeActiveOrganization: S } = ha(), L = async () => {
    N(true);
    try {
      const { data: E } = await Yt.create({ name: l, slug: l.toLowerCase().replace(/\s+/g, "-"), metadata: { description: p }, userId: a });
      (E == null ? void 0 : E.id) ? (await Promise.all(h.map(async (B) => {
        await Yt.inviteMember({ email: B.email, role: B.role, organizationId: E.id });
      })), toast.success("Organization created successfully!"), setTimeout(async () => await S(E.id, "/chat"), 1500)) : toast.error("Failed to create organization. Please try again");
    } catch (E) {
      toast.error("Failed to create organization. Please try again."), console.error("Organization creation error:", E);
    } finally {
      N(false);
    }
  };
  useEffect(() => {
    o((E) => (E[r - 1] = true, [...E]));
  }, [r]);
  const C = () => {
    m === "enterprise" && r === 2 || r < Pa.length && n(r + 1);
  }, P = () => {
    r > 1 && n(r - 1);
  };
  return jsxs("div", { className: "flex flex-col min-h-screen items-center bg-gradient-to-b from-background to-muted/30 p-4", children: [jsx("div", { className: "absolute top-4 right-4", children: jsx(fi, {}) }), jsxs(Fragment, { children: [jsx("div", { className: "w-2/3 mt-10", children: jsx(ri, { currentStep: r, paymentPlan: m, steps: Pa, onStepClick: (E) => n(E), showLabels: !t }) }), jsx("div", { className: "flex items-center justify-center w-full mt-10", children: ((E) => {
    switch (E) {
      case 1:
        return jsx(ka, { name: l, setName: c, description: p, setDescription: u });
      case 2:
        return jsx(hi, { invitees: h, paymentPlan: m, setPaymentPlan: y, setCurrentStep: n });
      case 3:
        return jsx(mi, { invitees: h, setInvitees: x });
      default:
        return jsx(ka, { name: l, setName: c, description: p, setDescription: u });
    }
  })(r) }), jsxs("div", { className: "w-1/5 flex justify-around gap-x-4 my-2", children: [jsx($, { className: "w-full hover:cursor-pointer", disabled: r === 1, onClick: P, children: "\u2190 Go Back" }), jsx($, { onClick: C, className: "w-full hover:cursor-pointer", disabled: w || m === "enterprise" && r === 2 || r === 3, children: w ? "Loading..." : "Next \u2192" })] }), jsx($, { type: "button", disabled: !M, onClick: () => L(), children: "Create your organization" })] })] });
}
const bi = lt("app_routes_authed_tsx--checkExistingOrganization_createServerFn_handler", "/_server"), vi = createServerFn().handler(bi), yi = createFileRoute("/_authed")({ async beforeLoad({ context: t, location: a }) {
  var _a2, _b, _c;
  if (!((_a2 = t.user) == null ? void 0 : _a2.id)) throw redirect({ to: "/sign-in" });
  if (await vi(), (a.href === "/organization-settings" || a.href === "/members") && ((_b = t == null ? void 0 : t.session) == null ? void 0 : _b.activeOrganizationMemberRole) !== "owner" && ((_c = t == null ? void 0 : t.session) == null ? void 0 : _c.activeOrganizationMemberRole) !== "admin") throw redirect({ to: "/chat" });
} }), wi = () => import('../build/index-DdG0v_8c.mjs'), cn = createFileRoute("/")({ component: lazyRouteComponent(wi, "component", () => cn.ssr) });
function dn({ className: t, orientation: a = "horizontal", decorative: r = true, ...n }) {
  return jsx(os.Root, { "data-slot": "separator-root", decorative: r, orientation: a, className: f("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", t), ...n });
}
function un({ ...t }) {
  return jsx(K.Root, { "data-slot": "sheet", ...t });
}
function xi({ ...t }) {
  return jsx(K.Close, { "data-slot": "sheet-close", ...t });
}
function Ni({ ...t }) {
  return jsx(K.Portal, { "data-slot": "sheet-portal", ...t });
}
function Ci({ className: t, ...a }) {
  return jsx(K.Overlay, { "data-slot": "sheet-overlay", className: f("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/10", t), ...a });
}
function mn({ className: t, children: a, side: r = "right", ...n }) {
  return jsxs(Ni, { children: [jsx(Ci, {}), jsxs(K.Content, { "data-slot": "sheet-content", className: f("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", r === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", r === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", r === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", r === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", t), ...n, children: [a, jsxs(K.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [jsx(XIcon, { className: "size-4" }), jsx("span", { className: "sr-only", children: "Close" })] })] })] });
}
function hn({ className: t, ...a }) {
  return jsx("div", { "data-slot": "sheet-header", className: f("flex flex-col gap-1.5 p-4", t), ...a });
}
function pn({ className: t, ...a }) {
  return jsx(K.Title, { "data-slot": "sheet-title", className: f("text-foreground font-semibold tracking-tight", t), ...a });
}
function Ii({ className: t, ...a }) {
  return jsx(K.Description, { "data-slot": "sheet-description", className: f("text-muted-foreground text-sm", t), ...a });
}
const Ti = "sidebar_state", Si = 60 * 60 * 24 * 7, ki = "16rem", Pi = "18rem", Ai = "3rem", Ri = "b", fn = j.createContext(null);
function ut() {
  const t = j.useContext(fn);
  if (!t) throw new Error("useSidebar must be used within a SidebarProvider.");
  return t;
}
const gn = j.forwardRef(({ defaultOpen: t = true, open: a, onOpenChange: r, className: n, style: i, children: o, ...l }, c) => {
  const p = ma(), [u, g] = j.useState(false), [d, h] = j.useState(t), x = a != null ? a : d, m = j.useCallback((I) => {
    const _ = typeof I == "function" ? I(x) : I;
    r ? r(_) : h(_), document.cookie = `${Ti}=${_}; path=/; max-age=${Si}`;
  }, [r, x]), y = j.useCallback(() => p ? g((I) => !I) : m((I) => !I), [p, m, g]);
  j.useEffect(() => {
    const I = (_) => {
      _.key === Ri && (_.metaKey || _.ctrlKey) && (_.preventDefault(), y());
    };
    return window.addEventListener("keydown", I), () => window.removeEventListener("keydown", I);
  }, [y]);
  const w = x ? "expanded" : "collapsed", N = j.useMemo(() => ({ state: w, open: x, setOpen: m, isMobile: p, openMobile: u, setOpenMobile: g, toggleSidebar: y }), [w, x, m, p, u, g, y]);
  return jsx(fn.Provider, { value: N, children: jsx(dt, { delayDuration: 0, children: jsx("div", { "data-slot": "sidebar-wrapper", style: { "--sidebar-width": ki, "--sidebar-width-icon": Ai, ...i }, className: f("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", n), ref: c, ...l, children: o }) }) });
});
gn.displayName = "SidebarProvider";
function Ei({ side: t = "left", variant: a = "sidebar", collapsible: r = "offcanvas", className: n, children: i, ...o }) {
  const { isMobile: l, state: c, openMobile: p, setOpenMobile: u } = ut();
  return r === "none" ? jsx("div", { "data-slot": "sidebar", className: f("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", n), ...o, children: i }) : l ? jsxs(un, { open: p, onOpenChange: u, ...o, children: [jsxs(hn, { className: "sr-only", children: [jsx(pn, { children: "Sidebar" }), jsx(Ii, { children: "Displays the mobile sidebar." })] }), jsx(mn, { "data-sidebar": "sidebar", "data-slot": "sidebar", "data-mobile": "true", className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden", style: { "--sidebar-width": Pi }, side: t, children: jsx("div", { className: "flex h-full w-full flex-col", children: i }) })] }) : jsxs("div", { className: "group peer text-sidebar-foreground hidden md:block", "data-state": c, "data-collapsible": c === "collapsed" ? r : "", "data-variant": a, "data-side": t, "data-slot": "sidebar", children: [jsx("div", { className: f("relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", a === "floating" || a === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)") }), jsx("div", { className: f("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", t === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", a === "floating" || a === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", n), ...o, children: jsx("div", { "data-sidebar": "sidebar", className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm", children: i }) })] });
}
function ji({ className: t, onClick: a, ...r }) {
  const { toggleSidebar: n } = ut();
  return jsxs($, { "data-sidebar": "trigger", "data-slot": "sidebar-trigger", variant: "ghost", size: "icon", className: f("h-7 w-7", t), onClick: (i) => {
    a == null ? void 0 : a(i), n();
  }, ...r, children: [jsx(PanelLeftIcon, {}), jsx("span", { className: "sr-only", children: "Toggle Sidebar" })] });
}
function _i({ className: t, ...a }) {
  const { toggleSidebar: r } = ut();
  return jsx("button", { "data-sidebar": "rail", "data-slot": "sidebar-rail", "aria-label": "Toggle Sidebar", tabIndex: -1, onClick: r, title: "Toggle Sidebar", className: f("hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", t), ...a });
}
function Oi({ className: t, ...a }) {
  return jsx("main", { "data-slot": "sidebar-inset", className: f("bg-background relative flex min-h-svh flex-1 flex-col", "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", t), ...a });
}
function Mi({ className: t, ...a }) {
  return jsx("div", { "data-slot": "sidebar-header", "data-sidebar": "header", className: f("flex flex-col gap-2 p-2", t), ...a });
}
function zi({ className: t, ...a }) {
  return jsx("div", { "data-slot": "sidebar-footer", "data-sidebar": "footer", className: f("flex flex-col gap-2 p-2", t), ...a });
}
function $i({ className: t, ...a }) {
  return jsx(dn, { "data-slot": "sidebar-separator", "data-sidebar": "separator", className: f("bg-sidebar-border mx-2 w-auto", t), ...a });
}
function Li({ className: t, ...a }) {
  return jsx("div", { "data-slot": "sidebar-content", "data-sidebar": "content", className: f("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", t), ...a });
}
function tt({ className: t, ...a }) {
  return jsx("div", { "data-slot": "sidebar-group", "data-sidebar": "group", className: f("relative flex w-full min-w-0 flex-col p-2", t), ...a });
}
function at({ className: t, asChild: a = false, ...r }) {
  return jsx(a ? Slot : "div", { "data-slot": "sidebar-group-label", "data-sidebar": "group-label", className: f("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", t), ...r });
}
function Fe({ className: t, ...a }) {
  return jsx("ul", { "data-slot": "sidebar-menu", "data-sidebar": "menu", className: f("flex w-full min-w-0 flex-col gap-1", t), ...a });
}
function Ae({ className: t, ...a }) {
  return jsx("li", { "data-slot": "sidebar-menu-item", "data-sidebar": "menu-item", className: f("group/menu-item relative", t), ...a });
}
const Di = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", { variants: { variant: { default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground", outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]" }, size: { default: "h-8 text-sm", sm: "h-7 text-xs", lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!" } }, defaultVariants: { variant: "default", size: "default" } });
function Re({ asChild: t = false, isActive: a = false, variant: r = "default", size: n = "default", tooltip: i, className: o, ...l }) {
  const c = t ? Slot : "button", { isMobile: p, state: u } = ut(), g = jsx(c, { "data-slot": "sidebar-menu-button", "data-sidebar": "menu-button", "data-size": n, "data-active": a, className: f(Di({ variant: r, size: n }), o), ...l });
  return i ? (typeof i == "string" && (i = { children: i }), jsxs(_e, { children: [jsx(Oe, { asChild: true, children: g }), jsx(Me, { side: "right", align: "center", hidden: u !== "collapsed" || p, ...i })] })) : g;
}
const St = atom([]), kt = atom(), Pt = atom(), pa = atom([]), Le = atom(), Ui = atom({});
atom(null);
atom("projects");
const Fi = atom({});
atom({});
function Bi({ items: t, className: a }) {
  const r = useNavigate(), [n, i] = useAtom(Ui), [o, l] = useAtom(Fi), [c, p] = j.useState(false), [u, g] = j.useState(null), [d, h] = useAtom(kt), [x, m] = useAtom(Pt), [y, w] = useAtom(Le);
  j.useEffect(() => {
    if (x) {
      const b = t.find((R) => {
        var _a2;
        return (_a2 = R.projects) == null ? void 0 : _a2.find((O) => O.id === x);
      });
      b && ((!d || d !== b.id) && h(b.id), i((R) => ({ ...R, [b.id]: true })));
    }
  }, [x, t, h, d]), j.useEffect(() => {
    var _a2;
    if (y == null ? void 0 : y.projectId) {
      const b = y.projectId;
      let R;
      for (const O of t) {
        const q = (_a2 = O.projects) == null ? void 0 : _a2.find((Z) => Z.id === b);
        if (q) {
          R = q, (!d || d !== O.id) && h(O.id), i((Z) => ({ ...Z, [O.id]: true }));
          break;
        }
      }
      R && (!x || x !== R.id) && m(R.id), R && l((O) => ({ ...O, [R.id]: true }));
    }
  }, [y, t, h, m, d, x]);
  const N = (b) => {
    i((R) => ({ ...R, [b.id]: !R[b.id] })), (!d || d !== b.id) && (h(b.id), x && x !== b.id && (m(void 0), w(void 0)));
  }, I = (b) => {
    h(b.id), x && x !== b.id && (m(void 0), w(void 0)), r({ to: "/teamspace/$teamspaceId", params: { teamspaceId: b.id }, viewTransition: true });
  }, _ = (b) => {
    if (l((R) => ({ ...R, [b.id]: !R[b.id] })), !d || d !== b.teamspaceId) {
      const R = t.find((O) => O.id === b.teamspaceId);
      R && (h(R.id), i((O) => ({ ...O, [R.id]: true })));
    }
    m(b.id), y && y.projectId !== b.id && w(void 0), r({ to: "/project/$projectId", params: { projectId: b.id }, viewTransition: true });
  }, M = (b) => {
    var _a2;
    if (b.projectId) {
      let R;
      for (const O of t) {
        const q = (_a2 = O.projects) == null ? void 0 : _a2.find((Z) => Z.id === b.projectId);
        if (q) {
          R = q, (!d || d !== O.id) && h(O.id);
          break;
        }
      }
      R && m(R.id);
    }
    w(b), r({ to: "/chat/$chatroomId", params: { chatroomId: b.id }, viewTransition: true });
  }, S = () => {
    p(!c);
  }, L = (b) => {
    g(b.id), p(false), I(b);
  }, C = (b, R = 2) => {
    const O = (y == null ? void 0 : y.id) === b.id, q = R * 12;
    return jsx("div", { children: jsx(Ae, { children: jsxs(Re, { className: "w-full justify-start hover:bg-accent/50", onClick: () => M(b), style: { paddingLeft: `${q}px` }, children: [jsx(MessageSquare, { className: `mr-2 h-4 w-4 ${O ? "text-orange-500" : ""}` }), b.name.length > 20 ? b.name.slice(0, 20) + "..." : b.name] }) }) }, b.id);
  }, P = (b, R = 1) => {
    const O = o[b.id], q = x === b.id, Z = b.chatrooms && b.chatrooms.length > 0, De = R * 12;
    return jsxs("div", { children: [jsx(Ae, { children: jsxs(Re, { className: "w-full justify-start hover:bg-accent/50", onClick: () => _(b), style: { paddingLeft: `${De}px` }, children: [O && Z ? jsx(FolderOpen, { className: `mr-2 h-5 w-5 ${q ? "text-emerald-500" : ""}` }) : jsx(Folder, { className: `mr-2 h-5 w-5 ${q ? "text-emerald-500" : ""}` }), b.name.length > 20 ? b.name.slice(0, 20) + "..." : b.name] }) }), Z && O && jsx("div", { children: b.chatrooms.map((Ne) => C(Ne, R + 1)) })] }, b.id);
  }, k = (b, R = 0, O = false) => {
    const q = n[b.id], Z = d === b.id || O, De = b.projects && b.projects.length > 0, Ne = R === 0 ? 0 : R * 12;
    return jsxs("div", { children: [jsx(Ae, { children: jsxs(Re, { className: "w-full justify-start hover:bg-accent/50", onClick: () => {
      I(b), N(b);
    }, style: { paddingLeft: Ne ? `${Ne}px` : void 0 }, children: [q ? jsx(BriefcaseIcon, { className: `mr-2 h-5 w-5 ${Z ? "text-indigo-500" : ""}` }) : jsx(Briefcase, { className: `mr-2 h-5 w-5 ${Z ? "text-indigo-500" : ""}` }), b.name.length > 20 ? b.name.slice(0, 20) + "..." : b.name] }) }), De && q && jsx("div", { children: b.projects.map((ke) => P(ke, R + 1)) })] }, b.id);
  }, E = t.slice(0, 4), B = t.length > 4 ? t.slice(4) : [], D = u ? t.find((b) => b.id === u) : null;
  return jsxs("div", { className: a, children: [E.map((b) => k(b)), D && k(D, 0, true), B.length > 0 && jsxs("div", { children: [jsx(Ae, { children: jsxs(Re, { className: "w-full justify-start mt-1 text-muted-foreground", onClick: S, children: [c ? jsx(ChevronUp, { className: "mr-2 h-4 w-4" }) : jsx(ChevronDown, { className: "mr-2 h-4 w-4" }), "Show ", B.length, " more"] }) }), c && jsx("div", { className: "pl-2 py-1 space-y-1 border-l-2 border-muted ml-2 mt-1", children: B.map((b) => jsx(Ae, { children: jsxs(Re, { className: "w-full justify-start text-sm hover:bg-accent/50", onClick: () => L(b), children: [jsx(Briefcase, { className: `mr-2 h-4 w-4 ${d === b.id ? "text-primary" : ""}` }), b.name] }) }, b.id)) })] })] });
}
const Gi = "/_build/assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp", Hi = K.Root, Vi = K.Trigger, Wi = K.Portal, qi = K.Close, bn = j.forwardRef(({ className: t, ...a }, r) => jsx(K.Overlay, { ref: r, className: f("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", t), ...a }));
bn.displayName = K.Overlay.displayName;
const vn = j.forwardRef(({ className: t, children: a, ...r }, n) => jsxs(Wi, { children: [jsx(bn, {}), jsxs(K.Content, { ref: n, className: f("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", t), ...r, children: [a, jsxs(K.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [jsx(X, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Close" })] })] })] }));
vn.displayName = K.Content.displayName;
const yn = ({ className: t, ...a }) => jsx("div", { className: f("flex flex-col space-y-1.5 text-center sm:text-left", t), ...a });
yn.displayName = "DialogHeader";
const wn = ({ className: t, ...a }) => jsx("div", { className: f("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t), ...a });
wn.displayName = "DialogFooter";
const xn = j.forwardRef(({ className: t, ...a }, r) => jsx(K.Title, { ref: r, className: f("text-lg font-semibold leading-none tracking-tight", t), ...a }));
xn.displayName = K.Title.displayName;
const Nn = j.forwardRef(({ className: t, ...a }, r) => jsx(K.Description, { ref: r, className: f("text-sm text-muted-foreground", t), ...a }));
Nn.displayName = K.Description.displayName;
const Xt = j.forwardRef(({ className: t, ...a }, r) => jsx(Ut.Root, { ref: r, className: f("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", t), ...a, children: jsx(Ut.Indicator, { className: f("flex items-center justify-center text-current"), children: jsx(Check, { className: "h-4 w-4" }) }) }));
Xt.displayName = Ut.Root.displayName;
const Cn = j.forwardRef(({ className: t, ...a }, r) => jsx(Command, { ref: r, className: f("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", t), ...a }));
Cn.displayName = Command.displayName;
const In = j.forwardRef(({ className: t, ...a }, r) => jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), jsx(Command.Input, { ref: r, className: f("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", t), ...a })] }));
In.displayName = Command.Input.displayName;
const Tn = j.forwardRef(({ className: t, ...a }, r) => jsx(Command.List, { ref: r, className: f("max-h-[300px] overflow-y-auto overflow-x-hidden", t), ...a }));
Tn.displayName = Command.List.displayName;
const Sn = j.forwardRef((t, a) => jsx(Command.Empty, { ref: a, className: "py-6 text-center text-sm", ...t }));
Sn.displayName = Command.Empty.displayName;
const kn = j.forwardRef(({ className: t, ...a }, r) => jsx(Command.Group, { ref: r, className: f("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", t), ...a }));
kn.displayName = Command.Group.displayName;
const Ji = j.forwardRef(({ className: t, ...a }, r) => jsx(Command.Separator, { ref: r, className: f("-mx-1 h-px bg-border", t), ...a }));
Ji.displayName = Command.Separator.displayName;
const Pn = j.forwardRef(({ className: t, ...a }, r) => jsx(Command.Item, { ref: r, className: f("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", t), ...a }));
Pn.displayName = Command.Item.displayName;
function qe({ className: t, ...a }) {
  return jsx(da.Root, { "data-slot": "avatar", className: f("relative flex size-8 shrink-0 overflow-hidden rounded-full", t), ...a });
}
function Aa({ className: t, ...a }) {
  return jsx(da.Image, { "data-slot": "avatar-image", className: f("aspect-square size-full", t), ...a });
}
function Ra({ className: t, ...a }) {
  return jsx(da.Fallback, { "data-slot": "avatar-fallback", className: f("bg-muted flex size-full items-center justify-center rounded-full", t), ...a });
}
function Ki() {
  const t = useNavigate(), [a, r] = useState(false), n = useSetAtom(St), i = useSetAtom(kt), o = useSetAtom(Pt), l = Ka(), [c, p] = useState(false), [u, g] = useState(1), d = [{ id: 1, label: "Teamspace Details" }, { id: 2, label: "Teamspace Members" }, { id: 3, label: "Project Details" }, { id: 4, label: "Project Members" }], [h, x] = useState({ name: "", description: "", context: "" }), [m, y] = useState({ name: "Default Project", description: "", context: "", isPrivate: false }), [w, N] = useState([]), [I, _] = useState([]), [M, S] = useState("CONTRIBUTOR"), [L, C] = useState(""), [P, k] = useState([]), [E, B] = useState(false), D = (v) => {
    C(v), B(true);
    const { data: F } = l;
    if (!F || !F.members) {
      k([]), B(false);
      return;
    }
    Te().auth.handler().then(({ user: Y }) => {
      const ne = Y == null ? void 0 : Y.email;
      setTimeout(() => {
        if (v.trim() === "") k([]);
        else try {
          console.log("Organization members:", F.members);
          const oe = F.members.filter((X) => {
            if (!(X == null ? void 0 : X.user)) return false;
            const de = X.user.name && X.user.name.toLowerCase().includes(v.toLowerCase()), Ue = X.user.email && X.user.email.toLowerCase().includes(v.toLowerCase()), Ce = ne && X.user.email === ne;
            return (de || Ue) && !Ce;
          }).map((X) => (console.log("Processing member:", X), { memberId: X.id, userId: X.user.id, name: X.user.name || "Unknown", email: X.user.email || "", image: X.user.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(X.user.name || "Unknown")}`, role: "CONTRIBUTOR" }));
          console.log("Search results:", oe), k(oe);
        } catch (oe) {
          console.error("Error filtering organization members:", oe), k([]);
        }
        B(false);
      }, 300);
    }).catch((Y) => {
      console.error("Error getting current user:", Y), B(false), k([]);
    });
  }, b = (v) => {
    if (console.log("Adding user to teamspace:", v), w.some((Y) => Y.email === v.email)) {
      toast.error("This user has already been added");
      return;
    }
    const F = { id: v4(), userId: v.userId, role: M, invitedByUserId: "", teamspaceId: "", email: v.email, name: v.name || "Unknown", image: v.image };
    console.log("Created new teamspace member:", F), N((Y) => [...Y, F]), C(""), k([]);
  }, R = (v) => {
    x({ ...h, [v.target.name]: v.target.value });
  }, O = (v) => {
    y({ ...m, [v.target.name]: v.target.value });
  }, q = (v) => {
    y({ ...m, isPrivate: v });
  }, Z = (v) => {
    v && (N(w.filter((F) => F.id !== v)), _(I.filter((F) => F.id !== v)));
  }, De = () => {
    if (u === 1 && !h.name.trim()) {
      toast.error("Teamspace name is required");
      return;
    }
    if (u === 2 && console.log("Teamspace members before going to step 3:", w), u === 3 && !m.name.trim()) {
      toast.error("Project name is required");
      return;
    }
    g(u + 1);
  }, Ne = () => {
    g(u - 1);
  }, ke = (v) => {
    switch (v) {
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
    u === 4 && (console.log("Entering step 4 - Project Members selection"), _([]));
  }, [u]);
  const ht = (v, F) => {
    if (console.log("Toggle project member:", v.name, F), F) {
      const Y = { id: v.id, projectId: "", userId: v.userId, role: v.role, invitedByUserId: "", email: v.email, name: v.name, image: v.image };
      console.log("Adding to project members:", Y), _((ne) => [...ne, Y]);
    } else console.log("Removing from project members:", v.id), _((Y) => Y.filter((ne) => ne.id !== v.id));
  }, Et = async (v) => {
    if (v.preventDefault(), !a) {
      r(true);
      try {
        const F = Te(), { session: Y, userID: ne, user: oe } = await F.auth.handler();
        console.log("Current user:", { userID: ne, email: oe.email }), console.log("All teamspace members before filtering:", w);
        const X = w.filter((ee) => ee.email && ee.email !== oe.email).map((ee) => (console.log("Adding member to teamspace API request:", ee), { userId: ee.userId, role: ee.role, invitedByUserId: ne, teamspaceId: "" }));
        console.log("Final teamspace members list for API:", X), console.log("Creating teamspace:", h.name);
        const { data: de } = await F.chatrooms.createTeamspace({ name: h.name, description: h.description, context: h.context, creatorId: ne, members: X });
        console.log("Teamspace created:", de), console.log("All project members before filtering:", I);
        const Ue = I.filter((ee) => ee.email && ee.email !== oe.email).map((ee) => (console.log("Adding member to project API request:", ee), { projectId: "", userId: ee.userId, role: ee.role, invitedByUserId: ne }));
        console.log("Final project members list for API:", Ue), console.log("Creating project:", m.name);
        const { data: Ce } = await F.chatrooms.createProject({ teamspaceId: de.id, name: m.name, description: m.description, context: m.context, creatorId: ne, isPrivate: m.isPrivate, members: Ue });
        console.log("Project created:", Ce), de.projects.push(Ce), n((ee) => [...ee, de]), i(de.id), o(Ce.id), toast.success("Teamspace and project created successfully"), p(false), setTimeout(() => {
          t({ to: "/teamspace/$teamspaceId", params: { teamspaceId: de.id }, viewTransition: true });
        }, 100);
      } catch (F) {
        console.error("Error creating teamspace:", F), toast.error("Failed to create teamspace");
      } finally {
        r(false);
      }
    }
  }, pt = () => {
    g(1), x({ name: "", description: "", context: "" }), y({ name: "Default Project", description: "", context: "", isPrivate: false }), N([]), _([]), S("CONTRIBUTOR"), C(""), k([]), B(false);
  };
  useEffect(() => {
    c || pt();
  }, [c]);
  const jt = () => {
    switch (u) {
      case 1:
        return jsxs("div", { className: "space-y-4", children: [jsxs("h3", { className: "font-medium text-lg flex items-center", children: [jsx("div", { className: "flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 mr-2", children: jsx("span", { className: "text-xs font-semibold", children: "1" }) }), "Teamspace Details"] }), jsxs("div", { className: "grid gap-3", children: [jsxs("div", { className: "grid gap-2", children: [jsxs(Q, { htmlFor: "teamspace-name", children: ["Teamspace Name ", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(ie, { id: "teamspace-name", name: "name", value: h.name, onChange: R, placeholder: "e.g. Marketing Team", required: true })] }), jsxs("div", { className: "grid gap-2", children: [jsx(Q, { htmlFor: "teamspace-description", children: "Description" }), jsx(Ee, { id: "teamspace-description", name: "description", value: h.description, onChange: R, placeholder: "What is this teamspace for?" })] }), jsxs("div", { className: "grid gap-2", children: [jsx(Q, { htmlFor: "teamspace-context", children: "Context" }), jsx(Ee, { id: "teamspace-context", name: "context", value: h.context, onChange: R, placeholder: "Any additional context for AI assistants" })] })] })] });
      case 2:
        return jsxs("div", { className: "space-y-4", children: [jsxs("h3", { className: "font-medium text-lg flex items-center", children: [jsx("div", { className: "flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 mr-2", children: jsx("span", { className: "text-xs font-semibold", children: "2" }) }), "Teamspace Members"] }), jsxs("div", { className: "space-y-4", children: [jsxs("div", { className: "flex items-center justify-between", children: [jsx(Q, { children: "Search for users" }), jsxs("div", { className: "flex items-center gap-2", children: [jsx(Q, { htmlFor: "member-role", className: "text-sm", children: "Role:" }), jsxs("select", { id: "member-role", value: M, onChange: (v) => S(v.target.value), className: "px-3 py-1 text-sm border rounded-md", children: [jsx("option", { value: "OWNER", children: "Owner" }), jsx("option", { value: "ADMIN", children: "Admin" }), jsx("option", { value: "CONTRIBUTOR", children: "Contributor" }), jsx("option", { value: "VIEWER", children: "Viewer" })] })] })] }), jsx("div", { className: "relative", children: jsxs(Cn, { className: "rounded-lg border shadow-md", children: [jsx(In, { placeholder: "Search users by name or email...", value: L, onValueChange: D }), jsx(Tn, { children: E ? jsx("div", { className: "py-6 text-center text-sm", children: "Searching..." }) : P.length === 0 && L ? jsx(Sn, { children: "No users found." }) : jsx(kn, { heading: "Users", children: jsx(We, { className: "h-[200px]", children: P.map((v) => jsxs(Pn, { value: v.email, className: "flex items-center justify-between cursor-pointer", children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx(qe, { children: jsx("img", { src: v.image, alt: v.name }) }), jsxs("div", { children: [jsx("p", { className: "text-sm font-medium", children: v.name }), jsx("p", { className: "text-xs text-muted-foreground", children: v.email })] })] }), jsx($, { type: "button", variant: "ghost", size: "icon", onClick: () => b(v), children: jsx(PlusCircle, { className: "h-4 w-4" }) })] }, v.memberId)) }) }) })] }) }), w.length > 0 && jsxs("div", { className: "mt-4", children: [jsx("h4", { className: "text-sm font-medium mb-2", children: "Selected Members" }), jsx(We, { className: "h-[200px]", children: jsx("div", { className: "border rounded-md divide-y", children: w.map((v) => jsxs("div", { className: "flex items-center justify-between p-3", children: [jsxs("div", { className: "flex items-center gap-3", children: [v.image && jsx(qe, { className: "h-8 w-8", children: jsx("img", { src: v.image, alt: v.name || v.email || "" }) }), jsxs("div", { children: [v.name && jsx("p", { className: "text-sm font-medium", children: v.name }), jsx("p", { className: "text-xs text-muted-foreground", children: v.email })] }), jsx(it, { className: ke(v.role), children: v.role })] }), jsxs($, { variant: "ghost", size: "sm", onClick: () => Z(v.id), className: "h-8 w-8 p-0", children: [jsx(X, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Remove" })] })] }, v.id)) }) })] }), w.length === 0 && jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "No members added yet. You will be added as an Owner automatically." })] })] });
      case 3:
        return jsxs("div", { className: "space-y-4", children: [jsxs("h3", { className: "font-medium text-lg flex items-center", children: [jsx("div", { className: "flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 mr-2", children: jsx("span", { className: "text-xs font-semibold", children: "3" }) }), "Project Details"] }), jsxs("div", { className: "grid gap-3", children: [jsxs("div", { className: "grid gap-2", children: [jsxs(Q, { htmlFor: "project-name", children: ["Project Name ", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(ie, { id: "project-name", name: "name", value: m.name, onChange: O, placeholder: "e.g. General", required: true })] }), jsxs("div", { className: "grid gap-2", children: [jsx(Q, { htmlFor: "project-description", children: "Description" }), jsx(Ee, { id: "project-description", name: "description", value: m.description, onChange: O, placeholder: "What is this project about?" })] }), jsxs("div", { className: "grid gap-2", children: [jsx(Q, { htmlFor: "project-context", children: "Context" }), jsx(Ee, { id: "project-context", name: "context", value: m.context, onChange: O, placeholder: "Any specific context for this project" })] }), jsxs("div", { className: "flex items-center space-x-2 mt-2", children: [jsx(Xt, { id: "isPrivate", checked: m.isPrivate, onCheckedChange: q }), jsxs("div", { className: "grid gap-1.5 leading-none", children: [jsx(Q, { htmlFor: "isPrivate", className: "text-sm font-medium leading-none flex items-center", children: "Make project private" }), jsx("p", { className: "text-xs text-muted-foreground", children: "Private projects are only visible to invited members" })] })] })] })] });
      case 4:
        return jsxs("div", { className: "space-y-4", children: [jsxs("h3", { className: "font-medium text-lg flex items-center", children: [jsx("div", { className: "flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 mr-2", children: jsx("span", { className: "text-xs font-semibold", children: "4" }) }), "Project Members"] }), jsx("p", { className: "text-sm text-muted-foreground", children: "Select which teamspace members to include in this project:" }), jsxs("div", { className: "text-xs text-muted-foreground mb-2", children: ["Available members: ", w.length, ", Selected for project: ", I.length] }), w.length > 0 ? jsx(We, { className: "h-[300px] border rounded-md", children: jsx("div", { className: "divide-y", children: w.map((v) => {
          var _a2;
          const F = I.some((Y) => Y.id === v.id);
          return jsx("div", { className: "flex items-center justify-between p-3", children: jsxs("div", { className: "flex items-center gap-3", children: [jsx(Xt, { id: `project-member-${v.id}`, checked: F, onCheckedChange: (Y) => {
            ht(v, !!Y);
          } }), jsxs("div", { className: "flex items-center gap-2", children: [v.image && jsx(qe, { className: "h-8 w-8", children: jsx("img", { src: v.image, alt: v.name || v.email || "" }) }), jsxs("div", { children: [v.name && jsx("p", { className: "text-sm font-medium", children: v.name }), jsx("p", { className: "text-xs text-muted-foreground", children: v.email }), jsxs("p", { className: "text-xs text-muted-foreground", children: ["User ID: ", (_a2 = v.userId) == null ? void 0 : _a2.slice(0, 6), "..."] })] })] }), jsx(it, { className: ke(v.role), children: v.role })] }) }, v.id);
        }) }) }) : jsx("p", { className: "text-sm", children: "No teamspace members to select from. You will be added as an Owner automatically." })] });
      default:
        return null;
    }
  }, Ze = () => jsx("div", { className: "flex justify-center mb-6", children: d.map((v, F) => jsxs("div", { className: "flex items-center", children: [jsx("div", { className: `flex items-center justify-center w-8 h-8 rounded-full border-2 ${v.id === u ? v.id <= 2 ? "border-indigo-600 bg-indigo-600 text-white" : "border-emerald-600 bg-emerald-600 text-white" : v.id < u ? v.id <= 2 ? "border-indigo-600 bg-indigo-100 text-indigo-600" : "border-emerald-600 bg-emerald-100 text-emerald-600" : "border-gray-300 bg-white text-gray-500"}`, children: v.id < u ? jsx(Check, { className: "w-4 h-4" }) : jsx("span", { className: "text-xs", children: v.id }) }), F < d.length - 1 && jsx("div", { className: `w-10 h-1 ${v.id < u ? v.id <= 1 ? "bg-indigo-600" : "bg-emerald-600" : "bg-gray-300"}` })] }, v.id)) });
  return jsx(dt, { children: jsxs(_e, { children: [jsx(Oe, { asChild: true, children: jsxs(Hi, { open: c, onOpenChange: (v) => {
    a && !v || p(v);
  }, children: [jsx(Vi, { asChild: true, children: jsxs($, { variant: "ghost", size: "icon", className: "h-6 w-6 p-0 ml-1 rounded-full hover:cursor-pointer", children: [jsx(Plus, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Create Teamspace" })] }) }), jsx(vn, { className: "sm:max-w-[600px]", children: jsxs("form", { onSubmit: (v) => {
    v.preventDefault(), u === 4 && Et(v);
  }, children: [jsxs(yn, { children: [jsx("div", { className: `h-1.5 w-full absolute top-0 left-0 rounded-t-lg ${u <= 2 ? "bg-indigo-500" : "bg-emerald-500"}` }), jsx(xn, { className: "text-xl mt-2", children: "Create New Teamspace" }), jsx(Nn, { children: "Create a teamspace with a default project to organize your work." })] }), Ze(), jsx("div", { className: "py-4", children: jt() }), jsxs(wn, { className: "flex justify-between", children: [jsx("div", { children: u > 1 && jsxs($, { type: "button", variant: "outline", onClick: Ne, disabled: a, children: [jsx(ChevronLeft, { className: "h-4 w-4 mr-2" }), "Back"] }) }), jsxs("div", { className: "flex gap-2", children: [jsx(qi, { asChild: true, children: jsx($, { variant: "outline", type: "button", disabled: a, onClick: pt, children: "Cancel" }) }), u < 4 ? jsxs($, { type: "button", onClick: De, className: `${u <= 2 ? "bg-indigo-600 hover:bg-indigo-700" : "bg-emerald-600 hover:bg-emerald-700"}`, disabled: a, children: ["Next", jsx(ChevronRight, { className: "h-4 w-4 ml-2" })] }) : jsx($, { type: "button", onClick: (v) => Et(v), className: "bg-emerald-600 hover:bg-emerald-700", disabled: a, children: a ? "Creating..." : "Create Teamspace & Project" })] })] })] }) })] }) }), jsx(Me, { children: jsx("p", { children: "Create Teamspace" }) })] }) });
}
function fa({ ...t }) {
  return jsx(re.Root, { "data-slot": "dropdown-menu", ...t });
}
function Yi({ ...t }) {
  return jsx(re.Portal, { "data-slot": "dropdown-menu-portal", ...t });
}
function ga({ ...t }) {
  return jsx(re.Trigger, { "data-slot": "dropdown-menu-trigger", ...t });
}
function ba({ className: t, sideOffset: a = 4, ...r }) {
  return jsx(re.Portal, { children: jsx(re.Content, { "data-slot": "dropdown-menu-content", sideOffset: a, className: f("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md", t), ...r }) });
}
function Qt({ ...t }) {
  return jsx(re.Group, { "data-slot": "dropdown-menu-group", ...t });
}
function he({ className: t, inset: a, variant: r = "default", ...n }) {
  return jsx(re.Item, { "data-slot": "dropdown-menu-item", "data-inset": a, "data-variant": r, className: f("focus:bg-accent hover:cursor-pointer focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t), ...n });
}
function Xi({ className: t, children: a, checked: r, ...n }) {
  return jsxs(re.CheckboxItem, { "data-slot": "dropdown-menu-checkbox-item", className: f("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t), checked: r, ...n, children: [jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: jsx(re.ItemIndicator, { children: jsx(CheckIcon, { className: "size-4" }) }) }), a] });
}
function Qi({ className: t, inset: a, ...r }) {
  return jsx(re.Label, { "data-slot": "dropdown-menu-label", "data-inset": a, className: f("px-2 py-1.5 text-sm font-semibold data-[inset]:pl-8", t), ...r });
}
function yt({ className: t, ...a }) {
  return jsx(re.Separator, { "data-slot": "dropdown-menu-separator", className: f("bg-border -mx-1 my-1 h-px", t), ...a });
}
function Zi({ ...t }) {
  return jsx(re.Sub, { "data-slot": "dropdown-menu-sub", ...t });
}
function eo({ className: t, inset: a, children: r, ...n }) {
  return jsxs(re.SubTrigger, { "data-slot": "dropdown-menu-sub-trigger", "data-inset": a, className: f("focus:bg-accent hover:cursor-pointer focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8", t), ...n, children: [r, jsx(ChevronRightIcon, { className: "ml-auto size-4" })] });
}
function to({ className: t, ...a }) {
  return jsx(re.SubContent, { "data-slot": "dropdown-menu-sub-content", className: f("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg", t), ...a });
}
const ao = () => {
  const t = useRouter();
  return async () => {
    await Ys(), t.navigate({ to: "/sign-in", reloadDocument: true });
  };
};
function no() {
  const { isMobile: t } = ut(), a = Tt().data, r = ao(), n = a == null ? void 0 : a.user;
  return jsx(Fe, { children: jsx(Ae, { children: jsxs(fa, { children: [jsx(ga, { asChild: true, children: jsxs(Re, { size: "lg", className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground", children: [jsxs(qe, { className: "h-8 w-8 rounded-lg", children: [jsx(Aa, { src: (n == null ? void 0 : n.image) || "", alt: (n == null ? void 0 : n.name) || "" }), jsx(Ra, { className: "rounded-lg", children: "CN" })] }), jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [jsx("span", { className: "truncate font-semibold", children: n == null ? void 0 : n.name }), jsx("span", { className: "truncate text-xs", children: n == null ? void 0 : n.email })] }), jsx(ChevronsUpDown, { className: "ml-auto size-4" })] }) }), jsxs(ba, { className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg", side: t ? "bottom" : "right", align: "start", sideOffset: 4, children: [jsx(Qi, { className: "p-0 font-normal", children: jsxs("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm", children: [jsxs(qe, { className: "h-8 w-8 rounded-lg", children: [jsx(Aa, { src: (n == null ? void 0 : n.image) || "", alt: (n == null ? void 0 : n.name) || "" }), jsx(Ra, { className: "rounded-lg", children: "CN" })] }), jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [jsx("span", { className: "truncate font-semibold", children: n == null ? void 0 : n.name }), jsx("span", { className: "truncate text-xs", children: n == null ? void 0 : n.email })] })] }) }), jsx(yt, {}), jsx(Qt, { children: jsxs(he, { children: [jsx(Sparkles, {}), "Upgrade to Pro"] }) }), jsx(yt, {}), jsxs(Qt, { children: [jsxs(he, { children: [jsx(BadgeCheck, {}), "Account"] }), jsxs(he, { children: [jsx(CreditCard, {}), "Billing"] }), jsxs(he, { children: [jsx(Bell, {}), "Notifications"] })] }), jsx(yt, {}), jsxs(he, { onClick: r, className: "text-red-500 focus:text-red-500", children: [jsx(LogOut, {}), "Log out"] })] })] }) }) });
}
function Mt(t) {
  switch (t) {
    case "OWNER":
      return "ADMIN";
    case "ADMIN":
      return "MANAGER";
    case "CONTRIBUTOR":
      return "PROMPT_AIS";
    case "VIEWER":
      return "READ";
    default:
      return "READ";
  }
}
function ro({ currentUserId: t, project: a, teamspace: r }) {
  const n = [{ chatroomId: "", role: "ADMIN", userId: t }];
  if (a) {
    if (a.members.length < 1) return [];
    a.members.forEach((i) => {
      i.user.id !== t && n.push({ chatroomId: "", role: Mt(i.role), userId: i.user.id });
    }), !a.isPrivate && r && r.members.forEach((i) => {
      n.some((l) => l.userId === i.user.id) || n.push({ chatroomId: "", role: Mt(i.role), userId: i.user.id });
    });
  } else if (r) {
    if (r.members.length < 1) return [];
    r.members.forEach((i) => {
      i.user.id !== t && n.push({ chatroomId: "", role: Mt(i.role), userId: i.user.id });
    });
  }
  return n;
}
function so(t, a = false) {
  return [...t].sort((r, n) => {
    var _a2, _b;
    const i = ((_a2 = r.messages) == null ? void 0 : _a2.length) ? r.messages.reduce((p, u) => {
      const g = new Date(p.createdAt).getTime();
      return new Date(u.createdAt).getTime() > g ? u : p;
    }, r.messages[0]) : null, o = ((_b = n.messages) == null ? void 0 : _b.length) ? n.messages.reduce((p, u) => {
      const g = new Date(p.createdAt).getTime();
      return new Date(u.createdAt).getTime() > g ? u : p;
    }, n.messages[0]) : null, l = i ? new Date(i.createdAt).getTime() : new Date(r.updatedAt || r.createdAt).getTime(), c = o ? new Date(o.createdAt).getTime() : new Date(n.updatedAt || n.createdAt).getTime();
    return a ? l - c : c - l;
  });
}
function zt(t) {
  var _a2;
  return ((_a2 = t.messages) == null ? void 0 : _a2.length) ? new Date(t.messages.reduce((a, r) => new Date(r.createdAt) > new Date(a.createdAt) ? r : a, t.messages[0]).createdAt) : new Date(t.updatedAt);
}
function io(t, a) {
  return t.members.find((r) => r.user.id === a);
}
function oo({ ...t }) {
  const a = useNavigate(), r = useAtomValue(St), n = useAtomValue(pa), [i, o] = useAtom(Le), l = useSetAtom(kt), c = useSetAtom(Pt), p = useMemo(() => so(n || []), [n]), u = useMemo(() => {
    const x = /* @__PURE__ */ new Date(), m = new Date(x.getTime() - 7 * 24 * 60 * 60 * 1e3), y = new Date(x.getTime() - 30 * 24 * 60 * 60 * 1e3), w = p.slice(0, 5), N = p.filter((M) => zt(M) >= m && !w.some((L) => L.id === M.id)).slice(0, 5), I = p.filter((M) => {
      const S = zt(M);
      return S < m && S >= y;
    }).slice(0, 5), _ = p.filter((M) => zt(M) < y).slice(0, 5);
    return { recent: w, previousWeek: N, previousMonth: I, previous: _ };
  }, [p]), g = (x) => {
    var _a2;
    if (o(x), x.projectId) {
      const m = r == null ? void 0 : r.find((y) => {
        var _a3;
        return (_a3 = y.projects) == null ? void 0 : _a3.some((w) => w.id === x.projectId);
      });
      if (m) {
        l(m.id);
        const y = (_a2 = m.projects) == null ? void 0 : _a2.find((w) => w.id === x.projectId);
        y && c(y.id);
      }
    } else l(void 0), c(void 0);
    a({ to: "/chat/$chatroomId", params: { chatroomId: x.id }, viewTransition: true });
  }, d = () => {
    o(void 0), c(void 0), l(void 0), setTimeout(() => {
      a({ to: "/chat", viewTransition: true });
    }, 100);
  }, h = (x) => jsx(Ae, { children: jsx(Re, { className: "max-w-full text-left", onClick: () => g(x), children: jsxs("div", { className: "flex items-center w-full overflow-hidden", children: [jsx(MessageSquare, { className: `h-4 w-4 flex-shrink-0 ${(i == null ? void 0 : i.id) === x.id ? "text-orange-500" : ""}` }), jsx("span", { className: "ml-2 truncate", children: x.name.length > 20 ? x.name.slice(0, 20) + "..." : x.name })] }) }) }, x.id);
  return jsxs(Ei, { className: "border-r-0 overflow-hidden", ...t, children: [jsx(Mi, { children: jsxs("div", { className: "flex items-center justify-between p-2", children: [jsx("button", { className: "flex items-start hover:cursor-pointer", onClick: d, children: jsx("img", { src: Gi, alt: "IntelliOptima", className: "h-8 object-contain object-left" }) }), jsx(dt, { children: jsxs(_e, { children: [jsx(Oe, { asChild: true, children: jsxs($, { size: "icon", variant: "ghost", onClick: d, children: [jsx(SquarePen, { className: "h-5 w-5" }), jsx("span", { className: "sr-only", children: "New Chat" })] }) }), jsx(Me, { children: jsx("p", { children: "New Chat" }) })] }) })] }) }), jsx(Li, { className: "overflow-hidden", children: jsxs("div", { className: "flex flex-col gap-4 overflow-hidden", children: [jsxs(tt, { children: [jsxs("div", { className: "flex items-center justify-between", children: [jsx(at, { children: "Teamspaces" }), jsx(Ki, {})] }), jsx(Fe, { children: jsx(Bi, { items: r }) })] }), jsx($i, {}), jsxs(tt, { children: [jsx(at, { children: "Recent" }), jsx(Fe, { children: u.recent.map(h) })] }), u.previousWeek.length > 0 && jsxs(tt, { children: [jsx(at, { children: "Previous 7 Days" }), jsx(Fe, { children: u.previousWeek.map(h) })] }), u.previousMonth.length > 0 && jsxs(tt, { children: [jsx(at, { children: "Previous 30 Days" }), jsx(Fe, { children: u.previousMonth.map(h) })] }), u.previous.length > 0 && jsxs(tt, { children: [jsx(at, { children: "Previous" }), jsx(Fe, { children: u.previous.map(h) })] }), !p.length && jsx("div", { className: "px-4 py-3 text-sm text-muted-foreground", children: "No recent chats. Start a new conversation using the button above." })] }) }), jsx(_i, {}), jsx(zi, { className: "flex items-center", children: jsx(no, {}) })] });
}
function lo({ ...t }) {
  return jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...t });
}
function co({ className: t, ...a }) {
  return jsx("ol", { "data-slot": "breadcrumb-list", className: f("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", t), ...a });
}
function uo({ className: t, ...a }) {
  return jsx("li", { "data-slot": "breadcrumb-item", className: f("inline-flex items-center gap-1.5", t), ...a });
}
function mo({ className: t, ...a }) {
  return jsx("span", { "data-slot": "breadcrumb-page", role: "link", "aria-disabled": "true", "aria-current": "page", className: f("text-foreground font-normal", t), ...a });
}
const ho = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-building-2'%3e%3cpath%20d='M6%2022V4a2%202%200%200%201%202-2h8a2%202%200%200%201%202%202v18Z'/%3e%3cpath%20d='M6%2012H4a2%202%200%200%200-2%202v6a2%202%200%200%200%202%202h2'/%3e%3cpath%20d='M18%209h2a2%202%200%200%201%202%202v9a2%202%200%200%201-2%202h-2'/%3e%3cpath%20d='M10%206h4'/%3e%3cpath%20d='M10%2010h4'/%3e%3cpath%20d='M10%2014h4'/%3e%3cpath%20d='M10%2018h4'/%3e%3c/svg%3e", po = () => {
  var _a2;
  const { activeOrganization: t, changeActiveOrganization: a } = ha(), { data: r } = Ja(), n = (_a2 = Tt().data) == null ? void 0 : _a2.user, i = t == null ? void 0 : t.members.some((l) => l.user.email === (n == null ? void 0 : n.email) && (l.role === "owner" || l.role === "admin")), o = async (l) => {
    await a(l);
  };
  return jsx("div", { className: "flex items-center gap-4", children: jsxs(fa, { children: [jsx(ga, { asChild: true, children: jsxs($, { variant: "ghost", className: "flex items-center gap-2 p-1", children: [jsx(qe, { className: "h-8 w-8", children: jsx(AvatarImage, { src: (t == null ? void 0 : t.logo) || ho, alt: n == null ? void 0 : n.name, className: "h-8 w-8" }) }), t && jsxs("div", { className: "flex items-center gap-1", children: [jsx("span", { className: "", children: t.name }), jsx(ChevronDown, { className: "h-4 w-4" })] })] }) }), jsx(ba, { align: "end", className: "w-56", children: jsxs(Qt, { children: [jsxs(Zi, { children: [jsx(eo, { children: jsxs(Link, { className: "flex", to: "/organizations", children: [jsx(Factory, { className: "mr-2 h-4 w-4" }), jsx("span", { children: "Organizations" })] }) }), jsx(Yi, { children: jsxs(to, { children: [r && r.map((l) => jsx(he, { onClick: () => o(l.id), className: l.id === (t == null ? void 0 : t.id) ? "bg-accent" : "", children: l.name }, l.id)), jsx(yt, {}), jsx(he, { asChild: true, children: jsx(Link, { to: "/organizations", children: "Manage Organizations" }) })] }) })] }), jsx(he, { asChild: true, disabled: !i, children: jsxs(Link, { to: "/members", children: [jsx(Users, { className: "mr-2 h-4 w-4" }), jsx("span", { children: "Team Members" })] }) }), jsx(he, { asChild: true, disabled: !i, children: jsxs(Link, { to: "/organization-settings", children: [jsx(Settings, { className: "mr-2 h-4 w-4" }), jsx("span", { children: "Settings" })] }) }), jsx(he, { asChild: true, disabled: !i, children: jsxs(Link, { to: "/chat", children: [jsx(Server, { className: "mr-2 h-4 w-4" }), jsx("span", { children: "AI Providers" })] }) })] }) })] }) });
}, fo = lt("app_routes_authed_layout_tsx--getTeamspaces_createServerFn_handler", "/_server"), go = createServerFn().handler(fo), bo = lt("app_routes_authed_layout_tsx--getChatrooms_createServerFn_handler", "/_server"), vo = createServerFn().handler(bo), An = createFileRoute("/_authed/_layout")({ component: yo });
function yo() {
  const t = useAtomValue(Le), a = useSetAtom(St), r = useSetAtom(pa), { userId: n } = An.useRouteContext();
  return on(n), useEffect(() => {
    const i = async () => {
      const l = await go();
      a(l);
    }, o = async () => {
      const l = await vo();
      r(l);
    };
    Promise.all([i(), o()]);
  }, []), jsxs(gn, { children: [jsx(oo, {}), jsxs(Oi, { className: "flex flex-col h-screen overflow-y-auto", children: [jsxs("header", { className: "sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background p-4", children: [jsxs("div", { className: "flex flex-1 items-center gap-2 px-3", children: [jsx(ji, {}), jsx(dn, { orientation: "vertical", className: "mr-2 h-4" }), jsx(lo, { children: jsx(co, { children: jsx(uo, { children: jsx(mo, { className: "line-clamp-1", children: t == null ? void 0 : t.name }) }) }) })] }), jsx(po, {})] }), jsx("div", { className: "h-full overflow-y-hidden", children: jsx(Outlet, {}) })] })] });
}
const wo = () => import('../build/_invitationId._invitationEmail-DCIETi3U.mjs'), Rn = createFileRoute("/accept-invitation/$invitationId/$invitationEmail")({ params: z$1.object({ invitationId: z$1.string().min(10), invitationEmail: z$1.string().email() }), component: lazyRouteComponent(wo, "component", () => Rn.ssr) }), xo = () => import('../build/index-eU_NrPHc.mjs'), En = createFileRoute("/_authed/_layout/team-chat/")({ component: lazyRouteComponent(xo, "component", () => En.ssr) }), No = () => import('../build/index-DGwTvHhm.mjs'), jn = createFileRoute("/_authed/_layout/organizations/")({ component: lazyRouteComponent(No, "component", () => jn.ssr) }), Co = () => import('../build/index-Cax3CenD.mjs'), _n = createFileRoute("/_authed/_layout/organization-settings/")({ component: lazyRouteComponent(Co, "component", () => _n.ssr) }), Io = () => import('../build/index-_etULO8x.mjs'), On = createFileRoute("/_authed/_layout/members/")({ component: lazyRouteComponent(Io, "component", () => On.ssr) }), Mn = memo(({ blur: t = 0, inactiveZone: a = 0.7, proximity: r = 0, spread: n = 20, variant: i = "default", glow: o = false, className: l, movementDuration: c = 2, borderWidth: p = 1, disabled: u = true }) => {
  const g = useRef(null), d = useRef({ x: 0, y: 0 }), h = useRef(0), x = useCallback((m) => {
    g.current && (h.current && cancelAnimationFrame(h.current), h.current = requestAnimationFrame(() => {
      var _a2, _b;
      const y = g.current;
      if (!y) return;
      const { left: w, top: N, width: I, height: _ } = y.getBoundingClientRect(), M = (_a2 = m == null ? void 0 : m.x) != null ? _a2 : d.current.x, S = (_b = m == null ? void 0 : m.y) != null ? _b : d.current.y;
      m && (d.current = { x: M, y: S });
      const L = [w + I * 0.5, N + _ * 0.5], C = Math.hypot(M - L[0], S - L[1]), P = 0.5 * Math.min(I, _) * a;
      if (C < P) {
        y.style.setProperty("--active", "0");
        return;
      }
      const k = M > w - r && M < w + I + r && S > N - r && S < N + _ + r;
      if (y.style.setProperty("--active", k ? "1" : "0"), !k) return;
      const E = parseFloat(y.style.getPropertyValue("--start")) || 0, D = (180 * Math.atan2(S - L[1], M - L[0]) / Math.PI + 90 - E + 180) % 360 - 180, b = E + D;
      animate(E, b, { duration: c, ease: [0.16, 1, 0.3, 1], onUpdate: (R) => {
        y.style.setProperty("--start", String(R));
      } });
    }));
  }, [a, r, c]);
  return useEffect(() => {
    if (u) return;
    const m = () => x(), y = (w) => x(w);
    return window.addEventListener("scroll", m, { passive: true }), document.body.addEventListener("pointermove", y, { passive: true }), () => {
      h.current && cancelAnimationFrame(h.current), window.removeEventListener("scroll", m), document.body.removeEventListener("pointermove", y);
    };
  }, [x, u]), jsxs(Fragment, { children: [jsx("div", { className: f("pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity", o && "opacity-100", i === "white" && "border-white", u && "!block") }), jsx("div", { ref: g, style: { "--blur": `${t}px`, "--spread": n, "--start": "0", "--active": "0", "--glowingeffect-border-width": `${p}px`, "--repeating-conic-gradient-times": "5", "--gradient": i === "white" ? `repeating-conic-gradient(
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
                )` }, className: f("pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity", o && "opacity-100", t > 0 && "blur-[var(--blur)] ", l, u && "!hidden"), children: jsx("div", { className: f("glow", "rounded-[inherit]", 'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]', "after:[border:var(--glowingeffect-border-width)_solid_transparent]", "after:[background:var(--gradient)] after:[background-attachment:fixed]", "after:opacity-[var(--active)] after:transition-opacity after:duration-300", "after:[mask-clip:padding-box,border-box]", "after:[mask-composite:intersect]", "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]") }) })] });
});
Mn.displayName = "GlowingEffect";
const Ea = [{ id: "openai", name: "OpenAI", expanded: true, agents: [{ id: "gpt-4o", name: "GPT-4o", description: "Most capable agent" }, { id: "gpt-4-turbo", name: "GPT-4 Turbo", description: "Fast and powerful" }, { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo", description: "Balanced performance" }] }, { id: "anthropic", name: "Anthropic", agents: [{ id: "claude-3-opus", name: "Claude 3 Opus", description: "Most powerful Claude agent" }, { id: "claude-3-sonnet", name: "Claude 3 Sonnet", description: "Balanced performance" }, { id: "claude-3-haiku", name: "Claude 3 Haiku", description: "Fast responses" }] }, { id: "meta", name: "Meta", agents: [{ id: "llama-3-70b", name: "Llama 3 70B", description: "Largest Llama agent" }, { id: "llama-3-8b", name: "Llama 3 8B", description: "Efficient performance" }] }];
function To({ selectedAgents: t, onSelectAgents: a, isOpen: r, onClose: n, multiSelectMode: i = false, maxSelections: o = 4, searchTerm: l = "", onAgentSelect: c, keyboardNavigation: p = false }) {
  const [u, g] = useState(Ea), [d, h] = useState("provider"), x = useRef(null), [m, y] = useState(0), [w, N] = useState([]);
  useRef(false);
  const [I, _] = useState(l);
  useEffect(() => {
    const C = (P) => {
      x.current && !x.current.contains(P.target) && n();
    };
    return r && document.addEventListener("mousedown", C), () => {
      document.removeEventListener("mousedown", C);
    };
  }, [r, n]), useEffect(() => {
    if (!r || !p) return;
    const C = (P) => {
      if (P.key === "ArrowDown") P.preventDefault(), y((k) => k < w.length - 1 ? k + 1 : k);
      else if (P.key === "ArrowUp") P.preventDefault(), y((k) => k > 0 ? k - 1 : 0);
      else if (P.key === "Enter" && m >= 0 && m < w.length) {
        P.preventDefault(), P.stopPropagation();
        const k = w[m];
        c ? c(k) : S(k);
      }
    };
    return document.addEventListener("keydown", C, { capture: true }), () => {
      document.removeEventListener("keydown", C, { capture: true });
    };
  }, [r, p, m, w, c]), useEffect(() => {
    _(l);
  }, [l]), useEffect(() => {
    if (!r) return;
    const C = l.toLowerCase(), P = Ea.map((E) => {
      const B = E.name.toLowerCase().includes(C), D = E.agents.filter((R) => R.name.toLowerCase().includes(C)), b = C ? B || D.length > 0 : E.expanded;
      return { ...E, expanded: b, agents: D };
    }).filter((E) => E.name.toLowerCase().includes(C) || E.agents.length > 0);
    g(P);
    const k = [];
    P.forEach((E) => {
      E.expanded && k.push(...E.agents);
    }), N(k), k.length > 0 && y(0), C && k.length === 0 && n();
  }, [l, r, n]);
  const M = (C) => {
    g(u.map((P) => P.id === C ? { ...P, expanded: !P.expanded } : P));
  }, S = (C) => {
    const P = t.some((k) => k.id === C.id);
    i ? P ? a(t.filter((k) => k.id !== C.id)) : t.length < o && a([...t, C]) : (a([C]), c || n());
  }, L = (C) => {
    const P = u.find((k) => k.id === C);
    return P ? t.filter((k) => P.agents.some((E) => E.id === k.id)).length : 0;
  };
  return r ? jsxs("div", { ref: x, className: "w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50 h-[350px] flex flex-col", children: [jsxs("div", { className: "flex border-b border-gray-200 flex-shrink-0", children: [jsx("button", { className: f("flex-1 py-2 text-sm font-medium", d === "provider" ? "border-b-2 border-black" : "text-gray-500"), onClick: () => h("provider"), children: "AI Agents" }), jsx("button", { className: f("flex-1 py-2 text-sm font-medium", d === "agent" ? "border-b-2 border-black" : "text-gray-500"), onClick: () => h("agent"), children: "Agents" })] }), l && jsxs("div", { className: "px-3 py-2 text-xs text-gray-500 border-b border-gray-200", children: ['Searching for: "', l, '"'] }), jsxs("div", { className: "overflow-y-auto flex-1", children: [u.length === 0 && jsx("div", { className: "p-3 text-sm text-gray-500", children: "No agents found" }), u.map((C) => {
    const P = L(C.id);
    return jsxs("div", { className: "text-sm", children: [jsxs("div", { className: "flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer", onClick: () => M(C.id), children: [P > 0 && jsx("div", { className: "flex items-center justify-center h-5 w-5 rounded-full bg-red-100 text-red-600 text-xs font-medium mr-1", children: P }), C.expanded ? jsx(ChevronDown, { className: "h-4 w-4 text-gray-500 mr-1" }) : jsx(ChevronRight, { className: "h-4 w-4 text-gray-500 mr-1" }), jsx(Folder, { className: "h-4 w-4 text-gray-500 mr-2" }), jsx("span", { children: C.name })] }), C.expanded && C.agents.map((k) => {
      const E = t.some((b) => b.id === k.id), D = w.findIndex((b) => b.id === k.id) === m;
      return jsxs("div", { className: f("flex items-center pl-10 pr-3 py-2 cursor-pointer", D ? "bg-gray-200" : "hover:bg-gray-100"), onClick: () => {
        c ? c(k) : S(k);
      }, children: [jsx(FileText, { className: "h-4 w-4 text-gray-500 mr-2" }), jsx("span", { className: "flex-1", children: k.name }), E && jsx(Check, { className: "h-4 w-4 text-red-500" })] }, k.id);
    })] }, C.id);
  })] })] }) : null;
}
function So(t, a = 1) {
  const r = useRef(null);
  return useLayoutEffect(() => {
    const n = r.current;
    if (n) {
      const i = window.getComputedStyle(n), o = Number.parseInt(i.lineHeight, 10) || 20, l = Number.parseInt(i.paddingTop, 10) + Number.parseInt(i.paddingBottom, 10), c = o * a + l;
      n.style.height = "0px";
      const p = Math.max(n.scrollHeight, c);
      n.style.height = `${p + 2}px`;
    }
  }, [r, t, a]), r;
}
const { Children: ko, isValidElement: Po, cloneElement: Ao } = j__default, bt = (t) => t.includes("gpt") ? jsx(BrainCircuit, { className: "h-5 w-5" }) : t.includes("claude") ? jsx(Bot, { className: "h-5 w-5" }) : t.includes("llama") ? jsx(Star, { className: "h-5 w-5" }) : jsx(BrainCircuit, { className: "h-5 w-5" }), ja = { id: "gpt-4o", name: "GPT-4o", description: "Most capable model" }, va = createContext$1({}), _a = ["What's the first rule of Fight Club?", "Who is Tyler Durden?", "Where is Andrew Laeddis Hiding?", "Write a Javascript method to reverse a string", "How to assemble your own PC?", "Explain quantum computing in simple terms", "Write a short story about a robot that falls in love", "What are the ethical implications of AI?", "Design a database schema for a social media app", "Explain how blockchain works to a 5-year-old", "Create a regex for validating email addresses", "What's the difference between REST and GraphQL?", "Suggest five names for my tech startup", "How would you implement a binary search tree?", "Explain the concept of recursion with an example", "Write a haiku about coding at midnight", "What's the significance of P vs NP problem?", "How does natural language processing work?", "Explain the CAP theorem in distributed systems", "Design a simple chatbot algorithm", "What are the pros and cons of microservices?", "How would you optimize a slow-loading website?", "Explain neural networks without technical jargon", "What is technical debt and how do you manage it?", "Write a function to detect a palindrome"], Ro = [{ id: "openai", name: "OpenAI", expanded: true, agents: [{ id: "gpt-4o", name: "GPT-4o", description: "Most capable agent" }, { id: "gpt-4-turbo", name: "GPT-4 Turbo", description: "Fast and powerful" }, { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo", description: "Balanced performance" }] }, { id: "anthropic", name: "Anthropic", agents: [{ id: "claude-3-opus", name: "Claude 3 Opus", description: "Most powerful Claude agent" }, { id: "claude-3-sonnet", name: "Claude 3 Sonnet", description: "Balanced performance" }, { id: "claude-3-haiku", name: "Claude 3 Haiku", description: "Fast responses" }] }, { id: "meta", name: "Meta", agents: [{ id: "llama-3-70b", name: "Llama 3 70B", description: "Largest Llama agent" }, { id: "llama-3-8b", name: "Llama 3 8B", description: "Efficient performance" }] }];
function At({ children: t, className: a, variant: r = "default", value: n, onChange: i, onSubmit: o, loading: l, onStop: c, rows: p = 1, hasMessages: u = false, onAISelect: g, onMentionSelectionChange: d }) {
  const [h, x] = useState(0), m = useRef(null), y = ma(), w = useRef(null), N = useRef(null), [I, _] = useState(/* @__PURE__ */ new Set()), [M, S] = useState(false), [L, C] = useState([ja]), [P, k] = useState(false), [E, B] = useState(false), [D, b] = useState(null), R = useRef([]), O = useRef(-1), [q, Z] = useState(n || ""), [De, Ne] = useState(0), [ke, ht] = useState({ top: 0, left: 10 }), [Et, pt] = useState([]), jt = (A) => {
    if (D !== null && P) {
      if (A.key === "Enter") {
        A.preventDefault();
        return;
      } else if (A.key === "Escape") {
        A.preventDefault(), k(false), b(null), O.current = -1, d && d(false);
        return;
      }
    }
    if (A.key === "Enter" && !A.shiftKey && o) {
      if (typeof q != "string" || q.trim().length === 0) return;
      if (D !== null) {
        A.preventDefault();
        return;
      }
      A.preventDefault(), o();
    }
  };
  useEffect(() => {
    if (P && w.current) {
      const A = w.current.getBoundingClientRect();
      ht({ top: A.top - 370, left: A.left + 10 });
      const z = () => {
        if (w.current) {
          const U = w.current.getBoundingClientRect();
          ht({ top: U.top - 370, left: U.left + 10 });
        }
      };
      return window.addEventListener("resize", z), () => window.removeEventListener("resize", z);
    }
  }, [P]);
  const Ze = () => {
    m.current = setInterval(() => {
      x((A) => (A + 1) % _a.length);
    }, 4e3);
  }, v = () => {
    document.visibilityState !== "visible" && m.current ? (clearInterval(m.current), m.current = null) : document.visibilityState === "visible" && !u && Ze();
  };
  useEffect(() => (u || Ze(), document.addEventListener("visibilitychange", v), () => {
    m.current && clearInterval(m.current), document.removeEventListener("visibilitychange", v);
  }), [u]), useEffect(() => {
    u && m.current ? (clearInterval(m.current), m.current = null) : !u && !m.current && Ze();
  }, [u]), useEffect(() => {
    n !== void 0 && Z(n);
  }, [n]);
  const F = [{ icon: jsx(Globe, { className: "h-4 w-4" }), label: "Web-Search", description: "Quick web look-up" }, { icon: jsx(Telescope, { className: "h-4 w-4" }), label: "Deep-Research", description: "Deep web research, on specific input" }, { icon: jsx(BrainCircuit, { className: "h-4 w-4" }), label: "Reasoning", description: "Think deeply, before answering" }], Y = (A) => {
    _((z) => {
      const U = new Set(z);
      return U.has(A) ? U.delete(A) : U.add(A), U;
    });
  }, ne = (A) => {
    B(A), k(true);
  }, oe = () => {
    E ? (B(false), C([ja]), k(false)) : ne(true);
  };
  useEffect(() => {
    if (P && D !== null) {
      const A = [];
      Ro.forEach((z) => {
        const U = z.agents.filter((H) => D ? H.name.toLowerCase().includes(D.toLowerCase()) : true);
        A.push(...U.map((H) => ({ id: H.id, name: H.name, description: H.description })));
      }), pt(A), Ne(A.length > 0 ? 0 : -1);
    }
  }, [D, P]);
  const X = (A) => {
    const z = [];
    let U = 0;
    for (; U < A.length; ) {
      const H = A.indexOf("@", U);
      if (H === -1) break;
      if (!(H === 0 || A[H - 1] === " ")) {
        U = H + 1;
        continue;
      }
      let me = A.indexOf(" ", H + 1);
      me === -1 && (me = A.length), z.push({ start: H, end: me, consumed: false }), U = me;
    }
    return z;
  }, de = (A) => {
    const z = A.target.value;
    Z(z), i && i(A);
    const U = X(z);
    if (R.current = U, U.length === 0) {
      b(null), P && !E && k(false), O.current = -1, d && d(false);
      return;
    }
    const H = U[U.length - 1];
    if (H.end === z.length) {
      const me = z.slice(H.start + 1, H.end);
      b(me), O.current = U.length - 1, P || (k(true), B(false)), d && d(true);
    } else D !== null && (b(null), P && !E && k(false), O.current = -1, d && d(false));
  }, Ue = (A) => {
    var _a2;
    const z = { id: A.id, name: A.name, description: A.description, icon: bt(A.id) };
    if (D !== null && O.current >= 0) {
      const U = R.current[O.current];
      if (U && N.current) {
        const H = q.substring(0, U.start), ue = q.substring(U.end), me = H + `@${z.name}` + (ue.startsWith(" ") ? "" : " ") + ue;
        if (Z(me), i && N.current) {
          const et = (_a2 = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")) == null ? void 0 : _a2.set;
          if (et) {
            et.call(N.current, me);
            const Wn = new Event("input", { bubbles: true });
            N.current.dispatchEvent(Wn);
          }
        }
        C([z]), k(false), b(null), O.current = -1, d && d(false);
        const Vn = X(me);
        R.current = Vn, setTimeout(() => {
          if (N.current) {
            N.current.focus();
            const et = H.length + `@${z.name} `.length;
            N.current.selectionStart = et, N.current.selectionEnd = et;
          }
        }, 0);
      }
    }
  }, Ce = { value: q, onChange: de, onSubmit: o, loading: l, onStop: c, variant: r, rows: p, placeholder: u ? "Type a message..." : _a[h], hasMessages: u, onAISelect: g, onMentionSelectionChange: d }, ee = () => {
    const A = I.size;
    return y ? jsx("div", { className: "flex items-center justify-center py-3 px-2", children: jsxs(fa, { open: M, onOpenChange: S, children: [jsx(ga, { asChild: true, children: jsxs($, { variant: "ghost", className: "h-8 px-4 rounded-full flex items-center gap-2 bg-gray-100 text-gray-600 hover:bg-gray-200", children: [jsx(Settings, { className: "h-4 w-4" }), jsxs("span", { className: "text-xs font-medium", children: ["Tools ", A > 0 && `(${A})`] })] }) }), jsx(ba, { align: "end", className: "w-56", onCloseAutoFocus: (z) => z.preventDefault(), children: F.map((z, U) => jsx(Xi, { checked: I.has(U), onCheckedChange: () => Y(U), onSelect: (H) => H.preventDefault(), children: jsxs("div", { className: "flex items-center gap-2", children: [z.icon, jsx("span", { children: z.label })] }) }, z.label)) })] }) }) : jsx("div", { className: "flex flex-wrap items-center gap-2 py-3 px-2", children: F.map((z, U) => jsxs($, { variant: "ghost", className: `h-8 px-4 rounded-full flex items-center gap-2 ${I.has(U) ? "bg-gray-300 text-gray-800 hover:bg-gray-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`, onClick: () => Y(U), children: [z.icon, jsx("span", { className: "text-xs font-medium", children: z.label })] }, z.label)) });
  };
  return jsx(va.Provider, { value: Ce, children: jsxs("div", { className: "relative w-full", children: [P && jsx("div", { className: "fixed z-[999] shadow-lg", style: { top: `${ke.top}px`, left: `${ke.left}px` }, children: jsx(To, { selectedAgents: L.map((A) => ({ id: A.id, name: A.name, description: A.description })), onSelectAgents: (A) => {
    D || C(A.map((z) => ({ id: z.id, name: z.name, description: z.description, icon: bt(z.id) })));
  }, isOpen: P, onClose: () => {
    k(false), b(null), O.current = -1, d && d(false);
  }, multiSelectMode: E, maxSelections: 4, searchTerm: D || "", onAgentSelect: D !== null ? Ue : void 0, keyboardNavigation: D !== null }) }), jsxs("div", { ref: w, className: f("relative", r === "default" && "flex flex-col items-end w-full p-2 rounded-2xl border border-input bg-transparent focus-within:ring-1 focus-within:ring-slate-300 focus-within:outline-none", r === "unstyled" && "flex items-start gap-2 w-full", a), children: [jsx(Mn, { blur: 0, borderWidth: 1.7, spread: 25, glow: true, disabled: false, proximity: 64, inactiveZone: 0.01 }), jsxs("div", { className: "relative flex flex-col items-end w-full z-10", children: [jsxs("div", { className: "flex w-full items-end", children: [jsx($, { type: "button", variant: "ghost", size: "icon", className: "h-10 w-10 rounded-full hover:bg-gray-100 mr-2", onClick: oe, children: bt(L[0].id) }), ko.map(t, (A) => {
    if (Po(A)) {
      const z = A.type;
      if (z && (z.displayName === "ChatInputTextArea" || z === mt)) return Ao(A, { ref: (H) => {
        N.current = H;
        const ue = A.ref;
        typeof ue == "function" ? ue(H) : ue && "current" in ue && (ue.current = H);
      }, placeholder: D !== null ? "Type model name..." : Ce.placeholder, onKeyDown: jt });
    }
    return A;
  })] }), jsx("div", { className: "flex w-full items-center justify-between mt-2", children: jsxs("div", { className: "flex items-center gap-2", children: [E && L.length > 1 && jsxs("div", { className: "flex items-center gap-1", children: [jsx("div", { className: "flex -space-x-1", children: L.slice(0, 2).map((A, z) => jsx("div", { className: "h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center border border-white", children: A.icon || bt(A.id) }, A.id)) }), jsxs("span", { className: "text-xs text-gray-500", children: [L.length, " models"] })] }), jsxs($, { type: "button", variant: "ghost", className: f("h-8 rounded-full px-3 flex items-center gap-1.5 text-xs font-normal", E ? "bg-red-50 text-red-600 hover:bg-red-100" : "bg-gray-100 hover:bg-gray-100"), onClick: oe, children: [jsx(Split, { className: "h-4 w-4" }), jsx("span", { children: "Multiprompt" })] }), ee()] }) })] })] })] }) });
}
At.displayName = "ChatInput";
function mt({ onSubmit: t, value: a, onChange: r, className: n, variant: i, ...o }) {
  var _a2, _b;
  const l = useContext(va), [c, p] = useState(""), u = (_a2 = a != null ? a : l.value) != null ? _a2 : c, g = r != null ? r : l.onChange, d = t != null ? t : l.onSubmit, h = (_b = l.rows) != null ? _b : 1, x = l.placeholder || "", m = l.hasMessages || false, y = useRef(null), w = i != null ? i : l.variant === "default" ? "unstyled" : "default", N = So(u, h), I = useCallback((S) => {
    N && (typeof N == "function" ? N(S) : "current" in N && (N.current = S)), y.current = S;
  }, [N]);
  return jsxs("div", { className: "relative w-full", children: [jsx(Ee, { ref: I, ...o, value: u, onChange: (S) => {
    g ? g(S) : p(S.target.value);
  }, onKeyDown: (S) => {
    if (d && S.key === "Enter" && !S.shiftKey) {
      if (typeof u != "string" || u.trim().length === 0) return;
      S.preventDefault(), d();
    }
  }, className: f("max-h-[400px] min-h-0 resize-none overflow-x-hidden", w === "unstyled" && "border-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none", n), rows: h, placeholder: void 0 }), !u && jsx("div", { className: "absolute pointer-events-none top-0 left-0 right-0 bottom-0 flex items-center px-3 py-2", children: jsx(AnimatePresence, { mode: "wait", children: m ? jsx("span", { className: "text-muted-foreground truncate", children: x }) : jsx(motion.span, { initial: { opacity: 0, y: -5 }, animate: { opacity: 0.5, y: 0 }, exit: { opacity: 0, y: 5 }, transition: { duration: 0.3 }, className: "text-muted-foreground truncate", children: x }, x) }) })] });
}
mt.displayName = "ChatInputTextArea";
function Rt({ onSubmit: t, loading: a, onStop: r, className: n, ...i }) {
  const o = useContext(va), l = a != null ? a : o.loading, c = r != null ? r : o.onStop, p = t != null ? t : o.onSubmit;
  if (l && c) return jsx($, { onClick: c, className: f("shrink-0 rounded-full p-1.5 h-fit border dark:border-zinc-600 hover:cursor-pointer", n), ...i, children: jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-label": "Stop", children: [jsx("title", { children: "Stop" }), jsx("rect", { x: "6", y: "6", width: "12", height: "12" })] }) });
  const u = typeof o.value != "string" || o.value.trim().length === 0, g = o.audio;
  return jsxs("div", { className: "flex gap-1", children: [jsx($, { className: f("shrink-0 rounded-full p-1.5 h-fit border dark:border-zinc-600 hover:cursor-pointer", n), disabled: u, onClick: (d) => {
    d.preventDefault(), u || (p == null ? void 0 : p());
  }, ...i, children: jsx(ArrowUpIcon, {}) }), jsx($, { className: f("shrink-0 rounded-full p-1.5 h-fit border bg-red-500 hover:bg-red-600/95! dark:border-zinc-600 hover:cursor-pointer", n), disabled: g, onClick: (d) => {
    d.preventDefault(), u || (p == null ? void 0 : p());
  }, ...i, children: jsx(AudioLines, {}) })] });
}
Rt.displayName = "ChatInputSubmit";
const zn = createFileRoute("/_authed/_layout/chat/")({ component: Eo });
function Eo({ className: t, ...a }) {
  var _a2;
  const r = useNavigate(), n = useAtomValue(St), i = useSetAtom(pa), o = zn.useRouteContext(), [l] = useState(o.userId), [c, p] = useState(""), u = useAtomValue(kt), g = useAtomValue(Pt), d = n == null ? void 0 : n.find((w) => w.id === u), h = (_a2 = d == null ? void 0 : d.projects) == null ? void 0 : _a2.find((w) => w.id === g), x = useSetAtom(Le), m = async () => {
    var _a3;
    if (c.trim()) try {
      const w = ro({ currentUserId: l, project: h, teamspace: d }), { data: N } = await Te().chatrooms.createChatroom({ chatroomCreatorId: l, chatroomMembers: w, isPrivate: (h == null ? void 0 : h.isPrivate) || false, projectId: h == null ? void 0 : h.id, name: "New Chat Conversation", teamIds: [], type: "CHATROOM" });
      h ? (_a3 = h.chatrooms) == null ? void 0 : _a3.push(N) : i((I) => [...I, N]), console.log("New chatroom created:", N), x(N), localStorage.setItem("pendingMessage", c), r({ to: "/chat/$chatroomId", params: { chatroomId: N.id } });
    } catch (w) {
      console.error("Error creating chatroom:", w);
      return;
    }
  }, y = jsxs(At, { value: c, onChange: (w) => p(w.target.value), onSubmit: m, hasMessages: false, children: [jsx(mt, { placeholder: "Type a message...", autoFocus: true, disabled: false, onKeyDown: (w) => {
    w.key === "Enter" && !w.shiftKey && (w.preventDefault(), m());
  } }), jsx(Rt, { disabled: !c.trim() })] });
  return jsx("div", { className: "flex-1 flex flex-col h-full", ...a, children: jsxs("div", { className: "flex-1 flex flex-col justify-center items-center", children: [jsx("div", { children: jsx("h3", { className: "text-2xl font-bold mb-6 font-mono", children: "What are we solving today?" }) }), jsx("div", { className: "px-2 py-4 max-w-4xl mx-auto w-full", children: y })] }) });
}
const jo = () => import('../build/_teamspaceId-ie4J8k8Q.mjs'), $n = createFileRoute("/_authed/_layout/teamspace/$teamspaceId")({ params: z$1.object({ teamspaceId: z$1.string() }), component: lazyRouteComponent(jo, "component", () => $n.ssr) }), _o = () => import('../build/_projectId-YjFnYS-D.mjs'), Ln = createFileRoute("/_authed/_layout/project/$projectId")({ params: z$1.object({ projectId: z$1.string() }), component: lazyRouteComponent(_o, "component", () => Ln.ssr) });
function Oo() {
  const t = useRef(null), [a, r] = useState(false), [n, i] = useState(true), o = useRef(false), l = useRef(false), c = useRef(false), p = useRef(false), u = useCallback((m) => m == null ? void 0 : m.closest("[data-radix-scroll-area-viewport]"), []), g = useCallback((m) => {
    const { scrollTop: y, scrollHeight: w, clientHeight: N } = m;
    return Math.abs(w - y - N) < 10;
  }, []), d = useCallback((m) => {
    m && m.scrollTo({ top: m.scrollHeight, behavior: "instant" });
  }, []), h = useCallback((m) => {
    const { scrollHeight: y, clientHeight: w } = m, N = y > w, I = g(m);
    r(N && !I), l.current || i(I);
  }, [g]);
  return useEffect(() => {
    const m = t.current, y = u(m);
    if (!m || !y) return;
    d(y);
    const w = setTimeout(() => {
      o.current || (d(y), p.current = true);
    }, 200), N = new ResizeObserver(() => {
      !p.current && !o.current && d(y);
    });
    return N.observe(m), () => {
      clearTimeout(w), N.disconnect();
    };
  }, [u, d]), useEffect(() => {
    const m = t.current, y = u(m);
    if (!m || !y) return;
    h(y);
    const w = () => {
      p.current || (p.current = true), c.current || (o.current = true), l.current || h(y);
    }, N = () => {
      l.current = true, o.current = true;
    }, I = () => {
      l.current = false, h(y);
    }, _ = () => {
      l.current = true, o.current = true, setTimeout(() => {
        l.current = false, h(y);
      }, 200);
    };
    let M;
    const S = new MutationObserver(() => {
      c.current = true, window.clearTimeout(M), (n && !o.current || n && p.current && !l.current) && y.scrollTo({ top: y.scrollHeight, behavior: "instant" }), h(y), M = window.setTimeout(() => {
        c.current = false;
      }, 100);
    });
    return y.addEventListener("scroll", w, { passive: true }), y.addEventListener("touchstart", N), y.addEventListener("touchend", I), y.addEventListener("wheel", _, { passive: true }), S.observe(m, { childList: true, subtree: true, attributes: true, characterData: true }), () => {
      window.clearTimeout(M), S.disconnect(), y.removeEventListener("scroll", w), y.removeEventListener("touchstart", N), y.removeEventListener("touchend", I), y.removeEventListener("wheel", _);
    };
  }, [u, h, n]), [t, a, () => {
    const m = u(t.current);
    m && (i(true), o.current = false, m.scrollTo({ top: m.scrollHeight, behavior: c.current ? "instant" : "smooth" }));
  }];
}
function Mo({ onClick: t, alignment: a = "right", className: r }) {
  return jsx($, { variant: "secondary", size: "icon", className: f("absolute bottom-4 rounded-full shadow-lg hover:bg-secondary", { left: "left-4", center: "left-1/2 -translate-x-1/2", right: "right-4" }[a], r), onClick: t, children: jsx(ChevronDown, { className: "h-4 w-4" }) });
}
const ya = forwardRef(({ children: t, className: a, scrollButtonAlignment: r = "right" }, n) => {
  const [i, o, l] = Oo();
  return jsxs(We, { className: "flex-1 relative", ref: n, children: [jsx("div", { ref: i, children: jsx("div", { className: f(a, "min-h-0 z-10"), children: t }) }), o && jsx(Mo, { onClick: l, alignment: r, className: "absolute bottom-4 rounded-full shadow-lg hover:bg-secondary" })] });
});
ya.displayName = "ChatMessageArea";
const Zt = "my-4 overflow-x-auto w-fit rounded-xl text-zinc-50 bg-zinc-900 dark:bg-zinc-900 border border-border p-4", ea = (t) => typeof t == "string" ? t : Array.isArray(t) ? t.map(ea).join("") : isValidElement(t) ? ea(t.props.children) : "", Dn = memo(async ({ children: t, className: a, language: r, ...n }) => {
  const { codeToTokens: i, bundledLanguages: o } = await import('shiki'), l = ea(t);
  if (!(r in o)) return jsx("pre", { ...n, className: f(Zt, a), children: jsx("code", { className: "whitespace-pre-wrap", children: t }) });
  const { tokens: c } = await i(l, { lang: r, themes: { light: "github-dark", dark: "github-light" } });
  return jsx("pre", { ...n, className: f(Zt, a), children: jsx("code", { className: "whitespace-pre-wrap", children: c.map((p, u) => jsxs("span", { children: [p.map((g, d) => {
    const h = typeof g.htmlStyle == "string" ? void 0 : g.htmlStyle;
    return jsx("span", { style: h, children: g.content }, `token-${d}`);
  }), u !== c.length - 1 && `
`] }, `line-${u}`)) }) });
});
Dn.displayName = "HighlightedPre";
const Un = ({ children: t, language: a, className: r, ...n }) => jsx(Suspense, { fallback: jsx("pre", { ...n, className: f(Zt, r), children: jsx("code", { className: "whitespace-pre-wrap", children: t }) }), children: jsx(Dn, { language: a, ...n, children: t }) });
Un.displayName = "CodeBlock";
const zo = { h1: ({ children: t, ...a }) => jsx("h1", { className: "mt-2 scroll-m-20 text-4xl font-bold", ...a, children: t }), h2: ({ children: t, ...a }) => jsx("h2", { className: "mt-8 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0", ...a, children: t }), h3: ({ children: t, ...a }) => jsx("h3", { className: "mt-4 scroll-m-20 text-xl font-semibold tracking-tight", ...a, children: t }), h4: ({ children: t, ...a }) => jsx("h4", { className: "mt-4 scroll-m-20 text-lg font-semibold tracking-tight", ...a, children: t }), h5: ({ children: t, ...a }) => jsx("h5", { className: "mt-4 scroll-m-20 text-lg font-semibold tracking-tight", ...a, children: t }), h6: ({ children: t, ...a }) => jsx("h6", { className: "mt-4 scroll-m-20 text-base font-semibold tracking-tight", ...a, children: t }), p: ({ children: t, ...a }) => jsx("p", { className: "leading-6 [&:not(:first-child)]:mt-4", ...a, children: t }), strong: ({ children: t, ...a }) => jsx("span", { className: "font-semibold", ...a, children: t }), a: ({ children: t, ...a }) => jsx("a", { className: "font-medium underline underline-offset-4", target: "_blank", rel: "noreferrer", ...a, children: t }), ol: ({ children: t, ...a }) => jsx("ol", { className: "my-4 ml-6 list-decimal", ...a, children: t }), ul: ({ children: t, ...a }) => jsx("ul", { className: "my-4 ml-6 list-disc", ...a, children: t }), li: ({ children: t, ...a }) => jsx("li", { className: "mt-2", ...a, children: t }), blockquote: ({ children: t, ...a }) => jsx("blockquote", { className: "mt-4 border-l-2 pl-6 italic", ...a, children: t }), hr: (t) => jsx("hr", { className: "my-4 md:my-8", ...t }), table: ({ children: t, ...a }) => jsx("div", { className: "my-6 w-full overflow-y-auto", children: jsx("table", { className: "relative w-full overflow-hidden border-none text-sm", ...a, children: t }) }), tr: ({ children: t, ...a }) => jsx("tr", { className: "last:border-b-none m-0 border-b", ...a, children: t }), th: ({ children: t, ...a }) => jsx("th", { className: "px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", ...a, children: t }), td: ({ children: t, ...a }) => jsx("td", { className: "px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", ...a, children: t }), img: ({ alt: t, ...a }) => jsx("img", { className: "rounded-md", alt: t, ...a }), code: ({ children: t, node: a, className: r, ...n }) => {
  const i = /language-(\w+)/.exec(r || "");
  return i ? jsx(Un, { language: i[1], className: r, ...n, children: t }) : jsx("code", { className: f("rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", r), ...n, children: t });
}, pre: ({ children: t }) => jsx(Fragment, { children: t }) };
function $o(t) {
  return t ? marked.lexer(t).map((r) => r.raw) : [];
}
const Fn = memo(({ content: t, className: a }) => jsx(bs, { remarkPlugins: [vs], components: zo, className: a, children: t }), (t, a) => t.content === a.content);
Fn.displayName = "MemoizedMarkdownBlock";
const ta = memo(({ content: t, id: a, className: r }) => useMemo(() => $o(t || ""), [t]).map((i, o) => jsx(Fn, { content: i, className: r }, `${a}-block_${o}`)));
ta.displayName = "MarkdownContent";
const Lo = ({ children: t, url: a, className: r, width: n = 200, height: i = 125, isStatic: o = false, imageSrc: l = "" }) => {
  let c;
  o ? c = l : c = `https://api.microlink.io/?${encode$2({ url: a, screenshot: true, meta: false, embed: "screenshot.url", colorScheme: "dark", "viewport.isMobile": true, "viewport.deviceScaleFactor": 1, "viewport.width": n * 3, "viewport.height": i * 3 })}`;
  const [p, u] = j__default.useState(false), [g, d] = j__default.useState(false);
  j__default.useEffect(() => {
    d(true);
  }, []);
  const h = { stiffness: 100, damping: 15 }, x = useMotionValue(0), m = useSpring(x, h), y = (w) => {
    const N = w.target.getBoundingClientRect(), _ = (w.clientX - N.left - N.width / 2) / 2;
    x.set(_);
  };
  return jsxs(Fragment, { children: [g ? jsx("div", { className: "hidden", children: jsx("img", { src: c, width: n, height: i, alt: "hidden image" }) }) : null, jsxs(_t.Root, { openDelay: 50, closeDelay: 100, onOpenChange: (w) => {
    u(w);
  }, children: [jsx(_t.Trigger, { onMouseMove: y, className: f("text-black dark:text-white", r), href: a, target: "_blank", rel: "noopener noreferrer", children: t }), jsx(_t.Content, { className: "[transform-origin:var(--radix-hover-card-content-transform-origin)]", side: "top", align: "center", sideOffset: 10, children: jsx(AnimatePresence$1, { children: p && jsx(motion$1.div, { initial: { opacity: 0, y: 20, scale: 0.6 }, animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } }, exit: { opacity: 0, y: 20, scale: 0.6 }, className: "shadow-xl rounded-xl", style: { x: m }, children: jsx(Link, { to: a, className: "block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800", style: { fontSize: 0 }, target: "_blank", rel: "noopener noreferrer", children: jsx("img", { src: o ? l : c, width: n, height: i, className: "rounded-lg", alt: "preview image" }) }) }) }) })] })] });
}, Do = cva("flex gap-4 w-full", { variants: { variant: { default: "", bubble: "", full: "p-5" }, type: { incoming: "justify-start mr-auto", outgoing: "justify-end ml-auto" } }, compoundVariants: [{ variant: "full", type: "outgoing", className: "bg-muted" }, { variant: "full", type: "incoming", className: "bg-background" }], defaultVariants: { variant: "default", type: "incoming" } }), Bn = j__default.createContext(null), Gn = () => j__default.useContext(Bn), aa = j__default.forwardRef(({ className: t, variant: a = "default", type: r = "incoming", id: n, children: i, ...o }, l) => jsx(Bn.Provider, { value: { variant: a, type: r, id: n }, children: jsx("div", { ref: l, className: f(Do({ variant: a, type: r, className: t })), ...o, children: i }) }));
aa.displayName = "ChatMessage";
const Uo = cva("w-8 h-8 flex items-center rounded-full justify-center ring-1 shrink-0 bg-transparent overflow-hidden", { variants: { type: { incoming: "ring-border", outgoing: "ring-muted-foreground/30" } }, defaultVariants: { type: "incoming" } }), na = j__default.forwardRef(({ className: t, icon: a, imageSrc: r, ...n }, i) => {
  var _a2, _b;
  const l = (_b = (_a2 = Gn()) == null ? void 0 : _a2.type) != null ? _b : "incoming", c = a != null ? a : l === "incoming" ? jsx(SparklesIcon, {}) : jsx(UserIcon, {});
  return jsx("div", { ref: i, className: f(Uo({ type: l, className: t })), ...n, children: r ? jsx("img", { src: r, alt: "Avatar", className: "h-full w-full object-cover" }) : jsx("div", { className: "translate-y-px [&_svg]:size-4 [&_svg]:shrink-0", children: c }) });
});
na.displayName = "ChatMessageAvatar";
const Fo = cva("flex flex-col gap-2", { variants: { variant: { default: "", bubble: "rounded-xl px-3 py-2", full: "" }, type: { incoming: "", outgoing: "" } }, compoundVariants: [{ variant: "bubble", type: "incoming", className: "bg-secondary text-secondary-foreground" }, { variant: "bubble", type: "outgoing", className: "bg-primary text-primary-foreground" }], defaultVariants: { variant: "default", type: "incoming" } }), Bo = () => jsxs("div", { className: "relative overflow-hidden", children: [jsx("span", { className: "text-sm text-muted-foreground", children: "View thinking process" }), jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_2s_infinite]" })] }), ra = j__default.forwardRef(({ className: t, content: a, id: r, showCursor: n = false, reasoning: i = "", isReasoning: o = false, sources: l = [], children: c, ...p }, u) => {
  var _a2, _b, _c;
  const g = Gn(), [d, h] = j__default.useState(false), x = (_a2 = g == null ? void 0 : g.variant) != null ? _a2 : "default", m = (_b = g == null ? void 0 : g.type) != null ? _b : "incoming", y = (_c = r != null ? r : g == null ? void 0 : g.id) != null ? _c : "";
  return jsxs("div", { ref: u, className: f(Fo({ variant: x, type: m, className: t })), ...p, children: [i && i.length > 0 && jsxs("div", { className: "w-full mt-2 border rounded-md overflow-hidden", children: [jsxs("button", { type: "button", onClick: () => h(!d), className: "w-full flex items-center justify-between px-3 py-4 text-sm text-muted-foreground bg-[#F8FAFC] hover:cursor-pointer transition-colors", children: [jsx("span", { children: a === "" ? jsx(Bo, {}) : "View thinking process" }), jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: `h-4 w-4 shrink-0 transition-transform duration-200 ${d ? "rotate-180" : ""}`, children: jsx("path", { d: "m6 9 6 6 6-6" }) })] }), d && jsx("div", { className: "bg-[#F8FAFC] px-3 py-4 text-sm whitespace-pre-wrap", children: jsx(ta, { id: `${y}-reasoning`, content: i }) })] }), a.length > 0 && jsxs(Fragment, { children: [jsx(ta, { id: y, content: a }), n && jsx("span", { className: "ml-1 inline-block h-4 w-2 animate-pulse bg-current" })] }), l && l.length > 0 && jsxs("div", { className: "mt-3 border-t pt-2 text-sm", children: [jsx("p", { className: "font-medium text-muted-foreground mb-2", children: "Sources:" }), jsx("div", { className: "space-y-2", children: l.map((w, N) => jsxs("div", { className: "flex items-start gap-2", children: [jsxs("span", { className: "text-xs text-muted-foreground mt-1", children: ["[", N + 1, "]"] }), jsx(Lo, { url: w.url, className: "text-primary hover:underline flex-1", children: w.title || w.url })] }, w.id)) })] }), c] });
});
ra.displayName = "ChatMessageContent";
function Go({ onReact: t, onReply: a, onEdit: r, className: n, messageData: i }) {
  const [o, l] = useState(false), c = useRef(null), p = useRef(null), u = ["\u{1F44D}", "\u2764\uFE0F", "\u{1F602}", "\u{1F389}", "\u{1F64C}", "\u{1F440}"], g = (d) => {
    t && t(d), l(false);
  };
  return useEffect(() => {
    const d = (h) => {
      c.current && !c.current.contains(h.target) && p.current && !p.current.contains(h.target) && l(false);
    };
    return document.addEventListener("mousedown", d), () => {
      document.removeEventListener("mousedown", d);
    };
  }, []), jsxs("div", { className: `relative w-[7.5rem] ${n}`, children: [jsxs("div", { className: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm flex items-center px-1 relative", children: [jsxs(_e, { children: [jsx(Oe, { asChild: true, children: jsx("button", { ref: p, className: "p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400", onClick: () => l(!o), "aria-label": "Add reaction", children: jsx(Smile, { className: "h-5 w-5" }) }) }), jsx(Me, { sideOffset: 8, children: "Add reaction" })] }), jsxs(_e, { children: [jsx(Oe, { asChild: true, children: jsx("button", { className: "p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400", onClick: a, "aria-label": "Reply", children: jsx(MessageSquare, { className: "h-5 w-5" }) }) }), jsx(Me, { sideOffset: 8, children: "Reply" })] }), jsxs(_e, { children: [jsx(Oe, { asChild: true, children: jsx("button", { className: "p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400", onClick: r, "aria-label": "Edit", children: jsx(Edit, { className: "h-5 w-5" }) }) }), jsx(Me, { sideOffset: 8, children: "Edit" })] })] }), o && jsx("div", { ref: c, className: "absolute right-0 top-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-2 z-10", children: jsx("div", { className: "flex gap-1", children: u.map((d, h) => jsx("button", { onClick: () => g(d), className: "hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full text-lg", children: d }, h)) }) })] });
}
const $t = ({ messageData: t, isLastChunk: a = true, userID: r, userImage: n, onReply: i, chatroom: o }) => {
  var _a2, _b;
  const [l, c] = useState(false), p = t.data.senderId === r, [u] = useAtom(Le), g = (u == null ? void 0 : u.members.length) !== 1;
  if (!p) {
    const d = (_b = (_a2 = o == null ? void 0 : o.members) == null ? void 0 : _a2.find((h) => h.user.id === t.data.senderId)) == null ? void 0 : _b.user.image;
    return jsxs("div", { className: `relative group py-3 ${g ? "hover:bg-gray-100 px-2 rounded-lg" : ""} `, onMouseEnter: () => c(true), onMouseLeave: () => c(false), children: [jsxs(aa, { id: t.data.id || t.identifier, className: "w-full overflow-hidden", children: [jsx(na, { icon: t.data.isAiGenerated ? jsx(SparklesIcon, {}) : jsx(UserIcon, {}), imageSrc: t.data.isAiGenerated ? void 0 : d, className: "flex-shrink-0" }), jsx(ra, { content: t.data.content, showCursor: !a && t.data.isAiGenerated, reasoning: t.data.reasoning, isReasoning: !!t.data.reasoning && t.data.reasoning.length > 0, sources: t.data.sources, className: "break-words overflow-hidden" })] }, t.data.id || t.identifier), g && jsx("div", { className: `absolute -top-7 -right-2 transition-opacity duration-200 ${l ? "opacity-100" : "opacity-0"}`, children: jsx(Go, { messageData: t, onReply: i }) })] });
  }
  return jsx("div", { className: "relative group py-2", onMouseEnter: () => c(true), onMouseLeave: () => c(false), children: jsxs(aa, { id: t.data.id || t.identifier, variant: "bubble", type: "outgoing", className: "w-full overflow-hidden", children: [jsx(ra, { content: t.data.content, sources: t.data.sources, className: "break-words overflow-hidden" }), n && jsx(na, { imageSrc: n, className: "flex-shrink-0" })] }, t.data.id || t.identifier) });
}, Ho = ({ message: t, userID: a, userImage: r, stream: n, allMessages: i = [] }) => {
  const [o, l] = useState(false), [c, p] = useState(""), [u, g] = useState(false), [d] = useAtom(Le), h = t.data.id || t.identifier, x = useMemo(() => i.filter((S) => S.data.parentMessageId === h).map((S) => S.data), [i, h]), m = x.length > 0, w = !!!t.data.parentMessageId && (m || t.data.isThreadStarter), N = async () => {
    if (!(!c.trim() || !d || u)) {
      g(true);
      try {
        const S = h, L = v4();
        if (n) await n.send({ data: { chatroomId: d.id, parentMessageId: S, isAiGenerated: false, senderId: a, content: c.trim(), attachments: [], isReasoning: false, reasoning: "", sources: [] }, identifier: L, isLastChunk: true, startIndex: 0, totalChunks: 1 });
        else {
          const P = await Te().chats.chat({ userId: a, chatroomId: d.id });
          await P.send({ data: { chatroomId: d.id, parentMessageId: S, isAiGenerated: false, senderId: a, content: c.trim(), attachments: [], isReasoning: false, reasoning: "", sources: [] }, identifier: L, isLastChunk: true, startIndex: 0, totalChunks: 1 }), P.close();
        }
        p("");
      } catch (S) {
        console.error("Error sending reply:", S), toast.error("Failed to send reply. Please try again.");
      } finally {
        g(false);
      }
    }
  }, I = () => {
    var _a2, _b;
    const S = x[x.length - 1], L = x.length, [C, P] = useState(false), [k, E] = useState(false), B = useMemo(() => {
      const D = new Set(x.map((b) => b.senderId));
      return Array.from(D).map((b) => {
        var _a3, _b2;
        const R = (_a3 = d == null ? void 0 : d.members) == null ? void 0 : _a3.find((O) => O.user.id === b);
        return { id: b, isAi: ((_b2 = x.find((O) => O.senderId === b)) == null ? void 0 : _b2.isAiGenerated) || false, name: (R == null ? void 0 : R.user.name) || "User", image: R == null ? void 0 : R.user.image };
      });
    }, [x, d]);
    return jsxs($, { variant: "ghost", size: "sm", className: "w-full sm:w-[90%] md:w-[80%] flex items-center justify-start gap-1 py-1 text-xs text-muted-foreground bg-white relative", onClick: () => l(true), onMouseEnter: () => {
      P(true), E(true);
    }, onMouseLeave: () => {
      P(false), E(false);
    }, children: [jsxs("div", { className: "flex items-center min-w-[80px] z-10", children: [jsx(MessageSquareIcon, { size: 12, className: "mr-1" }), jsxs("span", { children: [L, " ", L === 1 ? "reply" : "replies"] })] }), jsxs("div", { className: "relative h-6 flex-1 overflow-hidden", children: [jsxs("div", { className: `absolute left-0 flex transition-all duration-500 ease-in-out ${k ? "opacity-0 transform -translate-y-full" : "opacity-100 transform translate-y-0"}`, children: [B.slice(0, 3).map((D, b) => jsx("div", { className: "w-6 h-6 rounded-md flex items-center justify-center ml-2 bg-gray-100", children: D.isAi ? jsx(SparklesIcon, { size: 12 }) : D.image ? jsx("img", { src: D.image, className: "w-6 h-6 rounded-md", alt: "user" }) : jsx(UserIcon, { size: 12 }) }, b)), B.length > 3 && jsx("div", { className: "w-5 h-5 rounded-md flex items-center justify-center ml-2 bg-gray-100", children: jsxs("span", { className: "text-xs", children: ["+", B.length - 3] }) })] }), jsx("div", { className: `absolute left-0 h-6 flex items-center transition-all duration-500 ease-in-out ${k ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-full"}`, children: jsxs("div", { className: "ml-2 flex items-center w-full overflow-hidden", children: [(S == null ? void 0 : S.isAiGenerated) ? jsx(SparklesIcon, { size: 12, className: "flex-shrink-0" }) : (() => {
      var _a3;
      const D = (_a3 = d == null ? void 0 : d.members) == null ? void 0 : _a3.find((R) => R.user.id === (S == null ? void 0 : S.senderId)), b = D == null ? void 0 : D.user.image;
      return b ? jsx("img", { src: b, className: "w-6 h-6 rounded-md flex-shrink-0", alt: (D == null ? void 0 : D.user.name) || "User" }) : jsx(UserIcon, { size: 12, className: "flex-shrink-0" });
    })(), S && jsxs("span", { className: "ml-2 truncate text-muted-foreground/70 w-full max-w-[calc(100%-24px)]", children: [((_a2 = S.content) == null ? void 0 : _a2.substring(0, 70)) || "", ((_b = S.content) == null ? void 0 : _b.length) > 70 ? "..." : ""] })] }) })] }), jsx(ChevronRight, { className: `ml-auto transition-all duration-300 ease-in-out z-10 ${C ? "opacity-100 text-black" : "opacity-0"}` })] });
  }, _ = useRef(t.data.content);
  useEffect(() => {
    _.current = t.data.content;
  }, [t.data.content]);
  const M = () => {
    l(true);
  };
  return jsxs("div", { className: `relative w-full ${m ? "hover:bg-gray-100 px-2 rounded-lg" : ""}`, children: [jsx($t, { messageData: { ...t, data: { ...t.data, content: _.current } }, isLastChunk: t.isLastChunk, userID: a, userImage: r, onReply: M, chatroom: d }), w && jsx("div", { className: "pl-4 sm:pl-8 pb-1", children: jsx(I, {}) }), jsx(un, { open: o, onOpenChange: l, children: jsxs(mn, { side: "right", className: "p-0 flex flex-col w-full sm:min-w-[600px] md:min-w-[750px] lg:min-w-[800px] xl:min-w-[900px] max-w-[95vw]", children: [jsx(hn, { className: "px-3 sm:px-4 py-3 border-b sticky top-0 bg-white z-10", children: jsxs("div", { className: "flex justify-between items-center", children: [jsx(pn, { className: "text-base sm:text-lg", children: m ? `Thread (${x.length} ${x.length === 1 ? "reply" : "replies"})` : "Reply to message" }), jsx(xi, { className: "hover:cursor-pointer" })] }) }), jsxs("div", { className: "flex-1 flex flex-col h-[calc(100vh-140px)] overflow-hidden", children: [jsx(ya, { scrollButtonAlignment: "right", className: "flex-1 px-1 sm:px-2 py-4", children: jsxs("div", { className: "space-y-4", children: [jsx("div", { className: "w-full border-b border-gray-200 mb-6 p-2 sm:p-3 hover:bg-gray-100", style: { maxWidth: "95%" }, children: jsx($t, { messageData: { ...t, data: { ...t.data, content: _.current } }, isLastChunk: t.isLastChunk, userID: a, userImage: r, onReply: M, chatroom: d }) }), x.map((S) => jsx("div", { className: "w-full border-b border-gray-200 mb-4 hover:bg-gray-100 p-2 sm:p-3", style: { maxWidth: "95%" }, children: jsx($t, { messageData: { identifier: S.id, data: S, startIndex: 0, totalChunks: 1, isLastChunk: true }, isLastChunk: true, userID: a, userImage: r, onReply: M, chatroom: d }) }, S.id))] }) }), jsx("div", { className: "p-2 sm:p-3 border-t mt-auto bg-white", children: jsxs(At, { value: c, onChange: (S) => p(S.target.value), onSubmit: N, hasMessages: true, children: [jsx(mt, { placeholder: u ? "Sending..." : "Reply in thread...", autoFocus: true, disabled: u, onKeyDown: (S) => {
    S.key === "Enter" && !S.shiftKey && (S.preventDefault(), N());
  } }), jsx(Rt, { disabled: !c.trim() || u })] }) })] })] }) })] });
}, Vo = lt("app_routes_authed_layout_chat_chatroomId_tsx--fetchChatroomWithMessages_createServerFn_handler", "/_server"), Wo = createServerFn().validator((t) => t).handler(Vo), sa = createFileRoute("/_authed/_layout/chat/$chatroomId")({ params: z$1.object({ chatroomId: z$1.string() }), beforeLoad: async (t) => {
  const { chatroomId: a } = t.params;
  return { chatroom: (await Wo({ data: { chatroomId: a } })).chatroom };
}, component: qo });
function qo({ className: t, ...a }) {
  const { userId: r, chatroom: n } = sa.useRouteContext(), { chatroomId: i } = sa.useParams(), o = useRef(void 0), [l, c] = useState(false), [p, u] = useState([]), [g, d] = useState(""), h = useSetAtom(Le), x = useRef(null), m = async (N) => {
    if (!(l || !g.trim() && !N)) try {
      if (!o.current && (await y(n.id), !o.current)) {
        console.error("Couldn't establish chat connection");
        return;
      }
      await o.current.send({ data: { chatroomId: n.id || "", parentMessageId: null, isThreadStarter: false, senderId: r, content: N || g, attachments: [], isReasoning: false, reasoning: "", sources: [] }, identifier: v4(), isLastChunk: true, startIndex: 0, totalChunks: 1 }), d("");
    } catch (I) {
      console.error("Error sending message:", I);
    }
  };
  useEffect(() => {
    var _a2;
    if (h(n), ((_a2 = n.messages) == null ? void 0 : _a2.length) > 0) {
      const N = n.messages.map((I) => ({ identifier: I.id, data: I, startIndex: 0, totalChunks: 1, isLastChunk: true }));
      u(N);
    } else u([]);
    return y(n.id), () => {
      o.current && o.current.close();
    };
  }, [i]);
  const y = async (N) => {
    o.current && o.current.close(), c(true);
    try {
      o.current = await Te().chats.chat({ userId: r, chatroomId: N || N || "" }), o.current.socket.on("close", () => {
        console.log("Socket closed, will attempt to reconnect if needed");
      }), o.current.socket.on("open", async () => {
        c(false);
        const I = localStorage.getItem("pendingMessage");
        I && (await m(I), localStorage.removeItem("pendingMessage"));
      });
      for await (const I of o.current) u((_) => {
        const M = _.findIndex((L) => L.identifier === I.identifier);
        if (I.identifier.startsWith("parent-")) return _;
        if (M >= 0) {
          const L = [..._], C = L[M];
          if (I.isLastChunk) L[M] = I;
          else {
            const P = I.startIndex <= 1, k = { ...C, data: { ...C.data, content: P ? I.data.content : C.data.content + I.data.content, reasoning: P ? I.data.reasoning || "" : (C.data.reasoning || "") + (I.data.reasoning || ""), sources: I.data.sources ? [...C.data.sources || [], ...I.data.sources.filter((E) => !(C.data.sources || []).some((B) => B.id === E.id))] : C.data.sources }, isLastChunk: I.isLastChunk, totalChunks: I.totalChunks, startIndex: I.startIndex };
            L[M] = k;
          }
          return L;
        } else return [..._, I];
      });
    } catch (I) {
      console.error("Error connecting to chat:", I), c(false);
    }
  }, w = jsxs(At, { value: g, onChange: (N) => d(N.target.value), onSubmit: m, hasMessages: p.length > 0, children: [jsx(mt, { placeholder: l ? "Connecting..." : "Type a message...", autoFocus: true, disabled: l, onKeyDown: (N) => {
    N.key === "Enter" && !N.shiftKey && (N.preventDefault(), m());
  } }), jsx(Rt, { disabled: l || !g.trim() })] });
  return jsxs("div", { className: "flex-1 flex flex-col h-full", ...a, children: [jsx(ya, { scrollButtonAlignment: "center", className: "flex-1 overflow-y-auto", children: jsxs("div", { className: "max-w-4xl mx-auto w-full px-4 py-8 space-y-4", children: [p.filter((N) => !N.data.parentMessageId).map((N) => {
    var _a2;
    return jsx(Ho, { message: N, userID: r, userImage: (_a2 = io(n, N.data.senderId)) == null ? void 0 : _a2.user.image, stream: o.current, allMessages: p }, N.identifier || N.data.id);
  }), jsx("div", { ref: x })] }) }), jsx("div", { className: "px-2 py-4 max-w-4xl mx-auto w-full", children: w })] });
}
const Jo = Va.update({ id: "/verify-account", path: "/verify-account", getParentRoute: () => we }), Ko = Xs.update({ id: "/sign-up", path: "/sign-up", getParentRoute: () => we }), Yo = Zs.update({ id: "/sign-in", path: "/sign-in", getParentRoute: () => we }), Xo = ai.update({ id: "/forgot-password", path: "/forgot-password", getParentRoute: () => we }), Qo = ln.update({ id: "/create-organization", path: "/create-organization", getParentRoute: () => we }), Hn = yi.update({ id: "/_authed", getParentRoute: () => we }), Zo = cn.update({ id: "/", path: "/", getParentRoute: () => we }), xe = An.update({ id: "/_layout", getParentRoute: () => Hn }), el = Rn.update({ id: "/accept-invitation/$invitationId/$invitationEmail", path: "/accept-invitation/$invitationId/$invitationEmail", getParentRoute: () => we }), tl = En.update({ id: "/team-chat/", path: "/team-chat/", getParentRoute: () => xe }), al = jn.update({ id: "/organizations/", path: "/organizations/", getParentRoute: () => xe }), nl = _n.update({ id: "/organization-settings/", path: "/organization-settings/", getParentRoute: () => xe }), rl = On.update({ id: "/members/", path: "/members/", getParentRoute: () => xe }), sl = zn.update({ id: "/chat/", path: "/chat/", getParentRoute: () => xe }), il = $n.update({ id: "/teamspace/$teamspaceId", path: "/teamspace/$teamspaceId", getParentRoute: () => xe }), ol = Ln.update({ id: "/project/$projectId", path: "/project/$projectId", getParentRoute: () => xe }), ll = sa.update({ id: "/chat/$chatroomId", path: "/chat/$chatroomId", getParentRoute: () => xe }), cl = { AuthedLayoutChatChatroomIdRoute: ll, AuthedLayoutProjectProjectIdRoute: ol, AuthedLayoutTeamspaceTeamspaceIdRoute: il, AuthedLayoutChatIndexRoute: sl, AuthedLayoutMembersIndexRoute: rl, AuthedLayoutOrganizationSettingsIndexRoute: nl, AuthedLayoutOrganizationsIndexRoute: al, AuthedLayoutTeamChatIndexRoute: tl }, dl = xe._addFileChildren(cl), ul = { AuthedLayoutRoute: dl }, ml = Hn._addFileChildren(ul), hl = { IndexRoute: Zo, AuthedRoute: ml, CreateOrganizationRoute: Qo, ForgotPasswordRoute: Xo, SignInRoute: Yo, SignUpRoute: Ko, VerifyAccountRoute: Jo, AcceptInvitationInvitationIdInvitationEmailRoute: el }, pl = we._addFileChildren(hl)._addFileTypes();
function fl() {
  return createRouter$2({ routeTree: pl, defaultPreload: "intent", defaultErrorComponent: Ba, defaultNotFoundComponent: () => Ga, scrollRestoration: true });
}
const Jl = createStartHandler({ createRouter: fl, getRouterManifest: Ss })(Ns);

const handlers = [
  { route: '', handler: _2RLvhK, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: $$1, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: Jl, lazy: false, middleware: true, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => b$1(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return O(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    debug("received shut down signal", signal);
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error) => {
      debug("server shut down error occurred", error);
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    debug("Destroy Connections : " + (force ? "forced close" : "close"));
    let counter = 0;
    let secureCounter = 0;
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        counter++;
        destroy(socket);
      }
    }
    debug("Connections destroyed : " + counter);
    debug("Connection Counter    : " + connectionCounter);
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        secureCounter++;
        destroy(socket);
      }
    }
    debug("Secure Connections destroyed : " + secureCounter);
    debug("Secure Connection Counter    : " + secureConnectionCounter);
  }
  server.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
    debug("closed");
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      debug("Close http server");
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    debug("shutdown signal - " + sig);
    if (options.development) {
      debug("DEV-Mode - immediate forceful shutdown");
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          debug("executing finally()");
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      debug(`waitForReadyToShutDown... ${totalNumInterval}`);
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        debug("All connections closed. Continue to shutting down");
        return Promise.resolve(false);
      }
      debug("Schedule the next waitForReadyToShutdown");
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    debug("shutting down");
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      debug("Do onShutdown now");
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error) => {
      const errString = typeof error === "string" ? error : JSON.stringify(error);
      debug(errString);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((error) => {
          console.error(error);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
const server = cert && key ? new Server$1({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$2(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { $e as $, At as A, ga as B, ba as C, Qi as D, En as E, he as F, yt as G, Ho as H, Ie as I, Jt as J, Kt as K, f as L, $n as M, Nn as N, Te as O, Pe as P, Qe as Q, Rn as R, St as S, Tt as T, dt as U, Va as V, Oe as W, Xa as X, Ya as Y, Me as Z, _e as _, $ as a, Pt as a0, qi as a1, qe as a2, it as a3, Ln as a4, Le as a5, ro as a6, We as a7, nodeServer as a8, be as b, ct as c, cn as d, ao as e, Yt as f, Js as g, Rt as h, ie as i, Ja as j, Ka as k, ha as l, mt as m, Hi as n, Q as o, Ee as p, Vi as q, mi as r, yn as s, Xt as t, fa as u, vn as v, wn as w, xn as x, ya as y, ze as z };
//# sourceMappingURL=nitro.mjs.map
