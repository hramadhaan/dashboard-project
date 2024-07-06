"use client";

import { RootContext } from "@/context/root_context";
import { ReactNode, useState } from "react";

export default function RootContextProvider(props: { children: ReactNode }) {
  const [hideNavbar, setHideNavbar] = useState<boolean>(false);

  return (
    <RootContext.Provider
      value={{ hideNavbar: hideNavbar, setHideNavbar: setHideNavbar }}
    >
      {props.children}
    </RootContext.Provider>
  );
}
