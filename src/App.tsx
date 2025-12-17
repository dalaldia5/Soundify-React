import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SongList from "./components/SongList";
import PlaylistCard from "./components/PlaylistCard";
import Playbar from "./components/Playbar";
import { useAudioPlayer } from "./hooks/useAudioPlayer";
import { playlists } from "./data/playlists";
import { Song, SongMetadata, Playlist } from "./types";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | null>(null);
  const [songs, setSongs] = useState<Song[]>([]);
  const { audioState, playSong, togglePlayPause, seek, setVolume } =
    useAudioPlayer();

  useEffect(() => {
    // Load default playlist on mount
    loadPlaylist(playlists[0]);
  }, []);

  const loadPlaylist = async (playlist: Playlist) => {
    try {
      const response = await fetch(`/songs/${playlist.folder}/metadata.json`);
      const metadata: SongMetadata = await response.json();

      const songList: Song[] = Object.entries(metadata).map(
        ([filename, artist]) => ({
          filename,
          artist,
          displayName: decodeURIComponent(filename).replace(".mp3", ""),
        })
      );

      setSongs(songList);
      setCurrentPlaylist(playlist);
    } catch (error) {
      console.error("Error loading playlist:", error);
    }
  };

  const handleSongClick = (song: Song) => {
    if (currentPlaylist) {
      playSong(song, `songs/${currentPlaylist.folder}`);
    }
  };

  const handlePrevious = () => {
    if (!audioState.currentSong || songs.length === 0) return;

    const currentIndex = songs.findIndex(
      (song) => song.filename === audioState.currentSong?.filename
    );

    if (currentIndex > 0 && currentPlaylist) {
      playSong(songs[currentIndex - 1], `songs/${currentPlaylist.folder}`);
    }
  };

  const handleNext = () => {
    if (!audioState.currentSong || songs.length === 0) return;

    const currentIndex = songs.findIndex(
      (song) => song.filename === audioState.currentSong?.filename
    );

    if (currentIndex < songs.length - 1 && currentPlaylist) {
      playSong(songs[currentIndex + 1], `songs/${currentPlaylist.folder}`);
    }
  };

  return (
    <div className="container flex bg-black">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <SongList songs={songs} onSongClick={handleSongClick} />
      </Sidebar>

      <div className="right bg-grey rounded">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <div className="trendingSongs">
          <h1>India's Best</h1>
          <div className="cardContainer">
            {playlists.map((playlist, index) => (
              <PlaylistCard
                key={index}
                playlist={playlist}
                onClick={() => loadPlaylist(playlist)}
              />
            ))}
          </div>
        </div>

        <Playbar
          currentSong={audioState.currentSong}
          isPlaying={audioState.isPlaying}
          currentTime={audioState.currentTime}
          duration={audioState.duration}
          volume={audioState.volume}
          onPlayPause={togglePlayPause}
          onSeek={seek}
          onVolumeChange={setVolume}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}

export default App;
