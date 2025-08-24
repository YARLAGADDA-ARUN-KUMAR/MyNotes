import { Children, createContext,useContext,useReducer,react } from "react";
import { notesReducer } from "../reducers/notesReducer";

const AppContext = createContext();

export const AppContextProvider = ({children}) =>{
    const initialState = {
    title : "",
    text : "",
    notes : [],
    archive: [],
    bin: [],
    date: new Date().toLocaleString(),
  }

  const [{title,text,notes,archive,bin,date},notesDispatch] = useReducer(notesReducer,initialState)

  return (
    <AppContext.Provider value={{title,text,notes,archive,bin,date,notesDispatch}}>
        {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)