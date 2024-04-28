import NavItem from "./NavItem";

import clsx from "clsx";

export default function NavLinks({ isOpen }: { isOpen?: boolean }) {
  return (
    <ul
      className={clsx(
        "gap-2 md:flex",
        !isOpen && "hidden",
        isOpen && " flex flex-col",
      )}
    >
      <NavItem href="home">About Me</NavItem>
      <NavItem href="projects">Projects</NavItem>
      <NavItem href="skills">Skills</NavItem>
      <NavItem href="contact">Contact</NavItem>
    </ul>
  );
}
