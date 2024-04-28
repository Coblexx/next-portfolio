// clsx
import clsx from "clsx";

// components
import NavLinks from "./NavLinks";

export default function HamburgerOptions({
  isOpen = true,
}: {
  isOpen?: boolean;
}) {
  return (
    <div className={clsx(isOpen && "absolute z-10 h-96 w-full bg-[#141414]")}>
      <NavLinks />
    </div>
  );
}
