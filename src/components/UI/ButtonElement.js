import { Button } from '@mui/material'
import React from 'react'

export const ButtonElement = ({ buttonText, ...props }) => {
  return (
    <Button {...props}>
      {buttonText}
    </Button>
  )
}