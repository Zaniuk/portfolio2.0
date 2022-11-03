import { Box } from '@mui/material'
import React from 'react'
import CustomForm from '../../CustomForm'
import * as yup from "yup";
import httpService from '../../../../services/httpService'
import {alert} from '../../../Alert/Alert'
import projectFields from './Fields';
export default function CreateProject() {
  const fields = projectFields
  const initialValues = {
    title: '',
    description: '',
    image: '',
    status: 'active',
    github: '',
  }
  const validationSchema = yup.object({
    title: yup.string('Por favor inserte un nombre').required('Required'),
    description: yup.string('Por favor inserte una descripción').required('Required'),
    image: yup.string('Por favor inserte una imagen'),
    github: yup.string('Por favor inserte un github').required('Required'),
    status: yup.string('Por favor inserte un status').required('Required'),
  })

  const procedure = async (values, actions) => {
    try{
      console.log(values)
      await httpService.post('/projects', values)
      alert("Exitoso!", "Se ha creado el proyecto", "success", false);
    }
    catch(err){
      console.log(err)
      alert("Error", "No se ha borrado el proyecto", "danger", false);
    }   
  }

  return (
    <Box>
      <CustomForm fields={fields} initialValues={initialValues} validationSchema={validationSchema} procedure={procedure}/>
    </Box>
  )
}
