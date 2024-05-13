import clsx from "clsx";

export default function TextBlock({
  title,
  text,
  styles = "",
}: {
  title: string;
  text: string;
  styles?: string;
}) {
  return (
    <div className={clsx(styles, "p-6")}>
      <p className="py-2 text-xl">{title}</p>
      <p>{text}</p>
    </div>
  );
}
