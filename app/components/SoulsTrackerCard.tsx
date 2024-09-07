import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./ui/Carousel";

type Props = {};

function SoulsTrackerCard({}: Props) {
  const images = ["/static/images/soulstracker_home.webp"];
  return (
    <div className="flex flex-col py-32 mb-16">
      <h1 className="text-6xl text-[#1D3557] mx-auto px-4 py-2 mb-2">
        SoulsTracker
      </h1>
      <div className="flex flex-col py-4 items-center rounded-lg shadow-md pb-4 bg-[#A8DADC]">
        {/* <Image
          src={"/static/images/unico1.png"}
          alt="Unico"
          width={500}
          height={500}
          className="w-2/3 mx-auto rounded-xl"
        /> */}
        <div className="flex flex-col w-full max-w-7xl items-center">
          <Link
            href="https://souls-tracker.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="btn text-lg px-4 py-2 mb-4 rounded-md hover:bg-[#E63946] hover:text-white"
          >
            https://souls-tracker.vercel.app/
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

        <p className="text-[#1D3557] text-2xl px-16 py-8">
          SoulsTracker is an app built with EmberJS and Express that displays
          essential data about a Steam user&apos;s progress in select
          FromSoftware titles. Data is retrieved from the Steam Web API.
        </p>
        <span className="flex flex-row gap-4 px-12">
          <Link
            href={"https://github.com/ChristianHopf/Soulstracker"}
            rel="noopener noreferrer"
            target="_blank"
            className="btn text-lg px-4 py-2 rounded-md hover:bg-[#E63946] hover:text-white"
          >
            View GitHub Repo
          </Link>
          <Link
            href={"https://developer.valvesoftware.com/wiki/Steam_Web_API"}
            rel="noopener noreferrer"
            target="_blank"
            className="btn text-lg px-4 py-2 rounded-md hover:bg-[#E63946] hover:text-white"
          >
            Steam Web API
          </Link>
        </span>
      </div>
    </div>
  );
}

export default SoulsTrackerCard;
