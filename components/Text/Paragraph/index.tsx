import React, { FunctionComponent } from "react";

const Paragraph: FunctionComponent<IText> = ({ children }) => {
  return (
    <>
      <p className="text-justify uppercase text-sm">{children}</p>
    </>
  );
};

export default Paragraph;
