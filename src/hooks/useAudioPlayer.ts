import { useState, useRef, useEffect } from "react";
import { Song, AudioState } from "../types";

export const useAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioState, setAudioState] = useState<AudioState>({
    currentSong: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 50,
  });

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio();

    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setAudioState((prev) => ({
        ...prev,
        currentTime: audio.currentTime,
        duration: audio.duration || 0,
      }));
    };

    const handleLoadedMetadata = () => {
      setAudioState((prev) => ({
        ...prev,
        duration: audio.duration,
      }));
    };

    const handleEnded = () => {
      setAudioState((prev) => ({
        ...prev,
        isPlaying: false,
      }));
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, []);

  const playSong = (song: Song, folder: string) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.src = `/${folder}/${song.filename}`;
    audio.load();

    audio
      .play()
      .then(() => {
        setAudioState((prev) => ({
          ...prev,
          currentSong: song,
          isPlaying: true,
        }));
      })
      .catch((err) => {
        console.error("Error playing audio:", err);
      });
  };

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio || !audioState.currentSong) return;

    if (audioState.isPlaying) {
      audio.pause();
      setAudioState((prev) => ({ ...prev, isPlaying: false }));
    } else {
      audio.play().then(() => {
        setAudioState((prev) => ({ ...prev, isPlaying: true }));
      });
    }
  };

  const seek = (time: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = time;
    setAudioState((prev) => ({ ...prev, currentTime: time }));
  };

  const setVolume = (volume: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume / 100;
    setAudioState((prev) => ({ ...prev, volume }));
  };

  return {
    audioState,
    playSong,
    togglePlayPause,
    seek,
    setVolume,
  };
};
