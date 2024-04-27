// next
import { useState } from "react";

// react-icons
import { FiMenu } from "react-icons/fi";

// components
import NavLinks from "@/ui/NavLinks";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="right-0">
      <div>
        <button
          className="px-10"
          onClick={() => {
            setIsOpen((open) => !open);
          }}
        >
          <FiMenu className="h-10" />
        </button>
      </div>
      <NavLinks isOpen={isOpen} />
    </div>
  );
}
