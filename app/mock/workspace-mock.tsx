import { types } from "~/lib/client"

// Mock data that follows the TeamspaceDto structure
export const teamspaceStructure: types.TeamspaceDto[] = [
  {
    id: "ws-personal",
    name: "Personal Space",
    description: "Your personal teamspace",
    context: "This teamspace is for my personal projects and notes. It contains resources that I use for individual work and personal knowledge management. Feel free to add any content that relates to your personal interests and tasks.",
    creatorId: "user-123",
    createdAt: new Date(2023, 1, 15).toISOString(),
    updatedAt: new Date(2023, 1, 15).toISOString(),
    members: [],
    files: [],
    projects: [
      {
        id: "proj-notes",
        name: "My Notes",
        description: "Personal notes and documentation",
        context: "This project contains my personal notes and documentation on various topics. It's where I store information for future reference, ideas I want to remember, and general knowledge I'm collecting. AI assistants should help organize, summarize, and enhance these notes.",
        teamspaceId: "ws-personal",
        creatorId: "user-123",
        isPrivate: false,
        createdAt: new Date(2023, 1, 15).toISOString(),
        updatedAt: new Date(2023, 1, 15).toISOString(),
        members: [],
        chatrooms: [
          {
            id: "chat-notes-general",
            name: "General Notes",
            type: "PROJECT_CHATROOM",
            chatroomCreatorId: "user-123",
            projectId: "proj-notes",
            isPrivate: false,
            createdAt: new Date(2023, 1, 16).toISOString(),
            updatedAt: new Date(2023, 1, 16).toISOString(),
            members: [],
            messages: [],
            agents: []
          },
          {
            id: "chat-notes-ideas",
            name: "Ideas & Brainstorming",
            type: "PROJECT_CHATROOM",
            chatroomCreatorId: "user-123",
            projectId: "proj-notes",
            isPrivate: false,
            createdAt: new Date(2023, 1, 17).toISOString(),
            updatedAt: new Date(2023, 1, 17).toISOString(),
            members: [],
            messages: [],
            agents: []
          }
        ],
        files: []
      },
      {
        id: "proj-tasks",
        name: "Personal Tasks",
        description: "Task management for personal work",
        context: "This project is for managing my personal tasks and to-do lists. It helps me keep track of deadlines, priorities, and progress on personal activities. AI assistants should help with task organization, reminders, and productivity suggestions.",
        teamspaceId: "ws-personal",
        creatorId: "user-123",
        isPrivate: true,
        createdAt: new Date(2023, 1, 15).toISOString(),
        updatedAt: new Date(2023, 1, 15).toISOString(),
        members: [],
        chatrooms: [
          {
            id: "chat-tasks-planning",
            name: "Task Planning",
            type: "PROJECT_CHATROOM",
            chatroomCreatorId: "user-123",
            projectId: "proj-tasks",
            isPrivate: true,
            createdAt: new Date(2023, 1, 18).toISOString(),
            updatedAt: new Date(2023, 1, 18).toISOString(),
            members: [],
            messages: [],
            agents: []
          }
        ],
        files: []
      },
    ],
  },
  {
    id: "ws-team-alpha",
    name: "Team Alpha",
    description: "Teamspace for Team Alpha",
    context: "Team Alpha is our core product development team. This teamspace contains all resources, discussions, and projects related to our product strategy and execution. AI assistants in this teamspace should provide technical insights, help with project planning, and support product development tasks.",
    creatorId: "user-123",
    createdAt: new Date(2023, 2, 10).toISOString(),
    updatedAt: new Date(2023, 2, 10).toISOString(),
    members: [],
    files: [],
    projects: [
      {
        id: "proj-marketing",
        name: "Marketing Campaign",
        description: "Q2 2023 Marketing Campaign",
        context: "This project is dedicated to planning and executing our Q2 2023 marketing campaign. It includes market research, content creation, campaign strategy, and performance tracking. AI assistants should help with content ideas, audience targeting suggestions, and marketing analytics.",
        teamspaceId: "ws-team-alpha",
        creatorId: "user-456",
        isPrivate: false,
        createdAt: new Date(2023, 2, 15).toISOString(),
        updatedAt: new Date(2023, 2, 15).toISOString(),
        members: [],
        chatrooms: [
          {
            id: "chat-marketing-strategy",
            name: "Campaign Strategy",
            type: "PROJECT_CHATROOM",
            chatroomCreatorId: "user-456",
            projectId: "proj-marketing",
            isPrivate: false,
            createdAt: new Date(2023, 2, 16).toISOString(),
            updatedAt: new Date(2023, 2, 16).toISOString(),
            members: [],
            messages: [],
            agents: []
          },
          {
            id: "chat-marketing-content",
            name: "Content Creation",
            type: "PROJECT_CHATROOM",
            chatroomCreatorId: "user-456",
            projectId: "proj-marketing",
            isPrivate: false,
            createdAt: new Date(2023, 2, 17).toISOString(),
            updatedAt: new Date(2023, 2, 17).toISOString(),
            members: [],
            messages: [],
            agents: []
          }
        ],
        files: []
      },
      {
        id: "proj-launch",
        name: "Product Launch",
        description: "New product launch coordination",
        context: "This project coordinates all activities related to our upcoming product launch. It includes timeline planning, team coordination, go-to-market strategy, and launch event details. AI assistants should help with project management, timeline tracking, and cross-team coordination.",
        teamspaceId: "ws-team-alpha",
        creatorId: "user-456",
        isPrivate: false,
        createdAt: new Date(2023, 3, 1).toISOString(),
        updatedAt: new Date(2023, 3, 1).toISOString(),
        members: [],
        chatrooms: [],
        files: []
      }
    ],
  },
  {
    id: "ws-freelance",
    name: "Freelance Work",
    description: "Freelance projects and clients",
    context: "This teamspace contains all my freelance projects and client work. The resources here should be kept confidential and only shared with the respective clients. AI assistance in this teamspace should focus on providing professional, client-ready outputs and helping with project management for multiple clients simultaneously.",
    creatorId: "user-123",
    createdAt: new Date(2023, 4, 5).toISOString(),
    updatedAt: new Date(2023, 4, 5).toISOString(),
    members: [],
    files: [],
    projects: [
      {
        id: "proj-client-alpha",
        name: "Client Alpha",
        description: "Work for Client Alpha",
        context: "This project contains all work related to Client Alpha, including requirements, deliverables, and communications. Client Alpha is a tech company needing web development services. AI assistants should help with professional communication drafts, technical suggestions, and project timeline management.",
        teamspaceId: "ws-freelance",
        creatorId: "user-123",
        isPrivate: true,
        createdAt: new Date(2023, 4, 10).toISOString(),
        updatedAt: new Date(2023, 4, 10).toISOString(),
        members: [],
        chatrooms: [
          {
            id: "chat-client-alpha-requirements",
            name: "Project Requirements",
            type: "PROJECT_CHATROOM",
            chatroomCreatorId: "user-123",
            projectId: "proj-client-alpha",
            isPrivate: true,
            createdAt: new Date(2023, 4, 11).toISOString(),
            updatedAt: new Date(2023, 4, 11).toISOString(),
            members: [],
            messages: [],
            agents: []
          }
        ],
        files: []
      },
      {
        id: "proj-client-beta",
        name: "Client Beta",
        description: "Work for Client Beta",
        context: "This project contains all work related to Client Beta, including requirements, deliverables, and communications. Client Beta is a retail business needing marketing assistance. AI assistants should help with marketing strategy, content creation, and maintaining professional client relationships.",
        teamspaceId: "ws-freelance",
        creatorId: "user-123",
        isPrivate: true,
        createdAt: new Date(2023, 4, 15).toISOString(),
        updatedAt: new Date(2023, 4, 15).toISOString(),
        members: [],
        chatrooms: [],
        files: []
      },
    ],
  },
  // Adding a 4th teamspace
  {
    id: "ws-engineering",
    name: "Engineering",
    description: "Engineering department teamspace",
    context: "This teamspace is dedicated to our engineering team and technical development efforts. All software architecture discussions, code reviews, and technical documentation should be stored here. AI assistance in this teamspace should provide technical insights, coding help, and support for technical problem-solving.",
    creatorId: "user-789",
    createdAt: new Date(2023, 3, 15).toISOString(),
    updatedAt: new Date(2023, 3, 15).toISOString(),
    members: [],
    files: [],
    projects: [
      {
        id: "proj-dev",
        name: "Development",
        description: "Software development projects",
        context: "This project encompasses our software development initiatives, including backend systems, APIs, and database architecture. It's where our engineering team collaborates on code, reviews, and technical discussions. AI assistants should provide technical insights, coding suggestions, and help with software architecture decisions.",
        teamspaceId: "ws-engineering",
        creatorId: "user-789",
        isPrivate: false,
        createdAt: new Date(2023, 3, 16).toISOString(),
        updatedAt: new Date(2023, 3, 16).toISOString(),
        members: [],
        chatrooms: [
          {
            id: "chat-dev-backend",
            name: "Backend Development",
            type: "PROJECT_CHATROOM",
            chatroomCreatorId: "user-789",
            projectId: "proj-dev",
            isPrivate: false,
            createdAt: new Date(2023, 3, 17).toISOString(),
            updatedAt: new Date(2023, 3, 17).toISOString(),
            members: [],
            messages: [],
            agents: []
          }
        ],
        files: []
      }
    ],
  },
  // Adding extra teamspaces (5+) that will appear in the "Show more" selector
  {
    id: "ws-design",
    name: "Design Team",
    description: "UI/UX Design Team",
    context: "This teamspace is for our design team to collaborate on UI/UX projects. It's where we store design assets, share mockups, and discuss user experience improvements. AI assistance in this teamspace should focus on design principles, user experience considerations, and help with generating design ideas.",
    creatorId: "user-456",
    createdAt: new Date(2023, 5, 1).toISOString(),
    updatedAt: new Date(2023, 5, 1).toISOString(),
    members: [],
    files: [],
    projects: [
      {
        id: "proj-ui-design",
        name: "UI Design",
        description: "User interface design projects",
        context: "This project focuses on user interface design across our products. It includes mockups, design systems, user experience flows, and visual elements. AI assistants should provide design feedback, UI/UX best practices, and help with design ideation and refinement.",
        teamspaceId: "ws-design",
        creatorId: "user-456",
        isPrivate: false,
        createdAt: new Date(2023, 5, 2).toISOString(),
        updatedAt: new Date(2023, 5, 2).toISOString(),
        members: [],
        chatrooms: [
          {
            id: "chat-design-mobile",
            name: "Mobile UI",
            type: "PROJECT_CHATROOM",
            chatroomCreatorId: "user-456",
            projectId: "proj-ui-design",
            isPrivate: false,
            createdAt: new Date(2023, 5, 3).toISOString(),
            updatedAt: new Date(2023, 5, 3).toISOString(),
            members: [],
            messages: [],
            agents: []
          }
        ],
        files: []
      }
    ],
  },
  {
    id: "ws-hr",
    name: "Human Resources",
    description: "HR Department",
    context: "This teamspace is dedicated to human resources operations, including recruitment, employee onboarding, and company policies. All HR-related documents and discussions should be kept here. AI assistance in this teamspace should focus on HR best practices, policy compliance, and supporting recruitment activities.",
    creatorId: "user-234",
    createdAt: new Date(2023, 6, 1).toISOString(),
    updatedAt: new Date(2023, 6, 1).toISOString(),
    members: [],
    files: [],
    projects: [
      {
        id: "proj-recruiting",
        name: "Recruiting",
        description: "Recruiting and hiring",
        context: "This project manages our recruiting and hiring processes, including job postings, candidate evaluations, and onboarding plans. It helps HR track applicants and hiring progress. AI assistants should help with job description refinement, interview question suggestions, and candidate evaluation frameworks.",
        teamspaceId: "ws-hr",
        creatorId: "user-234",
        isPrivate: true,
        createdAt: new Date(2023, 6, 2).toISOString(),
        updatedAt: new Date(2023, 6, 2).toISOString(),
        members: [],
        chatrooms: [
          {
            id: "chat-hr-interviews",
            name: "Interview Planning",
            type: "PROJECT_CHATROOM",
            chatroomCreatorId: "user-234",
            projectId: "proj-recruiting",
            isPrivate: true,
            createdAt: new Date(2023, 6, 3).toISOString(),
            updatedAt: new Date(2023, 6, 3).toISOString(),
            members: [],
            messages: [],
            agents: []
          }
        ],
        files: []
      }
    ],
  },
  {
    id: "ws-finance",
    name: "Finance",
    description: "Finance Department",
    context: "This teamspace is for our finance team to manage budgeting, financial planning, and accounting activities. All financial documents, reports, and discussions should be stored here. AI assistance in this teamspace should provide insights on financial analysis, budget optimization, and help with financial reporting.",
    creatorId: "user-345",
    createdAt: new Date(2023, 7, 1).toISOString(),
    updatedAt: new Date(2023, 7, 1).toISOString(),
    members: [],
    files: [],
    projects: [
      {
        id: "proj-budget",
        name: "Budget Planning",
        description: "Annual budget planning",
        context: "This project is for annual budget planning and financial management. It includes revenue projections, expense allocations, department budgets, and financial reporting. AI assistants should help with financial analysis, budget optimization suggestions, and reporting preparation.",
        teamspaceId: "ws-finance",
        creatorId: "user-345",
        isPrivate: true,
        createdAt: new Date(2023, 7, 2).toISOString(),
        updatedAt: new Date(2023, 7, 2).toISOString(),
        members: [],
        chatrooms: [
          {
            id: "chat-finance-q3",
            name: "Q3 Budget Review",
            type: "PROJECT_CHATROOM",
            chatroomCreatorId: "user-345",
            projectId: "proj-budget",
            isPrivate: true,
            createdAt: new Date(2023, 7, 3).toISOString(),
            updatedAt: new Date(2023, 7, 3).toISOString(),
            members: [],
            messages: [],
            agents: []
          }
        ],
        files: []
      }
    ],
  }
]
