import React, { useState } from 'react'
import File from '../../Components/Files/File';
import File2 from '../../Components/Files/FIle2';
import { useDispatch } from 'react-redux';
import { setJson, setXml } from '../../Components/Redux/Slices/ContentSlice';


function Converter({setShowfile}) {
    const [files, setFiles] = useState([])

    const handleFileChange = (e) => { 
        // Convert FileList to an array and append to the existing list
        const selectedFiles = Array.from(e.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };





    const dispatch = useDispatch()

    const Convert = () => {
        let file = files[0]

        if (file.name.endsWith('.json')) {
            const reader = new FileReader();
            reader.onload = () => {
                // setFileContent(reader.result); // Store the content of the file
                dispatch(setJson(reader.result))

            };
            reader.readAsText(file); // Read the file content as text
            
            
        } else if (file.name.endsWith('.xml')) {
            const reader = new FileReader();
            reader.onload = () => {
                // setFileContent(reader.result); // Store the content of the file
                dispatch(setXml(reader.result))

            };
            reader.readAsText(file);

        } 
    }
    

  return (
    <div id='converter' className='pb-80 px-60 '>
        <div className='px-10 w-2/3 mx-auto'>
            {files.length === 0 
                ?
                    <div className="flex items-center justify-center ">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   hover:bg-gray-100 ">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> JSON, XML</p>
                            </div>
                            <input 
                                onChange={(e)=> handleFileChange(e)}
                                
                                id="dropzone-file" 
                                accept=".json,.xml"
                                type="file" 
                                className="hidden" 
                            />
                        </label>
                    </div>
                : 
                    <div>
                        <h2 className='bg-violet-600 text-xl rounded-md p-4 mx-44 mb-6 text-center font-extrabold text-white'> Files Selected ({files.length}) </h2>
                        <ul>
                            {files?.map((file, key) => (
                                <File key={key} file={file} id={key} setShowfile={setShowfile} setFiles={setFiles} files={files} />
                            ))}
                        </ul>

                        <div className='flex mt-4 items-center justify-end'>
                            <button
                                onClick={Convert}
                                className={`bg-violet-700 hover:bg-violet-500 transition-all inline-flex items-center px-8 py-3 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:ring-violet-200 hover:bg-violet-800"`}
                            >
                                Convert
                            </button>
                        </div>
                    </div>    
            } 
        </div>
    </div>
  )
}

export default Converter