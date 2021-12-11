import React, { FunctionComponent } from "react";
import Heading3 from "../../Text/Heading3";
import Heading4 from "../../Text/Heading4";
import Heading5 from "../../Text/Heading5";
import Paragraph from "../../Text/Paragraph";

import { motion } from "framer-motion";

const WonderCard: FunctionComponent = () => {
  return (
    <>
      <motion.div
        className="flex flex-col lg:flex-row gap-9"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <motion.div className="lg:w-5/12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }}>
          <img src="images/wonder.jpg" alt="" />
        </motion.div>
        <div className="lg:w-7/12 flex flex-col gap-5">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0 }}>
            <Heading3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</Heading3>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.2 }}>
            <Paragraph alignment="justify">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius mod/// Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius mod///
            </Paragraph>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.7, delay: 0.4 }}>
            <Heading4 alignment="right">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</Heading4>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.6 }}>
            <Heading5>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</Heading5>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.6, delay: 0.8 }}>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius mod/// Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantiu
            </Paragraph>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default WonderCard;
