// react
import Link from "next/link";
import { useState } from "react";

// icons
import { FiChevronRight } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

// components
import BubbleItem from "./BubbeItem";

export default function SliderItem({ slide }: { slide: any[] }) {
  const [title, { link, desc, stack }] = slide;
  const [isExpanded, setIsExpanded] = useState(false);
  const shortDesc = `${desc.split(" ").slice(0, 12).join(" ")}... `;
  const bubbles = stack.slice(0, 5);

  return (
    <>
      <h2 className="py-6 text-2xl font-medium">{title}</h2>

      <div className="flex flex-col">
        <p className="text-lg">{isExpanded ? desc : shortDesc}</p>
        <button
          onClick={() => setIsExpanded((exp) => !exp)}
          className="pointer text-slate-300"
        >
          <span className="flex items-center pb-5">
            {isExpanded ? "Show less" : "Show more"}
            {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
          </span>
        </button>

        <div className="flex w-full flex-wrap">
          {bubbles.map((bub: string) => (
            <BubbleItem key={bub} bubText={bub} />
          ))}
        </div>

        {link && (
          <div className="flex w-full justify-end">
            <Link href={link} target="_blank" className="flex w-fit  py-3">
              <span className="flex items-center underline underline-offset-8">
                Github
                <FiChevronRight />
              </span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
