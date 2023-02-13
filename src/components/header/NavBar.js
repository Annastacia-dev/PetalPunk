import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";


const NavBar = () => {
  const [nav, setNav] = useState(false);
  
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div style={{ backgroundColor: 'transparent' }} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-3 h-22">
        <Link className="flex -ml-16" href="/">
            <Image src="/images/logo.png" width={30} height={30} alt='logo' />
        </Link>
        <ul className=" text-black hidden sm:flex">
          <Link href="/">
            <li className="p-4 font-semibold">Home</li>
          </Link>
          <Link href="/about">
            <li className="p-4 font-semibold">About</li>
          </Link>
          <Link href="/contact">
            <li className="p-4 font-semibold">Contact</li>
          </Link>
          <Link href="/shop">
            <li className="p-4 font-semibold">Shop</li>
          </Link>
          <Link href="/faqs">
            <li className="p-4 font-semibold">FAQs</li>
          </Link>
          <Link href="/cart" className="p-4 font-semibold mt-0.5">
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