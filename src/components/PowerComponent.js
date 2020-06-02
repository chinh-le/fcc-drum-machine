import React from 'react';
import { Button, Col } from 'react-bootstrap';

import { off } from '../const';


const PowerComponent = (props) => {
  const { power, handler } = { ...props };
  const cssClasses = {
    className: `rounded-pill text-uppercase btn__power--size ${power === off && 'text-secondary'} mb-2`,
  };
  const cssInline = {
    style: {
      width: '46px',
      height: '34px',
      borderWidth: '2px',
      backgroundColor: `${power === off ? 'transparent' : ''}`,
      fontSize: '0.8rem',
    },
  };

  return (
    <Col className="text-right">
      <Button onClick={handler} variant="danger" className={cssClasses.className} style={cssInline.style}>{power}</Button>
    </Col>
  );
};

export default PowerComponent;
