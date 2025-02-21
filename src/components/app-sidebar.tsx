"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LucidePanelTopClose,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "sobitttt",
    email: "sobitttt@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "AIRC Tools Store",
      logo: LucidePanelTopClose,
      plan: "Free",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Meteverse",
      url: "/guide/arvr",
      icon: SquareTerminal,
      catgegory : 'arvr',
      items: [
        {

          title: "Campus Tour",
          url: "/guide/arvr/campustour",
          name: "campustour",
        },
        {
          title: "AR/VR Classroom",
          url: "/guide/arvr/arclassroom",
          name: "arclassroom",
        },
      ],
    },
    {
      title: "AI / ML",
      url: "/guide/ai",
      catgegory : 'ai',
      icon: Bot,
      items: [
        {
          title: "Eunio",
          url: "/guide/ai/eunio",
          name: "eunio",
        },
        {
          title: "Chatbot",
          url: "/guide/ai/chatbot",
          name: "chatbot",
        },
      ],
    },
    {
      title: "Blockchain",
      url: "/guide/blockchain",
      catgegory : 'blockchain',
      icon: BookOpen,
      items: [
        {
          title: "Stock Exchange",
          url: "/guide/blockchain/stock",
          name: "stock",
        },
        {
          title: "Certificate Generator",
          url: "/tools/blockchain/certificate",
          name: "certificate",
        },
      ],
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
