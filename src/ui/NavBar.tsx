"use client";

// next
import Link from "next/link";
import { ReactNode } from "react";

//clsx
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

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
  const path = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "p-10",
        path === `/${href}` && "underline underline-offset-[10px]",
      )}
    >
      {children}
    </Link>
  );
}
