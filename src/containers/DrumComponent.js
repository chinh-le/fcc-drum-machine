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
    <Container fluid>
      <Row className="p-4 mx-auto" style={{width: '575px'}}>
        <Col xs="6"><KeysComponent keys={keys} handler={keyHandler} power={power} /></Col>
        <Col xs="6" className="d-flex flex-column justify-content-between">
          <PowerComponent power={power} handler={powerHandler} />
          <LabelComponent label={label} />
          <VolumeComponent vol={volume} handler={volumeHandler} power={power} />
          <TypesComponent type={typeEffect} handler={typeHandler} power={power} />
        </Col>
      </Row>
    </Container>
  );
};

export default DrumComponent;
