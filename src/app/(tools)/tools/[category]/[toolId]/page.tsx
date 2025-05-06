import pay from "@/actions/payment/pay.action";
import PaymentButton from "@/components/buttons/pay.button";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LockIcon} from "lucide-react";
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
               
                <PaymentButton/>

            </section>



                <div className=" relative h-[700] flex flex-col gap-8  items-center justify-center sm:items-start  rounded-md">
                   <iframe src="https://new-tax-one.vercel.app/" width="100%" height="100%" title="Embedded Content">
    Your browser does not support iframes.
</iframe>
               

                {/* if insufficient tokens */}
                {/* <div className="absolute flex flex-col items-center w-full h-full flex justify-center items-center gap-2 bg-gray-100/50 backdrop-blur-lg">
                        <section className="flex gap-2 items-center justify-center">
                        <LockIcon className="h-6 w-6"/>
                        <h3>Insuffiecient token.</h3>
                        </section>
                        <section className="flex gap-2 items-center justify-center">
                        Recharge now to use <span className="text-lg font-semibold">{toolId?.charAt(0).toUpperCase() + toolId?.slice(1)}</span>   
                <PaymentButton label="Recharge"/>
                        </section>
                </div> */}

                
                </div>

            </main>
    )
}
