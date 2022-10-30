import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import httpService from '../../../../services/httpService'
import CustomTable from '../../CustomTable'

export default function BackofficeProjects() {
  
  const [items, setItems] = useState([])
  const [headers, setHeaders] = useState([])
  const [actions, setActions] = useState(false)
  const getData = async () => {
    const res = await httpService.get('/projects')
    setHeaders(['Title', 'Description', 'Status'])
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
        edit: async (id) => {
          console.log(id)
        },
        delete: async (id) => {
          console.log(id)
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
