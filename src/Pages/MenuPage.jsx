import React, { useEffect, useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ProductApi from "../Api/product";
import MenuCategory, { priceData } from "../Components/Category/MenuCategory";
import Pagination from "../Components/Common/Pagination";
import Product from "../Components/Common/Product";
import MenuModal from "../Components/Modal/MenuModal";
import withLayout from "../HOCs/WithLayout";
import { productFilterSelector, productTypeSelector } from "../store/selector";
import {
  fetchProductTypes,
  setProductFilter,
} from "../store/slice/productSlice";

const MenuPage = () => {
  const [isModal, setIsModal] = useState(false);

  const productTypes = useSelector(productTypeSelector);
  const productFilter = useSelector(productFilterSelector);
  const [product, setProduct] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await ProductApi.getProducts(productFilter);
        if (res.status === 200) {
          setProduct(res.data);
        }
      } catch (error) {}
    }
    fetchData();
  }, [productFilter]);

  useEffect(() => {
    dispatch(fetchProductTypes());
  }, []);

  const onCategoryChange = (id) => {
    if (id) {
    }
  };

  const onPriceChange = (id) => {
    if (id) {
      if (priceData?.[id]) {
        dispatch(setProductFilter({ ...productFilter, ...priceData[id] }));
      }
    }
  };
  const onSortChange = (e) => {
    const value = e.target.value;
    switch (value) {
      case "hightolow":
        dispatch(
          setProductFilter({
            ...productFilter,
            sortBy: "price",
            sortType: "desc",
          })
        );
        break;

      case "lowtohigh":
        dispatch(
          setProductFilter({
            ...productFilter,
            sortBy: "price",
            sortType: "asc",
          })
        );

      default:
        dispatch(
          setProductFilter({
            ...productFilter,
            sortBy: "",
            sortType: "",
          })
        );
        break;
    }
  };

  return (
    <div className="max-w-[1360px] m-auto">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-[60px]">
        <h1 className="text-xl text-[#222222] font-bold">THỰC ĐƠN</h1>
        <div
          className="md:hidden flex items-center gap-2 text-base font-semibold cursor-pointer"
          onClick={() => setIsModal(true)}
        >
          <div>
            <FaAlignLeft />
          </div>
          LỌC
        </div>
        <div className="flex items-center gap-5">
          <p className="hidden md:block">{`Hiển thị 1–12 của ${
            product?.data?.total || 100
          } kết quả`}</p>
          <select
            name=""
            id=""
            className="px-5 py-2 border border-black my-1"
            defaultValue={"popular"}
            onChange={onSortChange}
          >
            <option className="" value="popular">
              Thứ tự theo mức độ phổ biến
            </option>
            <option className="" value="start">
              Thứ tự theo điểm đánh giá
            </option>
            <option className="" value="new">
              Mới nhất
            </option>
            <option className="" value="hightolow">
              Thứ tự theo giá: thấp đến cao
            </option>
            <option className="" value="lowtohigh">
              Thứ tự theo giá: cao đến thấp
            </option>
          </select>
        </div>
      </div>
      <div className="flex justify-between gap-3 py-8">
        <MenuCategory
          setCategory={onCategoryChange}
          setPrice={onPriceChange}
          data={productTypes}
        />
        <div className="w-full md:w-3/4">
          <div className="flex flex-wrap justify-between gap-3 px-4 md:px-0">
            {product?.data?.items.length > 0 ? (
              product?.data?.items?.map((item, index) => (
                <div key={index} className="w-[48%] md:w-[24%]">
                  <Product key={item.Code} data={item} />
                </div>
              ))
            ) : (
              <p className="text-center">Not found</p>
            )}
          </div>
          <div className="flex mt-8">
            <div className="m-auto">
              <Pagination totalPages={product?.data?.last_page} />
            </div>
          </div>
        </div>
      </div>
      <MenuModal
        setPrice={onPriceChange}
        setCategory={onCategoryChange}
        isModal={isModal}
        setIsModal={setIsModal}
      />
    </div>
  );
};

export default withLayout(MenuPage);
