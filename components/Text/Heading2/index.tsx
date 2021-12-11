import React, { FunctionComponent } from "react";

const Heading2: FunctionComponent<IText> = ({ children, alignment = "left" }) => {
  return <h2 className={`text-white text-5xl lg:text-7xl uppercase text-${alignment}`}>{children}</h2>;
};

export default Heading2;
