import Link from "next/link";
import { ReactNode } from "react";

export default function ContactItem({
  title,
  link,
  icon,
  children,
}: {
  title: string;
  link: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="py-2">
        <Link
          className="text-xl underline underline-offset-2"
          target="_blank"
          href={link}
        >
          <span className="flex items-center gap-2">
            {icon}
            {title}
          </span>
        </Link>
      </div>
      <p>{children}</p>
    </div>
  );
}
