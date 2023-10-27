import React, { useState, useRef } from 'react';
import songs from './contexts/songs';
const MusicPlayer = ( {currSong} ) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

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
          className=' w-full'
          min={0}
          max={100}
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
        />
        <button onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
