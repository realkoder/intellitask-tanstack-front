import { atom } from 'jotai';
import { types } from '../../client';

export const teamspacesAtom = atom<types.TeamspaceDto[]>([]);
export const currentTeamspaceIdAtom = atom<string>();
export const currentProjectIdAtom = atom<string>();
export const chatroomsAtom = atom<types.ChatroomDto[]>([]);
export const currentChatroomAtom = atom<types.ChatroomDto>();
// Store which teamspaces are expanded/collapsed
export const openTeamspacesAtom = atom<Record<string, boolean>>({});
// Store the selected teamspace
export const selectedTeamspaceAtom = atom<types.TeamspaceDto | null>(null);

export const sidebarAtom = atom<'projects' | 'members' | 'search' | 'settings' | null>('projects');

// Store which projects are expanded/collapsed
export const openProjectsAtom = atom<Record<string, boolean>>({});

// Store thread messages organized by parent message ID
export interface ThreadMessagesState {
  [parentMessageId: string]: types.ChatMessage[];
}

export const threadMessagesAtom = atom<ThreadMessagesState>({});
