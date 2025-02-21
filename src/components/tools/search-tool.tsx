import { Input } from "../ui/input";

export default function SearchTool() {
    return (
        <div className="w-full flex  items-center justify-center my-6">
            <form>

            <Input type="text" placeholder="Enter tool name here..." className="border-2 border-purple-100 rounded-md px-10 py-8 w-[500px] rounded-full text-purple-700 focus:outline-none focus:border-purple-200 focus:ring-1 focus:ring-purple-200" /> 
            </form>
        </div>
    )
}