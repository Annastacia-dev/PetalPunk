import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosClose } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";
import DropDown from "./DropDown";
import { useContext } from "react";
import { CartContext } from "../contexts/cart";
import { DarkModeContext } from "../contexts/dark";
import { BsFillBookmarkStarFill, BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems, wishlistItems } = useContext(CartContext)
  const { darkMode, setDarkMode} = useContext(DarkModeContext)

  // DarkMode
  const switchMode = () => {
    setDarkMode(!darkMode)
  }


// NavBar Background

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsScrolled(scrollTop > 0);
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

const navBackground = isScrolled ? (darkMode ? 'black' : 'white') : 'transparent';


  
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div style={{ backgroundColor: `${navBackground}` }} className="dark:text-white fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-3 h-22">
        <Link className="flex flex-row gap-3 justify-center items-center"  href="/">
            <Image src="/images/logo.png" width={30} height={30} alt='logo' />
            <span className="mt-1 text-md text-center font-playfair font-bold text-[#da207a]">Waridi</span>
        </Link>
        <ul className="dark:text-white text-black hidden sm:flex">
          <Link href="/">
            <li className="p-4 font-semibold hover:text-rose-500">Home</li>
          </Link>
          <Link href="/#about">
            <li className="p-4 font-semibold hover:text-rose-500">About</li>
          </Link>
          <Link href="/#contact">
            <li className="p-4 font-semibold hover:text-rose-500">Contact</li>
          </Link>
          <div>
            <li className="p-4 font-semibold hover:text-rose-500"><DropDown /></li>
          </div>

          <Link href="/cart" className="p-4 font-semibold cart-icon relative mt-0.5 hover:text-rose-500">
            <FaShoppingBag title="Cart" />
            <span className="absolute top-3 right-1 w-4 h-4 bg-rose-500/80 rounded-full flex justify-center items-center text-white text-xs">
              {cartItems.length}
            </span>
          </Link>

          <Link href="/wishlist" className="p-4 font-semibold cart-icon relative mt-0.5 hover:text-rose-500">
            <BsFillBookmarkStarFill title="Wishlist" />
            <span className="absolute top-3 right-1 w-4 h-4 bg-rose-500/80 rounded-full flex justify-center items-center text-white text-xs">
              {wishlistItems.length}
            </span>
          </Link>

          <div className="transition cursor-pointer hover:text-rose-500" onClick={switchMode}>
              {
                !darkMode ? (
                  <li className="p-4 font-semibold hover:text-rose-500"><BsFillMoonStarsFill title="Dark mode" /></li>
                ) : (
                  <li className="p-4 font-semibold hover:text-rose-500"><BsSunFill title="Light Mode" /></li>
                )
              }
          </div>

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
              ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center  w-full h-screen bg-rose-600/90 dark:bg-black/90 text-white duration-300 ease-in-out"
              : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-rose-600/70 dark:bg-black/70 text-white duration-300 ease-in-out"
          }
        >
          <ul onClick={toggleNav} className="text-center">
            <div>
              <div className="p-4 text-2xl  border-b border-white">
                <div className="transition ml-5  cursor-pointer hover:text-rose-500" onClick={() => {
                  switchMode()
                  setNav(false)
                  }}>
                {
                  !darkMode ? (
                    <li className="p-4 font-semibold hover:text-rose-500"><BsFillMoonStarsFill title="Dark mode" /></li>
                  ) : (
                    <li className="p-4 font-semibold hover:text-rose-500"><BsSunFill title="Light Mode" /></li>
                  )
                }
                  </div>
               
              </div>
            </div>
          
            <Link href="/#about">
              <li className="p-4 text-2xl border-b border-white" onClick={() => setNav(false)} >About</li>
            </Link>
            <Link href="/#contact">
              <li className="p-4 text-2xl border-b border-white" onClick={() => setNav(false)}>Contact</li>
            </Link>
            <Link href="/cart">
              <li className="relative p-4 text-2xl  border-b border-white">
                <FaShoppingBag className="ml-8" />
                <span className="absolute bottom-4 right-6 w-5 h-5 bg-white/90 rounded-full flex justify-center items-center text-rose-700 text-xs">
                  {cartItems.length}
                </span>
              </li>
            </Link>
            <Link href="/wishlist">
              <li className="relative p-4 text-2xl  border-b border-white">
                <BsFillBookmarkStarFill className="ml-8" />
                <span className="absolute bottom-4 right-6 w-5 h-5 bg-white/90 rounded-full flex justify-center items-center text-rose-700 text-xs">
                  {wishlistItems.length}
                </span>
              </li>
            </Link>
            <div className="p-4 text-2xl border-b border-white" onClick={(e) => e.stopPropagation()} // on click don't close the menu
            >
               <DropDown setNav={setNav} />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;