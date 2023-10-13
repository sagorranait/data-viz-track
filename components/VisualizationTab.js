"use client";
import React, { useState } from 'react'
import { 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  BarChart, 
  ResponsiveContainer, 
  PieChart,
  Pie,
  LineChart,
  Line
} from 'recharts';

const VisualizationTab = ({ previousTabIndex, tabHandler }) => {
  const [setselectVisualization, setsetselectVisualization] = useState('bar');
  const { userType, convertList } = JSON.parse(localStorage.getItem('dataviztrack'));

  const selectVisualizationHandler = (event) => {
    console.log(typeof(event.target.value));
    setsetselectVisualization(event.target.value);
  }

  return (
    <div className="p-4">
      <div className='mb-8 md:mb-14'>
        { setselectVisualization === 'bar' && 
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={convertList[convertList.length - 1]} >
              <XAxis dataKey="Employee Name" />
              <YAxis dataKey="Employee ID" />
              <Tooltip />
              <Bar dataKey="Employee ID" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        }
        { setselectVisualization === 'pie' && 
          <ResponsiveContainer width="100%" height={350}>            
            <PieChart>
              <Pie dataKey="Employee ID" data={convertList[convertList.length - 1]} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label/>
                <Pie dataKey="Employee ID" fill="#82ca9d" />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        }
        { setselectVisualization === 'line' && 
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={convertList[convertList.length - 1]} >
              <XAxis dataKey="Employee Name" />
              <YAxis dataKey="Employee ID" />
              <Tooltip />
              <Line type="monotone" dataKey="Employee ID" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        }
        {setselectVisualization !== 'bar' && setselectVisualization !== 'pie' && setselectVisualization !== 'line' && (
          <p>Invalid visualization selected.</p>
        )}
      </div>
      <div className='flex flex-wrap items-center justify-center flex-col gap-5 md:gap-0 md:justify-between md:flex-row'>
        <div className='flex flex-wrap items-center justify-center gap-2 flex-row'>
          <p>Select Visualization : </p>
          <div className="w-48 relative">
            <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:text-gray-900" onChange={selectVisualizationHandler}>
              <option value="bar" defaultValue>Bar Chart</option>
              <option value="pie">Pie Chart</option>
              <option value="line">Line Graph</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
              </svg>
            </div>
          </div>
        </div>
        <div>
          <button 
           onClick={() => tabHandler(previousTabIndex)} 
           className='bg-fuchsia-600 hover:bg-fuchsia-800 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white mr-3'
          >
            Back
          </button>
          <button 
            onClick={() => tabHandler(previousTabIndex)} 
            className='bg-fuchsia-600 hover:bg-fuchsia-800 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default VisualizationTab