import React from 'react'

const DivWrapper = ({ children }) => {
  return (
    <div className='container mx-auto h-screen flex items-center justify-center'>
      { children }
    </div>
  )
}

export default DivWrapper