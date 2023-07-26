import React from 'react'
import { ButtonElement } from '../UI/ButtonElement'
import { Box } from '@mui/material'

const ThemeToggleButton = (props) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '20px',
        left: '50%', // Use left: '50%' to center the inner Box horizontally
        transform: 'translateX(-50%)', // Use transform to adjust centering
      }}
    >
      <ButtonElement
        type="button"
        fullWidth
        variant="outlined"
        sx={{ mt: 3, mb: 2 }}
        buttonText={props.isDarkMode ? "Light Mode" : "Dark Mode"}
        color='secondary'
        onClick={props.handleThemeToggle}
      />
    </Box>
  )
}

export default ThemeToggleButton