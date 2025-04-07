// ~/types/mock-types.ts
export interface MockReaction {
  id: string;
  emoji: string;
  count: number;
  userIds: string[];
}

export interface MockSource {
  id: string;
  title: string;
  url: string;
  content: string;
}

export interface MockAttachment {
  id: string;
  type: string;
  url: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  startTime?: string;
  endTime?: string;
  location?: string;
}

export interface MockEdit {
  timestamp: string;
  content: string;
  editedAt: string;
}

export interface MockMessageData {
  id: string;
  chatroomId: string;
  messageIndex: number;
  isAiGenerated: boolean;
  isDeleted: boolean;
  senderId: string;
  edits: MockEdit[];
  content: string;
  reasoning: string;
  parentMessageId: string | null;
  isThreadStarter: boolean;
  threadMessageCount: number;
  lastThreadMessageAt?: string;
  attachments: MockAttachment[];
  reactions: MockReaction[];
  threadMessages: any[];
  sources: MockSource[];
  createdAt: string;
  updatedAt: string;
  threadMessageIndex: number;
}

export interface MockMessage {
  identifier: string;
  isLastChunk: boolean;
  startIndex: number;
  totalChunks: number;
  data: MockMessageData;
}
