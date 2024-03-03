"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { LuArrowLeft } from "react-icons/lu";

interface IHeaderLayout {
  title: string;
  action?: React.ReactNode;
  showBack?: boolean;
}

const HeaderLayout: React.FC<IHeaderLayout> = (props) => {
  const router = useRouter();
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-x-2">
        {props.showBack && (
          <div
            role="button"
            className="btn btn-ghost"
            onClick={() => {
              router.back();
            }}
          >
            <LuArrowLeft size={18} />
          </div>
        )}
        <p className="text-2xl font-bold">{props.title}</p>
      </div>
      {props.action}
    </div>
  );
};

export default HeaderLayout;
