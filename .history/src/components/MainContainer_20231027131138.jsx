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
            <div className=' w-full p-2 grid grid-cols-5'>
                <div className=' flex justify-start'>
                <img height={30} width={30} src={song.photoURL} alt="" />
                <span> {song.songName} </span>
                </div>
                <div className=' w-40'>
                    {song.source}
                </div>
                <div className=' w-40'>
                    {song.addedOn}
                </div>
                <div className=' w-40'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM15 29V11L29 20L15 29Z" fill="#FDB927"/>
</svg>
                </div>
            </div>
        )) }
        <MusicPlayer />
    </div>
  )
}

export default MainContainer