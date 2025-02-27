"use server"
import { signIn } from "next-auth/react";


export async function login() {
    try {
        await signIn("google")
        return { success: "Login Successful" }
    }catch(e){  
        if (e instanceof Error) {
            return { error: 'Login Failed', message: e.message }
        }
        return { error: 'Login Failed', message: 'Unknown error' }
    }
}