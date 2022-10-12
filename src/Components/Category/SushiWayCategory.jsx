import React from 'react'
import { Link } from 'react-router-dom'

const SushiWayCategory = () => {
  return (
    <div>
        <h2 className='text-[#898989] text-xl mb-5 font-bold'>Danh mục</h2>
        <div className='text-base text-[#B61C0B] py-[6px]'><Link to="/">Chuyên mục SuShiway</Link></div>
        <div className='text-base text-[#898989] py-[6px]'><Link to="/">Tin tức</Link></div>

        <h2 className='mb-3 text-2xl font-semibold mt-4'>Bài biết mới</h2>
        <div className='py-[6px] text-[#898989] text-base'><Link to="/">ĐẶC QUYỀN ƯU ĐÃI CHO THÀNH VIÊN: GIẢM ĐẾN 15%</Link></div>
        <div className='py-[6px] text-[#898989] text-base'><Link to="/">THỨ 3, ƯU ĐÃI THẢ GA</Link></div>
        <div className='py-[6px] text-[#898989] text-base'><Link to="/">SIÊU ƯU ĐÃI LỄ QUỐC KHÁNH TỪ NGÀY 1/9 – 4/9</Link></div>
        <div className='py-[6px] text-[#898989] text-base'><Link to="/">CHỌN COMBO TO – ĂN NO ĐÓN LỄ</Link></div>
        <div className='py-[6px] text-[#898989] text-base'><Link to="/">MỪNG KHAI TRƯƠNG CHI NHÁNH QUẬN 4</Link></div>

        <h2 className='mb-3 text-2xl font-semibold mt-4'>Phản hồi gần đây</h2>
        <div className='py-[6px] text-[#898989] text-base'><Link to="/">hoangvinh trong Trà Olong Tea Plus</Link></div>

    </div>
  )
}

export default SushiWayCategory