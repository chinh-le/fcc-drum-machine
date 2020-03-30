import React, { useState, useEffect } from 'react';
import {
  Container,
} from 'react-bootstrap';
import UIfx from 'uifx';

import KeysComponent from '../components/KeysComponent';

import './DrumComponent.scss';

import {
  keys, drums, drumMap,
} from '../const';

const DrumComponent = () => {
//   console.log('DrumComponent');
  const [typeEffect, setTypeEffect] = useState(drums);
  const [fx, setFx] = useState(null);

  const setAudio = () => {
    const audioMap = new Map();
    keys.forEach((element) => {
      audioMap.set(element, new UIfx(drumMap.get(element)));
    });
    setFx(audioMap);
  };

  useEffect(() => {
    // console.log(typeEffect);
    setAudio();
  }, [typeEffect]);
  const keyHandler = (evt) => {
    fx.get(evt.target.value).play();
  };

  return (
    <Container fluid>
      <KeysComponent keys={keys} handler={keyHandler} />
    </Container>
  );
};

export default DrumComponent;
