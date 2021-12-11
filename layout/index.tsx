import React, { FunctionComponent } from "react";
import { AnimatePresence } from "framer-motion";

const ThaLayout: FunctionComponent = ({ children }) => {
  return (
    <AnimatePresence>
      <div className="flex items-center justify-center min-h-screen px-32">
        <div className="w-full">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default ThaLayout;
