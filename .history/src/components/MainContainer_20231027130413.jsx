import React, { useState } from 'react'
import Topbar from './Topbar'
import MusicPlayer from './MusicPlayer'
import songs from './contexts/songs'
// import AddSongForm from './AddSongsForm';

const MainContainer = () => {
    const [isaddSong, setIsaddSong] = useState(false);
    const addSongForm = ()=>{
        setIsaddSong(!isaddSong);
    }
  return (
    <div className=' flex relative z-0 w-full flex-col'>
        <Topbar addSongForm={addSongForm} className=' w-full' />
        {/* { isaddSong && <AddSongForm className=' absolute z-10' /> } */}
        { songs.map(song => (
            <div className=' w-full p-2 flex justify-around'></div>
        )) }
        <MusicPlayer />
    </div>
  )
}

export default MainContainer