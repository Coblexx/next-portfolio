// react-icons
import { FiMenu } from "react-icons/fi";

// components
import clsx from "clsx";

// context
import { useNavContext } from "@/NavContext";

export default function HamburgerMenu() {
  const { isOpen, handleToggle } = useNavContext();

  return (
    <button
      className="absolute right-0 p-8 md:hidden"
      onClick={() => handleToggle()}
    >
      <FiMenu
        className={clsx(isOpen && "rotate-90 animate-[rotate90_0.5s]")}
        size={30}
      />
    </button>
  );
}
