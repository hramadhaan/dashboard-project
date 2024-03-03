"use client";

import { RootContext } from "@/context/root_context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import {
  LuLayoutDashboard,
  LuFolders,
  LuPackage2,
  LuShoppingCart,
} from "react-icons/lu";

interface SidebarProps {}

const sidebarMenu = [
  {
    name: "Dashboard",
    icon: LuLayoutDashboard,
    path: "/dashboard/overview",
  },
  {
    name: "Categories",
    icon: LuFolders,
    path: "/dashboard/categories",
  },
  {
    name: "Products",
    icon: LuPackage2,
    path: "/dashboard/products",
  },
  {
    name: "Order List",
    icon: LuShoppingCart,
    path: "/dashboard/orders",
  },
];

const SidebarComponent: React.FC<SidebarProps> = (props) => {
  const rootContext = useContext(RootContext);
  const pathname = usePathname();

  return (
    <div
      className={`min-h-screen ${
        rootContext.hideNavbar ? "w-20" : "w-60"
      } md:flex hidden flex-col p-3 items-center transition-all`}
    >
      <div className="text-xl font-bold flex flex-row mt-4">
        <p className="text-primary">{rootContext.hideNavbar ? "D" : "Dash"}</p>
        <p className="text-[#202224]">
          {rootContext.hideNavbar ? "B" : "Board"}
        </p>
      </div>
      <div className="w-full mt-8">
        {sidebarMenu.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className={`flex flex-row items-center p-3 rounded-lg ${
              pathname.includes(item.path)
                ? "bg-primary text-white"
                : "hover:bg-primary-content"
            }  ${index < sidebarMenu.length - 1 ? "mb-3" : ""} cursor-pointer ${
              rootContext.hideNavbar ? "justify-center" : ""
            } tooltip`}
            data-tip={item.name}
          >
            <div>
              <item.icon />
            </div>
            {!rootContext.hideNavbar && (
              <p className="ml-4 font-medium">{item.name}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarComponent;
