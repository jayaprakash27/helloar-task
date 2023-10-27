import React, { useState, useRef } from 'react';

const MusicPlayer = () => {
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
    <div className="music-player">
      <audio
        ref={audioRef}
        src="your-audio-file.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
      />
      <div className="controls">
        <button onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <input
          type="range"
          min={0}
          max={100}
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
