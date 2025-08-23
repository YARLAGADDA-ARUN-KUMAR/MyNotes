import { Navbar } from "../../components/Navbar";
import { Fragment } from "react";
import { Sidebar } from "../../components/Sidebar";
import CreateNote from "../../components/CreateNote";
import Notes from "../../components/Notes";
import { useAppContext } from "../../context/appContext";

export const Home = () => {
  const { notes } = useAppContext();
  console.log(notes);

  const pinnedNotes =
    notes?.length > 0 ? notes.filter(({ isPinned }) => isPinned) : [];
  const unPinnedNotes =
    notes?.length > 0 ? notes.filter(({ isPinned }) => !isPinned) : [];

  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div className="flex flex-col">
          <CreateNote />
          <Notes />
        </div>
      </main>
    </Fragment>
  );
};
