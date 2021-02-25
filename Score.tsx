import React from "react";
import { useCounterValue } from "./Counter";

const Score = () => {
  const value = useCounterValue();
  return <div>{value}</div>;
};

export default Score;
