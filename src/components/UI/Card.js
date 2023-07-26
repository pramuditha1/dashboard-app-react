import { Box, Card } from '@mui/material';
import React from 'react';

/*
reusable card component
showCard by default false and return a div with no borders.
to render a material ui card pass showCard = true
*/
export const CardContainer = ({ showCard = false, ...props }) => {
  if (showCard) {
    return (
      <Card sx={{ margin: 'auto', ...props?.cardStyles }}>
        <Box sx={props?.cardContentStyles}>{props?.children}</Box>
      </Card>
    )

  } else {
    return (
      <div style={{ margin: 'auto', ...props?.cardStyles }}>
        <Box sx={props?.cardContentStyles}>{props?.children}</Box>
      </div>
    )
  }

};
