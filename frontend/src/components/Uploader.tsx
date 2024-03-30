import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export interface get_FilespropType{
    get_Files: (incoming_files: File) => void
}

const Uploader : React.FC<get_FilespropType> = ({get_Files}: get_FilespropType) => {

    const sendFile = async (file:File)=>{
        try {
            const formData = new FormData();
            formData.append('file',file);
            const response = await fetch('http://localhost:8000/upload-xlsx', {
              method: 'POST',
              body: formData,
              mode: 'cors'
            });
      
            if (!response.ok) {
              throw new Error('Upload failed');
            }
            alert('File uploaded successfully!');
          } catch (error) {
            console.error('Error uploading file:', error);
            alert('Upload failed. Please try again.');
          }
    }

    const doDrop = (event:React.DragEvent<HTMLElement>)=>{
        const data = event.dataTransfer.files[0];
        if(data){
            get_Files(data);
            sendFile(data);
        }
    }


  return (
    <Box component="section" sx={{ p: 2, border: '2px dashed grey' }}
    onDragEnter={(e)=>{e.stopPropagation();}}
    onDragOver={(e)=>{e.stopPropagation(); e.preventDefault();}}
    onDrop={(e)=>{
        e.stopPropagation();
        e.preventDefault();
        doDrop(e);
    }}
    >
        <Typography variant="body1">Upload the Excel file from your computer:</Typography>
        <input
          type="file"
          accept=".xlsx" 
          style={{ display: 'none' }} 
        />
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
    </Box>
  );
}

export default Uploader;