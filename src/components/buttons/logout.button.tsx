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
            <Button type="submit" variant={'destructive'} >Logout <LogOut className="w-12 h-12" /></Button>
        </form>
    )
}