"use client";

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { LuChevronDown } from "react-icons/lu";

interface ILineChartProps {}

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  maintainAspectRatio: true
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.random()),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
const LineChartComponent: React.FC<ILineChartProps> = (props) => {
  const [label, setLabel] = useState<string>(labels[0]);
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-8 min-w-full h-full">
      <div className="flex flex-row justify-between mb-4">
        <p className="text-xl font-bold">Sales Details</p>
        <div className="dropdown dropdown-end">
          <div
            role="button"
            tabIndex={0}
            className="flex flex-row items-center gap-x-1 border p-2 rounded-md"
          >
            <p className="text-sm font-normal">{label}</p>
            <LuChevronDown />
          </div>
          <div className="w-full">
            <div
              className="mt-4 z-10 dropdown-content shadow-lg bg-base-100 w-52 rounded-box"
              tabIndex={0}
            >
              <ul className="menu bg-base-100 w-full overflow-y-scroll h-40 block rounded-box">
                <li className="menu-title">Months</li>
                {labels.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={(event) => {
                        event.preventDefault();
                        setLabel(item);
                      }}
                      className={`cursor-pointer p-2 ${
                        item === label ? "bg-base-200" : ""
                      }`}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Line className="w-full" options={options} data={data} />
      </div>
    </div>
  );
};

export default LineChartComponent;
