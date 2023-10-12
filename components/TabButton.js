import React from 'react'

const TabButton = ({ index, activeTab, title, text, handler }) => {
  return (
    <button
      disabled={activeTab === 1}
      onClick={() => handler(index)}
    >
      <div className='flex items-center flex-row gap-4 p-5'>
        <div className={`w-8 h-8 border rounded-full flex items-center justify-center ${activeTab === index ? 'border-fuchsia-600 text-fuchsia-600 font-medium' : 'border-gray-300 text-gray-300' }`}>
          {index}
        </div>
        <div className='text-left'>
          <h4 className={`text-lg ${activeTab === index ? 'text-fuchsia-600 font-semibold' : 'text-gray-300' }`}>
            {title}
          </h4>
          <p className={`text-sm ${activeTab === index ? 'text-fuchsia-600' : 'text-gray-300' }`}>
            {text}
          </p>
        </div>
      </div>
    </button>
  )
}

export default TabButton