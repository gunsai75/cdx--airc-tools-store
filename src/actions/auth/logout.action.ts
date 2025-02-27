"use server"

import { signOut } from "@/auth"



export async function logout() {
    console.log("logout is here 👨‍🦰")
    try {
        await signOut()
        return { success: "Logout Successful" }
    }catch(e){  
        return { error: 'Logout Failed', message: (e as Error).message }
    }
}