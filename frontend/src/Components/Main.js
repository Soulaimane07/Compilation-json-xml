import React from 'react'
import Header from './Header';
import Converter from './Converter';


function Main({setShowfile}) {
  return (
    <div className='bg-gray-200'>
        <Header />
        <Converter setShowfile={setShowfile} />
    </div>
  )
}

export default Main