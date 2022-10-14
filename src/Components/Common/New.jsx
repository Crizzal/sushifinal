import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const New = () => {
  return (
    <div>
      <img
        src="http://sushiway.com.vn/wp-content/uploads/2022/04/tintuc-sushiway-1-min-e1656003988704.jpg"
        alt=""
      />
      <div className="p-[6px] mt-5 mb-4 bg-[#FFF4F3] rounded-md text-xs text-[#B61C0B] inline-block">
        Tin tức
      </div>
      <div className="text-2xl font-semibold mb-3 tracking-wide">
        Khai trương cửa hàng mới
      </div>
      <div className="text-base mb-3">
        Sushi Way khai trương chi nhánh mới mời fans ghé xơi Giới thiệu chi
        nhánh Quận 5 Tadaaaaa, Sushi Way sẽ chính thức khai trương...
      </div>
      <Link to="/news" className="flex items-center gap-5 text-[#B61C0B]">
        <div className="text-base font-semibold">Chi tiết</div>
        <div>
          <FaArrowRight />
        </div>
      </Link>
    </div>
  );
};

export default New;
