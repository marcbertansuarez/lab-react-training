import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  

  return (
    <div className='color-pick-parent'>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(e) => {setRValue(e.target.value)}}
      />

      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(e) => {setGValue(e.target.value)}}
      />

      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(e) => {setBValue(e.target.value)}}
      />
      <div className='rgb-result'>
      <div style={{width: '30px', height: '30px', backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`}}></div>
      <p>rgb({rValue},{gValue},{bValue})</p>
      </div>
    </div>
  );
};

export default RGBColorPicker;
