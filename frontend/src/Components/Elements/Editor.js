import React, { useState } from "react";
import { ConvertTextFun, DownloadFile } from "../Functions/Functions";
import { useDispatch } from "react-redux";


function Editor({type, data, change, setChange}) {
  const dispatch = useDispatch();
  const [text, setText] = useState(data);

  const handleChange = (e) => {
    setText(e.target.value);
    dispatch(change(e.target.value));
  };

  const handleClear = (e) => {
    setText("");
    dispatch(change(""));
  };

  const getLineNumbers = () => {
    // Count the number of lines in the text
    return text.split("\n").map((_, index) => index + 1).join("\n");
  };

  return (
    <>
      <form className="mt-6">
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex  bg-white rounded-t-lg">
            <div className="flex-shrink-0 text-gray-500 text-sm bg-gray-100 border-r border-gray-300 p-2">
              <pre>{getLineNumbers()}</pre>
            </div>
            <textarea
              id="comment"
              rows="8"
              value={data}
              onChange={handleChange}
              className="w-full outline-none px-2 py-1.5 text-sm text-gray-900 bg-white border-0"
              placeholder="Write here..."
              required
              style={{ resize: "none", lineHeight: "1.5" }}
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t">
            <button
              onClick={(e) => ConvertTextFun(e, type, text, setChange)}
              type="submit"
              disabled={text.length === 0}
              className={` ${text.length === 0 ? "bg-gray-300" : "bg-violet-700 hover:bg-violet-500 transition-all"} transition-all "inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white  rounded-lg focus:ring-4 focus:ring-violet-200 hover:bg-violet-800"`}
            >
              Convert
            </button>
            <div className="flex space-x-1">
              <button
                type="button"
                onClick={() => DownloadFile(text, { name: `file.${type}` })}
                className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
              >
                Download
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Editor;
