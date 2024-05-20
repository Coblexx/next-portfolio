// clsx
import clsx from "clsx";

// components
import NavLinks from "./NavLinks";
import { useNavContext } from "@/NavContext";

export default function HamburgerOptions() {
  const { isOpen } = useNavContext();

  return (
    <div
      className={clsx(
        isOpen && "absolute left-0 top-24 h-fit w-screen bg-[#141414]",
      )}
    >
      {isOpen && <NavLinks />}
    </div>
  );
}
