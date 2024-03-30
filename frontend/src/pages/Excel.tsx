import React, { useState } from 'react'
import Uploader from '../components/Uploader'
import Display from '../components/Display'
const Excel : React.FC = () => {
  const [files, setFiles] = useState<File>();

  const getFiles = (incoming_files: File)=>{
    setFiles(incoming_files);
  }


  return (
    <>
    <Uploader get_Files = {getFiles}/>
    <Display display_files = {files}/>
    {/* 
    read it and display it on the page
    ask user to save it or allow user to query it ?
    */}
    </>
  )
}

export default Excel