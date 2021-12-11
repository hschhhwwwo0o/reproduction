import React, { FunctionComponent } from "react";

const Paragraph: FunctionComponent<IText> = ({ children, alignment = "justify" }) => {
  return (
    <>
      <p className={`uppercase text-sm text-white text-${alignment}`}>{children}</p>
    </>
  );
};

export default Paragraph;
