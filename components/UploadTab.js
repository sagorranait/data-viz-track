import React from 'react'

const UploadTab = ({ nextTabIndex, tabHandler }) => {
  return (
    <div className="p-4">
      <button onClick={() => tabHandler(nextTabIndex)}>Open Tab 2</button>
    </div>
  )
}

export default UploadTab