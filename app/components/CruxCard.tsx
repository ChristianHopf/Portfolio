import React from "react";
import Link from "next/link";

type Props = {};

function CruxCard({}: Props) {
  const images = ["/static/images/crux1.png"];

  return (
    <div className="flex flex-col xl:flex-row w-full mx-auto justify-center mb-2 lg:mb-8 items-center rounded-md gap-4">
      <div className="flex items-center mx-6 md:mx-0">
        <img key={0} src={images[0]} alt={`Image ${0}`} />
      </div>
      <div className="border-2 border-[#0A84FF] self-stretch mx-6 md:mx-0"></div>
      <div className="flex flex-col justify-between self-stretch xl:w-full mx-6 md:mx-0">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-semibold mb-2">Crux</h1>
          <p className="text-stone-700 text-xl md:text-2xl">
            <span className="text-accent-secondary-light">Crux</span> is a
            Linux-native 3D game engine written in C, built with the OpenGL
            graphics API and free and open source libraries like Assimp,
            FreeType, and OpenAL. Its purpose is to be user-friendly,
            lightweight, and specialized for 3D environments.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 mt-4 pb-2">
          <Link
            href={"https://crux-next.vercel.app"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#0A84FF] hover:text-bg-light text-lg xl:text-xl link-underline"
          >
            https://crux-next.vercel.app
          </Link>
          <Link
            href={"https://github.com/ChristianHopf/Crux"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#0A84FF] hover:text-bg-light text-lg xl:text-xl link-underline"
          >
            View GitHub Repo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CruxCard;
