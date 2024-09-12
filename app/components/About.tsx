import Image from "next/image";

export default function About() {
  return (
    <div className="flex justify-center md:items-start md:flex-row py-2 gap-8">
      {/* <Image
        src="/static/images/googlepfp.jpg"
        alt="me"
        width={300}
        height={300}
        className="rounded-full items-center shadow-2xl"
      /> */}
      {/* <h1 className="text-text-primary-light text-4xl font-semibold md:text-7xl  mt-8">
          Christian Hopf
        </h1> */}
      <p className="text-stone-700 text-2xl md:text-4xl mt-2">
        Full stack developer using modern JavaScript + TypeScript frameworks.
      </p>
    </div>
  );
}
