import clsx from "clsx";
import { ReactNode } from "react";

export default function TextBlock({
  title,
  text,
  styles = "",
  children,
}: {
  title: string;
  text?: string;
  styles?: string;
  children?: ReactNode;
}) {
  return (
    <div className={clsx(styles, "p-6")}>
      <p className="py-2 text-xl">{title}</p>
      <p>{text}</p>
      {children}
    </div>
  );
}
