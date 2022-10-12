import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import gift from "../assets/image/giftIcon.png";
import ProductDescription from "../Components/Common/ProductDescription";
import SuggestProduct from "../Components/Common/SuggestProduct";
import Selling from "../Components/Selling/Selling";

const ProductDetail = () => {
  return (
    <div className="md:mt-8 px-2 w-full md:max-w-[1360px] m-auto">
      <div className="flex items-center text-base mt-2">
        <Link to="/" className="inline">Trang chủ</Link> <span className="mx-1">/</span>
        <Link to="menu" className="inline">Thực đơn</Link> <span className="mx-1">/</span>
        <p className="text-[#848484] inline">Chi tiết thực đơn</p>
      </div>
      <div className="md:mt-8 flex gap-5 flex-col md:flex-row">
        <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-full md:w-1/2 px-2 py-8">
            <img
              src="https://sushiway.com.vn/wp-content/uploads/2022/07/Combo-Sashimi-15-10-1-510x510.png"
              alt=""
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <h1 className="block mb-3 font-semibold text-2xl md:text-3xl">
              Bụng Cá Hồi Áp Chảo
            </h1>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-base font-semibold text-[#3A445E]">
                Thực đơn:
              </p>
              <p className="text-base font-semibold text-[#B61C0B]">
                Món chiên
              </p>
              <p className="text-base font-semibold text-[#3A445E]">|</p>{" "}
              <p className="text-base font-semibold text-[#3A445E]">
                Tình trạng:
              </p>
              <p className="text-base font-semibold text-[#B61C0B]">Còn hàng</p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-1 text-[#B61C0B]">
                {Array(5)
                  .fill(0)
                  .map((item, index) => (
                    <div key={index}>
                      <FaStar />
                    </div>
                  ))}
              </div>
              <div className="text-base text-[#0064D2] underline">
                0 Đánh giá
              </div>
              <div className="text-base text-[#0064D2] underline">
                0 sản phẩm đã bán
              </div>
            </div>

            <div className="flex gap-4 mb-5">
              <p className="text-base">Giá:</p>
              <h2 className="text-3xl text-[#FF0000] font-semibold">95,000₫</h2>
            </div>

            <div className="text-base mb-5 font-semibold">Cá hồi</div>

            <div className="flex mb-4">
              <div className="px-2 py-2 border border-[#ddd] cursor-pointer bg-[#f9f9f9]">
                -
              </div>
              <div className="px-4 py-2 border border-[#ddd]">1</div>
              <div className="px-2 py-2 border border-[#ddd] cursor-pointer bg-[#f9f9f9]">
                +
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 mb-4">
              <button className="w-[48%] bg-[#0000001A] text-sm font-semibold h-11 text-black rounded-md">
                THÊM VÀO GIỎ HÀNG
              </button>
              <button className="w-[48%] bg-[#B61C0B] text-sm font-semibold h-11 text-white rounded-md">
                MUA NGAY
              </button>
            </div>

            <div className="flex gap-3">
              <p>Chia sẻ:</p>
              <img
                src="https://sushiway.com.vn/wp-content/themes/sushiway-child/images/fb.png"
                alt=""
              />
              <img
                src="https://sushiway.com.vn/wp-content/themes/sushiway-child/images/instagram.png"
                alt=""
              />
              <img
                src="https://sushiway.com.vn/wp-content/themes/sushiway-child/images/zalo.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <img
              src="https://sushiway.com.vn/wp-content/uploads/2022/07/IMAGE-1.png"
              alt=""
            />
            <p>Giao hàng đúng giờ</p>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <img
              src="https://sushiway.com.vn/wp-content/uploads/2022/07/IMAGE-2.png"
              alt=""
            />
            <p>Ưu đãi hấp dẫn mỗi ngày</p>
          </div>

          <div className="rounded-xl border border-[#B61C0B] py-3 pl-6 pr-2 flex items-center gap-5 my-5">
            <div>
              <img
                src="https://sushiway.com.vn/wp-content/uploads/2022/07/IMAGE-3.png"
                alt=""
              />
            </div>
            <div>
              <div>Gọi mua hàng: 0899 091 779</div>
              <div>(8:00 - 19:00 T2 - CN)</div>
            </div>
          </div>

          <div className="border border-[#B61C0B] border-dotted rounded-xl px-3 pt-4 pb-7 bg-[#FFF5F2]">
            <div className="flex items-center gap-3 mb-3 text-xl text-[#B61C0B] font-semibold">
              <img src={gift} alt="" />
              <h2>Siêu Ưu Đãi</h2>
            </div>
            <div className="bg-white p-3 flex flex-col gap-2">
              {Array(2)
                .fill(0)
                .map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-1"
                  >
                    <div>
                      <h3 className="text-[#2D2D2D] text-sm font-semibold mb-1">NHẬP MÃ: FREESHIP0D</h3>{" "}
                      <p className="text-xs">
                        Áp dụng vào khung giờ 14h - 17h cho giá trị đơn hàng bất
                        kỳ
                      </p>
                    </div>
                    <div className="w-1/3 md:w-1/4">
                      <button className="rounded-3xl text-white bg-[#B61C0B] py-2 px-4 text-xs">
                        Sao chép
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between px-2">
        <div className=""><ProductDescription /></div>
        <div className="w-full md:w-1/4"><SuggestProduct /></div>
      </div>
      <Selling />
    </div>
  );
};

export default ProductDetail;
