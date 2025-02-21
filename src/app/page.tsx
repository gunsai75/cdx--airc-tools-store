import { AuroraText } from "@/components/magicui/aurora-text";
import { WordRotate } from "@/components/magicui/word-rotate";
import MostPopularTools from "@/components/tools/most-popular-tools";
import SearchTool from "@/components/tools/search-tool";
import ToolsCard from "@/components/tools/tools-card";
import ToolsStats from "@/components/tools/tools-stats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <h3 className="mt-10 w-full text-4xl text-center font-bold tracking-tighter md:text-5xl lg:text-6xl">
          Tools to make your life <AuroraText className="w-[300px]">
            <WordRotate
              words={["Easy", "Fun", "Awesome", "Amazing", "Great", "Good", "Cool", "Awesome", "Amazing", "Great", "Good", "Cool"]}
            />
          </AuroraText>
        </h3>

        <SearchTool />
        <ToolsCard  />  
        <ToolsStats />
        <MostPopularTools />

        {/* Footer */}


      </main>



      {/* FOOTER */}
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer> */}
    </div>
  );
}
