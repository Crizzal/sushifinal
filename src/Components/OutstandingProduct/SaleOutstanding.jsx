import React from 'react'
import Product from '../Common/Product'

const SaleOutstanding = () => {
    //san pham noi bat dang ha gia
  return (
    <div className='flex flex-wrap justify-between gap-1'>
        {Array(10).fill(0).map((item,index) => <div className='w-[48%] md:w-[18%]' key={index}><Product key={index}/></div>) }
    </div>
  )
}

export default SaleOutstanding