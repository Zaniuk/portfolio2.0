import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import httpService from '../../../../services/httpService'
import { Alert } from '../../../Alert/Alert'
import CustomTable from '../../CustomTable'

export default function BackofficeCertifications() {
  const navigate = useNavigate()
  const [items, setItems] = useState([])
  const [headers, setHeaders] = useState([])
  const [actions, setActions] = useState(false)
  const getData = async () => {
    const res = await httpService.get('/certifications')
    setHeaders(['Name', 'Description', 'Company'])
    const items = res.data.map((item) => {
      return {
        rows: [item.name, item.description, item.company],
        itemId: item.id
      }
      
    })
    setItems(items)
    setActions({
      edit: true,
      delete: true,
      callbacks: {
        create: () => navigate('/backoffice/certifications/create'),
        edit: async (id) => {
          navigate(`/backoffice/certifications/${id}`)
        },
        delete: async (id) => {
          try{
            await httpService.delete('/certifications/' + id)            
            Alert("Exitoso!", "Se ha borrado la certificación", "success", false);
            getData()
          }catch(e){
            console.error(e)
          }
        }
      }

    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <Box>
      <CustomTable items={items} headers={headers} actions={actions} />
    </Box>
  )
}
