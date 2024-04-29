// clsx
import clsx from "clsx";

// components
import NavLinks from "./NavLinks";
import { ReactEventHandler } from "react";

export default function HamburgerOptions({
  isOpen,
  handleClick,
}: {
  isOpen?: boolean;
  handleClick?: ReactEventHandler;
}) {
  return (
    <div
      className={clsx(
        isOpen && "absolute top-24 z-10 h-fit w-full bg-[#141414]",
      )}
    >
      {isOpen && <NavLinks isOpen={isOpen} handleClick={handleClick} />}
    </div>
  );
}
