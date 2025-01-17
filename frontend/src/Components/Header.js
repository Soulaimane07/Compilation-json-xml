import React from 'react'
import { FaArrowDown } from 'react-icons/fa6'

function Header() {
  return (
    <div className='bg-gray-200 min-h-screen pt-36 flex flex-col'>
            <h1 className='text-4xl font-semibold text-center'> Converter JSON & XML </h1>
            <p className=' text-center w-1/2 mx-auto mt-6 opacity-60 text-sm'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum </p>
            <a href='#main' className='bg-violet-500 hover:bg-violet-600 transition-all hover:scale-105 flex items-center space-x-3 px-10 py-3 rounded-xl text-white font-medium w-fit mx-auto mt-10'> 
                <p> Get Started  </p>
                <FaArrowDown  />
            </a>
        </div>
  )
}

export default Header