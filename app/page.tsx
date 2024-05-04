import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import GimmeCatsCard from "./components/GimmeCatsCard";
import QuizzingtonCard from "./components/QuizzingtonCard";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="container mt-16">
        <About />
        <div id="works">
          <QuizzingtonCard />
          <GimmeCatsCard />
        </div>
      </section>
    </main>
  );
}
