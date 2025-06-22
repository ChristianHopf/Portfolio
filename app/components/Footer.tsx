import Link from "next/link";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="flex justify-center pt-8 mb-2">
      <span className="text-stone-700">
        I also customize{" "}
        <Link
          href={"https://github.com/ChristianHopf/dotfiles"}
          target="_blank"
          rel="noreferrer noopener"
          className="text-[#0A84FF]"
        >
          Linux desktops.
        </Link>
      </span>
    </div>
  );
}

export default Footer;
