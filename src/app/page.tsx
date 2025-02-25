import HomePageHeaderTitle from "@/components/layout/home-page-header";
import SearchTool from "@/components/tools/search-tool";

export default async function Home() {


  return (
    <div className="w-full">
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HomePageHeaderTitle />
        <SearchTool />
      </main>
    </div>
  );
}
