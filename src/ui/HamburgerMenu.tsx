// next
import { useState } from "react";

// react-icons
import { FiMenu } from "react-icons/fi";

// components
// import NavLinks from "@/ui/NavLinks";
import clsx from "clsx";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute right-0">
      <button
        className="p-10"
        onClick={() => {
          setIsOpen((open) => !open);
        }}
      >
        <FiMenu
          className={clsx(isOpen && "rotate-90 animate-[rotate90_0.5s]")}
          size={30}
        />
      </button>
    </div>
  );
}
