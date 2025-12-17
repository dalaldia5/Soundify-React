import React from "react";
import { Playlist } from "../types";
import "../styles/PlaylistCard.css";

interface PlaylistCardProps {
  playlist: Playlist;
  onClick: () => void;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="play">
        <svg
          fill="#000000"
          width="64px"
          height="64px"
          viewBox="-12 -12 48.00 48.00"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000000"
          strokeWidth="0.264"
        >
          <g
            id="SVGRepo_bgCarrier"
            strokeWidth="0"
            transform="translate(0.7200000000000006,0.7200000000000006), scale(0.94)"
          >
            <rect
              x="-12"
              y="-12"
              width="48.00"
              height="48.00"
              rx="24"
              fill="#1fdf64"
              strokeWidth="0"
            ></rect>
          </g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
          </g>
        </svg>
      </div>
      <img src={playlist.image} alt={playlist.title} />
      <p>{playlist.description}</p>
    </div>
  );
};

export default PlaylistCard;
