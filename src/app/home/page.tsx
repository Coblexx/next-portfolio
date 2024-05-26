// components
import HeroSection from "@/_ui/HeroSection";
import TextBlock from "@/_ui/TextBlock";
import ContactItem from "@/_ui/contact/ContactItem";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// data
import about from "@/about.json";

export default function HomePage() {
  const { title, text } = about;

  return (
    <>
      <HeroSection />
      <div className="flex flex-col md:mx-20 md:flex-row">
        <TextBlock styles="flex-1 px-24" title={title} text={text} />
        <TextBlock styles="flex-1 px-24" title="Contact">
          <ContactItem
            icon={<FaLinkedin />}
            title="Linkedin"
            link="https://www.linkedin.com/in/rados%C5%82aw-g%C5%82ogowski/"
          >
            This is my Linkedin page, you can contact me there!
          </ContactItem>
          <ContactItem
            icon={<FaGithub />}
            title="Github"
            link="https://github.com/Coblexx"
          >
            This is my Github page, you can find my work there!
          </ContactItem>
        </TextBlock>
      </div>
    </>
  );
}
