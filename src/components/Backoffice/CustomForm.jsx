import { PhotoCamera } from "@mui/icons-material";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import './editor.css'
import { convertToBase64 } from "../../services/convertToBase64";
import httpService from "../../services/httpService";
export default function CustomForm({
  fields,
  initialValues,
  validationSchema,
  procedure,
}) {
  
  const [image, setImage] = React.useState('');
  const [data, setData] = React.useState({})
  const handleFileChange = (e) => {
    convertToBase64(e.target.files[0]).then((base64) => {
      setImage(base64);
      formik.setFieldValue("image", base64);
    });
  }
  const handleSelectChange = (e) => {
    formik.setFieldValue("status", e.target.value);
  }
  
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: async (values, actions) => {
      await procedure(values, actions);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexGrow: 1,
          gap: 2,
          width: "100%",
          maxWidth: "700px",
          margin: "0 auto",
          '& .ck-content': {
            minHeight: 400,
            backgroundColor: '#312b52 !important',
            borderRight: '1px solid #6b5bd4 !important',
            borderLeft: '1px solid #6b5bd4 !important',
            borderBottom: '1px solid #6b5bd4 !important',
            borderTop: '1px solid transparent !important',
            },
            '& .text-field':{
              width: '100%',
            }
        }}
      >
        {fields.map((field, index) => {
          if (field.type === "text") {
            return (
              <TextField className="text-field"
                key={index}
                label={field.label}
                onChange={formik.handleChange}
                value={formik.values[field.name]}
                error={
                  formik.touched[field.name] &&
                  Boolean(formik.errors[field.name])
                }
                name={field.name}
                type="text"
              />
            );
          } else if (field.type === "file") {
            return (
              <Button
                key={index}
                endIcon={<PhotoCamera />}
                variant="contained"
                component="label"
                onChange={handleFileChange}
              >
                Imagen
                <input hidden accept="image/*" type="file" />
              </Button>
            );           
          } else if (field.type === "ckeditor") {
            return (
              <CKEditor
                key={index}

                editor={Editor}
                data={formik.values[field.name]}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    formik.setFieldValue(field.name, data)
                }}
              />
            );
          }else if(field.type === "select"){
            return (
              
              <Box key={index}>
                <Select
                  defaultValue={field.options[0].value}
                  color="secondary"
                  key={index}
                  label={field.label}
                  onChange={handleSelectChange}
                  value={formik.values[field.options[0].value]}
                  error={
                    formik.touched[field.name] &&
                    Boolean(formik.errors[field.name])
                  }
                  name={field.name}
                >
                  {field.options.map((option, index) => {
                    return (
                      <MenuItem key={index} value={option.value}>
                        {option.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Box>
            );
            
          }
        })}
        {image && <img src={image} alt="imagen" />}
        <Button variant="contained" type="submit">
          Enviar
        </Button>
      </Box>
    </form>
  );
}
