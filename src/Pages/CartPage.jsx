import React from "react";
import { FaArrowRight, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MiniCard from "../Components/Common/MiniCard";
import { cartSelector } from "../store/selector";

const CartPage = () => {
  const history = useNavigate();
  const cart = useSelector(cartSelector);

  return (
    <div className="w-full md:max-w-[1360px] m-auto px-4 mt-8">
      {!cart.length ? (
        <div className="flex flex-col items-center mt-8">
          <h3 className="block mb-5 text-lg">
            Chưa có sản phẩm nào trong giỏ hàng.
          </h3>
          <button
            className="bg-[#446084] text-xl font-semibold text-white px-3 py-2"
            onClick={() => history("/")}
          >
            QUAY TRỞ LẠI CỬA HÀNG
          </button>
        </div>
      ) : (
        <div>
          <h1 className="block mb-12 text-2xl text-red-700">
            Giỏ hàng của bạn
          </h1>
          <div className="flex items-center justify-center mb-12">
            <div className="mx-1">
              <img
                src="https://sushiway.com.vn/wp-content/themes/sushiway-child/images/cart1.png"
                alt=""
              />
            </div>
            <div className="line mx-[140px] relative">
              <img
                className=""
                src="https://sushiway.com.vn/wp-content/themes/sushiway-child/images/cart2.png"
                alt=""
              />
            </div>
            <div className="mx-1">
              <img
                src="https://sushiway.com.vn/wp-content/themes/sushiway-child/images/cart3.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="w-full md:w-2/3">
              <h2 className="text-red-700 mb-5 text-xl font-semibold">{`Thông tin đơn hàng (${cart.length})`}</h2>
              <div className="flex flex-col">
                {cart.map((item) => (
                  <MiniCard item={item} />
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <h2 className="text-red-700 mb-5 text-xl font-semibold">
                Cộng giỏ hàng
              </h2>
              <div className="flex justify-between items-center mb-4">
                <p className="text-base text-black font-bold">Tạm tính:</p>
                <p className="text-base text-black font-bold">285,000₫</p>
              </div>
              <div className="flex justify-between items-center border border-red-700 mb-4">
                <input
                  className="flex-1 px-2 outline-none border-none"
                  type="text"
                  placeholder="Nhập mã giảm giá"
                />{" "}
                <div className="text-white bg-red-700 px-4 py-4  text-center">
                  <FaArrowRight />
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-base text-black font-bold">Phí giao hàng:</p>{" "}
                <p className="text-base text-black font-bold">0₫</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-base text-black font-bold">
                  Tổng tiền được giảm:
                </p>{" "}
                <p className="text-base text-black font-bold">-0₫</p>
              </div>
              <div className="flex justify-between mt-1 border-t border-[#ccc]">
                <p className="text-base text-black font-bold">Tổng:</p>{" "}
                <p className="text-base text-black font-bold">285,000₫</p>
              </div>
              <button className="bg-red-700 w-full text-white font-semibold py-3 text-xl rounded shadow-xl mt-5">
                Tiến hành thanh toán
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
