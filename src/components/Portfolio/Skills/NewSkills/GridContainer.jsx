import Grid  from '@mui/material/Unstable_Grid2'
import React from 'react'

export default function GridContainer({children}) {
  return (
    <Grid container spacing={2} sx={{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        margin: '0 auto',
    }}>
        {children}
    </Grid>
  )
}
