import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./ui/Carousel";

type Props = {};

function QuizzingtonCard({}: Props) {
  const images = [
    "/static/images/quizzington_home.webp",
    "/static/images/quizzington_quiz.webp",
    "/static/images/quizzington_score.webp",
    "/static/images/quizzington_profile.webp",
  ];

  return (
    <div className="flex flex-col md:flex-row w-full mx-auto justify-center mt-8 py-16 mb-8 items-center rounded-md gap-4">
      <div className="flex items-center">
        <img key={0} src={images[0]} alt={`Image ${0}`} />
      </div>
      <div className="border-2 border-accent-secondary-light self-stretch"></div>
      <div className="flex flex-col justify-between w-full px-2 max-w-xl self-stretch">
        <div className="flex flex-col">
          <h1 className="text-6xl font-semibold mb-2">Quizzington</h1>
          <p className="text-white text-2xl px-2">
            <span className="text-accent-secondary-light">Quizzington</span> is
            a <span className="text-accent-secondary-light">NextJS</span>
            app for creating custom quizzes. Data is stored and fetched with
            Vercel Postgres.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-start pb-2">
          <Link
            href="https://quizzington.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-bg-light bg-accent-primary-dark hover:bg-[#000] hover:text-bg-light text-xl font-semibold px-4 py-2 rounded-[4px]"
          >
            https://quizzington.vercel.app/
          </Link>
          <Link
            href={"https://github.com/ChristianHopf/Quizzington"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-bg-light bg-accent-primary-dark hover:bg-[#000] hover:text-bg-light text-xl font-semibold px-4 py-2 rounded-[4px]"
          >
            View GitHub Repo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuizzingtonCard;
