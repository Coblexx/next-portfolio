// components
import HeroSection from "@/ui/HeroSection";
import TextBlock from "@/ui/TextBlock";

// data
import about from "@/about.json";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col">
        {Object.entries(about).map((text: string[]) => (
          <TextBlock content={text} />
        ))}
      </div>
    </>
  );
}
