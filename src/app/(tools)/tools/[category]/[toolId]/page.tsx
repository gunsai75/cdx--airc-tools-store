import { Link } from "lucide-react";

export default async function ToolDetails({params}: {params: Promise<{ category: string, toolId: string }>}) {
    const { category,toolId } = await params;

    return (

          <main>
            <section>
               <h1 className="text-center text-2xl"><span className="font-semibold">{toolId}</span> </h1>
            </section>
                <div className="max-w-6xl mx-auto h-[700] flex flex-col gap-8  items-center justify-center sm:items-start border-2 border-purple-100 rounded-md p-4 my-8 ">
                   <iframe src="https://example.com" width="600" height="400" title="Embedded Content">
    Your browser does not support iframes.
</iframe>
                </div>
            </main>
    )
}