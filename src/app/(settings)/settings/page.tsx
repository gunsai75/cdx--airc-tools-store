import { auth } from "@/auth";
import LogoutButton from "@/components/buttons/logout.button";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coins } from "lucide-react";
import Image from "next/image";
import getTokensByEmail from "../../../../data/user";
import { RainbowButton } from "@/components/magicui/rainbow-button";

export default async function Settings() {
  const session = await auth();

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  const token = await getTokensByEmail(session?.user?.email as string) || 0;



  return (
    <div className="w-full my-6 flex flex-col  justify-start gap-10 max-w-2xl h-full mx-auto">
      <section>
        <h3 className="text-2xl font-bold">Settings</h3>
        <p className="text-sm text-gray-500">Manage your account settings and preferences.</p>
      </section>


      <Tabs defaultValue="profile" className="w-full grid grid-cols-4 gap-6 border-1 border-red-200">
        <TabsList className="grid w-full h-full col-span-1 font-normal p-2 bg-transparent h-[300px]" >
          <TabsTrigger className=" p-3 h-full data-[state=active]:shadow-none" value="profile">Profile</TabsTrigger>
          <TabsTrigger className=" p-3 h-full data-[state=active]:shadow-none" value="pricing">Pricing</TabsTrigger>
          <TabsTrigger className=" p-3 h-full data-[state=active]:shadow-none" value="help">Help</TabsTrigger>
          <TabsTrigger className=" p-3 h-full data-[state=active]:shadow-none" value="billing">Billing</TabsTrigger>
          <TabsTrigger className=" p-3 h-full data-[state=active]:shadow-none" value="logout">Logout</TabsTrigger>
        </TabsList>

        {/* User Profile */}
        <TabsContent value="profile" className="col-span-3">
          <section className="mb-10">
            <h3 className="text-2xl font-bold">User Profile</h3>
            <p className="text-sm text-gray-500">User profile information</p>
          </section>


          <Image src={session?.user?.image || '/avatar.png'} alt={'User Avatar'} width={100} height={100} className="w-100 h-100 rounded-md" />
          <h3 className="text-lg font-semibold">{session?.user?.name}</h3>
          <p className="text-sm text-gray-500">{session?.user?.email}</p>
        </TabsContent>


        {/* Pricing */}
        <TabsContent value="pricing" className="col-span-3">
        <section className="mb-10">
            <h3 className="text-2xl font-bold">Pricing</h3>
            <p className="text-sm text-gray-500">You have {token} credits left</p>
          </section>

          <ul className="flex flex-col gap-2 w-full">

            <li className="w-full flex  justify-between items-center">
              <p className="text-sm font-medium">Rs. 100</p>
              <p className="flex text-sm justify-center items-center gap-2 font-medium">500 <Coins className="w-5 h-5" color="gold" /></p>
              <Button variant={'ghost'} className="rounded-full">Buy</Button>
            </li>
            <li className="w-full flex  justify-between items-center">
              <p className="text-sm font-medium">Rs. 200</p>
              <p className="flex text-sm justify-center items-center gap-2 font-medium">1100 <Coins className="w-5 h-5" color="gold" /></p>
              <Button variant={'ghost'} className="rounded-full">Buy</Button>
            </li>
            <li className="w-full flex  justify-between items-center">
              <p className="text-sm font-medium">Rs. 300</p>
              <p className="flex text-sm justify-center items-center gap-2 font-medium">2200 <Coins className="w-5 h-5" color="gold" /> </p>
              {/* <Button variant={'ghost'} className="rounded-full bg-purple-100 hover:bg-purple-200">Buy</Button> */}
              <RainbowButton className="px-4 py-1 rounded-full">Buy</RainbowButton>
            </li>
            <li className="w-full flex  justify-between items-center">
              <p className="text-sm font-medium">Rs. 400</p>
              <p className="flex text-sm justify-center items-center gap-2 font-medium">3200 <Coins className="w-5 h-5" color="gold" /></p>
              <Button variant={'ghost'} className="rounded-full">Buy</Button>
            </li>
            <li className="w-full flex  justify-between items-center">
              <p className="text-sm font-medium">Rs. 500</p>
              <p className="flex text-sm justify-center items-center gap-2 font-medium">4200 <Coins className="w-5 h-5" color="gold" /></p>
              <Button variant={'ghost'} className="rounded-full">Buy</Button>
            </li>


          </ul>
        </TabsContent>


        {/* Help */}
        <TabsContent value="help" className="col-span-3">
        <section className="mb-10">
            <h3 className="text-2xl font-bold">Help</h3>
            <p className="text-sm text-gray-500">You have 100 credits left</p>
          </section>
        </TabsContent>



        {/* Billing */}
        <TabsContent value="billing" className="col-span-3">
          <section>
            <h3 className="text-2xl font-bold">Billing</h3>
            <p className="text-sm text-gray-500">You have 100 credits left</p>
          </section>
        </TabsContent>


        {/* Logout */}
        <TabsContent value="logout" className="col-span-3">
        <section className="mb-10">
            <h3 className="text-2xl font-bold">Logout</h3>
            <p className="text-sm text-gray-500">Logout from your account</p>
          </section>
          <LogoutButton />
        </TabsContent>


      </Tabs>
    </div>
  )
}