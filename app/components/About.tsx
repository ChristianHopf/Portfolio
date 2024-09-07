import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row px-4 py-2 gap-8">
      <Image
        src="/static/images/googlepfp.jpg"
        alt="me"
        width={300}
        height={300}
        className="rounded-full items-center shadow-2xl"
      />
      <div className="flex flex-col">
        <h1 className="text-text-primary-light text-4xl font-semibold md:text-7xl  mt-8">
          Christian Hopf
        </h1>
        <p className="text-accent-secondary-light text-2xl px-2 md:text-4xl mt-2">
          // Full Stack Developer
        </p>
      </div>
    </div>
  );
}
