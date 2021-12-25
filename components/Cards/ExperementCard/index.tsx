import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import Heading2 from "../../Text/Heading2";
import Heading4 from "../../Text/Heading4";
import Heading5 from "../../Text/Heading5";
import Paragraph from "../../Text/Paragraph";

const ExperementCard: FunctionComponent = () => {
  return (
    <>
      <div className="max-w-7xl">
        <motion.img
          src="images/experement.jpg"
          alt=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <div className="mt-8 flex flex-col gap-5">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.5 }}>
            <Heading2>Sed ut perspiciatis unde omnis iste natus error sit </Heading2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.8 }}>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius mod///
            </Paragraph>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
            <Heading5>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</Heading5>
          </motion.div>
          <div className="max-w-4xl">
            <p className="text-right"></p>
            <Heading4 alignment="right">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</Heading4>
          </div>
          <Heading2 alignment="right">Sed ut perspiciatis unde</Heading2>
        </div>
      </div>
    </>
  );
};

export default ExperementCard;
