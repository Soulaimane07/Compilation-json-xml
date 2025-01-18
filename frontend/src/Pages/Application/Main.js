import React from 'react'
import Header from './Header';
import Converter from './Converter';
import TextEditor from './TextArea/TextEditor';


function Main({setShowfile}) {
  return (
    <div className='bg-white'>
        <Header />
        <TextEditor />

        <div class="inline-flex items-center py-10 justify-center w-full">
          <hr class="w-64 h-px my-8 bg-gray-200 border-0"></hr>
          <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2">or</span>
          <hr class="w-64 h-px my-8 bg-gray-200 border-0"></hr>
        </div>

        <Converter setShowfile={setShowfile} />
    </div>
  )
}

export default Main