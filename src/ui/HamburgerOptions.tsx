// clsx
import clsx from "clsx";

// components
import NavLinks from "./NavLinks";

export default function HamburgerOptions({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: Function;
}) {
  return (
    <div
      className={clsx(isOpen && "absolute top-24 h-fit w-screen bg-[#141414]")}
    >
      {isOpen && <NavLinks isOpen={isOpen} handleClick={handleClick} />}
    </div>
  );
}
