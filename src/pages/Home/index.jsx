import { Navbar } from "../../components/Navbar";
import { Fragment } from "react";
import { Sidebar } from "../../components/Sidebar";
import CreateNote from "../../components/CreateNote";
import Notes from "../../components/Notes";
import { useAppContext } from "../../context/appContext";

export const Home = () => {
  const { notes } = useAppContext();
  const pinnedNotes = notes?.length > 0 ? notes.filter(({ isPinned }) => isPinned) : [];
  const unPinnedNotes = notes?.length > 0 ? notes.filter(({ isPinned }) => !isPinned) : [];

  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar className="w-36" />
        <div className="flex flex-col">
          <CreateNote />
          <div className="ml-10">
            {pinnedNotes?.length > 0 && (
              <div className="flex mt-14 flex-col">
                <h1 className="font-bold h-fit">Pinned Notes</h1>
                <div className="mt-5 flex flex-wrap gap-6">
                  {pinnedNotes?.length > 0 &&
                    pinnedNotes.map(({ id, text, title, isPinned }) => (
                      <Notes
                        key={id}
                        id={id}
                        text={text}
                        title={title}
                        isPinned={isPinned}
                      />
                    ))}
                </div>
              </div>
            )}
          </div>
          <div className="ml-10">
            {unPinnedNotes?.length > 0 && (
              <div className="flex mt-14 flex-col">
                <h1 className="font-bold h-fit">Other Notes</h1>
                <div className="mt-5 flex flex-wrap gap-6">
                  {unPinnedNotes?.length > 0 &&
                    unPinnedNotes.map(({ id, text, title, isPinned }) => (
                      <Notes
                        key={id}
                        id={id}
                        text={text}
                        title={title}
                        isPinned={isPinned}
                      />
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </Fragment>
  );
};
