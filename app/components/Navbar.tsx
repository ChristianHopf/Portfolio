import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex container top-0 z-10 justify-between items-center mx-auto px-6 py-4">
      <Link href={"#home"}>
        <span className="text-stone-700 hover:text-black text-2xl px-2 py-1 transition-colors nav-underline">
          Christian Hopf
        </span>
      </Link>
      <span className="flex gap-6">
        <Link
          href={"#works"}
          className="text-stone-700 hover:text-black text-2xl px-2 py-1 transition-colors nav-underline"
        >
          <p>Works</p>
        </Link>
        <Link
          href={"https://github.com/ChristianHopf"}
          rel="noopener noreferrer"
          target="_blank"
          className="text-stone-700 hover:text-black  text-2xl px-2 py-1 transition-colors nav-underline"
        >
          <IoLogoGithub className="text-3xl" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/christian-hopf-codes/"}
          rel="noopener noreferrer"
          target="_blank"
          className="text-stone-700 hover:text-black text-2xl px-2 py-1 transition-colors nav-underline"
        >
          <FaLinkedin className="text-3xl" />
        </Link>
      </span>
      {/* <div className="triangle">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div> */}
    </div>
  );
}
