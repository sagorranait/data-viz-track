import React from 'react'
import DivWrapper from '@/components/DivWrapper'

const Design = () => {
  return (
    <DivWrapper>
      <div className='w-full flex flex-wrap items-center justify-center gap-5'>
        <div className="relative bg-cover bg-center w-36 h-64 rounded-3xl">
          <div className="absolute inset-0 bg-sky-500 opacity-60 rounded-3xl"></div>
          <div className="relative z-10 text-white p-6">
            
          </div>
        </div>
        <div className='w-2/4 h-64 bg-gray-900 rounded-3xl'>
          <div></div>
          <div></div>
        </div>
        <div className="relative bg-cover bg-center w-36 h-64 rounded-3xl">
          <div className="absolute inset-0 bg-gray-900 opacity-60 rounded-3xl"></div>
          <div className="relative z-10 text-white p-6">
            
          </div>
        </div>
      </div>
    </DivWrapper>
  )
}

export default Design;