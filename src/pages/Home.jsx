import React from 'react'
import FilterHeader from '../components/FilterHeader/FilterHeader'
import Navbar from '../components/Navbar/Navbar'
import FilterSide from '../components/FilterSide/FilterSide'
import JobLists from '../components/JobLists/JobLists'
const Home = () => {
  return (
    <>
        <Navbar/>
        <FilterHeader/>
        <div className='flex m-10 gap-5'>
            <FilterSide/>
            <JobLists/>
        </div>
    </>
  )
}

export default Home