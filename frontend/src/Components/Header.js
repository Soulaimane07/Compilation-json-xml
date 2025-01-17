import React from 'react'
import { FaChevronDown } from "react-icons/fa";

function Header() {
  return (
    
    <div className='flex mb-40'>
       <div className=' h-screen w-1/2  '>
           <h1 className=' text-black text-5xl p-4 mb-4 mt-60 ml-28 mr-14 font-semibold '> Many desktop publishing packages </h1>
           <h2 className=' text-gray-500 ml-36 mr-12 '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</h2>
           <div className='w-full flex justify-center '>
             <button className='bg-violet-500 font-semibold text-white  mt-10 rounded-lg px-16 py-4  mx-auto flex flex-col justify-center'>
              <p>Get started </p>
             <FaChevronDown className=' w-full' />
             </button>
           </div>
       </div>
       <div className='w-1/2 iùmagebg mt-20 '>
       </div> 
    </div>
  )
}

export default Header