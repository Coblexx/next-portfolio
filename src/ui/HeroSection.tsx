import Image from "next/image";

export default function HeroSection() {
  return (
    <header>
      <div>
        <div className="flex h-96 flex-grow items-center bg-hero bg-cover bg-center bg-no-repeat p-10">
          <div className="flex flex-1 flex-col justify-center gap-4 px-32">
            <h1 className="text-5xl font-medium">Radosław Głogowski</h1>
            <h2 className="max-w-md text-2xl">
              I am at the beginning of my journey to become a front end
              developer!
            </h2>
          </div>
          <div className="flex flex-1 justify-center overflow-hidden px-32">
            <div className="rounded-full">
              <Image
                src="/main-img.jpg"
                alt="Image of a flower"
                width={300}
                height={300}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
