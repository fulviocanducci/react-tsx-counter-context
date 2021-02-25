import React from "react";
import { useCounterHandlerIncrement } from "./Counter";

const ButtonIncrement = () => {
  const handleOnClick = useCounterHandlerIncrement();
  return <button onClick={handleOnClick}>Increment</button>;
};

export default ButtonIncrement;
