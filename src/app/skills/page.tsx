// components
import TextBlock from "@/_ui/TextBlock";

// data
import skills from "@/skills.json";

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
