import React from 'react'
import { IoIosSearch } from "react-icons/io";
const FilterHeader = () => {
  return (
    <header className='bg-black text-white p-10'>
        <div className='flex items-center text-xl'>
            <div className='p-1 rounded-full border'>
                <IoIosSearch className='text-3xl'/>
            </div>
            <input className='bg-black px-5 focus:outline-none' placeholder='Search' type="search"/>
        </div>
        <div>
            <div>

            </div>
            <select>
                <option>ggs</option>
            </select>
        </div>
    </header>
  )
}

export default FilterHeader