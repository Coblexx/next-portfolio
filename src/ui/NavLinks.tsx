import NavItem from "./NavItem";

import { clsx } from "clsx";

export default function NavLinks({ isOpen }: { isOpen?: boolean }) {
  return (
    <ul className={clsx("hidden md:flex", isOpen && "flex-col")}>
      <li>
        <NavItem href="home">About Me</NavItem>
      </li>
      <li>
        <NavItem href="projects">Projects</NavItem>
      </li>
      <li>
        <NavItem href="skills">Skills</NavItem>
      </li>
      <li>
        <NavItem href="contact">Contact</NavItem>
      </li>
    </ul>
  );
}
