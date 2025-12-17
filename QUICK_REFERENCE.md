# 🎵 Soundify React - Quick Reference

## 🚀 Quick Start

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm start

# Build for production
npm build
```

## 📂 Project Structure

```
src/
├── components/          # React UI components
│   ├── Header.tsx      # Top navigation bar
│   ├── Sidebar.tsx     # Left sidebar with library
│   ├── SongList.tsx    # List of songs in playlist
│   ├── PlaylistCard.tsx # Playlist cards
│   └── Playbar.tsx     # Bottom audio player controls
├── hooks/
│   └── useAudioPlayer.ts # Audio playback logic
├── data/
│   └── playlists.ts    # Playlist metadata
├── types/
│   └── index.ts        # TypeScript types
├── styles/             # Component CSS files
├── App.tsx             # Main app component
└── index.tsx           # Entry point

public/
├── assets/             # Icons and images
└── songs/              # Music files by playlist
    ├── HotHits/
    ├── IPop/
    ├── BollyCentral/
    ├── Rap91/
    └── Punjabi101/
```

## 🎨 Component Hierarchy

```
App
├── Sidebar
│   └── SongList
├── Header
├── TrendingSongs
│   └── PlaylistCard (×5)
└── Playbar
```

## 🔧 Key Files

### App.tsx

Main component that:

- Manages playlist state
- Handles song playback
- Coordinates between components

### useAudioPlayer.ts

Custom hook that provides:

- `audioState` - Current playback state
- `playSong()` - Play a specific song
- `togglePlayPause()` - Toggle play/pause
- `seek()` - Jump to time in song
- `setVolume()` - Adjust volume

### types/index.ts

TypeScript interfaces:

- `Song` - Song data structure
- `Playlist` - Playlist metadata
- `AudioState` - Playback state

## 🎮 Main Features

### Audio Controls

```typescript
// Play a song
playSong(song, "songs/HotHits");

// Toggle play/pause
togglePlayPause();

// Seek to 30 seconds
seek(30);

// Set volume to 75%
setVolume(75);
```

### State Management

```typescript
const [songs, setSongs] = useState<Song[]>([]);
const { audioState, playSong, ... } = useAudioPlayer();
```

## 📱 Responsive Breakpoints

- **1400px** - Sidebar becomes collapsible menu
- **700px** - Adjusted playbar layout
- **550px** - Mobile-optimized controls

## 🎵 Adding Content

### Add a New Playlist

1. **Create folder structure:**

```
public/songs/MyPlaylist/
├── metadata.json
├── Song1.mp3
└── Song2.mp3
```

2. **Create metadata.json:**

```json
{
  "Song1.mp3": "Artist Name",
  "Song2.mp3": "Another Artist"
}
```

3. **Update src/data/playlists.ts:**

```typescript
{
  folder: 'MyPlaylist',
  title: "My Playlist Title",
  description: "Description here...",
  image: "https://image-url.com/cover.jpg"
}
```

## 🐛 Common Issues & Solutions

### Audio not playing

```typescript
// Check if files exist in public/songs/
// Verify metadata.json matches filenames
// Check browser console for errors
```

### Port already in use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm start
```

### TypeScript errors

```bash
# Restart TypeScript server in VS Code
# Cmd+Shift+P -> "TypeScript: Restart TS Server"
```

### Module not found

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 🔍 Debugging

### React DevTools

- Install React DevTools browser extension
- Inspect component hierarchy
- View props and state

### Console Logging

```typescript
console.log("Current song:", audioState.currentSong);
console.log("Is playing:", audioState.isPlaying);
```

### Audio Element

```typescript
// Access audio element directly
const audio = audioRef.current;
console.log("Duration:", audio?.duration);
console.log("Current time:", audio?.currentTime);
```

## 📊 Performance Tips

1. **Lazy Loading**: Load playlists on demand
2. **Memoization**: Use React.memo for static components
3. **Virtual Scrolling**: For very long song lists
4. **Code Splitting**: Split routes if app grows

## 🔑 Key Concepts

### React Hooks Used

- `useState` - Component state
- `useEffect` - Side effects & lifecycle
- `useRef` - Audio element reference
- Custom `useAudioPlayer` - Audio logic

### TypeScript Benefits

- Type checking at compile time
- Better IDE autocomplete
- Self-documenting code
- Fewer runtime errors

## 📚 Learning Resources

### React

- [React Docs](https://react.dev)
- [React Tutorial](https://react.dev/learn)

### TypeScript

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React + TypeScript](https://react-typescript-cheatsheet.netlify.app/)

### Audio API

- [MDN Web Audio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [HTML5 Audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)

## 🔄 Development Workflow

1. **Make changes** to components
2. **Save file** - Hot reload updates instantly
3. **Check console** for errors
4. **Test in browser**
5. **Commit changes** to git

## 🎯 Next Steps

### Beginner

- [ ] Understand component structure
- [ ] Explore useState and useEffect
- [ ] Modify styles in CSS files
- [ ] Add a new playlist

### Intermediate

- [ ] Create new components
- [ ] Add shuffle feature
- [ ] Implement repeat mode
- [ ] Add playlist creation

### Advanced

- [ ] Add backend integration
- [ ] Implement user accounts
- [ ] Add social features
- [ ] Create native mobile app

## 📞 Need Help?

1. Check `SETUP.md` for detailed setup
2. Read `COMPARISON.md` for architecture details
3. Review component files for implementation
4. Check console for error messages

---

**Happy Coding! 🚀**
