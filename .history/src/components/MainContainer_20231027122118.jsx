import React from 'react'
import Topbar from './Topbar'
import MusicPlayer from './MusicPlayer'

const MainContainer = () => {
  return (
    <div className=' flex w-full flex-col'>
        <Topbar className=' w-full' />
        <MusicPlayer />
    </div>
  )
}

export default MainContainer