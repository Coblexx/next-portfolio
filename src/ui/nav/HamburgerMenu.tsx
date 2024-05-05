// next
// react-icons
import { FiMenu } from "react-icons/fi";

// components
import clsx from "clsx";

export default function HamburgerMenu({
  handleClick,
  isOpen,
}: {
  handleClick: Function;
  isOpen: boolean;
}) {
  return (
    <button
      className="absolute right-0 p-8 md:hidden"
      onClick={() => handleClick()}
    >
      <FiMenu
        className={clsx(isOpen && "rotate-90 animate-[rotate90_0.5s]")}
        size={30}
      />
    </button>
  );
}
