import React from "react";
import { useAppContext } from "../../context/appContext";

function Notes() {
  const { title, text, notes, notesDispatch } = useAppContext();

  const onPinClick = (id, isPinned) => {
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

  const pinnedNotes =
    notes?.length > 0 ? notes.filter(({ isPinned }) => isPinned) : [];
  const unPinnedNotes =
    notes?.length > 0 ? notes.filter(({ isPinned }) => !isPinned) : [];

  return (
    <div className="ml-10">
      {pinnedNotes?.length > 0 && (
        <div className="flex mt-14 flex-col">
          <h1 className="font-bold h-fit">Pinned Notes</h1>
          <div className="mt-5 flex flex-wrap gap-6">
            {pinnedNotes?.length > 0 &&
              pinnedNotes.map(({ id, text, title, isPinned }) => (
                <div
                  key={id}
                  className="w-[300px] border-2 border-gray-400 p-2 rounded-md h-fit"
                >
                  <div className="flex justify-between border-b-2">
                    <p>{title}</p>
                    <button onClick={() => onPinClick(id, isPinned)}>
                      <span className="material-symbols-outlined">keep</span>
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <p>{text}</p>
                    <div className="ml-auto flex gap-2">
                      <button>
                        <span className="material-symbols-outlined">
                          archive
                        </span>
                      </button>
                      <button>
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
      {unPinnedNotes?.length > 0 && (
        <div className="flex mt-8 flex-col">
          <h1 className="font-bold h-fit">Other Notes</h1>
          <div className="mt-5 flex flex-wrap gap-6">
            {unPinnedNotes?.length > 0 &&
              unPinnedNotes.map(({ id, text, title, isPinned }) => (
                <div
                  key={id}
                  className="w-[300px] border-2 border-gray-400 p-2 rounded-md h-fit"
                >
                  <div className="flex justify-between border-b-2">
                    <p>{title}</p>
                    <button onClick={() => onPinClick(id, isPinned)}>
                      <span className="material-symbols-outlined">keep</span>
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <p>{text}</p>
                    <div className="ml-auto flex gap-2">
                      <button>
                        <span className="material-symbols-outlined">
                          archive
                        </span>
                      </button>
                      <button>
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Notes;
