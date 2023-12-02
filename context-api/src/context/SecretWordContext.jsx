import { createContext, useState } from "react";
export const SecretWordContext = createContext()
export const SecretWordContextProvider = ({children}) => {
    const [secretWordData, setSecretWordData] = useState("7pla2yjae8")
    return(
        <SecretWordContext.Provider value={{secretWordData, setSecretWordData}}>
            {children}
        </SecretWordContext.Provider>
    )
}