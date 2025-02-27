"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"


// Blockchain
const blockchainLinks: { title: string; href: string; description: string }[] = [
    {
        title: "Stock Exchange",
        href: "/tools/blockchain/stock",
        description: "Stock Exchange is a platform that allows users to buy and sell stocks.",
    },
    {
        title: "Certificate Generator",
        href: "/tools/blockchain/certificate",
        description:
            "Certificate Generator is a platform that allows users to generate certificates.",
    },
]

// Metaverse
const metaverseLinks: { title: string; href: string; description: string }[] = [
    {
        title: "Campus Tour",
        href: "/tools/arvr/campustour",
        description:
            "Campus Tour is a platform that allows users to explore the campus.",
    },
    {
        title: "AR/VR Classroom",
        href: "/tools/arvr/arclassroom",
        description: "AR/VR Classroom is a platform that allows users to attend classes.",
    }
]

// Artificial Intelligence
const aiLinks: { title: string; href: string; description: string }[] = [
    {
        title: "AI Stock Chatbot",
        href: "/tools/ai/chatbot", 
        description:
            "AI Stock Chatbot is a platform that allows users to chat with a chatbot.",
    },
    {
        title: "Eunio",
        href: "/tools/ai/eunio",
        description:
            "Eunio is a first AI student.",
    },
]


export default function Navigation() {
    return (
        <div className="flex items-center gap-6">
            <Image src='/airc-store-logo.png' alt="airc-logo" width={40} height={40} />

            <NavigationMenu className="w-full end">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>All Tools</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    {/* <NavigationMenuLink asChild> */}
                                        <Link 
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                AIRC Tools List
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                All the latest tool developed by the AIRC team.
                                            </p>
                                        </Link>

                        

                                    {/* </NavigationMenuLink> */}
                                </li>

                                {/* ALL Tools List */}
                                <ListItem href="/tools" title="Tax Calculator">
                                    Calculate tax for your business.
                                </ListItem>
                                <ListItem href="/tools" title="Campus Tour">
                                    Campus Tour is a platform that allows users to explore the campus.
                                </ListItem>
                                <ListItem href="/tools" title="Stock Exchange">
                                    Stock Exchange is a platform that allows users to buy and sell stocks.
                                </ListItem>


                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
    
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Blockchain</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {blockchainLinks.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* METAVERSE */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Metaverse</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {metaverseLinks.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* ARTIFICIAL INTELLIGENCE */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Artificial Intelligence</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {aiLinks.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>




                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Documentation
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

const ListItem =({href, title, children, className, key}: {href: string, title: string, children: React.ReactNode, className?: string, key?: string}) => {
    return (
        <li key={key || title} >
            {/* <NavigationMenuLink asChild> */}
                <Link
                    href={href} 
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            {/* </NavigationMenuLink> */}
        </li>
    )
}
