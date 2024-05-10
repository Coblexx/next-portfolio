// components
import TextBlock from "@/ui/TextBlock";

// data
import skills from "@/skills.json";

export default function SkillsPage() {
  return (
    <div className="mb-12 flex flex-col items-center">
      {skills.map((block) => (
        <TextBlock key={block.id} title={block.title} text={block.text} />
      ))}
    </div>
  );
}
