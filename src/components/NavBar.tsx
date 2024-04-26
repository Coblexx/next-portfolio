export default function NavBar() {
  return (
    <nav className="flex h-24 place-items-center justify-around ">
      <div className="text-xl">
        <a href="#">Hi, I'm Radosław</a>
      </div>
      <div className="hidden sm:flex">
        <a href="#">About me</a>
        <a href="#">Projects</a>
        <a href="#">Skills</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
