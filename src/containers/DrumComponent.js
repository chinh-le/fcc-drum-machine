import React, { useState, useEffect } from 'react';
import {
  Container, Col, Row
} from 'react-bootstrap';
import UIfx from 'uifx';

import KeysComponent from '../components/KeysComponent';
import TypesComponent from '../components/TypesComponent';
import VolumeComponent from '../components/VolumeComponent';
import PowerComponent from '../components/PowerComponent';
import LabelComponent from '../components/LabelComponent';

import './DrumComponent.scss';

import {
  keys, drums, drumMap, miscMap, on, off
} from '../const';

const DrumComponent = () => {
  const [typeEffect, setTypeEffect] = useState(drums);
  const [fx, setFx] = useState(null);
  const [volume, setVolume] = useState(0.5);
  const [power, setPower] = useState(on);
  const [label, setLabel] = useState('');

  const setAudio = (typeFx) => {
    const effectMap = typeFx === drums ? drumMap : miscMap;
    const audioMap = new Map();
    keys.forEach((element) => {
      audioMap.set(element, {
        file: new UIfx(effectMap.get(element).file),
        label: effectMap.get(element).label
      });
    });
    setFx(audioMap);
  };

  useEffect(() => {
    setAudio(typeEffect);
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
    setPower(power === on ? off : on);
  };

  return (
    <Container fluid className="drum-container">
      <h1 className="text-center my-4">Drum Machine</h1>
      <div className="d-flex flex-row flex-wrap justify-content-center px-5">
        <div className="mb-4 drum-keyboard">
            <KeysComponent keys={keys} handler={keyHandler} power={power} />
        </div>
        <div className="mb-4 drum-control">
          <div className="d-flex flex-column justify-content-between drum-control-container">
            <PowerComponent power={power} handler={powerHandler} />
            <LabelComponent label={label} />
            <VolumeComponent vol={volume} handler={volumeHandler} power={power} />
            <TypesComponent type={typeEffect} handler={typeHandler} power={power} />
          </div>
        </div>
        
      </div>
    </Container>
  );
};

export default DrumComponent;
