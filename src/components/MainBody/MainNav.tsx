import React from "react";
import { navItems } from "../../utils/constants";
import Search from "../../assets/search.svg";

const MainNav = () => {
  return (
    <nav className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {navItems.map(({ id, label }) => (
            <p
              key={id}
              className="text-lg text-[#F6F6F6] font-semibold cursor-pointer"
            >
              {label}
            </p>
          ))}
        </div>
        <div className="w-[400px] bg-[#2C0000] h-[54px] rounded-[50px]">
          <div className="flex items-center w-full h-full p-3 px-5">
            <input
              type="text"
              placeholder="Michael Jackson"
              className="w-full h-full border-none outline-none bg-[#2C0000] text-[#F6F6F6] text-lg font-medium"
            />
            <img
              src={Search}
              alt="search"
              className="size-[23px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(MainNav);
