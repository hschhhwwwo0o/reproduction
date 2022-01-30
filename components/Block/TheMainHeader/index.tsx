import React, { FunctionComponent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Heading1 from "components/Text/Heading1";

const MainHeader: FunctionComponent = () => {
  const [currentColor, setCurrentColor] = useState<"text-white" | "text-black" | "text-red-700">("text-black");

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentColor === "text-black") {
        if (Math.random() < 0.95) {
          setCurrentColor("text-white");
        } else {
          setCurrentColor("text-red-700");
        }
      } else {
        setCurrentColor("text-black");
      }
    }, 90);
    return () => {
      clearInterval(interval);
    };
  }, [currentColor]);

  const spanStyle = (duration: number, y: number, rotate?: number) => {
    return {
      className: "block",
      initial: { opacity: 0, y, rotate: rotate || 0 },
      whileInView: { opacity: 1, y: 0, rotate: 0 },
      transition: { duration, bounce: 3 },
      viewport: { once: false },
    };
  };

  return (
    <>
      <div className="flex w-full h-screen items-center justify-center">
        <Heading1>
          <div className="flex">
            <motion.span {...spanStyle(0.7, 30, -5)}>R</motion.span>
            <motion.span {...spanStyle(1.2, 250, 12)}>E</motion.span>
            <motion.span {...spanStyle(2, 50)}>P</motion.span>
            <motion.span {...spanStyle(1, 190)}>R</motion.span>
            <motion.span {...spanStyle(2, 100)}>O</motion.span>
            <motion.span {...spanStyle(2, 200, -15)}>D</motion.span>
            <motion.span {...spanStyle(1.4, 140)}>U</motion.span>
            <motion.span {...spanStyle(0.9, 120, 20)}>C</motion.span>
            <motion.span {...spanStyle(2, 120, 8)}>T</motion.span>
            <motion.span {...spanStyle(1.4, 20)}>I</motion.span>
            <motion.span className={currentColor}>O</motion.span>
            <motion.span {...spanStyle(1.6, 170, -12)}>N</motion.span>
          </div>
        </Heading1>
      </div>
    </>
  );
};

export default MainHeader;
