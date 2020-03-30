import React, { useState, useEffect } from 'react';
import {
  Container,
} from 'react-bootstrap';
import UIfx from 'uifx';

import KeysComponent from '../components/KeysComponent';
import TypesComponent from '../components/TypesComponent';

import './DrumComponent.scss';

import {
  keys, drums, drumMap, miscMap,
} from '../const';

const DrumComponent = () => {
//   console.log('DrumComponent');
  const [typeEffect, setTypeEffect] = useState(drums);
  const [fx, setFx] = useState(null);

  const setAudio = () => {
    const effectMap = typeEffect === drums ? drumMap : miscMap;
    const audioMap = new Map();
    keys.forEach((element) => {
      audioMap.set(element, new UIfx(effectMap.get(element)));
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

  const typeHandler = (evt) => {
    // console.log(evt.target.value);
    setTypeEffect(evt.target.value);
  };

  return (
    <Container fluid>
      <KeysComponent keys={keys} handler={keyHandler} />
      <TypesComponent type={typeEffect} handler={typeHandler} />
    </Container>
  );
};

export default DrumComponent;
