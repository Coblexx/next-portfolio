import Slider from "@/ui/slider/Slider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="flex h-4/6 w-screen items-center justify-center">
      <Slider />
    </div>
  );
}
