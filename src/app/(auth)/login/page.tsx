
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
} from "@/components/ui/form"
import { loginSchema } from "@/lib/zod"
import { useTransition } from "react"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { signIn } from "next-auth/react"
import Image from "next/image"


export default function Login() {
    const [isPending, startTransition] = useTransition();



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
            <Form {...form}>
                <form  className="space-y-2">
                    <Button disabled={isPending} onClick={() => handleSocialLogin('google')} type="button" variant={'outline'} className="mt-3 p-6 w-full border-2"> 
                        Login with Google <Image src={'/google.png'} alt="google" width={20} height={20} />
                    </Button>
                </form>
            </Form>
        </div>
    )
}
