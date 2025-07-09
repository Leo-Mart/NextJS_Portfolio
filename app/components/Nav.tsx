"use client";

import Container from "./Container";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
    <Container>
      <nav className="py-10 lg:py-16 2xl:py-24">
        <div className="flex w-full items-center justify-between">
          <p className="text-base font-medium md:text-lg lg:text-xl 2xl:text-2xl">
            <Link href="/">ML</Link>
          </p>
          <div className="flex gap-3 md:gap-6">
            <ul className="flex items-center gap-3 text-sm md:gap-6 md:text-base 2x1:text-x1">
              <li>
                <Link
                  className={`block hover:text-ruby hover:underline ${pathname === "/about/" ? "underline" : ""}`}
                  href="/about/"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  className={`block hover:text-ruby hover:underline ${pathname === "/projects/" ? "underline" : ""}`}
                  href="/projects/"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className={`block hover:text-ruby hover:underline ${pathname === "/posts/" ? "underline" : ""}`}
                  href="/posts/"
                >
                  Posts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Nav;
