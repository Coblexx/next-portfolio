// next
import { Metadata } from "next";

// components
import TextBlock from "@/ui/TextBlock";

// data
import skills from "@/skills.json";

export const metadata: Metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  const styles = "max-w-md m-auto";

  return (
    <div className="mb-12 flex flex-wrap">
      {skills.map((block) => (
        <TextBlock
          key={block.id}
          styles={styles}
          title={block.title}
          text={block.text}
        />
      ))}
    </div>
  );
}
