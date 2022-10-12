import React, { useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import MenuCategory from "../Components/Category/MenuCategory";
import Pagination from "../Components/Common/Pagination";
import Product from "../Components/Common/Product";
import MenuModal from "../Components/Modal/MenuModal";

const MenuPage = () => {
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [sort, setSort] = useState("popular")
    const [isModal, setIsModal] = useState(false)

  return (
    <div className="max-w-[1360px] m-auto">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-[60px]">
        <h1 className="text-xl text-[#222222] font-bold">THỰC ĐƠN</h1>
        <div className="md:hidden flex items-center gap-2 text-base font-semibold cursor-pointer" onClick={() => setIsModal(true)}><div><FaAlignLeft /></div> LỌC</div>
        <div className="flex items-center gap-5">
          <p className="hidden md:block">Hiển thị 1–12 của 157 kết quả</p>
          <select name="" id="" className="px-5 py-2 border border-black my-1" defaultValue={"popular"} onChange={e => setSort(e.target.value)}>
            <option className="" value="popular">
              Thứ tự theo mức độ phổ biến
            </option>
            <option className="" value="start">
              Thứ tự theo điểm đánh giá
            </option>
            <option className="" value="new">
              Mới nhất
            </option>
            <option className="" value="lowtohigh">
              Thứ tự theo giá: thấp đến cao
            </option>
            <option className="" value="hightolow">
              Thứ tự theo giá: cao đến thấp
            </option>
          </select>
        </div>
      </div>
      <div className="flex justify-between gap-3 py-8">
        <MenuCategory setCategory={setCategory} setPrice={setPrice}/>
        <div className="w-full md:w-3/4">
            <div className="flex flex-wrap justify-between gap-3 px-4 md:px-0">
                {Array(48).fill(0).map((item,index) => <div key={index} className="w-[48%] md:w-[24%]"><Product key={index}/></div>)}
            </div>
            <div className="flex mt-8"><div className="m-auto"><Pagination totalPages={48/12}/></div></div>
        </div>
      </div>
      <MenuModal setPrice={setPrice} setCategory={setCategory} isModal={isModal} setIsModal={setIsModal}/>
    </div>
  );
};

export default MenuPage;
