import React from "react";
import { Song } from "../types";
import "../styles/SongList.css";

interface SongListProps {
  songs: Song[];
  onSongClick: (song: Song) => void;
}

const SongList: React.FC<SongListProps> = ({ songs, onSongClick }) => {
  return (
    <ul>
      {songs.map((song, index) => (
        <li key={index} onClick={() => onSongClick(song)}>
          <img className="invert" src="/assets/music.svg" alt="Music" />
          <div className="info">
            <div>{song.displayName}</div>
            <div>{song.artist}</div>
          </div>
          <div className="playnow">
            <span>Play Now</span>
            <img className="invert" src="/assets/play.svg" alt="Play" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SongList;
