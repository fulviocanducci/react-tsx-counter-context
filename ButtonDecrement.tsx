import React from 'react';
import { useCounterHandlerDecrement } from './Counter';

const ButtonDecrement = () => {
  const handleOnClick = useCounterHandlerDecrement();
  return <button onClick={handleOnClick}>Decrement</button>
}

export default ButtonDecrement;