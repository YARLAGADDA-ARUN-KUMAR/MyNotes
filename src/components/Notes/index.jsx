import React from "react";
import { useAppContext } from "../../context/appContext";

function Notes({ id, title, text, isPinned }) {
  const { archive, notesDispatch } = useAppContext();

  const isArchived = archive.some((note) => note.id === id);

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
          <button>
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notes;
