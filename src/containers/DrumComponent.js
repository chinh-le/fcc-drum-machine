import React, { useState } from 'react';
import {
  Container, Row,
} from 'react-bootstrap';

import KeysComponent from '../components/KeysComponent';

import './DrumComponent.scss';

import { keys, drums } from '../const';

const DrumComponent = () => {
  console.log('DrumComponent');
  const [typeEffect, setTypeEffect] = useState(drums);

  const keyHandler = (evt) => {
    console.log(evt.target.value);
  };

  return (
    <Container fluid>
      <KeysComponent keys={keys} handler={keyHandler} />
    </Container>
  );
};

export default DrumComponent;
