"use client";

import {
  LuLayoutDashboard,
  LuFolders,
  LuPackage2,
  LuShoppingCart,
} from "react-icons/lu";

interface SidebarProps {}

const SidebarComponent: React.FC<SidebarProps> = (props) => {
  const sidebarMenu = [
    {
      name: "Dashboard",
      icon: LuLayoutDashboard,
    },
    {
      name: "Categories",
      icon: LuFolders,
    },
    {
      name: "Products",
      icon: LuPackage2,
    },
    {
      name: "Order List",
      icon: LuShoppingCart,
    },
  ];

  return (
    <div className="min-h-screen w-60 border-r flex flex-col p-3 items-center">
      <div className="text-xl font-bold flex flex-row mt-4">
        <p className="text-primary">Dash</p>
        <p className="text-[#202224]">Stack</p>
      </div>
      <div className="w-full mt-8">
        <ul>
          {sidebarMenu.map((item, index) => (
            <li className={`flex flex-row items-center p-3 rounded-lg hover:bg-primary transition-all hover:text-white font-medium ${index < sidebarMenu.length - 1 ? 'mb-2' : ''} cursor-pointer`} key={index}>
              <div>
                <item.icon />
              </div>
              <p className="ml-4">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarComponent;
