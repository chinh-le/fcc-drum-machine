import React from 'react';
import { Row, Button } from 'react-bootstrap';

import { off } from '../const';


const KeysComponent = (props) => {
  const { keys, handler, power } = { ...props };
  const items = keys.map((key) => (
    <Button key={key} onClick={handler} disabled={power === off} type="button" value={key} variant="dark" className="m-1 shadow-sm drum-keyboard__btn" style={{width: '73px', height: '60px'}}>{key}</Button>
  ));
  
  return (
    <Row className="mx-auto">{items}</Row>
  );
};

export default KeysComponent;
