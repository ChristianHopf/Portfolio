import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex sticky top-0 justify-end py-4 px-8 text-xl bg-[#B2F7EF] shadow-md">
      <span className="flex flex-row gap-8 py-2 max-w-7xl">
        <Link
          href={"/"}
          className=" px-4 py-2 rounded-md hover:bg-[#F07167] hover:text-white"
        >
          <p>Home</p>
        </Link>
        <Link
          href={"/"}
          className=" px-4 py-2 rounded-md hover:bg-[#F07167] hover:text-white"
        >
          <p>Works</p>
        </Link>
        <Link
          href={"https://github.com/ChristianHopf"}
          rel="noopener noreferrer"
          target="_blank"
          className=" px-4 py-2 rounded-md hover:bg-[#F07167] hover:text-white"
        >
          <IoLogoGithub className="text-3xl" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/christian-hopf-codes/"}
          rel="noopener noreferrer"
          target="_blank"
          className=" px-4 py-2 rounded-md hover:bg-[#F07167] hover:text-white"
        >
          <FaLinkedin className="text-3xl" />
        </Link>
      </span>
    </div>
  );
}
