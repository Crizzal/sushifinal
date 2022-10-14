import React from "react";

export const priceData = {
  sale: {
    priceFrom: 0,
    priceTo: 100000,
  },
  ticket: {
    priceFrom: 100000,
    priceTo: 200000,
  },
  combo: {
    priceFrom: 300000,
    priceTo: 500000,
  },
  Sashimi: {
    priceFrom: 500000,
    priceTo: 700000,
  },
  ComboSashimi: {
    priceFrom: 700000,
    priceTo: 1000000,
  },
  ComboSushi: {
    priceFrom: 1000000,
    priceTo: 0,
  },
};

const MenuCategory = ({ setCategory, setPrice, data: categories }) => {
  return (
    <div className="hidden md:block">
      <h1 className="text-base font-semibold text-[#333333]">THỰC ĐƠN</h1>
      <ul className="pl-2">
        {categories?.map((category, index) => {
          if (category.is_show == 0) return null;
          return (
            <li
              className="flex items-center py-2 text-base group"
              key={category.TYPE_ID}
            >
              <input
                className="mr-2"
                onChange={() => setCategory(category.TYPE_ID)}
                type="radio"
                name="category"
                id={`sale-${category?.TYPE_ID}`}
              />
              <label
                className="cursor-pointer text-[#334862] group-hover:text-[#333333]"
                htmlFor={`sale-${category?.TYPE_ID}`}
              >
                {category.Name}
              </label>
            </li>
          );
        })}
      </ul>

      <h1 className="text-base font-semibold text-[#333333] mt-8">GIÁ</h1>
      <ul className="pl-2">
        <li className="flex items-center py-2 text-base group">
          <input
            className="mr-2"
            onChange={(e) => setPrice(e.target.id)}
            type="radio"
            name="price"
            id="sale"
          />
          <label
            className="cursor-pointer text-[#334862] group-hover:text-[#333333]"
            htmlFor="sale"
          >
            Giá dưới 100,000₫
          </label>
        </li>
        <li className="flex items-center py-2 text-base group">
          <input
            className="mr-2"
            onChange={(e) => setPrice(e.target.id)}
            type="radio"
            name="price"
            id="ticket"
          />
          <label
            className="cursor-pointer text-[#334862] group-hover:text-[#333333]"
            htmlFor="ticket"
          >
            100,000₫ - 200,000₫
          </label>
        </li>
        <li className="flex items-center py-2 text-base group">
          <input
            className="mr-2"
            onChange={(e) => setPrice(e.target.id)}
            type="radio"
            name="price"
            id="combo"
          />
          <label
            className="cursor-pointer text-[#334862] group-hover:text-[#333333]"
            htmlFor="combo"
          >
            300,000₫ - 500,000₫
          </label>
        </li>
        <li className="flex items-center py-2 text-base group">
          <input
            className="mr-2"
            onChange={(e) => setPrice(e.target.id)}
            type="radio"
            name="price"
            id="Sashimi"
          />
          <label
            className="cursor-pointer text-[#334862] group-hover:text-[#333333]"
            htmlFor="Sashimi"
          >
            500,000₫ - 700,000₫
          </label>
        </li>
        <li className="flex items-center py-2 text-base group">
          <input
            className="mr-2"
            onChange={(e) => setPrice(e.target.id)}
            type="radio"
            name="price"
            id="ComboSashimi"
          />
          <label
            className="cursor-pointer text-[#334862] group-hover:text-[#333333]"
            htmlFor="ComboSashimi"
          >
            700,000₫ - 1,000,000₫
          </label>
        </li>
        <li className="flex items-center py-2 text-base group">
          <input
            className="mr-2"
            onChange={(e) => setPrice(e.target.id)}
            type="radio"
            name="price"
            id="ComboSushi"
          />
          <label
            className="cursor-pointer text-[#334862] group-hover:text-[#333333]"
            htmlFor="ComboSushi"
          >
            Giá trên 1,000,000₫
          </label>
        </li>
      </ul>
    </div>
  );
};

export default MenuCategory;
