import React from 'react';
import { Col, Button } from 'react-bootstrap';


const KeysComponent = (props) => {
//   console.log('KeysComponent');
  const { keys, handler } = { ...props };
  const items = keys.map((key) => (
    <Button key={key} type="button" value={key} variant="dark" onClick={handler}>{key}</Button>
  ));
  return (
    <Col>{items}</Col>
  );
};

export default KeysComponent;
