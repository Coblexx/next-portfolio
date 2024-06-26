import Image from "next/image";

export default function HeroSection() {
  return (
    <header>
      <div>
        <div className="flex h-96 items-center justify-around bg-hero bg-cover bg-center bg-no-repeat p-10">
          <div className="flex max-w-96 flex-col justify-center gap-4">
            <h1 className="text-5xl font-medium">Radosław Głogowski</h1>
            <h2 className="max-w-md text-2xl">
              I am at the beginning of my journey to become a front end
              developer!
            </h2>
          </div>
          <div className="hidden md:flex">
            <Image
              className="overflow-hidden rounded-full md:flex md:justify-center"
              src="/main-img.jpg"
              alt="Image of a flower"
              width={300}
              height={300}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
