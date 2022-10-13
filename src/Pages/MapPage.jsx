import React from "react";
import withLayout from "../HOCs/WithLayout";
import { useCurrentView } from "../hooks/useCurrentView";

const MapPage = () => {
  const { isMobile } = useCurrentView();

  return (
    <div className="mt-8 w-full px-4 lg:max-w-[1360px] mx-auto">
      <div className="text-lg text-[#b61c0b] pb-8 mb-5">
        Thông tin chi nhánh
      </div>
      <div className="w-full lg:w-3/4 m-auto">
        <img
          className="w-full object-cover"
          src={
            isMobile
              ? "https://sushiway.com.vn/wp-content/uploads/2022/07/Group-38562.png"
              : "https://sushiway.com.vn/wp-content/uploads/2022/07/Group-38590-768x287.png"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default withLayout(MapPage);
