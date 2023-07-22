import { Box } from '@mui/material'
import React from 'react'

export const MainContent = (props) => {
  return(
    <Box component="div"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%', // Set width to 100% to cover the whole page horizontally
      height: '100vh', // Set height to 100vh to cover the whole page vertically
      backgroundColor: !props.isDarkMode ? '#E4E4E4' : '#000',
    }}
  >
    {props.children}
  </Box>
   )

 }