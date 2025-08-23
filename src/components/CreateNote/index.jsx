import React from 'react'
import { useReducer } from 'react';
import { notesReducer } from "../../reducers/notesReducer";
import {useAppContext} from '../../context/appContext';

function CreateNote() {

  const {title,text,notes,notesDispatch} = useAppContext()

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
  
  return (
    <div className='h-fit w-screen flex  mt-4 justify-center items-center'>
          <div className="flex flex-col w-[450px] gap-1 relative border-2 rounded-md  ">
            <input
              value={title}
              type="text"
              placeholder="Enter Title"
              onChange={onTitleChange}
              className=" p-1 border-none"
            />
            <textarea
              value={text}
              placeholder="Enter Text"
              className="border-none p-1 h-[100px]"
              onChange={onTextChange}
            />
            <button disabled={!title || !text} onClick={onAddClick} className="absolute bottom-0 right-0">
              <span class="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
  )
}

export default CreateNote