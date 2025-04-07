import T$1 from 'tiny-invariant';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function E(s) {
  return s.replace(/^\/|\/$/g, "");
}
const q = (s, a, n) => {
  T$1(n, "\u{1F6A8}splitImportFn required for the server functions server runtime, but was not provided.");
  const e = `/${E(a)}/${s}`;
  return Object.assign(n, { url: e, functionId: s });
};
function D(s) {
  return `https://${s}-intellitask-yrr2.encr.app`;
}
class L {
  constructor(a, n) {
    __publicField(this, "auth");
    __publicField(this, "chatrooms");
    __publicField(this, "chats");
    __publicField(this, "eventStreamer");
    __publicField(this, "fileManagement");
    __publicField(this, "fuck");
    __publicField(this, "openai");
    const e = new $(a, n != null ? n : {});
    this.auth = new C.ServiceClient(e), this.chatrooms = new m.ServiceClient(e), this.chats = new T.ServiceClient(e), this.eventStreamer = new f.ServiceClient(e), this.fileManagement = new b.ServiceClient(e), this.fuck = new I.ServiceClient(e), this.openai = new g.ServiceClient(e);
  }
}
var C;
((s) => {
  class a {
    constructor(e) {
      __publicField(this, "baseClient");
      this.baseClient = e;
    }
    async authRouter(e, t, i, r) {
      return this.baseClient.callAPI(e, `/api/auth/${t.map(encodeURIComponent).join("/")}`, i, r);
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
  s.ServiceClient = a;
})(C || (C = {}));
var m;
((s) => {
  class a {
    constructor(e) {
      __publicField(this, "baseClient");
      this.baseClient = e;
    }
    async addTeamspaceMember(e, t) {
      return await (await this.baseClient.callTypedAPI("POST", `/teamspaces/${encodeURIComponent(e)}/members`, JSON.stringify(t))).json();
    }
    async changeProjectMemberStatus(e, t, i) {
      await this.baseClient.callTypedAPI("PATCH", `/projects/${encodeURIComponent(e)}/kick-member/${encodeURIComponent(t)}`, JSON.stringify(i));
    }
    async changeTeamspaceMemberStatus(e, t, i) {
      await this.baseClient.callTypedAPI("PATCH", `/teamspaces/${encodeURIComponent(e)}/kick-member/${encodeURIComponent(t)}`, JSON.stringify(i));
    }
    async createChatroom(e) {
      return await (await this.baseClient.callTypedAPI("POST", "/chatrooms", JSON.stringify(e))).json();
    }
    async createProject(e) {
      return await (await this.baseClient.callTypedAPI("POST", "/projects", JSON.stringify(e))).json();
    }
    async createTeamspace(e) {
      return await (await this.baseClient.callTypedAPI("POST", "/teamspaces", JSON.stringify(e))).json();
    }
    async deleteChatroom(e) {
      await this.baseClient.callTypedAPI("DELETE", `/chatrooms/${encodeURIComponent(e)}`);
    }
    async deleteProject(e) {
      await this.baseClient.callTypedAPI("DELETE", `/projects/${encodeURIComponent(e)}`);
    }
    async deleteTeamspace(e) {
      await this.baseClient.callTypedAPI("DELETE", `/teamspaces/${encodeURIComponent(e)}`);
    }
    async getChatroom(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/chatrooms/${encodeURIComponent(e)}`)).json();
    }
    async getParticipatingChatroomsWithLatestMessages() {
      return await (await this.baseClient.callTypedAPI("GET", "/chatrooms/participating")).json();
    }
    async getParticipatingTeamspaces() {
      return await (await this.baseClient.callTypedAPI("GET", "/teamspaces/participating")).json();
    }
    async getProject(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/projects/${encodeURIComponent(e)}`)).json();
    }
    async getProjects(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/teamspaces/${encodeURIComponent(e)}/projects`)).json();
    }
    async getTeamspace(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/teamspaces/${encodeURIComponent(e)}`)).json();
    }
    async getTeamspaceMembers(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/teamspaces/${encodeURIComponent(e)}/members`)).json();
    }
    async getTeamspaces() {
      return await (await this.baseClient.callTypedAPI("GET", "/teamspaces")).json();
    }
    async getUserProjects() {
      return await (await this.baseClient.callTypedAPI("GET", "/user/projects")).json();
    }
    async removeTeamspaceMember(e) {
      await this.baseClient.callTypedAPI("DELETE", `/teamspaces/members/${encodeURIComponent(e)}`);
    }
    async updateChatroom(e, t) {
      await this.baseClient.callTypedAPI("PATCH", `/chatrooms/${encodeURIComponent(e)}`, JSON.stringify(t));
    }
    async updateProject(e, t) {
      return await (await this.baseClient.callTypedAPI("PATCH", `/projects/${encodeURIComponent(e)}`, JSON.stringify(t))).json();
    }
    async updateTeamspace(e, t) {
      await this.baseClient.callTypedAPI("PATCH", `/teamspaces/${encodeURIComponent(e)}`, JSON.stringify(t));
    }
    async updateTeamspaceMember(e, t) {
      await this.baseClient.callTypedAPI("PATCH", `/teamspaces/members/${encodeURIComponent(e)}`, JSON.stringify(t));
    }
  }
  s.ServiceClient = a;
})(m || (m = {}));
var T;
((s) => {
  class a {
    constructor(e) {
      __publicField(this, "baseClient");
      this.baseClient = e;
    }
    async chat(e) {
      const t = d({ chatroomId: e.chatroomId, userId: e.userId });
      return await this.baseClient.createStreamInOut("/chat", { query: t });
    }
    async createChatMessageReactions(e) {
      return await (await this.baseClient.callTypedAPI("POST", "/chatmessage-reactions", JSON.stringify(e))).json();
    }
    async deleteChatMessageReaction(e) {
      await this.baseClient.callTypedAPI("DELETE", `/chatmessage-reactions/${encodeURIComponent(e)}`);
    }
    async updateChatMessageReaction(e, t) {
      await this.baseClient.callTypedAPI("PATCH", `/chatmessage-reactions/${encodeURIComponent(e)}`, JSON.stringify(t));
    }
  }
  s.ServiceClient = a;
})(T || (T = {}));
var f;
((s) => {
  class a {
    constructor(e) {
      __publicField(this, "baseClient");
      this.baseClient = e;
    }
    async eventsStream() {
      return await this.baseClient.createStreamIn("/events");
    }
    async stats(e) {
      await this.baseClient.callTypedAPI("GET", `/stats/${encodeURIComponent(e)}`);
    }
  }
  s.ServiceClient = a;
})(f || (f = {}));
var b;
((s) => {
  class a {
    constructor(e) {
      __publicField(this, "baseClient");
      this.baseClient = e;
    }
    async getFilesByIds(e) {
      const t = d({ fileIds: e.fileIds.map((r) => r) });
      return await (await this.baseClient.callTypedAPI("GET", "/files", void 0, { query: t })).json();
    }
    async uploadFilesWithMetadata(e, t, i) {
      return this.baseClient.callAPI(e, "/upload-with-metadata", t, i);
    }
  }
  s.ServiceClient = a;
})(b || (b = {}));
var I;
((s) => {
  class a {
    constructor(e) {
      __publicField(this, "baseClient");
      this.baseClient = e;
    }
    async createAgent(e) {
      return await (await this.baseClient.callTypedAPI("POST", "/agents", JSON.stringify(e))).json();
    }
    async createConfigProfile(e) {
      return await (await this.baseClient.callTypedAPI("POST", "/config-profile", JSON.stringify(e))).json();
    }
    async createInstructionSet(e) {
      return await (await this.baseClient.callTypedAPI("POST", "/instruction-set", JSON.stringify(e))).json();
    }
    async createModel(e) {
      return await (await this.baseClient.callTypedAPI("POST", "/model", JSON.stringify(e))).json();
    }
    async createVoiceProfile(e) {
      return await (await this.baseClient.callTypedAPI("POST", "/voice-profile", JSON.stringify(e))).json();
    }
    async deleteAgent(e) {
      const t = d({ id: e.id });
      await this.baseClient.callTypedAPI("DELETE", "/agents:id", void 0, { query: t });
    }
    async deleteConfigProfile(e) {
      await this.baseClient.callTypedAPI("DELETE", `/config-profile/${encodeURIComponent(e)}`);
    }
    async deleteInstructionSet(e) {
      await this.baseClient.callTypedAPI("DELETE", `/instruction-set/${encodeURIComponent(e)}`);
    }
    async deleteModel(e) {
      await this.baseClient.callTypedAPI("DELETE", `/model/${encodeURIComponent(e)}`);
    }
    async deleteVoiceProfile(e) {
      await this.baseClient.callTypedAPI("DELETE", `/voice-profile/${encodeURIComponent(e)}`);
    }
    async getAgent(e) {
      const t = d({ id: e.id });
      return await (await this.baseClient.callTypedAPI("GET", "/agents:id", void 0, { query: t })).json();
    }
    async getConfigProfile(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/config-profile/${encodeURIComponent(e)}`)).json();
    }
    async getInstructionSet(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/instruction-set/${encodeURIComponent(e)}`)).json();
    }
    async getModel(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/model/${encodeURIComponent(e)}`)).json();
    }
    async getModels() {
      return await (await this.baseClient.callTypedAPI("GET", "/models")).json();
    }
    async getModelsByProvider(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/models/provider/${encodeURIComponent(e)}`)).json();
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
    async getVoiceProfile(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/voice-profile/${encodeURIComponent(e)}`)).json();
    }
    async getVoiceProfiles() {
      return await (await this.baseClient.callTypedAPI("GET", "/voice-profiles")).json();
    }
    async updateAgent(e) {
      await this.baseClient.callTypedAPI("PATCH", "/agents:id", JSON.stringify(e));
    }
    async updateConfigProfile(e, t) {
      await this.baseClient.callTypedAPI("PATCH", `/config-profile/${encodeURIComponent(e)}`, JSON.stringify(t));
    }
    async updateInstructionSet(e, t) {
      await this.baseClient.callTypedAPI("PATCH", `/instruction-set/${encodeURIComponent(e)}`, JSON.stringify(t));
    }
    async updateModel(e, t) {
      await this.baseClient.callTypedAPI("PATCH", `/model/${encodeURIComponent(e)}`, JSON.stringify(t));
    }
    async updateVoiceProfile(e, t) {
      await this.baseClient.callTypedAPI("PATCH", `/voice-profile/${encodeURIComponent(e)}`, JSON.stringify(t));
    }
  }
  s.ServiceClient = a;
})(I || (I = {}));
var g;
((s) => {
  class a {
    constructor(e) {
      __publicField(this, "baseClient");
      this.baseClient = e;
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
    async openaiStream(e, t, i) {
      return this.baseClient.callAPI(e, "/stream-chat", t, i);
    }
  }
  s.ServiceClient = a;
})(g || (g = {}));
function u(s) {
  const a = [];
  for (const n in s) {
    const e = Array.isArray(s[n]) ? s[n] : [s[n]];
    for (const t of e) a.push(`${n}=${encodeURIComponent(t)}`);
  }
  return a.join("&");
}
function d(s) {
  for (const a in s) s[a] === void 0 && delete s[a];
  return s;
}
function O(s) {
  return "encore.dev.headers." + btoa(JSON.stringify(s)).replaceAll("=", "").replaceAll("+", "-").replaceAll("/", "_");
}
class P {
  constructor(a, n) {
    __publicField(this, "ws");
    __publicField(this, "hasUpdateHandlers", []);
    let e = ["encore-ws"];
    n && e.push(O(n)), this.ws = new WebSocket(a, e), this.on("error", () => {
      this.resolveHasUpdateHandlers();
    }), this.on("close", () => {
      this.resolveHasUpdateHandlers();
    });
  }
  resolveHasUpdateHandlers() {
    const a = this.hasUpdateHandlers;
    this.hasUpdateHandlers = [];
    for (const n of a) n();
  }
  async hasUpdate() {
    await new Promise((a) => {
      this.hasUpdateHandlers.push(() => a(null));
    });
  }
  on(a, n) {
    this.ws.addEventListener(a, n);
  }
  off(a, n) {
    this.ws.removeEventListener(a, n);
  }
  close() {
    this.ws.close();
  }
}
class U {
  constructor(a, n) {
    __publicField(this, "socket");
    __publicField(this, "buffer", []);
    this.socket = new P(a, n), this.socket.on("message", (e) => {
      this.buffer.push(JSON.parse(e.data)), this.socket.resolveHasUpdateHandlers();
    });
  }
  close() {
    this.socket.close();
  }
  async send(a) {
    return this.socket.ws.readyState === WebSocket.CONNECTING && await new Promise((n) => {
      this.socket.ws.addEventListener("open", n, { once: true });
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
class k {
  constructor(a, n) {
    __publicField(this, "socket");
    __publicField(this, "buffer", []);
    this.socket = new P(a, n), this.socket.on("message", (e) => {
      this.buffer.push(JSON.parse(e.data)), this.socket.resolveHasUpdateHandlers();
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
class R {
  constructor(a, n) {
    __publicField(this, "socket");
    __publicField(this, "responseValue");
    let e;
    this.responseValue = new Promise((t) => e = t), this.socket = new P(a, n), this.socket.on("message", (t) => {
      e(JSON.parse(t.data));
    });
  }
  async response() {
    return this.responseValue;
  }
  close() {
    this.socket.close();
  }
  async send(a) {
    return this.socket.ws.readyState === WebSocket.CONNECTING && await new Promise((n) => {
      this.socket.ws.addEventListener("open", n, { once: true });
    }), this.socket.ws.send(JSON.stringify(a));
  }
}
const G = fetch.bind(void 0);
class $ {
  constructor(a, n) {
    __publicField(this, "baseURL");
    __publicField(this, "fetcher");
    __publicField(this, "headers");
    __publicField(this, "requestInit");
    __publicField(this, "authGenerator");
    var _a;
    if (this.baseURL = a, this.headers = {}, typeof globalThis == "object" && !("window" in globalThis) && (this.headers["User-Agent"] = "intellitask-yrr2-Generated-TS-Client (Encore/v1.46.16)"), this.requestInit = (_a = n.requestInit) != null ? _a : {}, n.fetcher !== void 0 ? this.fetcher = n.fetcher : this.fetcher = G, n.auth !== void 0) {
      const e = n.auth;
      typeof e == "function" ? this.authGenerator = e : this.authGenerator = () => e;
    }
  }
  async getAuthData() {
    let a;
    if (this.authGenerator) {
      const n = this.authGenerator();
      n instanceof Promise ? a = await n : a = n;
    }
    if (a) {
      const n = {};
      return n.headers = d({ cookie: a.cookie }), n;
    }
  }
  async createStreamInOut(a, n) {
    let { query: e, headers: t } = n != null ? n : {};
    const i = await this.getAuthData();
    i && (i.query && (e = { ...e, ...i.query }), i.headers && (t = { ...t, ...i.headers }));
    const r = e ? "?" + u(e) : "";
    return new U(this.baseURL + a + r, t);
  }
  async createStreamIn(a, n) {
    let { query: e, headers: t } = n != null ? n : {};
    const i = await this.getAuthData();
    i && (i.query && (e = { ...e, ...i.query }), i.headers && (t = { ...t, ...i.headers }));
    const r = e ? "?" + u(e) : "";
    return new k(this.baseURL + a + r, t);
  }
  async createStreamOut(a, n) {
    let { query: e, headers: t } = n != null ? n : {};
    const i = await this.getAuthData();
    i && (i.query && (e = { ...e, ...i.query }), i.headers && (t = { ...t, ...i.headers }));
    const r = e ? "?" + u(e) : "";
    return new R(this.baseURL + a + r, t);
  }
  async callTypedAPI(a, n, e, t) {
    return this.callAPI(a, n, e, { ...t, headers: { "Content-Type": "application/json", ...t == null ? void 0 : t.headers } });
  }
  async callAPI(a, n, e, t) {
    let { query: i, headers: r, ...S } = t != null ? t : {};
    const o = { ...this.requestInit, ...S, method: a, body: e != null ? e : null };
    o.headers = { ...this.headers, ...o.headers, ...r };
    const c = await this.getAuthData();
    c && (c.query && (i = { ...i, ...c.query }), c.headers && (o.headers = { ...o.headers, ...c.headers }));
    const v = i ? "?" + u(i) : "", l = await this.fetcher(this.baseURL + n + v, o);
    if (!l.ok) {
      let p = { code: "unknown", message: `request failed: status ${l.status}` };
      try {
        const h = await l.text();
        try {
          const w = JSON.parse(h);
          N(w) ? p = w : p.message += ": " + JSON.stringify(w);
        } catch {
          p.message += ": " + h;
        }
      } catch (h) {
        p.message += ": " + String(h);
      }
      throw new y(l.status, p);
    }
    return l;
  }
}
function N(s) {
  return s != null && J(s.code) && typeof s.message == "string" && (s.details === void 0 || s.details === null || typeof s.details == "object");
}
function J(s) {
  return s !== void 0 && Object.values(A).includes(s);
}
class y extends Error {
  constructor(a, n) {
    super(n.message);
    __publicField(this, "status");
    __publicField(this, "code");
    __publicField(this, "details");
    Object.defineProperty(this, "name", { value: "APIError", enumerable: false, configurable: true }), Object.setPrototypeOf == null ? this.__proto__ = y.prototype : Object.setPrototypeOf(this, y.prototype), Error.captureStackTrace !== void 0 && Error.captureStackTrace(this, this.constructor), this.status = a, this.code = n.code, this.details = n.details;
  }
}
var A = ((s) => (s.OK = "ok", s.Canceled = "canceled", s.Unknown = "unknown", s.InvalidArgument = "invalid_argument", s.DeadlineExceeded = "deadline_exceeded", s.NotFound = "not_found", s.AlreadyExists = "already_exists", s.PermissionDenied = "permission_denied", s.ResourceExhausted = "resource_exhausted", s.FailedPrecondition = "failed_precondition", s.Aborted = "aborted", s.OutOfRange = "out_of_range", s.Unimplemented = "unimplemented", s.Internal = "internal", s.Unavailable = "unavailable", s.DataLoss = "data_loss", s.Unauthenticated = "unauthenticated", s))(A || {});

export { D, L, q };
//# sourceMappingURL=client-BOYEY5wa.mjs.map
