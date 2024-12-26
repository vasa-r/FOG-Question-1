import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { Howl } from "howler";
import { Song, songs } from "../utils/constants";

interface AudioPlayerContextType {
  currentSong: Song;
  howlInstance: Howl | null;
  isPlaying: boolean;
  isLooping: boolean;
  isShuffling: boolean;
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  playSong: (song: Song) => void;
  togglePlayPause: () => void;
  handleNextSong: () => void;
  handlePreviousSong: () => void;
  toggleLoop: () => void;
  toggleShuffle: () => void;
  restartSong: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
  undefined
);

export const AudioPlayerProvider = ({ children }: { children: ReactNode }) => {
  const [currentSong, setCurrentSong] = useState<Song>(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [howlInstance, setHowlInstance] = useState<Howl | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (howlInstance) {
      howlInstance.unload();
    }

    if (currentSong) {
      const newHowl = new Howl({
        src: [currentSong.url],
        loop: isLooping,
        onend: () => handleNextSong(),
        onplay: () => {
          setInterval(() => {
            if (howlInstance) {
              setCurrentTime(howlInstance.seek());
            }
          }, 1000);
        },
      });
      setHowlInstance(newHowl);
      if (isPlaying) newHowl.play();
    }

    return () => {
      if (howlInstance) howlInstance.unload();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong, isLooping]);

  const playSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (isPlaying && howlInstance) {
      howlInstance.pause();
    } else if (!isPlaying && howlInstance) {
      howlInstance.play();
    }
    setIsPlaying(!isPlaying);
  };

  const restartSong = () => {
    if (howlInstance) {
      howlInstance.seek(0);
      howlInstance.play();
      setIsPlaying(true);
    }
  };

  const handleNextSong = () => {
    const currentIndex = songs.findIndex((song) => song === currentSong);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
    setIsPlaying(true);
  };

  const handlePreviousSong = () => {
    const currentIndex = songs.findIndex((song) => song === currentSong);
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[previousIndex]);
    setIsPlaying(true);
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
  };

  const toggleShuffle = () => {
    setIsShuffling(!isShuffling);
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        currentSong,
        howlInstance,
        isPlaying,
        isLooping,
        isShuffling,
        currentTime,
        setCurrentTime,
        playSong,
        togglePlayPause,
        handleNextSong,
        handlePreviousSong,
        toggleLoop,
        toggleShuffle,
        restartSong,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error(
      "useAudioPlayer must be used within an AudioPlayerProvider"
    );
  }
  return context;
};
