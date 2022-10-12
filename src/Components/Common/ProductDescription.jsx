import React from 'react'
import { FaStar } from 'react-icons/fa'

const ProductDescription = () => {
  return (
    <div>
        <h2 className='text-2xl text-[#B61C0B]  block py-3 font-semibold'>Mô tả sản phẩm</h2>
        <div>
            {Array(3).fill(0).map((item, index) => <p className='block text-[#3A445E] mb-5' key={index}>– Với thành phần chính là cá hồi tươi ngon cùng với cà chua cắt lát, ít rau thơm tạo nên món ăn đầy đủ dinh dưỡng.</p>)}
        </div>

        <div>
            <h2 className='text-lg font-semibold text-black'>Đánh giá Bụng Cá Hồi Áp Chảo</h2>

            <div className="border border-slate-300 rounded-md my-4 flex flex-col md:flex-row justify-between items-center p-2 gap-3">
                <div className='w-full md:w-3/4'>
                    <div className='flex items-center gap-4 text-base'>
                        <div className='flex items-center gap-1'>
                            <p>5</p>
                            <div className='text-[#B61C0B]'><FaStar /></div>
                        </div>
                        <div className='flex-1 h-4 bg-slate-300'></div>
                        <div className='flex gap-2 text-[#03a0e2]'><p>0%</p> <p>|</p> <p>0 đánh giá</p></div>
                    </div>

                    <div className='flex items-center gap-4 text-base'>
                        <div className='flex items-center gap-1'>
                            <p>4</p>
                            <div className='text-[#B61C0B]'><FaStar /></div>
                        </div>
                        <div className='flex-1 h-4 bg-slate-300'></div>
                        <div className='flex gap-2 text-[#03a0e2]'><p>0%</p> <p>|</p> <p>0 đánh giá</p></div>
                    </div>

                    <div className='flex items-center gap-4 text-base'>
                        <div className='flex items-center gap-1'>
                            <p>3</p>
                            <div className='text-[#B61C0B]'><FaStar /></div>
                        </div>
                        <div className='flex-1 h-4 bg-slate-300'></div>
                        <div className='flex gap-2 text-[#03a0e2]'><p>0%</p> <p>|</p> <p>0 đánh giá</p></div>
                    </div>

                    <div className='flex items-center gap-4 text-base'>
                        <div className='flex items-center gap-1'>
                            <p>2</p>
                            <div className='text-[#B61C0B]'><FaStar /></div>
                        </div>
                        <div className='flex-1 h-4 bg-slate-300'></div>
                        <div className='flex gap-2 text-[#03a0e2]'><p>0%</p> <p>|</p> <p>0 đánh giá</p></div>
                    </div>

                    <div className='flex items-center gap-4 text-base'>
                        <div className='flex items-center gap-1'>
                            <p>1</p>
                            <div className='text-[#B61C0B]'><FaStar /></div>
                        </div>
                        <div className='flex-1 h-4 bg-slate-300'></div>
                        <div className='flex gap-2 text-[#03a0e2]'><p>0%</p> <p>|</p> <p>0 đánh giá</p></div>
                    </div>
                </div>
                <div>
                    <button className='text-base md:text-lg font-medium bg-[#B61C0B] text-white py-2 px-4 rounded-md'>ĐÁNH GIÁ NGAY</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDescription