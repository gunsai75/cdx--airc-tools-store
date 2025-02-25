"use client"

import { Input } from "../ui/input";
import { tools } from "../../../data/tools";

export default function SearchTool() {
    const [search, setSearch] = useState('');

    console.log('SEARCH', search);

    console.log(tools)

    const filteredTools = tools.filter(tool => tool.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <div className="w-full flex  items-center justify-center lg:my-6 gap-3">
                <form>

                    <Input type="text" placeholder="Enter tool name here..." className="border-2 border-purple-100 rounded-md   px-4 py-6 lg:px-10 lg:py-8 w-[400px] lg:w-[500px] rounded-full text-purple-700 focus:outline-none focus:border-purple-200 focus:ring-1 focus:ring-purple-200" onChange={(e) => setSearch(e.target.value)} />
                </form>
            </div>
            <ToolsTab tools={filteredTools} />
        </>
    )
}




import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import ToolsList from "./tools-list";
import { useState } from "react";

export function ToolsTab({ tools } : { tools : any[] }) {


    const aiTools = tools.filter(tool => tool.category === 'AI');
    const arvrTools = tools.filter(tool => tool.category === 'AR/VR');
    const blockchainTools = tools.filter(tool => tool.category === 'Blockchain');
    const roboticsTools = tools.filter(tool => tool.category === 'Robotics');

    return (
        <Tabs defaultValue="all" className="w-[90%] lg:w-[60%] mx-auto">
            <TabsList className="grid w-full h-full items-center justify-center grid-cols-5 p-2 rounded-full bg-purple-50" >
                <TabsTrigger  className="grid-cols-1 p-3 lg:p-6 h-full rounded-full data-[state=active]:bg-purple-200" value="all">All Tools</TabsTrigger>
                <TabsTrigger  className="grid-cols-1 p-3 lg:p-6 h-full rounded-full data-[state=active]:bg-purple-200" value="ai">AI</TabsTrigger>
                <TabsTrigger  className="grid-cols-1 p-3 lg:p-6 h-full rounded-full data-[state=active]:bg-purple-200" value="arvr">Metaverse</TabsTrigger>
                <TabsTrigger  className="grid-cols-1 p-3 lg:p-6 h-full rounded-full data-[state=active]:bg-purple-200" value="blockchain">Blockchain</TabsTrigger>
                <TabsTrigger  className="grid-cols-1 p-3 lg:p-6 h-full rounded-full data-[state=active]:bg-purple-200" value="robotics">Robotics</TabsTrigger>
            </TabsList>

            {/* Artificial Intelligence */}
            <TabsContent value="all">
                <ToolsList toolCategory="all" toolsCount={tools.length || 0} tools={tools}/>
            </TabsContent>


            {/* Artificial Intelligence */}
            <TabsContent value="ai">
                <ToolsList toolCategory="ai" toolsCount={aiTools.length || 0} tools={aiTools}/>
            </TabsContent>


            {/* Metaverse */}
            <TabsContent value="arvr">
                <ToolsList toolCategory="arvr" toolsCount={arvrTools.length || 0} tools={arvrTools}/>
            </TabsContent>



            {/* Blockchain */}
            <TabsContent value="blockchain">
                <ToolsList toolCategory="blockchain" toolsCount={blockchainTools.length || 0} tools={blockchainTools}/>
            </TabsContent>


            {/* Robotics */}
            <TabsContent value="robotics" >
                <ToolsList toolCategory="robotics" toolsCount={roboticsTools.length || 0} tools={roboticsTools}/>
            </TabsContent>


        </Tabs>
    )
}
