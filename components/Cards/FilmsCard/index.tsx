import React, { FunctionComponent } from "react";
import Heading3 from "../../Text/Heading3";
import Heading5 from "../../Text/Heading5";
import Paragraph from "../../Text/Paragraph";

import { motion } from "framer-motion";

const FilmsCard: FunctionComponent = () => {
  return (
    <>
      <motion.div className="flex flex-col" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}>
        <div className="h-10 lg:h-96"></div>
        <div className="w-full">
          <img src="images/film.jpg" alt="" />
          <div className="flex flex-col gap-5 mt-8">
            <Heading3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</Heading3>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius mod///
            </Paragraph>
            <Heading5 alignment="right">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</Heading5>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FilmsCard;
