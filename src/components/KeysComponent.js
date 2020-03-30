import React from 'react';
import { Col, Button } from 'react-bootstrap';
import {off} from '../const';


const KeysComponent = (props) => {
//   console.log('KeysComponent');
  const { keys, handler, power } = { ...props };
  const items = keys.map((key) => (
    <Button key={key} onClick={handler} disabled={power === off} type="button" value={key} variant="dark">{key}</Button>
  ));
  return (
    <Col>{items}</Col>
  );
};

export default KeysComponent;
