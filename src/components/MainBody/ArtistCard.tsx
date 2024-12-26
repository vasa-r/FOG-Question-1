import React from "react";
import Verified from "../../assets/verified.svg";
import MJ from "../../assets/mj.png";

const ArtistCard = () => {
  return (
    <div className="w-full h-60 px-[3.75rem] rounded-[40px] mt-20">
      <div className="relative w-full h-full bg-center bg-cover bg-artist-bg-image rounded-[40px] p-10 flex justify-start items-center">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src={Verified} alt="verified" className="size-[18px]" />
            <p className="text-sm font-medium text-main">Verified Artist</p>
          </div>
          <h2 className="text-[#F6F6F6] text-4xl font-semibold">
            Michael Jackson
          </h2>
          <p className="text-sm font-medium text-[#F6F6F6]">
            27.852.501 monthly listeners
          </p>
        </div>
        <img
          src={MJ}
          alt="artist image"
          className="absolute bottom-0 right-10 w-[380px]"
        />
      </div>
    </div>
  );
};

export default React.memo(ArtistCard);
