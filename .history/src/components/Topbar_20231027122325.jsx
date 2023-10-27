import React from 'react'

const Topbar = () => {
  return (
    <div className=' w-full p-4 flex flex-col'>
        <div className=' mt-4 ml-2 text-gray-500'> First-level Menu / Second-level Menu / <span className=' text-gray-800'> Current Page</span></div>
        <div className='mt-4 ml-2 p-2 flex w-full justify-between'>
            <h1>Songs</h1>
            <button className=' bg-yellow-500 hover:bg-yellow-400 p-2'>Add Songs</button>
        </div>
    </div>
  )
}

export default Topbar