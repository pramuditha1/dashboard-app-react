import { InputAdornment, TextField } from '@mui/material'
import React from 'react'

export const TextBoxElement = ({inputAdornmentIcon, ...props}) => {
    return (
        <TextField
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        {inputAdornmentIcon}
                    </InputAdornment>
                ),
            }}
            {...props}
        />
    )
}