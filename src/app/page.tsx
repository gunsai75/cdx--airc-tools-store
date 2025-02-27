import HomePageHeaderTitle from "@/components/layout/home-page-header";
import Tools from "@/components/tools/tools";

export default async function Home() {


  return (
    <div className="w-full">
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HomePageHeaderTitle />
        <Tools />
      </main>
    </div>
  );
}
