import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosClose } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";
import DropDown from "./DropDown";
import { useContext } from "react";
import { CartContext } from "../contexts/cart";
import { BsFillBookmarkStarFill } from "react-icons/bs";


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const { cartItems, wishlistItems } = useContext(CartContext)

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 40) {
        setBackgroundColor("#f9fcf6");
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
        <Link className="flex flex-row gap-3 justify-center items-center"  href="/">
            <Image src="/images/logo.png" width={30} height={30} alt='logo' />
            <span className="mt-1 text-md text-center font-playfair font-bold text-[#da207a]">Waridi</span>
        </Link>
        <ul className=" text-black hidden sm:flex">
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
          
          <Link href="/faqs">
            <li className="p-4 font-semibold hover:text-rose-500">FAQs</li>
          </Link>

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
            <Link href="/#contact">
              <li className="p-4 text-2xl border-b border-white">Contact</li>
            </Link>
            <div className="p-4 text-2xl border-b border-white" onClick={(e) => e.stopPropagation()} // on click don't close the menu
            >
               <DropDown />
            </div>
            <Link href="/faqs">
              <li className="p-4 text-2xl border-b border-white">FAQs</li>
            </Link>
            <Link href="/cart">
              <li className="relative p-4 text-2xl  border-b border-white">
                <FaShoppingBag className="ml-8" />
                <span className="absolute bottom-4 right-8 w-5 h-5 bg-white/90 rounded-full flex justify-center items-center text-rose-700 text-xs">
                  {cartItems.length}
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;