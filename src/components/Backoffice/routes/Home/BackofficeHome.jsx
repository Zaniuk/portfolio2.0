import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react'
import httpService from '../../../../services/httpService';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from 'ckeditor5-custom-build/build/ckeditor';
export default function BackofficeHome() {
  const [home, setHome] = React.useState({})
  const getHome = async () => {
    const { data } = await httpService.get(`/home`);
    setHome(data)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await httpService.put(`/home`, home);
    setHome(data)
  }

  useEffect(() => {
    getHome();  
  }, [])
  return (
    <Box 
      sx={{
        '& form':{
          display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1,
        gap: 2,
        width: "100%",
        maxWidth: "700px",
        margin: "0 auto",
        },
        '& .ck-content': {
          minHeight: 400,
          backgroundColor: '#312b52 !important',
        }
      }}
    > 
      <form onSubmit={handleSubmit}>

      
      <CKEditor 
        editor={Editor}
        data={home.description}
        onChange={(event, editor) => {
          const data = editor.getData();
          setHome({description: data})
        }}

      />
      <Button type="submit" variant="contained">Submit</Button>

      </form>
    </Box>
  )

}
