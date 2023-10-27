import React, { useState, useRef } from 'react';
import songs from './contexts/songs';
const MusicPlayer = ( {currSong} ) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="music-player fixed bottom-0 w-full">
      <audio
        ref={audioRef}
        src= {songs[currSong]}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
      />
      <div className="controls">
        <input
          type="range"
          className=' w-full accent-yellow-500'
          min={0}
          max={100}
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
        />
        <div className=' w-full items-center flex'>
            <img src={songs[currSong].photoURL} height={70} width={70} alt="" />
            <h1 className=' text-lg'> {songs[currSong].songName} </h1>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
