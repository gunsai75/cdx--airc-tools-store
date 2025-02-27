export default async function ToolDetails({params}: {params: Promise<{ category: string, toolId: string }>}) {
    const { category,toolId } = await params;

    return (
        <>
            <div className="w-full flex  items-center justify-center my-6 gap-3">
               <h1>Tools details {category} {toolId}</h1>
               {/* <iframe src="https://new-tax-one.vercel.app/" width="100%" height="900"></iframe> */}
            </div>
        </>
    )
}