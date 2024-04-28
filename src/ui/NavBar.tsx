"use client";

// components
import HamburgerMenu from "@/ui/HamburgerMenu";
import HamburgerOptions from "@/ui/HamburgerOptions";
import NavItem from "@/ui/NavItem";
import NavLinks from "@/ui/NavLinks";

export default function NavBar() {
  return (
    <nav className="z-0 flex h-24 place-items-center justify-around ">
      <div className="text-xl">
        <NavItem href="/">Hi I'm Radosław</NavItem>
      </div>
      <NavLinks />
      <HamburgerMenu />
      <HamburgerOptions />
    </nav>
  );
}
