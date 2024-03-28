import React from 'react'
import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { useState } from 'react';
const JobCard = (props) => {
    const [show,setShow] = useState(false)
  return (
    <div>
        <div className='bg-red border border-black'>
            <div className='flex items-center'>
                <p className='bg-white border border-red-600 px-3 py-1 rounded-3xl'>{props.date}</p>
                <div className='h-9 flex items-center justify-center rounded-full w-9 border border-red-500 '>
                    <BsBookmarkPlus onClick={()=>{setShow(!show)}} className={`hover:cursor-pointer ${show?'hidden':'block'} text-xl`}/>
                    <BsBookmarkPlusFill onClick={()=>{setShow(!show)}} className={`hover:cursor-pointer ${show?'block':'hidden'} text-xl`}/>
                </div>
            </div>
            <p>{props.company}</p>
            <div className='flex'>
                <p>{props.post}</p>
                <p>logo</p>
            </div>
            <div>
                <p>lable</p>
                <p>lable</p>
                <p>lable</p>
                <p>lable</p>
            </div>
        </div>

    </div>
  )
}

export default JobCard