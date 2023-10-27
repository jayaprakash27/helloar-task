import React from 'react'
import { MainContainer, Sidebar } from '.'

const MainPage = () => {
  return (
    <div className=' bg-white h-screen w-screen flex'>
      <Sidebar />
      <MainContainer />
    </div>
  )
}

export default MainPage