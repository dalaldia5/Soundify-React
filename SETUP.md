# Soundify React - Setup Instructions

## 🎵 Overview

This is a React + TypeScript version of the Soundify music player, converted from vanilla JavaScript/HTML/CSS.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn** (v1.22.0 or higher)

To check if you have Node.js and npm installed:

```bash
node --version
npm --version
```

## 🚀 Installation

### Step 1: Install Node.js (if not already installed)

Visit [https://nodejs.org/](https://nodejs.org/) and download the LTS version for macOS.

### Step 2: Install Dependencies

Navigate to the project directory and install all required packages:

```bash
cd /Users/dia/Desktop/projects/SoundifyReact
npm install
```

This will install:

- React 18
- TypeScript
- React Scripts (Create React App)
- All other dependencies listed in package.json

### Step 3: Start the Development Server

Once dependencies are installed, start the app:

```bash
npm start
```

The app will automatically open in your browser at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
SoundifyReact/
├── public/
│   ├── assets/           # SVG icons and images
│   ├── songs/            # Music files and metadata
│   ├── index.html        # HTML template
│   └── favicon.ico       # App icon
├── src/
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── SongList.tsx
│   │   ├── PlaylistCard.tsx
│   │   └── Playbar.tsx
│   ├── hooks/           # Custom React hooks
│   │   └── useAudioPlayer.ts
│   ├── data/            # Static data
│   │   └── playlists.ts
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts
│   ├── styles/          # Component-specific CSS
│   ├── App.tsx          # Main App component
│   ├── index.tsx        # App entry point
│   └── index.css        # Global styles
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## 🎮 Features

- ✅ Browse multiple playlists (Hot Hits, I-Pop, Bolly Central, Rap 91, Punjabi 101)
- ✅ Play/pause songs
- ✅ Previous/Next track navigation
- ✅ Seek bar for jumping to different parts of songs
- ✅ Volume control
- ✅ Responsive design (mobile-friendly)
- ✅ Collapsible sidebar on mobile devices
- ✅ TypeScript for type safety

## 🛠️ Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm build`

Builds the app for production to the `build` folder

### `npm test`

Launches the test runner in interactive watch mode

### `npm eject`

**Note: this is a one-way operation!** Ejects from Create React App configuration

## 🎨 Key Components

### 1. **App.tsx**

Main application component that manages:

- Playlist selection
- Song playback state
- Navigation between playlists

### 2. **useAudioPlayer Hook**

Custom hook that handles:

- Audio element creation and management
- Play/pause controls
- Time tracking
- Volume control

### 3. **Sidebar**

Displays:

- Navigation menu
- Current playlist songs
- Legal footer links

### 4. **Playbar**

Fixed bottom bar with:

- Song progress seekbar
- Play/pause/previous/next controls
- Volume slider
- Current song info and time

### 5. **PlaylistCard**

Interactive cards for each playlist with:

- Playlist cover image
- Description
- Hover effects with play button

## 📱 Responsive Design

The app is fully responsive with breakpoints at:

- **1400px** - Sidebar becomes collapsible
- **700px** - Adjusted playbar layout
- **550px** - Mobile-optimized controls

## 🎵 Adding New Songs/Playlists

### To add a new playlist:

1. Create a folder in `public/songs/` (e.g., `public/songs/MyPlaylist`)
2. Add your MP3 files to this folder
3. Create a `metadata.json` file in the folder:

```json
{
  "Song%20Name.mp3": "Artist Name",
  "Another%20Song.mp3": "Another Artist"
}
```

4. Add playlist info to `src/data/playlists.ts`:

```typescript
{
  folder: 'MyPlaylist',
  title: "My Playlist",
  description: "Description of my playlist...",
  image: "https://image-url.com/image.jpg"
}
```

## 🐛 Troubleshooting

### Port 3000 already in use

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or run on a different port
PORT=3001 npm start
```

### Module not found errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Audio not playing

- Ensure MP3 files are in `public/songs/` directory
- Check browser console for errors
- Verify metadata.json matches actual file names

## 🔧 Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **CSS3** - Styling
- **HTML5 Audio API** - Audio playback
- **Create React App** - Build tooling

## 📝 Notes

- Audio files should be in MP3 format
- Filenames in metadata.json should be URL-encoded (spaces as %20)
- The app uses the HTML5 Audio API, so it supports formats your browser supports
- All assets are served from the `public/` folder

## 🤝 Conversion Notes

This project was converted from vanilla JavaScript to React. Key changes:

1. **State Management**: Used React hooks (useState, useEffect) instead of global variables
2. **Component Architecture**: Split monolithic HTML into reusable React components
3. **Type Safety**: Added TypeScript for better development experience
4. **Custom Hooks**: Created useAudioPlayer hook for audio logic encapsulation
5. **Modern Practices**: Implemented React best practices and patterns

## 📄 License

This project is for educational purposes.

---

**Enjoy your music! 🎵**
