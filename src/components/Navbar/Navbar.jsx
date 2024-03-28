import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
const Navbar = () => {
  return (
    <header className='bg-black text-white border-b-2 border-slate-600'>
        <nav className=' flex items-center justify-between mx-10'>
            <h1 className='font-bold text-xl'>LuckyJob</h1>
            <ul className='flex gap-5'>
                <li className='py-6 px-2'>Find Job</li>
                <li className='py-6 px-2'>Messages</li>
                <li className='py-6 px-2'>Hiring</li>
                <li className='py-6 px-2'>Community</li>
                <li className='py-6 px-2'>FAQ</li>
            </ul>
            <div className='text-lg flex gap-1 items-center'><IoLocationOutline /> New York, NY</div>
            <div className='flex items-center gap-3'>
                <button className='text-xl bg-white text-black px-5 py-1 rounded-full'>Login</button>
                <button className='text-2xl border p-1 rounded-full'><CiSettings/></button>
                <button className='text-2xl border p-1 rounded-full'><IoMdNotificationsOutline/></button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar