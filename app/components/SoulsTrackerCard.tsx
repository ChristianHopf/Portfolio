import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./ui/Carousel";

type Props = {};

function SoulsTrackerCard({}: Props) {
  const images = ["/static/images/soulstracker_home.webp"];
  return (
    <div className="flex flex-col md:flex-row w-full mx-auto justify-center py-16 mb-8 items-center rounded-md gap-4">
      <div className="flex items-center">
        <img key={0} src={images[0]} alt={`Image ${0}`} />
      </div>
      <div className="border-2 border-accent-secondary-light self-stretch"></div>
      <div className="flex flex-col justify-between w-full px-2 max-w-xl self-stretch">
        <div className="flex flex-col">
          <h1 className="text-6xl font-semibold mb-2">SoulsTracker</h1>
          <p className="text-white text-2xl px-2">
            <span className="text-accent-secondary-light">SoulsTracker</span> is
            an app built with{" "}
            <span className="text-accent-secondary-light">EmberJS</span> and{" "}
            <span className="text-accent-secondary-light">Express</span> that
            displays essential data about a Steam user&apos;s progress in select
            FromSoftware titles. Data is retrieved from the Steam Web API.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-start pb-2">
          <Link
            href="https://souls-tracker.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-bg-light bg-accent-primary-dark hover:bg-[#000] hover:text-bg-light text-xl font-semibold px-4 py-2 rounded-[4px]"
          >
            https://souls-tracker.vercel.app/
          </Link>
          <Link
            href={"https://github.com/ChristianHopf/Soulstracker"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-bg-light bg-accent-primary-dark hover:bg-[#000] hover:text-bg-light text-xl font-semibold px-4 py-2 rounded-[4px]"
          >
            View GitHub Repo
          </Link>
          <Link
            href={"https://developer.valvesoftware.com/wiki/Steam_Web_API"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-bg-light bg-accent-primary-dark hover:bg-[#000] hover:text-bg-light text-xl font-semibold px-4 py-2 rounded-[4px]"
          >
            Steam Web API
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SoulsTrackerCard;
