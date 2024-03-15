import { createContext, useState } from "react";
//1)first we create a context by using createContext
export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    //2)then we create a provider of counter so that we give access to app component of my this particular context
    <CounterContext.Provider value={{ count, setCount, name: "piyush" }}>
      {props.children}
    </CounterContext.Provider>
  );
};
