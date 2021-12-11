import React, { FunctionComponent } from "react";

const Heading4: FunctionComponent<IText> = ({ children, alignment = "left" }) => {
  return <h1 className={`text-white text-4xl text-${alignment}`}>{children}</h1>;
};

export default Heading4;
