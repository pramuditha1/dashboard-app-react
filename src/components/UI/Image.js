import { Padding } from '@mui/icons-material';
import React from 'react';
import SVG from 'react-inlinesvg';

// Image component responsible for render ImagesearchRoller, svg files. by default it return svg
export const ImageComponent = ({ type = "svg", ...props }) => {
  return (
    type === "svg" ? <SVG  {...props} /> :
      type === "img" ?
        <img
          style={props?.styles}
          src={props?.link}
          alt="dashboard"
        />
        : null
  );
};
