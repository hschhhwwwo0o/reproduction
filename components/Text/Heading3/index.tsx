import React, { FunctionComponent } from "react";

const Heading3: FunctionComponent<IText> = ({ children, alignment = "left" }) => {
  return <h3 className={`text-white text-3xl lg:text-5xl uppercase text-${alignment}`}>{children}</h3>;
};

export default Heading3;
