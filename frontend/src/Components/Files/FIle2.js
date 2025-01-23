import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { formatFileSize, handleRemoveFile } from '../Functions/Functions';

function File2({ setShowfile, file, id, files, setFiles }) {

  const getFileIcon = (fileType) => {
    if (fileType.endsWith('.json')) {
      return '../xml.png'; // Path to JSON image
    } else if (fileType.endsWith('.xml')) {
      return '../xml.png'; // Path to XML image
    } else {
      return '../json.png'; // Default image if type doesn't match
    }
  };

  return (
    <div className='rounded-lg bg-gray-100 hover:bg-gray-200 transition-all text-left py-3 pl-6 px-4 flex justify-between mb-2'>
      <button onClick={() => setShowfile(file)} className='flex space-x-3 items-center hover:text-violet-600 cursor-pointer transition-all'>
        <img src={getFileIcon(file.name)} alt='file type icon' className='w-8' />
        <p
          
          className='font-bold'
        >
          {file.name}
        </p>
        <p className='text-sm'>({formatFileSize(file.size)})</p>
      </button>
      <button
        className='hover:bg-gray-300 px-2 py-2 border border-transparent hover:border-gray-300 rounded-sm'
        onClick={() => handleRemoveFile(id, files, setFiles)}
      >
        <IoMdClose />
      </button>
    </div>
  );
}

export default File2;
