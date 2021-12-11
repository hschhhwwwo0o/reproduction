import type { NextPage } from "next";
import TheLayout from "../layout/index";
import TheMainHeader from "../components/Block/TheMainHeader";
import WindowCard from "../components/Cards/WindowCard";
import FilmsCard from "../components/Cards/FilmsCard";
import ExperementCard from "../components/Cards/ExperementCard";
import WonderCard from "../components/Cards/WonderCard";
import TextGridCard from "../components/Cards/TextGridCard";
import HorrCollageCard from "../components/Cards/HorrCollageCard";

const Home: NextPage = () => {
  return (
    <div>
      <TheLayout>
        <TheMainHeader />
        <div>
          <div className="flex flex-col gap-5 mt-5 lg:flex-row lg:gap-16">
            <WindowCard />
            <FilmsCard />
          </div>
          <div className="mt-10 lg:mt-60">
            <ExperementCard />
          </div>
          <div className="mt-10 lg:mt-60">
            <WonderCard />
          </div>
          <div className="mt-10 lg:mt-60">
            <TextGridCard />
          </div>
          <div className="mt-10 lg:mt-60">
            <HorrCollageCard />
          </div>
        </div>
      </TheLayout>
    </div>
  );
};

export default Home;
