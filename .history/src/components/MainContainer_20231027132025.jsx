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
        <div className=' w-full p-2 grid items-center grid-cols-5'>
            <span> Song Name </span>
            <span>Source</span>
            <span>Added On</span>

        </div>
        { songs.map(song => (
            <div className=' w-full p-2 grid items-center grid-cols-5'>
                <div className=' flex gap-2 items-center justify-start'>
                <img height={50} width={50} src={song.photoURL} alt="" />
                <span> {song.songName} </span>
                </div>
                <div className=''>
                    {song.source}
                </div>
                <div className=' '>
                    {song.addedOn}
                </div>
                <div className=' hover:opacity-50'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM15 29V11L29 20L15 29Z" fill="#FDB927"/>
</svg>
                </div>
                <div>
<svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62476 4.87357H9.49976C9.56851 4.87357 9.62476 4.81732 9.62476 4.74857V4.87357H14.3748V4.74857C14.3748 4.81732 14.431 4.87357 14.4998 4.87357H14.3748V5.99857H15.4998V4.74857C15.4998 4.197 15.0513 3.74857 14.4998 3.74857H9.49976C8.94819 3.74857 8.49976 4.197 8.49976 4.74857V5.99857H9.62476V4.87357ZM17.4998 5.99857H6.49976C6.22319 5.99857 5.99976 6.222 5.99976 6.49857V6.99857C5.99976 7.06732 6.05601 7.12357 6.12476 7.12357H7.06851L7.45444 15.2954C7.47944 15.8283 7.92007 16.2486 8.45288 16.2486H15.5466C16.081 16.2486 16.5201 15.8298 16.5451 15.2954L16.931 7.12357H17.8748C17.9435 7.12357 17.9998 7.06732 17.9998 6.99857V6.49857C17.9998 6.222 17.7763 5.99857 17.4998 5.99857ZM15.4263 15.1236H8.57319L8.19507 7.12357H15.8044L15.4263 15.1236Z" fill="black" fill-opacity="0.45"/>
</svg>
                </div>
            </div>
        )) }
        <MusicPlayer />
    </div>
  )
}

export default MainContainer