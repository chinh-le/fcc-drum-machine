import React from 'react';

import { drums, miscs } from '../const';

const TypesComponent = (props) => {
  console.log(props);
  const { type, handler } = { ...props };
  return (
    <div>
      <input onChange={handler} value={drums} checked={type === drums} type="radio" name="types" id="" />
      <input onChange={handler} value={miscs} checked={type === miscs} type="radio" name="types" id="" />
    </div>
  );
};

export default TypesComponent;
