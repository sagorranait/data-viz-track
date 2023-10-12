import Image from 'next/image'
import React from 'react'

const UploadTab = ({ nextTabIndex, tabHandler }) => {
  return (
    <form className="p-4">
      <div className="relative group w-full h-64 flex justify-center items-center">
        <div className="absolute inset-0 w-full h-full rounded-xl border-2 bg-opacity-80 backdrop-blur-xl border-dashed"></div>
        <input accept=".csv" className="relative z-10 opacity-0 h-full w-full cursor-pointer" type="file" name="bgfile" id="bgfile"/>
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full m-auo flex items-center justify-center">
            <div className="space-y-6 flex items-center justify-center flex-col">
              <Image
                src='/csv-icon.png'
                alt='CSV'
                width={100}
                height={100}
              />
              <p className="text-gray-700 text-center">Only the .csv file format is allowed to upload <label htmlFor="dragOver" title="Upload a file" className="relative z-20 cursor-pointer text-blue-500 hover:text-blue-600 block">Select a file</label> </p>
            </div>
        </div>
      </div>
      <div className='pt-5 text-center'>
        <button onClick={() => tabHandler(nextTabIndex)} className='bg-fuchsia-600 hover:bg-fuchsia-800 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white'>
          Upload
        </button>
        <p className='pt-10 text-gray-400'>By uploading your files or using our service you agree with our <span className='font-semibold underline cursor-pointer'>Terms of Service</span> and <span className='font-semibold underline cursor-pointer'>Privacy Policy</span>.</p>
      </div>
    </form>
  )
}

export default UploadTab