import React, { Fragment } from 'react'

type TProps = {
  children?: React.ReactNode | any
}

const Main: React.FC<TProps> = ({ children }) => {
  return (
    <React.Fragment>
      <main className={'app-main'}>
        <div className="app-content"> {children}</div>
      </main>
    </React.Fragment>
  )
}   

export default Main
