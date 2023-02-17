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
    <h1 className='text-3xl tracking-wide font-bold text-center font-playfair mt-20  text-rose-600 uppercase'>
    Flowers from the heart
    </h1>
    <div className="relative mt-10 overflow-hidden sm:h-screen h-full p-10">
      <div className="hidden sm:block sm:absolute top-0 left-0 w-full h-full">
        {images.map((image, index) => (
          <Image
            key={index}
            className={`absolute inset-0 sm:h-full w-full object-cover object-center transition-opacity duration-300 ease-in-out ${
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
      <div className="absolute bottom-0  w-full gap-3 flex justify-center
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
    <div className='flex flex-col items-center justify-center mt-20'>
    <h1 className='text-3xl tracking-wide font-bold text-center font-playfair   text-rose-600 uppercase'>
    A flower poem
    </h1>
    <div className='sm:text-sm text-xs mt-7 sm:block flex flex-col justify-center items-center'  >
    <pre className='sm:text-left text-center' >
    Some men never think of it. 
    <br />
    You did. You come along.
    <span className="sm:inline block">
    And say you nearly brought me flowers 
    </span>
    
    <br />
    But something had gone wrong.
    </pre>
    <br />
    
    <pre className='sm:text-center'>
    The shop was closed. Or you had doubts — 
    <br />
    The sort that minds like ours
    <br /> 
    Dream up incessantly. You thought 
    <br />
    I might not want your flowers.
    </pre>
    <br />

    <pre className='sm:text-right text-center'>
    It made me smile and hug you then.
    <br />
    Now I can only smile.
    <span className="sm:inline block">
    But, look, the flowers you nearly brought
    </span>
    <br />
    Have lasted all this while.
    </pre>
    <br />
    <cite className='text-xs'>
    ~from Serious Concerns
    </cite>
    </div>
    </div>
    </>
  );
};

export default Carousel;
