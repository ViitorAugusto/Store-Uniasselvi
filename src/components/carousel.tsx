import { useState, useEffect } from "react";
import Image from "next/image";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/banners/carousel-1.png",
    "/banners/carousel-2.png",
    "/banners/carousel-3.png",
    "/banners/carousel-4.png",
    "/banners/carousel-5.png",
    "/banners/carousel-6.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-lg">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-linear ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index}`}
            quality={80}
            className=" object-cover bg-cover bg-center"
            width={1920}
            height={1080}
          />
        </div>
      ))}
    </div>
  );
}
