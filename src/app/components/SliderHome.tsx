"use client";
import Image from "next/image";
import { useState } from "react";

export const SliderHome = () => {
  // Supondo que você tenha um array de imagens para o slider
  const slides = [
    "/mizuno-mujin.jpg",
    "/max-90-gore-tex.jpg",
    // Adicione mais imagens conforme necessário
  ];

  // Estado para controlar o índice do slide atual
  const [currentSlide, setCurrentSlide] = useState(0);

  // Função para ir para o próximo slide
  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Função para voltar ao slide anterior
  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">SliderHome Page</h1>
    
      <div className="relative">
        {/* Container para os slides */}
        <div className="overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
             
            >
              <Image
                width={800}
                height={400}
                src={slide}
                alt={`Slide`}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Botões de navegação */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        >
          Anterior
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        >
          Próximo
        </button>
      </div>
    </div>
  );
};
