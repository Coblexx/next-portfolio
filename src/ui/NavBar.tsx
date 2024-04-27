import Link from "next/link";
import { ReactNode } from "react";

type NavItemProps = {
  children?: ReactNode;
  href: string;
};

export default function NavBar() {
  return (
    <nav className="flex h-24 place-items-center justify-around ">
      <div className="text-xl">
        <NavItem href="/">Hi I'm Radosław</NavItem>
      </div>
      <div className="hidden sm:flex">
        <NavItem href="/">About Me</NavItem>
        <NavItem href="projects">Projects</NavItem>
        <NavItem href="skills">Skills</NavItem>
        <NavItem href="contact">Contact</NavItem>
      </div>
    </nav>
  );
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <Link href={href} className="p-10">
      {children}
    </Link>
  );
}
