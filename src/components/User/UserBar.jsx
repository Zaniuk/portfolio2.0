import { Box, Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { UserContext } from '../Context/UserProvider'
export default function UserBar({user}) {
  const {logout} = useContext(UserContext)
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <Typography component='label' variant='h5'>Bienvenido, {user.name}</Typography>
      <Button onClick={() => logout()}>
        Logout
      </Button>
    </Box>
  )
}
