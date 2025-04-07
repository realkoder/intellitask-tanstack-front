import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import http, { Server as Server$1 } from 'node:http';
import https, { Server } from 'node:https';
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
import { Provider, atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { Toaster, toast } from 'sonner';
import { inject } from '@vercel/analytics';
import { z as z$1 } from 'zod';
import * as y$1 from 'react';
import y__default, { useState, useEffect, useRef, forwardRef, createContext as createContext$1, memo, useContext, useCallback, useMemo, useLayoutEffect, Suspense, isValidElement } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as vn from '@radix-ui/react-label';
import { createAuthClient } from 'better-auth/react';
import { organizationClient, adminClient, emailOTPClient } from 'better-auth/client/plugins';
import { Mail, ArrowLeft, Bell, ExternalLink, Check, Info, Users, X, Upload, UserPlus, Circle, ChevronDown, Globe, Telescope, BrainCircuit, Split, ArrowUpIcon, AudioLines, ChevronRightIcon, ChevronUp, ChevronRight, Folder, FileText, Bot, Star, Settings, SparklesIcon, UserIcon, MessageSquareIcon, XIcon, CheckIcon, Smile, MessageSquare, Edit, Minus } from 'lucide-react';
import { OTPInput, OTPInputContext } from 'input-otp';
import * as U from '@radix-ui/react-select';
import * as pe from '@radix-ui/react-tooltip';
import * as xe from '@radix-ui/react-radio-group';
import * as le from '@radix-ui/react-scroll-area';
import { AnimatePresence, motion } from 'framer-motion';
import { animate, useMotionValue, useSpring, AnimatePresence as AnimatePresence$1, motion as motion$1 } from 'motion/react';
import * as V from '@radix-ui/react-dropdown-menu';
import { v4 } from 'uuid';
import { marked } from 'marked';
import sr from 'react-markdown';
import or from 'remark-gfm';
import * as Je from '@radix-ui/react-hover-card';
import { encode as encode$2 } from 'qss';
import * as a from '@radix-ui/react-dialog';
import { PassThrough } from 'node:stream';
import { isbot } from 'isbot';
import Ae from 'react-dom/server';

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
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
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
  const object = {};
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
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
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

function o(n){throw new Error(`${n} is not implemented yet!`)}let i$1 = class i extends EventEmitter{__unenv__={};readableEncoding=null;readableEnded=true;readableFlowing=false;readableHighWaterMark=0;readableLength=0;readableObjectMode=false;readableAborted=false;readableDidRead=false;closed=false;errored=null;readable=false;destroyed=false;static from(e,t){return new i(t)}constructor(e){super();}_read(e){}read(e){}setEncoding(e){return this}pause(){return this}resume(){return this}isPaused(){return  true}unpipe(e){return this}unshift(e,t){}wrap(e){return this}push(e,t){return  false}_destroy(e,t){this.removeAllListeners();}destroy(e){return this.destroyed=true,this._destroy(e),this}pipe(e,t){return {}}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return this.destroy(),Promise.resolve()}async*[Symbol.asyncIterator](){throw o("Readable.asyncIterator")}iterator(e){throw o("Readable.iterator")}map(e,t){throw o("Readable.map")}filter(e,t){throw o("Readable.filter")}forEach(e,t){throw o("Readable.forEach")}reduce(e,t,r){throw o("Readable.reduce")}find(e,t){throw o("Readable.find")}findIndex(e,t){throw o("Readable.findIndex")}some(e,t){throw o("Readable.some")}toArray(e){throw o("Readable.toArray")}every(e,t){throw o("Readable.every")}flatMap(e,t){throw o("Readable.flatMap")}drop(e,t){throw o("Readable.drop")}take(e,t){throw o("Readable.take")}asIndexedPairs(e){throw o("Readable.asIndexedPairs")}};let l$1 = class l extends EventEmitter{__unenv__={};writable=true;writableEnded=false;writableFinished=false;writableHighWaterMark=0;writableLength=0;writableObjectMode=false;writableCorked=0;closed=false;errored=null;writableNeedDrain=false;destroyed=false;_data;_encoding="utf8";constructor(e){super();}pipe(e,t){return {}}_write(e,t,r){if(this.writableEnded){r&&r();return}if(this._data===void 0)this._data=e;else {const s=typeof this._data=="string"?Buffer$1.from(this._data,this._encoding||t||"utf8"):this._data,a=typeof e=="string"?Buffer$1.from(e,t||this._encoding||"utf8"):e;this._data=Buffer$1.concat([s,a]);}this._encoding=t,r&&r();}_writev(e,t){}_destroy(e,t){}_final(e){}write(e,t,r){const s=typeof t=="string"?this._encoding:"utf8",a=typeof t=="function"?t:typeof r=="function"?r:void 0;return this._write(e,s,a),true}setDefaultEncoding(e){return this}end(e,t,r){const s=typeof e=="function"?e:typeof t=="function"?t:typeof r=="function"?r:void 0;if(this.writableEnded)return s&&s(),this;const a=e===s?void 0:e;if(a){const u=t===s?void 0:t;this.write(a,u,s);}return this.writableEnded=true,this.writableFinished=true,this.emit("close"),this.emit("finish"),this}cork(){}uncork(){}destroy(e){return this.destroyed=true,delete this._data,this.removeAllListeners(),this}compose(e,t){throw new Error("Method not implemented.")}};const c=class{allowHalfOpen=true;_destroy;constructor(e=new i$1,t=new l$1){Object.assign(this,e),Object.assign(this,t),this._destroy=g(e._destroy,t._destroy);}};function _(){return Object.assign(c.prototype,i$1.prototype),Object.assign(c.prototype,l$1.prototype),c}function g(...n){return function(...e){for(const t of n)t(...e);}}const m=_();let A$1 = class A extends m{__unenv__={};bufferSize=0;bytesRead=0;bytesWritten=0;connecting=false;destroyed=false;pending=false;localAddress="";localPort=0;remoteAddress="";remoteFamily="";remotePort=0;autoSelectFamilyAttemptedAddresses=[];readyState="readOnly";constructor(e){super();}write(e,t,r){return  false}connect(e,t,r){return this}end(e,t,r){return this}setEncoding(e){return this}pause(){return this}resume(){return this}setTimeout(e,t){return this}setNoDelay(e){return this}setKeepAlive(e,t){return this}address(){return {}}unref(){return this}ref(){return this}destroySoon(){this.destroy();}resetAndDestroy(){const e=new Error("ERR_SOCKET_CLOSED");return e.code="ERR_SOCKET_CLOSED",this.destroy(e),this}};class y extends i$1{aborted=false;httpVersion="1.1";httpVersionMajor=1;httpVersionMinor=1;complete=true;connection;socket;headers={};trailers={};method="GET";url="/";statusCode=200;statusMessage="";closed=false;errored=null;readable=false;constructor(e){super(),this.socket=this.connection=e||new A$1;}get rawHeaders(){const e=this.headers,t=[];for(const r in e)if(Array.isArray(e[r]))for(const s of e[r])t.push(r,s);else t.push(r,e[r]);return t}get rawTrailers(){return []}setTimeout(e,t){return this}get headersDistinct(){return p(this.headers)}get trailersDistinct(){return p(this.trailers)}}function p(n){const e={};for(const[t,r]of Object.entries(n))t&&(e[t]=(Array.isArray(r)?r:[r]).filter(Boolean));return e}class w extends l$1{statusCode=200;statusMessage="";upgrading=false;chunkedEncoding=false;shouldKeepAlive=false;useChunkedEncodingByDefault=false;sendDate=false;finished=false;headersSent=false;strictContentLength=false;connection=null;socket=null;req;_headers={};constructor(e){super(),this.req=e;}assignSocket(e){e._httpMessage=this,this.socket=e,this.connection=e,this.emit("socket",e),this._flush();}_flush(){this.flushHeaders();}detachSocket(e){}writeContinue(e){}writeHead(e,t,r){e&&(this.statusCode=e),typeof t=="string"&&(this.statusMessage=t,t=void 0);const s=r||t;if(s&&!Array.isArray(s))for(const a in s)this.setHeader(a,s[a]);return this.headersSent=true,this}writeProcessing(){}setTimeout(e,t){return this}appendHeader(e,t){e=e.toLowerCase();const r=this._headers[e],s=[...Array.isArray(r)?r:[r],...Array.isArray(t)?t:[t]].filter(Boolean);return this._headers[e]=s.length>1?s:s[0],this}setHeader(e,t){return this._headers[e.toLowerCase()]=t,this}setHeaders(e){for(const[t,r]of Object.entries(e))this.setHeader(t,r);return this}getHeader(e){return this._headers[e.toLowerCase()]}getHeaders(){return this._headers}getHeaderNames(){return Object.keys(this._headers)}hasHeader(e){return e.toLowerCase()in this._headers}removeHeader(e){delete this._headers[e.toLowerCase()];}addTrailers(e){}flushHeaders(){}writeEarlyHints(e,t){typeof t=="function"&&t();}}const E=(()=>{const n=function(){};return n.prototype=Object.create(null),n})();function R(n={}){const e=new E,t=Array.isArray(n)||H(n)?n:Object.entries(n);for(const[r,s]of t)if(s){if(e[r]===void 0){e[r]=s;continue}e[r]=[...Array.isArray(e[r])?e[r]:[e[r]],...Array.isArray(s)?s:[s]];}return e}function H(n){return typeof n?.entries=="function"}function S(n={}){if(n instanceof Headers)return n;const e=new Headers;for(const[t,r]of Object.entries(n))if(r!==void 0){if(Array.isArray(r)){for(const s of r)e.append(t,String(s));continue}e.set(t,String(r));}return e}const C$1=new Set([101,204,205,304]);async function b$1(n,e){const t=new y,r=new w(t);t.url=e.url?.toString()||"/";let s;if(!t.url.startsWith("/")){const d=new URL(t.url);s=d.host,t.url=d.pathname+d.search+d.hash;}t.method=e.method||"GET",t.headers=R(e.headers||{}),t.headers.host||(t.headers.host=e.host||s||"localhost"),t.connection.encrypted=t.connection.encrypted||e.protocol==="https",t.body=e.body||null,t.__unenv__=e.context,await n(t,r);let a=r._data;(C$1.has(r.statusCode)||t.method.toUpperCase()==="HEAD")&&(a=null,delete r._headers["content-length"]);const u={status:r.statusCode,statusText:r.statusMessage,headers:r._headers,body:a};return t.destroy(),r.destroy(),u}async function O$1(n,e,t={}){try{const r=await b$1(n,{url:e,...t});return new Response(r.body,{status:r.status,statusText:r.statusText,headers:S(r.headers)})}catch(r){return new Response(r.toString(),{status:Number.parseInt(r.statusCode||r.code)||500,statusText:r.statusText})}}

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
				const buildManifest = {"client":{"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/app/app.css":{"file":"assets/app-Cs9mLtrU.css","src":"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/app/app.css"},"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/app/index.css":{"file":"assets/index-BCQOL4kc.css","src":"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/app/index.css"},"_angular-html-0A1EF1PY.js":{"file":"assets/angular-html-0A1EF1PY.js","name":"angular-html","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs"]},"_avatar-DxhaIZ2w.js":{"file":"assets/avatar-DxhaIZ2w.js","name":"avatar","imports":["_client-CMvCw2jp.js"]},"_checkbox-DmFmSC3J.js":{"file":"assets/checkbox-DmFmSC3J.js","name":"checkbox","imports":["_client-CMvCw2jp.js"]},"_circle-plus-Cu8ULUag.js":{"file":"assets/circle-plus-Cu8ULUag.js","name":"circle-plus","imports":["_client-CMvCw2jp.js"]},"_client-CMvCw2jp.js":{"file":"assets/client-CMvCw2jp.js","name":"client","dynamicImports":["app/routes/verify-account.tsx?tsr-split=component","app/routes/index.tsx?tsr-split=component","app/routes/_authed/_layout.tsx?tsr-split=component","app/routes/accept-invitation/$invitationId.$invitationEmail.tsx?tsr-split=component","app/routes/_authed/_layout/team-chat/index.tsx?tsr-split=component","app/routes/_authed/_layout/organizations/index.tsx?tsr-split=component","app/routes/_authed/_layout/organization-settings/index.tsx?tsr-split=component","app/routes/_authed/_layout/members/index.tsx?tsr-split=component","app/routes/_authed/_layout/teamspace/$teamspaceId.tsx?tsr-split=component","app/routes/_authed/_layout/project/$projectId.tsx?tsr-split=component","node_modules/shiki/dist/index.mjs"],"assets":["assets/app-Cs9mLtrU.css","assets/index-BCQOL4kc.css"]},"_collapsible-fEEhjg5O.js":{"file":"assets/collapsible-fEEhjg5O.js","name":"collapsible","imports":["_client-CMvCw2jp.js","_dialog-idyyqogp.js","_avatar-DxhaIZ2w.js","_plus-sBaVN3vY.js"]},"_dialog-idyyqogp.js":{"file":"assets/dialog-idyyqogp.js","name":"dialog","imports":["_client-CMvCw2jp.js"]},"_folder-open-mEKpUj5E.js":{"file":"assets/folder-open-mEKpUj5E.js","name":"folder-open","imports":["_client-CMvCw2jp.js"]},"_lock-CxUcGwOm.js":{"file":"assets/lock-CxUcGwOm.js","name":"lock","imports":["_client-CMvCw2jp.js"]},"_plus-sBaVN3vY.js":{"file":"assets/plus-sBaVN3vY.js","name":"plus","imports":["_client-CMvCw2jp.js"]},"_trash-2-P1aG3-jx.js":{"file":"assets/trash-2-P1aG3-jx.js","name":"trash-2","imports":["_client-CMvCw2jp.js"]},"_useSignOut-o9qTHLdH.js":{"file":"assets/useSignOut-o9qTHLdH.js","name":"useSignOut","imports":["_client-CMvCw2jp.js"]},"app/assets/img/IntelliOptima-Black-Text-Logo.webp":{"file":"assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp","src":"app/assets/img/IntelliOptima-Black-Text-Logo.webp"},"app/routes/_authed/_layout.tsx?tsr-split=component":{"file":"assets/_layout-DNEaEcqH.js","name":"_layout","src":"app/routes/_authed/_layout.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-CMvCw2jp.js","_avatar-DxhaIZ2w.js","_folder-open-mEKpUj5E.js","_dialog-idyyqogp.js","_checkbox-DmFmSC3J.js","_plus-sBaVN3vY.js","_circle-plus-Cu8ULUag.js","_useSignOut-o9qTHLdH.js"],"assets":["assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp"]},"app/routes/_authed/_layout/members/index.tsx?tsr-split=component":{"file":"assets/index-Zg7tyrW1.js","name":"index","src":"app/routes/_authed/_layout/members/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-CMvCw2jp.js","_dialog-idyyqogp.js","_checkbox-DmFmSC3J.js","_trash-2-P1aG3-jx.js"]},"app/routes/_authed/_layout/organization-settings/index.tsx?tsr-split=component":{"file":"assets/index-D4Sbh5Bj.js","name":"index","src":"app/routes/_authed/_layout/organization-settings/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-CMvCw2jp.js","_dialog-idyyqogp.js"]},"app/routes/_authed/_layout/organizations/index.tsx?tsr-split=component":{"file":"assets/index-ByYxuMTR.js","name":"index","src":"app/routes/_authed/_layout/organizations/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-CMvCw2jp.js","_plus-sBaVN3vY.js"]},"app/routes/_authed/_layout/project/$projectId.tsx?tsr-split=component":{"file":"assets/_projectId-D0HvoMWz.js","name":"_projectId","src":"app/routes/_authed/_layout/project/$projectId.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-CMvCw2jp.js","_collapsible-fEEhjg5O.js","_dialog-idyyqogp.js","_checkbox-DmFmSC3J.js","_lock-CxUcGwOm.js","_trash-2-P1aG3-jx.js","_avatar-DxhaIZ2w.js","_folder-open-mEKpUj5E.js","_plus-sBaVN3vY.js"]},"app/routes/_authed/_layout/team-chat/index.tsx?tsr-split=component":{"file":"assets/index-CruqTYBh.js","name":"index","src":"app/routes/_authed/_layout/team-chat/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-CMvCw2jp.js"]},"app/routes/_authed/_layout/teamspace/$teamspaceId.tsx?tsr-split=component":{"file":"assets/_teamspaceId-By-wuXhF.js","name":"_teamspaceId","src":"app/routes/_authed/_layout/teamspace/$teamspaceId.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-CMvCw2jp.js","_collapsible-fEEhjg5O.js","_dialog-idyyqogp.js","_checkbox-DmFmSC3J.js","_lock-CxUcGwOm.js","_avatar-DxhaIZ2w.js","_circle-plus-Cu8ULUag.js","_plus-sBaVN3vY.js"]},"app/routes/accept-invitation/$invitationId.$invitationEmail.tsx?tsr-split=component":{"file":"assets/_invitationId._invitationEmail-C_LeU5Rh.js","name":"_invitationId._invitationEmail","src":"app/routes/accept-invitation/$invitationId.$invitationEmail.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-CMvCw2jp.js","_useSignOut-o9qTHLdH.js"]},"app/routes/index.tsx?tsr-split=component":{"file":"assets/index-Co8wnLPe.js","name":"index","src":"app/routes/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-CMvCw2jp.js","_lock-CxUcGwOm.js"]},"app/routes/verify-account.tsx?tsr-split=component":{"file":"assets/verify-account-BSPgybvY.js","name":"verify-account","src":"app/routes/verify-account.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-CMvCw2jp.js"]},"node_modules/@shikijs/langs/dist/abap.mjs":{"file":"assets/abap-DsBKuouk.js","name":"abap","src":"node_modules/@shikijs/langs/dist/abap.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/actionscript-3.mjs":{"file":"assets/actionscript-3-B_7mSSNY.js","name":"actionscript-3","src":"node_modules/@shikijs/langs/dist/actionscript-3.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/ada.mjs":{"file":"assets/ada-727ZlQH0.js","name":"ada","src":"node_modules/@shikijs/langs/dist/ada.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/angular-ts.mjs":{"file":"assets/angular-ts-BQ_2sjHF.js","name":"angular-ts","src":"node_modules/@shikijs/langs/dist/angular-ts.mjs","isDynamicEntry":true,"imports":["_angular-html-0A1EF1PY.js","node_modules/@shikijs/langs/dist/scss.mjs","node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/apache.mjs":{"file":"assets/apache-Dn00JSTd.js","name":"apache","src":"node_modules/@shikijs/langs/dist/apache.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/apex.mjs":{"file":"assets/apex-COJ4H7py.js","name":"apex","src":"node_modules/@shikijs/langs/dist/apex.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/apl.mjs":{"file":"assets/apl-DkRiwRYE.js","name":"apl","src":"node_modules/@shikijs/langs/dist/apl.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/java.mjs"]},"node_modules/@shikijs/langs/dist/applescript.mjs":{"file":"assets/applescript-DSrUkfvF.js","name":"applescript","src":"node_modules/@shikijs/langs/dist/applescript.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/ara.mjs":{"file":"assets/ara-CQ5q8R2W.js","name":"ara","src":"node_modules/@shikijs/langs/dist/ara.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/asciidoc.mjs":{"file":"assets/asciidoc-B-_AxZdj.js","name":"asciidoc","src":"node_modules/@shikijs/langs/dist/asciidoc.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/asm.mjs":{"file":"assets/asm-Dhn9LcZ4.js","name":"asm","src":"node_modules/@shikijs/langs/dist/asm.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/astro.mjs":{"file":"assets/astro-6Nq8D0ds.js","name":"astro","src":"node_modules/@shikijs/langs/dist/astro.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/postcss.mjs"]},"node_modules/@shikijs/langs/dist/awk.mjs":{"file":"assets/awk-eg146-Ew.js","name":"awk","src":"node_modules/@shikijs/langs/dist/awk.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/ballerina.mjs":{"file":"assets/ballerina-Du268qiB.js","name":"ballerina","src":"node_modules/@shikijs/langs/dist/ballerina.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/bat.mjs":{"file":"assets/bat-fje9CFhw.js","name":"bat","src":"node_modules/@shikijs/langs/dist/bat.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/beancount.mjs":{"file":"assets/beancount-jY9aw0fr.js","name":"beancount","src":"node_modules/@shikijs/langs/dist/beancount.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/berry.mjs":{"file":"assets/berry-3xVqZejG.js","name":"berry","src":"node_modules/@shikijs/langs/dist/berry.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/bibtex.mjs":{"file":"assets/bibtex-xW4inM5L.js","name":"bibtex","src":"node_modules/@shikijs/langs/dist/bibtex.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/bicep.mjs":{"file":"assets/bicep-DHo0CJ0O.js","name":"bicep","src":"node_modules/@shikijs/langs/dist/bicep.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/blade.mjs":{"file":"assets/blade-BPCFRWwN.js","name":"blade","src":"node_modules/@shikijs/langs/dist/blade.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/java.mjs"]},"node_modules/@shikijs/langs/dist/bsl.mjs":{"file":"assets/bsl-0rw82Q3C.js","name":"bsl","src":"node_modules/@shikijs/langs/dist/bsl.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/sdbl.mjs"]},"node_modules/@shikijs/langs/dist/c.mjs":{"file":"assets/c-C3t2pwGQ.js","name":"c","src":"node_modules/@shikijs/langs/dist/c.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/cadence.mjs":{"file":"assets/cadence-Olw6fvns.js","name":"cadence","src":"node_modules/@shikijs/langs/dist/cadence.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/cairo.mjs":{"file":"assets/cairo-DzT9zD9X.js","name":"cairo","src":"node_modules/@shikijs/langs/dist/cairo.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/python.mjs"]},"node_modules/@shikijs/langs/dist/clarity.mjs":{"file":"assets/clarity-CeaQPKDP.js","name":"clarity","src":"node_modules/@shikijs/langs/dist/clarity.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/clojure.mjs":{"file":"assets/clojure-DxSadP1t.js","name":"clojure","src":"node_modules/@shikijs/langs/dist/clojure.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/cmake.mjs":{"file":"assets/cmake-DbcauaCG.js","name":"cmake","src":"node_modules/@shikijs/langs/dist/cmake.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/cobol.mjs":{"file":"assets/cobol-PXo7EpZU.js","name":"cobol","src":"node_modules/@shikijs/langs/dist/cobol.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/java.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/codeowners.mjs":{"file":"assets/codeowners-Bp6g37R7.js","name":"codeowners","src":"node_modules/@shikijs/langs/dist/codeowners.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/codeql.mjs":{"file":"assets/codeql-DBtIRQT_.js","name":"codeql","src":"node_modules/@shikijs/langs/dist/codeql.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/coffee.mjs":{"file":"assets/coffee-dyiR41kL.js","name":"coffee","src":"node_modules/@shikijs/langs/dist/coffee.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/javascript.mjs"]},"node_modules/@shikijs/langs/dist/common-lisp.mjs":{"file":"assets/common-lisp-C7gG9l05.js","name":"common-lisp","src":"node_modules/@shikijs/langs/dist/common-lisp.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/coq.mjs":{"file":"assets/coq-BHyGnp0Z.js","name":"coq","src":"node_modules/@shikijs/langs/dist/coq.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/cpp.mjs":{"file":"assets/cpp-DXc6Zn63.js","name":"cpp","src":"node_modules/@shikijs/langs/dist/cpp.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/regexp.mjs","node_modules/@shikijs/langs/dist/glsl.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/c.mjs"]},"node_modules/@shikijs/langs/dist/crystal.mjs":{"file":"assets/crystal-BANhDVLs.js","name":"crystal","src":"node_modules/@shikijs/langs/dist/crystal.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/c.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/shellscript.mjs"]},"node_modules/@shikijs/langs/dist/csharp.mjs":{"file":"assets/csharp-C9e09xm7.js","name":"csharp","src":"node_modules/@shikijs/langs/dist/csharp.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/css.mjs":{"file":"assets/css-BPhBrDlE.js","name":"css","src":"node_modules/@shikijs/langs/dist/css.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/csv.mjs":{"file":"assets/csv-B0qRVHPH.js","name":"csv","src":"node_modules/@shikijs/langs/dist/csv.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/cue.mjs":{"file":"assets/cue-DtFQj3wx.js","name":"cue","src":"node_modules/@shikijs/langs/dist/cue.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/cypher.mjs":{"file":"assets/cypher-Dp08fnRF.js","name":"cypher","src":"node_modules/@shikijs/langs/dist/cypher.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/d.mjs":{"file":"assets/d-BoXegm-a.js","name":"d","src":"node_modules/@shikijs/langs/dist/d.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/dart.mjs":{"file":"assets/dart-B9wLZaAG.js","name":"dart","src":"node_modules/@shikijs/langs/dist/dart.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/dax.mjs":{"file":"assets/dax-D_iqerNF.js","name":"dax","src":"node_modules/@shikijs/langs/dist/dax.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/desktop.mjs":{"file":"assets/desktop-DEIpsLCJ.js","name":"desktop","src":"node_modules/@shikijs/langs/dist/desktop.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/diff.mjs":{"file":"assets/diff-DERFIACx.js","name":"diff","src":"node_modules/@shikijs/langs/dist/diff.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/docker.mjs":{"file":"assets/docker-BcOcwvcX.js","name":"docker","src":"node_modules/@shikijs/langs/dist/docker.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/dotenv.mjs":{"file":"assets/dotenv-Ddn3lr0y.js","name":"dotenv","src":"node_modules/@shikijs/langs/dist/dotenv.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/dream-maker.mjs":{"file":"assets/dream-maker-2V0Ap-uE.js","name":"dream-maker","src":"node_modules/@shikijs/langs/dist/dream-maker.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/edge.mjs":{"file":"assets/edge-DtcDOGsI.js","name":"edge","src":"node_modules/@shikijs/langs/dist/edge.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/html-derivative.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/elixir.mjs":{"file":"assets/elixir-BigP6_ue.js","name":"elixir","src":"node_modules/@shikijs/langs/dist/elixir.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/elm.mjs":{"file":"assets/elm-0zW53zC1.js","name":"elm","src":"node_modules/@shikijs/langs/dist/elm.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/glsl.mjs","node_modules/@shikijs/langs/dist/c.mjs"]},"node_modules/@shikijs/langs/dist/emacs-lisp.mjs":{"file":"assets/emacs-lisp-BX77sIaO.js","name":"emacs-lisp","src":"node_modules/@shikijs/langs/dist/emacs-lisp.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/erb.mjs":{"file":"assets/erb-HE-c_T40.js","name":"erb","src":"node_modules/@shikijs/langs/dist/erb.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/ruby.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/haml.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/java.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/graphql.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/jsx.mjs","node_modules/@shikijs/langs/dist/tsx.mjs","node_modules/@shikijs/langs/dist/cpp.mjs","node_modules/@shikijs/langs/dist/regexp.mjs","node_modules/@shikijs/langs/dist/glsl.mjs","node_modules/@shikijs/langs/dist/c.mjs","node_modules/@shikijs/langs/dist/shellscript.mjs","node_modules/@shikijs/langs/dist/lua.mjs","node_modules/@shikijs/langs/dist/yaml.mjs"]},"node_modules/@shikijs/langs/dist/erlang.mjs":{"file":"assets/erlang-WlOKAcJ7.js","name":"erlang","src":"node_modules/@shikijs/langs/dist/erlang.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/fennel.mjs":{"file":"assets/fennel-bCA53EVm.js","name":"fennel","src":"node_modules/@shikijs/langs/dist/fennel.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/fish.mjs":{"file":"assets/fish-BLmoVg8f.js","name":"fish","src":"node_modules/@shikijs/langs/dist/fish.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/fluent.mjs":{"file":"assets/fluent-Dayu4EKP.js","name":"fluent","src":"node_modules/@shikijs/langs/dist/fluent.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/fortran-fixed-form.mjs":{"file":"assets/fortran-fixed-form-CMvLjigt.js","name":"fortran-fixed-form","src":"node_modules/@shikijs/langs/dist/fortran-fixed-form.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/fortran-free-form.mjs"]},"node_modules/@shikijs/langs/dist/fortran-free-form.mjs":{"file":"assets/fortran-free-form-DjP-tqRL.js","name":"fortran-free-form","src":"node_modules/@shikijs/langs/dist/fortran-free-form.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/fsharp.mjs":{"file":"assets/fsharp-BPKZXYjh.js","name":"fsharp","src":"node_modules/@shikijs/langs/dist/fsharp.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/markdown.mjs"]},"node_modules/@shikijs/langs/dist/gdresource.mjs":{"file":"assets/gdresource-N9nUj_Sl.js","name":"gdresource","src":"node_modules/@shikijs/langs/dist/gdresource.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/gdshader.mjs","node_modules/@shikijs/langs/dist/gdscript.mjs"]},"node_modules/@shikijs/langs/dist/gdscript.mjs":{"file":"assets/gdscript-CCbUEAxs.js","name":"gdscript","src":"node_modules/@shikijs/langs/dist/gdscript.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/gdshader.mjs":{"file":"assets/gdshader-SKMF96pI.js","name":"gdshader","src":"node_modules/@shikijs/langs/dist/gdshader.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/genie.mjs":{"file":"assets/genie-ajMbGru0.js","name":"genie","src":"node_modules/@shikijs/langs/dist/genie.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/gherkin.mjs":{"file":"assets/gherkin--30QC5Em.js","name":"gherkin","src":"node_modules/@shikijs/langs/dist/gherkin.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/git-commit.mjs":{"file":"assets/git-commit-BhPX3RR1.js","name":"git-commit","src":"node_modules/@shikijs/langs/dist/git-commit.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/diff.mjs"]},"node_modules/@shikijs/langs/dist/git-rebase.mjs":{"file":"assets/git-rebase-uGYh9tYw.js","name":"git-rebase","src":"node_modules/@shikijs/langs/dist/git-rebase.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/shellscript.mjs"]},"node_modules/@shikijs/langs/dist/gleam.mjs":{"file":"assets/gleam-B430Bg39.js","name":"gleam","src":"node_modules/@shikijs/langs/dist/gleam.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/glimmer-js.mjs":{"file":"assets/glimmer-js-CxrE9ua0.js","name":"glimmer-js","src":"node_modules/@shikijs/langs/dist/glimmer-js.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/html.mjs"]},"node_modules/@shikijs/langs/dist/glimmer-ts.mjs":{"file":"assets/glimmer-ts-CkqoYwsv.js","name":"glimmer-ts","src":"node_modules/@shikijs/langs/dist/glimmer-ts.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/html.mjs"]},"node_modules/@shikijs/langs/dist/glsl.mjs":{"file":"assets/glsl-DBO2IWDn.js","name":"glsl","src":"node_modules/@shikijs/langs/dist/glsl.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/c.mjs"]},"node_modules/@shikijs/langs/dist/gnuplot.mjs":{"file":"assets/gnuplot-CM8KxXT1.js","name":"gnuplot","src":"node_modules/@shikijs/langs/dist/gnuplot.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/go.mjs":{"file":"assets/go-Dtn5OO9k.js","name":"go","src":"node_modules/@shikijs/langs/dist/go.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/graphql.mjs":{"file":"assets/graphql-DCjtUNCr.js","name":"graphql","src":"node_modules/@shikijs/langs/dist/graphql.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/jsx.mjs","node_modules/@shikijs/langs/dist/tsx.mjs"]},"node_modules/@shikijs/langs/dist/groovy.mjs":{"file":"assets/groovy-Blx2zv3z.js","name":"groovy","src":"node_modules/@shikijs/langs/dist/groovy.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/hack.mjs":{"file":"assets/hack-oRCDNDMe.js","name":"hack","src":"node_modules/@shikijs/langs/dist/hack.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/haml.mjs":{"file":"assets/haml-DeHWu7Vy.js","name":"haml","src":"node_modules/@shikijs/langs/dist/haml.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/handlebars.mjs":{"file":"assets/handlebars-DQyaA0Rc.js","name":"handlebars","src":"node_modules/@shikijs/langs/dist/handlebars.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/yaml.mjs"]},"node_modules/@shikijs/langs/dist/haskell.mjs":{"file":"assets/haskell-CWgbWrzg.js","name":"haskell","src":"node_modules/@shikijs/langs/dist/haskell.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/haxe.mjs":{"file":"assets/haxe-C5wWYbrZ.js","name":"haxe","src":"node_modules/@shikijs/langs/dist/haxe.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/hcl.mjs":{"file":"assets/hcl-CucaAMjX.js","name":"hcl","src":"node_modules/@shikijs/langs/dist/hcl.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/hjson.mjs":{"file":"assets/hjson-T-Tgc4AT.js","name":"hjson","src":"node_modules/@shikijs/langs/dist/hjson.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/hlsl.mjs":{"file":"assets/hlsl-ifBTmRxC.js","name":"hlsl","src":"node_modules/@shikijs/langs/dist/hlsl.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/html-derivative.mjs":{"file":"assets/html-derivative-CAzaCcJ8.js","name":"html-derivative","src":"node_modules/@shikijs/langs/dist/html-derivative.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/html.mjs":{"file":"assets/html-Dy5dLvcr.js","name":"html","src":"node_modules/@shikijs/langs/dist/html.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/http.mjs":{"file":"assets/http-D7RGPc5S.js","name":"http","src":"node_modules/@shikijs/langs/dist/http.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/shellscript.mjs","node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/graphql.mjs","node_modules/@shikijs/langs/dist/java.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/jsx.mjs","node_modules/@shikijs/langs/dist/tsx.mjs"]},"node_modules/@shikijs/langs/dist/hxml.mjs":{"file":"assets/hxml-TIA70rKU.js","name":"hxml","src":"node_modules/@shikijs/langs/dist/hxml.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/haxe.mjs"]},"node_modules/@shikijs/langs/dist/hy.mjs":{"file":"assets/hy-BMj5Y0dO.js","name":"hy","src":"node_modules/@shikijs/langs/dist/hy.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/imba.mjs":{"file":"assets/imba-bv_oIlVt.js","name":"imba","src":"node_modules/@shikijs/langs/dist/imba.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/typescript.mjs"]},"node_modules/@shikijs/langs/dist/ini.mjs":{"file":"assets/ini-BjABl1g7.js","name":"ini","src":"node_modules/@shikijs/langs/dist/ini.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/java.mjs":{"file":"assets/java-xI-RfyKK.js","name":"java","src":"node_modules/@shikijs/langs/dist/java.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/javascript.mjs":{"file":"assets/javascript-ySlJ1b_l.js","name":"javascript","src":"node_modules/@shikijs/langs/dist/javascript.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/jinja.mjs":{"file":"assets/jinja-V0eE2z2R.js","name":"jinja","src":"node_modules/@shikijs/langs/dist/jinja.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/jison.mjs":{"file":"assets/jison-BqZprYcd.js","name":"jison","src":"node_modules/@shikijs/langs/dist/jison.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/javascript.mjs"]},"node_modules/@shikijs/langs/dist/json.mjs":{"file":"assets/json-DTAJTTim.js","name":"json","src":"node_modules/@shikijs/langs/dist/json.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/json5.mjs":{"file":"assets/json5-BLCLeV30.js","name":"json5","src":"node_modules/@shikijs/langs/dist/json5.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/jsonc.mjs":{"file":"assets/jsonc-CR_dl2Bk.js","name":"jsonc","src":"node_modules/@shikijs/langs/dist/jsonc.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/jsonl.mjs":{"file":"assets/jsonl-YSxxb8je.js","name":"jsonl","src":"node_modules/@shikijs/langs/dist/jsonl.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/jsonnet.mjs":{"file":"assets/jsonnet-BfivnA6A.js","name":"jsonnet","src":"node_modules/@shikijs/langs/dist/jsonnet.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/jssm.mjs":{"file":"assets/jssm-CQPZbkWf.js","name":"jssm","src":"node_modules/@shikijs/langs/dist/jssm.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/jsx.mjs":{"file":"assets/jsx-BAng5TT0.js","name":"jsx","src":"node_modules/@shikijs/langs/dist/jsx.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/julia.mjs":{"file":"assets/julia-B15RSDUV.js","name":"julia","src":"node_modules/@shikijs/langs/dist/julia.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/cpp.mjs","node_modules/@shikijs/langs/dist/python.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/r.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/regexp.mjs","node_modules/@shikijs/langs/dist/glsl.mjs","node_modules/@shikijs/langs/dist/c.mjs"]},"node_modules/@shikijs/langs/dist/kotlin.mjs":{"file":"assets/kotlin-B5lbUyaz.js","name":"kotlin","src":"node_modules/@shikijs/langs/dist/kotlin.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/kusto.mjs":{"file":"assets/kusto-BZ4qjH1z.js","name":"kusto","src":"node_modules/@shikijs/langs/dist/kusto.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/latex.mjs":{"file":"assets/latex-B7S_v0-W.js","name":"latex","src":"node_modules/@shikijs/langs/dist/latex.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/tex.mjs","node_modules/@shikijs/langs/dist/r.mjs"]},"node_modules/@shikijs/langs/dist/lean.mjs":{"file":"assets/lean-XBlWyCtg.js","name":"lean","src":"node_modules/@shikijs/langs/dist/lean.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/less.mjs":{"file":"assets/less-BR4n0CG2.js","name":"less","src":"node_modules/@shikijs/langs/dist/less.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/liquid.mjs":{"file":"assets/liquid-ChyiIx6a.js","name":"liquid","src":"node_modules/@shikijs/langs/dist/liquid.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/javascript.mjs"]},"node_modules/@shikijs/langs/dist/log.mjs":{"file":"assets/log-Cc5clBb7.js","name":"log","src":"node_modules/@shikijs/langs/dist/log.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/logo.mjs":{"file":"assets/logo-IuBKFhSY.js","name":"logo","src":"node_modules/@shikijs/langs/dist/logo.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/lua.mjs":{"file":"assets/lua-CvWAzNxB.js","name":"lua","src":"node_modules/@shikijs/langs/dist/lua.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/c.mjs"]},"node_modules/@shikijs/langs/dist/luau.mjs":{"file":"assets/luau-Du5NY7AG.js","name":"luau","src":"node_modules/@shikijs/langs/dist/luau.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/make.mjs":{"file":"assets/make-Bvotw-X0.js","name":"make","src":"node_modules/@shikijs/langs/dist/make.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/markdown.mjs":{"file":"assets/markdown-BDiHrqA7.js","name":"markdown","src":"node_modules/@shikijs/langs/dist/markdown.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/marko.mjs":{"file":"assets/marko-DL0akeRX.js","name":"marko","src":"node_modules/@shikijs/langs/dist/marko.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/less.mjs","node_modules/@shikijs/langs/dist/scss.mjs","node_modules/@shikijs/langs/dist/javascript.mjs"]},"node_modules/@shikijs/langs/dist/matlab.mjs":{"file":"assets/matlab-C4-SGcC-.js","name":"matlab","src":"node_modules/@shikijs/langs/dist/matlab.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/mdc.mjs":{"file":"assets/mdc-CGDDvl7x.js","name":"mdc","src":"node_modules/@shikijs/langs/dist/mdc.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/markdown.mjs","node_modules/@shikijs/langs/dist/yaml.mjs","node_modules/@shikijs/langs/dist/html-derivative.mjs","node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/mdx.mjs":{"file":"assets/mdx-sdHcTMYB.js","name":"mdx","src":"node_modules/@shikijs/langs/dist/mdx.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/mermaid.mjs":{"file":"assets/mermaid-D3T736Ml.js","name":"mermaid","src":"node_modules/@shikijs/langs/dist/mermaid.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/mipsasm.mjs":{"file":"assets/mipsasm-D08_rs9c.js","name":"mipsasm","src":"node_modules/@shikijs/langs/dist/mipsasm.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/mojo.mjs":{"file":"assets/mojo-tpHetfZQ.js","name":"mojo","src":"node_modules/@shikijs/langs/dist/mojo.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/move.mjs":{"file":"assets/move-C1YtDkjL.js","name":"move","src":"node_modules/@shikijs/langs/dist/move.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/narrat.mjs":{"file":"assets/narrat-DLbgOhZU.js","name":"narrat","src":"node_modules/@shikijs/langs/dist/narrat.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/nextflow.mjs":{"file":"assets/nextflow-B0XVJmRM.js","name":"nextflow","src":"node_modules/@shikijs/langs/dist/nextflow.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/nginx.mjs":{"file":"assets/nginx-D_VnBJ67.js","name":"nginx","src":"node_modules/@shikijs/langs/dist/nginx.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/lua.mjs","node_modules/@shikijs/langs/dist/c.mjs"]},"node_modules/@shikijs/langs/dist/nim.mjs":{"file":"assets/nim-Chhr1h2T.js","name":"nim","src":"node_modules/@shikijs/langs/dist/nim.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/c.mjs","node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/glsl.mjs","node_modules/@shikijs/langs/dist/markdown.mjs","node_modules/@shikijs/langs/dist/java.mjs"]},"node_modules/@shikijs/langs/dist/nix.mjs":{"file":"assets/nix-Bjjh7dxw.js","name":"nix","src":"node_modules/@shikijs/langs/dist/nix.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/nushell.mjs":{"file":"assets/nushell-BekpkmYp.js","name":"nushell","src":"node_modules/@shikijs/langs/dist/nushell.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/objective-c.mjs":{"file":"assets/objective-c-BWx0ALLs.js","name":"objective-c","src":"node_modules/@shikijs/langs/dist/objective-c.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/objective-cpp.mjs":{"file":"assets/objective-cpp-aBZrgJR0.js","name":"objective-cpp","src":"node_modules/@shikijs/langs/dist/objective-cpp.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/ocaml.mjs":{"file":"assets/ocaml-BNioltXt.js","name":"ocaml","src":"node_modules/@shikijs/langs/dist/ocaml.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/pascal.mjs":{"file":"assets/pascal-JqZropPD.js","name":"pascal","src":"node_modules/@shikijs/langs/dist/pascal.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/perl.mjs":{"file":"assets/perl-DO8QnyoS.js","name":"perl","src":"node_modules/@shikijs/langs/dist/perl.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/java.mjs"]},"node_modules/@shikijs/langs/dist/php.mjs":{"file":"assets/php-udX19NJh.js","name":"php","src":"node_modules/@shikijs/langs/dist/php.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/java.mjs"]},"node_modules/@shikijs/langs/dist/plsql.mjs":{"file":"assets/plsql-LKU2TuZ1.js","name":"plsql","src":"node_modules/@shikijs/langs/dist/plsql.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/po.mjs":{"file":"assets/po--71hrkjd.js","name":"po","src":"node_modules/@shikijs/langs/dist/po.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/polar.mjs":{"file":"assets/polar-sY1Cc3Se.js","name":"polar","src":"node_modules/@shikijs/langs/dist/polar.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/postcss.mjs":{"file":"assets/postcss-B3ZDOciz.js","name":"postcss","src":"node_modules/@shikijs/langs/dist/postcss.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/powerquery.mjs":{"file":"assets/powerquery-CSHBycmS.js","name":"powerquery","src":"node_modules/@shikijs/langs/dist/powerquery.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/powershell.mjs":{"file":"assets/powershell-BXl-Qilg.js","name":"powershell","src":"node_modules/@shikijs/langs/dist/powershell.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/prisma.mjs":{"file":"assets/prisma-B48N-Iqd.js","name":"prisma","src":"node_modules/@shikijs/langs/dist/prisma.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/prolog.mjs":{"file":"assets/prolog-BY-TUvya.js","name":"prolog","src":"node_modules/@shikijs/langs/dist/prolog.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/proto.mjs":{"file":"assets/proto-zocC4JxJ.js","name":"proto","src":"node_modules/@shikijs/langs/dist/proto.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/pug.mjs":{"file":"assets/pug-VMgWr3jy.js","name":"pug","src":"node_modules/@shikijs/langs/dist/pug.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/html.mjs"]},"node_modules/@shikijs/langs/dist/puppet.mjs":{"file":"assets/puppet-COl1u60l.js","name":"puppet","src":"node_modules/@shikijs/langs/dist/puppet.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/purescript.mjs":{"file":"assets/purescript-Bg-kzb6g.js","name":"purescript","src":"node_modules/@shikijs/langs/dist/purescript.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/python.mjs":{"file":"assets/python-DBPt_AfP.js","name":"python","src":"node_modules/@shikijs/langs/dist/python.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/qml.mjs":{"file":"assets/qml-D8XfuvdV.js","name":"qml","src":"node_modules/@shikijs/langs/dist/qml.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/javascript.mjs"]},"node_modules/@shikijs/langs/dist/qmldir.mjs":{"file":"assets/qmldir-C8lEn-DE.js","name":"qmldir","src":"node_modules/@shikijs/langs/dist/qmldir.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/qss.mjs":{"file":"assets/qss-DhMKtDLN.js","name":"qss","src":"node_modules/@shikijs/langs/dist/qss.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/r.mjs":{"file":"assets/r-CwjWoCRV.js","name":"r","src":"node_modules/@shikijs/langs/dist/r.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/racket.mjs":{"file":"assets/racket-CzouJOBO.js","name":"racket","src":"node_modules/@shikijs/langs/dist/racket.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/raku.mjs":{"file":"assets/raku-B1bQXN8T.js","name":"raku","src":"node_modules/@shikijs/langs/dist/raku.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/razor.mjs":{"file":"assets/razor-AC3CASG2.js","name":"razor","src":"node_modules/@shikijs/langs/dist/razor.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/csharp.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/reg.mjs":{"file":"assets/reg-5LuOXUq_.js","name":"reg","src":"node_modules/@shikijs/langs/dist/reg.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/regexp.mjs":{"file":"assets/regexp-DFERiEu9.js","name":"regexp","src":"node_modules/@shikijs/langs/dist/regexp.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/rel.mjs":{"file":"assets/rel-DJlmqQ1C.js","name":"rel","src":"node_modules/@shikijs/langs/dist/rel.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/riscv.mjs":{"file":"assets/riscv-BAxNRJcx.js","name":"riscv","src":"node_modules/@shikijs/langs/dist/riscv.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/rst.mjs":{"file":"assets/rst-DOyLYcpU.js","name":"rst","src":"node_modules/@shikijs/langs/dist/rst.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html-derivative.mjs","node_modules/@shikijs/langs/dist/cpp.mjs","node_modules/@shikijs/langs/dist/python.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/shellscript.mjs","node_modules/@shikijs/langs/dist/yaml.mjs","node_modules/@shikijs/langs/dist/cmake.mjs","node_modules/@shikijs/langs/dist/ruby.mjs","node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/regexp.mjs","node_modules/@shikijs/langs/dist/glsl.mjs","node_modules/@shikijs/langs/dist/c.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/haml.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/java.mjs","node_modules/@shikijs/langs/dist/graphql.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/jsx.mjs","node_modules/@shikijs/langs/dist/tsx.mjs","node_modules/@shikijs/langs/dist/lua.mjs"]},"node_modules/@shikijs/langs/dist/ruby.mjs":{"file":"assets/ruby-BWnuaWfc.js","name":"ruby","src":"node_modules/@shikijs/langs/dist/ruby.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/haml.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/graphql.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/cpp.mjs","node_modules/@shikijs/langs/dist/c.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/shellscript.mjs","node_modules/@shikijs/langs/dist/lua.mjs","node_modules/@shikijs/langs/dist/yaml.mjs","node_modules/@shikijs/langs/dist/java.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/jsx.mjs","node_modules/@shikijs/langs/dist/tsx.mjs","node_modules/@shikijs/langs/dist/regexp.mjs","node_modules/@shikijs/langs/dist/glsl.mjs"]},"node_modules/@shikijs/langs/dist/rust.mjs":{"file":"assets/rust-Cg69lM4A.js","name":"rust","src":"node_modules/@shikijs/langs/dist/rust.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/sas.mjs":{"file":"assets/sas-CCCYgBRj.js","name":"sas","src":"node_modules/@shikijs/langs/dist/sas.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/sql.mjs"]},"node_modules/@shikijs/langs/dist/sass.mjs":{"file":"assets/sass-DjCbjd0V.js","name":"sass","src":"node_modules/@shikijs/langs/dist/sass.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/scala.mjs":{"file":"assets/scala-DPWDxuKt.js","name":"scala","src":"node_modules/@shikijs/langs/dist/scala.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/scheme.mjs":{"file":"assets/scheme-D8P4R8x9.js","name":"scheme","src":"node_modules/@shikijs/langs/dist/scheme.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/scss.mjs":{"file":"assets/scss-C31hgJw-.js","name":"scss","src":"node_modules/@shikijs/langs/dist/scss.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/sdbl.mjs":{"file":"assets/sdbl-CSHvh9SD.js","name":"sdbl","src":"node_modules/@shikijs/langs/dist/sdbl.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/shaderlab.mjs":{"file":"assets/shaderlab-B7qAK45m.js","name":"shaderlab","src":"node_modules/@shikijs/langs/dist/shaderlab.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/hlsl.mjs"]},"node_modules/@shikijs/langs/dist/shellscript.mjs":{"file":"assets/shellscript-CWGUrYGm.js","name":"shellscript","src":"node_modules/@shikijs/langs/dist/shellscript.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/shellsession.mjs":{"file":"assets/shellsession-DN36oS-i.js","name":"shellsession","src":"node_modules/@shikijs/langs/dist/shellsession.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/shellscript.mjs"]},"node_modules/@shikijs/langs/dist/smalltalk.mjs":{"file":"assets/smalltalk-RJ4jLoVH.js","name":"smalltalk","src":"node_modules/@shikijs/langs/dist/smalltalk.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/solidity.mjs":{"file":"assets/solidity-C1w2a3ep.js","name":"solidity","src":"node_modules/@shikijs/langs/dist/solidity.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/soy.mjs":{"file":"assets/soy-CxmeJsH_.js","name":"soy","src":"node_modules/@shikijs/langs/dist/soy.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/sparql.mjs":{"file":"assets/sparql-bYkjHRlG.js","name":"sparql","src":"node_modules/@shikijs/langs/dist/sparql.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/turtle.mjs"]},"node_modules/@shikijs/langs/dist/splunk.mjs":{"file":"assets/splunk-a8RH-YUw.js","name":"splunk","src":"node_modules/@shikijs/langs/dist/splunk.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/sql.mjs":{"file":"assets/sql-BBT0u3iQ.js","name":"sql","src":"node_modules/@shikijs/langs/dist/sql.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/ssh-config.mjs":{"file":"assets/ssh-config-BknIz3MU.js","name":"ssh-config","src":"node_modules/@shikijs/langs/dist/ssh-config.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/stata.mjs":{"file":"assets/stata-CXDRq8TI.js","name":"stata","src":"node_modules/@shikijs/langs/dist/stata.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/sql.mjs"]},"node_modules/@shikijs/langs/dist/stylus.mjs":{"file":"assets/stylus-Cbu_jgUK.js","name":"stylus","src":"node_modules/@shikijs/langs/dist/stylus.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/svelte.mjs":{"file":"assets/svelte-MSaWC3Je.js","name":"svelte","src":"node_modules/@shikijs/langs/dist/svelte.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/postcss.mjs"]},"node_modules/@shikijs/langs/dist/swift.mjs":{"file":"assets/swift-BSxZ-RaX.js","name":"swift","src":"node_modules/@shikijs/langs/dist/swift.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/system-verilog.mjs":{"file":"assets/system-verilog-C7L56vO4.js","name":"system-verilog","src":"node_modules/@shikijs/langs/dist/system-verilog.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/systemd.mjs":{"file":"assets/systemd-CUnW07Te.js","name":"systemd","src":"node_modules/@shikijs/langs/dist/systemd.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/talonscript.mjs":{"file":"assets/talonscript-yNdrVPqT.js","name":"talonscript","src":"node_modules/@shikijs/langs/dist/talonscript.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/tasl.mjs":{"file":"assets/tasl-CQjiPCtT.js","name":"tasl","src":"node_modules/@shikijs/langs/dist/tasl.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/tcl.mjs":{"file":"assets/tcl-C5AohmeQ.js","name":"tcl","src":"node_modules/@shikijs/langs/dist/tcl.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/templ.mjs":{"file":"assets/templ-BIXQ7kZj.js","name":"templ","src":"node_modules/@shikijs/langs/dist/templ.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/go.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/css.mjs"]},"node_modules/@shikijs/langs/dist/terraform.mjs":{"file":"assets/terraform-eHy1PpK4.js","name":"terraform","src":"node_modules/@shikijs/langs/dist/terraform.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/tex.mjs":{"file":"assets/tex-rYs2v40G.js","name":"tex","src":"node_modules/@shikijs/langs/dist/tex.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/r.mjs"]},"node_modules/@shikijs/langs/dist/toml.mjs":{"file":"assets/toml-8jXJkYXT.js","name":"toml","src":"node_modules/@shikijs/langs/dist/toml.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/ts-tags.mjs":{"file":"assets/ts-tags-D3g7xtbE.js","name":"ts-tags","src":"node_modules/@shikijs/langs/dist/ts-tags.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/glsl.mjs","node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/c.mjs","node_modules/@shikijs/langs/dist/java.mjs"]},"node_modules/@shikijs/langs/dist/tsv.mjs":{"file":"assets/tsv-B_m7g4N7.js","name":"tsv","src":"node_modules/@shikijs/langs/dist/tsv.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/tsx.mjs":{"file":"assets/tsx-B6W0miNI.js","name":"tsx","src":"node_modules/@shikijs/langs/dist/tsx.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/turtle.mjs":{"file":"assets/turtle-BMR_PYu6.js","name":"turtle","src":"node_modules/@shikijs/langs/dist/turtle.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/twig.mjs":{"file":"assets/twig-C4FN8sXG.js","name":"twig","src":"node_modules/@shikijs/langs/dist/twig.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/scss.mjs","node_modules/@shikijs/langs/dist/php.mjs","node_modules/@shikijs/langs/dist/python.mjs","node_modules/@shikijs/langs/dist/ruby.mjs","node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/java.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/haml.mjs","node_modules/@shikijs/langs/dist/graphql.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/jsx.mjs","node_modules/@shikijs/langs/dist/tsx.mjs","node_modules/@shikijs/langs/dist/cpp.mjs","node_modules/@shikijs/langs/dist/regexp.mjs","node_modules/@shikijs/langs/dist/glsl.mjs","node_modules/@shikijs/langs/dist/c.mjs","node_modules/@shikijs/langs/dist/shellscript.mjs","node_modules/@shikijs/langs/dist/lua.mjs","node_modules/@shikijs/langs/dist/yaml.mjs"]},"node_modules/@shikijs/langs/dist/typescript.mjs":{"file":"assets/typescript-Dj6nwHGl.js","name":"typescript","src":"node_modules/@shikijs/langs/dist/typescript.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/typespec.mjs":{"file":"assets/typespec-BpWG_bgh.js","name":"typespec","src":"node_modules/@shikijs/langs/dist/typespec.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/typst.mjs":{"file":"assets/typst-CX-D33aM.js","name":"typst","src":"node_modules/@shikijs/langs/dist/typst.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/v.mjs":{"file":"assets/v-CAQ2eGtk.js","name":"v","src":"node_modules/@shikijs/langs/dist/v.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/vala.mjs":{"file":"assets/vala-BFOHcciG.js","name":"vala","src":"node_modules/@shikijs/langs/dist/vala.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/vb.mjs":{"file":"assets/vb-CdO5JTpU.js","name":"vb","src":"node_modules/@shikijs/langs/dist/vb.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/verilog.mjs":{"file":"assets/verilog-CJaU5se_.js","name":"verilog","src":"node_modules/@shikijs/langs/dist/verilog.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/vhdl.mjs":{"file":"assets/vhdl-DYoNaHQp.js","name":"vhdl","src":"node_modules/@shikijs/langs/dist/vhdl.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/viml.mjs":{"file":"assets/viml-m4uW47V2.js","name":"viml","src":"node_modules/@shikijs/langs/dist/viml.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/vue-html.mjs":{"file":"assets/vue-html-D8tnVLkD.js","name":"vue-html","src":"node_modules/@shikijs/langs/dist/vue-html.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/vue.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/html-derivative.mjs"]},"node_modules/@shikijs/langs/dist/vue.mjs":{"file":"assets/vue-BIMzvBW9.js","name":"vue","src":"node_modules/@shikijs/langs/dist/vue.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/html-derivative.mjs"]},"node_modules/@shikijs/langs/dist/vyper.mjs":{"file":"assets/vyper-BzEH12SI.js","name":"vyper","src":"node_modules/@shikijs/langs/dist/vyper.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/wasm.mjs":{"file":"assets/wasm-ISJeQQUc.js","name":"wasm","src":"node_modules/@shikijs/langs/dist/wasm.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/wenyan.mjs":{"file":"assets/wenyan-7A4Fjokl.js","name":"wenyan","src":"node_modules/@shikijs/langs/dist/wenyan.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/wgsl.mjs":{"file":"assets/wgsl-mD5xMClh.js","name":"wgsl","src":"node_modules/@shikijs/langs/dist/wgsl.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/wikitext.mjs":{"file":"assets/wikitext-DCE3LsBG.js","name":"wikitext","src":"node_modules/@shikijs/langs/dist/wikitext.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/wolfram.mjs":{"file":"assets/wolfram-C3FkfJm5.js","name":"wolfram","src":"node_modules/@shikijs/langs/dist/wolfram.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/xml.mjs":{"file":"assets/xml-e3z08dGr.js","name":"xml","src":"node_modules/@shikijs/langs/dist/xml.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/java.mjs"]},"node_modules/@shikijs/langs/dist/xsl.mjs":{"file":"assets/xsl-Dd0NUgwM.js","name":"xsl","src":"node_modules/@shikijs/langs/dist/xsl.mjs","isDynamicEntry":true,"imports":["node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/java.mjs"]},"node_modules/@shikijs/langs/dist/yaml.mjs":{"file":"assets/yaml-CVw76BM1.js","name":"yaml","src":"node_modules/@shikijs/langs/dist/yaml.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/zenscript.mjs":{"file":"assets/zenscript-ulE5f4OK.js","name":"zenscript","src":"node_modules/@shikijs/langs/dist/zenscript.mjs","isDynamicEntry":true},"node_modules/@shikijs/langs/dist/zig.mjs":{"file":"assets/zig-DFAwn6Qs.js","name":"zig","src":"node_modules/@shikijs/langs/dist/zig.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/andromeeda.mjs":{"file":"assets/andromeeda-C3khCPGq.js","name":"andromeeda","src":"node_modules/@shikijs/themes/dist/andromeeda.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/aurora-x.mjs":{"file":"assets/aurora-x-D-2ljcwZ.js","name":"aurora-x","src":"node_modules/@shikijs/themes/dist/aurora-x.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/ayu-dark.mjs":{"file":"assets/ayu-dark-Cv9koXgw.js","name":"ayu-dark","src":"node_modules/@shikijs/themes/dist/ayu-dark.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/catppuccin-frappe.mjs":{"file":"assets/catppuccin-frappe-CD_QflpE.js","name":"catppuccin-frappe","src":"node_modules/@shikijs/themes/dist/catppuccin-frappe.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/catppuccin-latte.mjs":{"file":"assets/catppuccin-latte-DRW-0cLl.js","name":"catppuccin-latte","src":"node_modules/@shikijs/themes/dist/catppuccin-latte.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/catppuccin-macchiato.mjs":{"file":"assets/catppuccin-macchiato-C-_shW-Y.js","name":"catppuccin-macchiato","src":"node_modules/@shikijs/themes/dist/catppuccin-macchiato.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/catppuccin-mocha.mjs":{"file":"assets/catppuccin-mocha-LGGdnPYs.js","name":"catppuccin-mocha","src":"node_modules/@shikijs/themes/dist/catppuccin-mocha.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/dark-plus.mjs":{"file":"assets/dark-plus-C3mMm8J8.js","name":"dark-plus","src":"node_modules/@shikijs/themes/dist/dark-plus.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/dracula-soft.mjs":{"file":"assets/dracula-soft-BXkSAIEj.js","name":"dracula-soft","src":"node_modules/@shikijs/themes/dist/dracula-soft.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/dracula.mjs":{"file":"assets/dracula-BzJJZx-M.js","name":"dracula","src":"node_modules/@shikijs/themes/dist/dracula.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/everforest-dark.mjs":{"file":"assets/everforest-dark-BgDCqdQA.js","name":"everforest-dark","src":"node_modules/@shikijs/themes/dist/everforest-dark.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/everforest-light.mjs":{"file":"assets/everforest-light-C8M2exoo.js","name":"everforest-light","src":"node_modules/@shikijs/themes/dist/everforest-light.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/github-dark-default.mjs":{"file":"assets/github-dark-default-Cuk6v7N8.js","name":"github-dark-default","src":"node_modules/@shikijs/themes/dist/github-dark-default.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/github-dark-dimmed.mjs":{"file":"assets/github-dark-dimmed-DH5Ifo-i.js","name":"github-dark-dimmed","src":"node_modules/@shikijs/themes/dist/github-dark-dimmed.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/github-dark-high-contrast.mjs":{"file":"assets/github-dark-high-contrast-E3gJ1_iC.js","name":"github-dark-high-contrast","src":"node_modules/@shikijs/themes/dist/github-dark-high-contrast.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/github-dark.mjs":{"file":"assets/github-dark-DHJKELXO.js","name":"github-dark","src":"node_modules/@shikijs/themes/dist/github-dark.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/github-light-default.mjs":{"file":"assets/github-light-default-D7oLnXFd.js","name":"github-light-default","src":"node_modules/@shikijs/themes/dist/github-light-default.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/github-light-high-contrast.mjs":{"file":"assets/github-light-high-contrast-BfjtVDDH.js","name":"github-light-high-contrast","src":"node_modules/@shikijs/themes/dist/github-light-high-contrast.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/github-light.mjs":{"file":"assets/github-light-DAi9KRSo.js","name":"github-light","src":"node_modules/@shikijs/themes/dist/github-light.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/houston.mjs":{"file":"assets/houston-DnULxvSX.js","name":"houston","src":"node_modules/@shikijs/themes/dist/houston.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/kanagawa-dragon.mjs":{"file":"assets/kanagawa-dragon-CkXjmgJE.js","name":"kanagawa-dragon","src":"node_modules/@shikijs/themes/dist/kanagawa-dragon.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/kanagawa-lotus.mjs":{"file":"assets/kanagawa-lotus-CfQXZHmo.js","name":"kanagawa-lotus","src":"node_modules/@shikijs/themes/dist/kanagawa-lotus.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/kanagawa-wave.mjs":{"file":"assets/kanagawa-wave-DWedfzmr.js","name":"kanagawa-wave","src":"node_modules/@shikijs/themes/dist/kanagawa-wave.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/laserwave.mjs":{"file":"assets/laserwave-DUszq2jm.js","name":"laserwave","src":"node_modules/@shikijs/themes/dist/laserwave.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/light-plus.mjs":{"file":"assets/light-plus-B7mTdjB0.js","name":"light-plus","src":"node_modules/@shikijs/themes/dist/light-plus.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/material-theme-darker.mjs":{"file":"assets/material-theme-darker-BfHTSMKl.js","name":"material-theme-darker","src":"node_modules/@shikijs/themes/dist/material-theme-darker.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/material-theme-lighter.mjs":{"file":"assets/material-theme-lighter-B0m2ddpp.js","name":"material-theme-lighter","src":"node_modules/@shikijs/themes/dist/material-theme-lighter.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/material-theme-ocean.mjs":{"file":"assets/material-theme-ocean-CyktbL80.js","name":"material-theme-ocean","src":"node_modules/@shikijs/themes/dist/material-theme-ocean.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/material-theme-palenight.mjs":{"file":"assets/material-theme-palenight-Csfq5Kiy.js","name":"material-theme-palenight","src":"node_modules/@shikijs/themes/dist/material-theme-palenight.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/material-theme.mjs":{"file":"assets/material-theme-D5KoaKCx.js","name":"material-theme","src":"node_modules/@shikijs/themes/dist/material-theme.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/min-dark.mjs":{"file":"assets/min-dark-CafNBF8u.js","name":"min-dark","src":"node_modules/@shikijs/themes/dist/min-dark.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/min-light.mjs":{"file":"assets/min-light-CTRr51gU.js","name":"min-light","src":"node_modules/@shikijs/themes/dist/min-light.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/monokai.mjs":{"file":"assets/monokai-D4h5O-jR.js","name":"monokai","src":"node_modules/@shikijs/themes/dist/monokai.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/night-owl.mjs":{"file":"assets/night-owl-C39BiMTA.js","name":"night-owl","src":"node_modules/@shikijs/themes/dist/night-owl.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/nord.mjs":{"file":"assets/nord-Ddv68eIx.js","name":"nord","src":"node_modules/@shikijs/themes/dist/nord.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/one-dark-pro.mjs":{"file":"assets/one-dark-pro-DVMEJ2y_.js","name":"one-dark-pro","src":"node_modules/@shikijs/themes/dist/one-dark-pro.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/one-light.mjs":{"file":"assets/one-light-PoHY5YXO.js","name":"one-light","src":"node_modules/@shikijs/themes/dist/one-light.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/plastic.mjs":{"file":"assets/plastic-3e1v2bzS.js","name":"plastic","src":"node_modules/@shikijs/themes/dist/plastic.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/poimandres.mjs":{"file":"assets/poimandres-CS3Unz2-.js","name":"poimandres","src":"node_modules/@shikijs/themes/dist/poimandres.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/red.mjs":{"file":"assets/red-bN70gL4F.js","name":"red","src":"node_modules/@shikijs/themes/dist/red.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/rose-pine-dawn.mjs":{"file":"assets/rose-pine-dawn-Ds-gbosJ.js","name":"rose-pine-dawn","src":"node_modules/@shikijs/themes/dist/rose-pine-dawn.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/rose-pine-moon.mjs":{"file":"assets/rose-pine-moon-CjDtw9vr.js","name":"rose-pine-moon","src":"node_modules/@shikijs/themes/dist/rose-pine-moon.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/rose-pine.mjs":{"file":"assets/rose-pine-CmCqftbK.js","name":"rose-pine","src":"node_modules/@shikijs/themes/dist/rose-pine.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/slack-dark.mjs":{"file":"assets/slack-dark-BthQWCQV.js","name":"slack-dark","src":"node_modules/@shikijs/themes/dist/slack-dark.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/slack-ochin.mjs":{"file":"assets/slack-ochin-DqwNpetd.js","name":"slack-ochin","src":"node_modules/@shikijs/themes/dist/slack-ochin.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/snazzy-light.mjs":{"file":"assets/snazzy-light-Bw305WKR.js","name":"snazzy-light","src":"node_modules/@shikijs/themes/dist/snazzy-light.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/solarized-dark.mjs":{"file":"assets/solarized-dark-DXbdFlpD.js","name":"solarized-dark","src":"node_modules/@shikijs/themes/dist/solarized-dark.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/solarized-light.mjs":{"file":"assets/solarized-light-L9t79GZl.js","name":"solarized-light","src":"node_modules/@shikijs/themes/dist/solarized-light.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/synthwave-84.mjs":{"file":"assets/synthwave-84-CbfX1IO0.js","name":"synthwave-84","src":"node_modules/@shikijs/themes/dist/synthwave-84.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/tokyo-night.mjs":{"file":"assets/tokyo-night-hegEt444.js","name":"tokyo-night","src":"node_modules/@shikijs/themes/dist/tokyo-night.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/vesper.mjs":{"file":"assets/vesper-BEBZ7ncR.js","name":"vesper","src":"node_modules/@shikijs/themes/dist/vesper.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/vitesse-black.mjs":{"file":"assets/vitesse-black-Bkuqu6BP.js","name":"vitesse-black","src":"node_modules/@shikijs/themes/dist/vitesse-black.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/vitesse-dark.mjs":{"file":"assets/vitesse-dark-D0r3Knsf.js","name":"vitesse-dark","src":"node_modules/@shikijs/themes/dist/vitesse-dark.mjs","isDynamicEntry":true},"node_modules/@shikijs/themes/dist/vitesse-light.mjs":{"file":"assets/vitesse-light-CVO1_9PV.js","name":"vitesse-light","src":"node_modules/@shikijs/themes/dist/vitesse-light.mjs","isDynamicEntry":true},"node_modules/shiki/dist/index.mjs":{"file":"assets/index-BQURUJLf.js","name":"index","src":"node_modules/shiki/dist/index.mjs","isDynamicEntry":true,"imports":["_client-CMvCw2jp.js"],"dynamicImports":["node_modules/@shikijs/langs/dist/abap.mjs","node_modules/@shikijs/langs/dist/actionscript-3.mjs","node_modules/@shikijs/langs/dist/ada.mjs","_angular-html-0A1EF1PY.js","node_modules/@shikijs/langs/dist/angular-ts.mjs","node_modules/@shikijs/langs/dist/apache.mjs","node_modules/@shikijs/langs/dist/apex.mjs","node_modules/@shikijs/langs/dist/apl.mjs","node_modules/@shikijs/langs/dist/applescript.mjs","node_modules/@shikijs/langs/dist/ara.mjs","node_modules/@shikijs/langs/dist/asciidoc.mjs","node_modules/@shikijs/langs/dist/asm.mjs","node_modules/@shikijs/langs/dist/astro.mjs","node_modules/@shikijs/langs/dist/awk.mjs","node_modules/@shikijs/langs/dist/ballerina.mjs","node_modules/@shikijs/langs/dist/bat.mjs","node_modules/@shikijs/langs/dist/beancount.mjs","node_modules/@shikijs/langs/dist/berry.mjs","node_modules/@shikijs/langs/dist/bibtex.mjs","node_modules/@shikijs/langs/dist/bicep.mjs","node_modules/@shikijs/langs/dist/blade.mjs","node_modules/@shikijs/langs/dist/bsl.mjs","node_modules/@shikijs/langs/dist/c.mjs","node_modules/@shikijs/langs/dist/cadence.mjs","node_modules/@shikijs/langs/dist/cairo.mjs","node_modules/@shikijs/langs/dist/clarity.mjs","node_modules/@shikijs/langs/dist/clojure.mjs","node_modules/@shikijs/langs/dist/cmake.mjs","node_modules/@shikijs/langs/dist/cobol.mjs","node_modules/@shikijs/langs/dist/codeowners.mjs","node_modules/@shikijs/langs/dist/codeql.mjs","node_modules/@shikijs/langs/dist/coffee.mjs","node_modules/@shikijs/langs/dist/common-lisp.mjs","node_modules/@shikijs/langs/dist/coq.mjs","node_modules/@shikijs/langs/dist/cpp.mjs","node_modules/@shikijs/langs/dist/crystal.mjs","node_modules/@shikijs/langs/dist/csharp.mjs","node_modules/@shikijs/langs/dist/css.mjs","node_modules/@shikijs/langs/dist/csv.mjs","node_modules/@shikijs/langs/dist/cue.mjs","node_modules/@shikijs/langs/dist/cypher.mjs","node_modules/@shikijs/langs/dist/d.mjs","node_modules/@shikijs/langs/dist/dart.mjs","node_modules/@shikijs/langs/dist/dax.mjs","node_modules/@shikijs/langs/dist/desktop.mjs","node_modules/@shikijs/langs/dist/diff.mjs","node_modules/@shikijs/langs/dist/docker.mjs","node_modules/@shikijs/langs/dist/dotenv.mjs","node_modules/@shikijs/langs/dist/dream-maker.mjs","node_modules/@shikijs/langs/dist/edge.mjs","node_modules/@shikijs/langs/dist/elixir.mjs","node_modules/@shikijs/langs/dist/elm.mjs","node_modules/@shikijs/langs/dist/emacs-lisp.mjs","node_modules/@shikijs/langs/dist/erb.mjs","node_modules/@shikijs/langs/dist/erlang.mjs","node_modules/@shikijs/langs/dist/fennel.mjs","node_modules/@shikijs/langs/dist/fish.mjs","node_modules/@shikijs/langs/dist/fluent.mjs","node_modules/@shikijs/langs/dist/fortran-fixed-form.mjs","node_modules/@shikijs/langs/dist/fortran-free-form.mjs","node_modules/@shikijs/langs/dist/fsharp.mjs","node_modules/@shikijs/langs/dist/gdresource.mjs","node_modules/@shikijs/langs/dist/gdscript.mjs","node_modules/@shikijs/langs/dist/gdshader.mjs","node_modules/@shikijs/langs/dist/genie.mjs","node_modules/@shikijs/langs/dist/gherkin.mjs","node_modules/@shikijs/langs/dist/git-commit.mjs","node_modules/@shikijs/langs/dist/git-rebase.mjs","node_modules/@shikijs/langs/dist/gleam.mjs","node_modules/@shikijs/langs/dist/glimmer-js.mjs","node_modules/@shikijs/langs/dist/glimmer-ts.mjs","node_modules/@shikijs/langs/dist/glsl.mjs","node_modules/@shikijs/langs/dist/gnuplot.mjs","node_modules/@shikijs/langs/dist/go.mjs","node_modules/@shikijs/langs/dist/graphql.mjs","node_modules/@shikijs/langs/dist/groovy.mjs","node_modules/@shikijs/langs/dist/hack.mjs","node_modules/@shikijs/langs/dist/haml.mjs","node_modules/@shikijs/langs/dist/handlebars.mjs","node_modules/@shikijs/langs/dist/haskell.mjs","node_modules/@shikijs/langs/dist/haxe.mjs","node_modules/@shikijs/langs/dist/hcl.mjs","node_modules/@shikijs/langs/dist/hjson.mjs","node_modules/@shikijs/langs/dist/hlsl.mjs","node_modules/@shikijs/langs/dist/html.mjs","node_modules/@shikijs/langs/dist/html-derivative.mjs","node_modules/@shikijs/langs/dist/http.mjs","node_modules/@shikijs/langs/dist/hxml.mjs","node_modules/@shikijs/langs/dist/hy.mjs","node_modules/@shikijs/langs/dist/imba.mjs","node_modules/@shikijs/langs/dist/ini.mjs","node_modules/@shikijs/langs/dist/java.mjs","node_modules/@shikijs/langs/dist/javascript.mjs","node_modules/@shikijs/langs/dist/jinja.mjs","node_modules/@shikijs/langs/dist/jison.mjs","node_modules/@shikijs/langs/dist/json.mjs","node_modules/@shikijs/langs/dist/json5.mjs","node_modules/@shikijs/langs/dist/jsonc.mjs","node_modules/@shikijs/langs/dist/jsonl.mjs","node_modules/@shikijs/langs/dist/jsonnet.mjs","node_modules/@shikijs/langs/dist/jssm.mjs","node_modules/@shikijs/langs/dist/jsx.mjs","node_modules/@shikijs/langs/dist/julia.mjs","node_modules/@shikijs/langs/dist/kotlin.mjs","node_modules/@shikijs/langs/dist/kusto.mjs","node_modules/@shikijs/langs/dist/latex.mjs","node_modules/@shikijs/langs/dist/lean.mjs","node_modules/@shikijs/langs/dist/less.mjs","node_modules/@shikijs/langs/dist/liquid.mjs","node_modules/@shikijs/langs/dist/log.mjs","node_modules/@shikijs/langs/dist/logo.mjs","node_modules/@shikijs/langs/dist/lua.mjs","node_modules/@shikijs/langs/dist/luau.mjs","node_modules/@shikijs/langs/dist/make.mjs","node_modules/@shikijs/langs/dist/markdown.mjs","node_modules/@shikijs/langs/dist/marko.mjs","node_modules/@shikijs/langs/dist/matlab.mjs","node_modules/@shikijs/langs/dist/mdc.mjs","node_modules/@shikijs/langs/dist/mdx.mjs","node_modules/@shikijs/langs/dist/mermaid.mjs","node_modules/@shikijs/langs/dist/mipsasm.mjs","node_modules/@shikijs/langs/dist/mojo.mjs","node_modules/@shikijs/langs/dist/move.mjs","node_modules/@shikijs/langs/dist/narrat.mjs","node_modules/@shikijs/langs/dist/nextflow.mjs","node_modules/@shikijs/langs/dist/nginx.mjs","node_modules/@shikijs/langs/dist/nim.mjs","node_modules/@shikijs/langs/dist/nix.mjs","node_modules/@shikijs/langs/dist/nushell.mjs","node_modules/@shikijs/langs/dist/objective-c.mjs","node_modules/@shikijs/langs/dist/objective-cpp.mjs","node_modules/@shikijs/langs/dist/ocaml.mjs","node_modules/@shikijs/langs/dist/pascal.mjs","node_modules/@shikijs/langs/dist/perl.mjs","node_modules/@shikijs/langs/dist/php.mjs","node_modules/@shikijs/langs/dist/plsql.mjs","node_modules/@shikijs/langs/dist/po.mjs","node_modules/@shikijs/langs/dist/polar.mjs","node_modules/@shikijs/langs/dist/postcss.mjs","node_modules/@shikijs/langs/dist/powerquery.mjs","node_modules/@shikijs/langs/dist/powershell.mjs","node_modules/@shikijs/langs/dist/prisma.mjs","node_modules/@shikijs/langs/dist/prolog.mjs","node_modules/@shikijs/langs/dist/proto.mjs","node_modules/@shikijs/langs/dist/pug.mjs","node_modules/@shikijs/langs/dist/puppet.mjs","node_modules/@shikijs/langs/dist/purescript.mjs","node_modules/@shikijs/langs/dist/python.mjs","node_modules/@shikijs/langs/dist/qml.mjs","node_modules/@shikijs/langs/dist/qmldir.mjs","node_modules/@shikijs/langs/dist/qss.mjs","node_modules/@shikijs/langs/dist/r.mjs","node_modules/@shikijs/langs/dist/racket.mjs","node_modules/@shikijs/langs/dist/raku.mjs","node_modules/@shikijs/langs/dist/razor.mjs","node_modules/@shikijs/langs/dist/reg.mjs","node_modules/@shikijs/langs/dist/regexp.mjs","node_modules/@shikijs/langs/dist/rel.mjs","node_modules/@shikijs/langs/dist/riscv.mjs","node_modules/@shikijs/langs/dist/rst.mjs","node_modules/@shikijs/langs/dist/ruby.mjs","node_modules/@shikijs/langs/dist/rust.mjs","node_modules/@shikijs/langs/dist/sas.mjs","node_modules/@shikijs/langs/dist/sass.mjs","node_modules/@shikijs/langs/dist/scala.mjs","node_modules/@shikijs/langs/dist/scheme.mjs","node_modules/@shikijs/langs/dist/scss.mjs","node_modules/@shikijs/langs/dist/sdbl.mjs","node_modules/@shikijs/langs/dist/shaderlab.mjs","node_modules/@shikijs/langs/dist/shellscript.mjs","node_modules/@shikijs/langs/dist/shellsession.mjs","node_modules/@shikijs/langs/dist/smalltalk.mjs","node_modules/@shikijs/langs/dist/solidity.mjs","node_modules/@shikijs/langs/dist/soy.mjs","node_modules/@shikijs/langs/dist/sparql.mjs","node_modules/@shikijs/langs/dist/splunk.mjs","node_modules/@shikijs/langs/dist/sql.mjs","node_modules/@shikijs/langs/dist/ssh-config.mjs","node_modules/@shikijs/langs/dist/stata.mjs","node_modules/@shikijs/langs/dist/stylus.mjs","node_modules/@shikijs/langs/dist/svelte.mjs","node_modules/@shikijs/langs/dist/swift.mjs","node_modules/@shikijs/langs/dist/system-verilog.mjs","node_modules/@shikijs/langs/dist/systemd.mjs","node_modules/@shikijs/langs/dist/talonscript.mjs","node_modules/@shikijs/langs/dist/tasl.mjs","node_modules/@shikijs/langs/dist/tcl.mjs","node_modules/@shikijs/langs/dist/templ.mjs","node_modules/@shikijs/langs/dist/terraform.mjs","node_modules/@shikijs/langs/dist/tex.mjs","node_modules/@shikijs/langs/dist/toml.mjs","node_modules/@shikijs/langs/dist/ts-tags.mjs","node_modules/@shikijs/langs/dist/tsv.mjs","node_modules/@shikijs/langs/dist/tsx.mjs","node_modules/@shikijs/langs/dist/turtle.mjs","node_modules/@shikijs/langs/dist/twig.mjs","node_modules/@shikijs/langs/dist/typescript.mjs","node_modules/@shikijs/langs/dist/typespec.mjs","node_modules/@shikijs/langs/dist/typst.mjs","node_modules/@shikijs/langs/dist/v.mjs","node_modules/@shikijs/langs/dist/vala.mjs","node_modules/@shikijs/langs/dist/vb.mjs","node_modules/@shikijs/langs/dist/verilog.mjs","node_modules/@shikijs/langs/dist/vhdl.mjs","node_modules/@shikijs/langs/dist/viml.mjs","node_modules/@shikijs/langs/dist/vue.mjs","node_modules/@shikijs/langs/dist/vue-html.mjs","node_modules/@shikijs/langs/dist/vyper.mjs","node_modules/@shikijs/langs/dist/wasm.mjs","node_modules/@shikijs/langs/dist/wenyan.mjs","node_modules/@shikijs/langs/dist/wgsl.mjs","node_modules/@shikijs/langs/dist/wikitext.mjs","node_modules/@shikijs/langs/dist/wolfram.mjs","node_modules/@shikijs/langs/dist/xml.mjs","node_modules/@shikijs/langs/dist/xsl.mjs","node_modules/@shikijs/langs/dist/yaml.mjs","node_modules/@shikijs/langs/dist/zenscript.mjs","node_modules/@shikijs/langs/dist/zig.mjs","node_modules/@shikijs/themes/dist/andromeeda.mjs","node_modules/@shikijs/themes/dist/aurora-x.mjs","node_modules/@shikijs/themes/dist/ayu-dark.mjs","node_modules/@shikijs/themes/dist/catppuccin-frappe.mjs","node_modules/@shikijs/themes/dist/catppuccin-latte.mjs","node_modules/@shikijs/themes/dist/catppuccin-macchiato.mjs","node_modules/@shikijs/themes/dist/catppuccin-mocha.mjs","node_modules/@shikijs/themes/dist/dark-plus.mjs","node_modules/@shikijs/themes/dist/dracula.mjs","node_modules/@shikijs/themes/dist/dracula-soft.mjs","node_modules/@shikijs/themes/dist/everforest-dark.mjs","node_modules/@shikijs/themes/dist/everforest-light.mjs","node_modules/@shikijs/themes/dist/github-dark.mjs","node_modules/@shikijs/themes/dist/github-dark-default.mjs","node_modules/@shikijs/themes/dist/github-dark-dimmed.mjs","node_modules/@shikijs/themes/dist/github-dark-high-contrast.mjs","node_modules/@shikijs/themes/dist/github-light.mjs","node_modules/@shikijs/themes/dist/github-light-default.mjs","node_modules/@shikijs/themes/dist/github-light-high-contrast.mjs","node_modules/@shikijs/themes/dist/houston.mjs","node_modules/@shikijs/themes/dist/kanagawa-dragon.mjs","node_modules/@shikijs/themes/dist/kanagawa-lotus.mjs","node_modules/@shikijs/themes/dist/kanagawa-wave.mjs","node_modules/@shikijs/themes/dist/laserwave.mjs","node_modules/@shikijs/themes/dist/light-plus.mjs","node_modules/@shikijs/themes/dist/material-theme.mjs","node_modules/@shikijs/themes/dist/material-theme-darker.mjs","node_modules/@shikijs/themes/dist/material-theme-lighter.mjs","node_modules/@shikijs/themes/dist/material-theme-ocean.mjs","node_modules/@shikijs/themes/dist/material-theme-palenight.mjs","node_modules/@shikijs/themes/dist/min-dark.mjs","node_modules/@shikijs/themes/dist/min-light.mjs","node_modules/@shikijs/themes/dist/monokai.mjs","node_modules/@shikijs/themes/dist/night-owl.mjs","node_modules/@shikijs/themes/dist/nord.mjs","node_modules/@shikijs/themes/dist/one-dark-pro.mjs","node_modules/@shikijs/themes/dist/one-light.mjs","node_modules/@shikijs/themes/dist/plastic.mjs","node_modules/@shikijs/themes/dist/poimandres.mjs","node_modules/@shikijs/themes/dist/red.mjs","node_modules/@shikijs/themes/dist/rose-pine.mjs","node_modules/@shikijs/themes/dist/rose-pine-dawn.mjs","node_modules/@shikijs/themes/dist/rose-pine-moon.mjs","node_modules/@shikijs/themes/dist/slack-dark.mjs","node_modules/@shikijs/themes/dist/slack-ochin.mjs","node_modules/@shikijs/themes/dist/snazzy-light.mjs","node_modules/@shikijs/themes/dist/solarized-dark.mjs","node_modules/@shikijs/themes/dist/solarized-light.mjs","node_modules/@shikijs/themes/dist/synthwave-84.mjs","node_modules/@shikijs/themes/dist/tokyo-night.mjs","node_modules/@shikijs/themes/dist/vesper.mjs","node_modules/@shikijs/themes/dist/vitesse-black.mjs","node_modules/@shikijs/themes/dist/vitesse-dark.mjs","node_modules/@shikijs/themes/dist/vitesse-light.mjs","node_modules/shiki/dist/wasm.mjs"]},"node_modules/shiki/dist/wasm.mjs":{"file":"assets/wasm-CG6Dc4jp.js","name":"wasm","src":"node_modules/shiki/dist/wasm.mjs","isDynamicEntry":true},"virtual:$vinxi/handler/client":{"file":"assets/client-DUcPGb69.js","name":"client","src":"virtual:$vinxi/handler/client","isEntry":true,"imports":["_client-CMvCw2jp.js"]}},"ssr":{"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/app/app.css":{"file":"assets/app-Cs9mLtrU.css","src":"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/app/app.css"},"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/app/index.css":{"file":"assets/index-BCQOL4kc.css","src":"/Users/alexanderchristensen/Projects/IntelliOptima/code-project/intellitask-tanstack/app/index.css"},"_avatar-pWQn_6aq.js":{"file":"assets/avatar-pWQn_6aq.js","name":"avatar","imports":["_ssr-D494T9bW.js"]},"_checkbox-C_SO_KyM.js":{"file":"assets/checkbox-C_SO_KyM.js","name":"checkbox","imports":["_ssr-D494T9bW.js"]},"_collapsible-g0t8x5gf.js":{"file":"assets/collapsible-g0t8x5gf.js","name":"collapsible","imports":["_ssr-D494T9bW.js","_dialog-BARnul6K.js","_avatar-pWQn_6aq.js"]},"_dialog-BARnul6K.js":{"file":"assets/dialog-BARnul6K.js","name":"dialog","imports":["_ssr-D494T9bW.js"]},"_ssr-D494T9bW.js":{"file":"assets/ssr-D494T9bW.js","name":"ssr","dynamicImports":["app/routes/verify-account.tsx?tsr-split=component","app/routes/index.tsx?tsr-split=component","app/routes/_authed/_layout.tsx?tsr-split=component","app/routes/accept-invitation/$invitationId.$invitationEmail.tsx?tsr-split=component","app/routes/_authed/_layout/team-chat/index.tsx?tsr-split=component","app/routes/_authed/_layout/organizations/index.tsx?tsr-split=component","app/routes/_authed/_layout/organization-settings/index.tsx?tsr-split=component","app/routes/_authed/_layout/members/index.tsx?tsr-split=component","app/routes/_authed/_layout/teamspace/$teamspaceId.tsx?tsr-split=component","app/routes/_authed/_layout/project/$projectId.tsx?tsr-split=component"],"assets":["assets/app-Cs9mLtrU.css","assets/index-BCQOL4kc.css"]},"_useSignOut-DrUzyn0C.js":{"file":"assets/useSignOut-DrUzyn0C.js","name":"useSignOut","imports":["_ssr-D494T9bW.js"]},"app/assets/img/IntelliOptima-Black-Text-Logo.webp":{"file":"assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp","src":"app/assets/img/IntelliOptima-Black-Text-Logo.webp"},"app/routes/_authed/_layout.tsx?tsr-split=component":{"file":"assets/_layout-CEOjo1CZ.js","name":"_layout","src":"app/routes/_authed/_layout.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-D494T9bW.js","_dialog-BARnul6K.js","_checkbox-C_SO_KyM.js","_avatar-pWQn_6aq.js","_useSignOut-DrUzyn0C.js"],"assets":["assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp"]},"app/routes/_authed/_layout/members/index.tsx?tsr-split=component":{"file":"assets/index-DbXztsa2.js","name":"index","src":"app/routes/_authed/_layout/members/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-D494T9bW.js","_dialog-BARnul6K.js","_checkbox-C_SO_KyM.js"]},"app/routes/_authed/_layout/organization-settings/index.tsx?tsr-split=component":{"file":"assets/index-FnUY3CiM.js","name":"index","src":"app/routes/_authed/_layout/organization-settings/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-D494T9bW.js","_dialog-BARnul6K.js"]},"app/routes/_authed/_layout/organizations/index.tsx?tsr-split=component":{"file":"assets/index-Dg-Zm9r1.js","name":"index","src":"app/routes/_authed/_layout/organizations/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-D494T9bW.js"]},"app/routes/_authed/_layout/project/$projectId.tsx?tsr-split=component":{"file":"assets/_projectId-DFGTUSU4.js","name":"_projectId","src":"app/routes/_authed/_layout/project/$projectId.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-D494T9bW.js","_collapsible-g0t8x5gf.js","_dialog-BARnul6K.js","_checkbox-C_SO_KyM.js","_avatar-pWQn_6aq.js"]},"app/routes/_authed/_layout/team-chat/index.tsx?tsr-split=component":{"file":"assets/index-B_4yKcTu.js","name":"index","src":"app/routes/_authed/_layout/team-chat/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-D494T9bW.js"]},"app/routes/_authed/_layout/teamspace/$teamspaceId.tsx?tsr-split=component":{"file":"assets/_teamspaceId-DSVOHVhG.js","name":"_teamspaceId","src":"app/routes/_authed/_layout/teamspace/$teamspaceId.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-D494T9bW.js","_collapsible-g0t8x5gf.js","_dialog-BARnul6K.js","_checkbox-C_SO_KyM.js","_avatar-pWQn_6aq.js"]},"app/routes/accept-invitation/$invitationId.$invitationEmail.tsx?tsr-split=component":{"file":"assets/_invitationId._invitationEmail-CPTbk5Ca.js","name":"_invitationId._invitationEmail","src":"app/routes/accept-invitation/$invitationId.$invitationEmail.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-D494T9bW.js","_useSignOut-DrUzyn0C.js"]},"app/routes/index.tsx?tsr-split=component":{"file":"assets/index-BOLL5CUm.js","name":"index","src":"app/routes/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-D494T9bW.js"]},"app/routes/verify-account.tsx?tsr-split=component":{"file":"assets/verify-account-B07A2W2v.js","name":"verify-account","src":"app/routes/verify-account.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-D494T9bW.js"]},"virtual:$vinxi/handler/ssr":{"file":"ssr.js","name":"ssr","src":"virtual:$vinxi/handler/ssr","isEntry":true,"imports":["_ssr-D494T9bW.js"]}},"server":{"_client-BOYEY5wa.js":{"file":"assets/client-BOYEY5wa.js","name":"client"},"_getRequestClient-BlbUj71l.js":{"file":"assets/getRequestClient-BlbUj71l.js","name":"getRequestClient","imports":["_client-BOYEY5wa.js"]},"_index-eGnkU4Qz.js":{"file":"assets/index-eGnkU4Qz.js","name":"index"},"app/assets/img/IntelliOptima-Black-Text-Logo.webp":{"file":"assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp","src":"app/assets/img/IntelliOptima-Black-Text-Logo.webp"},"app/routes/__root.tsx?tsr-directive-use-server=":{"file":"assets/__root-qUR5Qwru.js","name":"__root","src":"app/routes/__root.tsx?tsr-directive-use-server=","isDynamicEntry":true,"imports":["_client-BOYEY5wa.js"]},"app/routes/_authed.tsx?tsr-directive-use-server=":{"file":"assets/_authed-B7p2NkLP.js","name":"_authed","src":"app/routes/_authed.tsx?tsr-directive-use-server=","isDynamicEntry":true,"imports":["_getRequestClient-BlbUj71l.js","_client-BOYEY5wa.js"]},"app/routes/_authed/_layout.tsx?tsr-directive-use-server=":{"file":"assets/_layout-upKjyzAj.js","name":"_layout","src":"app/routes/_authed/_layout.tsx?tsr-directive-use-server=","isDynamicEntry":true,"imports":["_getRequestClient-BlbUj71l.js","_client-BOYEY5wa.js"],"dynamicImports":["app/routes/_authed/_layout.tsx?tsr-split=component"]},"app/routes/_authed/_layout.tsx?tsr-split=component":{"file":"assets/_layout-DqotXblt.js","name":"_layout","src":"app/routes/_authed/_layout.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_index-eGnkU4Qz.js","_getRequestClient-BlbUj71l.js","_client-BOYEY5wa.js"],"assets":["assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp"]},"app/routes/_authed/_layout/chat/$chatroomId.tsx?tsr-directive-use-server=":{"file":"assets/_chatroomId-BjOdpLhQ.js","name":"_chatroomId","src":"app/routes/_authed/_layout/chat/$chatroomId.tsx?tsr-directive-use-server=","isDynamicEntry":true,"imports":["_index-eGnkU4Qz.js","_getRequestClient-BlbUj71l.js","_client-BOYEY5wa.js"]},"virtual:$vinxi/handler/server":{"file":"server.js","name":"server","src":"virtual:$vinxi/handler/server","isEntry":true,"dynamicImports":["app/routes/__root.tsx?tsr-directive-use-server=","app/routes/_authed.tsx?tsr-directive-use-server=","app/routes/_authed/_layout.tsx?tsr-directive-use-server=","app/routes/_authed/_layout.tsx?tsr-directive-use-server=","app/routes/_authed/_layout/chat/$chatroomId.tsx?tsr-directive-use-server="]}}};

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
    "mtime": "2025-04-07T17:08:47.385Z",
    "size": 6146,
    "path": "../public/assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp"
  },
  "/assets/app-Cs9mLtrU.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1db-O5faAPbFpX3oaxe+0Uaz5KZkRXY\"",
    "mtime": "2025-04-07T17:08:47.385Z",
    "size": 475,
    "path": "../public/assets/app-Cs9mLtrU.css"
  },
  "/assets/index-BCQOL4kc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d218-Y68UXOO8Lyqn6AEeRIFwlSbKcBM\"",
    "mtime": "2025-04-07T17:08:47.386Z",
    "size": 119320,
    "path": "../public/assets/index-BCQOL4kc.css"
  },
  "/_build/.vite/manifest.json": {
    "type": "application/json",
    "etag": "\"175bd-UvfACZkKrrFrJtJ2IfbzHYtlGZ8\"",
    "mtime": "2025-04-07T17:08:47.363Z",
    "size": 95677,
    "path": "../public/_build/.vite/manifest.json"
  },
  "/_server/assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp": {
    "type": "image/webp",
    "etag": "\"1802-X2GCuxLWqrjWp/YyoDeMj/NaYaY\"",
    "mtime": "2025-04-07T17:08:47.388Z",
    "size": 6146,
    "path": "../public/_server/assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp"
  },
  "/_build/assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp": {
    "type": "image/webp",
    "etag": "\"1802-X2GCuxLWqrjWp/YyoDeMj/NaYaY\"",
    "mtime": "2025-04-07T17:08:47.362Z",
    "size": 6146,
    "path": "../public/_build/assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp"
  },
  "/_build/assets/_invitationId._invitationEmail-C_LeU5Rh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ece-si5drm80sRUjxnQtJDy4t+Nr7Rk\"",
    "mtime": "2025-04-07T17:08:47.364Z",
    "size": 3790,
    "path": "../public/_build/assets/_invitationId._invitationEmail-C_LeU5Rh.js"
  },
  "/_build/assets/_layout-DNEaEcqH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d13b-20ucC/2axvnvIMn7sYSJBh2kG14\"",
    "mtime": "2025-04-07T17:08:47.364Z",
    "size": 53563,
    "path": "../public/_build/assets/_layout-DNEaEcqH.js"
  },
  "/_build/assets/_projectId-D0HvoMWz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d5d6-AdzLF8TOngX2dfh7rqzBmhBsieE\"",
    "mtime": "2025-04-07T17:08:47.364Z",
    "size": 54742,
    "path": "../public/_build/assets/_projectId-D0HvoMWz.js"
  },
  "/_build/assets/_teamspaceId-By-wuXhF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4192-j78oO5SqQRlNbv7NFiPCwPY7WuU\"",
    "mtime": "2025-04-07T17:08:47.364Z",
    "size": 16786,
    "path": "../public/_build/assets/_teamspaceId-By-wuXhF.js"
  },
  "/_build/assets/abap-DsBKuouk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4984-WjmeY5tJutWdsMMiLereS1vmQyo\"",
    "mtime": "2025-04-07T17:08:47.364Z",
    "size": 18820,
    "path": "../public/_build/assets/abap-DsBKuouk.js"
  },
  "/_build/assets/actionscript-3-B_7mSSNY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"377f-i/qj0UU+KqBDkAtv487cOQaqlpY\"",
    "mtime": "2025-04-07T17:08:47.364Z",
    "size": 14207,
    "path": "../public/_build/assets/actionscript-3-B_7mSSNY.js"
  },
  "/_build/assets/ada-727ZlQH0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bd92-eqknrr8A2eGD7JvLwaNuB8kS5Wg\"",
    "mtime": "2025-04-07T17:08:47.364Z",
    "size": 48530,
    "path": "../public/_build/assets/ada-727ZlQH0.js"
  },
  "/_build/assets/andromeeda-C3khCPGq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"229d-3GfF78JdzfO32fqTvNakp2eNACA\"",
    "mtime": "2025-04-07T17:08:47.364Z",
    "size": 8861,
    "path": "../public/_build/assets/andromeeda-C3khCPGq.js"
  },
  "/_build/assets/angular-html-0A1EF1PY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"44fd-0IotZb8ozG0Z2VHDYvx3eWjM35o\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 17661,
    "path": "../public/_build/assets/angular-html-0A1EF1PY.js"
  },
  "/_build/assets/angular-ts-BQ_2sjHF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"33b44-TDfCScmTdw0LmZP8fn0zNfibdgs\"",
    "mtime": "2025-04-07T17:08:47.364Z",
    "size": 211780,
    "path": "../public/_build/assets/angular-ts-BQ_2sjHF.js"
  },
  "/_build/assets/apache-Dn00JSTd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"339b-eDgYgmZylp6cuLTa7fn/CGMPvKo\"",
    "mtime": "2025-04-07T17:08:47.364Z",
    "size": 13211,
    "path": "../public/_build/assets/apache-Dn00JSTd.js"
  },
  "/_build/assets/apex-COJ4H7py.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b6dc-g40D9ZEhd2BB6LeWdxtoagXYba4\"",
    "mtime": "2025-04-07T17:08:47.364Z",
    "size": 46812,
    "path": "../public/_build/assets/apex-COJ4H7py.js"
  },
  "/_build/assets/apl-DkRiwRYE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5ea8-wccLa2VNYyxTALKqWT67h451t8w\"",
    "mtime": "2025-04-07T17:08:47.364Z",
    "size": 24232,
    "path": "../public/_build/assets/apl-DkRiwRYE.js"
  },
  "/_build/assets/app-Cs9mLtrU.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1db-O5faAPbFpX3oaxe+0Uaz5KZkRXY\"",
    "mtime": "2025-04-07T17:08:47.364Z",
    "size": 475,
    "path": "../public/_build/assets/app-Cs9mLtrU.css"
  },
  "/_build/assets/applescript-DSrUkfvF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7503-6TCGSBUjJrLs0UOpROu2tvn9iLk\"",
    "mtime": "2025-04-07T17:08:47.364Z",
    "size": 29955,
    "path": "../public/_build/assets/applescript-DSrUkfvF.js"
  },
  "/_build/assets/ara-CQ5q8R2W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1936-1OHn4IqZBMA9qRfRDC3s+efsTpw\"",
    "mtime": "2025-04-07T17:08:47.364Z",
    "size": 6454,
    "path": "../public/_build/assets/ara-CQ5q8R2W.js"
  },
  "/_build/assets/asciidoc-B-_AxZdj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"15cdd-MNDvB8fzDCc1ciwChdE4ycBNU7c\"",
    "mtime": "2025-04-07T17:08:47.364Z",
    "size": 89309,
    "path": "../public/_build/assets/asciidoc-B-_AxZdj.js"
  },
  "/_build/assets/asm-Dhn9LcZ4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9f94-ZrmUTMh5auzjdvSdIcxydxwUq9c\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 40852,
    "path": "../public/_build/assets/asm-Dhn9LcZ4.js"
  },
  "/_build/assets/astro-6Nq8D0ds.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5e07-gaQSkVYBK48dk4SXmr7TauTbB48\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 24071,
    "path": "../public/_build/assets/astro-6Nq8D0ds.js"
  },
  "/_build/assets/aurora-x-D-2ljcwZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"355b-ltA2RbrvMtKWMV4KgoBMozLYWVE\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 13659,
    "path": "../public/_build/assets/aurora-x-D-2ljcwZ.js"
  },
  "/_build/assets/avatar-DxhaIZ2w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"923-rLlADPep3OCmpxZ5XaP33C4t7zs\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 2339,
    "path": "../public/_build/assets/avatar-DxhaIZ2w.js"
  },
  "/_build/assets/awk-eg146-Ew.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1576-3jpvkXs1HSwtufcIuLhwdgfc8Wk\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 5494,
    "path": "../public/_build/assets/awk-eg146-Ew.js"
  },
  "/_build/assets/ayu-dark-Cv9koXgw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3a65-Q1j891KpAph3EWu90fhfuUDvR08\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 14949,
    "path": "../public/_build/assets/ayu-dark-Cv9koXgw.js"
  },
  "/_build/assets/ballerina-Du268qiB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f0bd-VbkpUDwod17aq/uVSpqoyY3WDT8\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 61629,
    "path": "../public/_build/assets/ballerina-Du268qiB.js"
  },
  "/_build/assets/bat-fje9CFhw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"32c0-T7XDvbbJHsWWK+PXfXK8ZFO9nI0\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 12992,
    "path": "../public/_build/assets/bat-fje9CFhw.js"
  },
  "/_build/assets/beancount-jY9aw0fr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2864-72GW6jf5uxkWXQk2MSD5hoMKMH0\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 10340,
    "path": "../public/_build/assets/beancount-jY9aw0fr.js"
  },
  "/_build/assets/berry-3xVqZejG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"990-Hlt1V2zfwpGD9qtoOw2FZ+/Qtiw\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 2448,
    "path": "../public/_build/assets/berry-3xVqZejG.js"
  },
  "/_build/assets/bibtex-xW4inM5L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13d3-+jLmvRMc01/9WPYkOy2r3CiPCCw\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 5075,
    "path": "../public/_build/assets/bibtex-xW4inM5L.js"
  },
  "/_build/assets/bicep-DHo0CJ0O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1166-Xkb6x0uI62SJyjRdm2CfMLf2U+8\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 4454,
    "path": "../public/_build/assets/bicep-DHo0CJ0O.js"
  },
  "/_build/assets/blade-BPCFRWwN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a5e0-f6HyTeeu6T6OdDBoxuHeOS4TwxU\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 108000,
    "path": "../public/_build/assets/blade-BPCFRWwN.js"
  },
  "/_build/assets/bsl-0rw82Q3C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"85ae-xlb78OFMsB9Xzh1nOh/FYl8Ff18\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 34222,
    "path": "../public/_build/assets/bsl-0rw82Q3C.js"
  },
  "/_build/assets/c-C3t2pwGQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"120f0-X0q7J+fF1xguFqzweVaybx3UU88\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 73968,
    "path": "../public/_build/assets/c-C3t2pwGQ.js"
  },
  "/_build/assets/cadence-Olw6fvns.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2981-YGEjp1eChLO0Sa0jvbm47xLwIHI\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 10625,
    "path": "../public/_build/assets/cadence-Olw6fvns.js"
  },
  "/_build/assets/cairo-DzT9zD9X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b8a-wxJ8M/Cx6c5KbWq5JXYfIA0m1kI\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 2954,
    "path": "../public/_build/assets/cairo-DzT9zD9X.js"
  },
  "/_build/assets/catppuccin-frappe-CD_QflpE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b230-Ye6how9tyXomcJDGSeovtQzWAi8\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 45616,
    "path": "../public/_build/assets/catppuccin-frappe-CD_QflpE.js"
  },
  "/_build/assets/catppuccin-latte-DRW-0cLl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b22e-xy+/TiCHaZs8UqctXSO5FKTjVQI\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 45614,
    "path": "../public/_build/assets/catppuccin-latte-DRW-0cLl.js"
  },
  "/_build/assets/catppuccin-macchiato-C-_shW-Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b235-IOuqdH140zmembMIabC2omrC0gk\"",
    "mtime": "2025-04-07T17:08:47.366Z",
    "size": 45621,
    "path": "../public/_build/assets/catppuccin-macchiato-C-_shW-Y.js"
  },
  "/_build/assets/catppuccin-mocha-LGGdnPYs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b22d-9HJY4AmCww6E1KE0oACg3a5+tEg\"",
    "mtime": "2025-04-07T17:08:47.365Z",
    "size": 45613,
    "path": "../public/_build/assets/catppuccin-mocha-LGGdnPYs.js"
  },
  "/_build/assets/checkbox-DmFmSC3J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ab9-UGjh5G0pf+XMB6mDWlAEW2iI3rU\"",
    "mtime": "2025-04-07T17:08:47.366Z",
    "size": 2745,
    "path": "../public/_build/assets/checkbox-DmFmSC3J.js"
  },
  "/_build/assets/circle-plus-Cu8ULUag.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"178-VYLepauhfZIUS+EKyWk9mOuQ/fc\"",
    "mtime": "2025-04-07T17:08:47.366Z",
    "size": 376,
    "path": "../public/_build/assets/circle-plus-Cu8ULUag.js"
  },
  "/_build/assets/clarity-CeaQPKDP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"380f-Ffd3X6c3qtWZ4+YWRbfJRCQCDak\"",
    "mtime": "2025-04-07T17:08:47.366Z",
    "size": 14351,
    "path": "../public/_build/assets/clarity-CeaQPKDP.js"
  },
  "/_build/assets/client-CMvCw2jp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"111001-t4MX9zMvJFY11eT+2D8Bk/cy7lU\"",
    "mtime": "2025-04-07T17:08:47.366Z",
    "size": 1118209,
    "path": "../public/_build/assets/client-CMvCw2jp.js"
  },
  "/_build/assets/client-DUcPGb69.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"40-2lEvUdQDqKNuNUT3BZY4JFfcmSY\"",
    "mtime": "2025-04-07T17:08:47.366Z",
    "size": 64,
    "path": "../public/_build/assets/client-DUcPGb69.js"
  },
  "/_build/assets/clojure-DxSadP1t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ba5-XvQPAq6oZVbBOChSwmFF834qI3s\"",
    "mtime": "2025-04-07T17:08:47.366Z",
    "size": 7077,
    "path": "../public/_build/assets/clojure-DxSadP1t.js"
  },
  "/_build/assets/cmake-DbcauaCG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"26a3-OF0ti53MjKOZGhHnxPZrTJNwpgM\"",
    "mtime": "2025-04-07T17:08:47.366Z",
    "size": 9891,
    "path": "../public/_build/assets/cmake-DbcauaCG.js"
  },
  "/_build/assets/cobol-PXo7EpZU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9e04-/2kZKXd/R7+pMc7Bnt3YlfB/cSA\"",
    "mtime": "2025-04-07T17:08:47.366Z",
    "size": 40452,
    "path": "../public/_build/assets/cobol-PXo7EpZU.js"
  },
  "/_build/assets/codeowners-Bp6g37R7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"223-LScnQcrupWjGOHlgVTaKyfzcpy0\"",
    "mtime": "2025-04-07T17:08:47.366Z",
    "size": 547,
    "path": "../public/_build/assets/codeowners-Bp6g37R7.js"
  },
  "/_build/assets/codeql-DBtIRQT_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"833a-lKLx2n2d0MGWlN8n6/Qpw05utog\"",
    "mtime": "2025-04-07T17:08:47.366Z",
    "size": 33594,
    "path": "../public/_build/assets/codeql-DBtIRQT_.js"
  },
  "/_build/assets/coffee-dyiR41kL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6c65-kCgc2O0kzsdTY7F4f/4YzIQ/zNM\"",
    "mtime": "2025-04-07T17:08:47.366Z",
    "size": 27749,
    "path": "../public/_build/assets/coffee-dyiR41kL.js"
  },
  "/_build/assets/collapsible-fEEhjg5O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3224-AY0q+2S4rR3as7h7xxT1M97F1cA\"",
    "mtime": "2025-04-07T17:08:47.366Z",
    "size": 12836,
    "path": "../public/_build/assets/collapsible-fEEhjg5O.js"
  },
  "/_build/assets/common-lisp-C7gG9l05.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6f50-UrhCrL/akz/yjJZGei8g9majuXQ\"",
    "mtime": "2025-04-07T17:08:47.366Z",
    "size": 28496,
    "path": "../public/_build/assets/common-lisp-C7gG9l05.js"
  },
  "/_build/assets/coq-BHyGnp0Z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"152d-seFU9RVHpsX8P2T4XNqsODlpIfw\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 5421,
    "path": "../public/_build/assets/coq-BHyGnp0Z.js"
  },
  "/_build/assets/cpp-DXc6Zn63.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"aa4ac-zNPC5owTHB7d1rYsjywymNADdIg\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 697516,
    "path": "../public/_build/assets/cpp-DXc6Zn63.js"
  },
  "/_build/assets/crystal-BANhDVLs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7459-A9LSLWTvifAzJw37gxDz5xVVHw8\"",
    "mtime": "2025-04-07T17:08:47.366Z",
    "size": 29785,
    "path": "../public/_build/assets/crystal-BANhDVLs.js"
  },
  "/_build/assets/csharp-C9e09xm7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"15491-YGHWLf1hlmHcf+rVQqa1WMIwxjs\"",
    "mtime": "2025-04-07T17:08:47.366Z",
    "size": 87185,
    "path": "../public/_build/assets/csharp-C9e09xm7.js"
  },
  "/_build/assets/css-BPhBrDlE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d227-7oRpJucwQoOcqa/utG1Tc2TMc4s\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 53799,
    "path": "../public/_build/assets/css-BPhBrDlE.js"
  },
  "/_build/assets/csv-B0qRVHPH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4c7-bCo2e81Ha7jwjmZrwn7sAlSRkZ0\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 1223,
    "path": "../public/_build/assets/csv-B0qRVHPH.js"
  },
  "/_build/assets/cue-DtFQj3wx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"43c2-XgzrvrTJDqceNsCnQUW+EBjq+y4\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 17346,
    "path": "../public/_build/assets/cue-DtFQj3wx.js"
  },
  "/_build/assets/cypher-Dp08fnRF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1795-Q/ivHt9cBrixZ8LyWvRIatDRVGM\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 6037,
    "path": "../public/_build/assets/cypher-Dp08fnRF.js"
  },
  "/_build/assets/d-BoXegm-a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a805-uJ70b2/MAZJJv+j22+eZeodXKVE\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 43013,
    "path": "../public/_build/assets/d-BoXegm-a.js"
  },
  "/_build/assets/dark-plus-C3mMm8J8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2389-BXT9xKjaiqBfp3OCAewo89+9Wpg\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 9097,
    "path": "../public/_build/assets/dark-plus-C3mMm8J8.js"
  },
  "/_build/assets/dart-B9wLZaAG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ed2-TCk/Iq+iuge27FFP0qmL4dCR4xg\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 7890,
    "path": "../public/_build/assets/dart-B9wLZaAG.js"
  },
  "/_build/assets/dax-D_iqerNF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1572-Kdb37O38EppCD9yZlcCGlzDurII\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 5490,
    "path": "../public/_build/assets/dax-D_iqerNF.js"
  },
  "/_build/assets/desktop-DEIpsLCJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7eb-re77T+9BfnvaYlymlHGmq0XHpwM\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 2027,
    "path": "../public/_build/assets/desktop-DEIpsLCJ.js"
  },
  "/_build/assets/dialog-idyyqogp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"869-a8OfibP5Ld1NbGBNYQTG0NNfewE\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 2153,
    "path": "../public/_build/assets/dialog-idyyqogp.js"
  },
  "/_build/assets/diff-DERFIACx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a12-DqUlfWM3YgNzJKZU3xX7k57+Deg\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 2578,
    "path": "../public/_build/assets/diff-DERFIACx.js"
  },
  "/_build/assets/docker-BcOcwvcX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6cd-68IbxZPtS8UtKOhcJpPOx3Qxas4\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 1741,
    "path": "../public/_build/assets/docker-BcOcwvcX.js"
  },
  "/_build/assets/dotenv-Ddn3lr0y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5a4-0JEDMHoV24FzcAmsxuOpSYIAAUc\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 1444,
    "path": "../public/_build/assets/dotenv-Ddn3lr0y.js"
  },
  "/_build/assets/dracula-BzJJZx-M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"524a-+n2NQF4pUrirtbVLSya0Zll9gp8\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 21066,
    "path": "../public/_build/assets/dracula-BzJJZx-M.js"
  },
  "/_build/assets/dracula-soft-BXkSAIEj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5254-Axn1fQr9TF+GkmVdLvo6H+JJ8B8\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 21076,
    "path": "../public/_build/assets/dracula-soft-BXkSAIEj.js"
  },
  "/_build/assets/dream-maker-2V0Ap-uE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2942-vmrQshSSN1my18bn7Wk5GyeP4ak\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 10562,
    "path": "../public/_build/assets/dream-maker-2V0Ap-uE.js"
  },
  "/_build/assets/edge-DtcDOGsI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"937-nsPIpmQh8UDTeWAfaVoWap8PNEU\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 2359,
    "path": "../public/_build/assets/edge-DtcDOGsI.js"
  },
  "/_build/assets/elixir-BigP6_ue.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"40f8-NmtKoo+89zKLxmQ+jCHRrJtlcK0\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 16632,
    "path": "../public/_build/assets/elixir-BigP6_ue.js"
  },
  "/_build/assets/elm-0zW53zC1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2bb5-ZvjVT5BZtCUikmLP8awKuQpY4Xg\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 11189,
    "path": "../public/_build/assets/elm-0zW53zC1.js"
  },
  "/_build/assets/emacs-lisp-BX77sIaO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c4742-yOsnIvIUkWn2bG9UJ70auexRguo\"",
    "mtime": "2025-04-07T17:08:47.368Z",
    "size": 804674,
    "path": "../public/_build/assets/emacs-lisp-BX77sIaO.js"
  },
  "/_build/assets/erb-HE-c_T40.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a2f-jrimQsjoTWQMlAdMVOSwtvGaj+A\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 2607,
    "path": "../public/_build/assets/erb-HE-c_T40.js"
  },
  "/_build/assets/erlang-WlOKAcJ7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8a97-/bZEPnIAwFGcx2eG8vCZGNDwdSo\"",
    "mtime": "2025-04-07T17:08:47.367Z",
    "size": 35479,
    "path": "../public/_build/assets/erlang-WlOKAcJ7.js"
  },
  "/_build/assets/everforest-dark-BgDCqdQA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d1f1-Hu9sPs6I5PgTPGWd3WR7nOwmRy8\"",
    "mtime": "2025-04-07T17:08:47.368Z",
    "size": 53745,
    "path": "../public/_build/assets/everforest-dark-BgDCqdQA.js"
  },
  "/_build/assets/everforest-light-C8M2exoo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d1f4-DRqIliTj8jrkpY6QITy6jlt6T6w\"",
    "mtime": "2025-04-07T17:08:47.368Z",
    "size": 53748,
    "path": "../public/_build/assets/everforest-light-C8M2exoo.js"
  },
  "/_build/assets/fennel-bCA53EVm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12d7-gmCxpZILK9DxQPkJn6V8v2sOv1k\"",
    "mtime": "2025-04-07T17:08:47.368Z",
    "size": 4823,
    "path": "../public/_build/assets/fennel-bCA53EVm.js"
  },
  "/_build/assets/fish-BLmoVg8f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10a4-UpEyOfkQif5QySfBZ7Csh3FmT7E\"",
    "mtime": "2025-04-07T17:08:47.370Z",
    "size": 4260,
    "path": "../public/_build/assets/fish-BLmoVg8f.js"
  },
  "/_build/assets/fluent-Dayu4EKP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e26-vfdTPLy0K9wK7hGwyJk8k8AS2FM\"",
    "mtime": "2025-04-07T17:08:47.368Z",
    "size": 3622,
    "path": "../public/_build/assets/fluent-Dayu4EKP.js"
  },
  "/_build/assets/folder-open-mEKpUj5E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1cd-B+H9iVKnN1tsEGUCEDvFi0DwxTc\"",
    "mtime": "2025-04-07T17:08:47.368Z",
    "size": 461,
    "path": "../public/_build/assets/folder-open-mEKpUj5E.js"
  },
  "/_build/assets/fortran-fixed-form-CMvLjigt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"451-qsiRF4wtdekgrSf+9P9ahl6DZQ0\"",
    "mtime": "2025-04-07T17:08:47.370Z",
    "size": 1105,
    "path": "../public/_build/assets/fortran-fixed-form-CMvLjigt.js"
  },
  "/_build/assets/fortran-free-form-DjP-tqRL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"157f4-j/0Af0d/UEZe7jWqvnoyCtvnz0U\"",
    "mtime": "2025-04-07T17:08:47.368Z",
    "size": 88052,
    "path": "../public/_build/assets/fortran-free-form-DjP-tqRL.js"
  },
  "/_build/assets/fsharp-BPKZXYjh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"646a-WUeNLFg/F1vsouTkMSpF+yp2/Ps\"",
    "mtime": "2025-04-07T17:08:47.368Z",
    "size": 25706,
    "path": "../public/_build/assets/fsharp-BPKZXYjh.js"
  },
  "/_build/assets/gdresource-N9nUj_Sl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"153b-yFQDgv2rb4qK4hemP0Z+uRwpRJ4\"",
    "mtime": "2025-04-07T17:08:47.370Z",
    "size": 5435,
    "path": "../public/_build/assets/gdresource-N9nUj_Sl.js"
  },
  "/_build/assets/gdscript-CCbUEAxs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4857-p69C27cdmBTrnBI7J4wR/e+qMKI\"",
    "mtime": "2025-04-07T17:08:47.370Z",
    "size": 18519,
    "path": "../public/_build/assets/gdscript-CCbUEAxs.js"
  },
  "/_build/assets/gdshader-SKMF96pI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18e6-kAXeqRkqTaTU+J0FprUWg2rGepE\"",
    "mtime": "2025-04-07T17:08:47.370Z",
    "size": 6374,
    "path": "../public/_build/assets/gdshader-SKMF96pI.js"
  },
  "/_build/assets/genie-ajMbGru0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d32-hNJ8nslsVzQ7NFcBKsR8yuBZXjA\"",
    "mtime": "2025-04-07T17:08:47.370Z",
    "size": 3378,
    "path": "../public/_build/assets/genie-ajMbGru0.js"
  },
  "/_build/assets/gherkin--30QC5Em.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"30ff-QB21Px5f9HaxTs766Fosy7DyORA\"",
    "mtime": "2025-04-07T17:08:47.370Z",
    "size": 12543,
    "path": "../public/_build/assets/gherkin--30QC5Em.js"
  },
  "/_build/assets/git-commit-BhPX3RR1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4da-IvXa8uXcdO14SV9E5aNp5c+QbTU\"",
    "mtime": "2025-04-07T17:08:47.370Z",
    "size": 1242,
    "path": "../public/_build/assets/git-commit-BhPX3RR1.js"
  },
  "/_build/assets/git-rebase-uGYh9tYw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3d4-g0Ti6P+HnmGx7pfIohej/YMj490\"",
    "mtime": "2025-04-07T17:08:47.370Z",
    "size": 980,
    "path": "../public/_build/assets/git-rebase-uGYh9tYw.js"
  },
  "/_build/assets/github-dark-DHJKELXO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2c8d-G52k5HF2RR+jOGOolyZJDXOaYjU\"",
    "mtime": "2025-04-07T17:08:47.370Z",
    "size": 11405,
    "path": "../public/_build/assets/github-dark-DHJKELXO.js"
  },
  "/_build/assets/github-dark-default-Cuk6v7N8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3863-ch+lyFS9QkuOdtlQcqnXQ5iOqcc\"",
    "mtime": "2025-04-07T17:08:47.370Z",
    "size": 14435,
    "path": "../public/_build/assets/github-dark-default-Cuk6v7N8.js"
  },
  "/_build/assets/github-dark-dimmed-DH5Ifo-i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3861-ZsBIvSUlsHzh+aocazJKD4XzMVc\"",
    "mtime": "2025-04-07T17:08:47.370Z",
    "size": 14433,
    "path": "../public/_build/assets/github-dark-dimmed-DH5Ifo-i.js"
  },
  "/_build/assets/github-dark-high-contrast-E3gJ1_iC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3903-b1i07XzPpd3BHF9/vi4M4mGWen8\"",
    "mtime": "2025-04-07T17:08:47.370Z",
    "size": 14595,
    "path": "../public/_build/assets/github-dark-high-contrast-E3gJ1_iC.js"
  },
  "/_build/assets/github-light-DAi9KRSo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2bb0-kCaePAc0SkqzEXT/m+0Gi8SfIkE\"",
    "mtime": "2025-04-07T17:08:47.370Z",
    "size": 11184,
    "path": "../public/_build/assets/github-light-DAi9KRSo.js"
  },
  "/_build/assets/github-light-default-D7oLnXFd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"374c-u5ndhk1KsUHitkpMJ6KIbAiO+N0\"",
    "mtime": "2025-04-07T17:08:47.370Z",
    "size": 14156,
    "path": "../public/_build/assets/github-light-default-D7oLnXFd.js"
  },
  "/_build/assets/github-light-high-contrast-BfjtVDDH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"37c3-xDmtEk31qK1Bh5UReLYFJAKxJ5I\"",
    "mtime": "2025-04-07T17:08:47.371Z",
    "size": 14275,
    "path": "../public/_build/assets/github-light-high-contrast-BfjtVDDH.js"
  },
  "/_build/assets/gleam-B430Bg39.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a7e-s7+gJ3g+jU5Jc706I2cjYhKrPvo\"",
    "mtime": "2025-04-07T17:08:47.370Z",
    "size": 2686,
    "path": "../public/_build/assets/gleam-B430Bg39.js"
  },
  "/_build/assets/glimmer-js-CxrE9ua0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"504b-T/HPxSq5u885IW0FNI1ar7DxcB8\"",
    "mtime": "2025-04-07T17:08:47.371Z",
    "size": 20555,
    "path": "../public/_build/assets/glimmer-js-CxrE9ua0.js"
  },
  "/_build/assets/glimmer-ts-CkqoYwsv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"504b-yX8nx5mPxxotBliumC7KepZhJAA\"",
    "mtime": "2025-04-07T17:08:47.371Z",
    "size": 20555,
    "path": "../public/_build/assets/glimmer-ts-CkqoYwsv.js"
  },
  "/_build/assets/glsl-DBO2IWDn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f66-jo1NK4afiezUT879rWLqby3OPSM\"",
    "mtime": "2025-04-07T17:08:47.371Z",
    "size": 3942,
    "path": "../public/_build/assets/glsl-DBO2IWDn.js"
  },
  "/_build/assets/gnuplot-CM8KxXT1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3a3e-eg75gM9fNZE2ZlazuDhbvvtr6SA\"",
    "mtime": "2025-04-07T17:08:47.371Z",
    "size": 14910,
    "path": "../public/_build/assets/gnuplot-CM8KxXT1.js"
  },
  "/_build/assets/go-Dtn5OO9k.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bdfa-Egvh0Z9iURAjHV9rniv6m938eLw\"",
    "mtime": "2025-04-07T17:08:47.371Z",
    "size": 48634,
    "path": "../public/_build/assets/go-Dtn5OO9k.js"
  },
  "/_build/assets/graphql-DCjtUNCr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"465d-0YEaCMVVdqN60JsOfUNuozH5olw\"",
    "mtime": "2025-04-07T17:08:47.371Z",
    "size": 18013,
    "path": "../public/_build/assets/graphql-DCjtUNCr.js"
  },
  "/_build/assets/groovy-Blx2zv3z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4b9f-m7lMX7snf2Y6OvFRwIq4mswzOlY\"",
    "mtime": "2025-04-07T17:08:47.371Z",
    "size": 19359,
    "path": "../public/_build/assets/groovy-Blx2zv3z.js"
  },
  "/_build/assets/hack-oRCDNDMe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13def-+TO4Y7VybziREW7tx8ElG+X02LA\"",
    "mtime": "2025-04-07T17:08:47.371Z",
    "size": 81391,
    "path": "../public/_build/assets/hack-oRCDNDMe.js"
  },
  "/_build/assets/haml-DeHWu7Vy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20e2-11oQFmop3FwC3G6lAVTPY76+v2M\"",
    "mtime": "2025-04-07T17:08:47.371Z",
    "size": 8418,
    "path": "../public/_build/assets/haml-DeHWu7Vy.js"
  },
  "/_build/assets/handlebars-DQyaA0Rc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2fea-h6cSfAVZViW3ty9Kj+RCaG4KWHA\"",
    "mtime": "2025-04-07T17:08:47.371Z",
    "size": 12266,
    "path": "../public/_build/assets/handlebars-DQyaA0Rc.js"
  },
  "/_build/assets/haskell-CWgbWrzg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a59e-R1X6WcCCDlIcSMEXd/eORS1pbtY\"",
    "mtime": "2025-04-07T17:08:47.371Z",
    "size": 42398,
    "path": "../public/_build/assets/haskell-CWgbWrzg.js"
  },
  "/_build/assets/haxe-C5wWYbrZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"89df-Et79G3vB16QgsUONfD0LxirtsG4\"",
    "mtime": "2025-04-07T17:08:47.371Z",
    "size": 35295,
    "path": "../public/_build/assets/haxe-C5wWYbrZ.js"
  },
  "/_build/assets/hcl-CucaAMjX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"280a-Rz1HUKonELsBMnC2FOTsRQFq3Lw\"",
    "mtime": "2025-04-07T17:08:47.371Z",
    "size": 10250,
    "path": "../public/_build/assets/hcl-CucaAMjX.js"
  },
  "/_build/assets/hjson-T-Tgc4AT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3028-DA4AZoV8kS7daPMok97GQY/nYnU\"",
    "mtime": "2025-04-07T17:08:47.371Z",
    "size": 12328,
    "path": "../public/_build/assets/hjson-T-Tgc4AT.js"
  },
  "/_build/assets/hlsl-ifBTmRxC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1db5-VNcKgIsBqFnv0ab9XifijpH2SrM\"",
    "mtime": "2025-04-07T17:08:47.371Z",
    "size": 7605,
    "path": "../public/_build/assets/hlsl-ifBTmRxC.js"
  },
  "/_build/assets/houston-DnULxvSX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8a5e-lpZgdjKbVFHBYkOMCMZXYihb+Y0\"",
    "mtime": "2025-04-07T17:08:47.371Z",
    "size": 35422,
    "path": "../public/_build/assets/houston-DnULxvSX.js"
  },
  "/_build/assets/html-Dy5dLvcr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"edb0-TYya2uEwcjKKKuN+k943/hPfKJI\"",
    "mtime": "2025-04-07T17:08:47.372Z",
    "size": 60848,
    "path": "../public/_build/assets/html-Dy5dLvcr.js"
  },
  "/_build/assets/html-derivative-CAzaCcJ8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3ca-6mjQN0B4YLOjlXpn+pMYz0gYUFI\"",
    "mtime": "2025-04-07T17:08:47.371Z",
    "size": 970,
    "path": "../public/_build/assets/html-derivative-CAzaCcJ8.js"
  },
  "/_build/assets/http-D7RGPc5S.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"122e-fDlrCmze3bf/lMeXpBIKBRHIVrc\"",
    "mtime": "2025-04-07T17:08:47.372Z",
    "size": 4654,
    "path": "../public/_build/assets/http-D7RGPc5S.js"
  },
  "/_build/assets/hxml-TIA70rKU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"726-2BS/9yqZnN3RRusmSUHoYomogxM\"",
    "mtime": "2025-04-07T17:08:47.372Z",
    "size": 1830,
    "path": "../public/_build/assets/hxml-TIA70rKU.js"
  },
  "/_build/assets/hy-BMj5Y0dO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b0c-rsarcEHiZnYMrAmKQkQ/i/2Kin4\"",
    "mtime": "2025-04-07T17:08:47.372Z",
    "size": 2828,
    "path": "../public/_build/assets/hy-BMj5Y0dO.js"
  },
  "/_build/assets/imba-bv_oIlVt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d0d6-N851WYuYlyVd7qv8HD23cuwAeBA\"",
    "mtime": "2025-04-07T17:08:47.372Z",
    "size": 53462,
    "path": "../public/_build/assets/imba-bv_oIlVt.js"
  },
  "/_build/assets/index-BCQOL4kc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d218-Y68UXOO8Lyqn6AEeRIFwlSbKcBM\"",
    "mtime": "2025-04-07T17:08:47.372Z",
    "size": 119320,
    "path": "../public/_build/assets/index-BCQOL4kc.css"
  },
  "/_build/assets/index-BQURUJLf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e520-B4/1s19j3pcYe4D0iOGIR4wMmhc\"",
    "mtime": "2025-04-07T17:08:47.372Z",
    "size": 124192,
    "path": "../public/_build/assets/index-BQURUJLf.js"
  },
  "/_build/assets/index-ByYxuMTR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9f8-NxLrSX91Sg7KLrSS+yA4kAMvMh4\"",
    "mtime": "2025-04-07T17:08:47.372Z",
    "size": 2552,
    "path": "../public/_build/assets/index-ByYxuMTR.js"
  },
  "/_build/assets/index-Co8wnLPe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"747a-57FG8pA9UTASPgHwR9n1uswlaEs\"",
    "mtime": "2025-04-07T17:08:47.372Z",
    "size": 29818,
    "path": "../public/_build/assets/index-Co8wnLPe.js"
  },
  "/_build/assets/index-CruqTYBh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"37d1-HJk8a5WNFAlbd0JUgWbu2lmKXyc\"",
    "mtime": "2025-04-07T17:08:47.372Z",
    "size": 14289,
    "path": "../public/_build/assets/index-CruqTYBh.js"
  },
  "/_build/assets/index-D4Sbh5Bj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f8a-HoSXM9LK9ByOEcUCxPMAhpUH810\"",
    "mtime": "2025-04-07T17:08:47.372Z",
    "size": 3978,
    "path": "../public/_build/assets/index-D4Sbh5Bj.js"
  },
  "/_build/assets/index-Zg7tyrW1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2c94-XMfX9jZ5xFSdVSyUeLPjrMLQfpQ\"",
    "mtime": "2025-04-07T17:08:47.372Z",
    "size": 11412,
    "path": "../public/_build/assets/index-Zg7tyrW1.js"
  },
  "/_build/assets/ini-BjABl1g7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5f9-jBh85NrAGgqEDiS4a/QPtcdsy1M\"",
    "mtime": "2025-04-07T17:08:47.372Z",
    "size": 1529,
    "path": "../public/_build/assets/ini-BjABl1g7.js"
  },
  "/_build/assets/java-xI-RfyKK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6b5d-OMKyZe2D973PUPV/aZKhPsT/zYQ\"",
    "mtime": "2025-04-07T17:08:47.372Z",
    "size": 27485,
    "path": "../public/_build/assets/java-xI-RfyKK.js"
  },
  "/_build/assets/javascript-ySlJ1b_l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3058f-oEJdxvDuqoCyHeAjBlw0Zu0Ayag\"",
    "mtime": "2025-04-07T17:08:47.372Z",
    "size": 198031,
    "path": "../public/_build/assets/javascript-ySlJ1b_l.js"
  },
  "/_build/assets/jinja-V0eE2z2R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"165c-EWgCN9pJ9lVGIjRn0T+JLo/fGB4\"",
    "mtime": "2025-04-07T17:08:47.373Z",
    "size": 5724,
    "path": "../public/_build/assets/jinja-V0eE2z2R.js"
  },
  "/_build/assets/jison-BqZprYcd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2600-ptDv9/2gPXoEfFsBFqw3rm9ep10\"",
    "mtime": "2025-04-07T17:08:47.373Z",
    "size": 9728,
    "path": "../public/_build/assets/jison-BqZprYcd.js"
  },
  "/_build/assets/json-DTAJTTim.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b22-YY7Y2BPr7TP+QrvrOYZBt3jPCNw\"",
    "mtime": "2025-04-07T17:08:47.372Z",
    "size": 2850,
    "path": "../public/_build/assets/json-DTAJTTim.js"
  },
  "/_build/assets/json5-BLCLeV30.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ce9-HtrGwR2xcBidBKRf+i87+vQaGvk\"",
    "mtime": "2025-04-07T17:08:47.372Z",
    "size": 3305,
    "path": "../public/_build/assets/json5-BLCLeV30.js"
  },
  "/_build/assets/jsonc-CR_dl2Bk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c3f-z0YDPojEZVHAOTaoBXx47qWtl6w\"",
    "mtime": "2025-04-07T17:08:47.373Z",
    "size": 3135,
    "path": "../public/_build/assets/jsonc-CR_dl2Bk.js"
  },
  "/_build/assets/jsonl-YSxxb8je.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bdd-oYAH9EeicVEaG7E21/UeIorlEOY\"",
    "mtime": "2025-04-07T17:08:47.373Z",
    "size": 3037,
    "path": "../public/_build/assets/jsonl-YSxxb8je.js"
  },
  "/_build/assets/jsonnet-BfivnA6A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e2e-1vSxfI5qn55fmHTjAfe3rPd6nPI\"",
    "mtime": "2025-04-07T17:08:47.373Z",
    "size": 3630,
    "path": "../public/_build/assets/jsonnet-BfivnA6A.js"
  },
  "/_build/assets/jssm-CQPZbkWf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c9-+h3gqE0n2q7blHbeb7dKlIb6k7A\"",
    "mtime": "2025-04-07T17:08:47.372Z",
    "size": 2249,
    "path": "../public/_build/assets/jssm-CQPZbkWf.js"
  },
  "/_build/assets/jsx-BAng5TT0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"31130-GUiGNuxza4CWadEWwPBI9YnCi60\"",
    "mtime": "2025-04-07T17:08:47.373Z",
    "size": 201008,
    "path": "../public/_build/assets/jsx-BAng5TT0.js"
  },
  "/_build/assets/julia-B15RSDUV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"863a-VHRLwtZ1iAHHbjgUXbyhNnJ8Q6Q\"",
    "mtime": "2025-04-07T17:08:47.373Z",
    "size": 34362,
    "path": "../public/_build/assets/julia-B15RSDUV.js"
  },
  "/_build/assets/kanagawa-dragon-CkXjmgJE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"42e7-+hm358z2R6HWIP4VA2TRRR+lsAA\"",
    "mtime": "2025-04-07T17:08:47.373Z",
    "size": 17127,
    "path": "../public/_build/assets/kanagawa-dragon-CkXjmgJE.js"
  },
  "/_build/assets/kanagawa-lotus-CfQXZHmo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"42e6-JdP/XjojKBbDVeNQlQVl/w8pfP0\"",
    "mtime": "2025-04-07T17:08:47.373Z",
    "size": 17126,
    "path": "../public/_build/assets/kanagawa-lotus-CfQXZHmo.js"
  },
  "/_build/assets/kanagawa-wave-DWedfzmr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"42e3-jnQVGWyfAUj5Bj6u8/SJs5K6KHQ\"",
    "mtime": "2025-04-07T17:08:47.373Z",
    "size": 17123,
    "path": "../public/_build/assets/kanagawa-wave-DWedfzmr.js"
  },
  "/_build/assets/kotlin-B5lbUyaz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2274-05SYT5iCRUCd1F0IFC1yAYQc7Is\"",
    "mtime": "2025-04-07T17:08:47.374Z",
    "size": 8820,
    "path": "../public/_build/assets/kotlin-B5lbUyaz.js"
  },
  "/_build/assets/kusto-BZ4qjH1z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3d45-eo7xvd7AvLBvmBIPqY7OVBEcy3U\"",
    "mtime": "2025-04-07T17:08:47.373Z",
    "size": 15685,
    "path": "../public/_build/assets/kusto-BZ4qjH1z.js"
  },
  "/_build/assets/laserwave-DUszq2jm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ceb-ePBMCAX7SG0Irjogl+g1U5DwooA\"",
    "mtime": "2025-04-07T17:08:47.373Z",
    "size": 11499,
    "path": "../public/_build/assets/laserwave-DUszq2jm.js"
  },
  "/_build/assets/latex-B7S_v0-W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e893-q1kfb7xZsdv/ts2vCe2OPtszOWw\"",
    "mtime": "2025-04-07T17:08:47.373Z",
    "size": 59539,
    "path": "../public/_build/assets/latex-B7S_v0-W.js"
  },
  "/_build/assets/lean-XBlWyCtg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10d4-fwacqXN/kcCdpVbNAzMSslPcgzg\"",
    "mtime": "2025-04-07T17:08:47.374Z",
    "size": 4308,
    "path": "../public/_build/assets/lean-XBlWyCtg.js"
  },
  "/_build/assets/less-BR4n0CG2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18d14-dUEnHx5ePOPMRkLxAY3XcJ9Ho3I\"",
    "mtime": "2025-04-07T17:08:47.373Z",
    "size": 101652,
    "path": "../public/_build/assets/less-BR4n0CG2.js"
  },
  "/_build/assets/light-plus-B7mTdjB0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"26d5-Zx7qpUhhqjqkejhteLDsh7vIk0c\"",
    "mtime": "2025-04-07T17:08:47.373Z",
    "size": 9941,
    "path": "../public/_build/assets/light-plus-B7mTdjB0.js"
  },
  "/_build/assets/liquid-ChyiIx6a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4310-ohs3zSEdl617zBRy7xWou+ag1D4\"",
    "mtime": "2025-04-07T17:08:47.373Z",
    "size": 17168,
    "path": "../public/_build/assets/liquid-ChyiIx6a.js"
  },
  "/_build/assets/lock-CxUcGwOm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"178-ZEEAUMmXXhlAvrWeFDcWZbDhaNc\"",
    "mtime": "2025-04-07T17:08:47.374Z",
    "size": 376,
    "path": "../public/_build/assets/lock-CxUcGwOm.js"
  },
  "/_build/assets/log-Cc5clBb7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b95-n50sONtIlLHqsuhIEACjNj6b16k\"",
    "mtime": "2025-04-07T17:08:47.374Z",
    "size": 2965,
    "path": "../public/_build/assets/log-Cc5clBb7.js"
  },
  "/_build/assets/logo-IuBKFhSY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c8b-msGNmLHIaKzNcKoEjZB/drsLZTg\"",
    "mtime": "2025-04-07T17:08:47.374Z",
    "size": 3211,
    "path": "../public/_build/assets/logo-IuBKFhSY.js"
  },
  "/_build/assets/lua-CvWAzNxB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3d06-u/zV34cOJlc3odRQaL0qbjXc2ew\"",
    "mtime": "2025-04-07T17:08:47.374Z",
    "size": 15622,
    "path": "../public/_build/assets/lua-CvWAzNxB.js"
  },
  "/_build/assets/luau-Du5NY7AG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3277-BBrRmXBCOilbUBbvldFJPXoUpFw\"",
    "mtime": "2025-04-07T17:08:47.374Z",
    "size": 12919,
    "path": "../public/_build/assets/luau-Du5NY7AG.js"
  },
  "/_build/assets/make-Bvotw-X0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2336-GmoXUksPv3fKmcdAsQBdlR5ZpvU\"",
    "mtime": "2025-04-07T17:08:47.374Z",
    "size": 9014,
    "path": "../public/_build/assets/make-Bvotw-X0.js"
  },
  "/_build/assets/markdown-BDiHrqA7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"dd72-wWnTgM8pKV3OBW0Co8vO61p4goY\"",
    "mtime": "2025-04-07T17:08:47.374Z",
    "size": 56690,
    "path": "../public/_build/assets/markdown-BDiHrqA7.js"
  },
  "/_build/assets/marko-DL0akeRX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4190-l0omhJhCBkJeuD0Km+8sGQtIv7M\"",
    "mtime": "2025-04-07T17:08:47.374Z",
    "size": 16784,
    "path": "../public/_build/assets/marko-DL0akeRX.js"
  },
  "/_build/assets/material-theme-D5KoaKCx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"48b7-CJZAUj4SYa7cWrWmLW1ca67ky3Y\"",
    "mtime": "2025-04-07T17:08:47.374Z",
    "size": 18615,
    "path": "../public/_build/assets/material-theme-D5KoaKCx.js"
  },
  "/_build/assets/material-theme-darker-BfHTSMKl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"48c5-2KtadDLdcujxXy8y4Bt2hElnnOs\"",
    "mtime": "2025-04-07T17:08:47.374Z",
    "size": 18629,
    "path": "../public/_build/assets/material-theme-darker-BfHTSMKl.js"
  },
  "/_build/assets/material-theme-lighter-B0m2ddpp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"48ca-vlOlJTQln4FlkoNCT6son9MOgUc\"",
    "mtime": "2025-04-07T17:08:47.374Z",
    "size": 18634,
    "path": "../public/_build/assets/material-theme-lighter-B0m2ddpp.js"
  },
  "/_build/assets/material-theme-ocean-CyktbL80.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"48c5-38IV7Gj1pi36TR7qiSHzlCs9XIo\"",
    "mtime": "2025-04-07T17:08:47.374Z",
    "size": 18629,
    "path": "../public/_build/assets/material-theme-ocean-CyktbL80.js"
  },
  "/_build/assets/material-theme-palenight-Csfq5Kiy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"48cb-tPSCpNF7svRHRSnrhMp7s2aYFJE\"",
    "mtime": "2025-04-07T17:08:47.374Z",
    "size": 18635,
    "path": "../public/_build/assets/material-theme-palenight-Csfq5Kiy.js"
  },
  "/_build/assets/matlab-C4-SGcC-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"417d-VuVp9McrkS7IHf8dWg7wokVRT2w\"",
    "mtime": "2025-04-07T17:08:47.374Z",
    "size": 16765,
    "path": "../public/_build/assets/matlab-C4-SGcC-.js"
  },
  "/_build/assets/mdc-CGDDvl7x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4cf4-MS3S0kNbNkhkTmcWBK91Om2Ox+0\"",
    "mtime": "2025-04-07T17:08:47.374Z",
    "size": 19700,
    "path": "../public/_build/assets/mdc-CGDDvl7x.js"
  },
  "/_build/assets/mdx-sdHcTMYB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"22448-7Vo9q7xgAaixy8sQ9taS8XQ7viI\"",
    "mtime": "2025-04-07T17:08:47.375Z",
    "size": 140360,
    "path": "../public/_build/assets/mdx-sdHcTMYB.js"
  },
  "/_build/assets/mermaid-D3T736Ml.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"70ee-OY10WBbwr0cHq279BR04XAbqqMQ\"",
    "mtime": "2025-04-07T17:08:47.374Z",
    "size": 28910,
    "path": "../public/_build/assets/mermaid-D3T736Ml.js"
  },
  "/_build/assets/min-dark-CafNBF8u.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1893-d496H0Z60lAg57LiRH/wyqJ+BmM\"",
    "mtime": "2025-04-07T17:08:47.375Z",
    "size": 6291,
    "path": "../public/_build/assets/min-dark-CafNBF8u.js"
  },
  "/_build/assets/min-light-CTRr51gU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b39-AV5b5gMlIyFBg8ZLVvBtodDGnYI\"",
    "mtime": "2025-04-07T17:08:47.375Z",
    "size": 6969,
    "path": "../public/_build/assets/min-light-CTRr51gU.js"
  },
  "/_build/assets/mipsasm-D08_rs9c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d00-PoCZeS48HaIZq7IK1itXEsBGTa8\"",
    "mtime": "2025-04-07T17:08:47.376Z",
    "size": 3328,
    "path": "../public/_build/assets/mipsasm-D08_rs9c.js"
  },
  "/_build/assets/mojo-tpHetfZQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11171-Yb9heu3v3jjgRaFJO6KtJteP1zA\"",
    "mtime": "2025-04-07T17:08:47.375Z",
    "size": 70001,
    "path": "../public/_build/assets/mojo-tpHetfZQ.js"
  },
  "/_build/assets/monokai-D4h5O-jR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ecc-X4WIf5/MKovdXkpn2ucY2Fvz+nI\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 7884,
    "path": "../public/_build/assets/monokai-D4h5O-jR.js"
  },
  "/_build/assets/move-C1YtDkjL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"42bb-Br136LnHpDEJW6QGhAJe3HHLtRI\"",
    "mtime": "2025-04-07T17:08:47.375Z",
    "size": 17083,
    "path": "../public/_build/assets/move-C1YtDkjL.js"
  },
  "/_build/assets/narrat-DLbgOhZU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e6e-HjKchXJIUuHOAYTWw1w+Xe8C+uM\"",
    "mtime": "2025-04-07T17:08:47.375Z",
    "size": 3694,
    "path": "../public/_build/assets/narrat-DLbgOhZU.js"
  },
  "/_build/assets/nextflow-B0XVJmRM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f76-CsdCyHhmts+bBOc+qOK8L5UQmAc\"",
    "mtime": "2025-04-07T17:08:47.375Z",
    "size": 3958,
    "path": "../public/_build/assets/nextflow-B0XVJmRM.js"
  },
  "/_build/assets/nginx-D_VnBJ67.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8b8e-au73eDRyb7x4AQhYniFJ7aqa6No\"",
    "mtime": "2025-04-07T17:08:47.375Z",
    "size": 35726,
    "path": "../public/_build/assets/nginx-D_VnBJ67.js"
  },
  "/_build/assets/night-owl-C39BiMTA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"70f1-XkEMDsROL+KqTkmkI7vaY0QDB/s\"",
    "mtime": "2025-04-07T17:08:47.376Z",
    "size": 28913,
    "path": "../public/_build/assets/night-owl-C39BiMTA.js"
  },
  "/_build/assets/nim-Chhr1h2T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"58c4-h12+HsyJt7T1sbBJGWVNMLRvp7Q\"",
    "mtime": "2025-04-07T17:08:47.376Z",
    "size": 22724,
    "path": "../public/_build/assets/nim-Chhr1h2T.js"
  },
  "/_build/assets/nix-Bjjh7dxw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3cd7-b2oU9tgnsmDhNCBlcWBvR/sxko4\"",
    "mtime": "2025-04-07T17:08:47.376Z",
    "size": 15575,
    "path": "../public/_build/assets/nix-Bjjh7dxw.js"
  },
  "/_build/assets/nord-Ddv68eIx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6863-kMtZ6hRkLXSKT61B4950edu4MjQ\"",
    "mtime": "2025-04-07T17:08:47.376Z",
    "size": 26723,
    "path": "../public/_build/assets/nord-Ddv68eIx.js"
  },
  "/_build/assets/nushell-BekpkmYp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4c71-9NpXu4I48M/9td8eqd+PTX47LXw\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 19569,
    "path": "../public/_build/assets/nushell-BekpkmYp.js"
  },
  "/_build/assets/objective-c-BWx0ALLs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a4de-LhnVG/T+V4xb39yD3Sd4XmjOoYM\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 107742,
    "path": "../public/_build/assets/objective-c-BWx0ALLs.js"
  },
  "/_build/assets/objective-cpp-aBZrgJR0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ad82-uNNuI4mQsIr7frh0EhvINDlWv7Y\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 175490,
    "path": "../public/_build/assets/objective-cpp-aBZrgJR0.js"
  },
  "/_build/assets/ocaml-BNioltXt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10149-OZvvpFEK66mofZ+3oi0dLDaRaTE\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 65865,
    "path": "../public/_build/assets/ocaml-BNioltXt.js"
  },
  "/_build/assets/one-dark-pro-DVMEJ2y_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"83fb-0g5XhPG2uspENrUTMRB2oVJl2Ws\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 33787,
    "path": "../public/_build/assets/one-dark-pro-DVMEJ2y_.js"
  },
  "/_build/assets/one-light-PoHY5YXO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"62d2-RQN1eJvOzFVrdHrv5KOv5WHUyDo\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 25298,
    "path": "../public/_build/assets/one-light-PoHY5YXO.js"
  },
  "/_build/assets/pascal-JqZropPD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1052-lr+ZoPrGKVsqJM1QoHr029xJXr8\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 4178,
    "path": "../public/_build/assets/pascal-JqZropPD.js"
  },
  "/_build/assets/perl-DO8QnyoS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ab08-NMViW+VGZwCdvTh0WCP+2LM+hfY\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 43784,
    "path": "../public/_build/assets/perl-DO8QnyoS.js"
  },
  "/_build/assets/php-udX19NJh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1bc5d-FsCsH5shOFyW9Bz+Lcl19O+o55o\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 113757,
    "path": "../public/_build/assets/php-udX19NJh.js"
  },
  "/_build/assets/plastic-3e1v2bzS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"244f-x//k8Ln2Mu2aG+nMmuAM/ZSHTfI\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 9295,
    "path": "../public/_build/assets/plastic-3e1v2bzS.js"
  },
  "/_build/assets/plsql-LKU2TuZ1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2179-66nxLzpa/D8qjlvdNJygXub6tgg\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 8569,
    "path": "../public/_build/assets/plsql-LKU2TuZ1.js"
  },
  "/_build/assets/plus-sBaVN3vY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"143-IghFWY8sATqEGhlSjxe8Q2HTqdI\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 323,
    "path": "../public/_build/assets/plus-sBaVN3vY.js"
  },
  "/_build/assets/po--71hrkjd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"caf-QJtnbRdtshgtFh/vHENl7M1JID4\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 3247,
    "path": "../public/_build/assets/po--71hrkjd.js"
  },
  "/_build/assets/poimandres-CS3Unz2-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"82d6-aUEs94AcfLqjSVpnmdfYdfX5koA\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 33494,
    "path": "../public/_build/assets/poimandres-CS3Unz2-.js"
  },
  "/_build/assets/polar-sY1Cc3Se.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"127d-NOSYRoOc7FAmHph+IBabW1F64Zs\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 4733,
    "path": "../public/_build/assets/polar-sY1Cc3Se.js"
  },
  "/_build/assets/postcss-B3ZDOciz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1974-HKAJmz8oM9Ow4TLrtYDUpCniZvo\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 6516,
    "path": "../public/_build/assets/postcss-B3ZDOciz.js"
  },
  "/_build/assets/powerquery-CSHBycmS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"172c-kxgopLm8zX3Y22IwqLFyg+wwtvk\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 5932,
    "path": "../public/_build/assets/powerquery-CSHBycmS.js"
  },
  "/_build/assets/powershell-BXl-Qilg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5082-V3rCSD+aLdU9UKo/5ptUr5wiblA\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 20610,
    "path": "../public/_build/assets/powershell-BXl-Qilg.js"
  },
  "/_build/assets/prisma-B48N-Iqd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18f2-/labr3PARfCXOkX/2kdjG7jZ7yA\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 6386,
    "path": "../public/_build/assets/prisma-B48N-Iqd.js"
  },
  "/_build/assets/prolog-BY-TUvya.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2caf-kNeZk1pQxeUhEolqA/pnTpYnalE\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 11439,
    "path": "../public/_build/assets/prolog-BY-TUvya.js"
  },
  "/_build/assets/proto-zocC4JxJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19ae-LuR/1VuHdYt78lN9mdxOxmxX2Xk\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 6574,
    "path": "../public/_build/assets/proto-zocC4JxJ.js"
  },
  "/_build/assets/pug-VMgWr3jy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3730-BM2LxvgSu9J903cUNqyeRzWEHuE\"",
    "mtime": "2025-04-07T17:08:47.377Z",
    "size": 14128,
    "path": "../public/_build/assets/pug-VMgWr3jy.js"
  },
  "/_build/assets/puppet-COl1u60l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2cf8-L2zDYI4AngBjIAtn51pR3NPWDNI\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 11512,
    "path": "../public/_build/assets/puppet-COl1u60l.js"
  },
  "/_build/assets/purescript-Bg-kzb6g.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"42cc-ZfEyzxkJqc0pjpjl3amzX4d7vVY\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 17100,
    "path": "../public/_build/assets/purescript-Bg-kzb6g.js"
  },
  "/_build/assets/python-DBPt_AfP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11477-qWF48biXSzPgSAYrNWjkvrRi0jk\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 70775,
    "path": "../public/_build/assets/python-DBPt_AfP.js"
  },
  "/_build/assets/qml-D8XfuvdV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1530-kjVm0V03MnPgTcX/HV4bbIVLc0k\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 5424,
    "path": "../public/_build/assets/qml-D8XfuvdV.js"
  },
  "/_build/assets/qmldir-C8lEn-DE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3ea-+fq0/BxvZOQ+157ZaRNbUKWMmIo\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 1002,
    "path": "../public/_build/assets/qmldir-C8lEn-DE.js"
  },
  "/_build/assets/qss-DhMKtDLN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e8a-xKqvlxsACkI+FJYhs89ziAnlgR0\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 7818,
    "path": "../public/_build/assets/qss-DhMKtDLN.js"
  },
  "/_build/assets/r-CwjWoCRV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9008-LN0v7k5933TdJFpYP4i2BAy3Vf0\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 36872,
    "path": "../public/_build/assets/r-CwjWoCRV.js"
  },
  "/_build/assets/racket-CzouJOBO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17d57-jV/MLG4UV1KVhL1eo3oXI/Ag3F0\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 97623,
    "path": "../public/_build/assets/racket-CzouJOBO.js"
  },
  "/_build/assets/raku-B1bQXN8T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2972-BRwlM60SLnBHGK3aBF5NLsVSB4o\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 10610,
    "path": "../public/_build/assets/raku-B1bQXN8T.js"
  },
  "/_build/assets/razor-AC3CASG2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"64d0-vHKAeDhaIeHZQN2AEpS+WsmY3t0\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 25808,
    "path": "../public/_build/assets/razor-AC3CASG2.js"
  },
  "/_build/assets/red-bN70gL4F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1876-TIy/lDxhgGcsWEw99X2SyGsc2kY\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 6262,
    "path": "../public/_build/assets/red-bN70gL4F.js"
  },
  "/_build/assets/reg-5LuOXUq_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"941-uDzCEo95yMEqu18z48E0TV4rICs\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 2369,
    "path": "../public/_build/assets/reg-5LuOXUq_.js"
  },
  "/_build/assets/regexp-DFERiEu9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f5e-lcMPnijeMEr83/c8XE8W+IHjFDw\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 8030,
    "path": "../public/_build/assets/regexp-DFERiEu9.js"
  },
  "/_build/assets/rel-DJlmqQ1C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d78-GfCEw07mZcAVlpdq4Uc0qsfbLyE\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 3448,
    "path": "../public/_build/assets/rel-DJlmqQ1C.js"
  },
  "/_build/assets/riscv-BAxNRJcx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c91-7+OiQ2EYouSP/x9Vu6g4qDSB6vU\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 7313,
    "path": "../public/_build/assets/riscv-BAxNRJcx.js"
  },
  "/_build/assets/rose-pine-CmCqftbK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"54ff-h7t1IkAm9sZKUd73kBTFe7jRv4o\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 21759,
    "path": "../public/_build/assets/rose-pine-CmCqftbK.js"
  },
  "/_build/assets/rose-pine-dawn-Ds-gbosJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"550a-XzUApj4T28iKwTNlG8VmS8Brr0I\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 21770,
    "path": "../public/_build/assets/rose-pine-dawn-Ds-gbosJ.js"
  },
  "/_build/assets/rose-pine-moon-CjDtw9vr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5509-RCWnxb+vl/IAW+9+6MTNAA59rgg\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 21769,
    "path": "../public/_build/assets/rose-pine-moon-CjDtw9vr.js"
  },
  "/_build/assets/rst-DOyLYcpU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2997-Rs4wHSOddKDTNptVNHGP/g/qBKY\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 10647,
    "path": "../public/_build/assets/rst-DOyLYcpU.js"
  },
  "/_build/assets/ruby-BWnuaWfc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b853-CBDMBVwxTwHfszpb+5ZGmR0bSPw\"",
    "mtime": "2025-04-07T17:08:47.378Z",
    "size": 47187,
    "path": "../public/_build/assets/ruby-BWnuaWfc.js"
  },
  "/_build/assets/rust-Cg69lM4A.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3ad0-uatg9vW4dgwifZtHlAJ8UlkfiEY\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 15056,
    "path": "../public/_build/assets/rust-Cg69lM4A.js"
  },
  "/_build/assets/sas-CCCYgBRj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2430-Ulj6/hmRFilMyQiOCKTAY49+yqE\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 9264,
    "path": "../public/_build/assets/sas-CCCYgBRj.js"
  },
  "/_build/assets/sass-DjCbjd0V.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"24c5-VQOE5SxdZRNPnHUEabodC2zGvYs\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 9413,
    "path": "../public/_build/assets/sass-DjCbjd0V.js"
  },
  "/_build/assets/scala-DPWDxuKt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7494-6XYMyk0+OWPyLMlepua3iUMhPIA\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 29844,
    "path": "../public/_build/assets/scala-DPWDxuKt.js"
  },
  "/_build/assets/scheme-D8P4R8x9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c6e-0a85NbMW6rYZypC75RRGm/+mgmI\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 7278,
    "path": "../public/_build/assets/scheme-D8P4R8x9.js"
  },
  "/_build/assets/scss-C31hgJw-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6dde-6l5ehv23DqO+VBs7S/Kvfeh7qbM\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 28126,
    "path": "../public/_build/assets/scss-C31hgJw-.js"
  },
  "/_build/assets/sdbl-CSHvh9SD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12c5-OKkmxacX5yhejcqtA9UM8MHeuLo\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 4805,
    "path": "../public/_build/assets/sdbl-CSHvh9SD.js"
  },
  "/_build/assets/shaderlab-B7qAK45m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"187f-tMmZuoOwVSqwYrl34p/ez4hjUDM\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 6271,
    "path": "../public/_build/assets/shaderlab-B7qAK45m.js"
  },
  "/_build/assets/shellscript-CWGUrYGm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a6a5-PqIf7HK5ce9AA0jaiPTCCz8oFn8\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 42661,
    "path": "../public/_build/assets/shellscript-CWGUrYGm.js"
  },
  "/_build/assets/shellsession-DN36oS-i.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2cf-ijjiKU+V/wmp6iQkEH30DO+ABfs\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 719,
    "path": "../public/_build/assets/shellsession-DN36oS-i.js"
  },
  "/_build/assets/slack-dark-BthQWCQV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"239d-LHMBsyUFh86qGFvM+u7t3WkZtbw\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 9117,
    "path": "../public/_build/assets/slack-dark-BthQWCQV.js"
  },
  "/_build/assets/slack-ochin-DqwNpetd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"24d7-BiRtKEQjWndnYLM1xGeXTGnUgo4\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 9431,
    "path": "../public/_build/assets/slack-ochin-DqwNpetd.js"
  },
  "/_build/assets/smalltalk-RJ4jLoVH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f42-l7Vf5AACXqcHI6v9HLLQ5e/U1fI\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 3906,
    "path": "../public/_build/assets/smalltalk-RJ4jLoVH.js"
  },
  "/_build/assets/snazzy-light-Bw305WKR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5125-tbBJwAwza6HClVoP6OvDw/UyczE\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 20773,
    "path": "../public/_build/assets/snazzy-light-Bw305WKR.js"
  },
  "/_build/assets/solarized-dark-DXbdFlpD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1abe-6NRBR7/r0g2IDmknK3kpzih1ojk\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 6846,
    "path": "../public/_build/assets/solarized-dark-DXbdFlpD.js"
  },
  "/_build/assets/solarized-light-L9t79GZl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1950-bOSHs4QuofVjf2ggJ3A58EemLcc\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 6480,
    "path": "../public/_build/assets/solarized-light-L9t79GZl.js"
  },
  "/_build/assets/solidity-C1w2a3ep.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3f65-5xZkaZ7PKJ06FHb3d2tWrPif7r8\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 16229,
    "path": "../public/_build/assets/solidity-C1w2a3ep.js"
  },
  "/_build/assets/soy-CxmeJsH_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b27-mPdboHFfZA+0O9w37vTfE2RVpt0\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 6951,
    "path": "../public/_build/assets/soy-CxmeJsH_.js"
  },
  "/_build/assets/sparql-bYkjHRlG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5e8-Zr71MYkCifMlbC8e1eXpQgS2Tqw\"",
    "mtime": "2025-04-07T17:08:47.379Z",
    "size": 1512,
    "path": "../public/_build/assets/sparql-bYkjHRlG.js"
  },
  "/_build/assets/splunk-a8RH-YUw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"de3-4MJ4H3Xgn2FS0O1gBAyg9d+1VU4\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 3555,
    "path": "../public/_build/assets/splunk-a8RH-YUw.js"
  },
  "/_build/assets/sql-BBT0u3iQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5cd8-UasA4b1ZmjprIlqfcTbK3Al1BNc\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 23768,
    "path": "../public/_build/assets/sql-BBT0u3iQ.js"
  },
  "/_build/assets/ssh-config-BknIz3MU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e18-13MAt3uHXNsH+CLV8pBjeujxdJE\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 3608,
    "path": "../public/_build/assets/ssh-config-BknIz3MU.js"
  },
  "/_build/assets/stata-CXDRq8TI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e375-HQIwWnqFfD/SkjWPNTdAzl8GBBI\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 58229,
    "path": "../public/_build/assets/stata-CXDRq8TI.js"
  },
  "/_build/assets/stylus-Cbu_jgUK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7acb-QrJBH0l4Qa8a+75ma8daoHQkdpE\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 31435,
    "path": "../public/_build/assets/stylus-Cbu_jgUK.js"
  },
  "/_build/assets/svelte-MSaWC3Je.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"41f6-aQxxhPl3AvtkBE8x3LiTx1PNTd8\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 16886,
    "path": "../public/_build/assets/svelte-MSaWC3Je.js"
  },
  "/_build/assets/swift-BSxZ-RaX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"16371-aztFhFxt2yUng63YlKd+l1cCNI4\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 90993,
    "path": "../public/_build/assets/swift-BSxZ-RaX.js"
  },
  "/_build/assets/synthwave-84-CbfX1IO0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"36d4-rw7+tMOmFbgQDhwnT0kx7VdqnBs\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 14036,
    "path": "../public/_build/assets/synthwave-84-CbfX1IO0.js"
  },
  "/_build/assets/system-verilog-C7L56vO4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6895-9ZLstt7ViE0xsW265mBWgmylcMs\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 26773,
    "path": "../public/_build/assets/system-verilog-C7L56vO4.js"
  },
  "/_build/assets/systemd-CUnW07Te.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f3f-uv7wy8OK67PNsOcdBMbGSWcUkaA\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 7999,
    "path": "../public/_build/assets/systemd-CUnW07Te.js"
  },
  "/_build/assets/talonscript-yNdrVPqT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a1a-PfMSNPF8XjzWBP2x+zARao8kpOw\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 6682,
    "path": "../public/_build/assets/talonscript-yNdrVPqT.js"
  },
  "/_build/assets/tasl-CQjiPCtT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d3e-EJXPrP7qzhwcxCXB1vhQUTgP4K0\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 3390,
    "path": "../public/_build/assets/tasl-CQjiPCtT.js"
  },
  "/_build/assets/tcl-C5AohmeQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"119a-naMnNAbj3hsp7yHVV+qsc4JMx2I\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 4506,
    "path": "../public/_build/assets/tcl-C5AohmeQ.js"
  },
  "/_build/assets/templ-BIXQ7kZj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5da3-VI2cCT5C2F2CZZzePb5OE+AI6s0\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 23971,
    "path": "../public/_build/assets/templ-BIXQ7kZj.js"
  },
  "/_build/assets/terraform-eHy1PpK4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2d4c-2AKXbk+YdTeYUYwuZgLT6ZQAmMI\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 11596,
    "path": "../public/_build/assets/terraform-eHy1PpK4.js"
  },
  "/_build/assets/tex-rYs2v40G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2498-GY1dWR56TL4mAOq3A3Gk4KyaEt4\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 9368,
    "path": "../public/_build/assets/tex-rYs2v40G.js"
  },
  "/_build/assets/tokyo-night-hegEt444.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8b51-G3BXQ+3KNXzWihQj05Fol+jGA9g\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 35665,
    "path": "../public/_build/assets/tokyo-night-hegEt444.js"
  },
  "/_build/assets/toml-8jXJkYXT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"196e-tVFZgvEJP9u6sS1zRf+JM9e+rUA\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 6510,
    "path": "../public/_build/assets/toml-8jXJkYXT.js"
  },
  "/_build/assets/trash-2-P1aG3-jx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20f-9AiC/2eVrqTh9CvAMar6uYUbjC0\"",
    "mtime": "2025-04-07T17:08:47.381Z",
    "size": 527,
    "path": "../public/_build/assets/trash-2-P1aG3-jx.js"
  },
  "/_build/assets/ts-tags-D3g7xtbE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"23d7-nPvO2MmsKLyoiJzzzz+hHwnuT4I\"",
    "mtime": "2025-04-07T17:08:47.381Z",
    "size": 9175,
    "path": "../public/_build/assets/ts-tags-D3g7xtbE.js"
  },
  "/_build/assets/tsv-B_m7g4N7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2e3-vD9JpGY0mKtBCmzkjdIj7UVuzls\"",
    "mtime": "2025-04-07T17:08:47.381Z",
    "size": 739,
    "path": "../public/_build/assets/tsv-B_m7g4N7.js"
  },
  "/_build/assets/tsx-B6W0miNI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"30860-clSlVRIEln5J0TKi23yN7Ppckyk\"",
    "mtime": "2025-04-07T17:08:47.381Z",
    "size": 198752,
    "path": "../public/_build/assets/tsx-B6W0miNI.js"
  },
  "/_build/assets/turtle-BMR_PYu6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e82-6Tn8gYRwl5AEDyusLBpHqJKNDV4\"",
    "mtime": "2025-04-07T17:08:47.380Z",
    "size": 3714,
    "path": "../public/_build/assets/turtle-BMR_PYu6.js"
  },
  "/_build/assets/twig-C4FN8sXG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"58e2-IY9xwZ/DVGMjKjnITYWuh2hyHU8\"",
    "mtime": "2025-04-07T17:08:47.381Z",
    "size": 22754,
    "path": "../public/_build/assets/twig-C4FN8sXG.js"
  },
  "/_build/assets/typescript-Dj6nwHGl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"33080-PHp9OtcBpJaL17dBPjYizkICOYA\"",
    "mtime": "2025-04-07T17:08:47.381Z",
    "size": 209024,
    "path": "../public/_build/assets/typescript-Dj6nwHGl.js"
  },
  "/_build/assets/typespec-BpWG_bgh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6e1d-0y2eGpCS5V1+2izLvykvaXM8sjg\"",
    "mtime": "2025-04-07T17:08:47.381Z",
    "size": 28189,
    "path": "../public/_build/assets/typespec-BpWG_bgh.js"
  },
  "/_build/assets/typst-CX-D33aM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20de-H6k5NhdX+HcC0te3LFodT1NdTpg\"",
    "mtime": "2025-04-07T17:08:47.381Z",
    "size": 8414,
    "path": "../public/_build/assets/typst-CX-D33aM.js"
  },
  "/_build/assets/useSignOut-o9qTHLdH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a6-0L2MXJ0so+UPUiVTDRTy5o4rCKc\"",
    "mtime": "2025-04-07T17:08:47.381Z",
    "size": 166,
    "path": "../public/_build/assets/useSignOut-o9qTHLdH.js"
  },
  "/_build/assets/v-CAQ2eGtk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"35aa-xn6YzOl88ay0GRLqFdRKXQgD05E\"",
    "mtime": "2025-04-07T17:08:47.381Z",
    "size": 13738,
    "path": "../public/_build/assets/v-CAQ2eGtk.js"
  },
  "/_build/assets/vala-BFOHcciG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d4c-Vf2EQoiOX9yVgGeD+J3EcnXMjkA\"",
    "mtime": "2025-04-07T17:08:47.381Z",
    "size": 3404,
    "path": "../public/_build/assets/vala-BFOHcciG.js"
  },
  "/_build/assets/vb-CdO5JTpU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1876-+TsIc4a10gYSvPYG0ceKZs9a0Vg\"",
    "mtime": "2025-04-07T17:08:47.381Z",
    "size": 6262,
    "path": "../public/_build/assets/vb-CdO5JTpU.js"
  },
  "/_build/assets/verify-account-BSPgybvY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5a-0DsdXDmPlk5V/hraZwchNZ7iIPo\"",
    "mtime": "2025-04-07T17:08:47.381Z",
    "size": 2906,
    "path": "../public/_build/assets/verify-account-BSPgybvY.js"
  },
  "/_build/assets/verilog-CJaU5se_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1731-2Wl7+oWWbokqxRmYBXtAS7fuaEM\"",
    "mtime": "2025-04-07T17:08:47.381Z",
    "size": 5937,
    "path": "../public/_build/assets/verilog-CJaU5se_.js"
  },
  "/_build/assets/vesper-BEBZ7ncR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3177-p46lCR3NVE6Z8EGnmn+1cIjrrA4\"",
    "mtime": "2025-04-07T17:08:47.381Z",
    "size": 12663,
    "path": "../public/_build/assets/vesper-BEBZ7ncR.js"
  },
  "/_build/assets/vhdl-DYoNaHQp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5ce8-VD6pQ1H7tj66J7zticC8y7ht6KE\"",
    "mtime": "2025-04-07T17:08:47.381Z",
    "size": 23784,
    "path": "../public/_build/assets/vhdl-DYoNaHQp.js"
  },
  "/_build/assets/viml-m4uW47V2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"521a-w3MftddlFkYhYUzfHiiC8BO02Uc\"",
    "mtime": "2025-04-07T17:08:47.381Z",
    "size": 21018,
    "path": "../public/_build/assets/viml-m4uW47V2.js"
  },
  "/_build/assets/vitesse-black-Bkuqu6BP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"356d-zBk2O671hcu14yjA5BaP8bRgML4\"",
    "mtime": "2025-04-07T17:08:47.382Z",
    "size": 13677,
    "path": "../public/_build/assets/vitesse-black-Bkuqu6BP.js"
  },
  "/_build/assets/vitesse-dark-D0r3Knsf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"35bf-NpZrPk9jdEu6IxpilmRefOR1sKI\"",
    "mtime": "2025-04-07T17:08:47.382Z",
    "size": 13759,
    "path": "../public/_build/assets/vitesse-dark-D0r3Knsf.js"
  },
  "/_build/assets/vitesse-light-CVO1_9PV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3530-TayDmxRMvy5Bv+gyldrxxN/vEUA\"",
    "mtime": "2025-04-07T17:08:47.382Z",
    "size": 13616,
    "path": "../public/_build/assets/vitesse-light-CVO1_9PV.js"
  },
  "/_build/assets/vue-BIMzvBW9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"52ce-qxDkBJwPofg9QjdzZ2SO3HHUSpk\"",
    "mtime": "2025-04-07T17:08:47.382Z",
    "size": 21198,
    "path": "../public/_build/assets/vue-BIMzvBW9.js"
  },
  "/_build/assets/vue-html-D8tnVLkD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"21f9-qMzyTW0na6vXjyw+dRRvKFhk/fQ\"",
    "mtime": "2025-04-07T17:08:47.382Z",
    "size": 8697,
    "path": "../public/_build/assets/vue-html-D8tnVLkD.js"
  },
  "/_build/assets/vyper-BzEH12SI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"126d4-EVS+I5sq3gKoLw1+GYgk45+owmk\"",
    "mtime": "2025-04-07T17:08:47.382Z",
    "size": 75476,
    "path": "../public/_build/assets/vyper-BzEH12SI.js"
  },
  "/_build/assets/wasm-CG6Dc4jp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"97f00-rYm+CybCMCqxOZ2Np2GsfIrREbo\"",
    "mtime": "2025-04-07T17:08:47.382Z",
    "size": 622336,
    "path": "../public/_build/assets/wasm-CG6Dc4jp.js"
  },
  "/_build/assets/wasm-ISJeQQUc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2fb9-GRfG4hNxJy6vX1rhPRvGVxD62yQ\"",
    "mtime": "2025-04-07T17:08:47.382Z",
    "size": 12217,
    "path": "../public/_build/assets/wasm-ISJeQQUc.js"
  },
  "/_build/assets/wenyan-7A4Fjokl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8b1-QLWy+rOMGxhTE+ERnnV+IFj++qM\"",
    "mtime": "2025-04-07T17:08:47.382Z",
    "size": 2225,
    "path": "../public/_build/assets/wenyan-7A4Fjokl.js"
  },
  "/_build/assets/wgsl-mD5xMClh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"14a4-vXcdla3GRVvYE7Ap/mWUzN+L5LQ\"",
    "mtime": "2025-04-07T17:08:47.382Z",
    "size": 5284,
    "path": "../public/_build/assets/wgsl-mD5xMClh.js"
  },
  "/_build/assets/wikitext-DCE3LsBG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"dd30-Yj6OGzkG+hDO8Bw4di62/RIPjww\"",
    "mtime": "2025-04-07T17:08:47.382Z",
    "size": 56624,
    "path": "../public/_build/assets/wikitext-DCE3LsBG.js"
  },
  "/_build/assets/wolfram-C3FkfJm5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"41933-Fh/YxcmFymhUio4gPBtyJ+1dPF4\"",
    "mtime": "2025-04-07T17:08:47.382Z",
    "size": 268595,
    "path": "../public/_build/assets/wolfram-C3FkfJm5.js"
  },
  "/_build/assets/xml-e3z08dGr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1520-dgZJpegNZOUOlhZI7fQAJf6TDTk\"",
    "mtime": "2025-04-07T17:08:47.382Z",
    "size": 5408,
    "path": "../public/_build/assets/xml-e3z08dGr.js"
  },
  "/_build/assets/xsl-Dd0NUgwM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"569-4TUVJlPiIW3zm+r5DSsszs61Jcg\"",
    "mtime": "2025-04-07T17:08:47.382Z",
    "size": 1385,
    "path": "../public/_build/assets/xsl-Dd0NUgwM.js"
  },
  "/_build/assets/yaml-CVw76BM1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2a29-KfZDVnTHK+jue/V0/82ZqiEGVoQ\"",
    "mtime": "2025-04-07T17:08:47.382Z",
    "size": 10793,
    "path": "../public/_build/assets/yaml-CVw76BM1.js"
  },
  "/_build/assets/zenscript-ulE5f4OK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f85-TUqi2mYX5iIEBlkFqIFPod8ZiyI\"",
    "mtime": "2025-04-07T17:08:47.382Z",
    "size": 3973,
    "path": "../public/_build/assets/zenscript-ulE5f4OK.js"
  },
  "/_build/assets/zig-DFAwn6Qs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1538-yiIURTjp4ZVbURd5pPMT2ZB9cCs\"",
    "mtime": "2025-04-07T17:08:47.382Z",
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

const b = { "app_routes_root_tsx--fetchBetterAuth_createServerFn_handler": { functionName: "fetchBetterAuth_createServerFn_handler", importer: () => import('../build/__root-qUR5Qwru.mjs') }, "app_routes_authed_tsx--checkExistingOrganization_createServerFn_handler": { functionName: "checkExistingOrganization_createServerFn_handler", importer: () => import('../build/_authed-B7p2NkLP.mjs') }, "app_routes_authed_layout_tsx--getTeamspaces_createServerFn_handler": { functionName: "getTeamspaces_createServerFn_handler", importer: () => import('../build/_layout-upKjyzAj.mjs') }, "app_routes_authed_layout_tsx--getChatrooms_createServerFn_handler": { functionName: "getChatrooms_createServerFn_handler", importer: () => import('../build/_layout-upKjyzAj.mjs') }, "app_routes_authed_layout_chat_chatroomId_tsx--fetchChatroomWithMessages_createServerFn_handler": { functionName: "fetchChatroomWithMessages_createServerFn_handler", importer: () => import('../build/_chatroomId-BjOdpLhQ.mjs') } }, $ = eventHandler$1(A), d = b;
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
function zt(e) {
  return jsx(RouterProvider, { router: e.router });
}
const dr = defineHandlerCallback(async ({ request: e, router: n, responseHeaders: r }) => {
  if (typeof Ae.renderToReadableStream == "function") {
    const a = await Ae.renderToReadableStream(jsx(zt, { router: n }), { signal: e.signal });
    isbot(e.headers.get("User-Agent")) && await a.allReady;
    const s = transformReadableStreamWithRouter(n, a);
    return new Response(s, { status: n.state.statusCode, headers: r });
  }
  if (typeof Ae.renderToPipeableStream == "function") {
    const a = new PassThrough();
    try {
      const o = Ae.renderToPipeableStream(jsx(zt, { router: n }), { ...isbot(e.headers.get("User-Agent")) ? { onAllReady() {
        o.pipe(a);
      } } : { onShellReady() {
        o.pipe(a);
      } }, onError: (c, l) => {
        console.error("Error in renderToPipeableStream:", c, l);
      } });
    } catch (o) {
      console.error("Error in renderToPipeableStream:", o);
    }
    const s = transformPipeableStreamWithRouter(n, a);
    return new Response(s, { status: n.state.statusCode, headers: r });
  }
  throw new Error("No renderToReadableStream or renderToPipeableStream found in react-dom/server. Ensure you are using a version of react-dom that supports streaming.");
}), ur = () => ({ routes: { __root__: { filePath: "__root.tsx", children: ["/", "/_authed", "/create-organization", "/forgot-password", "/sign-in", "/sign-up", "/verify-account", "/accept-invitation/$invitationId/$invitationEmail"], preloads: ["/_build/assets/client-DUcPGb69.js", "/_build/assets/client-CMvCw2jp.js"] }, "/": { filePath: "index.tsx" }, "/_authed": { filePath: "_authed.tsx", children: ["/_authed/_layout"] }, "/create-organization": { filePath: "create-organization.tsx" }, "/forgot-password": { filePath: "forgot-password.tsx" }, "/sign-in": { filePath: "sign-in.tsx" }, "/sign-up": { filePath: "sign-up.tsx" }, "/verify-account": { filePath: "verify-account.tsx" }, "/_authed/_layout": { filePath: "_authed/_layout.tsx", parent: "/_authed", children: ["/_authed/_layout/chat/$chatroomId", "/_authed/_layout/project/$projectId", "/_authed/_layout/teamspace/$teamspaceId", "/_authed/_layout/chat/", "/_authed/_layout/members/", "/_authed/_layout/organization-settings/", "/_authed/_layout/organizations/", "/_authed/_layout/team-chat/"] }, "/accept-invitation/$invitationId/$invitationEmail": { filePath: "accept-invitation/$invitationId.$invitationEmail.tsx" }, "/_authed/_layout/chat/$chatroomId": { filePath: "_authed/_layout/chat/$chatroomId.tsx", parent: "/_authed/_layout" }, "/_authed/_layout/project/$projectId": { filePath: "_authed/_layout/project/$projectId.tsx", parent: "/_authed/_layout" }, "/_authed/_layout/teamspace/$teamspaceId": { filePath: "_authed/_layout/teamspace/$teamspaceId.tsx", parent: "/_authed/_layout" }, "/_authed/_layout/chat/": { filePath: "_authed/_layout/chat/index.tsx", parent: "/_authed/_layout" }, "/_authed/_layout/members/": { filePath: "_authed/_layout/members/index.tsx", parent: "/_authed/_layout" }, "/_authed/_layout/organization-settings/": { filePath: "_authed/_layout/organization-settings/index.tsx", parent: "/_authed/_layout" }, "/_authed/_layout/organizations/": { filePath: "_authed/_layout/organizations/index.tsx", parent: "/_authed/_layout" }, "/_authed/_layout/team-chat/": { filePath: "_authed/_layout/team-chat/index.tsx", parent: "/_authed/_layout" } } });
function mr(e) {
  return globalThis.MANIFEST[e];
}
function hr() {
  var _a2;
  const e = ur(), n = e.routes.__root__ = e.routes.__root__ || {};
  n.assets = n.assets || [];
  let r = "";
  const a = mr("client"), s = (_a2 = a.inputs[a.handler]) == null ? void 0 : _a2.output.path;
  return s || T(s, "Could not find client entry in vinxi manifest"), n.assets.push({ tag: "script", attrs: { type: "module", suppressHydrationWarning: true, async: true }, children: `${r}import("${s}")` }), e;
}
function pr() {
  const e = hr();
  return { ...e, routes: Object.fromEntries(Object.entries(e.routes).map(([n, r]) => {
    const { preloads: a, assets: s } = r;
    return [n, { preloads: a, assets: s }];
  })) };
}
async function fr(e, n, r) {
  var a;
  const s = n[0];
  if (isPlainObject$1(s) && s.method) {
    const l = s, p = l.data instanceof FormData ? "formData" : "payload", m = new Headers({ ...p === "payload" ? { "content-type": "application/json", accept: "application/json" } : {}, ...l.headers instanceof Headers ? Object.fromEntries(l.headers.entries()) : l.headers });
    if (l.method === "GET") {
      const h = encode$1({ payload: startSerializer.stringify({ data: l.data, context: l.context }) });
      h && (e.includes("?") ? e += `&${h}` : e += `?${h}`);
    }
    e.includes("?") ? e += "&createServerFn" : e += "?createServerFn", l.response === "raw" && (e += "&raw");
    const f = await r(e, { method: l.method, headers: m, signal: l.signal, ...gr(l) }), d = await Lt(f);
    if ((a = d.headers.get("content-type")) != null && a.includes("application/json")) {
      const h = startSerializer.decode(await d.json());
      if (isRedirect(h) || isNotFound(h) || h instanceof Error) throw h;
      return h;
    }
    return d;
  }
  const o = await Lt(await r(e, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(n) })), c = o.headers.get("content-type");
  return c && c.includes("application/json") ? startSerializer.decode(await o.json()) : o.text();
}
function gr(e) {
  var _a2;
  return e.method === "POST" ? e.data instanceof FormData ? (e.data.set("__TSR_CONTEXT", startSerializer.stringify(e.context)), { body: e.data }) : { body: startSerializer.stringify({ data: (_a2 = e.data) != null ? _a2 : null, context: e.context }) } : {};
}
async function Lt(e) {
  if (!e.ok) {
    const n = e.headers.get("content-type");
    throw n && n.includes("application/json") ? startSerializer.decode(await e.json()) : new Error(await e.text());
  }
  return e;
}
function yr(e) {
  return e.replace(/^\/|\/$/g, "");
}
const Se = (e, n) => {
  const r = `/${yr(n)}/${e}`;
  return Object.assign((...s) => fr(r, s, async (o, c) => {
    c.headers = mergeHeaders$2(getHeaders(), c.headers);
    const l = await $fetch.native(o, c), p = getEvent(), m = mergeHeaders$2(l.headers, p.___ssrRpcResponseHeaders);
    return p.___ssrRpcResponseHeaders = m, l;
  }), { url: r, functionId: e });
}, vr = "/_build/assets/app-Cs9mLtrU.css", br = "/_build/assets/index-BCQOL4kc.css";
function Kt({ error: e }) {
  const n = useRouter();
  return console.error(e), jsxs("div", { className: "min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6", children: [jsx(ErrorComponent, { error: e }), jsxs("div", { className: "flex gap-2 items-center flex-wrap", children: [jsx("button", { onClick: () => {
    n.invalidate();
  }, className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold hover:cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-600", children: "Try Again" }), jsx(Link, { to: "/", className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold hover:cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-600", children: "Home" })] })] });
}
function Xt({ children: e }) {
  return jsxs("div", { className: "space-y-2 p-2 w-screen flex flex-col items-center justify-center min-h-screen", children: [jsx("div", { className: "text-gray-600 dark:text-gray-400", children: e || jsx("p", { children: "The page you are looking for does not exist." }) }), jsxs("p", { className: "flex items-center gap-2 flex-wrap", children: [jsx("button", { onClick: () => window.history.back(), className: "bg-emerald-500 text-white px-2 py-1 rounded uppercase font-black text-sm hover:cursor-pointer hover:bg-emerald-600", children: "Go back" }), jsx(Link, { to: "/", className: "bg-cyan-600 text-white px-2 py-1 rounded uppercase font-black text-sm hover:cursor-pointer hover:bg-cyan-700", children: "Start Over" })] })] });
}
const wr = Se("app_routes_root_tsx--fetchBetterAuth_createServerFn_handler", "/_server"), xr = createServerFn({ method: "GET" }).handler(wr), re = createRootRoute({ head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { title: "IntelliOptima | Chat" }], links: [{ rel: "preconnect", href: "https://fonts.googleapis.com" }, { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" }, { rel: "stylesheet", href: vr }, { rel: "stylesheet", href: br }] }), beforeLoad: async ({}) => {
  const { data: e } = await xr();
  return !e || !e.user || !e.session ? { userId: void 0, user: void 0, session: void 0 } : { userId: e.userID, user: e.user, session: e.session };
}, errorComponent: (e) => jsx(Yt, { children: jsx(Kt, { ...e }) }), notFoundComponent: () => jsx(Xt, {}), component: Nr });
function Nr() {
  return jsx(Yt, { children: jsxs(Provider, { children: [jsx(Toaster, {}), jsx(Outlet, {})] }) });
}
function Yt({ children: e }) {
  return inject(), jsxs("html", { children: [jsx("head", { children: jsx(HeadContent, {}) }), jsxs("body", { children: [e, jsx(Scripts, {})] })] });
}
const Cr = () => import('../build/verify-account-B07A2W2v.mjs'), Ir = z$1.object({ email: z$1.string().catch("") }), Qt = createFileRoute("/verify-account")({ validateSearch: (e) => Ir.parse(e), component: lazyRouteComponent(Cr, "component", () => Qt.ssr) });
function v(...e) {
  return twMerge(clsx(e));
}
const Tr = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "bg-primary text-primary-foreground shadow hover:bg-primary/90", destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90", outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-9 px-4 py-2", sm: "h-8 rounded-md px-3 text-xs", lg: "h-10 rounded-md px-8", icon: "h-9 w-9" } }, defaultVariants: { variant: "default", size: "default" } }), O = y$1.forwardRef(({ className: e, variant: n, size: r, asChild: a = false, ...s }, o) => jsx(a ? Slot : "button", { className: v("cursor-pointer", Tr({ variant: n, size: r, className: e })), ref: o, ...s }));
O.displayName = "Button";
const ee = y$1.forwardRef(({ className: e, type: n, ...r }, a) => jsx("input", { type: n, className: v("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e), ref: a, ...r }));
ee.displayName = "Input";
function ue({ className: e, ...n }) {
  return jsx("div", { "data-slot": "card", className: v("bg-card text-card-foreground rounded-xl border shadow-sm", e), ...n });
}
function ye({ className: e, ...n }) {
  return jsx("div", { "data-slot": "card-header", className: v("flex flex-col gap-1.5 p-6", e), ...n });
}
function de({ className: e, ...n }) {
  return jsx("div", { "data-slot": "card-title", className: v("leading-none font-semibold tracking-tight", e), ...n });
}
function ne({ className: e, ...n }) {
  return jsx("div", { "data-slot": "card-description", className: v("text-muted-foreground text-sm", e), ...n });
}
function ie({ className: e, ...n }) {
  return jsx("div", { "data-slot": "card-content", className: v("p-6 pt-0", e), ...n });
}
function ke({ className: e, ...n }) {
  return jsx("div", { "data-slot": "card-footer", className: v("flex items-center p-6 pt-0", e), ...n });
}
function te({ className: e, ...n }) {
  return jsx(vn.Root, { "data-slot": "label", className: v("text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e), ...n });
}
function Zt(e) {
  return `https://${e}-intellitask-yrr2.encr.app`;
}
class Sr {
  constructor(n, r) {
    __publicField(this, "auth");
    __publicField(this, "chatrooms");
    __publicField(this, "chats");
    __publicField(this, "eventStreamer");
    __publicField(this, "fileManagement");
    __publicField(this, "fuck");
    __publicField(this, "openai");
    const a = new _r(n, r != null ? r : {});
    this.auth = new at.ServiceClient(a), this.chatrooms = new nt.ServiceClient(a), this.chats = new rt.ServiceClient(a), this.eventStreamer = new st.ServiceClient(a), this.fileManagement = new ot.ServiceClient(a), this.fuck = new it.ServiceClient(a), this.openai = new ct.ServiceClient(a);
  }
}
var at;
((e) => {
  class n {
    constructor(a) {
      __publicField(this, "baseClient");
      this.baseClient = a;
    }
    async authRouter(a, s, o, c) {
      return this.baseClient.callAPI(a, `/api/auth/${s.map(encodeURIComponent).join("/")}`, o, c);
    }
    async getIfUserHasActiveOrganization() {
      return await (await this.baseClient.callTypedAPI("GET", "/organizations/has-active")).json();
    }
    async getOrganizationInvitationsByEmail() {
      return await (await this.baseClient.callTypedAPI("GET", "/organizations/invitations")).json();
    }
    async getOrganizationsAttendedByUser() {
      return await (await this.baseClient.callTypedAPI("GET", "/organizations/attended-by-user")).json();
    }
    async handler() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/authorize")).json();
    }
  }
  e.ServiceClient = n;
})(at || (at = {}));
var nt;
((e) => {
  class n {
    constructor(a) {
      __publicField(this, "baseClient");
      this.baseClient = a;
    }
    async addTeamspaceMember(a, s) {
      return await (await this.baseClient.callTypedAPI("POST", `/teamspaces/${encodeURIComponent(a)}/members`, JSON.stringify(s))).json();
    }
    async changeProjectMemberStatus(a, s, o) {
      await this.baseClient.callTypedAPI("PATCH", `/projects/${encodeURIComponent(a)}/kick-member/${encodeURIComponent(s)}`, JSON.stringify(o));
    }
    async changeTeamspaceMemberStatus(a, s, o) {
      await this.baseClient.callTypedAPI("PATCH", `/teamspaces/${encodeURIComponent(a)}/kick-member/${encodeURIComponent(s)}`, JSON.stringify(o));
    }
    async createChatroom(a) {
      return await (await this.baseClient.callTypedAPI("POST", "/chatrooms", JSON.stringify(a))).json();
    }
    async createProject(a) {
      return await (await this.baseClient.callTypedAPI("POST", "/projects", JSON.stringify(a))).json();
    }
    async createTeamspace(a) {
      return await (await this.baseClient.callTypedAPI("POST", "/teamspaces", JSON.stringify(a))).json();
    }
    async deleteChatroom(a) {
      await this.baseClient.callTypedAPI("DELETE", `/chatrooms/${encodeURIComponent(a)}`);
    }
    async deleteProject(a) {
      await this.baseClient.callTypedAPI("DELETE", `/projects/${encodeURIComponent(a)}`);
    }
    async deleteTeamspace(a) {
      await this.baseClient.callTypedAPI("DELETE", `/teamspaces/${encodeURIComponent(a)}`);
    }
    async getChatroom(a) {
      return await (await this.baseClient.callTypedAPI("GET", `/chatrooms/${encodeURIComponent(a)}`)).json();
    }
    async getParticipatingChatroomsWithLatestMessages() {
      return await (await this.baseClient.callTypedAPI("GET", "/chatrooms/participating")).json();
    }
    async getParticipatingTeamspaces() {
      return await (await this.baseClient.callTypedAPI("GET", "/teamspaces/participating")).json();
    }
    async getProject(a) {
      return await (await this.baseClient.callTypedAPI("GET", `/projects/${encodeURIComponent(a)}`)).json();
    }
    async getProjects(a) {
      return await (await this.baseClient.callTypedAPI("GET", `/teamspaces/${encodeURIComponent(a)}/projects`)).json();
    }
    async getTeamspace(a) {
      return await (await this.baseClient.callTypedAPI("GET", `/teamspaces/${encodeURIComponent(a)}`)).json();
    }
    async getTeamspaceMembers(a) {
      return await (await this.baseClient.callTypedAPI("GET", `/teamspaces/${encodeURIComponent(a)}/members`)).json();
    }
    async getTeamspaces() {
      return await (await this.baseClient.callTypedAPI("GET", "/teamspaces")).json();
    }
    async getUserProjects() {
      return await (await this.baseClient.callTypedAPI("GET", "/user/projects")).json();
    }
    async removeTeamspaceMember(a) {
      await this.baseClient.callTypedAPI("DELETE", `/teamspaces/members/${encodeURIComponent(a)}`);
    }
    async updateChatroom(a, s) {
      await this.baseClient.callTypedAPI("PATCH", `/chatrooms/${encodeURIComponent(a)}`, JSON.stringify(s));
    }
    async updateProject(a, s) {
      return await (await this.baseClient.callTypedAPI("PATCH", `/projects/${encodeURIComponent(a)}`, JSON.stringify(s))).json();
    }
    async updateTeamspace(a, s) {
      await this.baseClient.callTypedAPI("PATCH", `/teamspaces/${encodeURIComponent(a)}`, JSON.stringify(s));
    }
    async updateTeamspaceMember(a, s) {
      await this.baseClient.callTypedAPI("PATCH", `/teamspaces/members/${encodeURIComponent(a)}`, JSON.stringify(s));
    }
  }
  e.ServiceClient = n;
})(nt || (nt = {}));
var rt;
((e) => {
  class n {
    constructor(a) {
      __publicField(this, "baseClient");
      this.baseClient = a;
    }
    async chat(a) {
      const s = Ne({ chatroomId: a.chatroomId, userId: a.userId });
      return await this.baseClient.createStreamInOut("/chat", { query: s });
    }
    async createChatMessageReactions(a) {
      return await (await this.baseClient.callTypedAPI("POST", "/chatmessage-reactions", JSON.stringify(a))).json();
    }
    async deleteChatMessageReaction(a) {
      await this.baseClient.callTypedAPI("DELETE", `/chatmessage-reactions/${encodeURIComponent(a)}`);
    }
    async updateChatMessageReaction(a, s) {
      await this.baseClient.callTypedAPI("PATCH", `/chatmessage-reactions/${encodeURIComponent(a)}`, JSON.stringify(s));
    }
  }
  e.ServiceClient = n;
})(rt || (rt = {}));
var st;
((e) => {
  class n {
    constructor(a) {
      __publicField(this, "baseClient");
      this.baseClient = a;
    }
    async eventsStream() {
      return await this.baseClient.createStreamIn("/events");
    }
    async stats(a) {
      await this.baseClient.callTypedAPI("GET", `/stats/${encodeURIComponent(a)}`);
    }
  }
  e.ServiceClient = n;
})(st || (st = {}));
var ot;
((e) => {
  class n {
    constructor(a) {
      __publicField(this, "baseClient");
      this.baseClient = a;
    }
    async getFilesByIds(a) {
      const s = Ne({ fileIds: a.fileIds.map((c) => c) });
      return await (await this.baseClient.callTypedAPI("GET", "/files", void 0, { query: s })).json();
    }
    async uploadFilesWithMetadata(a, s, o) {
      return this.baseClient.callAPI(a, "/upload-with-metadata", s, o);
    }
  }
  e.ServiceClient = n;
})(ot || (ot = {}));
var it;
((e) => {
  class n {
    constructor(a) {
      __publicField(this, "baseClient");
      this.baseClient = a;
    }
    async createAgent(a) {
      return await (await this.baseClient.callTypedAPI("POST", "/agents", JSON.stringify(a))).json();
    }
    async createConfigProfile(a) {
      return await (await this.baseClient.callTypedAPI("POST", "/config-profile", JSON.stringify(a))).json();
    }
    async createInstructionSet(a) {
      return await (await this.baseClient.callTypedAPI("POST", "/instruction-set", JSON.stringify(a))).json();
    }
    async createModel(a) {
      return await (await this.baseClient.callTypedAPI("POST", "/model", JSON.stringify(a))).json();
    }
    async createVoiceProfile(a) {
      return await (await this.baseClient.callTypedAPI("POST", "/voice-profile", JSON.stringify(a))).json();
    }
    async deleteAgent(a) {
      const s = Ne({ id: a.id });
      await this.baseClient.callTypedAPI("DELETE", "/agents:id", void 0, { query: s });
    }
    async deleteConfigProfile(a) {
      await this.baseClient.callTypedAPI("DELETE", `/config-profile/${encodeURIComponent(a)}`);
    }
    async deleteInstructionSet(a) {
      await this.baseClient.callTypedAPI("DELETE", `/instruction-set/${encodeURIComponent(a)}`);
    }
    async deleteModel(a) {
      await this.baseClient.callTypedAPI("DELETE", `/model/${encodeURIComponent(a)}`);
    }
    async deleteVoiceProfile(a) {
      await this.baseClient.callTypedAPI("DELETE", `/voice-profile/${encodeURIComponent(a)}`);
    }
    async getAgent(a) {
      const s = Ne({ id: a.id });
      return await (await this.baseClient.callTypedAPI("GET", "/agents:id", void 0, { query: s })).json();
    }
    async getConfigProfile(a) {
      return await (await this.baseClient.callTypedAPI("GET", `/config-profile/${encodeURIComponent(a)}`)).json();
    }
    async getInstructionSet(a) {
      return await (await this.baseClient.callTypedAPI("GET", `/instruction-set/${encodeURIComponent(a)}`)).json();
    }
    async getModel(a) {
      return await (await this.baseClient.callTypedAPI("GET", `/model/${encodeURIComponent(a)}`)).json();
    }
    async getModels() {
      return await (await this.baseClient.callTypedAPI("GET", "/models")).json();
    }
    async getModelsByProvider(a) {
      return await (await this.baseClient.callTypedAPI("GET", `/models/provider/${encodeURIComponent(a)}`)).json();
    }
    async getPublicAgents() {
      return await (await this.baseClient.callTypedAPI("GET", "/agents")).json();
    }
    async getPublicConfigProfiles() {
      return await (await this.baseClient.callTypedAPI("GET", "/config-profiles")).json();
    }
    async getPublicInstructionSets() {
      return await (await this.baseClient.callTypedAPI("GET", "/instruction-sets")).json();
    }
    async getVoiceProfile(a) {
      return await (await this.baseClient.callTypedAPI("GET", `/voice-profile/${encodeURIComponent(a)}`)).json();
    }
    async getVoiceProfiles() {
      return await (await this.baseClient.callTypedAPI("GET", "/voice-profiles")).json();
    }
    async updateAgent(a) {
      await this.baseClient.callTypedAPI("PATCH", "/agents:id", JSON.stringify(a));
    }
    async updateConfigProfile(a, s) {
      await this.baseClient.callTypedAPI("PATCH", `/config-profile/${encodeURIComponent(a)}`, JSON.stringify(s));
    }
    async updateInstructionSet(a, s) {
      await this.baseClient.callTypedAPI("PATCH", `/instruction-set/${encodeURIComponent(a)}`, JSON.stringify(s));
    }
    async updateModel(a, s) {
      await this.baseClient.callTypedAPI("PATCH", `/model/${encodeURIComponent(a)}`, JSON.stringify(s));
    }
    async updateVoiceProfile(a, s) {
      await this.baseClient.callTypedAPI("PATCH", `/voice-profile/${encodeURIComponent(a)}`, JSON.stringify(s));
    }
  }
  e.ServiceClient = n;
})(it || (it = {}));
var ct;
((e) => {
  class n {
    constructor(a) {
      __publicField(this, "baseClient");
      this.baseClient = a;
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
    async openaiStream(a, s, o) {
      return this.baseClient.callAPI(a, "/stream-chat", s, o);
    }
  }
  e.ServiceClient = n;
})(ct || (ct = {}));
function Re(e) {
  const n = [];
  for (const r in e) {
    const a = Array.isArray(e[r]) ? e[r] : [e[r]];
    for (const s of a) n.push(`${r}=${encodeURIComponent(s)}`);
  }
  return n.join("&");
}
function Ne(e) {
  for (const n in e) e[n] === void 0 && delete e[n];
  return e;
}
function kr(e) {
  return "encore.dev.headers." + btoa(JSON.stringify(e)).replaceAll("=", "").replaceAll("+", "-").replaceAll("/", "_");
}
class xt {
  constructor(n, r) {
    __publicField(this, "ws");
    __publicField(this, "hasUpdateHandlers", []);
    let a = ["encore-ws"];
    r && a.push(kr(r)), this.ws = new WebSocket(n, a), this.on("error", () => {
      this.resolveHasUpdateHandlers();
    }), this.on("close", () => {
      this.resolveHasUpdateHandlers();
    });
  }
  resolveHasUpdateHandlers() {
    const n = this.hasUpdateHandlers;
    this.hasUpdateHandlers = [];
    for (const r of n) r();
  }
  async hasUpdate() {
    await new Promise((n) => {
      this.hasUpdateHandlers.push(() => n(null));
    });
  }
  on(n, r) {
    this.ws.addEventListener(n, r);
  }
  off(n, r) {
    this.ws.removeEventListener(n, r);
  }
  close() {
    this.ws.close();
  }
}
class Pr {
  constructor(n, r) {
    __publicField(this, "socket");
    __publicField(this, "buffer", []);
    this.socket = new xt(n, r), this.socket.on("message", (a) => {
      this.buffer.push(JSON.parse(a.data)), this.socket.resolveHasUpdateHandlers();
    });
  }
  close() {
    this.socket.close();
  }
  async send(n) {
    return this.socket.ws.readyState === WebSocket.CONNECTING && await new Promise((r) => {
      this.socket.ws.addEventListener("open", r, { once: true });
    }), this.socket.ws.send(JSON.stringify(n));
  }
  async next() {
    for await (const n of this) return n;
  }
  async *[Symbol.asyncIterator]() {
    for (; ; ) if (this.buffer.length > 0) yield this.buffer.shift();
    else {
      if (this.socket.ws.readyState === WebSocket.CLOSED) return;
      await this.socket.hasUpdate();
    }
  }
}
class Ar {
  constructor(n, r) {
    __publicField(this, "socket");
    __publicField(this, "buffer", []);
    this.socket = new xt(n, r), this.socket.on("message", (a) => {
      this.buffer.push(JSON.parse(a.data)), this.socket.resolveHasUpdateHandlers();
    });
  }
  close() {
    this.socket.close();
  }
  async next() {
    for await (const n of this) return n;
  }
  async *[Symbol.asyncIterator]() {
    for (; ; ) if (this.buffer.length > 0) yield this.buffer.shift();
    else {
      if (this.socket.ws.readyState === WebSocket.CLOSED) return;
      await this.socket.hasUpdate();
    }
  }
}
class Rr {
  constructor(n, r) {
    __publicField(this, "socket");
    __publicField(this, "responseValue");
    let a;
    this.responseValue = new Promise((s) => a = s), this.socket = new xt(n, r), this.socket.on("message", (s) => {
      a(JSON.parse(s.data));
    });
  }
  async response() {
    return this.responseValue;
  }
  close() {
    this.socket.close();
  }
  async send(n) {
    return this.socket.ws.readyState === WebSocket.CONNECTING && await new Promise((r) => {
      this.socket.ws.addEventListener("open", r, { once: true });
    }), this.socket.ws.send(JSON.stringify(n));
  }
}
const Er = fetch.bind(void 0);
class _r {
  constructor(n, r) {
    __publicField(this, "baseURL");
    __publicField(this, "fetcher");
    __publicField(this, "headers");
    __publicField(this, "requestInit");
    __publicField(this, "authGenerator");
    var _a2;
    if (this.baseURL = n, this.headers = {}, typeof globalThis == "object" && !("window" in globalThis) && (this.headers["User-Agent"] = "intellitask-yrr2-Generated-TS-Client (Encore/v1.46.16)"), this.requestInit = (_a2 = r.requestInit) != null ? _a2 : {}, r.fetcher !== void 0 ? this.fetcher = r.fetcher : this.fetcher = Er, r.auth !== void 0) {
      const a = r.auth;
      typeof a == "function" ? this.authGenerator = a : this.authGenerator = () => a;
    }
  }
  async getAuthData() {
    let n;
    if (this.authGenerator) {
      const r = this.authGenerator();
      r instanceof Promise ? n = await r : n = r;
    }
    if (n) {
      const r = {};
      return r.headers = Ne({ cookie: n.cookie }), r;
    }
  }
  async createStreamInOut(n, r) {
    let { query: a, headers: s } = r != null ? r : {};
    const o = await this.getAuthData();
    o && (o.query && (a = { ...a, ...o.query }), o.headers && (s = { ...s, ...o.headers }));
    const c = a ? "?" + Re(a) : "";
    return new Pr(this.baseURL + n + c, s);
  }
  async createStreamIn(n, r) {
    let { query: a, headers: s } = r != null ? r : {};
    const o = await this.getAuthData();
    o && (o.query && (a = { ...a, ...o.query }), o.headers && (s = { ...s, ...o.headers }));
    const c = a ? "?" + Re(a) : "";
    return new Ar(this.baseURL + n + c, s);
  }
  async createStreamOut(n, r) {
    let { query: a, headers: s } = r != null ? r : {};
    const o = await this.getAuthData();
    o && (o.query && (a = { ...a, ...o.query }), o.headers && (s = { ...s, ...o.headers }));
    const c = a ? "?" + Re(a) : "";
    return new Rr(this.baseURL + n + c, s);
  }
  async callTypedAPI(n, r, a, s) {
    return this.callAPI(n, r, a, { ...s, headers: { "Content-Type": "application/json", ...s == null ? void 0 : s.headers } });
  }
  async callAPI(n, r, a, s) {
    let { query: o, headers: c, ...l } = s != null ? s : {};
    const p = { ...this.requestInit, ...l, method: n, body: a != null ? a : null };
    p.headers = { ...this.headers, ...p.headers, ...c };
    const m = await this.getAuthData();
    m && (m.query && (o = { ...o, ...m.query }), m.headers && (p.headers = { ...p.headers, ...m.headers }));
    const f = o ? "?" + Re(o) : "", d = await this.fetcher(this.baseURL + r + f, p);
    if (!d.ok) {
      let h = { code: "unknown", message: `request failed: status ${d.status}` };
      try {
        const k = await d.text();
        try {
          const u = JSON.parse(k);
          Or(u) ? h = u : h.message += ": " + JSON.stringify(u);
        } catch {
          h.message += ": " + k;
        }
      } catch (k) {
        h.message += ": " + String(k);
      }
      throw new Le(d.status, h);
    }
    return d;
  }
}
function Or(e) {
  return e != null && jr(e.code) && typeof e.message == "string" && (e.details === void 0 || e.details === null || typeof e.details == "object");
}
function jr(e) {
  return e !== void 0 && Object.values(ea).includes(e);
}
class Le extends Error {
  constructor(n, r) {
    super(r.message);
    __publicField(this, "status");
    __publicField(this, "code");
    __publicField(this, "details");
    Object.defineProperty(this, "name", { value: "APIError", enumerable: false, configurable: true }), Object.setPrototypeOf == null ? this.__proto__ = Le.prototype : Object.setPrototypeOf(this, Le.prototype), Error.captureStackTrace !== void 0 && Error.captureStackTrace(this, this.constructor), this.status = n, this.code = r.code, this.details = r.details;
  }
}
var ea = ((e) => (e.OK = "ok", e.Canceled = "canceled", e.Unknown = "unknown", e.InvalidArgument = "invalid_argument", e.DeadlineExceeded = "deadline_exceeded", e.NotFound = "not_found", e.AlreadyExists = "already_exists", e.PermissionDenied = "permission_denied", e.ResourceExhausted = "resource_exhausted", e.FailedPrecondition = "failed_precondition", e.Aborted = "aborted", e.OutOfRange = "out_of_range", e.Unimplemented = "unimplemented", e.Internal = "internal", e.Unavailable = "unavailable", e.DataLoss = "data_loss", e.Unauthenticated = "unauthenticated", e))(ea || {});
const Mr = () => {
  const e = Zt("staging");
  return createAuthClient({ baseURL: e, plugins: [organizationClient(), adminClient(), emailOTPClient()] });
}, { useSession: ta, getSession: $r, signIn: lt, signUp: zr, signOut: si, emailOtp: dt, verifyEmail: oi, organization: ut, useListOrganizations: Lr, useActiveOrganization: Dr } = Mr(), Dt = ({ className: e }) => jsx("div", { className: "flex items-center justify-center", children: jsxs("div", { className: `${e} flex items-center justify-center`, children: [jsx("div", { className: "w-[45%] border-b border-gray-200" }), jsx("div", { className: "h-4.5 w-4.5 rounded-full border border-gray-200 m-1" }), jsx("div", { className: "w-[45%] border-b border-gray-200" })] }) }), Ur = createFileRoute("/sign-up")({ beforeLoad({ context: e }) {
  if (e.user) throw redirect({ to: "/chat" });
}, component: Fr });
function Fr() {
  const [e, n] = useState(""), [r, a] = useState(""), [s, o] = useState(""), [c, l] = useState(false), p = useNavigate();
  return useEffect(() => {
  }, []), jsx("div", { className: "flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted/30 p-4", children: jsxs(ue, { className: "w-full max-w-md", children: [jsxs(ye, { className: "space-y-1 text-center", children: [jsx(de, { className: "text-2xl font-bold", children: "Create an account" }), jsx(ne, { children: "Enter your information to create your account" })] }), jsxs("form", { onSubmit: async (f) => {
    f.preventDefault(), l(true);
    try {
      const { data: d } = await zr.email({ email: r, name: e, password: s });
      if (d) {
        const { data: h } = await dt.sendVerificationOtp({ email: r, type: "email-verification" });
        (h == null ? void 0 : h.success) ? (toast.success("Account created successfully!"), setTimeout(() => {
          p({ to: `/verify-account?email=${r}`, viewTransition: true, reloadDocument: true });
        }, 1e3)) : toast.error("Account not created - try again");
      } else toast.error("Failed to create account. Please try again or check your credentials.");
    } catch {
      toast.error("Failed to create account. Please try again.");
    } finally {
      l(false);
    }
  }, children: [jsxs(ie, { className: "space-y-4", children: [jsx("div", { className: v("w-full gap-2 flex items-center", "justify-between flex-col"), children: jsxs(O, { type: "button", variant: "outline", className: v("w-full gap-2 hover:cursor-pointer"), onClick: async (f) => {
    const { data: d, error: h } = await lt.social({ provider: "google", callbackURL: "http://localhost:3000/create-organization" });
    console.log("GOOGLE SIGNIN", d, h);
  }, children: [jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "0.98em", height: "1em", viewBox: "0 0 256 262", children: [jsx("path", { fill: "#4285F4", d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" }), jsx("path", { fill: "#34A853", d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" }), jsx("path", { fill: "#FBBC05", d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" }), jsx("path", { fill: "#EB4335", d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" })] }), "Sign up with Google"] }) }), jsx(Dt, { className: "w-[90%]" }), jsxs("div", { className: "space-y-2", children: [jsx(te, { htmlFor: "name", children: "Full Name" }), jsx(ee, { id: "name", placeholder: "John Doe", value: e, onChange: (f) => n(f.target.value), required: true })] }), jsx(te, { htmlFor: "email", children: "Email" }), jsx(ee, { id: "email", type: "email", placeholder: "your.email@example.com", value: r, onChange: (f) => a(f.target.value), required: true }), jsxs("div", { className: "space-y-2", children: [jsx(te, { htmlFor: "password", children: "Password" }), jsx(ee, { id: "password", type: "password", minLength: 8, value: s, onChange: (f) => o(f.target.value), required: true }), jsx("p", { className: "text-xs text-muted-foreground", children: "Password must be at least 8 characters long" })] })] }), jsx(Dt, { className: "mb-3 w-[80%]" }), jsxs(ke, { className: "flex flex-col space-y-4", children: [jsx(O, { type: "submit", className: "w-full", disabled: c || e.length === 0 || r.length < 3 || s.length < 7, children: c ? "Creating account..." : "Create account" }), jsxs("div", { className: "text-center text-sm", children: ["Already have an account?", " ", jsx(Link, { to: "/sign-in", viewTransition: true, className: "text-primary hover:underline", children: "Sign in" })] }), jsxs("div", { className: "text-center text-sm", children: ["Go back?", " ", jsx(Link, { to: "/", viewTransition: true, className: "text-primary hover:underline", children: "Home" })] })] })] })] }) });
}
const Gr = createFileRoute("/sign-in")({ beforeLoad({ context: e }) {
  if (e.user) throw redirect({ to: "/chat" });
}, component: Br });
function Br() {
  const [e, n] = useState(""), [r, a] = useState(""), [s, o] = useState(false), c = useNavigate();
  useEffect(() => {
  }, []);
  const l = async () => {
    await lt.social({ provider: "google", callbackURL: "http://localhost:3000/chat" });
  };
  return jsx("div", { className: "flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted/30 p-4", children: jsxs(ue, { className: "w-full max-w-md", children: [jsxs(ye, { className: "space-y-1 text-center", children: [jsx(de, { className: "text-2xl font-bold", children: "Sign in" }), jsx(ne, { children: "Enter your email and password to access your account" })] }), jsxs("form", { onSubmit: async (m) => {
    m.preventDefault(), o(true);
    try {
      const { data: f, error: d } = await lt.email({ email: e, password: r, rememberMe: true });
      f ? (toast.success("Successfully signed in!"), c({ to: "/chat", reloadDocument: true, viewTransition: true })) : d.status === 403 ? (toast.error("You need to verify your account!"), setTimeout(() => {
        c({ to: `/verify-account?email=${e}`, reloadDocument: true, viewTransition: true });
      }, 1e3)) : toast.error("We could not sign you in - check your credentials");
    } catch {
      toast.error("Failed to sign in. Please check your credentials.");
    } finally {
      o(false);
    }
  }, children: [jsxs(ie, { className: "space-y-4", children: [jsxs("div", { className: "space-y-2", children: [jsx(te, { htmlFor: "email", children: "Email" }), jsx(ee, { id: "email", type: "email", placeholder: "your.email@example.com", value: e, onChange: (m) => n(m.target.value.toLowerCase()), required: true })] }), jsxs("div", { className: "space-y-2", children: [jsxs("div", { className: "flex items-center justify-between", children: [jsx(te, { htmlFor: "password", children: "Password" }), jsx(Link, { to: "/forgot-password", viewTransition: true, className: "text-sm text-primary hover:underline", children: "Forgot password?" })] }), jsx(ee, { id: "password", type: "password", value: r, onChange: (m) => a(m.target.value), required: true })] }), jsx("div", { className: v("w-full gap-2 flex items-center", "justify-between flex-col"), children: jsxs(O, { type: "button", variant: "outline", className: v("w-full gap-2 hover:cursor-pointer"), onClick: async (m) => l(), children: [jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "0.98em", height: "1em", viewBox: "0 0 256 262", children: [jsx("path", { fill: "#4285F4", d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" }), jsx("path", { fill: "#34A853", d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" }), jsx("path", { fill: "#FBBC05", d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" }), jsx("path", { fill: "#EB4335", d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" })] }), "Sign in with Google"] }) })] }), jsxs(ke, { className: "flex flex-col space-y-4", children: [jsx(O, { type: "submit", className: "w-full", disabled: s, children: s ? "Signing in..." : "Sign in" }), jsxs("div", { className: "text-center text-sm", children: ["Don't have an account?", " ", jsx(Link, { to: "/sign-up", className: "text-primary hover:underline", children: "Sign up" })] }), jsxs("div", { className: "text-center text-sm", children: ["Go back?", " ", jsx(Link, { to: "/", viewTransition: true, className: "text-primary hover:underline", children: "Home" })] })] })] })] }) });
}
const aa = y$1.forwardRef(({ className: e, containerClassName: n, ...r }, a) => jsx(OTPInput, { ref: a, containerClassName: v("flex items-center gap-2 has-[:disabled]:opacity-50", n), className: v("disabled:cursor-not-allowed", e), ...r }));
aa.displayName = "InputOTP";
const na = y$1.forwardRef(({ className: e, ...n }, r) => jsx("div", { ref: r, className: v("flex items-center", e), ...n }));
na.displayName = "InputOTPGroup";
const ce = y$1.forwardRef(({ index: e, className: n, ...r }, a) => {
  const s = y$1.useContext(OTPInputContext), { char: o, hasFakeCaret: c, isActive: l } = s.slots[e];
  return jsxs("div", { ref: a, className: v("relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", l && "z-10 ring-1 ring-ring", n), ...r, children: [o, c && jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: jsx("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })] });
});
ce.displayName = "InputOTPSlot";
const Hr = y$1.forwardRef(({ ...e }, n) => jsx("div", { ref: n, role: "separator", ...e, children: jsx(Minus, {}) }));
Hr.displayName = "InputOTPSeparator";
const Vr = createFileRoute("/forgot-password")({ component: Wr });
function Wr() {
  const [e, n] = useState(""), [r, a] = useState(""), [s, o] = useState(""), [c, l] = useState(false), [p, m] = useState(false), f = r.length === 6 && /^\d{6}$/.test(r) && e.length > 3 && s.length > 7, d = useNavigate(), h = async (u) => {
    u.preventDefault(), l(true);
    try {
      const { data: b } = await dt.sendVerificationOtp({ email: e, type: "forget-password" });
      (b == null ? void 0 : b.success) && (m(true), toast.success("Password reset token sent! Please check your email."));
    } catch (b) {
      toast.error("Failed to send reset link. Please try again."), console.error("Password reset error:", b);
    } finally {
      l(false);
    }
  }, k = async () => {
    l(true);
    const { data: u, error: b } = await dt.resetPassword({ email: e, otp: r, password: s });
    l(false), (u == null ? void 0 : u.success) ? d({ to: "/sign-in", viewTransition: true }) : (console.error("Error resetting password", b), toast.error("Something went wrong"));
  };
  return jsx("div", { className: "flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted/30 p-4", children: jsxs(ue, { className: "w-full max-w-md", children: [jsxs(ye, { className: "space-y-1 text-center", children: [jsx(de, { className: "text-2xl font-bold", children: "Reset your password" }), jsx(ne, { children: p ? "Check your email for a link to reset your password" : "Enter your email and we'll send you a link to reset your password" })] }), p ? jsxs(ie, { className: "space-y-6 flex flex-col items-center", children: [jsxs("div", { className: "rounded-lg bg-muted p-6 text-center", children: [jsx(Mail, { className: "mx-auto mb-4 h-12 w-12 text-primary" }), jsxs("p", { className: "text-sm text-muted-foreground", children: ["We've sent a password reset token to ", jsx("strong", { children: e }), ". Please check your inbox and get the token to reset your password."] })] }), jsx(ne, { children: "Please enter the 6-character code sent to your email" }), jsx("div", { className: "space-y-2", children: jsx(aa, { maxLength: 6, value: r, onChange: (u) => a(u), children: jsxs(na, { children: [jsx(ce, { index: 0 }), jsx(ce, { index: 1 }), jsx(ce, { index: 2 }), jsx(ce, { index: 3 }), jsx(ce, { index: 4 }), jsx(ce, { index: 5 })] }) }) }), jsxs("div", { className: "space-y-2", children: [jsx(de, { children: "New password" }), jsx(ee, { id: "password", type: "password", minLength: 8, value: s, onChange: (u) => o(u.target.value), required: true }), jsx(ne, { children: "Password must be at least 8 characters long" })] }), jsx(O, { className: "w-full", disabled: !f || c, onClick: () => k(), children: "Reset password" }), jsx(O, { variant: "outline", className: "w-full", onClick: () => {
    m(false), n(""), o("");
  }, children: "Try another email" }), jsx("div", { className: "text-center text-sm", children: jsxs(Link, { to: "/sign-in", className: "inline-flex items-center justify-center text-primary hover:underline", children: [jsx(ArrowLeft, { className: "mr-1 h-4 w-4" }), " Back to sign in"] }) })] }) : jsxs("form", { onSubmit: h, children: [jsx(ie, { className: "space-y-4", children: jsxs("div", { className: "space-y-2", children: [jsx(te, { htmlFor: "email", children: "Email" }), jsxs("div", { className: "relative", children: [jsx(Mail, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), jsx(ee, { id: "email", type: "email", placeholder: "your.email@example.com", value: e, onChange: (u) => n(u.target.value.toLowerCase()), className: "pl-10", required: true })] })] }) }), jsxs(ke, { className: "flex flex-col space-y-4", children: [jsx(O, { type: "submit", className: "w-full", disabled: c, children: c ? "Sending reset link..." : "Send reset link" }), jsx("div", { className: "text-center text-sm", children: jsxs(Link, { to: "/sign-in", className: "inline-flex items-center text-primary hover:underline", viewTransition: true, children: [jsx(ArrowLeft, { className: "mr-1 h-4 w-4" }), " Back to sign in"] }) })] })] })] }) });
}
function qr({ steps: e, currentStep: n, paymentPlan: r, onStepClick: a, className: s, showLabels: o = true }) {
  const [c, l] = useState(false);
  return useEffect(() => {
    l(true);
  }, []), c ? jsx("div", { className: v("w-full", s), children: jsx("div", { className: "relative flex items-center justify-center w-full", children: e.map((p, m) => {
    if (r === "enterprise" && p.id == "3") return;
    const f = p.id === n, d = p.completed || m < e.findIndex((h) => h.id === n);
    return jsxs("div", { className: "relative flex flex-col items-center flex-1", children: [m > 0 && jsx("div", { className: v("absolute top-1/2 w-full h-[2px] -translate-y-1/2 -left-1/2", d ? "bg-primary" : "bg-muted") }), jsx("button", { type: "button", onClick: () => a == null ? void 0 : a(p.id), disabled: !a, className: v("relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all", f && "ring-4 ring-primary/20", d ? "bg-primary border-primary text-primary-foreground" : f ? "border-primary bg-background text-primary" : "border-muted bg-white text-muted-foreground", a && "cursor-pointer hover:opacity-80"), "aria-current": f ? "step" : void 0, children: d ? jsx(Check, { className: "w-5 h-5" }) : jsx("span", { className: "text-sm font-medium", children: m + 1 }) }), o && jsx("div", { className: v("mt-2 text-xs font-medium text-center", f ? "text-primary" : "text-muted-foreground"), children: p.label })] }, p.id);
  }) }) }) : null;
}
const Ke = 768;
function ra() {
  const [e, n] = y$1.useState(void 0);
  return y$1.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${Ke - 1}px)`), a = () => {
      n(window.innerWidth < Ke);
    };
    return r.addEventListener("change", a), n(window.innerWidth < Ke), () => r.removeEventListener("change", a);
  }, []), !!e;
}
const Nt = y$1.forwardRef(({ className: e, ...n }, r) => jsx("textarea", { className: v("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e), ref: r, ...n }));
Nt.displayName = "Textarea";
function Jr({ onImageUpload: e, defaultImage: n, className: r, maxSizeMB: a = 5, aspectRatio: s = "square", width: o = 200, height: c = 200 }) {
  const [l, p] = useState(false), [m, f] = useState(n || null), [d, h] = useState(null), [k, u] = useState(false), b = useRef(null), w = (g) => {
    g.preventDefault(), g.stopPropagation(), g.type === "dragenter" || g.type === "dragover" ? p(true) : g.type === "dragleave" && p(false);
  }, y = (g) => g.size > a * 1024 * 1024 ? (h(`File size exceeds ${a}MB limit`), false) : g.type.startsWith("image/") ? (h(null), true) : (h("Only image files are allowed"), false), I = (g) => {
    if (!y(g)) return;
    u(true);
    const T = new FileReader();
    T.onload = (S) => {
      var _a2;
      f((_a2 = S.target) == null ? void 0 : _a2.result), u(false);
    }, T.readAsDataURL(g), e(g);
  }, M = (g) => {
    g.preventDefault(), g.stopPropagation(), p(false), g.dataTransfer.files && g.dataTransfer.files[0] && I(g.dataTransfer.files[0]);
  }, j = (g) => {
    g.preventDefault(), g.target.files && g.target.files[0] && I(g.target.files[0]);
  }, C = () => {
    var _a2;
    (_a2 = b.current) == null ? void 0 : _a2.click();
  }, E = () => {
    f(null), b.current && (b.current.value = "");
  };
  return jsxs("div", { className: v("flex flex-col items-center", r), children: [jsxs("div", { className: v("relative flex flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50 transition-all hover:cursor-pointer", l ? "border-primary bg-primary/5" : "hover:bg-gray-100", s === "circle" ? "rounded-full" : "rounded-lg", "overflow-hidden"), style: { width: `${o}px`, height: `${c}px` }, onDragEnter: w, onDragLeave: w, onDragOver: w, onDrop: M, onClick: C, children: [k ? jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-background/80", children: jsx("div", { className: "h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" }) }) : m ? jsxs(Fragment, { children: [jsx("img", { src: m || "/placeholder.svg", alt: "Uploaded image preview", style: { width: `${o}px`, height: `${c}px` }, className: "object-cover" }), jsxs(O, { variant: "destructive", size: "icon", className: "absolute right-2 top-2 h-6 w-6 rounded-full", onClick: (g) => {
    g.stopPropagation(), E();
  }, children: [jsx(X, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Remove image" })] })] }) : jsx("div", { className: "flex flex-col items-center justify-center p-4 text-center", children: jsx(Upload, { className: "mb-2 h-8 w-8 text-gray-400" }) }), jsx("input", { ref: b, type: "file", accept: "image/*", onChange: j, className: "hidden" })] }), d && jsx("p", { className: "mt-2 text-sm text-destructive", children: d }), jsx("p", { className: "mb-1 mt-2 text-sm font-normal", children: "Drag & drop an image here or click to browse" }), jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: ["Supported formats: JPG, PNG, GIF, WebP (max ", a, "MB)"] })] });
}
const Ut = ({ name: e, setName: n, description: r, setDescription: a }) => jsxs(ue, { className: "w-full max-w-lg", children: [jsxs(ye, { className: "space-y-1 text-center", children: [jsx(de, { className: "text-2xl font-bold", children: "Create your organization" }), jsx(ne, { children: "Set up a teamspace for your team to collaborate" })] }), jsxs(ie, { className: "space-y-4", children: [jsx("h4", { className: "text-center", children: "Organization Logo" }), jsx(Jr, { onImageUpload: () => {
}, aspectRatio: "circle", width: 100, height: 100 }), jsxs("div", { className: "space-y-2", children: [jsx(te, { htmlFor: "org-name", children: "Organization Name" }), jsx(ee, { id: "org-name", placeholder: "Acme Inc.", value: e, maxLength: 50, onChange: (s) => n(s.target.value), required: true })] }), jsxs("div", { className: "space-y-2", children: [jsx(te, { htmlFor: "org-description", children: "Description (optional)" }), jsx(Nt, { id: "org-description", placeholder: "What does your organization do?", value: r, maxLength: 1e3, onChange: (s) => a(s.target.value), rows: 3 })] })] })] }), Kr = U.Root, Xr = U.Value, sa = y$1.forwardRef(({ className: e, children: n, ...r }, a) => jsxs(U.Trigger, { ref: a, className: v("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e), ...r, children: [n, jsx(U.Icon, { asChild: true, children: jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })] }));
sa.displayName = U.Trigger.displayName;
const oa = y$1.forwardRef(({ className: e, ...n }, r) => jsx(U.ScrollUpButton, { ref: r, className: v("flex cursor-default items-center justify-center py-1", e), ...n, children: jsx(ChevronUp, { className: "h-4 w-4" }) }));
oa.displayName = U.ScrollUpButton.displayName;
const ia = y$1.forwardRef(({ className: e, ...n }, r) => jsx(U.ScrollDownButton, { ref: r, className: v("flex cursor-default items-center justify-center py-1", e), ...n, children: jsx(ChevronDown, { className: "h-4 w-4" }) }));
ia.displayName = U.ScrollDownButton.displayName;
const ca = y$1.forwardRef(({ className: e, children: n, position: r = "popper", ...a }, s) => jsx(U.Portal, { children: jsxs(U.Content, { ref: s, className: v("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e), position: r, ...a, children: [jsx(oa, {}), jsx(U.Viewport, { className: v("p-1", r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: n }), jsx(ia, {})] }) }));
ca.displayName = U.Content.displayName;
const Yr = y$1.forwardRef(({ className: e, ...n }, r) => jsx(U.Label, { ref: r, className: v("px-2 py-1.5 text-sm font-semibold", e), ...n }));
Yr.displayName = U.Label.displayName;
const _e = y$1.forwardRef(({ className: e, children: n, ...r }, a) => jsxs(U.Item, { ref: a, className: v("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e), ...r, children: [jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: jsx(U.ItemIndicator, { children: jsx(Check, { className: "h-4 w-4" }) }) }), jsx(U.ItemText, { children: n })] }));
_e.displayName = U.Item.displayName;
const Qr = y$1.forwardRef(({ className: e, ...n }, r) => jsx(U.Separator, { ref: r, className: v("-mx-1 my-1 h-px bg-muted", e), ...n }));
Qr.displayName = U.Separator.displayName;
const Zr = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", { variants: { variant: { default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80", secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80", destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80", outline: "text-foreground" } }, defaultVariants: { variant: "default" } });
function mt({ className: e, variant: n, ...r }) {
  return jsx("div", { className: v(Zr({ variant: n }), e), ...r });
}
function es({ invitees: e, onAddInvitee: n, onRemoveInvitee: r, isSubmitting: a = false }) {
  const { data: s } = ta(), [o, c] = useState(""), [l, p] = useState("member"), [m, f] = useState(""), d = (u) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u), h = () => {
    if (o.toLowerCase() === (s == null ? void 0 : s.user.email.toLowerCase())) {
      f("Not allowed to use your own email here");
      return;
    }
    if (!o) {
      f("Email is required");
      return;
    }
    if (!d(o)) {
      f("Please enter a valid email address");
      return;
    }
    if (e.some((u) => u.email.toLowerCase() === o.toLowerCase())) {
      f("This email has already been added");
      return;
    }
    f(""), n(o, l), c("");
  }, k = (u) => {
    switch (u) {
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
  return jsxs(ue, { className: "w-full max-w-3xl mx-auto", children: [jsxs(ye, { children: [jsx(de, { className: "text-2xl", children: "Organization Setup" }), jsx(ne, { children: "Invite team members to your organization" }), jsx(ne, { children: "Members can always be invited when Organization is created" })] }), jsx(ie, { className: "space-y-6", children: jsx("div", { className: "space-y-4", children: jsxs("div", { className: "grid gap-2", children: [jsx(te, { htmlFor: "email", children: "Email Address" }), jsxs("div", { className: "flex gap-2", children: [jsxs("div", { className: "flex-1", children: [jsx(ee, { id: "email", type: "email", placeholder: "colleague@example.com", value: o, onChange: (u) => c(u.target.value.toLowerCase()), className: m ? "border-red-500" : "" }), m && jsx("p", { className: "text-sm text-red-500 mt-1", children: m })] }), jsxs(Kr, { value: l, onValueChange: (u) => p(u), children: [jsx(sa, { className: "w-[180px] hover:cursor-pointer", children: jsx(Xr, { placeholder: "Select role" }) }), jsxs(ca, { children: [jsx(_e, { className: "hover:cursor-pointer", value: "owner", children: "Owner" }), jsx(_e, { className: "hover:cursor-pointer", value: "admin", children: "Admin" }), jsx(_e, { className: "hover:cursor-pointer", value: "member", children: "Member" })] })] }), jsxs(O, { className: "hover:cursor-pointer", type: "button", onClick: h, children: [jsx(UserPlus, { className: "h-4 w-4 mr-2" }), "Add"] })] })] }) }) }), jsxs(ke, { className: "flex justify-center border-t p-6", children: [e.length > 0 && jsxs("div", { className: "space-y-3", children: [jsx("h3", { className: "text-sm font-medium", children: "Pending Invitations" }), jsx("div", { className: "border rounded-md divide-y", children: e.map((u) => jsxs("div", { className: "flex items-center justify-between p-3", children: [jsxs("div", { className: "flex items-center gap-3", children: [jsx(Mail, { className: "h-4 w-4 text-muted-foreground" }), jsx("span", { children: u.email }), jsx(mt, { className: k(u.role), children: u.role })] }), jsxs(O, { variant: "ghost", size: "sm", onClick: () => r(u.id), className: "h-8 w-8 p-0 hover:cursor-pointer", children: [jsx(X, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Remove" })] })] }, u.id)) })] }), e.length === 0 && jsx("p", { children: "No members selected for the organization" })] })] });
}
const ts = ({ invitees: e, setInvitees: n }) => {
  const [r, a] = useState(false);
  return jsx("div", { children: jsx(es, { invitees: e, onAddInvitee: (c, l) => {
    n([...e, { email: c, role: l, id: crypto.randomUUID() }]);
  }, onRemoveInvitee: (c) => {
    n(e.filter((l) => l.id !== c));
  }, isSubmitting: r }) });
};
function la({ delayDuration: e = 0, ...n }) {
  return jsx(pe.Provider, { "data-slot": "tooltip-provider", delayDuration: e, ...n });
}
function Oe({ ...e }) {
  return jsx(la, { children: jsx(pe.Root, { "data-slot": "tooltip", ...e }) });
}
function je({ ...e }) {
  return jsx(pe.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function Me({ className: e, sideOffset: n = 4, children: r, ...a }) {
  return jsx(pe.Portal, { children: jsxs(pe.Content, { "data-slot": "tooltip-content", sideOffset: n, className: v("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-sm rounded-md px-3 py-1.5 text-xs", e), ...a, children: [r, jsx(pe.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })] }) });
}
const da = y$1.forwardRef(({ className: e, ...n }, r) => jsx(xe.Root, { className: v("grid gap-2", e), ...n, ref: r }));
da.displayName = xe.Root.displayName;
const ua = y$1.forwardRef(({ className: e, ...n }, r) => jsx(xe.Item, { ref: r, className: v("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", e), ...n, children: jsx(xe.Indicator, { className: "flex items-center justify-center", children: jsx(Circle, { className: "h-3.5 w-3.5 fill-primary" }) }) }));
ua.displayName = xe.Item.displayName;
const as = ({ invitees: e, paymentPlan: n, setPaymentPlan: r, setCurrentStep: a }) => jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [jsxs("div", { className: "mb-8 text-center", children: [jsx("h1", { className: "text-3xl font-bold mb-2", children: "Choose your plan" }), jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Final step! Select a payment plan for your organization. You can invite team members to collaborate on your projects." })] }), jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [{ id: "starter", name: "Starter", description: "Perfect for individuals and small projects", price: "$9", billingPeriod: "per month", features: [{ name: "Up to 3 team members", included: true }, { name: "5 projects", included: true }, { name: "Basic analytics", included: true }, { name: "24-hour support", included: false }, { name: "Advanced security", included: false }] }, { id: "pro", name: "Professional", description: "Ideal for growing teams and businesses", price: "$29", billingPeriod: "per month", features: [{ name: "Up to 10 team members", included: true }, { name: "Unlimited projects", included: true }, { name: "Advanced analytics", included: true }, { name: "24-hour support", included: true }, { name: "Advanced security", included: false }], popular: true }, { id: "enterprise", name: "Enterprise", description: "For large organizations with advanced needs", price: "$99", billingPeriod: "per month", features: [{ name: "Unlimited team members", included: true }, { name: "Unlimited projects", included: true }, { name: "Advanced analytics", included: true }, { name: "24-hour priority support", included: true }, { name: "Advanced security", included: true }] }].map((o) => jsxs(ue, { onClick: () => r(o.id), className: `relative hover:cursor-pointer ${n === o.id ? "border-primary" : ""}`, children: [o.popular && jsx(mt, { className: "absolute -top-2 right-4 bg-primary", children: "Most Popular" }), jsxs(ye, { children: [jsx(de, { children: o.name }), jsx(ne, { children: o.description }), jsxs("div", { className: "mt-2", children: [jsx("span", { className: "text-3xl font-bold", children: o.price }), jsx("span", { className: "text-muted-foreground ml-1", children: o.billingPeriod })] }), jsx(mt, { variant: "outline", className: "mt-2 bg-green-50 text-green-700 border-green-200", children: "14-day free trial included" })] }), jsx(ie, { children: jsx("ul", { className: "space-y-2", children: o.features.map((c, l) => jsxs("li", { className: "flex items-start", children: [c.included ? jsx(Check, { className: "h-5 w-5 text-green-500 mr-2 shrink-0" }) : jsx("div", { className: "h-5 w-5 mr-2" }), jsx("span", { className: c.included ? "" : "text-muted-foreground", children: c.name })] }, l)) }) }), jsx(ke, { children: jsx(da, { value: n || "", onValueChange: r, className: "w-full", children: jsxs("div", { className: "flex items-center space-x-2", children: [jsx(ua, { value: o.id, id: o.id }), jsx(te, { htmlFor: o.id, className: "cursor-pointer w-full", children: jsx(O, { onClick: () => r(o.id), variant: n === o.id ? "default" : "outline", className: "w-full hover:cursor-pointer", children: n === o.id ? "Selected" : "Select Plan" }) })] }) }) })] }, o.id)) }), n !== "enterprise" && jsxs("div", { children: [jsx("div", { className: "bg-muted p-4 rounded-lg mb-8", children: jsxs("div", { className: "flex items-start gap-3", children: [jsx(Info, { className: "h-5 w-5 text-blue-500 shrink-0 mt-0.5" }), jsxs("div", { children: [jsx("h3", { className: "font-medium mb-1", children: "Organization members" }), jsx("p", { className: "text-sm text-muted-foreground", children: "You can invite team members to your organization now or later. Team members will have access based on their assigned roles." }), jsx(la, { children: jsxs(Oe, { children: [jsx(je, { asChild: true, children: jsx(O, { variant: "link", className: "p-0 h-auto text-sm", children: "Learn more about roles and permissions" }) }), jsx(Me, { className: "max-w-sm", children: jsx("p", { children: "Organization members can have different roles like Admin, Member, or Collaborator with varying levels of access to projects and settings. [^1][^2]" }) })] }) })] })] }) }), jsxs("div", { className: "flex flex-col md:flex-row gap-4 justify-between items-center", children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx(Users, { className: "h-5 w-5 text-muted-foreground" }), jsxs("span", { className: "text-sm text-muted-foreground", children: [e ? e == null ? void 0 : e.length : 0, " members invited"] })] }), jsxs("div", { className: "flex gap-4", children: [jsx(O, { onClick: () => a(3), className: "hover:cursor-pointer", variant: "outline", children: "Invite Team Members" }), jsx(O, { className: "hover:cursor-pointer", children: "Continue to Payment" })] })] })] })] }), fe = (e) => {
  const n = Zt("staging");
  return new Sr(n, { auth: { cookie: e }, requestInit: { credentials: "include" } });
}, ns = atom([]), ma = () => {
  const { data: e } = ta(), [n, r] = useAtom(ns);
  return useEffect(() => {
    n.length > 0 || (async () => {
      const { data: s } = await fe().auth.getOrganizationInvitationsByEmail();
      s && r(s);
    })();
  }, [e == null ? void 0 : e.user.id]), { organizationInvitations: n, refetchInvitations: async () => {
    const { data: s } = await fe().auth.getOrganizationInvitationsByEmail();
    s && r(s);
  } };
}, Ct = y$1.forwardRef(({ className: e, children: n, ...r }, a) => jsxs(le.Root, { ref: a, className: v("relative overflow-hidden", e), ...r, children: [jsx(le.Viewport, { className: "h-full w-full rounded-[inherit]", children: n }), jsx(ha, {}), jsx(le.Corner, {})] }));
Ct.displayName = le.Root.displayName;
const ha = y$1.forwardRef(({ className: e, orientation: n = "vertical", ...r }, a) => jsx(le.ScrollAreaScrollbar, { ref: a, orientation: n, className: v("flex touch-none select-none transition-colors", n === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", n === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", e), ...r, children: jsx(le.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" }) }));
ha.displayName = le.ScrollAreaScrollbar.displayName;
const rs = ({ className: e }) => {
  const [n, r] = useState(false), { organizationInvitations: a } = ma(), s = useRef(null);
  useEffect(() => {
    const c = (l) => {
      s.current && !s.current.contains(l.target) && r(false);
    };
    return document.addEventListener("mousedown", c), () => {
      document.removeEventListener("mousedown", c);
    };
  }, []);
  const o = () => {
    r(!n);
  };
  return jsxs("div", { className: `relative ${e}`, ref: s, children: [jsxs("button", { onClick: o, className: "relative p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer", "aria-label": "Notifications", children: [jsx(Bell, { className: "h-6 w-6 text-gray-700 hover:text-gray-900" }), a.length > 0 && jsx("div", { className: "absolute -top-2 -right-1 h-4 w-4 flex items-center justify-center bg-blue-500 rounded-full", children: jsx("span", { className: "text-white text-sm", children: a.length }) })] }), n && jsx(ue, { className: "absolute top-full right-0 mt-2 w-80 shadow-md z-50", children: jsxs(ie, { className: "p-0", children: [jsx("div", { className: "p-3 border-b", children: jsx("h3", { className: "font-medium", children: "Notifications" }) }), a.length > 0 ? jsx(Ct, { className: "max-h-[300px]", children: jsx("div", { className: "divide-y", children: a.map((c, l) => jsx("div", { className: "p-3 hover:bg-muted/40", children: jsxs("div", { className: "flex items-start gap-2", children: [jsx("div", { className: "h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary", children: c.organization.name.charAt(0).toUpperCase() }), jsxs("div", { className: "flex-1", children: [jsxs("p", { className: "text-sm font-medium", children: ["Invitation from ", c.organization.name] }), jsx("p", { className: "text-xs text-muted-foreground", children: "You've been invited to join this organization" }), jsx("div", { className: "mt-2 flex space-x-2", children: jsx(O, { asChild: true, size: "sm", variant: "outline", className: "h-7 px-2 text-xs", children: jsxs(Link, { to: "/accept-invitation/$invitationId/$invitationEmail", params: { invitationId: c.id, invitationEmail: c.email }, children: [jsx(ExternalLink, { className: "h-3 w-3 mr-1" }), " Accept invitation"] }) }) })] })] }) }, l)) }) }) : jsx("div", { className: "p-6 text-center", children: jsx("p", { className: "text-muted-foreground text-sm", children: "No new notifications" }) })] }) })] });
};
function pa() {
  const { data: e, error: n } = Dr(), r = e, { data: a } = Lr(), s = useNavigate();
  useEffect(() => {
    n && c();
  }, [n]);
  const o = async (l, p) => {
    await ut.setActive({ organizationId: l }), await $r({ query: { disableCookieCache: true } }), s(p ? { to: p } : { reloadDocument: true });
  }, c = async () => {
    a && (r == null ? void 0 : r.id) && a.filter((l) => l.id !== r.id).length > 0 ? await o(a.filter((l) => l.id !== r.id)[0].id) : a && a.length > 0 ? await o(a[0].id) : await o("");
  };
  return { changeActiveOrganization: o, activeOrganization: r, changeActiveOrganizationIfAny: c };
}
function ss(e) {
  const { changeActiveOrganization: n, changeActiveOrganizationIfAny: r } = pa(), { refetchInvitations: a } = ma(), [s, o] = useState(false), c = useRef(void 0);
  useEffect(() => {
    if (!(s || !e || c.current)) return (async () => await l())(), () => {
      c.current && (console.log("CLOSING DOWN"), c.current.close());
    };
  }, [e]);
  const l = async () => {
    if (!s) {
      c.current && c.current.close(), o(true);
      try {
        c.current = await fe().eventStreamer.eventsStream(), c.current.socket.on("close", () => {
          console.log("Socket closed, will attempt to reconnect if needed");
        }), c.current.socket.on("open", async () => {
          console.log("EVENTSSTREAM ON OPEN HAPPENED!");
        }), c.current.socket.on("message", async (d) => {
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
        await m(d);
        return;
      }
      case "ORGANIZATION": {
        await f(d);
        return;
      }
      default:
        throw new Error(`Unknown notification type: ${d.notification.notificationType}`);
    }
  }, m = async (d) => {
    const h = d.notification;
    switch (h.notificationHandling) {
      case "ACCEPTED":
        await n(d.organizationId), toast.info(`${h.memberName} accepted your invitation to join ${h.organizationName}.`);
        return;
      case "CANCELED":
        await a(), toast.info(`Your invitation to join ${h.organizationName} has been canceled.`);
        return;
      case "RECEIVED":
        await a(), toast.info(`You have been invited to join ${h.organizationName} by ${h.memberName}.`);
        return;
      case "REJECTED":
        await a(), toast.info(`${h.memberName} rejected to join ${h.organizationName}.`);
        return;
      default:
        throw new Error(`Unknown notification type: ${d.notification.notificationType}`);
    }
  }, f = async (d) => {
    switch (d.notification.notificationHandling) {
      case "KICKED":
        const h = d.notification;
        e === h.kickedMemberUserId && (toast.info(`You have been kicked from ${h.organizationName}.`), setTimeout(() => r(), 1e3));
        return;
      default:
        throw new Error(`Unknown notification type: ${d.notification.notificationType}`);
    }
  };
}
const fa = createFileRoute("/create-organization")({ head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { title: "IntelliOptima | Create Organization" }, { about: "" }] }), beforeLoad({ context: e }) {
  if (!e.user) throw redirect({ to: "/sign-in" });
}, component: os }), Ft = [{ id: 1, label: "Organisation Info" }, { id: 2, label: "Details" }, { id: 3, label: "Invite" }];
function os() {
  const e = ra(), { userId: n } = fa.useRouteContext(), [r, a] = useState(1), [s, o] = useState([true, false, false]), [c, l] = useState(""), [p, m] = useState(""), [f, d] = useState(""), [h, k] = useState([]), [u, b] = useState(), [w, y] = useState(false), I = s.filter((P) => P).length, j = (u === "enterprise" && I === 2 || I >= 2) && c.length > 1 && c.length <= 50 && p.length > 2 && p.length <= 100 && u;
  ss(n);
  const { changeActiveOrganization: C } = pa(), E = async () => {
    y(true);
    try {
      const { data: P } = await ut.create({ name: c, slug: c.toLowerCase().replace(/\s+/g, "-"), metadata: { description: p }, userId: n });
      (P == null ? void 0 : P.id) ? (await Promise.all(h.map(async (H) => {
        await ut.inviteMember({ email: H.email, role: H.role, organizationId: P.id });
      })), toast.success("Organization created successfully!"), setTimeout(async () => await C(P.id, "/chat"), 1500)) : toast.error("Failed to create organization. Please try again");
    } catch (P) {
      toast.error("Failed to create organization. Please try again."), console.error("Organization creation error:", P);
    } finally {
      y(false);
    }
  };
  useEffect(() => {
    o((P) => (P[r - 1] = true, [...P]));
  }, [r]);
  const g = () => {
    u === "enterprise" && r === 2 || r < Ft.length && a(r + 1);
  }, T = () => {
    r > 1 && a(r - 1);
  };
  return jsxs("div", { className: "flex flex-col min-h-screen items-center bg-gradient-to-b from-background to-muted/30 p-4", children: [jsx("div", { className: "absolute top-4 right-4", children: jsx(rs, {}) }), jsxs(Fragment, { children: [jsx("div", { className: "w-2/3 mt-10", children: jsx(qr, { currentStep: r, paymentPlan: u, steps: Ft, onStepClick: (P) => a(P), showLabels: !e }) }), jsx("div", { className: "flex items-center justify-center w-full mt-10", children: ((P) => {
    switch (P) {
      case 1:
        return jsx(Ut, { name: c, setName: l, description: p, setDescription: m });
      case 2:
        return jsx(as, { invitees: h, paymentPlan: u, setPaymentPlan: b, setCurrentStep: a });
      case 3:
        return jsx(ts, { invitees: h, setInvitees: k });
      default:
        return jsx(Ut, { name: c, setName: l, description: p, setDescription: m });
    }
  })(r) }), jsxs("div", { className: "w-1/5 flex justify-around gap-x-4 my-2", children: [jsx(O, { className: "w-full hover:cursor-pointer", disabled: r === 1, onClick: T, children: "\u2190 Go Back" }), jsx(O, { onClick: g, className: "w-full hover:cursor-pointer", disabled: w || u === "enterprise" && r === 2 || r === 3, children: w ? "Loading..." : "Next \u2192" })] }), jsx(O, { type: "button", disabled: !j, onClick: () => E(), children: "Create your organization" })] })] });
}
const is = Se("app_routes_authed_tsx--checkExistingOrganization_createServerFn_handler", "/_server"), cs = createServerFn().handler(is), ls = createFileRoute("/_authed")({ async beforeLoad({ context: e, location: n }) {
  var _a2, _b, _c;
  if (!((_a2 = e.user) == null ? void 0 : _a2.id)) throw redirect({ to: "/sign-in" });
  if (await cs(), (n.href === "/organization-settings" || n.href === "/members") && ((_b = e == null ? void 0 : e.session) == null ? void 0 : _b.activeOrganizationMemberRole) !== "owner" && ((_c = e == null ? void 0 : e.session) == null ? void 0 : _c.activeOrganizationMemberRole) !== "admin") throw redirect({ to: "/chat" });
} }), ds = () => import('../build/index-BOLL5CUm.mjs'), ga = createFileRoute("/")({ component: lazyRouteComponent(ds, "component", () => ga.ssr) }), us = () => import('../build/_layout-CEOjo1CZ.mjs'), ms = Se("app_routes_authed_layout_tsx--getTeamspaces_createServerFn_handler", "/_server"), ii = createServerFn().handler(ms), hs = Se("app_routes_authed_layout_tsx--getChatrooms_createServerFn_handler", "/_server"), ci = createServerFn().handler(hs), ya = createFileRoute("/_authed/_layout")({ component: lazyRouteComponent(us, "component", () => ya.ssr) }), ps = () => import('../build/_invitationId._invitationEmail-CPTbk5Ca.mjs'), va = createFileRoute("/accept-invitation/$invitationId/$invitationEmail")({ params: z$1.object({ invitationId: z$1.string().min(10), invitationEmail: z$1.string().email() }), component: lazyRouteComponent(ps, "component", () => va.ssr) }), fs = () => import('../build/index-B_4yKcTu.mjs'), ba = createFileRoute("/_authed/_layout/team-chat/")({ component: lazyRouteComponent(fs, "component", () => ba.ssr) }), gs = () => import('../build/index-Dg-Zm9r1.mjs'), wa = createFileRoute("/_authed/_layout/organizations/")({ component: lazyRouteComponent(gs, "component", () => wa.ssr) }), ys = () => import('../build/index-FnUY3CiM.mjs'), xa = createFileRoute("/_authed/_layout/organization-settings/")({ component: lazyRouteComponent(ys, "component", () => xa.ssr) }), vs = () => import('../build/index-DbXztsa2.mjs'), Na = createFileRoute("/_authed/_layout/members/")({ component: lazyRouteComponent(vs, "component", () => Na.ssr) }), Ca = memo(({ blur: e = 0, inactiveZone: n = 0.7, proximity: r = 0, spread: a = 20, variant: s = "default", glow: o = false, className: c, movementDuration: l = 2, borderWidth: p = 1, disabled: m = true }) => {
  const f = useRef(null), d = useRef({ x: 0, y: 0 }), h = useRef(0), k = useCallback((u) => {
    f.current && (h.current && cancelAnimationFrame(h.current), h.current = requestAnimationFrame(() => {
      var _a2, _b;
      const b = f.current;
      if (!b) return;
      const { left: w, top: y, width: I, height: M } = b.getBoundingClientRect(), j = (_a2 = u == null ? void 0 : u.x) != null ? _a2 : d.current.x, C = (_b = u == null ? void 0 : u.y) != null ? _b : d.current.y;
      u && (d.current = { x: j, y: C });
      const E = [w + I * 0.5, y + M * 0.5], g = Math.hypot(j - E[0], C - E[1]), T = 0.5 * Math.min(I, M) * n;
      if (g < T) {
        b.style.setProperty("--active", "0");
        return;
      }
      const S = j > w - r && j < w + I + r && C > y - r && C < y + M + r;
      if (b.style.setProperty("--active", S ? "1" : "0"), !S) return;
      const P = parseFloat(b.style.getPropertyValue("--start")) || 0, _ = (180 * Math.atan2(C - E[1], j - E[0]) / Math.PI + 90 - P + 180) % 360 - 180, $ = P + _;
      animate(P, $, { duration: l, ease: [0.16, 1, 0.3, 1], onUpdate: (W) => {
        b.style.setProperty("--start", String(W));
      } });
    }));
  }, [n, r, l]);
  return useEffect(() => {
    if (m) return;
    const u = () => k(), b = (w) => k(w);
    return window.addEventListener("scroll", u, { passive: true }), document.body.addEventListener("pointermove", b, { passive: true }), () => {
      h.current && cancelAnimationFrame(h.current), window.removeEventListener("scroll", u), document.body.removeEventListener("pointermove", b);
    };
  }, [k, m]), jsxs(Fragment, { children: [jsx("div", { className: v("pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity", o && "opacity-100", s === "white" && "border-white", m && "!block") }), jsx("div", { ref: f, style: { "--blur": `${e}px`, "--spread": a, "--start": "0", "--active": "0", "--glowingeffect-border-width": `${p}px`, "--repeating-conic-gradient-times": "5", "--gradient": s === "white" ? `repeating-conic-gradient(
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
                )` }, className: v("pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity", o && "opacity-100", e > 0 && "blur-[var(--blur)] ", c, m && "!hidden"), children: jsx("div", { className: v("glow", "rounded-[inherit]", 'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]', "after:[border:var(--glowingeffect-border-width)_solid_transparent]", "after:[background:var(--gradient)] after:[background-attachment:fixed]", "after:opacity-[var(--active)] after:transition-opacity after:duration-300", "after:[mask-clip:padding-box,border-box]", "after:[mask-composite:intersect]", "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]") }) })] });
});
Ca.displayName = "GlowingEffect";
const Gt = [{ id: "openai", name: "OpenAI", expanded: true, agents: [{ id: "gpt-4o", name: "GPT-4o", description: "Most capable agent" }, { id: "gpt-4-turbo", name: "GPT-4 Turbo", description: "Fast and powerful" }, { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo", description: "Balanced performance" }] }, { id: "anthropic", name: "Anthropic", agents: [{ id: "claude-3-opus", name: "Claude 3 Opus", description: "Most powerful Claude agent" }, { id: "claude-3-sonnet", name: "Claude 3 Sonnet", description: "Balanced performance" }, { id: "claude-3-haiku", name: "Claude 3 Haiku", description: "Fast responses" }] }, { id: "meta", name: "Meta", agents: [{ id: "llama-3-70b", name: "Llama 3 70B", description: "Largest Llama agent" }, { id: "llama-3-8b", name: "Llama 3 8B", description: "Efficient performance" }] }];
function bs({ selectedAgents: e, onSelectAgents: n, isOpen: r, onClose: a, multiSelectMode: s = false, maxSelections: o = 4, searchTerm: c = "", onAgentSelect: l, keyboardNavigation: p = false }) {
  const [m, f] = useState(Gt), [d, h] = useState("provider"), k = useRef(null), [u, b] = useState(0), [w, y] = useState([]);
  useRef(false);
  const [I, M] = useState(c);
  useEffect(() => {
    const g = (T) => {
      k.current && !k.current.contains(T.target) && a();
    };
    return r && document.addEventListener("mousedown", g), () => {
      document.removeEventListener("mousedown", g);
    };
  }, [r, a]), useEffect(() => {
    if (!r || !p) return;
    const g = (T) => {
      if (T.key === "ArrowDown") T.preventDefault(), b((S) => S < w.length - 1 ? S + 1 : S);
      else if (T.key === "ArrowUp") T.preventDefault(), b((S) => S > 0 ? S - 1 : 0);
      else if (T.key === "Enter" && u >= 0 && u < w.length) {
        T.preventDefault(), T.stopPropagation();
        const S = w[u];
        l ? l(S) : C(S);
      }
    };
    return document.addEventListener("keydown", g, { capture: true }), () => {
      document.removeEventListener("keydown", g, { capture: true });
    };
  }, [r, p, u, w, l]), useEffect(() => {
    M(c);
  }, [c]), useEffect(() => {
    if (!r) return;
    const g = c.toLowerCase(), T = Gt.map((P) => {
      const H = P.name.toLowerCase().includes(g), _ = P.agents.filter((W) => W.name.toLowerCase().includes(g)), $ = g ? H || _.length > 0 : P.expanded;
      return { ...P, expanded: $, agents: _ };
    }).filter((P) => P.name.toLowerCase().includes(g) || P.agents.length > 0);
    f(T);
    const S = [];
    T.forEach((P) => {
      P.expanded && S.push(...P.agents);
    }), y(S), S.length > 0 && b(0), g && S.length === 0 && a();
  }, [c, r, a]);
  const j = (g) => {
    f(m.map((T) => T.id === g ? { ...T, expanded: !T.expanded } : T));
  }, C = (g) => {
    const T = e.some((S) => S.id === g.id);
    s ? T ? n(e.filter((S) => S.id !== g.id)) : e.length < o && n([...e, g]) : (n([g]), l || a());
  }, E = (g) => {
    const T = m.find((S) => S.id === g);
    return T ? e.filter((S) => T.agents.some((P) => P.id === S.id)).length : 0;
  };
  return r ? jsxs("div", { ref: k, className: "w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50 h-[350px] flex flex-col", children: [jsxs("div", { className: "flex border-b border-gray-200 flex-shrink-0", children: [jsx("button", { className: v("flex-1 py-2 text-sm font-medium", d === "provider" ? "border-b-2 border-black" : "text-gray-500"), onClick: () => h("provider"), children: "AI Agents" }), jsx("button", { className: v("flex-1 py-2 text-sm font-medium", d === "agent" ? "border-b-2 border-black" : "text-gray-500"), onClick: () => h("agent"), children: "Agents" })] }), c && jsxs("div", { className: "px-3 py-2 text-xs text-gray-500 border-b border-gray-200", children: ['Searching for: "', c, '"'] }), jsxs("div", { className: "overflow-y-auto flex-1", children: [m.length === 0 && jsx("div", { className: "p-3 text-sm text-gray-500", children: "No agents found" }), m.map((g) => {
    const T = E(g.id);
    return jsxs("div", { className: "text-sm", children: [jsxs("div", { className: "flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer", onClick: () => j(g.id), children: [T > 0 && jsx("div", { className: "flex items-center justify-center h-5 w-5 rounded-full bg-red-100 text-red-600 text-xs font-medium mr-1", children: T }), g.expanded ? jsx(ChevronDown, { className: "h-4 w-4 text-gray-500 mr-1" }) : jsx(ChevronRight, { className: "h-4 w-4 text-gray-500 mr-1" }), jsx(Folder, { className: "h-4 w-4 text-gray-500 mr-2" }), jsx("span", { children: g.name })] }), g.expanded && g.agents.map((S) => {
      const P = e.some(($) => $.id === S.id), _ = w.findIndex(($) => $.id === S.id) === u;
      return jsxs("div", { className: v("flex items-center pl-10 pr-3 py-2 cursor-pointer", _ ? "bg-gray-200" : "hover:bg-gray-100"), onClick: () => {
        l ? l(S) : C(S);
      }, children: [jsx(FileText, { className: "h-4 w-4 text-gray-500 mr-2" }), jsx("span", { className: "flex-1", children: S.name }), P && jsx(Check, { className: "h-4 w-4 text-red-500" })] }, S.id);
    })] }, g.id);
  })] })] }) : null;
}
function ws({ ...e }) {
  return jsx(V.Root, { "data-slot": "dropdown-menu", ...e });
}
function li({ ...e }) {
  return jsx(V.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function xs({ ...e }) {
  return jsx(V.Trigger, { "data-slot": "dropdown-menu-trigger", ...e });
}
function Ns({ className: e, sideOffset: n = 4, ...r }) {
  return jsx(V.Portal, { children: jsx(V.Content, { "data-slot": "dropdown-menu-content", sideOffset: n, className: v("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md", e), ...r }) });
}
function di({ ...e }) {
  return jsx(V.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function ui({ className: e, inset: n, variant: r = "default", ...a }) {
  return jsx(V.Item, { "data-slot": "dropdown-menu-item", "data-inset": n, "data-variant": r, className: v("focus:bg-accent hover:cursor-pointer focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), ...a });
}
function Cs({ className: e, children: n, checked: r, ...a }) {
  return jsxs(V.CheckboxItem, { "data-slot": "dropdown-menu-checkbox-item", className: v("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), checked: r, ...a, children: [jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: jsx(V.ItemIndicator, { children: jsx(CheckIcon, { className: "size-4" }) }) }), n] });
}
function mi({ className: e, inset: n, ...r }) {
  return jsx(V.Label, { "data-slot": "dropdown-menu-label", "data-inset": n, className: v("px-2 py-1.5 text-sm font-semibold data-[inset]:pl-8", e), ...r });
}
function hi({ className: e, ...n }) {
  return jsx(V.Separator, { "data-slot": "dropdown-menu-separator", className: v("bg-border -mx-1 my-1 h-px", e), ...n });
}
function pi({ ...e }) {
  return jsx(V.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function fi({ className: e, inset: n, children: r, ...a }) {
  return jsxs(V.SubTrigger, { "data-slot": "dropdown-menu-sub-trigger", "data-inset": n, className: v("focus:bg-accent hover:cursor-pointer focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8", e), ...a, children: [r, jsx(ChevronRightIcon, { className: "ml-auto size-4" })] });
}
function gi({ className: e, ...n }) {
  return jsx(V.SubContent, { "data-slot": "dropdown-menu-sub-content", className: v("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg", e), ...n });
}
function Is(e, n = 1) {
  const r = useRef(null);
  return useLayoutEffect(() => {
    const a = r.current;
    if (a) {
      const s = window.getComputedStyle(a), o = Number.parseInt(s.lineHeight, 10) || 20, c = Number.parseInt(s.paddingTop, 10) + Number.parseInt(s.paddingBottom, 10), l = o * n + c;
      a.style.height = "0px";
      const p = Math.max(a.scrollHeight, l);
      a.style.height = `${p + 2}px`;
    }
  }, [r, e, n]), r;
}
const { Children: Ts, isValidElement: Ss, cloneElement: ks } = y__default, Ee = (e) => e.includes("gpt") ? jsx(BrainCircuit, { className: "h-5 w-5" }) : e.includes("claude") ? jsx(Bot, { className: "h-5 w-5" }) : e.includes("llama") ? jsx(Star, { className: "h-5 w-5" }) : jsx(BrainCircuit, { className: "h-5 w-5" }), Bt = { id: "gpt-4o", name: "GPT-4o", description: "Most capable model" }, It = createContext$1({}), Ht = ["What's the first rule of Fight Club?", "Who is Tyler Durden?", "Where is Andrew Laeddis Hiding?", "Write a Javascript method to reverse a string", "How to assemble your own PC?", "Explain quantum computing in simple terms", "Write a short story about a robot that falls in love", "What are the ethical implications of AI?", "Design a database schema for a social media app", "Explain how blockchain works to a 5-year-old", "Create a regex for validating email addresses", "What's the difference between REST and GraphQL?", "Suggest five names for my tech startup", "How would you implement a binary search tree?", "Explain the concept of recursion with an example", "Write a haiku about coding at midnight", "What's the significance of P vs NP problem?", "How does natural language processing work?", "Explain the CAP theorem in distributed systems", "Design a simple chatbot algorithm", "What are the pros and cons of microservices?", "How would you optimize a slow-loading website?", "Explain neural networks without technical jargon", "What is technical debt and how do you manage it?", "Write a function to detect a palindrome"], Ps = [{ id: "openai", name: "OpenAI", expanded: true, agents: [{ id: "gpt-4o", name: "GPT-4o", description: "Most capable agent" }, { id: "gpt-4-turbo", name: "GPT-4 Turbo", description: "Fast and powerful" }, { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo", description: "Balanced performance" }] }, { id: "anthropic", name: "Anthropic", agents: [{ id: "claude-3-opus", name: "Claude 3 Opus", description: "Most powerful Claude agent" }, { id: "claude-3-sonnet", name: "Claude 3 Sonnet", description: "Balanced performance" }, { id: "claude-3-haiku", name: "Claude 3 Haiku", description: "Fast responses" }] }, { id: "meta", name: "Meta", agents: [{ id: "llama-3-70b", name: "Llama 3 70B", description: "Largest Llama agent" }, { id: "llama-3-8b", name: "Llama 3 8B", description: "Efficient performance" }] }];
function Ge({ children: e, className: n, variant: r = "default", value: a, onChange: s, onSubmit: o, loading: c, onStop: l, rows: p = 1, hasMessages: m = false, onAISelect: f, onMentionSelectionChange: d }) {
  const [h, k] = useState(0), u = useRef(null), b = ra(), w = useRef(null), y = useRef(null), [I, M] = useState(/* @__PURE__ */ new Set()), [j, C] = useState(false), [E, g] = useState([Bt]), [T, S] = useState(false), [P, H] = useState(false), [_, $] = useState(null), W = useRef([]), q = useRef(-1), [ve, Ve] = useState(a || ""), [Po, Oa] = useState(0), [St, kt] = useState({ top: 0, left: 10 }), [Ao, ja] = useState([]), Ma = (N) => {
    if (_ !== null && T) {
      if (N.key === "Enter") {
        N.preventDefault();
        return;
      } else if (N.key === "Escape") {
        N.preventDefault(), S(false), $(null), q.current = -1, d && d(false);
        return;
      }
    }
    if (N.key === "Enter" && !N.shiftKey && o) {
      if (typeof ve != "string" || ve.trim().length === 0) return;
      if (_ !== null) {
        N.preventDefault();
        return;
      }
      N.preventDefault(), o();
    }
  };
  useEffect(() => {
    if (T && w.current) {
      const N = w.current.getBoundingClientRect();
      kt({ top: N.top - 370, left: N.left + 10 });
      const A = () => {
        if (w.current) {
          const R = w.current.getBoundingClientRect();
          kt({ top: R.top - 370, left: R.left + 10 });
        }
      };
      return window.addEventListener("resize", A), () => window.removeEventListener("resize", A);
    }
  }, [T]);
  const We = () => {
    u.current = setInterval(() => {
      k((N) => (N + 1) % Ht.length);
    }, 4e3);
  }, Pt = () => {
    document.visibilityState !== "visible" && u.current ? (clearInterval(u.current), u.current = null) : document.visibilityState === "visible" && !m && We();
  };
  useEffect(() => (m || We(), document.addEventListener("visibilitychange", Pt), () => {
    u.current && clearInterval(u.current), document.removeEventListener("visibilitychange", Pt);
  }), [m]), useEffect(() => {
    m && u.current ? (clearInterval(u.current), u.current = null) : !m && !u.current && We();
  }, [m]), useEffect(() => {
    a !== void 0 && Ve(a);
  }, [a]);
  const At = [{ icon: jsx(Globe, { className: "h-4 w-4" }), label: "Web-Search", description: "Quick web look-up" }, { icon: jsx(Telescope, { className: "h-4 w-4" }), label: "Deep-Research", description: "Deep web research, on specific input" }, { icon: jsx(BrainCircuit, { className: "h-4 w-4" }), label: "Reasoning", description: "Think deeply, before answering" }], Rt = (N) => {
    M((A) => {
      const R = new Set(A);
      return R.has(N) ? R.delete(N) : R.add(N), R;
    });
  }, $a = (N) => {
    H(N), S(true);
  }, Et = () => {
    P ? (H(false), g([Bt]), S(false)) : $a(true);
  };
  useEffect(() => {
    if (T && _ !== null) {
      const N = [];
      Ps.forEach((A) => {
        const R = A.agents.filter((z) => _ ? z.name.toLowerCase().includes(_.toLowerCase()) : true);
        N.push(...R.map((z) => ({ id: z.id, name: z.name, description: z.description })));
      }), ja(N), Oa(N.length > 0 ? 0 : -1);
    }
  }, [_, T]);
  const _t = (N) => {
    const A = [];
    let R = 0;
    for (; R < N.length; ) {
      const z = N.indexOf("@", R);
      if (z === -1) break;
      if (!(z === 0 || N[z - 1] === " ")) {
        R = z + 1;
        continue;
      }
      let Q = N.indexOf(" ", z + 1);
      Q === -1 && (Q = N.length), A.push({ start: z, end: Q, consumed: false }), R = Q;
    }
    return A;
  }, za = (N) => {
    const A = N.target.value;
    Ve(A), s && s(N);
    const R = _t(A);
    if (W.current = R, R.length === 0) {
      $(null), T && !P && S(false), q.current = -1, d && d(false);
      return;
    }
    const z = R[R.length - 1];
    if (z.end === A.length) {
      const Q = A.slice(z.start + 1, z.end);
      $(Q), q.current = R.length - 1, T || (S(true), H(false)), d && d(true);
    } else _ !== null && ($(null), T && !P && S(false), q.current = -1, d && d(false));
  }, La = (N) => {
    var _a2;
    const A = { id: N.id, name: N.name, description: N.description, icon: Ee(N.id) };
    if (_ !== null && q.current >= 0) {
      const R = W.current[q.current];
      if (R && y.current) {
        const z = ve.substring(0, R.start), Y = ve.substring(R.end), Q = z + `@${A.name}` + (Y.startsWith(" ") ? "" : " ") + Y;
        if (Ve(Q), s && y.current) {
          const be = (_a2 = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")) == null ? void 0 : _a2.set;
          if (be) {
            be.call(y.current, Q);
            const Fa = new Event("input", { bubbles: true });
            y.current.dispatchEvent(Fa);
          }
        }
        g([A]), S(false), $(null), q.current = -1, d && d(false);
        const Ua = _t(Q);
        W.current = Ua, setTimeout(() => {
          if (y.current) {
            y.current.focus();
            const be = z.length + `@${A.name} `.length;
            y.current.selectionStart = be, y.current.selectionEnd = be;
          }
        }, 0);
      }
    }
  }, Ot = { value: ve, onChange: za, onSubmit: o, loading: c, onStop: l, variant: r, rows: p, placeholder: m ? "Type a message..." : Ht[h], hasMessages: m, onAISelect: f, onMentionSelectionChange: d }, Da = () => {
    const N = I.size;
    return b ? jsx("div", { className: "flex items-center justify-center py-3 px-2", children: jsxs(ws, { open: j, onOpenChange: C, children: [jsx(xs, { asChild: true, children: jsxs(O, { variant: "ghost", className: "h-8 px-4 rounded-full flex items-center gap-2 bg-gray-100 text-gray-600 hover:bg-gray-200", children: [jsx(Settings, { className: "h-4 w-4" }), jsxs("span", { className: "text-xs font-medium", children: ["Tools ", N > 0 && `(${N})`] })] }) }), jsx(Ns, { align: "end", className: "w-56", onCloseAutoFocus: (A) => A.preventDefault(), children: At.map((A, R) => jsx(Cs, { checked: I.has(R), onCheckedChange: () => Rt(R), onSelect: (z) => z.preventDefault(), children: jsxs("div", { className: "flex items-center gap-2", children: [A.icon, jsx("span", { children: A.label })] }) }, A.label)) })] }) }) : jsx("div", { className: "flex flex-wrap items-center gap-2 py-3 px-2", children: At.map((A, R) => jsxs(O, { variant: "ghost", className: `h-8 px-4 rounded-full flex items-center gap-2 ${I.has(R) ? "bg-gray-300 text-gray-800 hover:bg-gray-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`, onClick: () => Rt(R), children: [A.icon, jsx("span", { className: "text-xs font-medium", children: A.label })] }, A.label)) });
  };
  return jsx(It.Provider, { value: Ot, children: jsxs("div", { className: "relative w-full", children: [T && jsx("div", { className: "fixed z-[999] shadow-lg", style: { top: `${St.top}px`, left: `${St.left}px` }, children: jsx(bs, { selectedAgents: E.map((N) => ({ id: N.id, name: N.name, description: N.description })), onSelectAgents: (N) => {
    _ || g(N.map((A) => ({ id: A.id, name: A.name, description: A.description, icon: Ee(A.id) })));
  }, isOpen: T, onClose: () => {
    S(false), $(null), q.current = -1, d && d(false);
  }, multiSelectMode: P, maxSelections: 4, searchTerm: _ || "", onAgentSelect: _ !== null ? La : void 0, keyboardNavigation: _ !== null }) }), jsxs("div", { ref: w, className: v("relative", r === "default" && "flex flex-col items-end w-full p-2 rounded-2xl border border-input bg-transparent focus-within:ring-1 focus-within:ring-slate-300 focus-within:outline-none", r === "unstyled" && "flex items-start gap-2 w-full", n), children: [jsx(Ca, { blur: 0, borderWidth: 1.7, spread: 25, glow: true, disabled: false, proximity: 64, inactiveZone: 0.01 }), jsxs("div", { className: "relative flex flex-col items-end w-full z-10", children: [jsxs("div", { className: "flex w-full items-end", children: [jsx(O, { type: "button", variant: "ghost", size: "icon", className: "h-10 w-10 rounded-full hover:bg-gray-100 mr-2", onClick: Et, children: Ee(E[0].id) }), Ts.map(e, (N) => {
    if (Ss(N)) {
      const A = N.type;
      if (A && (A.displayName === "ChatInputTextArea" || A === Pe)) return ks(N, { ref: (z) => {
        y.current = z;
        const Y = N.ref;
        typeof Y == "function" ? Y(z) : Y && "current" in Y && (Y.current = z);
      }, placeholder: _ !== null ? "Type model name..." : Ot.placeholder, onKeyDown: Ma });
    }
    return N;
  })] }), jsx("div", { className: "flex w-full items-center justify-between mt-2", children: jsxs("div", { className: "flex items-center gap-2", children: [P && E.length > 1 && jsxs("div", { className: "flex items-center gap-1", children: [jsx("div", { className: "flex -space-x-1", children: E.slice(0, 2).map((N, A) => jsx("div", { className: "h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center border border-white", children: N.icon || Ee(N.id) }, N.id)) }), jsxs("span", { className: "text-xs text-gray-500", children: [E.length, " models"] })] }), jsxs(O, { type: "button", variant: "ghost", className: v("h-8 rounded-full px-3 flex items-center gap-1.5 text-xs font-normal", P ? "bg-red-50 text-red-600 hover:bg-red-100" : "bg-gray-100 hover:bg-gray-100"), onClick: Et, children: [jsx(Split, { className: "h-4 w-4" }), jsx("span", { children: "Multiprompt" })] }), Da()] }) })] })] })] }) });
}
Ge.displayName = "ChatInput";
function Pe({ onSubmit: e, value: n, onChange: r, className: a, variant: s, ...o }) {
  var _a2, _b;
  const c = useContext(It), [l, p] = useState(""), m = (_a2 = n != null ? n : c.value) != null ? _a2 : l, f = r != null ? r : c.onChange, d = e != null ? e : c.onSubmit, h = (_b = c.rows) != null ? _b : 1, k = c.placeholder || "", u = c.hasMessages || false, b = useRef(null), w = s != null ? s : c.variant === "default" ? "unstyled" : "default", y = Is(m, h), I = useCallback((C) => {
    y && (typeof y == "function" ? y(C) : "current" in y && (y.current = C)), b.current = C;
  }, [y]);
  return jsxs("div", { className: "relative w-full", children: [jsx(Nt, { ref: I, ...o, value: m, onChange: (C) => {
    f ? f(C) : p(C.target.value);
  }, onKeyDown: (C) => {
    if (d && C.key === "Enter" && !C.shiftKey) {
      if (typeof m != "string" || m.trim().length === 0) return;
      C.preventDefault(), d();
    }
  }, className: v("max-h-[400px] min-h-0 resize-none overflow-x-hidden", w === "unstyled" && "border-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none", a), rows: h, placeholder: void 0 }), !m && jsx("div", { className: "absolute pointer-events-none top-0 left-0 right-0 bottom-0 flex items-center px-3 py-2", children: jsx(AnimatePresence, { mode: "wait", children: u ? jsx("span", { className: "text-muted-foreground truncate", children: k }) : jsx(motion.span, { initial: { opacity: 0, y: -5 }, animate: { opacity: 0.5, y: 0 }, exit: { opacity: 0, y: 5 }, transition: { duration: 0.3 }, className: "text-muted-foreground truncate", children: k }, k) }) })] });
}
Pe.displayName = "ChatInputTextArea";
function Be({ onSubmit: e, loading: n, onStop: r, className: a, ...s }) {
  const o = useContext(It), c = n != null ? n : o.loading, l = r != null ? r : o.onStop, p = e != null ? e : o.onSubmit;
  if (c && l) return jsx(O, { onClick: l, className: v("shrink-0 rounded-full p-1.5 h-fit border dark:border-zinc-600 hover:cursor-pointer", a), ...s, children: jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-label": "Stop", children: [jsx("title", { children: "Stop" }), jsx("rect", { x: "6", y: "6", width: "12", height: "12" })] }) });
  const m = typeof o.value != "string" || o.value.trim().length === 0, f = o.audio;
  return jsxs("div", { className: "flex gap-1", children: [jsx(O, { className: v("shrink-0 rounded-full p-1.5 h-fit border dark:border-zinc-600 hover:cursor-pointer", a), disabled: m, onClick: (d) => {
    d.preventDefault(), m || (p == null ? void 0 : p());
  }, ...s, children: jsx(ArrowUpIcon, {}) }), jsx(O, { className: v("shrink-0 rounded-full p-1.5 h-fit border bg-red-500 hover:bg-red-600/95! dark:border-zinc-600 hover:cursor-pointer", a), disabled: f, onClick: (d) => {
    d.preventDefault(), m || (p == null ? void 0 : p());
  }, ...s, children: jsx(AudioLines, {}) })] });
}
Be.displayName = "ChatInputSubmit";
function Xe(e) {
  switch (e) {
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
function As({ currentUserId: e, project: n, teamspace: r }) {
  const a = [{ chatroomId: "", role: "ADMIN", userId: e }];
  if (n) {
    if (n.members.length < 1) return [];
    n.members.forEach((s) => {
      s.user.id !== e && a.push({ chatroomId: "", role: Xe(s.role), userId: s.user.id });
    }), !n.isPrivate && r && r.members.forEach((s) => {
      a.some((c) => c.userId === s.user.id) || a.push({ chatroomId: "", role: Xe(s.role), userId: s.user.id });
    });
  } else if (r) {
    if (r.members.length < 1) return [];
    r.members.forEach((s) => {
      s.user.id !== e && a.push({ chatroomId: "", role: Xe(s.role), userId: s.user.id });
    });
  }
  return a;
}
function yi(e, n = false) {
  return [...e].sort((r, a) => {
    var _a2, _b;
    const s = ((_a2 = r.messages) == null ? void 0 : _a2.length) ? r.messages.reduce((p, m) => {
      const f = new Date(p.createdAt).getTime();
      return new Date(m.createdAt).getTime() > f ? m : p;
    }, r.messages[0]) : null, o = ((_b = a.messages) == null ? void 0 : _b.length) ? a.messages.reduce((p, m) => {
      const f = new Date(p.createdAt).getTime();
      return new Date(m.createdAt).getTime() > f ? m : p;
    }, a.messages[0]) : null, c = s ? new Date(s.createdAt).getTime() : new Date(r.updatedAt || r.createdAt).getTime(), l = o ? new Date(o.createdAt).getTime() : new Date(a.updatedAt || a.createdAt).getTime();
    return n ? c - l : l - c;
  });
}
function vi(e) {
  var _a2;
  return ((_a2 = e.messages) == null ? void 0 : _a2.length) ? new Date(e.messages.reduce((n, r) => new Date(r.createdAt) > new Date(n.createdAt) ? r : n, e.messages[0]).createdAt) : new Date(e.updatedAt);
}
function Rs(e, n) {
  return e.members.find((r) => r.user.id === n);
}
const Es = atom([]), _s = atom(), Os = atom(), js = atom([]), He = atom(), bi = atom({});
atom(null);
atom("projects");
const wi = atom({});
atom({});
const Ia = createFileRoute("/_authed/_layout/chat/")({ component: Ms });
function Ms({ className: e, ...n }) {
  var _a2;
  const r = useNavigate(), a = useAtomValue(Es), s = useSetAtom(js), o = Ia.useRouteContext(), [c] = useState(o.userId), [l, p] = useState(""), m = useAtomValue(_s), f = useAtomValue(Os), d = a == null ? void 0 : a.find((w) => w.id === m), h = (_a2 = d == null ? void 0 : d.projects) == null ? void 0 : _a2.find((w) => w.id === f), k = useSetAtom(He), u = async () => {
    var _a3;
    if (l.trim()) try {
      const w = As({ currentUserId: c, project: h, teamspace: d }), { data: y } = await fe().chatrooms.createChatroom({ chatroomCreatorId: c, chatroomMembers: w, isPrivate: (h == null ? void 0 : h.isPrivate) || false, projectId: h == null ? void 0 : h.id, name: "New Chat Conversation", teamIds: [], type: "CHATROOM" });
      h ? (_a3 = h.chatrooms) == null ? void 0 : _a3.push(y) : s((I) => [...I, y]), console.log("New chatroom created:", y), k(y), localStorage.setItem("pendingMessage", l), r({ to: "/chat/$chatroomId", params: { chatroomId: y.id } });
    } catch (w) {
      console.error("Error creating chatroom:", w);
      return;
    }
  }, b = jsxs(Ge, { value: l, onChange: (w) => p(w.target.value), onSubmit: u, hasMessages: false, children: [jsx(Pe, { placeholder: "Type a message...", autoFocus: true, disabled: false, onKeyDown: (w) => {
    w.key === "Enter" && !w.shiftKey && (w.preventDefault(), u());
  } }), jsx(Be, { disabled: !l.trim() })] });
  return jsx("div", { className: "flex-1 flex flex-col h-full", ...n, children: jsxs("div", { className: "flex-1 flex flex-col justify-center items-center", children: [jsx("div", { children: jsx("h3", { className: "text-2xl font-bold mb-6 font-mono", children: "What are we solving today?" }) }), jsx("div", { className: "px-2 py-4 max-w-4xl mx-auto w-full", children: b })] }) });
}
const $s = () => import('../build/_teamspaceId-DSVOHVhG.mjs'), Ta = createFileRoute("/_authed/_layout/teamspace/$teamspaceId")({ params: z$1.object({ teamspaceId: z$1.string() }), component: lazyRouteComponent($s, "component", () => Ta.ssr) }), zs = () => import('../build/_projectId-DFGTUSU4.mjs'), Sa = createFileRoute("/_authed/_layout/project/$projectId")({ params: z$1.object({ projectId: z$1.string() }), component: lazyRouteComponent(zs, "component", () => Sa.ssr) });
function Ls() {
  const e = useRef(null), [n, r] = useState(false), [a, s] = useState(true), o = useRef(false), c = useRef(false), l = useRef(false), p = useRef(false), m = useCallback((u) => u == null ? void 0 : u.closest("[data-radix-scroll-area-viewport]"), []), f = useCallback((u) => {
    const { scrollTop: b, scrollHeight: w, clientHeight: y } = u;
    return Math.abs(w - b - y) < 10;
  }, []), d = useCallback((u) => {
    u && u.scrollTo({ top: u.scrollHeight, behavior: "instant" });
  }, []), h = useCallback((u) => {
    const { scrollHeight: b, clientHeight: w } = u, y = b > w, I = f(u);
    r(y && !I), c.current || s(I);
  }, [f]);
  return useEffect(() => {
    const u = e.current, b = m(u);
    if (!u || !b) return;
    d(b);
    const w = setTimeout(() => {
      o.current || (d(b), p.current = true);
    }, 200), y = new ResizeObserver(() => {
      !p.current && !o.current && d(b);
    });
    return y.observe(u), () => {
      clearTimeout(w), y.disconnect();
    };
  }, [m, d]), useEffect(() => {
    const u = e.current, b = m(u);
    if (!u || !b) return;
    h(b);
    const w = () => {
      p.current || (p.current = true), l.current || (o.current = true), c.current || h(b);
    }, y = () => {
      c.current = true, o.current = true;
    }, I = () => {
      c.current = false, h(b);
    }, M = () => {
      c.current = true, o.current = true, setTimeout(() => {
        c.current = false, h(b);
      }, 200);
    };
    let j;
    const C = new MutationObserver(() => {
      l.current = true, window.clearTimeout(j), (a && !o.current || a && p.current && !c.current) && b.scrollTo({ top: b.scrollHeight, behavior: "instant" }), h(b), j = window.setTimeout(() => {
        l.current = false;
      }, 100);
    });
    return b.addEventListener("scroll", w, { passive: true }), b.addEventListener("touchstart", y), b.addEventListener("touchend", I), b.addEventListener("wheel", M, { passive: true }), C.observe(u, { childList: true, subtree: true, attributes: true, characterData: true }), () => {
      window.clearTimeout(j), C.disconnect(), b.removeEventListener("scroll", w), b.removeEventListener("touchstart", y), b.removeEventListener("touchend", I), b.removeEventListener("wheel", M);
    };
  }, [m, h, a]), [e, n, () => {
    const u = m(e.current);
    u && (s(true), o.current = false, u.scrollTo({ top: u.scrollHeight, behavior: l.current ? "instant" : "smooth" }));
  }];
}
function Ds({ onClick: e, alignment: n = "right", className: r }) {
  return jsx(O, { variant: "secondary", size: "icon", className: v("absolute bottom-4 rounded-full shadow-lg hover:bg-secondary", { left: "left-4", center: "left-1/2 -translate-x-1/2", right: "right-4" }[n], r), onClick: e, children: jsx(ChevronDown, { className: "h-4 w-4" }) });
}
const Tt = forwardRef(({ children: e, className: n, scrollButtonAlignment: r = "right" }, a) => {
  const [s, o, c] = Ls();
  return jsxs(Ct, { className: "flex-1 relative", ref: a, children: [jsx("div", { ref: s, children: jsx("div", { className: v(n, "min-h-0 z-10"), children: e }) }), o && jsx(Ds, { onClick: c, alignment: r, className: "absolute bottom-4 rounded-full shadow-lg hover:bg-secondary" })] });
});
Tt.displayName = "ChatMessageArea";
const ht = "my-4 overflow-x-auto w-fit rounded-xl text-zinc-50 bg-zinc-900 dark:bg-zinc-900 border border-border p-4", pt = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(pt).join("") : isValidElement(e) ? pt(e.props.children) : "", ka = memo(async ({ children: e, className: n, language: r, ...a }) => {
  const { codeToTokens: s, bundledLanguages: o } = await import('shiki'), c = pt(e);
  if (!(r in o)) return jsx("pre", { ...a, className: v(ht, n), children: jsx("code", { className: "whitespace-pre-wrap", children: e }) });
  const { tokens: l } = await s(c, { lang: r, themes: { light: "github-dark", dark: "github-light" } });
  return jsx("pre", { ...a, className: v(ht, n), children: jsx("code", { className: "whitespace-pre-wrap", children: l.map((p, m) => jsxs("span", { children: [p.map((f, d) => {
    const h = typeof f.htmlStyle == "string" ? void 0 : f.htmlStyle;
    return jsx("span", { style: h, children: f.content }, `token-${d}`);
  }), m !== l.length - 1 && `
`] }, `line-${m}`)) }) });
});
ka.displayName = "HighlightedPre";
const Pa = ({ children: e, language: n, className: r, ...a }) => jsx(Suspense, { fallback: jsx("pre", { ...a, className: v(ht, r), children: jsx("code", { className: "whitespace-pre-wrap", children: e }) }), children: jsx(ka, { language: n, ...a, children: e }) });
Pa.displayName = "CodeBlock";
const Us = { h1: ({ children: e, ...n }) => jsx("h1", { className: "mt-2 scroll-m-20 text-4xl font-bold", ...n, children: e }), h2: ({ children: e, ...n }) => jsx("h2", { className: "mt-8 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0", ...n, children: e }), h3: ({ children: e, ...n }) => jsx("h3", { className: "mt-4 scroll-m-20 text-xl font-semibold tracking-tight", ...n, children: e }), h4: ({ children: e, ...n }) => jsx("h4", { className: "mt-4 scroll-m-20 text-lg font-semibold tracking-tight", ...n, children: e }), h5: ({ children: e, ...n }) => jsx("h5", { className: "mt-4 scroll-m-20 text-lg font-semibold tracking-tight", ...n, children: e }), h6: ({ children: e, ...n }) => jsx("h6", { className: "mt-4 scroll-m-20 text-base font-semibold tracking-tight", ...n, children: e }), p: ({ children: e, ...n }) => jsx("p", { className: "leading-6 [&:not(:first-child)]:mt-4", ...n, children: e }), strong: ({ children: e, ...n }) => jsx("span", { className: "font-semibold", ...n, children: e }), a: ({ children: e, ...n }) => jsx("a", { className: "font-medium underline underline-offset-4", target: "_blank", rel: "noreferrer", ...n, children: e }), ol: ({ children: e, ...n }) => jsx("ol", { className: "my-4 ml-6 list-decimal", ...n, children: e }), ul: ({ children: e, ...n }) => jsx("ul", { className: "my-4 ml-6 list-disc", ...n, children: e }), li: ({ children: e, ...n }) => jsx("li", { className: "mt-2", ...n, children: e }), blockquote: ({ children: e, ...n }) => jsx("blockquote", { className: "mt-4 border-l-2 pl-6 italic", ...n, children: e }), hr: (e) => jsx("hr", { className: "my-4 md:my-8", ...e }), table: ({ children: e, ...n }) => jsx("div", { className: "my-6 w-full overflow-y-auto", children: jsx("table", { className: "relative w-full overflow-hidden border-none text-sm", ...n, children: e }) }), tr: ({ children: e, ...n }) => jsx("tr", { className: "last:border-b-none m-0 border-b", ...n, children: e }), th: ({ children: e, ...n }) => jsx("th", { className: "px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", ...n, children: e }), td: ({ children: e, ...n }) => jsx("td", { className: "px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", ...n, children: e }), img: ({ alt: e, ...n }) => jsx("img", { className: "rounded-md", alt: e, ...n }), code: ({ children: e, node: n, className: r, ...a }) => {
  const s = /language-(\w+)/.exec(r || "");
  return s ? jsx(Pa, { language: s[1], className: r, ...a, children: e }) : jsx("code", { className: v("rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", r), ...a, children: e });
}, pre: ({ children: e }) => jsx(Fragment, { children: e }) };
function Fs(e) {
  return e ? marked.lexer(e).map((r) => r.raw) : [];
}
const Aa = memo(({ content: e, className: n }) => jsx(sr, { remarkPlugins: [or], components: Us, className: n, children: e }), (e, n) => e.content === n.content);
Aa.displayName = "MemoizedMarkdownBlock";
const ft = memo(({ content: e, id: n, className: r }) => useMemo(() => Fs(e || ""), [e]).map((s, o) => jsx(Aa, { content: s, className: r }, `${n}-block_${o}`)));
ft.displayName = "MarkdownContent";
const Gs = ({ children: e, url: n, className: r, width: a = 200, height: s = 125, isStatic: o = false, imageSrc: c = "" }) => {
  let l;
  o ? l = c : l = `https://api.microlink.io/?${encode$2({ url: n, screenshot: true, meta: false, embed: "screenshot.url", colorScheme: "dark", "viewport.isMobile": true, "viewport.deviceScaleFactor": 1, "viewport.width": a * 3, "viewport.height": s * 3 })}`;
  const [p, m] = y__default.useState(false), [f, d] = y__default.useState(false);
  y__default.useEffect(() => {
    d(true);
  }, []);
  const h = { stiffness: 100, damping: 15 }, k = useMotionValue(0), u = useSpring(k, h), b = (w) => {
    const y = w.target.getBoundingClientRect(), M = (w.clientX - y.left - y.width / 2) / 2;
    k.set(M);
  };
  return jsxs(Fragment, { children: [f ? jsx("div", { className: "hidden", children: jsx("img", { src: l, width: a, height: s, alt: "hidden image" }) }) : null, jsxs(Je.Root, { openDelay: 50, closeDelay: 100, onOpenChange: (w) => {
    m(w);
  }, children: [jsx(Je.Trigger, { onMouseMove: b, className: v("text-black dark:text-white", r), href: n, target: "_blank", rel: "noopener noreferrer", children: e }), jsx(Je.Content, { className: "[transform-origin:var(--radix-hover-card-content-transform-origin)]", side: "top", align: "center", sideOffset: 10, children: jsx(AnimatePresence$1, { children: p && jsx(motion$1.div, { initial: { opacity: 0, y: 20, scale: 0.6 }, animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } }, exit: { opacity: 0, y: 20, scale: 0.6 }, className: "shadow-xl rounded-xl", style: { x: u }, children: jsx(Link, { to: n, className: "block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800", style: { fontSize: 0 }, target: "_blank", rel: "noopener noreferrer", children: jsx("img", { src: o ? c : l, width: a, height: s, className: "rounded-lg", alt: "preview image" }) }) }) }) })] })] });
}, Bs = cva("flex gap-4 w-full", { variants: { variant: { default: "", bubble: "", full: "p-5" }, type: { incoming: "justify-start mr-auto", outgoing: "justify-end ml-auto" } }, compoundVariants: [{ variant: "full", type: "outgoing", className: "bg-muted" }, { variant: "full", type: "incoming", className: "bg-background" }], defaultVariants: { variant: "default", type: "incoming" } }), Ra = y__default.createContext(null), Ea = () => y__default.useContext(Ra), gt = y__default.forwardRef(({ className: e, variant: n = "default", type: r = "incoming", id: a, children: s, ...o }, c) => jsx(Ra.Provider, { value: { variant: n, type: r, id: a }, children: jsx("div", { ref: c, className: v(Bs({ variant: n, type: r, className: e })), ...o, children: s }) }));
gt.displayName = "ChatMessage";
const Hs = cva("w-8 h-8 flex items-center rounded-full justify-center ring-1 shrink-0 bg-transparent overflow-hidden", { variants: { type: { incoming: "ring-border", outgoing: "ring-muted-foreground/30" } }, defaultVariants: { type: "incoming" } }), yt = y__default.forwardRef(({ className: e, icon: n, imageSrc: r, ...a }, s) => {
  var _a2, _b;
  const c = (_b = (_a2 = Ea()) == null ? void 0 : _a2.type) != null ? _b : "incoming", l = n != null ? n : c === "incoming" ? jsx(SparklesIcon, {}) : jsx(UserIcon, {});
  return jsx("div", { ref: s, className: v(Hs({ type: c, className: e })), ...a, children: r ? jsx("img", { src: r, alt: "Avatar", className: "h-full w-full object-cover" }) : jsx("div", { className: "translate-y-px [&_svg]:size-4 [&_svg]:shrink-0", children: l }) });
});
yt.displayName = "ChatMessageAvatar";
const Vs = cva("flex flex-col gap-2", { variants: { variant: { default: "", bubble: "rounded-xl px-3 py-2", full: "" }, type: { incoming: "", outgoing: "" } }, compoundVariants: [{ variant: "bubble", type: "incoming", className: "bg-secondary text-secondary-foreground" }, { variant: "bubble", type: "outgoing", className: "bg-primary text-primary-foreground" }], defaultVariants: { variant: "default", type: "incoming" } }), Ws = () => jsxs("div", { className: "relative overflow-hidden", children: [jsx("span", { className: "text-sm text-muted-foreground", children: "View thinking process" }), jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_2s_infinite]" })] }), vt = y__default.forwardRef(({ className: e, content: n, id: r, showCursor: a = false, reasoning: s = "", isReasoning: o = false, sources: c = [], children: l, ...p }, m) => {
  var _a2, _b, _c;
  const f = Ea(), [d, h] = y__default.useState(false), k = (_a2 = f == null ? void 0 : f.variant) != null ? _a2 : "default", u = (_b = f == null ? void 0 : f.type) != null ? _b : "incoming", b = (_c = r != null ? r : f == null ? void 0 : f.id) != null ? _c : "";
  return jsxs("div", { ref: m, className: v(Vs({ variant: k, type: u, className: e })), ...p, children: [s && s.length > 0 && jsxs("div", { className: "w-full mt-2 border rounded-md overflow-hidden", children: [jsxs("button", { type: "button", onClick: () => h(!d), className: "w-full flex items-center justify-between px-3 py-4 text-sm text-muted-foreground bg-[#F8FAFC] hover:cursor-pointer transition-colors", children: [jsx("span", { children: n === "" ? jsx(Ws, {}) : "View thinking process" }), jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: `h-4 w-4 shrink-0 transition-transform duration-200 ${d ? "rotate-180" : ""}`, children: jsx("path", { d: "m6 9 6 6 6-6" }) })] }), d && jsx("div", { className: "bg-[#F8FAFC] px-3 py-4 text-sm whitespace-pre-wrap", children: jsx(ft, { id: `${b}-reasoning`, content: s }) })] }), n.length > 0 && jsxs(Fragment, { children: [jsx(ft, { id: b, content: n }), a && jsx("span", { className: "ml-1 inline-block h-4 w-2 animate-pulse bg-current" })] }), c && c.length > 0 && jsxs("div", { className: "mt-3 border-t pt-2 text-sm", children: [jsx("p", { className: "font-medium text-muted-foreground mb-2", children: "Sources:" }), jsx("div", { className: "space-y-2", children: c.map((w, y) => jsxs("div", { className: "flex items-start gap-2", children: [jsxs("span", { className: "text-xs text-muted-foreground mt-1", children: ["[", y + 1, "]"] }), jsx(Gs, { url: w.url, className: "text-primary hover:underline flex-1", children: w.title || w.url })] }, w.id)) })] }), l] });
});
vt.displayName = "ChatMessageContent";
function qs({ ...e }) {
  return jsx(a.Root, { "data-slot": "sheet", ...e });
}
function Js({ ...e }) {
  return jsx(a.Close, { "data-slot": "sheet-close", ...e });
}
function Ks({ ...e }) {
  return jsx(a.Portal, { "data-slot": "sheet-portal", ...e });
}
function Xs({ className: e, ...n }) {
  return jsx(a.Overlay, { "data-slot": "sheet-overlay", className: v("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/10", e), ...n });
}
function Ys({ className: e, children: n, side: r = "right", ...a$1 }) {
  return jsxs(Ks, { children: [jsx(Xs, {}), jsxs(a.Content, { "data-slot": "sheet-content", className: v("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", r === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", r === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", r === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", r === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", e), ...a$1, children: [n, jsxs(a.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [jsx(XIcon, { className: "size-4" }), jsx("span", { className: "sr-only", children: "Close" })] })] })] });
}
function Qs({ className: e, ...n }) {
  return jsx("div", { "data-slot": "sheet-header", className: v("flex flex-col gap-1.5 p-4", e), ...n });
}
function Zs({ className: e, ...n }) {
  return jsx(a.Title, { "data-slot": "sheet-title", className: v("text-foreground font-semibold tracking-tight", e), ...n });
}
function xi({ className: e, ...n }) {
  return jsx(a.Description, { "data-slot": "sheet-description", className: v("text-muted-foreground text-sm", e), ...n });
}
function eo({ onReact: e, onReply: n, onEdit: r, className: a, messageData: s }) {
  const [o, c] = useState(false), l = useRef(null), p = useRef(null), m = ["\u{1F44D}", "\u2764\uFE0F", "\u{1F602}", "\u{1F389}", "\u{1F64C}", "\u{1F440}"], f = (d) => {
    e && e(d), c(false);
  };
  return useEffect(() => {
    const d = (h) => {
      l.current && !l.current.contains(h.target) && p.current && !p.current.contains(h.target) && c(false);
    };
    return document.addEventListener("mousedown", d), () => {
      document.removeEventListener("mousedown", d);
    };
  }, []), jsxs("div", { className: `relative w-[7.5rem] ${a}`, children: [jsxs("div", { className: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm flex items-center px-1 relative", children: [jsxs(Oe, { children: [jsx(je, { asChild: true, children: jsx("button", { ref: p, className: "p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400", onClick: () => c(!o), "aria-label": "Add reaction", children: jsx(Smile, { className: "h-5 w-5" }) }) }), jsx(Me, { sideOffset: 8, children: "Add reaction" })] }), jsxs(Oe, { children: [jsx(je, { asChild: true, children: jsx("button", { className: "p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400", onClick: n, "aria-label": "Reply", children: jsx(MessageSquare, { className: "h-5 w-5" }) }) }), jsx(Me, { sideOffset: 8, children: "Reply" })] }), jsxs(Oe, { children: [jsx(je, { asChild: true, children: jsx("button", { className: "p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400", onClick: r, "aria-label": "Edit", children: jsx(Edit, { className: "h-5 w-5" }) }) }), jsx(Me, { sideOffset: 8, children: "Edit" })] })] }), o && jsx("div", { ref: l, className: "absolute right-0 top-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-2 z-10", children: jsx("div", { className: "flex gap-1", children: m.map((d, h) => jsx("button", { onClick: () => f(d), className: "hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full text-lg", children: d }, h)) }) })] });
}
const Ye = ({ messageData: e, isLastChunk: n = true, userID: r, userImage: a, onReply: s, chatroom: o }) => {
  var _a2, _b;
  const [c, l] = useState(false), p = e.data.senderId === r, [m] = useAtom(He), f = (m == null ? void 0 : m.members.length) !== 1;
  if (!p) {
    const d = (_b = (_a2 = o == null ? void 0 : o.members) == null ? void 0 : _a2.find((h) => h.user.id === e.data.senderId)) == null ? void 0 : _b.user.image;
    return jsxs("div", { className: `relative group py-3 ${f ? "hover:bg-gray-100 px-2 rounded-lg" : ""} `, onMouseEnter: () => l(true), onMouseLeave: () => l(false), children: [jsxs(gt, { id: e.data.id || e.identifier, className: "w-full overflow-hidden", children: [jsx(yt, { icon: e.data.isAiGenerated ? jsx(SparklesIcon, {}) : jsx(UserIcon, {}), imageSrc: e.data.isAiGenerated ? void 0 : d, className: "flex-shrink-0" }), jsx(vt, { content: e.data.content, showCursor: !n && e.data.isAiGenerated, reasoning: e.data.reasoning, isReasoning: !!e.data.reasoning && e.data.reasoning.length > 0, sources: e.data.sources, className: "break-words overflow-hidden" })] }, e.data.id || e.identifier), f && jsx("div", { className: `absolute -top-7 -right-2 transition-opacity duration-200 ${c ? "opacity-100" : "opacity-0"}`, children: jsx(eo, { messageData: e, onReply: s }) })] });
  }
  return jsx("div", { className: "relative group py-2", onMouseEnter: () => l(true), onMouseLeave: () => l(false), children: jsxs(gt, { id: e.data.id || e.identifier, variant: "bubble", type: "outgoing", className: "w-full overflow-hidden", children: [jsx(vt, { content: e.data.content, sources: e.data.sources, className: "break-words overflow-hidden" }), a && jsx(yt, { imageSrc: a, className: "flex-shrink-0" })] }, e.data.id || e.identifier) });
}, to = ({ message: e, userID: n, userImage: r, stream: a, allMessages: s = [] }) => {
  const [o, c] = useState(false), [l, p] = useState(""), [m, f] = useState(false), [d] = useAtom(He), h = e.data.id || e.identifier, k = useMemo(() => s.filter((C) => C.data.parentMessageId === h).map((C) => C.data), [s, h]), u = k.length > 0, w = !!!e.data.parentMessageId && (u || e.data.isThreadStarter), y = async () => {
    if (!(!l.trim() || !d || m)) {
      f(true);
      try {
        const C = h, E = v4();
        if (a) await a.send({ data: { chatroomId: d.id, parentMessageId: C, isAiGenerated: false, senderId: n, content: l.trim(), attachments: [], isReasoning: false, reasoning: "", sources: [] }, identifier: E, isLastChunk: true, startIndex: 0, totalChunks: 1 });
        else {
          const T = await fe().chats.chat({ userId: n, chatroomId: d.id });
          await T.send({ data: { chatroomId: d.id, parentMessageId: C, isAiGenerated: false, senderId: n, content: l.trim(), attachments: [], isReasoning: false, reasoning: "", sources: [] }, identifier: E, isLastChunk: true, startIndex: 0, totalChunks: 1 }), T.close();
        }
        p("");
      } catch (C) {
        console.error("Error sending reply:", C), toast.error("Failed to send reply. Please try again.");
      } finally {
        f(false);
      }
    }
  }, I = () => {
    var _a2, _b;
    const C = k[k.length - 1], E = k.length, [g, T] = useState(false), [S, P] = useState(false), H = useMemo(() => {
      const _ = new Set(k.map(($) => $.senderId));
      return Array.from(_).map(($) => {
        var _a3, _b2;
        const W = (_a3 = d == null ? void 0 : d.members) == null ? void 0 : _a3.find((q) => q.user.id === $);
        return { id: $, isAi: ((_b2 = k.find((q) => q.senderId === $)) == null ? void 0 : _b2.isAiGenerated) || false, name: (W == null ? void 0 : W.user.name) || "User", image: W == null ? void 0 : W.user.image };
      });
    }, [k, d]);
    return jsxs(O, { variant: "ghost", size: "sm", className: "w-full sm:w-[90%] md:w-[80%] flex items-center justify-start gap-1 py-1 text-xs text-muted-foreground bg-white relative", onClick: () => c(true), onMouseEnter: () => {
      T(true), P(true);
    }, onMouseLeave: () => {
      T(false), P(false);
    }, children: [jsxs("div", { className: "flex items-center min-w-[80px] z-10", children: [jsx(MessageSquareIcon, { size: 12, className: "mr-1" }), jsxs("span", { children: [E, " ", E === 1 ? "reply" : "replies"] })] }), jsxs("div", { className: "relative h-6 flex-1 overflow-hidden", children: [jsxs("div", { className: `absolute left-0 flex transition-all duration-500 ease-in-out ${S ? "opacity-0 transform -translate-y-full" : "opacity-100 transform translate-y-0"}`, children: [H.slice(0, 3).map((_, $) => jsx("div", { className: "w-6 h-6 rounded-md flex items-center justify-center ml-2 bg-gray-100", children: _.isAi ? jsx(SparklesIcon, { size: 12 }) : _.image ? jsx("img", { src: _.image, className: "w-6 h-6 rounded-md", alt: "user" }) : jsx(UserIcon, { size: 12 }) }, $)), H.length > 3 && jsx("div", { className: "w-5 h-5 rounded-md flex items-center justify-center ml-2 bg-gray-100", children: jsxs("span", { className: "text-xs", children: ["+", H.length - 3] }) })] }), jsx("div", { className: `absolute left-0 h-6 flex items-center transition-all duration-500 ease-in-out ${S ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-full"}`, children: jsxs("div", { className: "ml-2 flex items-center w-full overflow-hidden", children: [(C == null ? void 0 : C.isAiGenerated) ? jsx(SparklesIcon, { size: 12, className: "flex-shrink-0" }) : (() => {
      var _a3;
      const _ = (_a3 = d == null ? void 0 : d.members) == null ? void 0 : _a3.find((W) => W.user.id === (C == null ? void 0 : C.senderId)), $ = _ == null ? void 0 : _.user.image;
      return $ ? jsx("img", { src: $, className: "w-6 h-6 rounded-md flex-shrink-0", alt: (_ == null ? void 0 : _.user.name) || "User" }) : jsx(UserIcon, { size: 12, className: "flex-shrink-0" });
    })(), C && jsxs("span", { className: "ml-2 truncate text-muted-foreground/70 w-full max-w-[calc(100%-24px)]", children: [((_a2 = C.content) == null ? void 0 : _a2.substring(0, 70)) || "", ((_b = C.content) == null ? void 0 : _b.length) > 70 ? "..." : ""] })] }) })] }), jsx(ChevronRight, { className: `ml-auto transition-all duration-300 ease-in-out z-10 ${g ? "opacity-100 text-black" : "opacity-0"}` })] });
  }, M = useRef(e.data.content);
  useEffect(() => {
    M.current = e.data.content;
  }, [e.data.content]);
  const j = () => {
    c(true);
  };
  return jsxs("div", { className: `relative w-full ${u ? "hover:bg-gray-100 px-2 rounded-lg" : ""}`, children: [jsx(Ye, { messageData: { ...e, data: { ...e.data, content: M.current } }, isLastChunk: e.isLastChunk, userID: n, userImage: r, onReply: j, chatroom: d }), w && jsx("div", { className: "pl-4 sm:pl-8 pb-1", children: jsx(I, {}) }), jsx(qs, { open: o, onOpenChange: c, children: jsxs(Ys, { side: "right", className: "p-0 flex flex-col w-full sm:min-w-[600px] md:min-w-[750px] lg:min-w-[800px] xl:min-w-[900px] max-w-[95vw]", children: [jsx(Qs, { className: "px-3 sm:px-4 py-3 border-b sticky top-0 bg-white z-10", children: jsxs("div", { className: "flex justify-between items-center", children: [jsx(Zs, { className: "text-base sm:text-lg", children: u ? `Thread (${k.length} ${k.length === 1 ? "reply" : "replies"})` : "Reply to message" }), jsx(Js, { className: "hover:cursor-pointer" })] }) }), jsxs("div", { className: "flex-1 flex flex-col h-[calc(100vh-140px)] overflow-hidden", children: [jsx(Tt, { scrollButtonAlignment: "right", className: "flex-1 px-1 sm:px-2 py-4", children: jsxs("div", { className: "space-y-4", children: [jsx("div", { className: "w-full border-b border-gray-200 mb-6 p-2 sm:p-3 hover:bg-gray-100", style: { maxWidth: "95%" }, children: jsx(Ye, { messageData: { ...e, data: { ...e.data, content: M.current } }, isLastChunk: e.isLastChunk, userID: n, userImage: r, onReply: j, chatroom: d }) }), k.map((C) => jsx("div", { className: "w-full border-b border-gray-200 mb-4 hover:bg-gray-100 p-2 sm:p-3", style: { maxWidth: "95%" }, children: jsx(Ye, { messageData: { identifier: C.id, data: C, startIndex: 0, totalChunks: 1, isLastChunk: true }, isLastChunk: true, userID: n, userImage: r, onReply: j, chatroom: d }) }, C.id))] }) }), jsx("div", { className: "p-2 sm:p-3 border-t mt-auto bg-white", children: jsxs(Ge, { value: l, onChange: (C) => p(C.target.value), onSubmit: y, hasMessages: true, children: [jsx(Pe, { placeholder: m ? "Sending..." : "Reply in thread...", autoFocus: true, disabled: m, onKeyDown: (C) => {
    C.key === "Enter" && !C.shiftKey && (C.preventDefault(), y());
  } }), jsx(Be, { disabled: !l.trim() || m })] }) })] })] }) })] });
}, ao = Se("app_routes_authed_layout_chat_chatroomId_tsx--fetchChatroomWithMessages_createServerFn_handler", "/_server"), no = createServerFn().validator((e) => e).handler(ao), bt = createFileRoute("/_authed/_layout/chat/$chatroomId")({ params: z$1.object({ chatroomId: z$1.string() }), beforeLoad: async (e) => {
  const { chatroomId: n } = e.params;
  return { chatroom: (await no({ data: { chatroomId: n } })).chatroom };
}, component: ro });
function ro({ className: e, ...n }) {
  const { userId: r, chatroom: a } = bt.useRouteContext(), { chatroomId: s } = bt.useParams(), o = useRef(void 0), [c, l] = useState(false), [p, m] = useState([]), [f, d] = useState(""), h = useSetAtom(He), k = useRef(null), u = async (y) => {
    if (!(c || !f.trim() && !y)) try {
      if (!o.current && (await b(a.id), !o.current)) {
        console.error("Couldn't establish chat connection");
        return;
      }
      await o.current.send({ data: { chatroomId: a.id || "", parentMessageId: null, isThreadStarter: false, senderId: r, content: y || f, attachments: [], isReasoning: false, reasoning: "", sources: [] }, identifier: v4(), isLastChunk: true, startIndex: 0, totalChunks: 1 }), d("");
    } catch (I) {
      console.error("Error sending message:", I);
    }
  };
  useEffect(() => {
    var _a2;
    if (h(a), ((_a2 = a.messages) == null ? void 0 : _a2.length) > 0) {
      const y = a.messages.map((I) => ({ identifier: I.id, data: I, startIndex: 0, totalChunks: 1, isLastChunk: true }));
      m(y);
    } else m([]);
    return b(a.id), () => {
      o.current && o.current.close();
    };
  }, [s]);
  const b = async (y) => {
    o.current && o.current.close(), l(true);
    try {
      o.current = await fe().chats.chat({ userId: r, chatroomId: y || y || "" }), o.current.socket.on("close", () => {
        console.log("Socket closed, will attempt to reconnect if needed");
      }), o.current.socket.on("open", async () => {
        l(false);
        const I = localStorage.getItem("pendingMessage");
        I && (await u(I), localStorage.removeItem("pendingMessage"));
      });
      for await (const I of o.current) m((M) => {
        const j = M.findIndex((E) => E.identifier === I.identifier);
        if (I.identifier.startsWith("parent-")) return M;
        if (j >= 0) {
          const E = [...M], g = E[j];
          if (I.isLastChunk) E[j] = I;
          else {
            const T = I.startIndex <= 1, S = { ...g, data: { ...g.data, content: T ? I.data.content : g.data.content + I.data.content, reasoning: T ? I.data.reasoning || "" : (g.data.reasoning || "") + (I.data.reasoning || ""), sources: I.data.sources ? [...g.data.sources || [], ...I.data.sources.filter((P) => !(g.data.sources || []).some((H) => H.id === P.id))] : g.data.sources }, isLastChunk: I.isLastChunk, totalChunks: I.totalChunks, startIndex: I.startIndex };
            E[j] = S;
          }
          return E;
        } else return [...M, I];
      });
    } catch (I) {
      console.error("Error connecting to chat:", I), l(false);
    }
  }, w = jsxs(Ge, { value: f, onChange: (y) => d(y.target.value), onSubmit: u, hasMessages: p.length > 0, children: [jsx(Pe, { placeholder: c ? "Connecting..." : "Type a message...", autoFocus: true, disabled: c, onKeyDown: (y) => {
    y.key === "Enter" && !y.shiftKey && (y.preventDefault(), u());
  } }), jsx(Be, { disabled: c || !f.trim() })] });
  return jsxs("div", { className: "flex-1 flex flex-col h-full", ...n, children: [jsx(Tt, { scrollButtonAlignment: "center", className: "flex-1 overflow-y-auto", children: jsxs("div", { className: "max-w-4xl mx-auto w-full px-4 py-8 space-y-4", children: [p.filter((y) => !y.data.parentMessageId).map((y) => {
    var _a2;
    return jsx(to, { message: y, userID: r, userImage: (_a2 = Rs(a, y.data.senderId)) == null ? void 0 : _a2.user.image, stream: o.current, allMessages: p }, y.identifier || y.data.id);
  }), jsx("div", { ref: k })] }) }), jsx("div", { className: "px-2 py-4 max-w-4xl mx-auto w-full", children: w })] });
}
const so = Qt.update({ id: "/verify-account", path: "/verify-account", getParentRoute: () => re }), oo = Ur.update({ id: "/sign-up", path: "/sign-up", getParentRoute: () => re }), io = Gr.update({ id: "/sign-in", path: "/sign-in", getParentRoute: () => re }), co = Vr.update({ id: "/forgot-password", path: "/forgot-password", getParentRoute: () => re }), lo = fa.update({ id: "/create-organization", path: "/create-organization", getParentRoute: () => re }), _a = ls.update({ id: "/_authed", getParentRoute: () => re }), uo = ga.update({ id: "/", path: "/", getParentRoute: () => re }), se = ya.update({ id: "/_layout", getParentRoute: () => _a }), mo = va.update({ id: "/accept-invitation/$invitationId/$invitationEmail", path: "/accept-invitation/$invitationId/$invitationEmail", getParentRoute: () => re }), ho = ba.update({ id: "/team-chat/", path: "/team-chat/", getParentRoute: () => se }), po = wa.update({ id: "/organizations/", path: "/organizations/", getParentRoute: () => se }), fo = xa.update({ id: "/organization-settings/", path: "/organization-settings/", getParentRoute: () => se }), go = Na.update({ id: "/members/", path: "/members/", getParentRoute: () => se }), yo = Ia.update({ id: "/chat/", path: "/chat/", getParentRoute: () => se }), vo = Ta.update({ id: "/teamspace/$teamspaceId", path: "/teamspace/$teamspaceId", getParentRoute: () => se }), bo = Sa.update({ id: "/project/$projectId", path: "/project/$projectId", getParentRoute: () => se }), wo = bt.update({ id: "/chat/$chatroomId", path: "/chat/$chatroomId", getParentRoute: () => se }), xo = { AuthedLayoutChatChatroomIdRoute: wo, AuthedLayoutProjectProjectIdRoute: bo, AuthedLayoutTeamspaceTeamspaceIdRoute: vo, AuthedLayoutChatIndexRoute: yo, AuthedLayoutMembersIndexRoute: go, AuthedLayoutOrganizationSettingsIndexRoute: fo, AuthedLayoutOrganizationsIndexRoute: po, AuthedLayoutTeamChatIndexRoute: ho }, No = se._addFileChildren(xo), Co = { AuthedLayoutRoute: No }, Io = _a._addFileChildren(Co), To = { IndexRoute: uo, AuthedRoute: Io, CreateOrganizationRoute: lo, ForgotPasswordRoute: co, SignInRoute: io, SignUpRoute: oo, VerifyAccountRoute: so, AcceptInvitationInvitationIdInvitationEmailRoute: mo }, So = re._addFileChildren(To)._addFileTypes();
function ko() {
  return createRouter$2({ routeTree: So, defaultPreload: "intent", defaultErrorComponent: Kt, defaultNotFoundComponent: () => Xt, scrollRestoration: true });
}
const Ni = createStartHandler({ createRouter: ko, getRouterManifest: pr })(dr);

const handlers = [
  { route: '', handler: _2RLvhK, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: $, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: Ni, lazy: false, middleware: true, method: undefined }
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
    return O$1(
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
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
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

export { mi as $, pa as A, ta as B, ws as C, xs as D, Es as E, di as F, pi as G, He as H, fi as I, li as J, gi as K, Lr as L, Me as M, Ns as N, O, ui as P, Qt as Q, hi as R, qs as S, Qs as T, xi as U, Dr as V, bi as W, wi as X, Ys as Y, Zs as Z, _s as _, aa as a, Ct as a0, mt as a1, te as a2, Nt as a3, fe as a4, va as a5, ut as a6, $r as a7, si as a8, ba as a9, Ge as aa, Pe as ab, Be as ac, Tt as ad, to as ae, ts as af, Ta as ag, Sa as ah, As as ai, nodeServer as aj, na as b, ce as c, de as d, ee as e, dt as f, ga as g, ya as h, ie as i, js as j, ke as k, lt as l, ii as m, ne as n, ci as o, la as p, Os as q, ra as r, ss as s, yi as t, ue as u, v, vi as w, Oe as x, ye as y, je as z };
//# sourceMappingURL=nitro.mjs.map
