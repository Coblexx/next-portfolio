"use client";

import HamburgerMenu from "./HamburgerMenu";

// components
import NavItem from "@/ui/NavItem";
import NavLinks from "@/ui/NavLinks";

export default function NavBar() {
  return (
    <nav className="flex h-24 place-items-center justify-around ">
      <div className="text-xl">
        <NavItem href="/">Hi I'm Radosław</NavItem>
      </div>
      <NavLinks />
      <div className="flex md:hidden">
        <HamburgerMenu />
      </div>
    </nav>
  );
}
