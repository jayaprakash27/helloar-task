import React from 'react'
import { MainContainer } from '.'

const MainPage = () => {
  return (
    <div className=' bg-white h-screen w-screen flex'>
      <Sidebar />
      <MainContainer />
    </div>
  )
}

export default MainPage