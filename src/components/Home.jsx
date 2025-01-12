import React from "react";
import student from "../assets/6527325.jpg";
import { LuClipboardCheck } from "react-icons/lu";
import Chartss from "../components/Chartss";
import TimeChart from "./TimeChart";
import { IoIosArrowDropdown, IoMdTime } from "react-icons/io";
import { AiOutlineRise } from "react-icons/ai";
import { RiSparklingLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { LuFileSearch } from "react-icons/lu";
import { ImProfile } from "react-icons/im";

const Home = () => {
  return (
    <div className="flex bg-gray-50 pt-7 justify-center gap-6 px-20">
      <div className="px-7  py-3  border bg-purple-50 rounded">
        <div className="flex  flex-col items-center">
          <div>
            <img src={student} className="h-40" />
          </div>
          <h3 className="text-2xl py-1 text-blue-700 font-semibold">
            Your Result!
          </h3>
          <p className="text-sm text-gray-500 mb-1 font-medium">
            All your insight & details in one place
          </p>
        </div>
        <div className="bg-white border rounded p-4">
          <div className="bg-purple-50 py-1 px-2 flex justify-between items-center rounded">
            <div className="p-2 bg-purple-100 ">
              <LuClipboardCheck size={20} />
            </div>
            <div className="pr-4 pl-2">
              <div className="text-white bg-blue-700 rounded-lg text-[10px] px-1 ">
                YOU'VE PASSED
              </div>
              <div>
                <span className="font-semibold text-2xl">136</span>
                <span className="text-sm font-semibold text-gray-600">
                  /240
                </span>
              </div>
            </div>
            <div className="border-l-2 px-1 ">
              <div className="bg-green-500  text-center  mx-2 py-1 text-white rounded text-[10px]">
                76%
              </div>
              <p className="text-green-700 mt-1 text-[9px]">ACCURACY</p>
            </div>
          </div>
          <div className=" bg-purple-50 py-1  rounded mt-3 px-2">
            <div className="border-b flex w-[100%] border-gray-400 pb-1 gap-3 items-center">
              <div>
                <ImProfile size={33} className="ml-1" />
              </div>
              <div>
                <div className="text-blue-700 text-[10px] font-semibold">
                  Top Score
                </div>
                <div>
                  <span className="font-semibold text-2xl">136</span>
                  <span className="text-sm font-semibold text-gray-600">
                    /240
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-1">
              <div className="text-[11px] font-semibold">
                <span className="text-gray-700 pr-[2px] font-normal">By</span>
                Parth Akotkar
              </div>
              <div className="text-[10px] bg-green-500 text-white px-1 rounded-lg">
                92% ACCURACY
              </div>
            </div>
          </div>
          <div className=" mt-3 font-semibold">Improve your Marks</div>
          <p className="text-[13px] font-semibold text-gray-600">
            Improve your score by practicing more.
          </p>
          <button className="bg-blue-700 w-[100%] text-white rounded py-1 mt-5">
            {" "}
            Practice More
          </button>
        </div>
        <div className="bg-white border rounded p-4 mt-5">
          <div className="text-xl font-bold">Revisit Paper</div>
          <div className="mt-1 text-gray-600 ">
            Challenge a friends by simply <br />
            sharing a link to this test
          </div>
          <div className="flex  justify-center pt-4">
            <button className="bg-blue-700 text-white text-center w-[80%] p-1 rounded ">
              Visit
            </button>
          </div>
          <div className="text-[10px] text-center flex mt-4  text-gray-600">
            <AiOutlineInfoCircle className="mr-1 mt-1" />
            Instruction for how to upload your handwritten <br /> material in
            given
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 h-[40%]">
          <div className="border bg-white rounded-xl text-sm  p-1 px-2 flex gap-1 w-full">
            <IoIosArrowDropdown size={16} className="mt-[3px]" />
            Compare Accuracy
          </div>
          <div className="border bg-white rounded-xl text-sm  p-1 px-2 flex gap-1 w-full">
            <IoIosArrowDropdown size={16} className="mt-[3px]" />
            Compare Accuracy
          </div>
          <div className="border bg-white rounded-xl text-sm  p-1 px-2 flex gap-1 w-full">
            <IoIosArrowDropdown size={16} className="mt-[3px]" />
            Compare Accuracy
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="bg-white p-2  rounded-xl border  ">
            <div className="text-gray-600 flex">
              <AiOutlineRise className="mr-1 mt-1" />
              Improvements
            </div>
            <div className="text-sm mt-2 font-semibold">
              Subject Understanding
            </div>
            <div className="flex text-[10px] text-white mt-2 gap-1 ">
              <div className=" px-2 py-1 rounded-xl bg-green-500">
                Geography
              </div>
              <div className=" px-2 py-1 rounded-xl bg-yellow-600">
                Politics
              </div>
              <div className=" px-2 py-1 rounded-xl bg-green-500">
                Current Affairs
              </div>
            </div>
            <div className="flex text-[10px] text-white mt-1 gap-1">
              <div className=" px-2 py-1 rounded-xl bg-red-700">
                General Studies
              </div>
              <div className=" px-2 py-1 rounded-xl bg-green-500">
                Mathematics
              </div>
            </div>
            <div className="flex text-[10px] text-white mt-1 gap-1">
              <div className=" px-2 py-1 rounded-xl bg-gray-500">
                Social Studies
              </div>
              <div className=" px-2 py-1 rounded-xl bg-red-700">
                English Literature
              </div>
            </div>
            <div className="flex text-[10px] text-white mt-1 gap-1">
              <div className=" px-2 py-1 rounded-xl bg-yellow-600">
                Indian history
              </div>
              <div className=" px-2 py-1 rounded-xl bg-green-500">
                Economics
              </div>
            </div>
          </div>
          <div className="bg-white p-2  rounded-xl border">
            <div className="text-gray-600 flex">
              <IoMdTime className="mt-1 mr-1" />
              Response Time
            </div>
            <div className="mt-2 text-xs">
              <span className="bg-blue-700 text-white px-1">
                Std Time -2 min
              </span>
            </div>
            <div className="py-3  border-b-2">
              <div className="flex  gap-3 items-center bg-purple-50 border-2 border-dashed p-1 px-2 rounded">
                <div className="text-3xl text-green-500 ">
                  <span>60</span>
                  <span className="text-gray-600 text-base">% Ans took</span>
                </div>
                <div>2 min</div>
              </div>
            </div>
            <div className="text-center text-xl mt-2 font-semibold">
              You are <span className="text-red-600">slow</span> !
            </div>
          </div>
          <div className="bg-white p-2 rounded-xl border">
            <div className="text-gray-600 flex">
              <AiOutlineRise className="mr-1 mt-1" />
              Approach Data
            </div>
            <div className="flex flex-col gap-1">
              <div className="p-1 text-[17px]  border ">
                <span className="bg-purple-50 text-purple-500 p-1 mr-1">
                  25<span className="text-xs">%</span>
                </span>
                <span className="text-[15px]">Based on</span>
                <span className="text-purple-500 ml-1">Facts</span>
              </div>
              <div className="p-1 text-[17px]  border ">
                <span className="bg-purple-50 text-purple-500 p-1 mr-1">
                  32<span className="text-xs">%</span>
                </span>
                <span className="text-[15px]">Based on</span>
                <span className="text-purple-500 ml-1">Analysis</span>
              </div>
              <div className="p-1 text-[17px]  border ">
                <span className="bg-purple-50 text-purple-500 p-1 mr-1">
                  19<span className="text-xs">%</span>
                </span>
                <span className="text-[15px]">Based on</span>
                <span className="text-purple-500 ml-1">Elimination</span>
              </div>
              <div className="p-1 text-[17px]  border ">
                <span className="bg-purple-50 text-purple-500 p-1 mr-1">
                  24<span className="text-xs">%</span>
                </span>
                <span className="text-[15px]">Based on</span>
                <span className="text-purple-500 ml-1">Guess</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-2 rounded-xl border">
            <div className="text-gray-600 flex">
              <RiSparklingLine className="mt-1 mr-1" />
              Suggestions
            </div>
            <div className="flex mt-3 gap-2 justify-center">
              <div className="flex flex-col gap-3">
                <div className="bg-blue-600 text-[10px] text-white text-center">
                  Q. 1-12
                </div>
                <div className="p-2 bg-purple-50 font-semibold border-2 border-dashed text-sm">
                  40sec
                </div>
                <div className="text-xs text-green-600 font-semibold text-center">
                  Easy
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="bg-blue-600 text-[10px] text-white text-center">
                  Q. 12-32
                </div>
                <div className="p-2 bg-purple-50 font-semibold border-2 border-dashed text-sm">
                  1.5min
                </div>
                <div className="text-xs text-yellow-600 font-semibold text-center">
                  Medium
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="bg-blue-600 text-[10px] text-white text-center">
                  Q. 32-40
                </div>
                <div className="p-2 bg-purple-50 font-semibold border-2 border-dashed text-sm">
                  3min
                </div>
                <div className="text-xs text-red-600 font-semibold text-center">
                  Easy
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <Chartss />
          <TimeChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
