import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { GiHandBag, GiMoneyStack } from "react-icons/gi";
import { PiMoney } from "react-icons/pi";
import SalaryRange from '../SalaryRange/SalaryRange';

const FilterHeader = () => {
  return (
    <header className='bg-black text-white p-10 flex items-center justify-between'>
        <div className='flex items-center text-xl h-14 '>
            <div className='h-12 w-12 flex justify-center items-center rounded-full border'>
                <IoIosSearch className='text-3xl'/>
            </div>
            <input className='bg-black px-5 focus:outline-none' placeholder='Search' type="search"/>
        </div>

        <div className='flex gap-2 border-l items-center h-14 pl-7 pr-1'>
            <div className='rounded-full border h-12 w-12 flex justify-center items-center'>
                <IoLocationOutline className='text-3xl'/>
            </div>
            <select className='bg-black focus:outline-none'>
                <option value="opt1">Work Location</option>
                <option value="opt1">KTM</option>
                <option value="opt1">NY</option>
                <option value="opt1">London</option>
                <option value="opt1">Kapan</option>
            </select>
        </div>

        <div className='flex gap-2 border-l items-center h-14 pl-7 pr-1'>
            <div className='rounded-full border h-12 w-12 flex justify-center items-center'>
                <GiHandBag className='text-3xl'/>
            </div>
            <select className='bg-black focus:outline-none'>
                <option value="opt1">Experience</option>
                <option value="opt1">None</option>
                <option value="opt1">1 year</option>
                <option value="opt1">2 years</option>
                <option value="opt1">3 years</option>
                <option value="opt1">4+ years</option>
            </select>
        </div>

        <div className='flex gap-2 border-l items-center h-14 pl-7 pr-1'>
            <div className='rounded-full border h-12 w-12 flex justify-center items-center'>
                <PiMoney className='text-3xl'/>
            </div>
            <select className='bg-black focus:outline-none'>
                <option value="opt1">Per Month</option>
                <option value="opt1">Annual</option>
                
            </select>
        </div>

        <div className='flex border-l items-center h-14 pl-7 pr-1'>
            <SalaryRange/>
        </div>
    </header>
  )
}

export default FilterHeader