import React, { useEffect, useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../store/selector";
import cartSlice, {
  calculateTotal,
  deleteItem,
  syncToLocalStorage,
} from "../../store/slice/cartSlice";
import { formatCurrency } from "../../ultils/format";

const MiniCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const total = useSelector((state) => state.cart.total);

  useEffect(() => {
    dispatch(calculateTotal());
    dispatch(syncToLocalStorage());
  }, [cart]);

  return (
    <div className="cart--mini bg-white text-black w-[320px] p-3 max-h-[460px] rounded-md">
      {cart?.length == 0 ? (
        <div className="text-base font-base text-center">
          Chưa có sản phẩm trong giỏ hàng.
        </div>
      ) : (
        <div>
          <div className="flex flex-col gap-3 max-h-[320px] overflow-y-auto">
            {cart?.map((item) => (
              <div
                className="flex justify-between items-center gap-3 py-1"
                key={item.id}
              >
                <div>
                  <img
                    className="w-14 h-14 object-cover"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <h2 className="text-base mb-1">{item.name}</h2>
                  <div className="flex items-center gap-2 text-sm text-black">
                    <p className="opacity-60">{`${item.quantity} *`}</p>{" "}
                    <p>{item.price} đ</p>
                  </div>
                </div>
                <div
                  className="text-xl cursor-pointer"
                  onClick={() => {
                    dispatch(deleteItem(item.id));
                  }}
                >
                  <FaRegTimesCircle />
                </div>
              </div>
            ))}
          </div>

          <div className="w-full my-3 py-2 flex justify-center gap-2 items-center border-y border-[#d1d1d1] font-medium opacity-80">
            <p>Tổng số phụ:</p>
            <p>{formatCurrency(total)}</p>
          </div>
          <div className="w-full flex justify-between gap-2">
            <button className="flex-1 text-center py-2 bg-[#B61C0B] rounded-3xl  text-sm text-white font-semibold">
              Xem giỏ hàng
            </button>
            <button className="flex-1 text-center py-2 bg-[#B61C0B] rounded-3xl  text-sm text-white font-semibold">
              Thanh toán
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniCart;
