import React from 'react'

function Navbar() {
  return (
        <div className='flex bg-gray-100 px-20 justify-between py-4 items-center'>
            <h1 className='  px-6 text-left text-3xl font-extrabold text-gray-600 '>Compilation</h1>
            <div className='flex p-4 space-x-5'>
                <button className='bg-violet-500  py-2 font-bold rounded-xl px-10 text-white'>   login</button>
                <button className='bg-violet-500 py-2  text-white font-bold rounded-xl px-10 '>   sign up</button>
            </div>
        </div>
  )
}

export default Navbar