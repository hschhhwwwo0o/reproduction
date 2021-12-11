import React, { FunctionComponent } from "react";

const Heading1: FunctionComponent<IText> = ({ children, alignment = "left" }) => {
  return <h1 className={`text-white text-3xl uppercase lg:text-8xl text-${alignment}`}>{children}</h1>;
};

export default Heading1;
