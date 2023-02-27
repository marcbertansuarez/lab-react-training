import React from 'react';

const BoxColor = (props) => {
  const { r, g, b } = props;
  const divStyle = {
    background: `rgb(${r}, ${g}, ${b})`,
  };

  function valuetoHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return '#' + valuetoHex(r) + valuetoHex(g) + valuetoHex(b);
  }

  return (
    <div style={divStyle}>
      <h4>rgb({r}{g}{b})</h4>
      <h4>{rgbToHex(r, g, b)}</h4>
    </div>
  );
};

export default BoxColor;
