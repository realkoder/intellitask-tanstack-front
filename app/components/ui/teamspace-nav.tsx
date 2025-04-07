import * as React from "react"
import { Briefcase, BriefcaseIcon, ChevronDown, ChevronUp, Folder, FolderOpen, MessageSquare } from "lucide-react"
import { SidebarMenuItem, SidebarMenuButton } from "./sidebar"
import { types } from "~/lib/client"
import { useAtom } from "jotai"
import { currentChatroomAtom, currentTeamspaceIdAtom, currentProjectIdAtom, openTeamspacesAtom, openProjectsAtom } from "~/lib/atoms/teamspace/atom"
import { useNavigate } from "@tanstack/react-router"
interface TeamspaceNavProps {
  items: types.TeamspaceDto[]
  className?: string
}

export function TeamspaceNav({ items, className }: TeamspaceNavProps) {
  const navigate = useNavigate()
  const [openTeamspaces, setOpenTeamspaces] = useAtom(openTeamspacesAtom)
  const [openProjects, setOpenProjects] = useAtom(openProjectsAtom)
  const [showSelector, setShowSelector] = React.useState(false)
  const [selectedExtraTeamspace, setSelectedExtraTeamspace] = React.useState<string | null>(null)

  // Jotai atoms for current selections
  const [currentTeamspaceId, setCurrentTeamspaceId] = useAtom(currentTeamspaceIdAtom)
  const [currentProjectId, setCurrentProjectId] = useAtom(currentProjectIdAtom)
  const [currentChatroom, setCurrentChatroom] = useAtom(currentChatroomAtom)

  // Auto-open teamspace that contains current project
  React.useEffect(() => {
    if (currentProjectId) {
      // Find the teamspace that contains this project
      const teamspace = items.find(w => w.projects?.find(p => p.id === currentProjectId))
      if (teamspace) {
        // Set the current teamspace to match the project's teamspace
        if (!currentTeamspaceId || currentTeamspaceId !== teamspace.id) {
          setCurrentTeamspaceId(teamspace.id)
        }
        // Open the teamspace in the sidebar
        setOpenTeamspaces(prev => ({ ...prev, [teamspace.id]: true }))
      }
    }
  }, [currentProjectId, items, setCurrentTeamspaceId, currentTeamspaceId])

  // Auto-open project that contains current chatroom
  React.useEffect(() => {
    if (currentChatroom?.projectId) {
      // Ensure the project is set correctly for the chatroom
      const projectId = currentChatroom.projectId
      let foundProject: types.ProjectDto | undefined

      // Find the project across all teamspaces
      for (const teamspace of items) {
        const project = teamspace.projects?.find(p => p.id === projectId)
        if (project) {
          foundProject = project

          // Set current teamspace if needed
          if (!currentTeamspaceId || currentTeamspaceId !== teamspace.id) {
            setCurrentTeamspaceId(teamspace.id)
          }

          // Open the teamspace in the sidebar
          setOpenTeamspaces(prev => ({ ...prev, [teamspace.id]: true }))
          break
        }
      }

      // Set the current project if found and not already set
      if (foundProject && (!currentProjectId || currentProjectId !== foundProject.id)) {
        setCurrentProjectId(foundProject.id)
      }

      // Open the project in the sidebar
      if (foundProject) {
        setOpenProjects(prev => ({ ...prev, [foundProject.id]: true }))
      }
    }
  }, [currentChatroom, items, setCurrentTeamspaceId, setCurrentProjectId, currentTeamspaceId, currentProjectId])

  const toggleTeamspace = (teamspace: types.TeamspaceDto) => {
    setOpenTeamspaces((prev) => ({ ...prev, [teamspace.id]: !prev[teamspace.id] }))

    // If this teamspace isn't currently selected, select it
    if (!currentTeamspaceId || currentTeamspaceId !== teamspace.id) {
      setCurrentTeamspaceId(teamspace.id)
      // Clear project and chatroom selection if changing teamspace
      if (currentProjectId && currentProjectId !== teamspace.id) {
        setCurrentProjectId(undefined)
        setCurrentChatroom(undefined)
      }
    }
  }

  const selectTeamspace = (teamspace: types.TeamspaceDto) => {
    setCurrentTeamspaceId(teamspace.id)

    // Clear project and chatroom selection if changing teamspace
    if (currentProjectId && currentProjectId !== teamspace.id) {
      setCurrentProjectId(undefined)
      setCurrentChatroom(undefined)
    }

    // Navigate to the teamspace page
    navigate({
      to: '/teamspace/$teamspaceId',
      params: { teamspaceId: teamspace.id },
      viewTransition: true
    })
  }

  const toggleProject = (project: types.ProjectDto) => {
    setOpenProjects((prev) => ({ ...prev, [project.id]: !prev[project.id] }))

    // Find and set the teamspace for this project if not already set
    if (!currentTeamspaceId || currentTeamspaceId !== project.teamspaceId) {
      const teamspace = items.find(w => w.id === project.teamspaceId)
      if (teamspace) {
        setCurrentTeamspaceId(teamspace.id)
        setOpenTeamspaces(prev => ({ ...prev, [teamspace.id]: true }))
      }
    }

    // Select this project
    setCurrentProjectId(project.id)

    // Clear chatroom selection if it doesn't belong to this project
    if (currentChatroom && currentChatroom.projectId !== project.id) {
      setCurrentChatroom(undefined)
    }

    navigate({
      to: '/project/$projectId',
      params: { projectId: project.id },
      viewTransition: true
    })
  }

  const selectChatroom = (chatroom: types.ChatroomDto) => {
    // If the chatroom has a project, make sure that project and its teamspace are set
    if (chatroom.projectId) {
      let foundProject: types.ProjectDto | undefined

      // Find the project and its teamspace
      for (const teamspace of items) {
        const project = teamspace.projects?.find(p => p.id === chatroom.projectId)
        if (project) {
          foundProject = project

          // Set the teamspace if needed
          if (!currentTeamspaceId || currentTeamspaceId !== teamspace.id) {
            setCurrentTeamspaceId(teamspace.id)
          }

          break
        }
      }

      // Set the project if found
      if (foundProject) {
        setCurrentProjectId(foundProject.id)
      }
    }

    setCurrentChatroom(chatroom)
    navigate({ to: '/chat/$chatroomId', params: { chatroomId: chatroom.id }, viewTransition: true })
  }

  const toggleSelector = () => {
    setShowSelector(!showSelector)
  }

  const selectExtraTeamspace = (teamspace: types.TeamspaceDto) => {
    setSelectedExtraTeamspace(teamspace.id)
    setShowSelector(false)
    selectTeamspace(teamspace)
  }

  const renderChatroom = (chatroom: types.ChatroomDto, level = 2) => {
    const isSelected = currentChatroom?.id === chatroom.id
    const paddingLeft = level * 12

    return (
      <div key={chatroom.id}>
        <SidebarMenuItem>
          <SidebarMenuButton
            className="w-full justify-start hover:bg-accent/50"
            onClick={() => selectChatroom(chatroom)}
            style={{ paddingLeft: `${paddingLeft}px` }}
          >
            <MessageSquare className={`mr-2 h-4 w-4 ${isSelected ? 'text-orange-500' : ''}`} />
            {chatroom.name.length > 20 ? chatroom.name.slice(0, 20) + '...' : chatroom.name}
          </SidebarMenuButton>
        </SidebarMenuItem>
      </div>
    )
  }

  const renderProject = (project: types.ProjectDto, level = 1) => {
    const isOpen = openProjects[project.id]
    const isSelected = currentProjectId === project.id
    const hasChatrooms = project.chatrooms && project.chatrooms.length > 0
    const paddingLeft = level * 12

    return (
      <div key={project.id}>
        <SidebarMenuItem>
          <SidebarMenuButton
            className="w-full justify-start hover:bg-accent/50"
            onClick={() => toggleProject(project)}
            style={{ paddingLeft: `${paddingLeft}px` }}
          >
            {isOpen && hasChatrooms ? (
              <FolderOpen className={`mr-2 h-5 w-5 ${isSelected ? 'text-emerald-500' : ''}`} />
            ) : (
              <Folder className={`mr-2 h-5 w-5 ${isSelected ? 'text-emerald-500' : ''}`} />
            )}
            {project.name.length > 20 ? project.name.slice(0, 20) + '...' : project.name}
          </SidebarMenuButton>
        </SidebarMenuItem>
        {hasChatrooms && isOpen && (
          <div>
            {project.chatrooms.map((chatroom) => renderChatroom(chatroom, level + 1))}
          </div>
        )}
      </div>
    )
  }

  const renderTeamspace = (teamspace: types.TeamspaceDto, level = 0, isExtraSelected = false) => {
    const isOpen = openTeamspaces[teamspace.id]
    const isSelected = (currentTeamspaceId === teamspace.id) || isExtraSelected
    const hasProjects = teamspace.projects && teamspace.projects.length > 0
    const paddingLeft = level === 0 ? 0 : level * 12

    return (
      <div key={teamspace.id}>
        <SidebarMenuItem>
          <SidebarMenuButton
            className="w-full justify-start hover:bg-accent/50"
            onClick={() => {
              selectTeamspace(teamspace)
              toggleTeamspace(teamspace)
            }}
            style={{ paddingLeft: paddingLeft ? `${paddingLeft}px` : undefined }}
          >
            {isOpen ? (
              <BriefcaseIcon className={`mr-2 h-5 w-5 ${isSelected ? 'text-indigo-500' : ''}`} />
            ) : (
              <Briefcase className={`mr-2 h-5 w-5 ${isSelected ? 'text-indigo-500' : ''}`} />
            )}
            {teamspace.name.length > 20 ? teamspace.name.slice(0, 20) + '...' : teamspace.name}
          </SidebarMenuButton>
        </SidebarMenuItem>
        {hasProjects && isOpen && (
          <div>
            {teamspace.projects.map((project) => renderProject(project, level + 1))}
          </div>
        )}
      </div>
    )
  }

  // Limit initial display to 4 teamspaces
  const initialTeamspaces = items.slice(0, 4)
  const extraTeamspaces = items.length > 4 ? items.slice(4) : []

  // Find the currently selected extra teamspace if any
  const selectedTeamspace = selectedExtraTeamspace
    ? items.find(w => w.id === selectedExtraTeamspace)
    : null

  return (
    <div className={className}>
      {/* Render the first 4 teamspaces */}
      {initialTeamspaces.map((teamspace) => renderTeamspace(teamspace))}

      {/* Render the selected extra teamspace if any */}
      {selectedTeamspace && renderTeamspace(selectedTeamspace, 0, true)}

      {/* Show the "Show more" option if there are extra teamspaces */}
      {extraTeamspaces.length > 0 && (
        <div>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="w-full justify-start mt-1 text-muted-foreground"
              onClick={toggleSelector}
            >
              {showSelector ?
                <ChevronUp className="mr-2 h-4 w-4" /> :
                <ChevronDown className="mr-2 h-4 w-4" />
              }
              Show {extraTeamspaces.length} more
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Selector dropdown */}
          {showSelector && (
            <div className="pl-2 py-1 space-y-1 border-l-2 border-muted ml-2 mt-1">
              {extraTeamspaces.map((teamspace) => (
                <SidebarMenuItem key={teamspace.id}>
                  <SidebarMenuButton
                    className="w-full justify-start text-sm hover:bg-accent/50"
                    onClick={() => selectExtraTeamspace(teamspace)}
                  >
                    <Briefcase className={`mr-2 h-4 w-4 ${currentTeamspaceId === teamspace.id ? 'text-primary' : ''}`} />
                    {teamspace.name}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

