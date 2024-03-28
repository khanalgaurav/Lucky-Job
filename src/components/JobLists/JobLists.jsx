import React from 'react'
import { CiFilter } from "react-icons/ci";
import JobCard from '../JobCard/JobCard';
const JobLists = () => {
  return (
    <article>
        <div className='flex h-fit items-center justify-between w-full'>
            <div className='flex items-center gap-2'>
                <p className='text-4xl font-bold'>Recommended Jobs</p>
                <p className='border border-gray-500 px-3 py-1 rounded-3xl font-bold'>369</p>
            </div>
            <div className='flex items-center gap-4'>
                <p className='text-lg'><span className='text-gray-500'>Sort by: </span> <span className='font-bold'>Last updated</span></p>
                <CiFilter className='text-lg'/>
            </div>
        </div>
        <div>
            <JobCard date='20 May,2022'/>
        </div>
    </article>
    
  )
}

export default JobLists