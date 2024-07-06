'use client'

import { createContext } from "react";

interface RootContextProps {
  // Navbar
  hideNavbar: boolean;
  setHideNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RootContext = createContext<RootContextProps>({
  hideNavbar: false,
  setHideNavbar: () => {},
});
