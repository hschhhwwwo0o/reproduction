import React, { FunctionComponent } from "react";

const ThaLayout: FunctionComponent = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen px-32">
      <div className="w-full">{children}</div>
    </div>
  );
};

export default ThaLayout;
