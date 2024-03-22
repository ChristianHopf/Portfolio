"use client";

import React from "react";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

type Props = {
  children: JSX.Element[];
};

function Carousel({ children }: Props) {
  const [slide, setSlide] = useState(0);

  function nextSlide() {
    console.log(children.length);
    setSlide((slide) => (slide === children.length - 1 ? 0 : slide + 1));
  }
  function previousSlide() {
    setSlide((slide) => (slide === 0 ? children.length - 1 : slide - 1));
  }

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${slide * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute inset-2 flex justify-between">
        <button onClick={previousSlide}>
          <FaChevronLeft size={40} />
        </button>
        <button onClick={nextSlide}>
          <FaChevronRight size={40} />
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        {children.map((_, index) => (
          <div
            key={index}
            className={`transition-all w-4 h-4  bg-white rounded-full ${
              slide === index ? "p-2" : "bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
