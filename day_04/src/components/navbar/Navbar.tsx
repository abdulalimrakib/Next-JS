"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMenuCliked, setIsMenuCliked] = useState(false);
  const pathName = usePathname();

  return (
    <div className="bg-color">
      <div className="flex justify-between items-center px-[1rem] sm:px-[2rem] lg:px-[4rem] xl:px-[5rem] 2xl:px-[6rem] w-[100%] mx-auto">
        <div>
          <Link
            className={`text-[30px] md:text-[40px] font-bold ${
              pathName === "/" ? "active" : ""
            }`}
            href="/"
          >
            logo
          </Link>
        </div>
        <ul className="hidden md:flex gap-5">
          <li>
            <Link
              className={`font-medium ${
                pathName === "/about" ? "text-blue-500" : ""
              }`}
              href={`/about`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`font-medium ${
                pathName === "/contacts" ? "text-blue-500" : ""
              }`}
              href="/contacts"
            >
              Contacts
            </Link>
          </li>
          {/* <li>
            <Link className="font-medium" href="">
              link3
            </Link>
          </li> */}
          {/* <li>
            <Link href="">logo1</Link>
          </li>
          <li>
            <Link href="">logo2</Link>
          </li> */}
        </ul>

        <div className="md:hidden">
          <div className="flex items-center gap-5">
            <ul className="flex gap-5">
              <li>
                <Link href="">logo1</Link>
              </li>
              <li>
                <Link href="">logo2</Link>
              </li>
            </ul>
            {isMenuCliked ? (
              <MdClose onClick={() => setIsMenuCliked(false)} />
            ) : (
              <FiMenu onClick={() => setIsMenuCliked(true)} />
            )}
          </div>
        </div>
      </div>
      <div className={`container ${isMenuCliked ? "block" : "hidden"}`}>
        <ul>
          <li>
            <a className="font-medium" href="">
              link1
            </a>
          </li>
          <li>
            <a className="font-medium" href="">
              link2
            </a>
          </li>
          <li>
            <a className="font-medium" href="">
              link3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
