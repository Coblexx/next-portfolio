// clsx
import clsx from "clsx";

// components
import NavLinks from "./NavLinks";

export default function HamburgerOptions({ isOpen }: { isOpen?: boolean }) {
  return (
    <div
      className={clsx(
        isOpen && "absolute top-24 z-10 h-fit w-full bg-[#141414]",
      )}
    >
      <NavLinks isOpen={isOpen} />
    </div>
  );
}
