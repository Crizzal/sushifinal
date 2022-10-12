import React from 'react'
import { Link } from 'react-router-dom'
import SushiWayCategory from '../Components/Category/SushiWayCategory'
import New from '../Components/Common/New'

const SushiWayPage = () => {
  return (
    <div className='w-full md:max-w-[1360px] px-2 m-auto md:mt-8'>
        <div className='flex items-center text-base mt-2'><Link to="/">Trang chủ</Link> <span className='mx-1'>/</span> <p className='text-[#848484]'>Chuyên mục Shushiway</p></div>
        <h1 className='block mt-5 mb-3 text-2xl text-[#B61C0B]'>Chuyên mục Sushiway</h1>
        <div className='flex flex-col md:flex-row gap-5'>
            <SushiWayCategory />
            <div className='w-full md:w-3/4 flex flex-wrap gap-5'>
              {Array(5).fill(0).map((item, index) => <div className='w-full md:w-[48%]' key={index}><New key={index}/></div>)}
            </div>
        </div>
    </div>
  )
}

export default SushiWayPage