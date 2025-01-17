import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

function File({filedata, setShowfile}) {

    const [fileContent, setFileContent] = useState("");

        const reader = new FileReader();
        reader.onload = () => {
          setFileContent(reader.result); // Store the content of the file
        };
        reader.readAsText(filedata); // Read as text (for text-based files)

        const downloadFile = () => {
            // If you want to download text-based content (like fileContent)
            const blob = new Blob([fileContent], { type: "text/plain" }); // Create a Blob from file content
            const url = URL.createObjectURL(blob); // Create a URL for the Blob
            
            // Create a temporary link element
            const link = document.createElement("a");
            link.href = url; // Set the href to the created Blob URL
            link.download = filedata.name; // Set the download attribute to the file's name
            
            // Programmatically click the link to start the download
            link.click();
            
            // Clean up the URL object after the download is triggered
            URL.revokeObjectURL(url);
          };

  return (
    <div className='fixed top-0 left-0 bg-gray-500 bg-opacity-50 w-full h-screen z-10 flex justify-center items-center'>
        <div className='bg-white w-1/2 rounded-md px-12 py-6 '>
            <div className='flex items-center justify-between mb-6'>
                <h1 className='font-semibold text-2xl'> {filedata.name} </h1>
                <button onClick={()=> setShowfile(false)} className='p-2 border-2 border-transparent hover:border-gray-400 transition-all rounded-md'> <IoMdClose size={20} /> </button>
            </div>

            <div className='bg-gray-200'>
                <textarea rows={10} className='w-full bg-gray-100 outline-none ' value={fileContent} />
            </div>
            <div className='flex space-x-4 justify-end mt-4'> 
               <button className='bg-violet-500 rounded-lg px-6 py-3 text-white font-semibold hover:bg-violet-800 transition-all 'onClick={downloadFile} >Download       
               </button>
               <button className='bg-violet-500 rounded-lg px-6 py-3 text-white font-semibold hover:bg-violet-800 transition-all '>Save </button>
               <button className='bg-violet-500 rounded-lg px-6 py-3 text-white font-semibold hover:bg-violet-800 transition-all '>Share </button>
            </div>
        </div>
    </div>
  )
}

export default File