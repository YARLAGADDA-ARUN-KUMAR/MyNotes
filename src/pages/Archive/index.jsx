import React, { Fragment } from 'react'
import { Navbar } from '../../components/Navbar'
import { Sidebar } from '../../components/Sidebar'
import Notes from '../../components/Notes'
import { useAppContext } from '../../context/appContext'


function Archive() {
  const { archive } = useAppContext();

  return (
    <Fragment>
      <Navbar />
      <main className="flex">
        <Sidebar />
        <div>
          <div className="ml-10">
            {archive?.length > 0 && (
              <div className="flex mt-5 flex-col">
                <div className=" flex flex-wrap gap-6">
                  {archive.map(({ id, text, title, isPinned }) => (
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
  )
}

export default Archive