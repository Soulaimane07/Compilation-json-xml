import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";


function Converter({setShowfile}) {
    const [files, setFiles] = useState([])

    const handleFileChange = (e) => { 
        // Convert FileList to an array and append to the existing list
        const selectedFiles = Array.from(e.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };
    

    const handleRemoveFile = (index) => {
        // Create a new array excluding the file at the selected index
        const updatedFiles = files.filter((_, fileIndex) => fileIndex !== index);
        setFiles(updatedFiles);
      };

      const formatFileSize = (size) => {
        if (size < 1024) return `${size} B`;
        else if (size < 1024 ** 2) return `${(size / 1024).toFixed(2)} KB`;
        else if (size < 1024 ** 3) return `${(size / 1024 ** 2).toFixed(2)} MB`;
        else return `${(size / 1024 ** 3).toFixed(2)} GB`;
    };


  return (
    <div id='main' className='min-h-screen p-10 w-1/2 mx-auto'>
        {files.length === 0 
            ?
                <div className="flex items-center justify-center ">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   hover:bg-gray-100 ">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input 
                            onChange={(e)=> handleFileChange(e)}
                            multiple
                            id="dropzone-file" 
                            type="file" 
                            className="hidden" 
                        />
                    </label>
                </div>
            : 
                <div className=''>
                    <h2 className='bg-violet-600 text-xl rounded-md p-4 mx-44 my-6 text-center font-extrabold text-white'> Files Selected </h2>
                    <ul>
                        {files?.map((file, key) => (
                            <div 
                                key={key} 
                                className='rounded-lg bg-gray-300 text-left p-4 flex justify-between mb-4 '
                            > 
                                <div className='flex space-x-3 items-center'>
                                    <p onClick={()=> setShowfile(file)} className='font-bold hover:text-violet-600 cursor-pointer transition-all'>{file.name}</p>
                                    <p className='text-sm'>({formatFileSize(file.size)})</p>
                                </div>                                
                                <button 
                                    className=' '
                                    onClick={() => handleRemoveFile(key)}
                                >
                                    
                                    <IoMdClose />
                                </button>
               
                            </div>
                        ))}
                    </ul>
                </div>    
        } 
    </div>
  )
}

export default Converter