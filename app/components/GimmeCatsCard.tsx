import React from "react";
import Link from "next/link";

type Props = {};

function GimmeCatsCard({}: Props) {
  const images = [
    "/static/images/gimmecats_home.png",
    "/static/images/gimmecats_breed.png",
  ];
  // return (
  //   <div className="flex flex-col py-32 mb-16">
  //     <h1 className="text-6xl text-white mx-auto px-4 py-2 mb-2">Gimme Cats</h1>
  //     <div className="flex flex-col py-4 items-center rounded-lg shadow-md pb-4 bg-[#00132D]">
  //       {/* <Image
  //         src={"/static/images/unico1.png"}
  //         alt="Unico"
  //         width={500}
  //         height={500}
  //         className="w-2/3 mx-auto rounded-xl"
  //       /> */}
  //       <div className="flex flex-col w-full max-w-7xl items-center">
  //         <Link
  //           href="https://gimme-cats.vercel.app/"
  //           rel="noopener noreferrer"
  //           target="_blank"
  //           className="btn text-lg px-4 py-2 mb-4 rounded-md hover:bg-[#E63946] hover:text-white"
  //         >
  //           https://gimme-cats.vercel.app/
  //         </Link>
  //         <Carousel>
  //           {images.map((image, index) => (
  //             <Image
  //               key={index}
  //               src={image}
  //               alt={`Image ${index}`}
  //               width={1824}
  //               height={1026}
  //               className=""
  //             />
  //           ))}
  //         </Carousel>
  //       </div>

  //       <p className="text-white text-2xl px-16 py-8">
  //         GimmeCats is a NextJS app that allows the user to search through a
  //         database of cat breeds and view detailed information on each one via
  //         The Cat API.
  //       </p>
  //       <span className="flex flex-row gap-4 px-12">
  //         <Link
  //           href={"/"}
  //           rel="noopener noreferrer"
  //           target="_blank"
  //           className="btn text-lg px-4 py-2 rounded-md hover:bg-[#E63946] hover:text-white"
  //         >
  //           View GitHub Repo
  //         </Link>
  //         <Link
  //           href={"https://thecatapi.com/"}
  //           rel="noopener noreferrer"
  //           target="_blank"
  //           className="btn text-lg px-4 py-2 rounded-md hover:bg-[#E63946] hover:text-white"
  //         >
  //           The Cat API
  //         </Link>
  //       </span>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex flex-col xl:flex-row w-full mx-auto justify-center mb-2 lg:mb-8 items-center rounded-md gap-4">
      <div className="flex items-center mx-6 md:mx-0">
        <img key={0} src={images[0]} alt={`Image ${0}`} />
      </div>
      <div className="border-2 border-[#0A84FF] self-stretch mx-6 md:mx-0"></div>
      <div className="flex flex-col justify-between self-stretch xl:w-full mx-6 md:mx-0">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-semibold mb-2">GimmeCats</h1>
          <p className="text-stone-700 text-xl md:text-2xl">
            <span className="text-accent-secondary-light">GimmeCats</span> is a{" "}
            <span className="text-accent-secondary-light">NextJS</span> app that
            allows the user to search through a database of cat breeds and view
            detailed information on each one via The Cat API.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 mt-4 pb-2">
          <Link
            href="https://gimme-cats.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#0A84FF] hover:text-bg-light text-lg xl:text-xl link-underline"
          >
            https://gimme-cats.vercel.app/
          </Link>
          <Link
            href={"https://github.com/ChristianHopf/GimmeCats"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#0A84FF] hover:text-bg-light text-lg xl:text-xl link-underline"
          >
            View GitHub Repo
          </Link>
          <Link
            href={"https://thecatapi.com/"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#0A84FF] hover:text-bg-light text-lg xl:text-xl link-underline"
          >
            The Cat API
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GimmeCatsCard;
