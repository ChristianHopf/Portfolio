import About from "./components/About";
import GimmeCatsCard from "./components/GimmeCatsCard";
import QuizzingtonCard from "./components/QuizzingtonCard";
import SoulsTrackerCard from "./components/SoulsTrackerCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="container py-16 mx-auto">
        <section className="mb-4">
          <About />
        </section>
        <section id="works" className="relative flex flex-col w-full ">
          <SoulsTrackerCard />
          <QuizzingtonCard />
          <GimmeCatsCard />
          {/* <div className="dividing-line absolute inset-2 flex justify-center items-start">
            <div className="border-2 border-accent-secondary-light mx-4 self-stretch"></div>
          </div> */}
        </section>
      </div>
    </main>
  );
}
