import Image from "next/image"
import { motion } from "framer-motion"



const Header = () => {
  return (
    <>
    <header className="h-screen flex flex-col header">
      <div className="flex flex-col justify-center items-start h-full px-8 ml-5">
        <h1 className="text-5xl font-bold leading-22 font-playfair  text-rose-600 mt-16 mb-8">A bouquet 
        <br />for every occasion.</h1>
        <p className="text-black  mb-6 text-sm leading-10">Want to send your congratulations, condolences,<br /> or your love and support?<br />No matter the message you want to share, <br /> we have a bouquet for you.</p>  
        <motion.a href='/#products' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="bg-rose-600 text-white px-10 py-4 rounded-full text-lg mt-6 hover:bg-rose-400 transition duration-300 ease-in-out flex items-left animate-bounce"
        >Shop Now
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </motion.a>
      </div>  
    </header>
    </>
  )
}

export default Header