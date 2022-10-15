import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const MiniCard = ({ item }) => {
    const [quantity, setQuantity] = useState(item.quantity)
  return (
    <div className="w-full flex justify-between" key={item.id}>
      <div>
        <img
          className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-cover"
          src={item.image}
          alt=""
        />
      </div>
      <h3 className="text-sm md:text-base font-semibold">{item.name}</h3>
      <div className="flex">
        <div className="flex items-center border border-black m-auto">
          <button onClick={() => setQuantity(quantity-1)} className="py-1 px-2 cursor-pointer">-</button>
          <p className="py-1 px-2">{quantity}</p>
          <button onClick={() => setQuantity(quantity+1)} className="py-1 px-2 cursor-pointer">+</button>
        </div>
      </div>
      <div className="flex">
        <div className="m-auto text-[#ccc] font-bold">{`${item.price}₫`}</div>
      </div>
      <div className="flex">
        <div className="m-auto text-red-700 font-bold">{`${
          item.price * quantity
        }₫`}</div>
      </div>
      <div className="flex">
        <div className="flex m-auto items-center text-red-700 text-sm font-semibold cursor-pointer">
          <p>Xóa</p>{" "}
          <div>
            <FaTrash />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
