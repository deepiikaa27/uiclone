import React, { useState } from "react";
import { SiStagetimer } from "react-icons/si";

const TimeBar = ({ total, greenWidth, redWidth, description }) => {
  const [markerPosition, setMarkerPosition] = useState(greenWidth);

  return (
    <div className="w-full my-5 px-5">
      <div className="relative h-5 rounded-full bg-gray-300">
        <div
          className="absolute h-full bg-green-500 rounded-l-full"
          style={{ width: `${(greenWidth / total) * 100}%` }}
        ></div>

        <div
          className="absolute h-full bg-red-600 rounded-r-full"
          style={{
            width: `${(redWidth / total) * 100}%`,
            left: `${(greenWidth / total) * 100}%`,
          }}
        ></div>

        <div
          className="absolute top-0 h-5 w-1 bg-blue-500 cursor-pointer"
          style={{ left: `${(markerPosition / total) * 100}%` }}
        ></div>
      </div>

      <div className="flex justify-between text-sm mt-2">
        {Array.from({ length: total / 10 + 1 }, (_, i) => (
          <span key={i}>{i * 10}</span>
        ))}
      </div>

      <p className="text-gray-500 text-sm mt-2">{description}</p>
    </div>
  );
};

const TimeChart = () => {
  return (
    <div className="p-2  mx-auto bg-white rounded-xl border w-full">
      <h3 className="mb-5 text-gray-600 flex">
        <SiStagetimer className="mt-1 mr-1" />
        Time Taken
      </h3>

      <TimeBar
        total={90}
        greenWidth={30}
        redWidth={60}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />

      <TimeBar
        total={4}
        greenWidth={1}
        redWidth={3}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
    </div>
  );
};

export default TimeChart;
