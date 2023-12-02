import { createContext, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
export const WordContext = createContext();

export const WordContextProvider = ({ children }) => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const url = "http://localhost:3000/users";
  const { data, httpConfig } = useFetch(url);


  return (
    <WordContext.Provider
      value={{
        data,
        httpConfig,
        name,
        setName,
        password,
        setPassword
      }}
    >
      {children}
    </WordContext.Provider>
  );
};
