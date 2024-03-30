import React, { useEffect, useState } from 'react'
import extract_file_info from '../util';
import { FileobjType } from '../util';

export interface displayType{
    display_files: File | undefined
}

const Display  : React.FC<displayType> = ({display_files}: displayType) => {

  const [filedata, setFiledata] = useState<FileobjType>();

  async function extract_file(){
    if (display_files){
      try {
        const obj = await extract_file_info(display_files);
        if (typeof(obj)){
          setFiledata(obj)
        }
      } catch (error) {
        console.log(error);
      }

    }
  }
    useEffect(() => {
        extract_file();
    }, [display_files])
    

  return (
    <>
    {
      <p>{filedata?.length || 0}</p>
    }
    </>
  )
}

export default Display