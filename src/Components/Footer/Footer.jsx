import React from "react";
import logo from "../../assets/image/logo.jpg";

const Footer = () => {
  return (
    <div className="mt-[60px]">
      <div className="relative flex pb-8">
        <img
          src="http://sushiway.com.vn/wp-content/uploads/2022/07/SSW-BannerWeb5.jpg"
          alt=""
          className="m-auto"
        />
        <div className="absolute top-[22%] md:top-1/3 right-1/2 translate-x-1/2 text-center">
          <div className="text-base md:text-xl text-black mb-2 md:my-5">Delivery & Take Away</div>
          <div className="my-1 md:my-3 text-lg md:text-4xl text-[#B61C0B] font-bold text-center">
            Tinh ý mang món ngon tròn vị đến tận nhà
          </div>
          <a
            href=""
            className="inline-block text-base md:text-xl border border-[#B61C0B] rounded text-[#C32F30] px-5 md:py-2 md:my-2 "
          >
            Xem thực đơn
          </a>
        </div>
      </div>

      <footer>
        <div className="bg-[#333333]">
          <div className="w-full md:max-w-[1360px] m-auto flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-0 py-1 px-4 md:px-0">
            <div className="flex justify-evenly md:justify-start gap-4 md:ml-10">
              <img
                src="https://sushiway.com.vn/wp-content/uploads/2022/06/IMAGE-9.png"
                alt=""
              />
              <img
                src="https://sushiway.com.vn/wp-content/uploads/2022/06/IMAGE-10.png"
                alt=""
              />
              <img
                src="https://sushiway.com.vn/wp-content/uploads/2022/07/IMAGE-11.png"
                alt=""
              />
              <img
                src="https://sushiway.com.vn/wp-content/uploads/2022/07/IMAGE-12.png"
                alt=""
              />
              <img
                src="https://sushiway.com.vn/wp-content/uploads/2022/07/IMAGE-13.png"
                alt=""
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <p className="text-[#f1f1f1] text-sm">
                Bạn muốn nhận khuyến mãi đặc biệt? Đăng ký ngay.
              </p>
              <div className="rounded-3xl overflow-hidden h-10 md:ml-3">
                <form action="" className="h-10 flex w-full">
                  <input
                    type="text"
                    className="h-full px-3 outline-none flex-1"
                  />
                  <button className="bg-[#FABD0D] text-xs text-[#333333] min-w-[83px]">
                    Đăng ký
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white px-2">
          <div className="w-full md:max-w-[1360px] m-auto flex flex-col md:flex-row gap-3 md:gap-0 justify-between mt-4 pt-1 pb-10">
            <div>
              <img src={logo} alt="" className="w-[100px] m-auto" />
              <div className="font-bold text-base mb-4">
                Địa chỉ: Số 11 Đường 14 KĐT An Phú, Quận Thủ Đức, TP. HCM
              </div>
              <div className="text-base mb-4">Số điện thoại: 0899 091 779</div>
              <div className="text-base mb-4">Email: info@sushiway.vn</div>
              <img
                src="https://sushiway.com.vn/wp-content/uploads/2022/06/IMAGE-14.png"
                alt=""
              />
            </div>

            <ul className="flex flex-col">
              <div className="mb-2 text-base text-[#b61c0b] font-bold">
                Hỗ trợ khách hàng
              </div>
              <li>
                <a className="block mb-2 text-base text-[#333333] hover:opacity-70 cursor-pointer">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a
                  className="block mb-2 text-base text-[#333333] hover:opacity-70 cursor-pointer"
                  href=""
                >
                  Hệ thống cửa hàng
                </a>
              </li>
              <li>
                <a
                  className="block mb-2 text-base text-[#333333] hover:opacity-70 cursor-pointer"
                  href=""
                >
                  Gọi điện đặt hàng
                </a>
              </li>
            </ul>
            <ul className="flex flex-col">
              <div className="mb-2 text-base text-[#b61c0b] font-bold">
                Chính sách
              </div>
              <li>
                <a className="block mb-2 text-base text-[#333333] hover:opacity-70 cursor-pointer">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a
                  className="block mb-2 text-base text-[#333333] hover:opacity-70 cursor-pointer"
                  href=""
                >
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a
                  className="block mb-2 text-base text-[#333333] hover:opacity-70 cursor-pointer"
                  href=""
                >
                  Chính sách giao hàng
                </a>
              </li>
            </ul>
            <ul className="flex flex-col">
              <div className="mb-2 text-base text-[#b61c0b] font-bold">
                Tổng đài hỗ trợ
              </div>
              <li className="block mb-2 text-base text-[#333333] hover:opacity-70">
              Gọi mua hàng: <a href="tel:19001009" className="text-[#007bff]">0899 091 779</a> (8h-22h)
              </li>
              <li className="block mb-2 text-base text-[#333333] hover:opacity-70">
              Gọi khiếu nại: <a href="tel:19001009" className="text-[#007bff]">0899 091 779</a> (8h-22h)
              </li>
              <li>
                <a
                  className="block mb-2 text-base text-[#333333] hover:opacity-70 cursor-pointer"
                  href=""
                >
                  Phương thức thanh toán
                </a>
              </li>
              <img src="https://sushiway.com.vn/wp-content/uploads/2022/06/IMAGE-15.png" alt="" className="w-1/2 md:w-full"/>
            </ul>
          </div>
          <div className="text-center text-base mb-2 mt-10">© Bản quyền thuộc về Công ty Cổ phần Ẩm Thực Nhật Phong Châu Phố - Sushi Way | Cung cấp bởi GMO Agency</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
