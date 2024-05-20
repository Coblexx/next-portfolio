import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { useNavContext } from "@/NavContext";

export default function NavItem({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const path = usePathname();
  const { isOpen, handleClose } = useNavContext();

  function handleClickRoute(e: React.MouseEvent): void {
    e.stopPropagation();
    handleClose();
  }

  return (
    <li className="flex h-full items-center">
      <Link
        href={href}
        onClick={(e: React.MouseEvent) => handleClickRoute(e)}
        className={clsx(
          path === `/${href}` && "underline underline-offset-[10px]",
          isOpen && href !== "/" && "w-full",
        )}
      >
        <div className={clsx("px-10 py-3 text-xl")}>{children}</div>
      </Link>
    </li>
  );
}
