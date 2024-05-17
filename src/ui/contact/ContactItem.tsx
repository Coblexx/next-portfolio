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
    <div className="p-6">
      <Link
        className="py-5 text-xl underline underline-offset-2"
        target="_blank"
        href={link}
      >
        {title}
      </Link>
      <p>{children}</p>
    </div>
  );
}
