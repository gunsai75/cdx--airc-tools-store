
import { auth } from '@/auth';
import Navigation from '@/components/layout/navigation-menu';
import { Coins } from 'lucide-react';
import Link from 'next/link';
import getTokensByEmail from '../../../data/user';
import LogoutButton from '../buttons/logout.button';
import { Avatar, AvatarFallback } from '../ui/avatar';
import Image from 'next/image';
import { UserAvatar } from '../avatar/user-avatar';
export default async function HeaderNavigationMenu() {
    const session = await auth();

    return (
        <section className="sticky top-0 z-10  backdrop-blur-md px-3 lg:px-20 py-6 flex justify-between items-center">
            <Image src='/airc-store-logo.png' alt="airc-logo" width={40} height={40} />
            {/* <Navigation /> */}
            {session?.user?.email ? <LoginAndTokenDisplay session={session} /> : <Link href="/login" className='text-sm'>Login Now</Link>}
        </section>
    )
}


const LoginAndTokenDisplay = async ({ session }: { session: any }) => {
    let token = await getTokensByEmail(session?.user?.email as string) || 0;


    return (
        <div className="flex items-center gap-2">
            {/* <p className="flex justify-between items-center gap-2 border-2 px-3 py-2 rounded-full bg-purple-700 text-white text-sm"><span className="flex">{token} <Coins width={20} height={20} color="gold" className="ml-1" /></span> tokens left</p> */}

            <Link href="/settings" className="flex items-center gap-2">
                <UserAvatar imageUrl={session.user.image} name={session.user.name} />
            </Link>
            {/* <LogoutButton /> */}

        </div>
    )
}
