import{l as Q,u as J,r as c,aa as R,ab as X,a2 as K,j as e,B as l,ah as w,g as ee,ai as E,k,ae as D,aY as se,W as ae,L as F,ad as te,aE as O,C as y,y as re,a as C,b as M,T as S,O as A,Q as U,V as L,c as I,h as z,aZ as le,U as B,d as T,ag as H,Z as W,Y as q}from"./client-CMvCw2jp.js";import{S as g,H as ie,M as ce,C as ne,a as de,b as oe}from"./collapsible-fEEhjg5O.js";import{D as me,a as xe,b as he,c as je,d as ue,e as pe,f as ge,g as fe}from"./dialog-idyyqogp.js";import{C as Ne}from"./checkbox-DmFmSC3J.js";import{L as _}from"./lock-CxUcGwOm.js";import{B as V,A as Z}from"./avatar-DxhaIZ2w.js";import{C as ve}from"./circle-plus-Cu8ULUag.js";import"./plus-sBaVN3vY.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=Q("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=Q("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);function $({teamspaceId:j,children:n}){const f=J(),[d,u]=c.useState(!1),i=R(X),N=R(K),[t,o]=c.useState({name:"",description:"",context:"",isPrivate:!1}),m=x=>{o({...t,[x.target.name]:x.target.value})},a=x=>{o({...t,isPrivate:x})},r=async x=>{if(x.preventDefault(),!t.name.trim()){k.error("Project name is required");return}u(!0);try{const v=D(),p=(await v.auth.handler()).userID,{data:h}=await v.chatrooms.createProject({teamspaceId:j,name:t.name,description:t.description,context:t.context,creatorId:p,isPrivate:t.isPrivate,members:[{projectId:"",userId:p,role:"OWNER",invitedByUserId:p,hasAccepted:!0}]});N(h.id),i(P=>P.map(b=>b.id===j?{...b,projects:[...b.projects,h]}:b)),k.success("Project created successfully"),f({to:"/project/$projectId",params:{projectId:h.id},viewTransition:!0})}catch(v){console.error("Error creating project:",v),k.error("Failed to create project")}finally{u(!1)}};return e.jsxs(me,{children:[e.jsx(xe,{asChild:!0,children:n||e.jsxs(l,{size:"sm",className:"bg-indigo-600 hover:bg-indigo-700 text-white hover:cursor-pointer",children:[e.jsx(G,{className:"h-4 w-4 mr-2"})," New Project"]})}),e.jsx(he,{className:"sm:max-w-[500px]",children:e.jsxs("form",{onSubmit:r,children:[e.jsxs(je,{children:[e.jsx("div",{className:"h-1.5 bg-emerald-500 w-full absolute top-0 left-0 rounded-t-lg"}),e.jsx(ue,{className:"text-xl mt-2",children:"Create New Project"}),e.jsx(pe,{children:"Create a project in this teamspace to organize your work."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsxs(w,{htmlFor:"project-name",children:["Project Name ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(ee,{id:"project-name",name:"name",value:t.name,onChange:m,placeholder:"e.g. Marketing Campaign",required:!0})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(w,{htmlFor:"project-description",children:"Description"}),e.jsx(E,{id:"project-description",name:"description",value:t.description,onChange:m,placeholder:"What is this project about?"})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(w,{htmlFor:"project-context",children:"Context"}),e.jsx(E,{id:"project-context",name:"context",value:t.context,onChange:m,placeholder:"Any specific context for this project"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(Ne,{id:"isPrivate",checked:t.isPrivate,onCheckedChange:a}),e.jsxs("div",{className:"grid gap-1.5 leading-none",children:[e.jsxs(w,{htmlFor:"isPrivate",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center",children:[e.jsx(_,{className:"h-3.5 w-3.5 mr-1.5 text-muted-foreground"}),"Make project private"]}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Private projects are only visible to invited members"})]})]})]}),e.jsxs(ge,{children:[e.jsx(fe,{asChild:!0,children:e.jsx(l,{variant:"outline",type:"button",disabled:d,children:"Cancel"})}),e.jsx(l,{type:"submit",className:"bg-emerald-600 hover:bg-emerald-700",disabled:d,children:d?"Creating...":"Create Project"})]})]})})]})}const Y=j=>{switch(j){case"OWNER":return"bg-green-100 text-green-800 border-green-200";case"ADMIN":return"bg-red-100 text-red-800 border-red-200";case"CONTRIBUTOR":return"bg-blue-100 text-blue-800 border-blue-200";case"VIEWER":return"bg-gray-100 text-gray-800 border-gray-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}};function we({members:j}){const[n,f]=c.useState(!1),[d,u]=c.useState(!1),i=5,N=j.filter((s,p,h)=>p===h.findIndex(P=>P.user?.id===s.user?.id)),t=N.filter(s=>!s.hasLeft),o=N.filter(s=>s.hasLeft),m=(s,p)=>{const h={OWNER:0,ADMIN:1,CONTRIBUTOR:2,VIEWER:3};return(h[s.role]||4)-(h[p.role]||4)},a=[...t].sort(m),r=[...o].sort(m),x=n?a:a.slice(0,t.length>=i?i:t.length),v=t.length>i&&!n;return e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{children:x.map(s=>e.jsx("div",{className:"py-1.5",children:e.jsxs("div",{className:"flex items-center justify-between group",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Z,{className:"h-7 w-7",children:s.user?.image?e.jsx("img",{src:s.user.image,alt:s.user?.name||"User"}):e.jsx("div",{className:"bg-gray-200 h-full w-full flex items-center justify-center text-gray-700 text-xs",children:(s.user?.name||"U").charAt(0)})}),e.jsx(S,{children:e.jsxs(A,{children:[e.jsx(U,{asChild:!0,children:e.jsx("span",{className:"text-sm font-medium truncate max-w-[120px]",children:s.user?.name||"Unknown User"})}),e.jsxs(L,{children:[e.jsx("p",{children:s.user?.name||"Unknown User"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:s.user?.email})]})]})})]}),e.jsx(H,{className:Y(s.role),children:s.role})]})},s.id))}),v&&e.jsx(l,{variant:"ghost",size:"sm",className:"w-full text-xs h-7",onClick:()=>f(!0),children:e.jsxs("span",{className:"flex items-center",children:["Show ",t.length-i," More ",e.jsx(W,{className:"ml-1 h-3 w-3"})]})}),n&&t.length>i&&e.jsx(l,{variant:"ghost",size:"sm",className:"w-full text-xs h-7",onClick:()=>f(!1),children:e.jsxs("span",{className:"flex items-center",children:["Show Less ",e.jsx(q,{className:"ml-1 h-3 w-3"})]})}),o.length>0&&e.jsxs(ne,{open:d,onOpenChange:u,className:"mt-3",children:[e.jsxs("div",{className:"flex items-center text-xs text-muted-foreground",children:[e.jsx("div",{className:"h-px bg-border flex-grow mr-2"}),e.jsx(de,{asChild:!0,children:e.jsxs("button",{className:"flex items-center gap-1 px-2 py-1 rounded-sm hover:bg-muted/50 transition-colors",children:[e.jsxs("span",{children:["Former Members (",o.length,")"]}),d?e.jsx(q,{className:"h-3 w-3"}):e.jsx(W,{className:"h-3 w-3"})]})}),e.jsx("div",{className:"h-px bg-border flex-grow ml-2"})]}),e.jsx(oe,{className:"pt-2",children:e.jsx("div",{className:"space-y-1.5",children:r.map(s=>e.jsx("div",{children:e.jsxs("div",{className:"relative flex items-center justify-between group py-1.5",children:[e.jsx("div",{className:"absolute inset-0 rounded-md bg-muted/30 pointer-events-none"}),e.jsxs("div",{className:"flex items-center gap-2 z-10",children:[e.jsxs("div",{className:"relative",children:[e.jsx(Z,{className:"h-7 w-7",children:s.user?.image?e.jsx("img",{src:s.user.image,alt:s.user?.name||"User",className:"filter grayscale"}):e.jsx("div",{className:"bg-gray-200 h-full w-full flex items-center justify-center text-gray-700 text-xs",children:(s.user?.name||"U").charAt(0)})}),e.jsx("div",{className:"absolute -bottom-1 -right-1 rounded-full w-3 h-3 bg-muted border border-background flex items-center justify-center",children:e.jsx("span",{className:"text-[8px]",children:"×"})})]}),e.jsx(S,{children:e.jsxs(A,{children:[e.jsx(U,{asChild:!0,children:e.jsx("span",{className:"text-sm font-medium truncate max-w-[120px] text-muted-foreground",children:s.user?.name||"Unknown User"})}),e.jsxs(L,{children:[e.jsx("p",{children:s.user?.name||"Unknown User"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:s.user?.email}),e.jsx("p",{className:"text-xs text-red-500 mt-1",children:"No longer a member"})]})]})})]}),e.jsx(H,{className:`${Y(s.role)} opacity-70`,children:s.role})]})},s.id))})})]})]})}const Ae=function(){const{teamspaceId:n}=se.useParams(),[f,d]=ae(X),[u,i]=c.useState(!1),[N,t]=c.useState(!0),[o,m]=c.useState("");c.useEffect(()=>{D().auth.handler().then(({userID:r})=>{m(r)})},[]);const a=f.find(r=>r.id===n);return c.useEffect(()=>{a&&t(!1)},[a]),N?e.jsxs("div",{className:"flex-1 flex flex-col",children:[e.jsx("div",{className:"h-1.5 bg-gray-200 w-full"}),e.jsxs("div",{className:"p-6 max-w-5xl mx-auto w-full flex-1",children:[e.jsxs("div",{className:"mb-8 relative",children:[e.jsx(g,{className:"h-10 w-60 mb-2"}),e.jsx(g,{className:"h-4 w-full max-w-md mb-4"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsx("div",{className:"md:col-span-2 space-y-6",children:e.jsxs("div",{children:[e.jsx("div",{className:"flex justify-between items-center mb-4",children:e.jsx(g,{className:"h-8 w-40"})}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(g,{className:"h-24 w-full"}),e.jsx(g,{className:"h-24 w-full"})]})]})}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(g,{className:"h-60 w-full"}),e.jsx(g,{className:"h-60 w-full"})]})]})]})]}):a?e.jsxs("div",{className:"flex-1 flex flex-col",children:[e.jsx("div",{className:"h-1.5 bg-indigo-500 w-full"}),e.jsxs("div",{className:"p-6 max-w-5xl mx-auto w-full flex-1",children:[e.jsxs("div",{className:"flex items-center text-sm text-muted-foreground mb-4",children:[e.jsxs(F,{to:"/chat",className:"flex items-center hover:text-foreground transition-colors",children:[e.jsx(ie,{className:"h-3.5 w-3.5 mr-1"}),"Home"]}),e.jsx(te,{className:"h-3.5 w-3.5 mx-1.5"}),e.jsxs("span",{className:"font-medium text-foreground flex items-center",children:[e.jsx(V,{className:"h-3.5 w-3.5 mr-1.5"}),"Teamspace"]})]}),e.jsxs("div",{className:"mb-8 relative",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700",children:e.jsx(V,{className:"h-5 w-5"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold",children:a.name}),e.jsxs("div",{className:"flex items-center mt-1",children:[e.jsx("span",{className:"inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20",children:"Teamspace"}),a.members&&a.members.length>0&&e.jsxs("span",{className:"ml-2 text-sm text-muted-foreground",children:[a.members.length," member",a.members.length!==1?"s":""]})]})]})]}),e.jsx("div",{className:"mt-2",children:e.jsx("p",{className:"text-muted-foreground",children:a.description||"No description provided"})}),e.jsx("div",{className:"absolute top-0 right-0",children:e.jsxs(l,{size:"sm",variant:"outline",children:[e.jsx(O,{className:"h-4 w-4 mr-2"})," Teamspace Settings"]})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"md:col-span-2 space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Projects"}),e.jsx($,{teamspaceId:a.id})]}),a.projects&&a.projects.length>0?e.jsx("div",{className:"space-y-3",children:a.projects.map(r=>e.jsx(y,{className:re("cursor-pointer transition-all border-l-4 border-l-transparent","hover:shadow-md hover:border-l-indigo-500 hover:bg-muted/30"),children:e.jsxs(F,{to:"/project/$projectId",params:{projectId:r.id},className:"block",children:[e.jsxs(C,{className:"pb-2",children:[e.jsxs(M,{className:"text-lg flex items-center",children:[r.name,r.isPrivate&&e.jsx(S,{children:e.jsxs(A,{children:[e.jsx(U,{asChild:!0,children:e.jsx("span",{children:e.jsx(_,{className:"h-3 w-3 ml-2 text-red-500"})})}),e.jsx(L,{children:e.jsx("p",{children:"Private"})})]})})]}),e.jsx(I,{children:r.description||"No description"})]}),e.jsx(z,{className:"pt-2 text-sm text-muted-foreground",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(le,{className:"h-4 w-4 mr-1"}),r.chatrooms?.length||0," chat",r.chatrooms?.length!==1?"s":""]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(B,{className:"h-4 w-4 mr-1"}),r.members?.length||1," member",r.members?.length!==1?"s":""]})]})})]})},r.id))}):e.jsxs("div",{className:"border rounded-lg p-8 text-center bg-muted/20",children:[e.jsx("h3",{className:"font-medium mb-2",children:"No projects yet"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Start by creating your first project in this teamspace"}),e.jsx($,{teamspaceId:n,children:e.jsxs(l,{variant:"outline",children:[e.jsx(G,{className:"h-4 w-4 mr-2"})," Create Project"]})})]})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Recent Activity"}),e.jsx("div",{className:"border rounded-lg p-4 bg-muted/20 text-center",children:e.jsx("p",{className:"text-muted-foreground",children:"Activity feed coming soon"})})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs(y,{className:"border-t-4 border-t-indigo-500",children:[e.jsxs(C,{children:[e.jsxs(M,{className:"flex items-center justify-between",children:[e.jsx("span",{children:"Teamspace Context"}),e.jsx(l,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0 hover:cursor-pointer",onClick:()=>i(!u),children:e.jsx(O,{className:"h-4 w-4"})})]}),e.jsx(I,{children:"Add context about what this teamspace is for"})]}),e.jsx(T,{children:u?e.jsxs("div",{className:"space-y-4",children:[e.jsx("textarea",{className:"w-full min-h-[150px] p-3 border rounded-md",placeholder:"Describe what this teamspace is used for...",value:a.context}),e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsx(l,{variant:"outline",size:"sm",onClick:()=>i(!1),children:"Cancel"}),e.jsx(l,{size:"sm",onClick:()=>i(!1),children:"Save"})]})]}):e.jsx("div",{className:"text-sm",children:e.jsx("p",{children:a.context})})})]}),e.jsxs(y,{className:"border-t-4 border-t-indigo-500",children:[e.jsxs(C,{children:[e.jsx(M,{children:"Members"}),e.jsx(I,{children:"People with access to this teamspace"})]}),e.jsx(T,{children:a.members&&a.members.length>0?e.jsx(we,{members:a.members}):e.jsx("div",{className:"text-sm text-muted-foreground",children:"Only you have access to this teamspace"})}),e.jsx(z,{children:e.jsx(ce,{type:"teamspace",teamspaceId:a.id,members:a.members||[],userId:o,onMembersChanged:()=>{D().chatrooms.getTeamspaces().then(({data:r})=>{r&&d(r)})},children:e.jsxs(l,{size:"sm",variant:"outline",className:"w-full border-indigo-600/20 text-indigo-700 hover:bg-indigo-50 hover:cursor-pointer",children:[e.jsx(B,{className:"h-4 w-4 mr-2"})," Manage Members"]})})})]}),e.jsxs(y,{className:"border-t-4 border-t-indigo-500",children:[e.jsx(C,{children:e.jsxs(M,{className:"flex items-center justify-between",children:[e.jsx("span",{children:"Teamspace Stats"}),e.jsx(l,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:e.jsx(be,{className:"h-4 w-4"})})]})}),e.jsx(T,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted-foreground",children:"Projects"}),e.jsx("span",{className:"font-medium",children:a.projects?.length||0})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted-foreground",children:"Members"}),e.jsx("span",{className:"font-medium",children:a.members?.length||0})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted-foreground",children:"Created"}),e.jsx("span",{className:"font-medium",children:new Date(a.createdAt).toLocaleDateString()})]})]})})]})]})]})]})]}):e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-8 text-center",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"No teamspace selected"}),e.jsx("p",{className:"text-muted-foreground mb-6",children:"Select a teamspace from the sidebar to view its details and projects"}),e.jsxs(l,{variant:"outline",children:[e.jsx(ve,{className:"h-4 w-4 mr-2"})," Create New Teamspace"]})]})};export{Ae as component};
