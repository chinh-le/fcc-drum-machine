import React, { useState } from 'react';
import {
  Container, Row,
} from 'react-bootstrap';

import { drums } from '../const';

import './DrumComponent.scss';


const DrumComponent = () => {
  console.log('DrumComponent');
  const [typeEffect, setTypeEffect] = useState(drums);

  return (
    <Container fluid>
      <Row />
    </Container>
  );
};

export default DrumComponent;
