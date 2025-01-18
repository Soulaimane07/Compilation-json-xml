import React from 'react'
import { FaChevronDown } from "react-icons/fa";

function Header() {
  return (
    
    <div className='flex items-start pt-40 h-screen px-28 space-x-10'>
       <div className=' w-1/2'>
           <h1 className=' text-5xl  font-bold '> Many desktop publishing packages </h1>
           <h2 className=' mt-10 text-gray-400 '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</h2>
           <div className='w-full flex justify-center '>
             <a href='#converter' className='bg-violet-500 font-semibold text-white  mt-10 rounded-lg px-16 py-4  mx-auto flex flex-col justify-center'>
              <p>Get started </p>
             <FaChevronDown className=' w-full' />
             </a>
           </div>
       </div>
       <div className='w-1/2 imagebg '>
        <img src='../header2.jpg' />
       </div> 
    </div>
  )
}

export default Header