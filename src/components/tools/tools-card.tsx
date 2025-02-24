import { ArrowBigLeftIcon, ArrowUpRight, PillBottle } from "lucide-react";
import { Button } from "../ui/button";

const toolsCategory = [
    { id: 1, category: 'Blockchain', totalTools: 10, description: 'lorem ipsum dolor sit amet.', icon: PillBottle, color : 'green' },
    { id: 2, category: 'Artificial Intelligence', totalTools: 10, description: 'lorem ipsum dolor sit amet.', icon: PillBottle, color : 'purple' },
    { id: 3, category: 'Augmented Reality', totalTools: 10, description: 'lorem ipsum dolor sit amet.', icon: PillBottle, color : 'red' },
    { id: 4, category: 'Metaverse', totalTools: 10, description: 'lorem ipsum dolor sit amet.', icon: PillBottle, color : 'yellow' },
    { id: 5, category: 'AR/VR', totalTools: 10, description: 'lorem ipsum dolor sit amet.', icon: PillBottle, color : 'blue' },
    { id: 6, category: 'AI', totalTools: 10, description: 'lorem ipsum dolor sit amet.', icon: PillBottle, color : 'orange' },
    { id: 7, category: 'Metaverse', totalTools: 10, description: 'lorem ipsum dolor sit amet.', icon: PillBottle, color : 'brown' },
    { id: 8, category: 'AR/VR', totalTools: 10, description: 'lorem ipsum dolor sit amet.', icon: PillBottle, color : 'cyan' },
    { id: 9, category: 'AI', totalTools: 10, description: 'lorem ipsum dolor sit amet.', icon: PillBottle, color : 'orange' },
]


export default function ToolsCard() {
    return (
        <div className="w-full flex justify-center">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {toolsCategory.map((tool, index) => (
                    <li key={index} className="w-[300px] relative border border-border rounded-md p-4 flex flex-col gap-2">
                        <section className="flex items-center gap-2 justify-between">
                            <h3 className="font-medium">{tool.category}</h3>
                        </section>

                            <PillBottle className="w-8 h-8 absolute -top-3 -right-3 bg-purple-200 text-purple-700  p-2  rounded-lg" />

                        <p className="text-sm">{tool.description}</p>

                        <section className="flex items-center gap-2 justify-between">
                            <p className="bg-purple-200 text-xs px-3 py-2 text-purple-700 rounded-full">{tool.totalTools}+ tools</p> 
                            <Button className="w-10 h-10 text-purple-700 hover:bg-purple-100" variant={'ghost'}> <ArrowUpRight className="h-4 w-4" /> </Button>
                        </section>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}