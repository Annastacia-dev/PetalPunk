import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("black");

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 120) {
        setColor("white");
        setTextColor("black");
      } else {
        setColor("transparent");
        setTextColor("black");
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-3 text-white h-22">
        <Link href="/">
          <h1 className="font-bold text-3xl text-black logo flex justify-center items-center">
            <Image src="/images/logo.png" width={20} height={20} alt='logo' className="" />
            <span className="text-2xl mt-2 -ml-1 text-rose-600 font-babylonica">Waridi</span>
            </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <Link href="/#about">
            <li className="p-4 font-semibold">Home</li>
          </Link>
          <Link href="/#services">
            <li className="p-4 font-semibold">About</li>
          </Link>
          <Link href="/#pricing">
            <li className="p-4 font-semibold">Contact</li>
          </Link>
          <Link href="/#programs">
            <li className="p-4 font-semibold">Shop</li>
          </Link>
          <Link href="/#trainers">
            <li className="p-4 font-semibold">FAQs</li>
          </Link>
          <Link href="/" className="p-4 font-semibold mt-0.5">
            <FaShoppingBag />
          </Link>
        </ul>

        {/*Mobile button /> */}
        <div className="sm:hidden block z-10">
          {nav ? (
            <AiOutlineClose
              className="text-4xl text-black"
              onClick={toggleNav}
            />
          ) : (
            <AiOutlineMenu
              className="text-4xl text-black"
              onClick={toggleNav}
            />
          )}
        </div>
        {/*Mobile menu /> */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center  w-full h-screen bg-white/95 text-black duration-300 ease-in-out"
              : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-white/70 text-black duration-300 ease-in-out"
          }
        >
          <ul onClick={toggleNav} className="text-center">
            <Link href="/#about">
              <li className="p-4 text-3xl border-b border-black">About</li>
            </Link>
            <Link href="/#services">
              <li className="p-4 text-3xl border-b border-black">Contact</li>
            </Link>
            <Link href="/shop">
              <li className="p-4 text-3xl border-b border-black">Shop</li>
            </Link>
            <Link href="/faqs">
              <li className="p-4 text-3xl border-b border-black">FAQs</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;