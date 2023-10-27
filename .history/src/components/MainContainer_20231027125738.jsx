import React, { useState } from 'react'
import Topbar from './Topbar'
import MusicPlayer from './MusicPlayer'
import AddSongForm from './AddSongsForm';

const MainContainer = () => {
    const [isaddSong, setIsaddSong] = useState(false);
    const addSongForm = ()=>{
        setIsaddSong(!isaddSong);
    }
  return (
    <div className=' flex relative z-0 w-full flex-col'>
        <Topbar addSongForm={addSongForm} className=' w-full' />
        {/* { isaddSong && <AddSongForm className=' absolute z-10' /> } */}
        <MusicPlayer />
    </div>
  )
}

export default MainContainer