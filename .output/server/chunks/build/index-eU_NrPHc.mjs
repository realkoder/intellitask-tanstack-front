import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { E as En, A as At, m as mt, h as Rt, y as ya, H as Ho } from '../nitro/nitro.mjs';
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
import '@tanstack/react-router';
import 'jotai';
import 'sonner';
import '@vercel/analytics';
import 'zod';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-label';
import 'better-auth/react';
import 'better-auth/client/plugins';
import 'lucide-react';
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

const a = [{ identifier: "msg-1", isLastChunk: true, startIndex: 0, totalChunks: 1, data: { id: "msg-1", chatroomId: "general", messageIndex: 1, isAiGenerated: false, isDeleted: false, senderId: "mVc56wlgvqDkMUuMfqhp3goUpM4BrHgf", edits: [], content: "Hi team, I'm working on the new feature. Has anyone started on the API integration yet?", reasoning: "", parentMessageId: null, isThreadStarter: true, threadMessageCount: 2, lastThreadMessageAt: "2023-07-15T14:35:00Z", threadMessageIndex: 0, attachments: [], reactions: [{ id: "reaction-1", emoji: "\u{1F44D}", count: 2, userIds: ["user-456", "user-789"] }], threadMessages: [{ id: "msg-2", chatroomId: "general", messageIndex: 2, isAiGenerated: true, isDeleted: false, senderId: "ai-assistant", edits: [], content: `I've analyzed the project requirements and found that we need to integrate with the following APIs:

1. Payment Gateway API
2. User Authentication API
3. Data Storage API

Would you like me to provide more details on any of these?`, reasoning: "The user is asking about API integration. Based on the project context, there are three main APIs that need to be integrated. I'll list them out and offer to provide more details if needed.", parentMessageId: "msg-1", isThreadStarter: false, threadMessageIndex: 1, threadMessageCount: 0, attachments: [], reactions: [{ id: "reaction-2", emoji: "\u{1F64F}", count: 1, userIds: ["user-123"] }], sources: [{ id: "source-1", title: "Project Requirements Document", url: "https://company.sharepoint.com/docs/project-req-v2.pdf", content: "API integration requirements include payment processing, user authentication, and secure data storage." }], createdAt: "2023-07-15T14:32:00Z", updatedAt: "2023-07-15T14:32:00Z" }, { id: "msg-3", chatroomId: "general", messageIndex: 3, isAiGenerated: false, isDeleted: false, senderId: "user", edits: [{ timestamp: "2023-07-15T14:33:30Z", content: "I've already started on the Payment Gateway integration. Will share my progress by EOD.", editedAt: "2023-07-15T14:33:30Z" }], content: "I've already started on the Payment Gateway integration. Will share my progress by end of day.", reasoning: "", parentMessageId: "msg-1", isThreadStarter: false, threadMessageIndex: 2, threadMessageCount: 0, attachments: [], reactions: [], sources: [], createdAt: "2023-07-15T14:33:00Z", updatedAt: "2023-07-15T14:33:30Z" }], sources: [], createdAt: "2023-07-15T14:30:00Z", updatedAt: "2023-07-15T14:30:00Z" } }, { identifier: "msg-2", isLastChunk: true, startIndex: 0, totalChunks: 1, data: { id: "msg-2", chatroomId: "general", messageIndex: 2, isAiGenerated: true, isDeleted: false, senderId: "ai-assistant", edits: [], content: `I've analyzed the project requirements and found that we need to integrate with the following APIs:

1. Payment Gateway API
2. User Authentication API
3. Data Storage API

Would you like me to provide more details on any of these?`, reasoning: "The user is asking about API integration. Based on the project context, there are three main APIs that need to be integrated. I'll list them out and offer to provide more details if needed.", parentMessageId: "msg-1", isThreadStarter: false, threadMessageCount: 0, attachments: [], reactions: [{ id: "reaction-2", emoji: "\u{1F64F}", count: 1, userIds: ["user-123"] }], sources: [{ id: "source-1", title: "Project Requirements Document", url: "https://company.sharepoint.com/docs/project-req-v2.pdf", content: "API integration requirements include payment processing, user authentication, and secure data storage." }], createdAt: "2023-07-15T14:32:00Z", updatedAt: "2023-07-15T14:32:00Z" } }, { identifier: "msg-3", isLastChunk: true, startIndex: 0, totalChunks: 1, data: { id: "msg-3", chatroomId: "general", messageIndex: 3, isAiGenerated: false, isDeleted: false, senderId: "mVc56wlgvqDkMUuMfqhp3goUpM4BrHgf", edits: [{ timestamp: "2023-07-15T14:33:30Z", content: "I've already started on the Payment Gateway integration. Will share my progress by EOD.", editedAt: "2023-07-15T14:33:30Z" }], content: "I've already started on the Payment Gateway integration. Will share my progress by end of day.", reasoning: "", parentMessageId: "msg-1", isThreadStarter: false, threadMessageCount: 0, attachments: [], reactions: [], sources: [], createdAt: "2023-07-15T14:33:00Z", updatedAt: "2023-07-15T14:33:30Z" } }, { identifier: "msg-4", isLastChunk: true, startIndex: 0, totalChunks: 1, data: { id: "msg-4", chatroomId: "general", messageIndex: 4, isAiGenerated: false, isDeleted: false, senderId: "mVc56wlgvqDkMUuMfqhp3goUpM4BrHgf", edits: [], content: "Great! Can someone take on the Authentication API then? I'll handle the Data Storage part.", reasoning: "", parentMessageId: null, isThreadStarter: false, threadMessageCount: 0, attachments: [], reactions: [], sources: [], createdAt: "2023-07-15T14:35:00Z", updatedAt: "2023-07-15T14:35:00Z" } }, { identifier: "msg-5", isLastChunk: true, startIndex: 0, totalChunks: 1, data: { id: "msg-5", chatroomId: "general", messageIndex: 5, isAiGenerated: false, isDeleted: false, senderId: "mVc56wlgvqDkMUuMfqhp3goUpM4BrHgf", edits: [], content: "I'll take on the Authentication API. @ai-assistant, can you help me find the best authentication library for React Native?", reasoning: "", parentMessageId: null, isThreadStarter: true, threadMessageCount: 1, lastThreadMessageAt: "2023-07-15T14:41:00Z", attachments: [], reactions: [], threadMessages: [{ id: "msg-6", chatroomId: "general", messageIndex: 6, isAiGenerated: true, isDeleted: false, senderId: "ai-assistant", edits: [], content: `For React Native authentication, I recommend considering these options:

1. **Auth0 React Native SDK** - Comprehensive, well-documented, and supports multiple auth methods
2. **Firebase Authentication** - Easy integration with other Firebase services
3. **AWS Amplify** - Good if you're already using AWS
4. **Expo AuthSession** - Simplest option if you're using Expo

Based on your project requirements, Auth0 or Firebase would likely be the best fit since they offer social logins, MFA, and have good community support.`, reasoning: "The user is asking for authentication libraries specifically for React Native. I'll provide a list of the most popular and reliable options, with brief descriptions of their strengths. I'll also make a recommendation based on what would likely work best for their project based on previous context.", parentMessageId: "msg-5", isThreadStarter: false, threadMessageCount: 0, attachments: [], reactions: [{ id: "reaction-3", emoji: "\u{1F4AF}", count: 1, userIds: ["user-789"] }], sources: [{ id: "source-2", title: "Auth0 React Native Documentation", url: "https://auth0.com/docs/quickstart/native/react-native", content: "The Auth0 React Native SDK provides a universal login for React Native applications." }, { id: "source-3", title: "Firebase Authentication for React Native", url: "https://firebase.google.com/docs/auth/web/start", content: "Firebase Authentication provides backend services & SDKs to authenticate users to your app." }], createdAt: "2023-07-15T14:41:00Z", updatedAt: "2023-07-15T14:41:00Z" }], sources: [], createdAt: "2023-07-15T14:40:00Z", updatedAt: "2023-07-15T14:40:00Z" } }, { identifier: "msg-6", isLastChunk: true, startIndex: 0, totalChunks: 1, data: { id: "msg-6", chatroomId: "general", messageIndex: 6, isAiGenerated: true, isDeleted: false, senderId: "ai-assistant", edits: [], content: `For React Native authentication, I recommend considering these options:

1. **Auth0 React Native SDK** - Comprehensive, well-documented, and supports multiple auth methods
2. **Firebase Authentication** - Easy integration with other Firebase services
3. **AWS Amplify** - Good if you're already using AWS
4. **Expo AuthSession** - Simplest option if you're using Expo

Based on your project requirements, Auth0 or Firebase would likely be the best fit since they offer social logins, MFA, and have good community support.`, reasoning: "The user is asking for authentication libraries specifically for React Native. I'll provide a list of the most popular and reliable options, with brief descriptions of their strengths. I'll also make a recommendation based on what would likely work best for their project based on previous context.", parentMessageId: "msg-5", isThreadStarter: false, threadMessageCount: 0, attachments: [], reactions: [{ id: "reaction-3", emoji: "\u{1F4AF}", count: 1, userIds: ["user-789"] }], sources: [{ id: "source-2", title: "Auth0 React Native Documentation", url: "https://auth0.com/docs/quickstart/native/react-native", content: "The Auth0 React Native SDK provides a universal login for React Native applications." }, { id: "source-3", title: "Firebase Authentication for React Native", url: "https://firebase.google.com/docs/auth/web/start", content: "Firebase Authentication provides backend services & SDKs to authenticate users to your app." }], createdAt: "2023-07-15T14:41:00Z", updatedAt: "2023-07-15T14:41:00Z" } }, { identifier: "msg-7", isLastChunk: true, startIndex: 0, totalChunks: 1, data: { id: "msg-7", chatroomId: "general", messageIndex: 7, isAiGenerated: false, isDeleted: false, senderId: "user-101", edits: [], content: "I've created a new repository for our project. Here's the link to get started:", reasoning: "", parentMessageId: null, isThreadStarter: false, threadMessageCount: 0, attachments: [{ id: "attachment-1", type: "file", url: "https://github.com/company/project-repo", title: "Project Repository", description: "Main repository for the team project", thumbnailUrl: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" }], reactions: [{ id: "reaction-4", emoji: "\u{1F680}", count: 3, userIds: ["user-456", "user-789", "user-101"] }], sources: [], createdAt: "2023-07-15T15:00:00Z", updatedAt: "2023-07-15T15:00:00Z" } }, { identifier: "msg-8", isLastChunk: true, startIndex: 0, totalChunks: 1, data: { id: "msg-8", chatroomId: "general", messageIndex: 8, isAiGenerated: false, isDeleted: false, senderId: "mVc56wlgvqDkMUuMfqhp3goUpM4BrHgf", edits: [], content: "Just joined the team. I'll be handling the UI/UX part of the project. Can someone catch me up on what's been decided so far?", reasoning: "", parentMessageId: null, isThreadStarter: true, threadMessageCount: 1, lastThreadMessageAt: "2023-07-15T15:16:00Z", attachments: [], reactions: [{ id: "reaction-5", emoji: "\u{1F44B}", count: 4, userIds: ["user-123", "user-456", "user-789", "ai-assistant"] }], threadMessages: [{ id: "msg-9", chatroomId: "general", messageIndex: 9, isAiGenerated: true, isDeleted: false, senderId: "ai-assistant", edits: [], content: `Welcome to the team! Here's a summary of what's been decided so far:

**Project Structure:**
- Repository created: https://github.com/company/project-repo

**API Integrations:**
- Payment Gateway: Being handled by @user-456
- Authentication: @user-789 will implement using Auth0 or Firebase
- Data Storage: @user-123 is taking this on

**Tech Stack:**
- Frontend: React Native
- Backend: Not explicitly mentioned yet

The team is currently in the early stages of implementation. As the UI/UX lead, you might want to coordinate with everyone to ensure consistent design across all features.`, reasoning: "A new team member has joined and asked for a summary of decisions made so far. I'll compile information from the previous messages to provide a comprehensive but concise overview of the project status, team assignments, and technology decisions that have been made.", parentMessageId: "msg-8", isThreadStarter: false, threadMessageCount: 0, attachments: [], reactions: [{ id: "reaction-6", emoji: "\u{1F44D}", count: 1, userIds: ["user-101"] }], sources: [], createdAt: "2023-07-15T15:16:00Z", updatedAt: "2023-07-15T15:16:00Z" }], sources: [], createdAt: "2023-07-15T15:15:00Z", updatedAt: "2023-07-15T15:15:00Z" } }, { identifier: "msg-9", isLastChunk: true, startIndex: 0, totalChunks: 1, data: { id: "msg-9", chatroomId: "general", messageIndex: 9, isAiGenerated: true, isDeleted: false, senderId: "ai-assistant", edits: [], content: `Welcome to the team! Here's a summary of what's been decided so far:

**Project Structure:**
- Repository created: https://github.com/company/project-repo

**API Integrations:**
- Payment Gateway: Being handled by @user-456
- Authentication: @user-789 will implement using Auth0 or Firebase
- Data Storage: @user-123 is taking this on

**Tech Stack:**
- Frontend: React Native
- Backend: Not explicitly mentioned yet

The team is currently in the early stages of implementation. As the UI/UX lead, you might want to coordinate with everyone to ensure consistent design across all features.`, reasoning: "A new team member has joined and asked for a summary of decisions made so far. I'll compile information from the previous messages to provide a comprehensive but concise overview of the project status, team assignments, and technology decisions that have been made.", parentMessageId: "msg-8", isThreadStarter: false, threadMessageCount: 0, attachments: [], reactions: [{ id: "reaction-6", emoji: "\u{1F44D}", count: 1, userIds: ["user-101"] }], sources: [], createdAt: "2023-07-15T15:16:00Z", updatedAt: "2023-07-15T15:16:00Z" } }, { identifier: "msg-10", isLastChunk: true, startIndex: 0, totalChunks: 1, data: { id: "msg-10", chatroomId: "general", messageIndex: 10, isAiGenerated: false, isDeleted: false, senderId: "user-101", edits: [], content: "I've scheduled a team meeting for tomorrow at 10 AM to discuss our progress and next steps. Please make sure to attend.", reasoning: "", parentMessageId: null, isThreadStarter: false, threadMessageCount: 0, attachments: [{ id: "attachment-2", type: "calendar", url: "https://calendar.google.com/calendar/event?id=123456", title: "Team Progress Meeting", description: "Weekly sync to discuss project progress and blockers", startTime: "2023-07-16T10:00:00Z", endTime: "2023-07-16T11:00:00Z", location: "Google Meet" }], reactions: [], sources: [], createdAt: "2023-07-15T16:00:00Z", updatedAt: "2023-07-15T16:00:00Z" } }], he = function({ ...o }) {
  const i = En.useRouteContext(), [l] = useState(i.userId), [s, M] = useState(false), [d, m] = useState(""), c = useRef(null);
  useEffect(() => {
    var _a;
    (_a = c.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [a]);
  const u = jsxs(At, { value: d, onChange: (e) => m(e.target.value), hasMessages: a.length > 0, children: [jsx(mt, { placeholder: s ? "Connecting..." : "Type a message...", autoFocus: true, disabled: s }), jsx(Rt, { disabled: s || !d.trim() })] }), h = a.filter((e) => (!e.data.isAiGenerated || e.data.isAiGenerated && e.data.parentMessageId) && !e.data.parentMessageId);
  return a.length === 0 ? jsx("div", { className: "flex-1 flex flex-col h-full justify-center", ...o, children: jsx("div", { className: "px-2 py-4 max-w-4xl mx-auto w-full", children: u }) }) : jsxs("div", { className: "flex-1 flex flex-col h-full overflow-y-auto", ...o, children: [jsx(ya, { scrollButtonAlignment: "center", className: "overflow-y-auto", children: jsxs("div", { className: "max-w-4xl mx-auto w-full px-4 py-8 space-y-4", children: [h.map((e) => {
    var _a;
    return jsx(Ho, { message: e, userID: l, userImage: (_a = i.user) == null ? void 0 : _a.image }, e.data.id);
  }), jsx("div", { ref: c })] }) }), jsx("div", { className: "px-2 py-4 max-w-4xl mx-auto w-full overflow-y-hidden", children: u })] });
};

export { he as component };
//# sourceMappingURL=index-eU_NrPHc.mjs.map
