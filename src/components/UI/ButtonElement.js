import { Button } from '@mui/material';
import React from 'react';

export const ButtonElement = ({ buttonText = "Button text", color = 'primary', ...props }) => {
  return (
    <Button color={color} {...props}>
      {buttonText}
    </Button>
  );
};
