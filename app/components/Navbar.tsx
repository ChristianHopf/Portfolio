import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex sticky top-0 z-10 justify-end items-center px-6 py-4 gap-6 text-xl bg-[#B2F7EF] shadow-md">
      <span className="flex gap-6">
        <Link
          href={"#home"}
          className="btn border-none shadow-none text-xl px-4 py-2 rounded-md bg-[#B2F7EF] hover:bg-[#F07167] hover:text-white"
        >
          <p>Home</p>
        </Link>
        <Link
          href={"#works"}
          className="btn border-none shadow-none text-xl px-4 py-2 rounded-md bg-[#B2F7EF] hover:bg-[#F07167] hover:text-white"
        >
          <p>Works</p>
        </Link>
      </span>
      <span className="flex gap-6">
        <Link
          href={"https://github.com/ChristianHopf"}
          rel="noopener noreferrer"
          target="_blank"
          className="btn border-none shadow-none text-xl px-4 py-2 rounded-md bg-[#B2F7EF] hover:bg-[#F07167] hover:text-white"
        >
          <IoLogoGithub className="text-3xl" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/christian-hopf-codes/"}
          rel="noopener noreferrer"
          target="_blank"
          className="btn border-none shadow-none text-xl px-4 py-2 rounded-md bg-[#B2F7EF] hover:bg-[#F07167] hover:text-white"
        >
          <FaLinkedin className="text-3xl" />
        </Link>
      </span>
    </div>
  );
}
