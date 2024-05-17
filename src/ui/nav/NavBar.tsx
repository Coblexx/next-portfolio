"use client";

// react
import { useState } from "react";

// components
import HamburgerMenu from "@/ui/nav/HamburgerMenu";
import HamburgerOptions from "@/ui/nav/HamburgerOptions";
import NavItem from "@/ui/nav/NavItem";
import NavLinks from "@/ui/nav/NavLinks";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((open) => !open);
  }

  return (
    <nav className="flex h-24 justify-between px-20">
      <div>
        <NavItem isOpen={false} handleClick={() => setIsOpen(false)} href="/">
          Hi I'm Radosław
        </NavItem>
      </div>
      <div className="flex grow justify-end">
        <NavLinks isOpen={false} handleClick={handleClick} />
      </div>
      <HamburgerMenu isOpen={isOpen} handleClick={handleClick} />
      <HamburgerOptions isOpen={isOpen} handleClick={handleClick} />
    </nav>
  );
}
