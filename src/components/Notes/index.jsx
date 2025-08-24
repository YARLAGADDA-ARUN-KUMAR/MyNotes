import React from "react";
import { useAppContext } from "../../context/appContext";

function Notes({ id, title, text, isPinned }) {
  const { archive, bin, notes, date, notesDispatch } = useAppContext();

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

  const archiveToBinClick = () => {
    notesDispatch({
      type: "ARCHIVE_TO_BIN",
      payload: { id },
    });
  };

  return (
    <div className="min-w-[300px] border-2 border-gray-400 px-2 rounded-md h-fit">
      <div className="flex justify-between border-b-2">
        <p className="font-bold">{title}</p>
        {!isArchived && !isRemoved ? (
          <button onClick={onPinClick} className="hover:scale-105">
            <i style={{ fontSize: "1.5rem" , padding: "0rem 0rem 0rem 1rem" }} className={isPinned ? "bi bi-pin-fill" : "bi bi-pin"}></i>
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col">
        <p>{text}</p>
        <div className="flex justify-between mt-2">
          <div>
            <small>{date}</small>
          </div>
          <div className="ml-auto flex gap-2">
          { !isRemoved ? (
            <button onClick={onArchiveClick} className="hover:scale-105">
              <i className={isArchived ? "bi bi-box-arrow-in-down" : "bi bi-archive-fill"} style={{ fontSize: "1.5rem" }}></i>
            </button>
          ) : (
            <></>
          )}
          <button onClick={!isArchived ? onBinClick : archiveToBinClick} className="hover:scale-105">
            <i className={isRemoved ? "bi bi-house-door-fill" : "bi bi-trash-fill"} style={{ fontSize: "1.5rem" }}></i>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
