"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isTopTracksPage = pathname === "/top-tracks";

  const targetPath =
    pathname === "/"
      ? "/contact"
      : pathname === "/top-tracks"
      ? "/contact-top-tracks"
      : "/policy"; 

  return (
    <nav
      className={`w-full h-30 left-0 ${
        isTopTracksPage ? "text-gray-400 flex justify-center items-end " : "bg-white text-black flex justify-center items-end"
      }`}
    >
      <div>
        <ul className="flex gap-10 text-sm font-bold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href={targetPath}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
