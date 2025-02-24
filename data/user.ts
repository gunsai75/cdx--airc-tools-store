import { db } from "@/lib/db";

export default async function getTokensByEmail(email: string) {
    if(!email) return null;
    
    try {
        const user = await db.user.findUnique({
            where: {
                email,
            },
        })

        if (!user) return null;

        const {token} = user;
        return token;
    } catch (error) {
        return null;
    }
}