import { types } from '@/lib/client';
const boundaryRegex = /^|\s$/;
const afterCharRegex = /^[\s,\.?!:]$/;

export const validateAgentMentions = (
  message: string,
  availableAgents: types.AgentWithRelationsDTO[]
) => {
  const validAgentMentions = new Map<types.AgentWithRelationsDTO, number[]>();
  const currentAgentsToPrompt = new Set<types.AgentWithRelationsDTO>();

  availableAgents?.forEach((agent) => {
    const agentMention = `@${agent.name}`;
    let startIndex = 0;
    const positions = [];

    while (true) {
      const index = message.indexOf(agentMention, startIndex);
      if (index === -1) break;

      // Check if the mention is a whole word
      const beforeChar = index === 0 ? ' ' : message[index - 1];
      const afterChar =
        index + agentMention.length >= message.length ? ' ' : message[index + agentMention.length];

      if (boundaryRegex.test(beforeChar) && afterCharRegex.test(afterChar)) {
        positions.push(index);
      }

      startIndex = index + 1;
    }

    if (positions.length > 0) {
      validAgentMentions.set(agent, positions);
      currentAgentsToPrompt.add(agent);
    }
  });

  return new Set(currentAgentsToPrompt);
};

export const validateAgentMentionsBeforeSend = (
  message: string,
  availableAgents: types.AgentWithRelationsDTO[]
) => {
  const validAgentMentions: types.AgentWithRelationsDTO[] = [];

  availableAgents?.forEach((agent) => {
    const agentMention = `@${agent.name}`;
    let startIndex = 0;

    while (true) {
      const index = message.indexOf(agentMention, startIndex);
      if (index === -1) break;

      // Check if the mention is a whole word
      const beforeChar = index === 0 ? ' ' : message[index - 1];
      const afterChar =
        index + agentMention.length >= message.length ? ' ' : message[index + agentMention.length];

      if (boundaryRegex.test(beforeChar) && afterCharRegex.test(afterChar)) {
        validAgentMentions.push(agent);
      }

      startIndex = index + 1;
    }
  });

  // Check for duplicates
  const agentCounts = validAgentMentions.reduce(
    (acc, agent) => {
      const agentId = agent.id;
      acc[agentId!] = (acc[agentId!] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const hasDuplicates = Object.values(agentCounts).some((count) => count > 1);
  const hasMoreThanFour = validAgentMentions.length > 4;
  const hasAgentMentions = validAgentMentions.length > 0;

  const isTheSameAgentType = validAgentMentions.every((agent: types.AgentWithRelationsDTO) => {
    if (validAgentMentions.length <= 1) return true;

    const firstItem = validAgentMentions[0] as types.AgentWithRelationsDTO;
    const isCurrentAgent = 'type' in agent && !('model' in agent);
    const isFirstAgent = 'type' in firstItem && !('model' in firstItem);

    // Both are agents or both are models
    if (isCurrentAgent && isFirstAgent) {
      return (agent as any).type === (firstItem as any).type;
    } else if (!isCurrentAgent && !isFirstAgent) {
      return (agent as any).model?.modelType === (firstItem as any).model?.modelType;
    }

    // One is agent, one is model - different types
    return false;
  });

  return {
    hasDuplicates,
    hasMoreThanFour,
    isTheSameAgentType,
    hasAgentMentions,
  };
};
