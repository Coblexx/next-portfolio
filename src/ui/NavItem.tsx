import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavItem({
  children,
  href,
  handleClick,
  isOpen,
}: {
  children: ReactNode;
  href: string;
  handleClick: Function;
  isOpen: boolean;
}) {
  const path = usePathname();

  function handleClickRoute(e: React.MouseEvent): void {
    e.stopPropagation();
    handleClick();
  }

  return (
    <li className="flex h-full items-center">
      <Link
        href={href}
        onClick={(e: React.MouseEvent) => handleClickRoute(e)}
        className={clsx(
          path === `/${href}` && "underline underline-offset-[10px]",
        )}
      >
        <div className={clsx("px-10", isOpen && "w-full py-3 text-lg")}>
          {children}
        </div>
      </Link>
    </li>
  );
}
