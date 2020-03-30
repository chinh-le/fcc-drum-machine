import React from 'react';

import { drums, miscs, off } from '../const';

const TypesComponent = (props) => {
  const { type, handler, power } = { ...props };
  return (
    <div>
      <input onChange={handler} value={drums} checked={type === drums} disabled={power === off} type="radio" name="types" id="" />
      <input onChange={handler} value={miscs} checked={type === miscs} disabled={power === off} type="radio" name="types" id="" />
    </div>
  );
};

export default TypesComponent;
