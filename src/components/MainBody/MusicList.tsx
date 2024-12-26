import { useAudioPlayer } from "../../context/AudioPlayerContext";
import { songs } from "../../utils/constants";

const MusicList = () => {
  const { playSong, currentSong } = useAudioPlayer();
  return (
    <div className="pt-6">
      <div className="flex items-center justify-between w-full px-[3.5rem]">
        <h2 className="mb-4 text-2xl font-semibold text-[#F6F6F6]">Popular</h2>
        <p className="text-main text-lg font-semibold leading-[27px] cursor-pointer">
          See All
        </p>
      </div>
      <div className="">
        <table className="w-full text-left ">
          <thead>
            <tr className="text-lg font-semibold text-main">
              <th className="py-2 px-14">#</th>
              <th className="py-2">Title</th>
              <th className="py-2">Playing</th>
              <th className="py-2">Time</th>
              <th className="py-2 text-right px-14">Album</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr
                key={song.id}
                onClick={() => playSong(song)}
                className={`${
                  currentSong.id === song.id
                    ? `bg-[#520000] border-l-borderRed transition-colors duration-200`
                    : "hover:border-l-white"
                } relative text-main font-medium  hover:bg-[#2C0000]  border-l-4 border-transparent text-base cursor-pointer`}
              >
                <td className="py-2 px-14">{index + 1}</td>
                <td className="relative flex items-center gap-2 py-2">
                  <img
                    src={song.artistImage}
                    alt="artist thumnail"
                    className="absolute size-7 -left-9"
                  />
                  {song.title}
                </td>
                <td className="py-2 ">{song.playCount}</td>
                <td className="py-2 ">{song.timeStamp}</td>
                <td className="py-2 text-center">{song.album}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MusicList;
