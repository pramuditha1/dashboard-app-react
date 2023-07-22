import React from 'react';

export const ImageComponent = (props) => {
  return (
    <img
      style={props.styles} // Use the regular style prop instead of sx
      src={props.link}
      alt="login"
    />
  );
};
