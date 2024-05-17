import Link from "next/link";
import { ReactNode } from "react";

export default function ContactItem({
  title,
  link,
  children,
}: {
  title: string;
  link: string;
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
          {title}
        </Link>
      </div>
      <p>{children}</p>
    </div>
  );
}
