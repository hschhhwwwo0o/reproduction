import React, { FunctionComponent } from "react";
import Heading2 from "../../Text/Heading2";
import Heading4 from "../../Text/Heading4";
import Heading5 from "../../Text/Heading5";
import Paragraph from "../../Text/Paragraph";

import { motion } from "framer-motion";
import Heading3 from "../../Text/Heading3";

const HorrCollageCard: FunctionComponent = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-11">
        <motion.div className="lg:w-2/12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
          <Paragraph>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed q
          </Paragraph>
        </motion.div>
        <div className="lg:w-10/12 flex flex-row gap-11">
          <div className="w-9/12">
            <motion.img
              src="images/fly.jpg"
              className="h-full object-cover"
              alt=""
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>
          <div className="w-3/12 flex flex-col justify-end">
            <motion.img src="images/shop.jpg" alt="" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-11 mt-8">
        <div className="lg:w-2/12"></div>
        <div className="lg:w-10/12 flex flex-col gap-6">
          <motion.div className="hidden lg:block">
            <Heading2>Eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?</Heading2>
          </motion.div>
          <motion.div className="block lg:hidden">
            <Heading3>Eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?</Heading3>
          </motion.div>
          <motion.div>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius mod///
            </Paragraph>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
            <Heading2 alignment="right">Sed ut perspiciatis ERROR</Heading2>
          </motion.div>
          <motion.div>
            <Heading5>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste
              natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
            </Heading5>
          </motion.div>
          <motion.div className="max-w-4xl" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
            <Heading4 alignment="right">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</Heading4>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HorrCollageCard;
