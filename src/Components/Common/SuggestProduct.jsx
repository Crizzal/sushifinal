import React from "react";

const SuggestProduct = () => {
  return (
    <div>
      <div className="py-1 px-2 mb-2 text-base text-white bg-[#B61C0B] rounded">Có thể bạn sẽ thích</div>
      <div>
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4"
            >
                <div className="relative">
                    <img className="w-20 h-20 object-cover" src="https://sushiway.com.vn/wp-content/uploads/2022/07/Sushi-Luon-Nhat-800x800-3-247x296.png" alt="" />
                    <img className="absolute top-2 left-1" src="https://sushiway.com.vn/wp-content/uploads/2022/07/hotgif.gif" alt="" />
                </div>
                <div className="flex-1">
                    <div className="text-sm mb-1 font-bold">Sushi Lươn Nhật</div>
                    <p className="text-sm text-[#FF2C26] font-bold">75,000₫</p>
                    <div className="flex justify-end"><button className="bg-white rounded-lg border border-[#B61C0B] text-[#B61C0B] text-xs  md:text-sm px-4 py-1">Thêm giỏ hàng</button></div>
                </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SuggestProduct;
