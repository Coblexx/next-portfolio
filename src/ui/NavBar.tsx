"use client";

// components
import HamburgerMenu from "@/ui/HamburgerMenu";
import HamburgerOptions from "@/ui/HamburgerOptions";
import NavItem from "@/ui/NavItem";
import NavLinks from "@/ui/NavLinks";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((open) => !open);
  }

  return (
    <nav className="z-0 flex h-24 place-items-center justify-between">
      <div className="text-xl">
        <NavItem href="/">Hi I'm Radosław</NavItem>
      </div>
      <NavLinks handleClick={handleClick} />
      <HamburgerMenu isOpen={isOpen} handleClick={handleClick} />
      <HamburgerOptions isOpen={isOpen} handleClick={handleClick} />
    </nav>
  );
}
