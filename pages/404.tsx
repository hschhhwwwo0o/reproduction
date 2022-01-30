import type { NextPage } from "next";
import TheLayout from "layout/index";
import Heading1 from "components/Text/Heading1";

const _404: NextPage = () => {
  return (
    <div>
      <TheLayout>
        <div className="text-center">
          <Heading1 alignment="center">404</Heading1>
        </div>
      </TheLayout>
    </div>
  );
};

export default _404;
