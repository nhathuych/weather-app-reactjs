import React from 'react'
import Temperature from './components/Temperature'
import Highlights from './components/Highlights'

function App() {
  return (
    <div className='flex justify-center align-top bg-[#1b1d43] h-screen'>
      <div className='mt-40 h-1/3 w-1/5'>
        <Temperature/>
      </div>
      <div className='grid grid-cols-2 gap-2 h-1/3 w-1/3 p-10 mt-40'>
        <h2 className='text-slate-200 text-2xl col-span-2'>Today's Highlights</h2>
        <Highlights/>
        <Highlights/>
        <Highlights/>
        <Highlights/>
      </div>
    </div>
  )
}

export default App
