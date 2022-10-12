import React from 'react'
import { FaFacebook, FaGooglePlusG } from "react-icons/fa";

const RegisterPage = () => {
  return (
    <div className="max-w-[1360px] m-auto flex">
      <form
        action=""
        className="w-full lg:max-w-[560px] m-auto px-4 pb-8 mt-24"
      >
        <h3 className="text-center text-2xl font-semibold text-[#333333] mb-2">
          ĐĂNG KÝ TÀI KHOẢN
        </h3>
        <div className="flex flex-col mb-1">
          <label className="text-sm mb-1 text-[#333333]" htmlFor="username">
            Họ và tên <span className="text-red-600">*</span>
          </label>
          <input
            className="px-3 py-[5px] rounded mb-4 border border-black outline-none text-base"
            type="text"
            id="username"
          />
        </div>
        <div className="flex flex-col mb-1">
          <label className="text-sm mb-1 text-[#333333]" htmlFor="phone">
            Số điện thoại<span className="text-red-600">*</span>
          </label>
          <input
            className="px-3 py-[5px] rounded mb-4 border border-black outline-none text-base"
            type="text"
            id="phone"
          />
        </div>
        <div className="flex flex-col mb-1">
          <label className="text-sm mb-1 text-[#333333]" htmlFor="password">
            Mật khẩu<span className="text-red-600">*</span>
          </label>
          <input
            className="px-3 py-[5px] rounded mb-4 border border-black outline-none text-base"
            type="password"
            id="password"
          />
        </div>
        <div className="flex flex-col mb-1">
          <label className="text-sm mb-1 text-[#333333]" htmlFor="comfirPassword">
            Nhập lại mật khẩu<span className="text-red-600">*</span>
          </label>
          <input
            className="px-3 py-[5px] rounded mb-4 border border-black outline-none text-base"
            type="password"
            id="comfirPassword"
          />
        </div>
        <div className="flex flex-col mb-1">
          <label className="text-sm mb-1 text-[#333333]" htmlFor="email">
            Email<span className="text-red-600">*</span>
          </label>
          <input
            className="px-3 py-[5px] rounded mb-4 border border-black outline-none text-base"
            type="text"
            id="email"
          />
        </div>
        <button className="w-full py-2 my-4 bg-[#B61C0B] text-lg font-medium text-white rounded">ĐĂNG KÝ TÀI KHOẢN</button>
        <div className="text-center mb-5">Hoặc đăng nhập bằng</div>
        <div className="flex justify-between flex-col lg:flex-row gap-5 mt-2">
            <button className="flex items-center justify-center gap-1 flex-1 text-white text-base px-4 py-3 rounded bg-[#DD4B39]"><div><FaGooglePlusG /></div><p> Đăng nhập bằng Google</p></button><button className="flex items-center justify-center gap-1 flex-1 text-white text-base px-4 py-3 rounded bg-[#3B5998]"><div><FaFacebook /></div><p> Đăng nhập bằng facebook</p></button>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage