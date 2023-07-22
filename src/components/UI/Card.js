import { Box, Card } from '@mui/material';
import React from 'react';

export const CardContainer = (props) => {
  return (
    <Card sx={{ margin: 'auto', ...props.cardStyles }}>
      <Box sx={props.cardContentStyles}>{props.children}</Box>
    </Card>
  );
};
