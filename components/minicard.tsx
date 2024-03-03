"use client";

interface IMiniCardComponent {
  title: string;
  icon: React.ReactNode;
  presentace: number;
  value: number;
  status: "up" | "down";
}

const MiniCardComponent: React.FC<IMiniCardComponent> = (props) => {
  return (
    <div className="w-full p-4 flex flex-col bg-white rounded-lg shadow-md">
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-sm font-normal">{props.title}</p>
          <p className="text-3xl font-bold mt-2">{props.value}</p>
        </div>
        {/* <div className="p-3 bg-base-200 rounded-md flex-none self-start"> */}
          {props.icon}
        {/* </div> */}
      </div>
      <div className="flex flex-row items-cente mt-3">
        <p className="text-sm font-normal">{props.presentace}%</p>
      </div>
      {/* <div className="absolute right-4 top-4 p-2 bg-base-200">
        {props.icon}
      </div> */}
    </div>
  );
};

export default MiniCardComponent;
