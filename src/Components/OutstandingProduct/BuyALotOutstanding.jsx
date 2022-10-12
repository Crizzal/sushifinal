import React from 'react'
import Product from '../Common/Product'

const BuyALotOutstanding = () => {
    // Sp noi bat duoc mua nhieu
  return (
    <div className='flex flex-wrap justify-between gap-1'>
        {Array(10).fill(0).map((item,index) => <div className='w-[48%] md:w-[18%]' key={index}><Product key={index}/></div>) }
    </div>
  )
}

export default BuyALotOutstanding