// next
import Link from "next/link";
import { ReactNode } from "react";

export default function ContactPage() {
  return (
    <div>
      <ContactItem
        title="Linkedin"
        link="https://www.linkedin.com/in/rados%C5%82aw-g%C5%82ogowski/"
      >
        This is my Linkedin page, you can contact me there!
      </ContactItem>
      <ContactItem title="Github" link="https://github.com/Coblexx">
        This is my Github page, you can find my work there!
      </ContactItem>
    </div>
  );
}

function ContactItem({
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
