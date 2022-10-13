import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../ultils/format";

const Product = ({ data: product }) => {
  return (
    <Link to={`/detail/${product?.PRO_ID}`} key={product?.Code}>
      <div className="bg-white rounded-lg p-2 cursor-pointer border border-[#f1f1f1]">
        {/* <img src={`${product?.Image}`} alt="" className="mb-5" /> */}
        <div className="mb-1 text-sm text-[#333333] font-semibold">
          <span dangerouslySetInnerHTML={{ __html: `${product?.Name}` }}></span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="text-[#B61C0B]">
            <div className="flex items-center gap-1">
              {Array(product?.Votes || 5)
                .fill(0)
                .map((item, index) => (
                  <div key={index}>
                    <FaStar />
                  </div>
                ))}
            </div>
            <div className="mt-1 text-sm font-semibold">
              {formatCurrency(product?.Price)}{" "}
            </div>
          </div>
          <div className="">
            <img
              src="https://sushiway.com.vn/wp-content/themes/sushiway-child/images/cart.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
