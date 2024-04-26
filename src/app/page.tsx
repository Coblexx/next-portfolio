import "./globals.css";

export default function Home() {
  return (
    <>
      <nav className="">
        <div>
          <a href="#">Radosław</a>
        </div>
        <div className="hidden sm:flex">
          <a href="#">About me</a>
          <a href="#">Projects</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      <main>
        <header></header>
      </main>
      <footer className="fixed bottom-0 flex w-screen place-items-center">
        <p>© Radosław Głogowski 2024</p>
      </footer>
    </>
  );
}

// nav item
