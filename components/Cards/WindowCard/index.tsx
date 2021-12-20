import React, { FunctionComponent } from "react";
import Heading4 from "../../Text/Heading4";
import Heading5 from "../../Text/Heading5";
import Paragraph from "../../Text/Paragraph";

import { motion } from "framer-motion";

const WindowCard: FunctionComponent = () => {
  return (
    <>
      <motion.div className="max-w-2xl">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
          <img src="images/window.jpg" alt="" />
        </motion.div>
        <div className="mt-8 flex flex-col gap-5">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <Heading4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</Heading4>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.7 }}>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius mod///
            </Paragraph>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.9 }} transition={{ duration: 0.8, delay: 0.7 }}>
            <Heading5>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium laudantium///</Heading5>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.5 }}>
            <Paragraph alignment="right">Sed ut perspiciatis unde omnis iste</Paragraph>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default WindowCard;
