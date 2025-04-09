import T$1 from 'tiny-invariant';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function j(a) {
  return a.replace(/^\/|\/$/g, "");
}
const J = (a, s, n) => {
  T$1(n, "\u{1F6A8}splitImportFn required for the server functions server runtime, but was not provided.");
  const e = `/${j(s)}/${a}`;
  return Object.assign(n, { url: e, functionId: a });
};
function H(a) {
  return "https://intellitask.io";
}
class L {
  constructor(s, n) {
    __publicField(this, "auth");
    __publicField(this, "chatrooms");
    __publicField(this, "chats");
    __publicField(this, "eventStreamer");
    __publicField(this, "fileManagement");
    __publicField(this, "fuck");
    __publicField(this, "openai");
    const e = new $(s, n != null ? n : {});
    this.auth = new C.ServiceClient(e), this.chatrooms = new f.ServiceClient(e), this.chats = new T.ServiceClient(e), this.eventStreamer = new m.ServiceClient(e), this.fileManagement = new I.ServiceClient(e), this.fuck = new b.ServiceClient(e), this.openai = new g.ServiceClient(e);
  }
}
var C;
((a) => {
  class s {
    constructor(e) {
      __publicField(this, "baseClient");
      this.baseClient = e;
    }
    async authRouter(e, t, i, r) {
      return this.baseClient.callAPI(e, `/api/auth/${t.map(encodeURIComponent).join("/")}`, i, r);
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
  a.ServiceClient = s;
})(C || (C = {}));
var f;
((a) => {
  class s {
    constructor(e) {
      __publicField(this, "baseClient");
      this.baseClient = e;
    }
    async addTeamspaceMember(e, t) {
      return await (await this.baseClient.callTypedAPI("POST", `/api/teamspaces/${encodeURIComponent(e)}/members`, JSON.stringify(t))).json();
    }
    async changeProjectMemberStatus(e, t, i) {
      await this.baseClient.callTypedAPI("PATCH", `/api/projects/${encodeURIComponent(e)}/kick-member/${encodeURIComponent(t)}`, JSON.stringify(i));
    }
    async changeTeamspaceMemberStatus(e, t, i) {
      await this.baseClient.callTypedAPI("PATCH", `/api/teamspaces/${encodeURIComponent(e)}/kick-member/${encodeURIComponent(t)}`, JSON.stringify(i));
    }
    async createChatroom(e) {
      return await (await this.baseClient.callTypedAPI("POST", "/api/chatrooms", JSON.stringify(e))).json();
    }
    async createProject(e) {
      return await (await this.baseClient.callTypedAPI("POST", "/api/projects", JSON.stringify(e))).json();
    }
    async createTeamspace(e) {
      return await (await this.baseClient.callTypedAPI("POST", "/api/teamspaces", JSON.stringify(e))).json();
    }
    async deleteChatroom(e) {
      await this.baseClient.callTypedAPI("DELETE", `/api/chatrooms/${encodeURIComponent(e)}`);
    }
    async deleteOneChatroomFile(e) {
      const t = o({ fileId: e.fileId });
      return await (await this.baseClient.callTypedAPI("DELETE", "/files/chatroom", void 0, { query: t })).json();
    }
    async deleteOneProjectFile(e) {
      const t = o({ fileId: e.fileId, projectId: e.projectId });
      return await (await this.baseClient.callTypedAPI("DELETE", "/files/project", void 0, { query: t })).json();
    }
    async deleteOneTeamspaceFile(e) {
      const t = o({ fileId: e.fileId });
      return await (await this.baseClient.callTypedAPI("DELETE", "/files/teamspace", void 0, { query: t })).json();
    }
    async deleteProject(e) {
      await this.baseClient.callTypedAPI("DELETE", `/api/projects/${encodeURIComponent(e)}`);
    }
    async deleteTeamspace(e) {
      await this.baseClient.callTypedAPI("DELETE", `/api/teamspaces/${encodeURIComponent(e)}`);
    }
    async getChatroom(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/chatrooms/${encodeURIComponent(e)}`)).json();
    }
    async getParticipatingChatroomsWithLatestMessages() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/chatrooms/participating")).json();
    }
    async getParticipatingTeamspaces() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/teamspaces/participating")).json();
    }
    async getProject(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/projects/${encodeURIComponent(e)}`)).json();
    }
    async getProjects(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/teamspaces/${encodeURIComponent(e)}/projects`)).json();
    }
    async getTeamspace(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/teamspaces/${encodeURIComponent(e)}`)).json();
    }
    async getTeamspaceMembers(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/teamspaces/${encodeURIComponent(e)}/members`)).json();
    }
    async getTeamspaces() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/teamspaces")).json();
    }
    async getUserProjects() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/user/projects")).json();
    }
    async removeTeamspaceMember(e) {
      await this.baseClient.callTypedAPI("DELETE", `/api/teamspaces/members/${encodeURIComponent(e)}`);
    }
    async updateChatroom(e, t) {
      await this.baseClient.callTypedAPI("PATCH", `/api/chatrooms/${encodeURIComponent(e)}`, JSON.stringify(t));
    }
    async updateProject(e, t) {
      return await (await this.baseClient.callTypedAPI("PATCH", `/api/projects/${encodeURIComponent(e)}`, JSON.stringify(t))).json();
    }
    async updateTeamspace(e, t) {
      await this.baseClient.callTypedAPI("PATCH", `/api/teamspaces/${encodeURIComponent(e)}`, JSON.stringify(t));
    }
    async updateTeamspaceMember(e, t) {
      await this.baseClient.callTypedAPI("PATCH", `/api/teamspaces/members/${encodeURIComponent(e)}`, JSON.stringify(t));
    }
  }
  a.ServiceClient = s;
})(f || (f = {}));
var T;
((a) => {
  class s {
    constructor(e) {
      __publicField(this, "baseClient");
      this.baseClient = e;
    }
    async chat(e) {
      const t = o({ chatroomId: e.chatroomId, userId: e.userId });
      return await this.baseClient.createStreamInOut("/api/chat", { query: t });
    }
    async createChatMessageReactions(e) {
      return await (await this.baseClient.callTypedAPI("POST", "/api/chatmessage-reactions", JSON.stringify(e))).json();
    }
    async deleteChatMessageReaction(e) {
      await this.baseClient.callTypedAPI("DELETE", `/api/chatmessage-reactions/${encodeURIComponent(e)}`);
    }
    async updateChatMessageReaction(e, t) {
      await this.baseClient.callTypedAPI("PATCH", `/api/chatmessage-reactions/${encodeURIComponent(e)}`, JSON.stringify(t));
    }
  }
  a.ServiceClient = s;
})(T || (T = {}));
var m;
((a) => {
  class s {
    constructor(e) {
      __publicField(this, "baseClient");
      this.baseClient = e;
    }
    async eventsStream() {
      return await this.baseClient.createStreamIn("/api/events");
    }
    async stats(e) {
      await this.baseClient.callTypedAPI("GET", `/stats/${encodeURIComponent(e)}`);
    }
  }
  a.ServiceClient = s;
})(m || (m = {}));
var I;
((a) => {
  class s {
    constructor(e) {
      __publicField(this, "baseClient");
      this.baseClient = e;
    }
    async deleteOneFile(e, t) {
      const i = o({ organizationId: t.organizationId });
      await this.baseClient.callTypedAPI("DELETE", `/files/${encodeURIComponent(e)}`, void 0, { query: i });
    }
    async getFilesByIds(e) {
      const t = o({ fileIds: e.fileIds.map((r) => r) });
      return await (await this.baseClient.callTypedAPI("GET", "/api/files", void 0, { query: t })).json();
    }
    async uploadFilesWithMetadata(e, t, i) {
      return this.baseClient.callAPI(e, "/api/upload-with-metadata", t, i);
    }
  }
  a.ServiceClient = s;
})(I || (I = {}));
var b;
((a) => {
  class s {
    constructor(e) {
      __publicField(this, "baseClient");
      this.baseClient = e;
    }
    async createAgent(e) {
      return await (await this.baseClient.callTypedAPI("POST", "/api/agents", JSON.stringify(e))).json();
    }
    async createConfigProfile(e) {
      return await (await this.baseClient.callTypedAPI("POST", "/api/config-profile", JSON.stringify(e))).json();
    }
    async createInstructionSet(e) {
      return await (await this.baseClient.callTypedAPI("POST", "/api/instruction-set", JSON.stringify(e))).json();
    }
    async createModel(e) {
      return await (await this.baseClient.callTypedAPI("POST", "/api/model", JSON.stringify(e))).json();
    }
    async createVoiceProfile(e) {
      return await (await this.baseClient.callTypedAPI("POST", "/api/voice-profile", JSON.stringify(e))).json();
    }
    async deleteAgent(e) {
      const t = o({ id: e.id });
      await this.baseClient.callTypedAPI("DELETE", "/api/agents:id", void 0, { query: t });
    }
    async deleteConfigProfile(e) {
      await this.baseClient.callTypedAPI("DELETE", `/api/config-profile/${encodeURIComponent(e)}`);
    }
    async deleteInstructionSet(e) {
      await this.baseClient.callTypedAPI("DELETE", `/api/instruction-set/${encodeURIComponent(e)}`);
    }
    async deleteModel(e) {
      await this.baseClient.callTypedAPI("DELETE", `/api/model/${encodeURIComponent(e)}`);
    }
    async deleteVoiceProfile(e) {
      await this.baseClient.callTypedAPI("DELETE", `/api/voice-profile/${encodeURIComponent(e)}`);
    }
    async getAgent(e) {
      const t = o({ id: e.id });
      return await (await this.baseClient.callTypedAPI("GET", "/api/agents:id", void 0, { query: t })).json();
    }
    async getConfigProfile(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/config-profile/${encodeURIComponent(e)}`)).json();
    }
    async getInstructionSet(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/instruction-set/${encodeURIComponent(e)}`)).json();
    }
    async getModel(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/model/${encodeURIComponent(e)}`)).json();
    }
    async getModels() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/models")).json();
    }
    async getModelsByProvider(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/models/provider/${encodeURIComponent(e)}`)).json();
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
    async getVoiceProfile(e) {
      return await (await this.baseClient.callTypedAPI("GET", `/api/voice-profile/${encodeURIComponent(e)}`)).json();
    }
    async getVoiceProfiles() {
      return await (await this.baseClient.callTypedAPI("GET", "/api/voice-profiles")).json();
    }
    async updateAgent(e) {
      await this.baseClient.callTypedAPI("PATCH", "/api/agents:id", JSON.stringify(e));
    }
    async updateConfigProfile(e, t) {
      await this.baseClient.callTypedAPI("PATCH", `/api/config-profile/${encodeURIComponent(e)}`, JSON.stringify(t));
    }
    async updateInstructionSet(e, t) {
      await this.baseClient.callTypedAPI("PATCH", `/api/instruction-set/${encodeURIComponent(e)}`, JSON.stringify(t));
    }
    async updateModel(e, t) {
      await this.baseClient.callTypedAPI("PATCH", `/api/model/${encodeURIComponent(e)}`, JSON.stringify(t));
    }
    async updateVoiceProfile(e, t) {
      await this.baseClient.callTypedAPI("PATCH", `/api/voice-profile/${encodeURIComponent(e)}`, JSON.stringify(t));
    }
  }
  a.ServiceClient = s;
})(b || (b = {}));
var g;
((a) => {
  class s {
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
  a.ServiceClient = s;
})(g || (g = {}));
function u(a) {
  const s = [];
  for (const n in a) {
    const e = Array.isArray(a[n]) ? a[n] : [a[n]];
    for (const t of e) s.push(`${n}=${encodeURIComponent(t)}`);
  }
  return s.join("&");
}
function o(a) {
  for (const s in a) a[s] === void 0 && delete a[s];
  return a;
}
function O(a) {
  return "encore.dev.headers." + btoa(JSON.stringify(a)).replaceAll("=", "").replaceAll("+", "-").replaceAll("/", "_");
}
class P {
  constructor(s, n) {
    __publicField(this, "ws");
    __publicField(this, "hasUpdateHandlers", []);
    let e = ["encore-ws"];
    n && e.push(O(n)), this.ws = new WebSocket(s, e), this.on("error", () => {
      this.resolveHasUpdateHandlers();
    }), this.on("close", () => {
      this.resolveHasUpdateHandlers();
    });
  }
  resolveHasUpdateHandlers() {
    const s = this.hasUpdateHandlers;
    this.hasUpdateHandlers = [];
    for (const n of s) n();
  }
  async hasUpdate() {
    await new Promise((s) => {
      this.hasUpdateHandlers.push(() => s(null));
    });
  }
  on(s, n) {
    this.ws.addEventListener(s, n);
  }
  off(s, n) {
    this.ws.removeEventListener(s, n);
  }
  close() {
    this.ws.close();
  }
}
class U {
  constructor(s, n) {
    __publicField(this, "socket");
    __publicField(this, "buffer", []);
    this.socket = new P(s, n), this.socket.on("message", (e) => {
      this.buffer.push(JSON.parse(e.data)), this.socket.resolveHasUpdateHandlers();
    });
  }
  close() {
    this.socket.close();
  }
  async send(s) {
    return this.socket.ws.readyState === WebSocket.CONNECTING && await new Promise((n) => {
      this.socket.ws.addEventListener("open", n, { once: true });
    }), this.socket.ws.send(JSON.stringify(s));
  }
  async next() {
    for await (const s of this) return s;
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
  constructor(s, n) {
    __publicField(this, "socket");
    __publicField(this, "buffer", []);
    this.socket = new P(s, n), this.socket.on("message", (e) => {
      this.buffer.push(JSON.parse(e.data)), this.socket.resolveHasUpdateHandlers();
    });
  }
  close() {
    this.socket.close();
  }
  async next() {
    for await (const s of this) return s;
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
  constructor(s, n) {
    __publicField(this, "socket");
    __publicField(this, "responseValue");
    let e;
    this.responseValue = new Promise((t) => e = t), this.socket = new P(s, n), this.socket.on("message", (t) => {
      e(JSON.parse(t.data));
    });
  }
  async response() {
    return this.responseValue;
  }
  close() {
    this.socket.close();
  }
  async send(s) {
    return this.socket.ws.readyState === WebSocket.CONNECTING && await new Promise((n) => {
      this.socket.ws.addEventListener("open", n, { once: true });
    }), this.socket.ws.send(JSON.stringify(s));
  }
}
const G = fetch.bind(void 0);
class $ {
  constructor(s, n) {
    __publicField(this, "baseURL");
    __publicField(this, "fetcher");
    __publicField(this, "headers");
    __publicField(this, "requestInit");
    __publicField(this, "authGenerator");
    var _a;
    if (this.baseURL = s, this.headers = {}, typeof globalThis == "object" && !("window" in globalThis) && (this.headers["User-Agent"] = "intellitask-yrr2-Generated-TS-Client (Encore/v1.46.16)"), this.requestInit = (_a = n.requestInit) != null ? _a : {}, n.fetcher !== void 0 ? this.fetcher = n.fetcher : this.fetcher = G, n.auth !== void 0) {
      const e = n.auth;
      typeof e == "function" ? this.authGenerator = e : this.authGenerator = () => e;
    }
  }
  async getAuthData() {
    let s;
    if (this.authGenerator) {
      const n = this.authGenerator();
      n instanceof Promise ? s = await n : s = n;
    }
    if (s) {
      const n = {};
      return n.headers = o({ cookie: s.cookie }), n;
    }
  }
  async createStreamInOut(s, n) {
    let { query: e, headers: t } = n != null ? n : {};
    const i = await this.getAuthData();
    i && (i.query && (e = { ...e, ...i.query }), i.headers && (t = { ...t, ...i.headers }));
    const r = e ? "?" + u(e) : "";
    return new U(this.baseURL + s + r, t);
  }
  async createStreamIn(s, n) {
    let { query: e, headers: t } = n != null ? n : {};
    const i = await this.getAuthData();
    i && (i.query && (e = { ...e, ...i.query }), i.headers && (t = { ...t, ...i.headers }));
    const r = e ? "?" + u(e) : "";
    return new k(this.baseURL + s + r, t);
  }
  async createStreamOut(s, n) {
    let { query: e, headers: t } = n != null ? n : {};
    const i = await this.getAuthData();
    i && (i.query && (e = { ...e, ...i.query }), i.headers && (t = { ...t, ...i.headers }));
    const r = e ? "?" + u(e) : "";
    return new R(this.baseURL + s + r, t);
  }
  async callTypedAPI(s, n, e, t) {
    return this.callAPI(s, n, e, { ...t, headers: { "Content-Type": "application/json", ...t == null ? void 0 : t.headers } });
  }
  async callAPI(s, n, e, t) {
    let { query: i, headers: r, ...v } = t != null ? t : {};
    const c = { ...this.requestInit, ...v, method: s, body: e != null ? e : null };
    c.headers = { ...this.headers, ...c.headers, ...r };
    const l = await this.getAuthData();
    l && (l.query && (i = { ...i, ...l.query }), l.headers && (c.headers = { ...c.headers, ...l.headers }));
    const S = i ? "?" + u(i) : "", p = await this.fetcher(this.baseURL + n + S, c);
    if (!p.ok) {
      let d = { code: "unknown", message: `request failed: status ${p.status}` };
      try {
        const h = await p.text();
        try {
          const w = JSON.parse(h);
          N(w) ? d = w : d.message += ": " + JSON.stringify(w);
        } catch {
          d.message += ": " + h;
        }
      } catch (h) {
        d.message += ": " + String(h);
      }
      throw new y(p.status, d);
    }
    return p;
  }
}
function N(a) {
  return a != null && q(a.code) && typeof a.message == "string" && (a.details === void 0 || a.details === null || typeof a.details == "object");
}
function q(a) {
  return a !== void 0 && Object.values(A).includes(a);
}
class y extends Error {
  constructor(s, n) {
    super(n.message);
    __publicField(this, "status");
    __publicField(this, "code");
    __publicField(this, "details");
    Object.defineProperty(this, "name", { value: "APIError", enumerable: false, configurable: true }), Object.setPrototypeOf == null ? this.__proto__ = y.prototype : Object.setPrototypeOf(this, y.prototype), Error.captureStackTrace !== void 0 && Error.captureStackTrace(this, this.constructor), this.status = s, this.code = n.code, this.details = n.details;
  }
}
var A = ((a) => (a.OK = "ok", a.Canceled = "canceled", a.Unknown = "unknown", a.InvalidArgument = "invalid_argument", a.DeadlineExceeded = "deadline_exceeded", a.NotFound = "not_found", a.AlreadyExists = "already_exists", a.PermissionDenied = "permission_denied", a.ResourceExhausted = "resource_exhausted", a.FailedPrecondition = "failed_precondition", a.Aborted = "aborted", a.OutOfRange = "out_of_range", a.Unimplemented = "unimplemented", a.Internal = "internal", a.Unavailable = "unavailable", a.DataLoss = "data_loss", a.Unauthenticated = "unauthenticated", a))(A || {});

export { H, J, L };
//# sourceMappingURL=client-DLHNdpZv.mjs.map
