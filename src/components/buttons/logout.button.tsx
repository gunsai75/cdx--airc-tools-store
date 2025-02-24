import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function LogoutButton() {

    return (
        <form
            action={async () => {
                "use server"
                await signOut({redirectTo: '/login'})
            }}
        >
            <Button type="submit" variant={'ghost'} className=""><LogOut className="w-12 h-12 text-red-600 rounded-full" /></Button>
        </form>
    )
}