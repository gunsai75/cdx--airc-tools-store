"use client"

import { type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    name: string
    icon?: LucideIcon
    category: string
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {


  const pathname = usePathname();


  return (
    <SidebarGroup>
      <SidebarGroupLabel>User Guide</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {          
         return <Collapsible
            key={item.title}
            asChild
            open={pathname.includes(item.url)}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
              <Link href={item.url}>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span className="font-medium">{item.title}</span>
                  <SidebarMenuBadge>{items.length || 0}</SidebarMenuBadge>


                </SidebarMenuButton>
              </Link>


              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link href={subItem.url}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        }
          



        )}
      </SidebarMenu>
    </SidebarGroup>
  )
}
