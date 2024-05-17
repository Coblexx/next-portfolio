// components
import HeroSection from "@/ui/HeroSection";
import TextBlock from "@/ui/TextBlock";
import ContactItem from "@/ui/contact/ContactItem";

// data
import about from "@/about.json";

export default function HomePage() {
  const { title, text } = about;

  return (
    <>
      <HeroSection />
      <div className="flex flex-grow flex-wrap">
        <div>
          <TextBlock title={title} text={text} />
        </div>
        <div>
          <TextBlock title="Contact">
            <ContactItem
              title="Linkedin"
              link="https://www.linkedin.com/in/rados%C5%82aw-g%C5%82ogowski/"
            >
              This is my Linkedin page, you can contact me there!
            </ContactItem>
            <ContactItem title="Github" link="https://github.com/Coblexx">
              This is my Github page, you can find my work there!
            </ContactItem>
          </TextBlock>
        </div>
      </div>
    </>
  );
}
