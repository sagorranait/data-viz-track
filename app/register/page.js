import React from 'react'
import Link from 'next/link'
import DivWrapper from '@/components/DivWrapper'

const Register = () => {
  return (
    <DivWrapper>
    <div className='w-80 p-5 md:w-96'>
      <div className='text-center mb-10'>
        <h2 className='font-bold text-2xl pb-5'>Create an Account</h2>
        <p>Even though registration just takes a few seconds, it provides you complete control over your data.</p>
      </div>
      <form>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-slate-700">Username</label>
          <div className="mt-1">
            <input 
              type="text" 
              name="username" 
              id="username" 
              className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-fuchsia-600 focus:ring-fuchsia-600 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-red-600 invalid:text-red-600 focus:invalid:border-red-600 focus:invalid:ring-red-600 disabled:shadow-none" 
              placeholder='Sagor Rana'
            />
          </div>
        </div>
        <div className='mt-5'>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
          <div className="mt-1">
            <input 
              type="email" 
              name="email" 
              id="email" 
              className="peer px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-fuchsia-600 focus:ring-fuchsia-600 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-red-600 invalid:text-red-600 focus:invalid:border-red-600 focus:invalid:ring-red-600 disabled:shadow-none" 
              placeholder="you@example.com"
            />
            <p className="mb-2 invisible peer-invalid:visible text-red-600 text-sm">
              Please provide a valid email address.
            </p>
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
          <div className="mt-1">
            <input 
              type="password" 
              name="password" 
              id="password" 
              className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-fuchsia-600 focus:ring-fuchsia-600 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-red-600 invalid:text-red-600 focus:invalid:border-red-600 focus:invalid:ring-red-600 disabled:shadow-none" 
              placeholder='********'
            />
          </div>
        </div>
        <div className="mt-6 text-center">
          <button className="bg-fuchsia-600 hover:bg-fuchsia-800 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
            Login
          </button>
        </div>
      </form>
      <div className='mt-20'>
        <p className='text-center text-sm'>Already have an account? <Link href='/login' className='underline text-fuchsia-600' >Login</Link></p>
      </div>
    </div>
  </DivWrapper>
  )
}

export default Register