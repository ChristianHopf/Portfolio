import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-row gap-16">
      <Image
        src="/static/images/googlepfp.jpg"
        alt="me"
        width={500}
        height={500}
        className="rounded-full shadow-2xl"
      />
      <div className="flex flex-col">
        <h1 className="text-8xl text-[#49416D] mt-8">Christian Hopf</h1>
        <p className="text-4xl ms-4 mt-2">Full stack developer</p>
      </div>
    </div>
  );
}
