"use client";

// components
import HamburgerMenu from "@/ui/nav/HamburgerMenu";
import HamburgerOptions from "@/ui/nav/HamburgerOptions";
import NavItem from "@/ui/nav/NavItem";
import NavLinks from "@/ui/nav/NavLinks";

// context
import { NavContextProvider } from "@/ui/nav/NavContext";

export default function NavBar() {
  return (
    <NavContextProvider>
      <nav className="flex h-24 justify-between px-20">
        <div className="flex w-full justify-center">
          <NavItem href="/">Hi I'm Radosław</NavItem>
        </div>
        <div className="hidden grow justify-end md:flex">
          <NavLinks />
        </div>
        <HamburgerMenu />
      </nav>
      <HamburgerOptions />
    </NavContextProvider>
  );
}
