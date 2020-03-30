import React from 'react';

const PowerComponent = (props) => {
  const { power, handler } = { ...props };
  return (
    <div>
      <input onChange={handler} value="on" checked={power === 'on'} type="radio" name="power" id="" />
      <input onChange={handler} value="off" checked={power === 'off'} type="radio" name="power" id="" />
    </div>
  );
};

export default PowerComponent;
