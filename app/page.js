"use client";
import { useState } from 'react';
import DivWrapper from '@/components/DivWrapper'

export default function Home() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <DivWrapper>
      <div className='p-5 w-2/3'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold pb-5'>The easy, confidential online data converter</h1>
          <p className='text-base'>DataVizTrack helps you quickly convert CSV data formats to a range of data visualization.</p>
        </div>
        <div>
          <div className="flex">
            <button
              className={`${activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600' } p-2 px-4`}
              onClick={() => handleTabClick(1)}
            >
              Tab 1
            </button>
            <button
              className={`${
                activeTab === 2
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-gray-600'
              } p-2 px-4`}
              onClick={() => handleTabClick(2)}
            >
              Tab 2
            </button>
          </div>

          {activeTab === 1 && (
            <div className="p-4">
              <button onClick={() => handleTabClick(2)}>Open Tab 2</button>
            </div>
          )}

          {activeTab === 2 && (
            <div className="p-4">This is the content of Tab 2</div>
          )}
        </div>
      </div>
    </DivWrapper>
  )
}
