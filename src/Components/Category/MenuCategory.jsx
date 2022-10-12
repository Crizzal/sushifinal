import React from 'react'

const MenuCategory = ({setCategory, setPrice}) => {
  return (
    <div className='hidden md:block'>
        <h1 className='text-base font-semibold text-[#333333]'>THỰC ĐƠN</h1>
        <ul className='pl-2'>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='sale'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="sale">Flash Sale</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='ticket'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="ticket">Tổng hợp khuyến mãi</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='combo'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="combo">Combo box</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='Sashimi'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="Sashimi">Sashimi</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='ComboSashimi'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="ComboSashimi">Combo Sashimi</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='Sushi'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="Sushi">Sushi</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='ComboSushi'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="ComboSushi">Combo Sushi</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='Maki'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="Maki">Maki</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='ComboMaki'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="ComboMaki">Combo Maki</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='monnuong'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="monnuong">Món nướng</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='monchien'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="monchien">Món chiên</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='comcuon'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="comcuon">Cơm cuộn</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='combocomcuon'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="combocomcuon">Combo cơm cuộn</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='comnhat'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="comnhat">Cơm nhật</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='Bento'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="Bento">Bento</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='udon'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="udon">Cơm & udon</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='Salad'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="Salad">Salad</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='ankem'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="ankem">Món ăn kèm</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setCategory(e.target.id)} type="radio" name="category" id='drink'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="drink">Đồ uống</label></li>
        </ul>

        <h1 className='text-base font-semibold text-[#333333] mt-8'>GIÁ</h1>
        <ul className='pl-2'>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setPrice(e.target.id)} type="radio" name="price" id='sale'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="sale">Giá dưới 100,000₫</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setPrice(e.target.id)} type="radio" name="price" id='ticket'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="ticket">100,000₫ - 200,000₫</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setPrice(e.target.id)} type="radio" name="price" id='combo'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="combo">300,000₫ - 500,000₫</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setPrice(e.target.id)} type="radio" name="price" id='Sashimi'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="Sashimi">500,000₫ - 700,000₫</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setPrice(e.target.id)} type="radio" name="price" id='ComboSashimi'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="ComboSashimi">700,000₫ - 1,000,000₫</label></li>
            <li className='flex items-center py-2 text-base group'><input className='mr-2' onChange={e => setPrice(e.target.id)} type="radio" name="price" id='ComboSushi'/> <label className='cursor-pointer text-[#334862] group-hover:text-[#333333]' htmlFor="ComboSushi">Giá trên 1,000,000₫</label></li>
        </ul>
    </div>
  )
}

export default MenuCategory