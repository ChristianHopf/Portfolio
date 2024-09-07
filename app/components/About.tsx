import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row gap-8">
      <Image
        src="/static/images/googlepfp.jpg"
        alt="me"
        width={300}
        height={300}
        className="rounded-full items-center shadow-2xl"
      />
      <div className="flex flex-col">
        <h1 className="text-[#1D3557] text-4xl md:text-8xl  mt-8">Christian Hopf</h1>
        <p className="text-[#457B9D] text-2xl ms-4 md:text-4xl mt-2">Full stack developer</p>
      </div>
    </div>
  );
}
