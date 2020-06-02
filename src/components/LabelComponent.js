import React from 'react';
import { Col } from 'react-bootstrap';

const LabelComponent = (props) => {
  const { label } = { ...props };

  return (
    <Col>
      <p className="d-flex justify-content-center flex-column rounded-lg border w-100 text-center" style={{ height: '40px', fontSize: '0.8rem' }} id="display">{label}</p>
    </Col>
  );
};

export default LabelComponent;
