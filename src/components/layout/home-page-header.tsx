import { AuroraText } from "../magicui/aurora-text";
import { WordRotate } from "../magicui/word-rotate";

export default function HomePageHeaderTitle() {
    return (
        <h3 className="mt-10 w-full text-2xl text-center font-bold tracking-tighter lg:text-6xl">
            Tools to make your life <AuroraText className="w-[100px] lg:w-[300px]">
                <WordRotate

                    words={["Easy", "Fun", "Awesome", "Amazing", "Great", "Good", "Cool", "Awesome", "Amazing", "Great", "Good", "Cool"]}
                />
            </AuroraText>
        </h3>
    )
}