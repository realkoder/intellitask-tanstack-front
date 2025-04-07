import { types } from "../../lib/client";

export function addMemberByMemberRole(memberRole: types.MemberRole): types.ChatroomRole {
  switch (memberRole) {
    case 'OWNER':
      return 'ADMIN'
    case 'ADMIN':
      return 'MANAGER'
    case 'CONTRIBUTOR':
      return 'PROMPT_AIS'
    case 'VIEWER':
      return 'READ'
    default:
      return 'READ'
  }
}

/**
 * Generates chatroom members based on project/teamspace context and privacy settings
 */
export function generateChatroomMembers({
  currentUserId,
  project,
  teamspace,
}: {
  currentUserId: string;
  project?: types.ProjectDto;
  teamspace?: types.TeamspaceDto;
}): types.ChatroomMemberRequest[] {
  const chatroomMembers: types.ChatroomMemberRequest[] = [
    {
      chatroomId: '',
      role: 'ADMIN',
      userId: currentUserId
    }
  ];

  // Determine which members to add based on context and privacy
  if (project) {
    // Project-specific chatroom
    // Add all project members regardless of privacy setting
    if (project.members.length < 1) return []
    project.members.forEach(member => {
      // Don't add duplicates and skip if it's the current user (already added as admin)
      if (member.user.id !== currentUserId) {
        chatroomMembers.push({
          chatroomId: '',
          role: addMemberByMemberRole(member.role),
          userId: member.user.id
        });
      }
    });

    // If project is not private, also add teamspace members as READ-only
    if (!project.isPrivate && teamspace) {
      teamspace.members.forEach(member => {
        // Check if already added (avoid duplicates)
        const isAlreadyAdded = chatroomMembers.some(m => m.userId === member.user.id);

        if (!isAlreadyAdded) {
          chatroomMembers.push({
            chatroomId: '',
            role: addMemberByMemberRole(member.role),
            userId: member.user.id
          });
        }
      });
    }
  } else if (teamspace) {
    if (teamspace.members.length < 1) return []
    // Teamspace-level chatroom - add all teamspace members
    teamspace.members.forEach(member => {
      // Don't add duplicates and skip if it's the current user (already added as admin)
      if (member.user.id !== currentUserId) {
        chatroomMembers.push({
          chatroomId: '',
          role: addMemberByMemberRole(member.role),
          userId: member.user.id
        });
      }
    });
  }

  return chatroomMembers;
}

/**
 * Sorts chatrooms by the timestamp of their most recent message
 * Falls back to chatroom's updatedAt or createdAt if no messages exist
 * @param chatrooms Array of chatrooms to sort
 * @param ascending Whether to sort in ascending order (oldest first). Default is false (newest first)
 * @returns Sorted array of chatrooms
 */
export function sortChatroomsByLastMessage(
  chatrooms: types.ChatroomDto[],
  ascending = false
): types.ChatroomDto[] {
  return [...chatrooms].sort((a, b) => {
    // Get the most recent message from each chatroom
    const latestMessageA = a.messages?.length
      ? a.messages.reduce((latest, current) => {
        const latestDate = new Date(latest.createdAt).getTime();
        const currentDate = new Date(current.createdAt).getTime();
        return currentDate > latestDate ? current : latest;
      }, a.messages[0])
      : null;

    const latestMessageB = b.messages?.length
      ? b.messages.reduce((latest, current) => {
        const latestDate = new Date(latest.createdAt).getTime();
        const currentDate = new Date(current.createdAt).getTime();
        return currentDate > latestDate ? current : latest;
      }, b.messages[0])
      : null;

    // Get timestamps for comparison
    const timestampA = latestMessageA
      ? new Date(latestMessageA.createdAt).getTime()
      : new Date(a.updatedAt || a.createdAt).getTime();

    const timestampB = latestMessageB
      ? new Date(latestMessageB.createdAt).getTime()
      : new Date(b.updatedAt || b.createdAt).getTime();

    // Sort based on direction (ascending or descending)
    return ascending
      ? timestampA - timestampB  // Oldest first
      : timestampB - timestampA; // Newest first
  });
}


// Helper function to get the latest message time
export function getLatestMessageTime(chatroom: types.ChatroomDto): Date {
  return chatroom.messages?.length
    ? new Date(chatroom.messages.reduce(
      (latest: types.ChatMessage, current: types.ChatMessage) =>
        new Date(current.createdAt) > new Date(latest.createdAt) ? current : latest,
      chatroom.messages[0]
    ).createdAt)
    : new Date(chatroom.updatedAt);
}


export function getChatroomMember(chatroom: types.ChatroomDto, userId: string): types.ChatroomMemberDto | undefined {
  return chatroom.members.find(member => member.user.id === userId);
}
