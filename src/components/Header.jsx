import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { RiSparkling2Line, RiArrowDropDownLine } from "react-icons/ri";
import { SiBandsintown } from "react-icons/si";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { MdAutoGraph } from "react-icons/md";
import { LuNotepadText } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className=" bg-[#0f2149] py-4 px-20 flex justify-center items-center text-white">
      <div className="flex items-center gap-14">
        <div className="">
          <div className="text-2xl font-bold">Firstbench</div>
        </div>
        <div className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <IoMenu size={25} />
        </div>
        <nav className=" gap-6 hidden lg:flex">
          <a href="#" className="hover:text-green-500 flex gap-3 items-center">
            <FaHome />
            Dashboard
          </a>
          <a href="#" className="hover:text-green-500 flex gap-3 items-center">
            <RiSparkling2Line />
            FirstGuru
          </a>
          <a href="#" className="hover:text-green-500 flex gap-3 items-center">
            <SiBandsintown />
            TownHall
          </a>
          <a href="#" className="hover:text-green-500 flex gap-3 items-center">
            <AiOutlineThunderbolt />
            AI Evaluation
          </a>
          <a href="#" className="hover:text-green-500 flex gap-3 items-center">
            <MdAutoGraph />
            Performance
          </a>
          <a href="#" className="hover:text-green-500 flex gap-3 items-center">
            <LuNotepadText />
            Mock Test
          </a>
        </nav>
        <div className=" items-center gap-3 hidden lg:flex">
          <IoIosNotifications size={18} />
          <button className="flex items-center gap-1 bg-[#0a152f] ">
            <div className="m-1 px-2 font-semibold bg-orange-500 text-orange-900 rounded-sm ">
              P
            </div>
            Profile
            <RiArrowDropDownLine size={25} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
