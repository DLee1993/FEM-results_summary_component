import { MemorySVG, VerbalSVG, VisualSVG, ReactionSVG } from "./components/SVG-Components";
const App = () => {
    return (
        <main
            id="resultsSummary"
            className="flex justify-center items-center flex-col sm:flex-row"
        >
            <h1 className="text-4xl font-bold text-center sr-only">Results summary component</h1>
            <section
                id="results"
                className="w-72 h-96 flex justify-evenly items-center flex-col rounded-b-xl sm:rounded-3xl bg-gradient-to-t from-lightRoyalBlue via-lightRoyalBlue to-lightSlateBlue"
            >
                <h2 className="text-paleBlue/70 font-bold">Your Result</h2>

                <div
                    id="circle"
                    className="w-40 h-40 flex justify-center items-center rounded-full bg-gradient-to-b from-violetBlue to-persianBlue text-white"
                >
                    <span
                        id="nums"
                        className="flex justify-center items-center flex-col text-5xl font-bold"
                    >
                        76
                        <sub className="mt-2 text-base text-paleBlue/50">of 100</sub>
                    </span>
                </div>
                <p className="flex justify-center items-center flex-col mx-auto text-center max-w-[70%] text-paleBlue/50 font-semibold text-sm">
                    <span className="mb-4 text-2xl text-white">Great</span>
                    You scored higher than 67% of the people who have taken these tests.
                </p>
            </section>
            {/**------------------------------------------*/}
            <section
                id="summary"
                className="w-80 h-96 flex justify-center items-center sm:rounded-r-3xl sm:shadow-[30px_25px_20px_-20px_rgba(200,199,255,.4)]"
            >
                <h2 className="text-4xl font-bold text-center sr-only">Results summary</h2>
                <section
                    id="summaryContent"
                    className="w-full h-full flex justify-evenly items-start flex-col max-w-[90%]"
                >
                    <h2 id="title" className="w-full max-w-[90%] mx-auto text-left font-extrabold">
                        Summary
                    </h2>
                    <ul className="w-full max-w-[90%] mx-auto">
                        <li className="w-full h-10 rounded bg-lightRed/5 text-base py-6 px-2 flex justify-start items-center mb-2">
                            <ReactionSVG />
                            <p id="reactionText" className="ml-2 font-semibold text-lightRed/75">
                                Reaction
                            </p>
                            <span id="reaction_rating" className="ml-auto">
                                <span className="font-bold">80</span>
                                <span className="text-darkGrayBlue/50 mx-1">/</span>
                                <span className="text-darkGrayBlue/50 font-semibold">100</span>
                            </span>
                        </li>
                        <li className="w-full h-10 rounded bg-orangeYellow/10 text-base py-6 px-2 flex justify-start items-center mb-2">
                            <MemorySVG />
                            <p id="memoryText" className="ml-2 font-semibold text-orangeYellow/75">
                                Memory
                            </p>
                            <span id="memory_rating" className="ml-auto">
                                <span className="font-bold">92</span>
                                <span className="text-darkGrayBlue/50 mx-1">/</span>
                                <span className="text-darkGrayBlue/50 font-semibold">100</span>
                            </span>
                        </li>
                        <li className="w-full h-10 rounded bg-greenTeal/10 text-base py-6 px-2 flex justify-start items-center mb-2">
                            <VerbalSVG />
                            <p id="verbalText" className="ml-2 font-semibold text-greenTeal/75">
                                Verbal
                            </p>
                            <span id="verbal_rating" className="ml-auto">
                                <span className="font-bold">61</span>
                                <span className="text-darkGrayBlue/50 mx-1">/</span>
                                <span className="text-darkGrayBlue/50 font-semibold">100</span>
                            </span>
                        </li>
                        <li className="w-full h-10 rounded bg-cobaltBlue/10 text-base py-6 px-2 flex justify-start items-center mb-2">
                            <VisualSVG />
                            <p id="visualText" className="ml-2 font-semibold text-cobaltBlue/75">
                                Visual
                            </p>
                            <span id="visual_rating" className="ml-auto">
                                <span className="font-bold">72</span>
                                <span className="text-darkGrayBlue/50 mx-1">/</span>
                                <span className="text-darkGrayBlue/50 font-semibold">100</span>
                            </span>
                        </li>
                    </ul>
                    <button className="w-[90%] mx-auto h-12 rounded-full bg-darkGrayBlue text-white/75 hover:bg-gradient-to-b from-violetBlue to-lightSlateBlue hover:text-white transition-all duration-200">
                        Continue
                    </button>
                </section>
            </section>
        </main>
    );
};

export default App;
