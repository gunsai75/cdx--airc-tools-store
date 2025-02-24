"use server"
import { signIn } from "next-auth/react";


export async function login() {
    try {
        await signIn("google")
        return { success: "Login Successful" }
    }catch(e){  
        return { error: 'Login Failed' }
    }
}