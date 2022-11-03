import { Box } from '@mui/material'
import React from 'react'
import CustomForm from '../../CustomForm'
import * as yup from "yup";
import httpService from '../../../../services/httpService'
import {Alert} from '../../../Alert/Alert'
import projectFields from './Fields';
import { useNavigate } from 'react-router-dom';
import createInitialValues from '../../utils/utils'
export default function CreateProject() {
  const navigate = useNavigate()
  const fields = projectFields
  const initialValues = createInitialValues(fields)
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
      Alert("Exitoso!", "Se ha creado el proyecto", "success", false);
      navigate('/backoffice/projects')
    }
    catch(err){
      console.log(err)
      Alert("Error", "No se ha borrado el proyecto", "danger", false);
    }   
  }

  return (
    <Box>
      <CustomForm fields={fields} initialValues={initialValues} validationSchema={validationSchema} procedure={procedure}/>
    </Box>
  )
}
