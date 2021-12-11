import React, { FunctionComponent } from "react";

const Heading3: FunctionComponent<IText> = ({ children, alignment = "left" }) => {
  return <h3 className={`text-white text-5xl text-${alignment}`}>{children}</h3>;
};

export default Heading3;
