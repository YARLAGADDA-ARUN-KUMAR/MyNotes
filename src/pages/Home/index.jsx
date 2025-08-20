import { Navbar } from "../../components/Navbar";
import { Fragment, useReducer} from "react";
import { Sidebar } from "../../components/Sidebar";
import { notesReducer } from "../../reducers/notesReducer";

export const Home = () => {

  const initialState = {
    title : "",
    text : "",
    notes : []
  }

  const [{title,text,notes},notesDispatch] = useReducer(notesReducer,initialState)

  const onTitleChange = (e) => {
    notesDispatch({
      type : "TITLE",
      payload : e.target.value
    })
    }

  const onTextChange = (e) => {
    notesDispatch({
      type : "TEXT",
      payload : e.target.value
    })
  }

  const onAddClick = () => {
    notesDispatch({
      type : "ADD_NOTES"
    })
  }

  console.log(notes);
  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div>
          <div className="flex flex-col w-[300px] gap-0.5 relative">
            <input
              value={title}
              type="text"
              placeholder="Enter Title"
              onChange={onTitleChange}
              className="border-2 p-0.5 rounded-[5px]"
            />
            <textarea
              value={text}
              placeholder="Enter Text"
              className="border-2 p-0.5 rounded-[5px]"
              onChange={onTextChange}
            />
            <button disabled={!title || !text} onClick={onAddClick} className="absolute bottom-0 right-0">
              <span class="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
