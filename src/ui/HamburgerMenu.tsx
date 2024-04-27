// next
import Link from "next/link";
import { useState } from "react";

// clsx
// import clsx from "clsx";

// react-icons
import { FiMenu } from "react-icons/fi";

// components
import NavLinks from "@/ui/NavLinks";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute">
      <button
        className="px-10"
        onClick={() => {
          setIsOpen((open) => !open);
        }}
      >
        <FiMenu className="h-10" />
      </button>
      <NavLinks isOpen={isOpen} />
    </div>
  );
}
