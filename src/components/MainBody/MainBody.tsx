import MainNav from "./MainNav";
import ArtistCard from "./ArtistCard";
import MusicList from "./MusicList";

const MainBody = () => {
  return (
    <main className="w-[55%] bg-custom-gradient overflow-y-auto">
      <MainNav />
      <ArtistCard />
      <MusicList />
    </main>
  );
};

export default MainBody;
