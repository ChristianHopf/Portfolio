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
    <div className="flex flex-col mt-64 mb-16">
      <h1 className="text-6xl text-[#49416D] mx-auto px-4 py-2 mb-2">Quizzington</h1>
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
            href="https://quizzington.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="btn text-lg px-4 py-2 mb-4 rounded-md hover:bg-[#F07167] hover:text-white"
          >
            https://quizzington.vercel.app/
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
          Quizzington is a NextJS app for creating and taking custom quizzes.
          Data is stored and fetched with Vercel Postgres.
        </p>
        <span className="flex flex-row gap-4 px-12">
          <Link
            href={"https://github.com/ChristianHopf/Quizzington"}
            className="btn text-lg px-4 py-2 rounded-md hover:bg-[#F07167] hover:text-white"
          >
            View GitHub Repo
          </Link>
        </span>
      </div>
    </div>
  );
}

export default QuizzingtonCard;
