import { Children, createContext,useContext,useReducer,react } from "react";
import { notesReducer } from "../reducers/notesReducer";

const AppContext = createContext();

export const AppContextProvider = ({children}) =>{
    const initialState = {
    title : "",
    text : "",
    notes : [],
    pinnedNotes: [],
    unPinnedNotes: []
  }

  const [{title,text,notes,pinnedNotes,unPinnedNotes},notesDispatch] = useReducer(notesReducer,initialState)

  return (
    <AppContext.Provider value={{title,text,notes,notesDispatch}}>
        {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)