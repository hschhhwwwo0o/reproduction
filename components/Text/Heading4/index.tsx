import React, { FunctionComponent } from "react";

const Heading4: FunctionComponent<IText> = ({ children, alignment = "left" }) => {
  return <h1 className={`text-white text-xl lg:text-4xl uppercase text-${alignment}`}>{children}</h1>;
};

export default Heading4;
