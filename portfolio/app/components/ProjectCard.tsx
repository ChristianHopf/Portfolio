import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
}

export default function ProjectCard({ title }: Props) {
  // project title
  // carousel of images
  // link to deployed project
  // link to github repo
  return (
    <div className="flex flex-col mt-64 mb-16">
      <h1 className="text-6xl text-[#49416D] mx-auto px-4 py-2">{title}</h1>
      <div className="flex flex-col py-8 rounded-lg shadow-md pb-4 bg-gradient-radial from-[#eff7f6] to-[#b2f7ef]">
        <Image
          src={"/static/images/unico1.png"}
          alt="Unico"
          width={500}
          height={500}
          className="w-2/3 mx-auto rounded-xl"
        />
        <p className="text-2xl px-16 py-8">
          GimmeCats is a NextJS app that allows the user to search through a
          database of cat breeds and view detailed information on each one via
          The Cat API.
        </p>
        <span className="flex flex-row gap-4 px-12">
          <Link
            href={"/"}
            className="text-lg px-4 py-2 rounded-md hover:bg-[#F07167] hover:text-white"
          >
            View GitHub Repo
          </Link>
          <Link
            href={"https://thecatapi.com/"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-lg px-4 py-2 rounded-md hover:bg-[#F07167] hover:text-white"
          >
            The Cat API
          </Link>
        </span>
      </div>
    </div>
  );
}
