import React, { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState([
    {
      src: "https://images.unsplash.com/photo-1575885399375-05b39445f3bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym91cXVldCUyMG9mJTIwZmxvd2Vyc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=1400&q=60",
      alt: "Roses Bouquet",
    },
    {
      src: "https://images.unsplash.com/photo-1603353218186-1ab080bdc583?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJvdXF1ZXQlMjBvZiUyMGZsb3dlcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
      alt: "Flowers in a vase",
    },
    {
      src: "https://images.unsplash.com/photo-1552034507-dc5d8099e659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
      alt: "Violet flower arrangement",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevActiveIndex) => {
        return prevActiveIndex === images.length - 1 ? 0 : prevActiveIndex + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
    <h1 className='text-2xl font-bold text-center font-playfair mt-5 mb-10 text-rose-600 uppercase'>
    Flowers from the heart
    </h1>
    <div className="relative bg-gray-800 overflow-hidden h-screen">
      <div className="hidden sm:block sm:absolute top-0 left-0 w-full h-screen">
        {images.map((image, index) => (
          <Image
            key={index}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            src={image.src}
            alt={image.alt}
            width={1920}
            height={1920}
          />
        ))}
      </div>
      <div className="relative z-10 sm:hidden">
        <Image
            className="w-full h-56 sm:h-full object-cover object-center"
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            width={1920}
            height={1920}
        />
      </div>
      <div className="absolute bottom-0 w-full flex justify-center pb-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-8 h-8 rounded-full border-2 border-white transition-opacity duration-300 ease-in-out ${
              index === activeIndex
                ? "opacity-100 bg-white"
                : "opacity-50 hover:opacity-100 bg-transparent"
            }`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Carousel;
