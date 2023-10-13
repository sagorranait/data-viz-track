"use client";
import Papa from 'papaparse';
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import MessageToast from './MessageToast';

const UploadTab = ({ nextTabIndex, tabHandler }) => {
  const [loading, setLoading] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');
  const { register, handleSubmit } = useForm();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setSelectedFileName(selectedFile.name);
    } else {
      setSelectedFileName('');
    }

  }

  const fileInputValidation = (value) => {
    const acceptedFormats = ['csv'];
    const fileExtension = value[0]?.name.split('.').pop().toLowerCase();

    if (!value[0]) {
      toast.custom((t) => (
        <MessageToast toasts={t} type='error' title='No file selected.' description='Please choose a CSV file.' />
      ));
      return;
    }
    
    if (!acceptedFormats.includes(fileExtension)) {
      toast.custom((t) => (
        <MessageToast toasts={t} type='error' title='Invalid file format.' description='Only CSV files are allowed.' />
      ))
    }
    return true;
  }

  const uploadCSVHandler = async (data) => {
    const csvData = data.csvData[0];
    const getLocalData = JSON.parse(localStorage.getItem('dataviztrack'));

    if (csvData) {
      setLoading(true);
      Papa.parse(csvData, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results) => {
          setTimeout(() => {
            getLocalData?.convertList?.push(results.data);
            localStorage.setItem('dataviztrack', JSON.stringify(getLocalData));
            setLoading(false);
            tabHandler(nextTabIndex);          
          }, 500);
        },
        error: (error) => {
          toast.error(error);
          setLoading(false);
        },
      });
    }
  }

  return (
    <form className="p-4" onSubmit={handleSubmit(uploadCSVHandler)}>
      <div className="relative group w-full h-64 flex justify-center items-center">
        <div className="absolute inset-0 w-full h-full rounded-xl border-2 bg-opacity-80 backdrop-blur-xl border-dashed"></div>
        <input 
          {...register( "csvData", { validate: (value) => fileInputValidation(value) } )}
          className="relative z-10 opacity-0 h-full w-full cursor-pointer" 
          type="file"
          id="bgfile"
          onChange={handleFileChange}
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full m-auo flex items-center justify-center p-3">
            <div className="space-y-6 flex items-center justify-center flex-col">
              <Image src='/csv-icon.png' alt='CSV' width={100} height={100} />
              <p className="text-gray-700 text-center">
                Only the .csv file format is allowed to upload <br />
                <span className='text-sky-600'>
                  { selectedFileName ? 
                    <span> {selectedFileName} <br /><span className='font-semibold'>Select Another File.</span></span> : 
                    'Select a file'
                  }
                </span>
              </p>
            </div>
        </div>
      </div>
      <div className='pt-5 text-center'>
        <button type='submit' className='bg-fuchsia-600 hover:bg-fuchsia-800 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white'>{ loading ? 'Uploading...' :  'Upload' }</button>
        <p className='pt-10 text-gray-400 text-sm md:text-base'>By uploading your files or using our service you agree with our <span className='font-semibold underline cursor-pointer'>Terms of Service</span> and <span className='font-semibold underline cursor-pointer'>Privacy Policy</span>.</p>
      </div>
    </form>
  )
}

export default UploadTab