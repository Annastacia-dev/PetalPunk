import React, { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState([
    {
      src: "/images/bouquet.jpg",
      alt: "Roses Bouquet",
    },
    {
      src: "/images/flowervase.jpg",
      alt: "Flowers in a vase",
    },
    {
      src: "/images/violetarrangement.jpg",
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
    <h1 className='text-3xl tracking-widest font-bold text-center font-playfair mt-5 mb-10 text-rose-600 uppercase'>
    Flowers from the heart
    </h1>
    <div className="relative overflow-hidden h-screen p-10">
      <div className="hidden sm:block sm:absolute top-0 left-0 w-full h-full">
        {images.map((image, index) => (
          <Image
            key={index}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            src={image.src}
            alt={image.alt}
            width={1920}
            height={1080}
          />
        ))}
      </div>
      <div className="relative z-10 sm:hidden">
        <Image
            className="w-full h-56 sm:h-72 md:h-96 object-cover object-center"
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            width={1920}
            height={1080}
        />
      </div>
      <div className="absolute bottom-0 w-full gap-3 flex justify-center
       pb-4 image-controls">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-8 h-8 rounded-full border-4 border-rose-600 transition-opacity duration-300 ease-in-out ${
              index === activeIndex
                ? "opacity-100 bg-rose-600"
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
