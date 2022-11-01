import { PhotoCamera } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import './editor.css'
import { convertToBase64 } from "../../services/convertToBase64";
export default function CustomForm({
  fields,
  initialValues,
  validationSchema,
  procedure,
}) {
  const [image, setImage] = React.useState('');
  const handleFileChange = (e) => {
    convertToBase64(e.target.files[0]).then((base64) => {
      setImage(base64);
      formik.setFieldValue("image", base64);
    });
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
          gap: 2,
          maxWidth: "500px",
          '& .ck-content': {
            minHeight: 400,
            backgroundColor: '#312b52 !important',
            borderRight: '1px solid #6b5bd4 !important',
            borderLeft: '1px solid #6b5bd4 !important',
            borderBottom: '1px solid #6b5bd4 !important',
            borderTop: '1px solid transparent !important',
            }
        }}
      >
        {fields.map((field, index) => {
          if (field.type === "text") {
            return (
              <TextField
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
