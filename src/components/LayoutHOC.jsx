import React from "react"
import Header from "./Header"

const LayoutHOC = ({Component}) => {
  return(
    <div className="flex flex-1 flex-col">
      <Header/>
      <div className="flex flex-1 overflow-x-auto">
        <Component />
      </div>
    </div>
  )
}

export default LayoutHOC;