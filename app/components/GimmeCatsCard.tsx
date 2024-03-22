import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./ui/Carousel";

type Props = {};

function GimmeCatsCard({}: Props) {
  const images = [
    "/static/images/gimmecats_home.png",
    "/static/images/gimmecats_breed.png",
  ];
  return (
    <div className="flex flex-col mt-64 mb-16">
      <h1 className="text-6xl text-[#49416D] mx-auto px-4 py-2">Gimme Cats</h1>
      <div className="flex flex-col py-4 items-center rounded-lg shadow-md pb-4 bg-gradient-radial from-[#eff7f6] to-[#b2f7ef]">
        {/* <Image
          src={"/static/images/unico1.png"}
          alt="Unico"
          width={500}
          height={500}
          className="w-2/3 mx-auto rounded-xl"
        /> */}
        <div className="flex flex-col w-full max-w-7xl items-center">
          <Link
            href="https://gimme-cats.vercel.app/"
            className="text-lg hover:text-[#F07167] hover:bg-white rounded-md mb-4 px-4 py-2"
          >
            https://gimme-cats.vercel.app/
          </Link>
          <Carousel>
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Image ${index}`}
                width={1824}
                height={1026}
                className=""
              />
            ))}
          </Carousel>
        </div>

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

export default GimmeCatsCard;
