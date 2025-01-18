import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './Redux/Slices/UserSlice';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const user = useSelector((state) => state.user);

  const [showDetails, setShowDetails] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const LogoutFun = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
      <div className=' sticky top-0 z-40 flex bg-gray-100 px-28 justify-between py-2 items-center'>
          <a href='#'>
            <img src='../logo.png' className='w-60' />
          </a>
          <div className='flex p-4 space-x-1 relative'>
            {user 
              ?
                <button onClick={()=> setShowDetails(!showDetails)} className='border border-transparent hover:border-gray-300 transition-all font-semibold  py-2 rounded-xl px-6'>
                  {user?.data?.fullname}
                </button>
              :
                <>
                  <button className=' border border-transparent hover:border-gray-300 transition-all font-semibold  py-2 rounded-xl px-6'> Login</button>
                  <button className='bg-violet-500 hover:scale-105 transition-all py-2  text-white font-semibold rounded-xl px-6 '> Sign up</button>
                </>
            }
            {(user && showDetails) &&
              <div className=' absolute top-16 left-0 bg-gray-200 p-2 rounded-md w-full'>
                <p className='text-center'> {user?.data?.email} </p>
                <button onClick={LogoutFun} className='bg-gray-100 transition-all hover:bg-violet-500 hover:text-white text-center w-full py-2 rounded-md font-medium mt-2'>Logout</button>
              </div>
            }
          </div>
      </div>
  )
}

export default Navbar