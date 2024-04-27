import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  href: string;
};

export default function NavBar() {
  return (
    <nav className="flex h-24 place-items-center justify-around ">
      <div className="text-xl">
        <NavItem href="#">Hi I'm XYZ</NavItem>
      </div>
      <div className="hidden sm:flex">
        <NavItem href="#section-aboutme">About Me</NavItem>
        <NavItem href="#section-projects">Projects</NavItem>
        <NavItem href="#section-skills">Skills</NavItem>
        <NavItem href="#section-contact">Contact</NavItem>
      </div>
    </nav>
  );
}

function NavItem({ children, href }: Props) {
  return (
    <Link href={href} className="p-10">
      {children}
    </Link>
  );
}
