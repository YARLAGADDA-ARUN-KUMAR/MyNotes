import React, { Fragment } from "react"
import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"
import Notes from '../../components/Notes'
import { useAppContext } from '../../context/appContext'

export const Bin = () => {

    const { bin } = useAppContext();
  return (
    <Fragment>
      <Navbar />
      <main className="flex">
        <Sidebar className="w-36" />
        <div>
          <div className="ml-10">
            {bin?.length > 0 && (
              <div className="flex mt-5 flex-col">
                <div className=" flex flex-wrap gap-6">
                  {bin.map(({ id, text, title, isPinned }) => (
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
