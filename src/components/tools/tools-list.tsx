import { cn, getColorClass } from "@/lib/utils";
import { ArrowUpRight, Coins, PillBottle } from "lucide-react";
import Link from "next/link";

export default function ToolsList({ toolCategory, toolsCount, tools }: { toolCategory: string, toolsCount: number, tools: any[] }) {
    return (
        <div className="w-full">
            <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">

                {/* <h1>Tools</h1> */}
                <h3 className="my-3 lg:my-10 w-full text-2xl text-center font-bold tracking-tighter md:text-5xl lg:text-4xl">
                    {toolCategory.charAt(0).toUpperCase() + toolCategory.slice(1)} tools  ({toolsCount})
                </h3>


                <div className="w-full flex justify-center">
                    <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tools.map((tool, index) => {
                            return <ToolCard tool={tool} key={index} />
                        })}
                    </ul>
                </div>

            </main>
        </div>
    );
}



const ToolCard = ({ tool }: { tool: any }) => {
    let { id, name, description, color, tokenAmount, url } = tool;


    const bgColor50 = getColorClass(color, "50")
    const bgColor100 = getColorClass(color, "100")
    const textColor700 = getColorClass(color, "700")


    return (
        <li key={id} className={cn("w-full lg:w-[300px] relative border border-border rounded-md p-4 flex flex-col gap-2")}>
            <section className="flex items-center gap-2 justify-between">
                <h3 className={cn("font-medium", textColor700)}>{name}</h3>
            </section>

            <PillBottle className={cn("w-8 h-8 absolute -top-3 -right-3 p-2  rounded-lg", bgColor50, textColor700)} />

            <p className="text-xs text-gray-500">{description}</p>

            <section className="flex items-center gap-2 justify-between">
                <p className={cn("flex items-center text-xs px-3 py-2 rounded-full", bgColor50, textColor700)}> <span className="font-semibold">{tokenAmount}</span>
                    <Coins width={15} height={15} className="mx-1" /> per use
                </p>
                <Link
                    href={url}
                    className={cn(
                        "w-10 h-10 flex items-center justify-center rounded-full", 
                        textColor700
                    )}
                >
                    <ArrowUpRight className="h-4 w-4 " />
                </Link>
            </section>

        </li>

    )
}

