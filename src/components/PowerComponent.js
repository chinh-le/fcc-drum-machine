import React from 'react';
import { Button, Col } from 'react-bootstrap';

import { off } from '../const';


const PowerComponent = (props) => {
  const { power, handler } = { ...props };
  const cssClasses = {
    className: `rounded-pill text-uppercase btn__power--size ${power === off && 'text-secondary'}`
  };
  const cssInline = {
    style: {
      width: '40px',
      height: '30px',
      borderWidth: '2px',
      backgroundColor: `${power === off ? 'transparent' : ''}`,
      fontSize: '0.8rem'
    }
  };
  
  return (
    <Col className="text-right">
      <Button onClick={handler} variant="danger" {...cssClasses} {...cssInline}>{power}</Button>
    </Col>    
  );
};

export default PowerComponent;
