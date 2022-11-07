import React, { useEffect } from 'react'
import certificationFields from './Fields'
import createInitialValues from '../../utils/utils';
import CustomForm from '../../CustomForm'
import httpService from '../../../../services/httpService'
import * as yup from "yup";
import { Box } from '@mui/material';
import {Alert} from '../../../Alert/Alert'
import { useNavigate, useParams } from 'react-router-dom'
export default function EditCertification() {
  const {id} = useParams()
  const [initData, setInitData] = React.useState({})
  const navigate = useNavigate()
  const getCertification = async () => {
    const { data } = await httpService.get(`/certifications/${id}`);
    setInitData(createInitialValues(fields, data))
  };
  useEffect(() => {
    getCertification();
  }, []);
  const procedure = async (values, actions) => {
    try{
      await httpService.put('/certifications/' + id, values)
      Alert("Exitoso!", "Se ha editado la certificación", "success", false);
        navigate('/backoffice/certifications')
    }
    catch(err){
      console.log(err)
      Alert("Error", "No se ha podido editar la certificación", "danger", false);
    }   
  }
  const validationSchema = yup.object({
    name: yup.string('Por favor inserte un nombre').required('Required'),
    description: yup.string('Por favor inserte una descripción').required('Required'),
    image: yup.string('Por favor inserte una imagen'),
    company: yup.string('Por favor inserte una compañía').required('Required'),

  })
  const fields = certificationFields
  const initialValues = initData
  return (
    <Box>
      <CustomForm id={id} fields={fields} initialValues={initialValues} validationSchema={validationSchema} procedure={procedure}/>
    </Box>
  )
}
