import MJ from "../assets/mj-music.png";
import Shuffle from "../assets/shuffle.svg";
import Loop from "../assets/loop.svg";
import Play from "../assets/play.svg";
import Pause from "../assets/pause.svg";
import Previous from "../assets/prev.svg";
import Next from "../assets/next.svg";
import { useEffect, useState } from "react";
import { useAudioPlayer } from "../context/AudioPlayerContext";

const ControlsSidebar = () => {
  const {
    currentSong,
    isPlaying,
    isLooping,
    isShuffling,
    togglePlayPause,
    handleNextSong,
    handlePreviousSong,
    toggleLoop,
    toggleShuffle,
    howlInstance,
  } = useAudioPlayer();

  const [currentTime, setCurrentTime] = useState(0);
  // const [progressBarWidth, setProgressbarWidth] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    // Function to update currentTime based on actual playback time
    const updateTime = () => {
      if (howlInstance && isPlaying) {
        const time = howlInstance.seek(); // Get the current playback position
        if (time !== null) {
          setCurrentTime(time); // Update the local state with the time
        }
      }
      animationFrameId = requestAnimationFrame(updateTime); // Schedule next update
    };

    if (isPlaying && howlInstance) {
      updateTime(); // Start the updating loop when the song is playing
    }

    // Cleanup function to cancel animation frame and stop updating
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, howlInstance]);

  // Format time to mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}`;
  };

  // Progress percentage for the progress bar
  const progressPercentage =
    currentSong.duration > 0 ? (currentTime / currentSong.duration) * 100 : 0;

  // const progressPercentage = (currentTime: number, currentSong: Song) => {
  //   if (currentSong?.duration > 0 && currentTime >= 0) {
  //     return (currentTime / currentSong.duration) * 100;
  //   }
  //   return 0;
  // };

  return (
    <aside className="w-[20%] bg-custom-dark-gradient p-4 px-6 flex flex-col justify-end">
      <div className="flex flex-col gap-3 shadow-custom bg-[#6B0000] rounded-[15px] p-5">
        {/* Song Information */}
        <p className="text-[#F6F6F6] font-semibold text-sm text-center">
          Now Playing
        </p>
        <img src={MJ} alt="artist image" />
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold text-[#F6F6F6]">
            {currentSong?.title}
          </h2>
          <p className="text-main font-normal text-[13px]">
            {currentSong?.artist}
          </p>
        </div>

        {/* Progress Bar and Time Display */}
        <div className="flex items-center gap-2">
          <p className="font-medium text-[#F6F6F6] text-[13px]">
            {formatTime(currentTime)}
          </p>
          <div className="relative z-0 flex-1 h-1 overflow-hidden bg-gray-500 rounded-full">
            <div
              className="h-full bg-[#F6F6F6] z-0 transition-all duration-300 relative"
              style={{ width: `${progressPercentage}%` }}
            >
              {/* <div className="absolute right-0 z-20 size-8 border-8 border-[#F6F6F6] rounded-full"></div> */}
            </div>
          </div>
          <p className="font-medium text-[#F6F6F6] text-[13px]">
            {currentSong?.timeStamp}
          </p>
        </div>

        {/* Music Controls */}
        <div className="flex items-center justify-between w-full mt-3">
          <img
            src={Loop}
            alt="loop song"
            className={`cursor-pointer hover:scale-110 ${
              isLooping ? "scale-110" : ""
            }`}
            onClick={toggleLoop}
          />
          <img
            src={Previous}
            alt="previous song"
            className="cursor-pointer hover:scale-110"
            onClick={handlePreviousSong}
          />
          <div className="bg-[#480000] rounded-[10px] flex justify-center items-center p-2">
            <img
              src={isPlaying ? Pause : Play}
              alt="play/pause"
              onClick={togglePlayPause}
              className="transition-all duration-300 transform cursor-pointer size-7 hover:scale-110"
            />
          </div>
          <img
            src={Next}
            alt="next song"
            className="cursor-pointer hover:scale-110"
            onClick={handleNextSong}
          />
          <img
            src={Shuffle}
            alt="shuffle song"
            className={`cursor-pointer hover:scale-110 ${
              isShuffling ? "scale-110" : ""
            }`}
            onClick={toggleShuffle}
          />
        </div>
      </div>
    </aside>
  );
};

export default ControlsSidebar;
