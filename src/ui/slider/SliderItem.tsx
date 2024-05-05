// react
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function SliderItem({
  title,
  desc,
  link = "",
}: {
  title: String;
  desc: String;
  link?: Url;
}) {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <p>{desc}</p>
        <Link href={link}></Link>
      </div>
    </div>
  );
}
