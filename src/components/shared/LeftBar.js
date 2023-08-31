import React from 'react'
import { LeftBanner } from '../../Data'
import { Box, Button, Stack } from '@mui/material'

const LeftBar = () => {
  return (
    <Box>
       {
        LeftBanner.map((banner,index) =>(
          <Stack spacing={2}  key={index}>
              <Button variant="contained"  fullWidth >{banner.name}</Button>
            </Stack>
      
        ))
       }
    </Box>
  )
}

export default LeftBar