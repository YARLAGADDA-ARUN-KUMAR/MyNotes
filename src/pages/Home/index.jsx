import { Navbar } from "../../components/Navbar";
import { Fragment} from "react";
import { Sidebar } from "../../components/Sidebar";
import CreateNote from "../../components/CreateNote";

export const Home = () => {
  
  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <CreateNote />
        
      </main>
    </Fragment>
  );
};
