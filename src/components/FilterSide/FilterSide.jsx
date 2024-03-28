import React, { useState } from 'react'
import { MdArrowDropDown } from "react-icons/md";
const FilterSide = () => {
    const [show,setShow] = useState(false)
  return (
    <aside className='w-1/6'>
        <div className='px-5 border border-red-600 rounded-3xl flex flex-col bg-black text-white py-4'>
            <p className='text-3xl py-10'>Get your best profession with LuckyJob</p>
            <button className='rounded-full bg-sky-200 py-1 text-black'>Learn More</button>
        </div>
        <div onClick={()=>{setShow(!show)}} className='flex items-center justify-between text-2xl font-bold mt-5 '>
                <h1>Filters</h1>
                <MdArrowDropDown className={`hover:cursor-pointer ${show?'block':'hidden'}`}/>
                <MdArrowDropDown className={`rotate-90 hover:cursor-pointer ${show?'hidden':'block'}`}/>
        </div>
        <div className={`border-r-2 border-slate-200 ${show?'hidden':'block'}`}>
            
            <h3 className='text-sm text-gray-500 mt-4 py-2'>Working Schedule</h3>
            <form action="">
                <input type="checkbox" />
                <label htmlFor="">Full time</label><br/>
                <input type="checkbox" />
                <label htmlFor="">Part time</label><br/>
                <input type="checkbox" />
                <label htmlFor="">Internship</label><br/>
                <input type="checkbox" />
                <label htmlFor="">Project work</label><br/>
                <input type="checkbox" />
                <label htmlFor="">Volunteering</label>
            </form>
            <h3 className='mt-5 text-sm text-gray-500 py-2'>Employment type</h3>
            <form action="">
                <input type="checkbox" />
                <label htmlFor="">Full day</label><br/>
                <input type="checkbox" />
                <label htmlFor="">Flexible schedule</label><br/>
                <input type="checkbox" />
                <label htmlFor="">Shift work</label><br/>
                <input type="checkbox" />
                <label htmlFor="">Distant work</label><br/>
                <input type="checkbox" />
                <label htmlFor="">Shift method</label>
            </form>
        </div>
    </aside>
    
  )
}

export default FilterSide