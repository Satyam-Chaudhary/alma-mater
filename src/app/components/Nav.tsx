"use client";
import Link from "next/link";
import { lexendGiga } from "../ui/fonts";

export default function Nav() {
  return (
    <div>
      <nav
        className="flex flex-wrap items-center justify-start mx-0 p-4 bg-[#3185FC] w-auto"
      >
        <Link
          href="/"
          className={`text-3xl  ${lexendGiga.className} font-bold text-gradient`}
        >
          ALMA MATER
        </Link>
      </nav>
    </div>
  );
}
