import React, { FunctionComponent } from "react";
import Heading1 from "../../Text/Heading1";
import { motion } from "framer-motion";

const MainHeader: FunctionComponent = () => {
  const spanStyle = (duration: number, y: number) => {
    return {
      className: "block",
      initial: { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration, bounce: 3 },
      viewport: { once: false },
    };
  };

  return (
    <>
      <div className="flex w-full h-screen items-center justify-center">
        <Heading1>
          <div className="flex">
            <motion.span {...spanStyle(0.7, 30)}>R</motion.span>
            <motion.span {...spanStyle(1.2, 250)}>E</motion.span>
            <motion.span {...spanStyle(2, 50)}>P</motion.span>
            <motion.span {...spanStyle(1, 190)}>R</motion.span>
            <motion.span {...spanStyle(2, 100)}>O</motion.span>
            <motion.span {...spanStyle(2, 200)}>D</motion.span>
            <motion.span {...spanStyle(1.4, 140)}>U</motion.span>
            <motion.span {...spanStyle(0.9, 120)}>C</motion.span>
            <motion.span {...spanStyle(2, 120)}>T</motion.span>
            <motion.span {...spanStyle(1.4, 20)}>I</motion.span>
            <motion.span {...spanStyle(0.2, 50)}>O</motion.span>
            <motion.span {...spanStyle(1.6, 170)}>N</motion.span>
          </div>
        </Heading1>
      </div>
    </>
  );
};

export default MainHeader;
