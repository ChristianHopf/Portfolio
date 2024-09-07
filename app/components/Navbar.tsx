import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-accent-primary-light flex sticky top-0 z-10 justify-end items-center px-6 py-4 gap-6">
      <span className="flex gap-6">
        <Link
          href={"#home"}
          className="text-bg-light hover:bg-[#000000] hover:text-bg-light text-2xl font-semibold px-4 py-2 rounded-[4px]"
        >
          <p>Home</p>
        </Link>
        <Link
          href={"#works"}
          className="text-bg-light hover:bg-[#000000] hover:text-bg-light text-2xl font-semibold px-4 py-2 rounded-[4px]"
        >
          <p>Works</p>
        </Link>
        <Link
          href={"https://github.com/ChristianHopf"}
          rel="noopener noreferrer"
          target="_blank"
          className="text-bg-light hover:bg-[#000000] hover:text-bg-light text-2xl font-semibold px-4 py-2 rounded-[4px]"
        >
          <IoLogoGithub className="text-3xl" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/christian-hopf-codes/"}
          rel="noopener noreferrer"
          target="_blank"
          className="text-bg-light hover:bg-[#000000] hover:text-bg-light text-2xl font-semibold px-4 py-2 rounded-[4px]"
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
