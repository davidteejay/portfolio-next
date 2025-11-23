'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="bg-background px-8 py-5 flex flex-row items-center justify-between">
        <Image
          src={"/images/headshot.jpeg"}
          alt="Headshot of Chii"
          className="rounded-full"
          width={40}
          height={40}
        />
        <div className="flex flex-row items-center justify-center gap-5">
          <Link
            prefetch
            href="/"
            className={`text-sm ${
              pathname === "/" ? "font-medium" : "font-normal opacity-60"
            }`}
          >
            Home
          </Link>
          <Link
            prefetch
            href="/projects"
            className={`text-sm ${
              pathname === "/projects"
                ? "font-medium"
                : "font-normal opacity-75"
            }`}
          >
            Projects
          </Link>
        </div>
        {/* <div className="w-[40px]" /> */}
      </div>
    </nav>
  );
}
