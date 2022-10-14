import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ProductApi from "../Api/product";
import gift from "../assets/image/giftIcon.png";
import ProductDescription from "../Components/Common/ProductDescription";
import SuggestProduct from "../Components/Common/SuggestProduct";
import Selling from "../Components/Selling/Selling";
import withLayout from "../HOCs/WithLayout";
import { addToCart } from "../store/slice/cartSlice";
import { formatCurrency } from "../ultils/format";

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const [numberItem, setNumberItem] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await ProductApi.getProduct(id);
        setProduct(response.data?.data);
      } catch (error) {}
    }
    fetchProduct();
  }, [id]);

  const addItemToCart = () => {
    const item = {
      image: product?.Image,
      name: product?.Name,
      quantity: numberItem,
      price: product?.Price,
      id: product?.PRO_ID,
    };

    dispatch(addToCart(item));
  };

  return (
    <div className="md:mt-8 px-2 w-full md:max-w-[1360px] m-auto">
      <div className="flex items-center text-base mt-2">
        <Link to="/" className="inline">
          Trang chủ
        </Link>
        <span className="mx-1">/</span>
        <Link to="menu" className="inline">
          Thực đơn
        </Link>
        <span className="mx-1">/</span>
        <p className="text-[#848484] inline">Chi tiết thực đơn</p>
      </div>
      <div className="md:mt-8 flex gap-5 flex-col md:flex-row">
        <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-full md:w-1/2 px-2 py-8">
            <img src={`${product?.Image}`} alt="" className="w-full" />
          </div>
          <div className="flex-1">
            <h1 className="block mb-3 font-semibold text-2xl md:text-3xl">
              <span
                dangerouslySetInnerHTML={{ __html: `${product?.Name}` }}
              ></span>
            </h1>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-base font-semibold text-[#3A445E]">
                Thực đơn:
              </p>
              <p className="text-base font-semibold text-[#B61C0B]">
                Món chiên
              </p>
              <p className="text-base font-semibold text-[#3A445E]">|</p>
              <p className="text-base font-semibold text-[#3A445E]">
                Tình trạng:
              </p>
              <p className="text-base font-semibold text-[#B61C0B]">
                {Number(product?.Amount) > 0 ? "Còn hàng" : "Hết hàng"}
              </p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-1 text-[#B61C0B]">
                {Array(product?.Votes || 5)
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
              <h2 className="text-3xl text-[#FF0000] font-semibold">
                {formatCurrency(product?.Price)}
              </h2>
            </div>

            <div className="text-base mb-5 font-semibold">
              {product?.Materials}
            </div>

            <div className="flex mb-4">
              <div
                className="px-2 py-2 border border-[#ddd] cursor-pointer bg-[#f9f9f9]"
                onClick={() => {
                  if (numberItem > 1) {
                    setNumberItem(numberItem - 1);
                  }
                }}
              >
                -
              </div>
              <div className="px-4 py-2 border border-[#ddd]">{numberItem}</div>
              <div
                className="px-2 py-2 border border-[#ddd] cursor-pointer bg-[#f9f9f9]"
                onClick={() => setNumberItem(numberItem + 1)}
              >
                +
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 mb-4">
              <button
                className="w-[48%] bg-[#0000001A] text-sm font-semibold h-11 text-black rounded-md"
                onClick={addItemToCart}
              >
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
                      <h3 className="text-[#2D2D2D] text-sm font-semibold mb-1">
                        NHẬP MÃ: FREESHIP0D
                      </h3>
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
        <div className="max-w-[70%]">
          <ProductDescription data={product?.Description} />
        </div>
        <div className="w-full md:w-1/4">
          <SuggestProduct />
        </div>
      </div>
      <Selling />
    </div>
  );
};

export default withLayout(ProductDetail);
