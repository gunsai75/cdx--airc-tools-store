import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Button } from "@/components/ui/button";
import { ArrowLeft} from "lucide-react";
import Link from "next/link";

export default async function ToolDetails({params}: {params: Promise<{ category: string, toolId: string }>}) {
    const { category,toolId } = await params;

    return (

          <main className="max-w-7xl mx-auto">
            <section className="my-6 flex justify-between items-center">
               {/* go back  */}
               <Link href="/" className="flex items-center gap-2 text-sm text-purple-700 hover:text-purple-500">
                    <ArrowLeft className="h-4 w-4" /> Go Back
                </Link>
               
               <h1 className="text-center text-2xl"><span className="font-semibold">{toolId?.charAt(0).toUpperCase() + toolId?.slice(1)}</span> </h1>


                {/* pay now  */}
                <RainbowButton className="text-xs rounded-full">Pay Now</RainbowButton>
            
            </section>



                <div className=" mx-auto h-[700] flex flex-col gap-8  items-center justify-center sm:items-start border-2 border-purple-100 rounded-md">
                   <iframe src="https://new-tax-one.vercel.app/" width="100%" height="100%" title="Embedded Content">
    Your browser does not support iframes.
</iframe>
                </div>
            </main>
    )
}