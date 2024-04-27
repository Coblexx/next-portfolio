import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavItem({
  children,
  href,
}: {
  children?: ReactNode;
  href: string;
}) {
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
