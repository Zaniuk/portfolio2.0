import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { UserContext } from "../../../Context/UserProvider";
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

export default function Login() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      console.log('sumbit')
      await login(values, actions);
      navigate("/backoffice");
    },
  });

  return (
    <Box 
      sx={{
        maxWidth: 400,
        margin: "auto",
        marginTop: 40,
      }}
    > 
      <form onSubmit={formik.handleSubmit}>
      <Typography
          sx={{ marginBottom: "1.5rem" }}
          align="center"
          variant="h4"
          component="h1"
          gutterBottom
        >
          {" "}
          Login{" "}
        </Typography>
        <TextField
          sx={{ marginBottom: "1.5rem" }}
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          sx={{ marginBottom: "1.5rem" }}
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="secondary" variant="contained" fullWidth type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
}
