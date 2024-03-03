"use client";

import {
  LuLineChart,
  LuShoppingCart,
  LuTimerReset,
  LuUsers,
} from "react-icons/lu";
import MiniCardComponent from "./minicard";

interface IMinicardSection {}

const MinicardSection: React.FC<IMinicardSection> = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-4">
      <MiniCardComponent
        title="Total Users"
        icon={
          <div className="p-3 bg-base-200 rounded-md flex-none self-start">
            <LuUsers size={24} />
          </div>
        }
        presentace={30}
        value={100}
        status="up"
      />
      <MiniCardComponent
        title="Total Orders"
        icon={
          <div className="p-3 bg-[#8280FF] bg-opacity-25 rounded-md flex-none self-start">
            <LuShoppingCart size={24} className="text-[#8280FF]" />
          </div>
        }
        presentace={30}
        value={100}
        status="up"
      />
      <MiniCardComponent
        title="Total Sales"
        icon={
          <div className="p-3 bg-base-200 rounded-md flex-none self-start">
            <LuLineChart size={24} />
          </div>
        }
        presentace={30}
        value={100}
        status="up"
      />
      <MiniCardComponent
        title="Total Pending"
        icon={
          <div className="p-3 bg-base-200 rounded-md flex-none self-start">
            <LuTimerReset size={24} />
          </div>
        }
        presentace={30}
        value={100}
        status="up"
      />
    </div>
  );
};

export default MinicardSection;
