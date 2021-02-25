import React, { useState, createContext, Dispatch, SetStateAction, ReactNode, useContext } from "react";


interface ICounterContext {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

interface ICounterProviderProps {
  children: ReactNode;
}

const CounterContext = createContext<Partial<ICounterContext>>({});

const CounterProvider = ({children}: ICounterProviderProps) => {
  const [value, setValue] = useState<number>(0);
  return (
    <CounterContext.Provider value={{value, setValue}}>{children}</CounterContext.Provider>
  )
}

export const useCounterValue = (): number => {
  const {value} = useContext(CounterContext);
  return value;
}


export const useCounterHandlerIncrement = () : () => void => {
  const {setValue} = useContext(CounterContext);
  const handleIncrement = () => setValue(state => state + 1);  
  return handleIncrement;
}

export const useCounterHandlerDecrement = () : () => void => {
  const {setValue} = useContext(CounterContext);
  const handleDecrement = () => setValue(state => state - 1);
  return handleDecrement;
}

export default CounterProvider;