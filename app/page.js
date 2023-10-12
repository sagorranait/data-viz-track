"use client";
import { useState } from 'react';
import DivWrapper from '@/components/DivWrapper'
import TabButton from '@/components/TabButton';
import UploadTab from '@/components/UploadTab';
import VisualizationTab from '@/components/VisualizationTab';

export default function Home() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <DivWrapper>
      <div className='p-5 w-full 2xl:w-2/3'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold pb-3 md:text-4xl md:pb-5'>The easy, confidential online data converter</h1>
          <p className='text-sm md:text-base'>DataVizTrack helps you quickly convert CSV data formats to a range of data visualization.</p>
        </div>
        <div className='mt-10 md:mt-16'>
          <div className="flex flex-wrap flex-row items-center justify-center md:justify-between">
            <TabButton
              index={1}
              activeTab={activeTab}
              title='Upload your CSV file'
              text='Drag and drop a file or Select a file.'
              handler={handleTabClick}
            />
            <div className='w-48 md:w-12 lg:w-48 h-2 rounded-full bg-gray-100'></div>
            <TabButton
              index={2}
              activeTab={activeTab}
              title='CSV data visualization'
              text='Select from a range of visualizations.'
              handler={handleTabClick}
            />
          </div>
          { activeTab === 1 ? 
            <UploadTab nextTabIndex={2} tabHandler={handleTabClick} /> :
            <VisualizationTab previousTabIndex={1} tabHandler={handleTabClick} />
          }
        </div>
      </div>
    </DivWrapper>
  )
}
