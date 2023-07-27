import React from 'react'
import { ButtonElement } from '../UI/ButtonElement'
import { Box } from '@mui/material'

const ThemeToggleButton = (props) => {
  return (
    <Box
      sx={props.boxStyles}
    >
      <ButtonElement
        type="button"
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