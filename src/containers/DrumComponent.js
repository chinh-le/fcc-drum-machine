import React, { useState, useEffect } from 'react';
import {
  Container,
} from 'react-bootstrap';
import UIfx from 'uifx';

import KeysComponent from '../components/KeysComponent';
import TypesComponent from '../components/TypesComponent';
import VolumeComponent from '../components/VolumeComponent';
import PowerComponent from '../components/PowerComponent';
import LabelComponent from '../components/LabelComponent';

import './DrumComponent.scss';

import {
  keys, drums, drumMap, miscMap, on
} from '../const';

const DrumComponent = () => {
//   console.log('DrumComponent');
  const [typeEffect, setTypeEffect] = useState(drums);
  const [fx, setFx] = useState(null);
  const [volume, setVolume] = useState(0.5);
  const [power, setPower] = useState(on);
  const [label, setLabel] = useState('');

  const setAudio = () => {
    const effectMap = typeEffect === drums ? drumMap : miscMap;
    console.log(effectMap)
    const audioMap = new Map();
    keys.forEach((element) => {
      console.log(effectMap.get(element).file)
      audioMap.set(element, {
        file: new UIfx(effectMap.get(element).file),
        label: effectMap.get(element).label
      });
    });
    setFx(audioMap);
  };

  useEffect(() => {
    setAudio();
  }, [typeEffect]);

  const keyHandler = (evt) => {
    fx.get(evt.target.value).file.play(Number(volume));
    setLabel(fx.get(evt.target.value).label);
  };

  const typeHandler = (evt) => {
    setTypeEffect(evt.target.value);
  };

  const volumeHandler = (evt) => {
    setVolume(evt.target.value);
  };

  const powerHandler = (evt) => {
    setPower(evt.target.value);
  };

  return (
    <Container fluid>
      <KeysComponent keys={keys} handler={keyHandler} power={power} />
      <PowerComponent power={power} handler={powerHandler} />
      <LabelComponent label={label} />
      <VolumeComponent vol={volume} handler={volumeHandler} power={power} />
      <TypesComponent type={typeEffect} handler={typeHandler} power={power} />
    </Container>
  );
};

export default DrumComponent;
