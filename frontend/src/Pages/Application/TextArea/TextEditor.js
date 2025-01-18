import React from 'react'
import Editor from '../../../Components/Elements/Editor'

function TextEditor() {
  return (
    <div className='flex items-start justify-between px-60 space-x-20'>
        <div className='w-full'>
            <h2 class="text-4xl font-bold">JSON</h2>
            <Editor type="json" />
        </div>
        <div className='w-full'>
            <h2 class="text-4xl font-bold">XML</h2>
            <Editor type="xml" />
        </div>
    </div>
  )
}

export default TextEditor