import React, { useState, createContext, Dispatch, SetStateAction, ReactNode } from "react";


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
