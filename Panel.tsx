import React from 'react';

import Score from './Score';
import ButtonIncrement from './ButtonIncrement';
import ButtonDecrement from './ButtonDecrement';

const Panel = () => {
  return (
    <>
      <Score />
      <ButtonIncrement /><ButtonDecrement />
    </>
  )
}

export default Panel;