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
    <nav className="flex h-24 justify-between">
      <div className="text-xl">
        <NavItem isOpen={false} handleClick={() => null} href="/">
          Hi I'm Radosław
        </NavItem>
      </div>
      <div>
        <NavLinks isOpen={false} handleClick={handleClick} />
      </div>
      <HamburgerMenu isOpen={isOpen} handleClick={handleClick} />
      <HamburgerOptions isOpen={isOpen} handleClick={handleClick} />
    </nav>
  );
}
