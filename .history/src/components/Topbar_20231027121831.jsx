import React from 'react'

const Topbar = () => {
  return (
    <div className=' w-full p-4 flex flex-col'>
        <div className=' mt-4 ml-2 text-gray-500'> First-level Menu / Second-level Menu / <span className=' text-gray-800'> Current Page</span></div>
    </div>
  )
}

export default Topbar