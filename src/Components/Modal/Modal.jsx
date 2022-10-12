import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Modal = ({isModal, setIsModal}) => {
  return (
    <div className='w-full h-[100vh] bg-[rgba(0,0,0,0.7)] fixed top-0 right-0 z-[99]' style={{display:isModal?"block":"none"}}>
        <div className='bg-white w-2/3 h-full duration-500' style={{transform:isModal?"translateX(0)":"translateX(-270px)"}}>
            <ul className='py-8 px-1'>
                <li onClick={() => setIsModal(false)}><Link className='px-5 py-4 block border-b border-[#666666D9] text-[#666666D9] hover:opacity-100 opacity-80 text-xs' to="/">TRANG CHỦ</Link></li>
                <li onClick={() => setIsModal(false)}><Link className='px-5 py-4 block border-b border-[#666666D9] text-[#666666D9] hover:opacity-100 opacity-80 text-xs' to="/introduce">GIỚI THIỆU</Link></li>
                <li onClick={() => setIsModal(false)}><Link className='px-5 py-4 block border-b border-[#666666D9] text-[#666666D9] hover:opacity-100 opacity-80 text-xs' to="/menu">THỰC ĐƠN</Link></li>
                <li onClick={() => setIsModal(false)}><Link className='px-5 py-4 block border-b border-[#666666D9] text-[#666666D9] hover:opacity-100 opacity-80 text-xs' to="/sushiway">CHUYÊN MỤC SUSHIWAY</Link></li>
                <li onClick={() => setIsModal(false)}><Link className='px-5 py-4 block border-b border-[#666666D9] text-[#666666D9] hover:opacity-100 opacity-80 text-xs' to="/contact">LIÊN HỆ</Link></li>
            </ul>
        </div>
        <div className='absolute top-3 right-3 p-2 text-[#666666D9] text-xl hover:text-white cursor-pointer' onClick={() => setIsModal(false)}><FaTimes /></div>
    </div>
  )
}

export default Modal