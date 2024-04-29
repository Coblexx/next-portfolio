import { ReactEventHandler } from "react";
import NavItem from "./NavItem";

import clsx from "clsx";

export default function NavLinks({
  isOpen,
  handleClick,
}: {
  isOpen?: boolean;
  handleClick?: ReactEventHandler;
}) {
  return (
    <ul
      className={clsx(
        "gap-2 md:flex",
        !isOpen && "hidden",
        isOpen && "flex flex-col gap-4",
      )}
      onClick={handleClick}
    >
      <NavItem href="home">About Me</NavItem>
      <NavItem href="projects">Projects</NavItem>
      <NavItem href="skills">Skills</NavItem>
      <NavItem href="contact">Contact</NavItem>
    </ul>
  );
}
