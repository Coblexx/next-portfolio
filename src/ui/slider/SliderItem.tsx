// react
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

// icons
import { FiChevronRight } from "react-icons/fi";

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
      <h2 className="py-6 text-2xl font-medium">{title}</h2>
      <div className="flex flex-col">
        <p className="text-lg">{desc}</p>
        {link && (
          <Link href={link} target="_blank" className="flex justify-end py-3">
            <span className="flex items-center">
              Github
              <FiChevronRight />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
