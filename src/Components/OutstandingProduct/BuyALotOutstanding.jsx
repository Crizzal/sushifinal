import React from "react";
import Product from "../Common/Product";

const BuyALotOutstanding = ({ data: products }) => {
  // Sp noi bat duoc mua nhieu
  return (
    <div className="flex flex-wrap justify-between gap-1">
      {products &&
        products?.map((item, index) => (
          <div className="w-[48%] md:w-[18%]" key={item.Code}>
            <Product data={item} />
          </div>
        ))}
    </div>
  );
};

export default BuyALotOutstanding;
