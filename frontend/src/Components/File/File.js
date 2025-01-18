import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { DownloadFile } from '../Functions/Functions';

function File({ filedata, setShowfile }) {
  const [fileContent, setFileContent] = useState("");

  // Use useEffect to load the file content when the component mounts or filedata changes
  useEffect(() => {
    if (filedata) {
      const reader = new FileReader();
      reader.onload = () => {
        setFileContent(reader.result); // Store the content of the file
      };
      reader.readAsText(filedata); // Read the file content as text
    }
  }, [filedata]); // Depend on filedata to reload the content when it changes

  const handleChange = (e) => {
    setFileContent(e.target.value); // Update file content when textarea is edited
  };

  const getLineNumbers = () => {
    // Count the number of lines in the text
    return fileContent.split("\n").map((_, index) => index + 1).join("\n");
  };

  return (
    <div className="fixed top-0 left-0 bg-gray-500 bg-opacity-50 w-full h-screen z-10 flex justify-center items-center">
      <div className="bg-white w-1/2 rounded-md px-12 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-semibold text-2xl">{filedata.name}</h1>
          <button
            onClick={() => setShowfile(false)}
            className="p-2 border-2 border-transparent hover:border-gray-400 transition-all rounded-md"
          >
            <IoMdClose size={20} />
          </button>
        </div>

        <div className="flex bg-white border rounded-t-lg">
          <div className="flex-shrink-0 text-gray-500 text-sm bg-gray-100 border-r border-gray-300 p-2">
            <pre>{getLineNumbers()}</pre>
          </div>
          <textarea
            id="comment"
            rows="8"
            value={fileContent}
            onChange={handleChange}
            className="w-full outline-none px-2 py-1.5 text-sm text-gray-900 bg-white border-0"
            placeholder="Write here..."
            required
            style={{ resize: "none", lineHeight: "1.5" }}
          ></textarea>
        </div>
        <div className="flex space-x-4 justify-end mt-4">
          <button
            className="bg-violet-500 rounded-lg px-6 py-3 text-white font-semibold hover:bg-violet-800 transition-all"
            onClick={() => DownloadFile(fileContent, { name: filedata.name })}
          >
            Download
          </button>
          <button className="bg-violet-500 rounded-lg px-6 py-3 text-white font-semibold hover:bg-violet-800 transition-all">
            Save
          </button>
          <button className="bg-violet-500 rounded-lg px-6 py-3 text-white font-semibold hover:bg-violet-800 transition-all">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default File;
