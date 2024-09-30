import About from "./components/About";
import Footer from "./components/Footer";
import GimmeCatsCard from "./components/GimmeCatsCard";
import PKCard from "./components/PKCard";
import QuizzingtonCard from "./components/QuizzingtonCard";
import SoulsTrackerCard from "./components/SoulsTrackerCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mt-8 xl:mt-16">
      <div className="container mx-auto">
        <section className="mb-6 md:mb-24">
          <About />
        </section>
        <section id="works" className="relative flex flex-col w-full mb-4">
          <SoulsTrackerCard />
          <PKCard />
          <QuizzingtonCard />
          <GimmeCatsCard />
          {/* <div className="dividing-line absolute inset-2 flex justify-center items-start">
            <div className="border-2 border-accent-secondary-light mx-4 self-stretch"></div>
          </div> */}
        </section>
        <Footer />
      </div>
    </main>
  );
}
