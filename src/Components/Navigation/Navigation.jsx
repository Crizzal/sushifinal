import React, { useEffect, useState } from "react";
import bento from "../../assets/image/bentoIcon.png";
import car from "../../assets/image/carIcon.png";
import cartIcon from "../../assets/image/cart.png";
import collection from "../../assets/image/collectionIcon.png";
import combo from "../../assets/image/comboIcon.png";
import drink from "../../assets/image/drinkIcon.png";
import fish from "../../assets/image/fishIcon.png";
import gift from "../../assets/image/giftIcon.png";
import banner from "../../assets/image/headerBaner.jpg";
import logo from "../../assets/image/logo.jpg";
import maps from "../../assets/image/maps.png";
import order from "../../assets/image/order.png";
import phone from "../../assets/image/phoneIcon.png";
import product from "../../assets/image/productIcon.png";
import rice from "../../assets/image/riceIcon.png";
import salad from "../../assets/image/saladIcon.png";
import sale from "../../assets/image/saleIcon.png";
import sashimi from "../../assets/image/sashimiIcon.png";
import seven from "../../assets/image/sevenIcon.png";
import sushi from "../../assets/image/sushiIcon.png";
import user from "../../assets/image/user.png";

import { FaAlignLeft, FaAngleDown, FaBars, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { productFilterSelector } from "../../store/selector";
import { setProductFilter } from "../../store/slice/productSlice";
import MiniCart from "../Cart/MiniCart";

const Navigation = ({ isDropDown, setIsModal }) => {
  const productFilter = useSelector(productFilterSelector);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const onSearch = () => {
    dispatch(setProductFilter({ ...productFilter, name: search }));
    return navigate("/menu");
  };

  useEffect(() => {
    if (search === "") {
      dispatch(setProductFilter({ ...productFilter, name: "" }));
    }
  }, [search]);

  return (
    <div>
      <img src={banner} alt="" className="w-full object-cover" />
      <div className="bg-[#2d2d2d] flex flex-col">
        <div className="flex justify-between items-center m-auto px-4 md:px-0 w-full lg:w-[1360px] text-white">
          <div
            className="w-1/4 md:hidden cursor-pointer"
            onClick={() => setIsModal(true)}
          >
            <FaBars />
          </div>
          <Link to="/" className="md:pl-[90px] pb-[10px]">
            <img
              src={logo}
              alt=""
              className="w-[90px] h-[90px] object-cover rounded-sm md:mr-20"
            />
          </Link>
          <div className="hidden md:block flex-1 md:pt-[10px] md:pr-[90px] md:ml-[10px]">
            <div className="mb-[5px] rounded-3xl overflow-hidden flex items-center justify-between">
              <input
                type="text"
                className="h-10 outline-none border-none px-2 flex-1 text-black"
                placeholder="Tìm kiếm sản phẩm"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="fs-base h-[40px] px-5 flex items-center bg-[#b61c0b] text-white"
                onClick={onSearch}
              >
                <div className="m-auto">
                  <FaSearch />
                </div>
              </button>
            </div>
            <ul className="hidden md:flex gap-3 text-white text-sm">
              <li>Sushi</li>
              <li>Sashimi</li>
              <li>Cá hồi</li>
              <li>Rong biển</li>
            </ul>
          </div>
          <ul className="flex items-center justify-end w-1/4 md:w-auto">
            <li className="hidden md:block">
              <a
                href=""
                className="flex flex-col items-center px-[10px] mx-[10px]"
              >
                <img src={order} alt="" />
                <p className="text-white text-sm font-bold">Đơn hàng</p>
              </a>
            </li>
            <li className="hidden md:block">
              <Link
                to="/map"
                className="flex flex-col items-center px-[10px] mx-[10px]"
              >
                <img src={maps} alt="" />
                <p className="text-white text-sm font-bold">Cửa hàng</p>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="flex flex-col items-center md:px-[10px] md:mx-[10px]"
              >
                <img src={user} alt="" />
                <p className="text-white text-sm font-bold hidden md:block">
                  Tài khoản
                </p>
              </Link>
            </li>
            <li className="relative group">
              <a
                href=""
                className="flex flex-col items-center md:px-[10px] mx-[10px]"
              >
                <img src={cartIcon} alt="" />
                <p className="text-white text-sm font-bold hidden md:block">
                  Giỏ hàng
                </p>
              </a>
              <div className="hidden group-hover:block gap-3 absolute top-[55px] right-[15px] z-[99]">
                <MiniCart />
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-[#2d2d2d] hidden md:block z-50 w-full duration-300">
          {/* style={{position:isDropDown&&"fixed",top:"0"}} */}
          <div className="flex m-auto w-[1360px] px-5">
            <div className="relative w-1/4 pr-7 group">
              <div className="bg-[#B61C0B] text-base font-semibold text-white flex items-center justify-between w-full px-4 py-3 rounded-md hover:cursor-pointer group">
                <div>
                  <FaAlignLeft />
                </div>
                <p>DANH MỤC SẢN PHẨM</p>
                <div>
                  <FaAngleDown />
                </div>
              </div>
              <div className="absolute w-full pr-7 hidden group-hover:block z-50 bg-white">
                {/* style={{display:!isDropDown&&"block"}} */}
                <ul className="w-full shadow-2xl">
                  <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                    <a href="" className="flex w-full">
                      <img src={gift} alt="" className="mr-[10px]" />
                      <p>Tổng hợp khuyến mãi</p>
                    </a>
                  </li>
                  <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                    <a href="" className="flex w-full">
                      <img src={collection} alt="" className="mr-[10px]" />
                      <p>Bộ sưu tập sushi</p>
                    </a>
                  </li>
                  <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                    <a href="" className="flex w-full">
                      <img src={fish} alt="" className="mr-[10px]" />
                      <p>Sashimi</p>
                    </a>
                  </li>
                  <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                    <a href="" className="flex w-full">
                      <img src={sushi} alt="" className="mr-[10px]" />
                      <p>Sushi</p>
                    </a>
                  </li>
                  <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                    <a href="" className="flex w-full">
                      <img src={salad} alt="" className="mr-[10px]" />
                      <p>Salad</p>
                    </a>
                  </li>
                  <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                    <a href="" className="flex w-full">
                      <img src={bento} alt="" className="mr-[10px]" />
                      <p>Bento</p>
                    </a>
                  </li>
                  <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                    <a href="" className="flex w-full">
                      <img src={rice} alt="" className="mr-[10px]" />
                      <p>Cơm nhật</p>
                    </a>
                  </li>
                  <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                    <a href="" className="flex w-full">
                      <img src={drink} alt="" className="mr-[10px]" />
                      <p>Đồ uống</p>
                    </a>
                  </li>
                  <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                    <a href="" className="flex w-full">
                      <img src={combo} alt="" className="mr-[10px]" />
                      <p>Combo Sushi</p>
                    </a>
                  </li>
                  <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                    <a href="" className="flex w-full">
                      <img src={sashimi} alt="" className="mr-[10px]" />
                      <p>Combo Sashimi</p>
                    </a>
                  </li>
                  <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                    <a href="" className="flex w-full">
                      <img src={product} alt="" className="mr-[10px]" />
                      <p>Sản phẩm đóng gói</p>
                    </a>
                  </li>
                  <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                    <a href="" className="flex w-full">
                      <img src={car} alt="" className="mr-[10px]" />
                      <p>Giao hàng đúng giờ</p>
                    </a>
                  </li>
                  <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                    <a href="" className="flex w-full">
                      <img src={seven} alt="" className="mr-[10px]" />
                      <p>Miễn phí đổi trả trong 7 ngày</p>
                    </a>
                  </li>
                  <li className="px-[15px] py-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                    <a href="" className="flex w-full">
                      <img src={sale} alt="" className="mr-[10px]" />
                      <p>Ưu đãi hấp dẫn mỗi ngày</p>
                    </a>
                  </li>
                  <li className="p-[10px] w-full hover:bg-[#F4DDDB] text-sm border-b-[1px] border-[#ddd]">
                    <a
                      href=""
                      className="flex items-center w-full px-[15px] py-[10px] border border-[#B61C0B] rounded-md"
                    >
                      <img src={phone} alt="" className="mr-[10px]" />
                      <div className="flex-col">
                        <p>Gọi mua hàng: 0899 091 779</p>
                        <p>(8:00 - 21:30 T2 - CN)</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="flex flex-1 justify-center  items-center gap-5 text-white text-base font-semibold md:ml-20">
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/introduce">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/menu">Thực đơn</Link>
              </li>
              <li>
                <Link to="/sushiway" href="">
                  Chuyên mục Sushiway
                </Link>
              </li>
              <li>
                <Link to="/contact">Liên hệ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="bg-[#2d2d2d] block md:hidden z-50 w-full"
          style={{ position: isDropDown && "fixed", top: "0" }}
        ></div>
        <div className="flex-1 md:hidden md:pt-[10px] md:pr-[90px] md:ml-[10px]">
          <form className="mb-[5px] rounded-3xl overflow-hidden flex items-center justify-between w-[90%] m-auto">
            <input
              type="text"
              className="h-10 outline-none border-none px-2 flex-1 text-black"
            />
            <button className="fs-base h-[40px] px-5 flex items-center bg-[#b61c0b] text-white">
              <div className="m-auto">
                <FaSearch />
              </div>
            </button>
          </form>
          <ul className="flex gap-3 justify-center text-white text-sm">
            <li>Sushi</li>
            <li>Sashimi</li>
            <li>Cá hồi</li>
            <li>Rong biển</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
