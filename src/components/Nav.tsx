'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation">
      <div className="site-nav-inner bg-background">
        <Link prefetch href="/">
          <Image
            src="/images/chibuokem-portrait.jpeg"
            alt="Headshot of Chii"
            className="rounded-full"
            width={40}
            height={40}
          />
        </Link>

        <div className="site-nav-links">
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
          <Link
            prefetch
            href="/writing"
            aria-current={pathname === "/writing" ? "page" : undefined}
            className={`text-sm ${
              pathname === "/writing" ? "font-medium" : "font-normal opacity-75"
            }`}
          >
            Writing
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
