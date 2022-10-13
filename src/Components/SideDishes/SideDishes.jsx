import React from "react";
import monphu from "../../assets/image/monphu.png";
import { useCurrentView } from "../../hooks/useCurrentView";

const SideDishes = () => {
  const { isMobile } = useCurrentView();
  return (
    <div className="mt-[60px] flex gap-5 justify-between">
      <div>
        <h1 className="text-2xl text-[#b61c0b] mb-3">Món ăn phụ</h1>
        <div className="flex justify-between items-center flex-wrap">
          {Array(9)
            .fill(0)
            .map((item, index) => (
              <div
                className="flex items-center mb-2"
                style={{ width: isMobile ? "48%" : "33%" }}
                key={index}
              >
                <div className="mr-2">
                  <img
                    src="https://sushiway.com.vn/wp-content/uploads/2022/07/Soup-Rong-Bien-Hai-San-1-247x296.png"
                    alt=""
                    className="w-[80px]"
                  />
                </div>
                <div>
                  <h2 className="text-sm font-bold mb-1">
                    Soup Rong Biển Hải Sản
                  </h2>
                  <p className="text-sm text-[#FF2C26] font-semibold">
                    79,000đ
                  </p>
                  <div className="flex justify-end">
                    <a className="">
                      <img
                        src="https://sushiway.com.vn/wp-content/themes/sushiway-child/images/cart.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <img src={monphu} alt="" className="hidden md:block" />
    </div>
  );
};

export default SideDishes;
