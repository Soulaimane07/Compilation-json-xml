import React from 'react'

function Navbar() {
  return (
      <div className=' sticky top-0 flex bg-gray-100 px-20 justify-between py-2 items-center'>
          <h1 className='  px-6 text-left text-3xl font-bold '>Compilation</h1>
          <div className='flex p-4 space-x-1'>
              <button className=' border border-transparent hover:border-gray-300 transition-all font-semibold  py-2 rounded-xl px-6'> Login</button>
              <button className='bg-violet-500 hover:scale-105 transition-all py-2  text-white font-semibold rounded-xl px-6 '> Sign up</button>
          </div>
      </div>
  )
}

export default Navbar