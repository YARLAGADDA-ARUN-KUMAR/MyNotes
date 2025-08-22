import { Children, createContext,useContext,useReducer,react } from "react";
import { notesReducer } from "../reducers/notesReducer";

const AppContext = createContext();

export const AppContextProvider = ({children}) =>{
    const initialState = {
    title : "",
    text : "",
    notes : []
  }

  const [{title,text,notes},notesDispatch] = useReducer(notesReducer,initialState)

  return (
    <AppContext.Provider value={{title,text,notes,notesDispatch}}>
        {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)