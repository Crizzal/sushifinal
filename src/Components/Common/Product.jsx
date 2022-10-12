import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ key }) => {
  return (
    <Link to="/detail" key={key}>
      <div className="bg-white rounded-lg p-2 cursor-pointer border border-[#f1f1f1]">
        <img
          src="https://sushiway.com.vn/wp-content/uploads/2022/07/Combo-Sashimi-15-12-1-247x296.png"
          alt=""
          className="mb-5"
        />
        <div className="mb-1 text-sm text-[#333333] font-semibold">
          Gà chiên Karaage
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="text-[#B61C0B]">
            <div className="flex items-center gap-1">
              {Array(5)
                .fill(0)
                .map((item, index) => (
                  <div key={index}>
                    <FaStar />
                  </div>
                ))}
            </div>
            <div className="mt-1 text-sm font-semibold">50,000 đ</div>
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
