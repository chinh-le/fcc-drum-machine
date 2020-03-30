import React from 'react';

import {off} from '../const';

const VolumeComponent = (props) => {
  const { volume, handler, power } = { ...props };
  return (
    <div>
      <input onChange={handler} value={volume} disabled={power === off} type="range" name="" id="" min="0" max="1" step="0.1" />
    </div>
  );
};

export default VolumeComponent;
