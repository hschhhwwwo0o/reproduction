import React, { FunctionComponent } from "react";

const Paragraph: FunctionComponent<IText> = ({ children, alignment = "justify", color = "white" }) => {
  return (
    <>
      <p className={`uppercase text-sm text-${color} text-${alignment}`}>{children}</p>
    </>
  );
};

export default Paragraph;
