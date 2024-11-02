import React from 'react'

function Highlights() {
  return (
    <div className='flex flex-col justify-start items-center bg-slate-600 text-slate-200 p-2'>
      <h2 className='text-sm mt-2'>Wind Status</h2>
      <div className='mt-2'>
        <span className='font-bold text-4xl'>2.4</span>
        <span className='text-2xl'>mph</span>
      </div>

      <div className='flex mt-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
        </svg>
      </div>

      <div className='ms-2'>E</div>

      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 mt-4">
        <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{width: '45%'}}></div>
      </div>
    </div>
  )
}

export default Highlights
