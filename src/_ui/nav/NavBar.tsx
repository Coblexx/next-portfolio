"use client";

// components
import HamburgerMenu from "@/_ui/nav/HamburgerMenu";
import HamburgerOptions from "@/_ui/nav/HamburgerOptions";
import NavItem from "@/_ui/nav/NavItem";
import NavLinks from "@/_ui/nav/NavLinks";

// context
import { NavContextProvider } from "@/_ui/nav/NavContext";

export default function NavBar() {
  return (
    <NavContextProvider>
      <nav className="flex h-24 justify-between px-20">
        <div>
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
