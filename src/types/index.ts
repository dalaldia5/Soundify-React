export interface Song {
  filename: string;
  artist: string;
  displayName: string;
}

export interface SongMetadata {
  [filename: string]: string;
}

export interface Playlist {
  folder: string;
  title: string;
  description: string;
  image: string;
  songs?: Song[];
}

export interface AudioState {
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
}
