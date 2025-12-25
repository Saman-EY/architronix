import React from "react";

const Paragraph = ({ texts }) => {
  return (
    <div className="container sm:py-30 py-16">
      <div className="relative after:absolute sm:after:-left-12.5 after:-left-5 after:top-1/2 after:-translate-y-1/2 after:w-[1px] sm:after:h-[130%] after:h-[115%] after:bg-primary sm:ml-12.5 ml-5 max-w-[895px]">
        {texts?.map((item,idx) => (
          <p  className="text-primary-foreground mb-2 lg:pr-4">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Paragraph;
