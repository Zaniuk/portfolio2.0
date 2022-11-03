import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import httpService from '../../../../services/httpService'
import CustomTable from '../../CustomTable'
import { Alert } from '../../../Alert/Alert'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
export default function BackofficeProjects() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [items, setItems] = useState([])
  const [headers, setHeaders] = useState([])
  const [actions, setActions] = useState(false)
  const getData = async () => {
    const res = await httpService.get('/projects')
    setHeaders(['Title', 'Description', 'Status'])
    setData(res.data)
    const items = res.data.map((item) => {
      return {
        rows: [item.title, item.description, item.status],
        itemId: item.id
      }
      
    })
    setItems(items)
    setActions({
      edit: true,
      delete: true,
      callbacks: {
        create: () => navigate('/backoffice/projects/create'),
        edit: async (id) => {
          navigate(`/backoffice/projects/${id}`)
        },
        delete: async (id) => {

          try{
            await httpService.delete('/projects/' + id)            
            Alert("Exitoso!", "Se ha borrado el proyecto", "success", false);
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
      <Typography  align='center' variant="h3" color="secondary" sx={{ mb: 2 }}>
        Projects
      </Typography>
      <CustomTable items={items} headers={headers} actions={actions} />
    </Box>
  )
}
