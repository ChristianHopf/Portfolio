import About from "./components/About";
import GimmeCatsCard from "./components/GimmeCatsCard";
import QuizzingtonCard from "./components/QuizzingtonCard";
import SoulsTrackerCard from "./components/SoulsTrackerCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="container mt-16">
        <About />
        <div id="works">
          <SoulsTrackerCard />
          <QuizzingtonCard />
          <GimmeCatsCard />
        </div>
      </section>
    </main>
  );
}
