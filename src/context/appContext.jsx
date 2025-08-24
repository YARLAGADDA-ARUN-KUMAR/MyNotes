import { createContext, useContext, useReducer, useEffect } from "react";
import { notesReducer } from "../reducers/notesReducer";

const AppContext = createContext();

const LOCAL_STORAGE_KEY = "notesAppState";

const getInitialState = () => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (stored) return JSON.parse(stored);
  return {
    title: "",
    text: "",
    notes: [],
    archive: [],
    bin: [],
    date: new Date().toLocaleString(),
  };
};

export const AppContextProvider = ({ children }) => {
  const [state, notesDispatch] = useReducer(notesReducer, {}, getInitialState);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const { title, text, notes, archive, bin, date } = state;

  return (
    <AppContext.Provider value={{ title, text, notes, archive, bin, date, notesDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);