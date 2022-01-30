import React, { FunctionComponent, useEffect, useState } from "react";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

const ThaLayout: FunctionComponent = ({ children }) => {
  const [title, setTitle] = useState<"REPRODUCTION" | "KILL">("REPRODUCTION");

  useEffect(() => {
    const interval = setInterval(() => {
      if (title === "REPRODUCTION") {
        setTitle("KILL");
      } else {
        setTitle("REPRODUCTION");
      }
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, [title]);

  return (
    <AnimatePresence>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen px-4 lg:px-32">
        <div className="w-full">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default ThaLayout;
