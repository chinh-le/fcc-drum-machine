import React from 'react';
import { Button } from 'react-bootstrap';

import { off } from '../const';


const KeysComponent = (props) => {
  const { keys, handler, power } = { ...props };
  const items = keys.map((key) => (
    <Button key={key} onClick={handler} disabled={power === off} type="button" value={key} variant="dark" className="shadow-sm drum-keyboard__btn">{key}</Button>
  ));
  
  return (
      <div className="d-flex flex-wrap justify-content-between align-content-between drum-keyboard-container">{items}</div>
  );
};

export default KeysComponent;
