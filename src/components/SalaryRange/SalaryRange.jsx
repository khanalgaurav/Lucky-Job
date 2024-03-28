import React from 'react'
import ReactSlider from 'react-slider'
import './SalaryRange.css'
import { useState } from 'react'
const SalaryRange = () => {
    let min = 100;
    let max = 10000;
    const [value,setValue] = useState([min,max])
    console.log(value);
  return (
    <div className="flex items-center justify-center">
        <div className='p-3'>
            <div className='flex gap-5'>
                <p>Salary Range</p>
                <p>${value[0]} - ${value[1]}</p>
            </div>
            <div className='mt-5'>
                <ReactSlider className='bg-slate-400 w-60 h-1 slider ' defaultValue={value} onChange={setValue} min={min} max={max}/>
            </div>
        </div>
    </div>
  )
}

export default SalaryRange