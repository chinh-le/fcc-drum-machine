import React from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

import { drums, miscs, off } from '../const';

const TypesComponent = (props) => {
  const { type, handler, power } = { ...props };
  
  return (
    <ToggleButtonGroup type="radio" name="type" defaultValue={type} className="mx-auto">
      <ToggleButton onChange={handler} value={drums} disabled={power === off} variant="primary" className="text-capitalize">{drums}</ToggleButton>
      <ToggleButton onChange={handler} value={miscs} disabled={power === off} variant="primary" className="text-capitalize">{miscs}</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TypesComponent;
