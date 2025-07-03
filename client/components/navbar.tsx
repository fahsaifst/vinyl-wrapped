"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-30 left-0">
      <div className="flex justify-center items-end h-full">
        <ul className="flex gap-10 text-sm font-bold text-black">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
