import type { NextPage } from "next";
import TheLayout from "../layout/index";
import TheMainHeader from "../components/Block/TheMainHeader";

const Home: NextPage = () => {
  return (
    <div>
      <TheLayout>
        <TheMainHeader />
      </TheLayout>
    </div>
  );
};

export default Home;
