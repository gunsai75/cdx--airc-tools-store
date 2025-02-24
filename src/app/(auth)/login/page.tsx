
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { loginSchema } from "@/lib/zod"
import { useState, useTransition } from "react"
import { login } from "@/actions/auth/login.actions"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { signIn } from "next-auth/react"
import Image from "next/image"


export default function Login() {
    console.log('LOGIN AIRC TOOL');
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);


    const form = useForm<loginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
        }
    });

    const handleSocialLogin = (provider: 'google' | 'github') => {
       startTransition(() => {
           signIn(provider, {
               callbackUrl: DEFAULT_LOGIN_REDIRECT
           }).then((res) => {
               console.log("res", res)
           }).catch((err) => {
               console.log("err", err)
           })
       })
    }


    return (
        <div className="w-full lg:max-w-lg p-2 mx-auto flex flex-col justify-center items-center h-screen">
            
            <h3 className="text-2xl">Login to AIRC Store </h3>
            <Form {...form}>
                <form  className="space-y-2">
                    <Button disabled={isPending} onClick={() => handleSocialLogin('google')} type="button" variant={'outline'} className="mt-3 p-5 w-full border-2"> 
                        Login with Google <Image src={'/google.png'} alt="google" width={20} height={20} />
                    
                    </Button>


                </form>
            </Form>
        </div>
    )
}
