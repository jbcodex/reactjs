import { createContext, useReducer } from "react";
export const DataContext = createContext()
export const SetColor = (state, action) => {
    switch(action.color){
        case "RED":
            return{...state, color:"red"}
        case "BLUE":
            return{...state, color:"blue"}
        case "GREEN":
            return{...state, color:"green"}
        default:
            return state;
    }
}
export const DataContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(SetColor, {color:"orange"})
    return(
        <DataContext.Provider value={{...state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}