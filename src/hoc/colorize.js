import React from 'react';

const Colorize = WrappedComponent => {
  const colors = ['red', 'orange', 'blue', 'green', 'yellow'];
  const randomIndex = Math.floor(Math.random() * (colors.length - 1));
  const randomColor = colors[randomIndex];

  return (props) => {
    return (
      <WrappedComponent color={randomColor} {...props} />
    )
  }
};

export default Colorize;
