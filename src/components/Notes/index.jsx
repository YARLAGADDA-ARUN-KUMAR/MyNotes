import React from "react";
import { useAppContext } from "../../context/appContext";

const initialState = {
  notes: [],
  archive: [],
  bin: [],
  title: "",
  text: "",
};

function Notes({ id, title, text, isPinned }) {
  const { archive, bin, notesDispatch } = useAppContext();

  const isArchived = archive.some((note) => note.id === id);
  const isRemoved = bin.some((note) => note.id === id);

  const onPinClick = () => {
    !isPinned
      ? notesDispatch({
          type: "PIN",
          payload: { id },
        })
      : notesDispatch({
          type: "UNPIN",
          payload: { id },
        });
  };

  const onArchiveClick = () => {
    !isArchived
      ? notesDispatch({
          type: "ARCHIVE",
          payload: { id },
        })
      : notesDispatch({
          type: "REMOVE_FROM_ARCHIVE",
          payload: { id },
        });
  };

  const onBinClick = () => {
    !isRemoved
      ? notesDispatch({
          type: "BIN",
          payload: { id },
        })
      : notesDispatch({
          type: "REMOVE_FROM_BIN",
          payload: { id },
        });
  };

  return (
    <div className="w-[300px] border-2 border-gray-400 p-2 rounded-md h-fit">
      <div className="flex justify-between border-b-2">
        <p>{title}</p>
        {!isArchived ? (
          <button onClick={onPinClick}>
            <span className="material-symbols-outlined">keep</span>
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col">
        <p>{text}</p>
        <div className="ml-auto flex gap-2">
          <button onClick={onArchiveClick}>
            <span className="material-symbols-outlined">archive</span>
          </button>
          <button onClick={onBinClick}>
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notes;
