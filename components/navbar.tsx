"use client";

import { RootContext } from "@/context/root_context";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import {
  LuMenu,
  LuBell,
  LuUserCog,
  LuActivity,
  LuLogOut,
} from "react-icons/lu";

interface NavbarProps {}

const NavbarComponent: React.FC<NavbarProps> = (props) => {
  const rootContext = useContext(RootContext);
  const { data: session, status } = useSession();
  return (
    <nav className="flex flex-row items-center justify-between p-3 mx-auto my-2 w-full">
      {/* Search */}
      <div className="flex flex-1 flex-row items-center">
        <div
          onClick={(event) => {
            event.preventDefault();
            rootContext.setHideNavbar(!rootContext.hideNavbar);
          }}
          className="cursor-pointer"
        >
          <LuMenu size={24} />
        </div>
        <div className="md:flex-none hidden ml-4">
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="input w-96 max-w-xs input-bordered"
          />
        </div>
      </div>
      <div className="md:flex hidden flex-row items-center gap-x-6 w-60">
        <div className="cursor-pointer flex-none">
          <LuBell size={24} />
        </div>
        <div className="dropdown dropdown-end w-[80%]">
          <div tabIndex={0} role="button">
            <div className="flex flex-row cursor-pointer items-center">
              <div className="avatar flex-none max-w-[50%]">
                <div className="w-8  h-8 rounded-full">
                  <Image
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    alt="Avatar"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
              <div className="overflow-hidden ml-2">
                <p className="text-sm whitespace-nowrap text-left truncate font-semibold">
                  {session?.user?.name}
                </p>
                <p className="text-xs font-light">Admin</p>
              </div>
            </div>
          </div>
          <div
            className="mt-4 z-10 dropdown-content shadow-lg bg-base-100 w-52 rounded-box"
            tabIndex={0}
          >
            <ul className="menu bg-base-100 w-full rounded-box">
              <li>
                <Link href="/dashboard/account/manage">
                  <LuUserCog />
                  Manage Account
                </Link>
              </li>
              <li>
                <Link href="/dashboard/account/logs">
                  <LuActivity /> Log Activity
                </Link>
              </li>
              <li>
                <a
                  onClick={async () => {
                    await signOut();
                  }}
                >
                  <LuLogOut />
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
