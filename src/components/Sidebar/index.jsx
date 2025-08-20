import { NavLink } from "react-router-dom";
import { Home } from "../../pages/Home";

export const Sidebar = () => {
  const styles = ({ isActive }) => {
    const style = "flex align-items gap-1 px-1 py-1 font-bold  rounded-r-full";
    return isActive ? `bg-blue-400 ${style}` : `hover:bg-blue-400 ${style}`;
  };

  return (
    <>
      <aside className="flex flex-col gap-4 w-36 h-screen border-r-2 border-gray-300 mt-1">
        <NavLink to="/" className={styles}>
          <span class="material-symbols-outlined">home</span>
          <span>Home</span>
        </NavLink>
        <NavLink to="/archive" className={styles}>
          <span class="material-symbols-outlined">archive</span>
          <span>Archive</span>
        </NavLink>
        <NavLink to="/important" className={styles}>
          <span class="material-symbols-outlined">star</span>
          <span>Important</span>
        </NavLink>
        <NavLink to="/bin" className={styles}>
          <span class="material-symbols-outlined">delete</span>
          <span>Bin</span>
        </NavLink>
      </aside>
    </>
  );
};
