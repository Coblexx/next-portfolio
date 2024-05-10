// components
import HeroSection from "@/ui/HeroSection";
import TextBlock from "@/ui/TextBlock";

// data
import about from "@/about.json";

export default function HomePage() {
  const { title, text } = about;

  return (
    <>
      <HeroSection />
      <div className="flex flex-col">
        <TextBlock title={title} text={text} />
      </div>
    </>
  );
}
