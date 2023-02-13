import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosClose } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setBackgroundColor("#f5d9e4");
      } else {
        setBackgroundColor("transparent");
      }
    };
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);


  
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div style={{ backgroundColor: `${backgroundColor}` }} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-3 h-22">
        <Link  href="/">
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
            <IoIosClose
              className="text-4xl text-white"
              onClick={toggleNav}
            />
          ) : (
            <BiMenuAltRight
              className="text-4xl text-rose-900"
              onClick={toggleNav}
            />
          )}
        </div>
        {/*Mobile menu /> */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center  w-full h-screen bg-rose-600/90 text-white duration-300 ease-in-out"
              : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-rose-600/70 text-white duration-300 ease-in-out"
          }
        >
          <ul onClick={toggleNav} className="text-center">
            <Link href="/#about">
              <li className="p-4 text-2xl border-b border-white">About</li>
            </Link>
            <Link href="/#services">
              <li className="p-4 text-2xl border-b border-white">Contact</li>
            </Link>
            <Link href="/shop">
              <li className="p-4 text-2xl border-b border-white">Shop</li>
            </Link>
            <Link href="/faqs">
              <li className="p-4 text-2xl border-b border-white">FAQs</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;