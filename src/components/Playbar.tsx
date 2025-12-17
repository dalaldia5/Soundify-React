import React from "react";
import { Song } from "../types";
import "../styles/Playbar.css";

interface PlaybarProps {
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  onPlayPause: () => void;
  onSeek: (time: number) => void;
  onVolumeChange: (volume: number) => void;
  onPrevious: () => void;
  onNext: () => void;
}

const formatTime = (seconds: number): string => {
  if (!seconds || isNaN(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
};

const Playbar: React.FC<PlaybarProps> = ({
  currentSong,
  isPlaying,
  currentTime,
  duration,
  volume,
  onPlayPause,
  onSeek,
  onVolumeChange,
  onPrevious,
  onNext,
}) => {
  const handleSeekbarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const seekbar = e.currentTarget.getBoundingClientRect();
    const clickFraction = (e.clientX - seekbar.left) / seekbar.width;
    onSeek(clickFraction * duration);
  };

  const seekPosition = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="playbar">
      <div className="seekbar" onClick={handleSeekbarClick}>
        <div className="circle" style={{ left: `${seekPosition}%` }}></div>
      </div>
      <div className="abovebar">
        <div className="songinfo">
          {currentSong ? currentSong.displayName : "No song playing"}
        </div>
        <div className="songbuttons">
          <img
            id="previous"
            src="/assets/prevsong.svg"
            alt="Previous"
            onClick={onPrevious}
          />
          <img
            id="play"
            src={isPlaying ? "/assets/pause.svg" : "/assets/play.svg"}
            alt={isPlaying ? "Pause" : "Play"}
            onClick={onPlayPause}
          />
          <img
            id="next"
            src="/assets/nextsong.svg"
            alt="Next"
            onClick={onNext}
          />
        </div>
        <div className="song">
          <div className="songtime">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
          <div className="volume">
            <img src="/assets/volume.svg" alt="Volume" />
            <div className="range">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => onVolumeChange(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playbar;
