import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./ui/Carousel";

type Props = {};

function SoulsTrackerCard({}: Props) {
  const images = ["/static/images/soulstracker_home.webp"];
  return (
    <div className="flex flex-col lg:flex-row w-full mx-auto justify-center py-16 mb-8 items-center rounded-md gap-4">
      <div className="flex items-center">
        <img key={0} src={images[0]} alt={`Image ${0}`} />
      </div>
      <div className="border-2 border-[#0A84FF] self-stretch"></div>
      <div className="flex flex-col justify-between w-full px-2 self-stretch">
        <div className="flex flex-col">
          <h1 className="text-6xl font-semibold mb-2">SoulsTracker</h1>
          <p className="text-stone-700 text-2xl">
            <span className="text-accent-secondary-light">SoulsTracker</span> is
            an app built with EmberJS and Express that displays essential data
            about a Steam user&apos;s progress in select FromSoftware titles.
            Data is retrieved from the Steam Web API.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 mt-4 pb-2">
          <Link
            href="https://souls-tracker.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#0A84FF] hover:text-bg-light text-xl link-underline"
          >
            https://souls-tracker.vercel.app/
          </Link>
          <Link
            href={"https://github.com/ChristianHopf/Soulstracker"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#0A84FF] hover:text-bg-light text-xl link-underline"
          >
            View GitHub Repo
          </Link>
          <Link
            href={"https://developer.valvesoftware.com/wiki/Steam_Web_API"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#0A84FF] hover:text-bg-light text-xl link-underline"
          >
            Steam Web API
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SoulsTrackerCard;
