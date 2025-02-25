import { AuroraText } from "@/components/magicui/aurora-text";
import { WordRotate } from "@/components/magicui/word-rotate";
import MostPopularTools from "@/components/tools/most-popular-tools";
import SearchTool from "@/components/tools/search-tool";
import ToolsStats from "@/components/tools/tools-stats";

export default async function Home() {


  return (
    <div className="w-full">
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <h3 className="mt-10 w-full text-2xl text-center font-bold tracking-tighter lg:text-6xl">
          Tools to make your life <AuroraText className="w-[100px] lg:w-[300px]">
            <WordRotate
        
              words={["Easy", "Fun", "Awesome", "Amazing", "Great", "Good", "Cool", "Awesome", "Amazing", "Great", "Good", "Cool"]}
            />
          </AuroraText>
        </h3>

        <SearchTool />
        {/* <ToolsStats />
        <MostPopularTools /> */}
      </main>



      {/* FOOTER */}
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer> */}
    </div>
  );
}
