import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import CustomForm from '../../CustomForm'
import * as yup from "yup";
import httpService from '../../../../services/httpService'
import {alert} from '../../../Alert/Alert'
import { useNavigate, useParams } from 'react-router-dom';
import projectFields from './Fields';
export default function EditProject() {
  const {id} = useParams()
  const [data, setData] = React.useState({})
  const navigate = useNavigate()
  const getProject = async () => {
    const { data } = await httpService.get(`/projects/${id}`);
    setData(data);
  };
  useEffect(() => {
    getProject();
  }, []);
  
  const fields = projectFields
  const initialValues = {
    title: data?.title || '',
    description: data.description || '',
    image:  data?.image || '',
    status: data?.status || 'active',
    github: data?.github ||  '',
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
      await httpService.put('/projects/' + id, values)
      alert("Exitoso!", "Se ha creado el proyecto", "success", false);
        navigate('/backoffice/projects')
    }
    catch(err){
      console.log(err)
      alert("Error", "No se ha borrado el proyecto", "danger", false);
    }   
  }

  return (
    <Box>
      <CustomForm id={id} fields={fields} initialValues={initialValues} validationSchema={validationSchema} procedure={procedure}/>
    </Box>
  )
}
