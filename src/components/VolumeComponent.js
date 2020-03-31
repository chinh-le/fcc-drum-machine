import React from 'react';
import { Form } from 'react-bootstrap';

import { off }  from '../const';

const VolumeComponent = (props) => {
  const { volume, handler, power } = { ...props };
  
  return (
    <Form.Group controlId="formBasicRange" className="col mx-auto text-center">
      <Form.Label className="text-secondary">Volume</Form.Label>
      <Form.Control onChange={handler} value={volume} min="0" max="1" step="0.01" disabled={power === off} type="range" className="custom-range" />
    </Form.Group>
  );
};

export default VolumeComponent;
