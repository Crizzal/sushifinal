import React from "react";
import New from "../Common/New";

const News = () => {
  return (
    <div className="mt-[60px]">
      <h1 className="text-2xl text-[#b61c0b] mb-8">Chuyên mục Sushiway</h1>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {Array(3)
          .fill(0)
          .map((item, index) => (
            <New key={index} />
          ))}
      </div>
    </div>
  );
};

export default News;
