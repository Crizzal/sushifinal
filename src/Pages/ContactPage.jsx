import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full md:max-w-[1360px] m-auto text-black opacity-90">
      <div className="md:w-1/2 mt-8 px-4 md:px-0">
        <h1 className="text-2xl mb-5">CÔNG TY CỔ PHẦN ẨM THỰC NHẬT PHONG CHÂU PHỐ</h1>
        <p className="text-sm ml-4 mb-2">
          Địa chỉ: Số 11 Đường 14, Khu Đô Thị An Phú, Phường An Phú, TP.Thủ Đức,
          Hồ Chí Minh
        </p>
        <p className="text-sm ml-4 mb-2">Số điện thoại: 0899 091 779</p>
        <p className="text-sm ml-4 mb-2">Email: info.sushiway@gmail.com</p>
        <hr className="border-t border-black my-4"/>
        <div>
          <h2 className="text-sm mb-5 font-normal">LIÊN HỆ VỚI CHÚNG TÔI</h2>
          <form action="">
            <input type="text"  className="border border-black rounded px-2 outline-none block w-full mb-4 py-1" placeholder="Họ và tên"/>
            <input type="text"  className="border border-black rounded px-2 outline-none block w-full mb-4 py-1" placeholder="Email"/>
            <input type="text"  className="border border-black rounded px-2 outline-none block w-full mb-4 py-1" placeholder="Tiêu đề"/>
            <textarea name="" id="" cols="30" rows="10" className="border border-black rounded px-2 outline-none block w-full mb-4" placeholder="Mô tả"></textarea>
            <button className="w-full bg-[#B61C0B] text-[#212529] text-sm py-[3px] font-semibold rounded border border-black hover:text-white hover:bg-[#921609] duration-300 " type="submit">
              Gửi liên hệ của bạn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
