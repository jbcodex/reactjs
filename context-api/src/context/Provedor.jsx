import { createContext, useState } from "react";
export const ProvedorContext = createContext();
export const Provedor = ({ children }) => {
  const [counter, setCounter] = useState(5);
  return (
    <ProvedorContext.Provider value={{ counter, setCounter }}>
      {children}
    </ProvedorContext.Provider>
  );
};
