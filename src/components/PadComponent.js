import React from 'react';
import { Button } from 'react-bootstrap';

import { off } from '../const';


const PadComponent = (props) => {
  const { keys, handler, power } = { ...props };
  const items = keys.map((key) => (
    <Button key={key} onClick={handler} disabled={power === off} type="button" value={key} variant="dark" className="shadow-sm drum-pad" id={key}>{key}</Button>
  ));
  
  return (
      <div className="d-flex flex-wrap justify-content-between align-content-between drum-pad-container">{items}</div>
  );
};

export default PadComponent;
