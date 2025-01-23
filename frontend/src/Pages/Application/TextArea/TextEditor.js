import React from 'react'
import Editor from '../../../Components/Elements/Editor'
import { useDispatch, useSelector } from 'react-redux'
import { setJson, setXml } from '../../../Components/Redux/Slices/ContentSlice'

function TextEditor() {
  const jsonData = useSelector(state => state.content.json)
  const xmlData = useSelector(state => state.content.xml)

  console.log("json", jsonData);
  console.log("xml:", xmlData);

  const dispatch = useDispatch();

  const setXMLFUN = (data) => {
    dispatch(setXml(data));
  }

  const setJSONFUN = (data) => {
    dispatch(setJson(data));
  }
  
  

  return (
    <div className='flex items-start justify-between px-60 space-x-20'>
        <div className='w-full'>
            <h2 className="text-4xl font-bold">JSON</h2>
            <Editor type="json" data={jsonData} change={setJson} setChange={setXMLFUN} />
        </div>
        <div className='w-full'>
            <h2 className="text-4xl font-bold">XML</h2>
            <Editor type="xml" data={xmlData} change={setXml} setChange={setJSONFUN} />
        </div>
    </div>
  )
}

export default TextEditor