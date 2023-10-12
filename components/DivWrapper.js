import React from 'react'

const DivWrapper = ({ children }) => {
  return (
    <div className='container mx-auto h-[calc(100vh - 70px)] pt-20 flex items-center justify-center'>
      { children }
    </div>
  )
}

export default DivWrapper