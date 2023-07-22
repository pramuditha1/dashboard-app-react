import { Link } from '@mui/material'
import React from 'react'

export const LinkElement = ({ linkText, ...props }) => {
  return (
    <Link {...props}>
      {linkText}
    </Link>
  )
}