import React, { FunctionComponent } from "react";

const Heading5: FunctionComponent<IText> = ({ children, alignment = "left" }) => {
  return <h1 className={`text-white text-lg lg:text-2xl uppercase text-${alignment}`}>{children}</h1>;
};

export default Heading5;
