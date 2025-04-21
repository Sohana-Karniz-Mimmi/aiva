"use client";
import React, { useState, useRef } from "react";
import { PrevArrow } from "@/icons/prevArrow";
import { NextArrow } from "@/icons/nextArrow";
import { sliders } from "@/mock/sliders";

const SolutionSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const slidesToShow = {
    base: 1,
    md: 1,
    lg: 2,
    xl: 3,
  };

  const nextSlide = () => {
    const newIndex =
      currentSlide >= sliders.length - slidesToShow.lg ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
    scrollToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      currentSlide === 0 ? sliders.length - slidesToShow.lg : currentSlide - 1;
    setCurrentSlide(newIndex);
    scrollToSlide(newIndex);
  };

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = 505 + 20;
      sliderRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="ml-auto flex gap-[13px] lg:gap-[20px] overflow-hidden snap-x snap-mandatory py-[40px] lg:py-[60px] scrollbar-hide pl-[16px] sm:pl-[24px] md:pl-[48px] xl:pl-0 w-[calc(100%-16px)] sm:w-[calc(100%-24px)] md:w-[calc(100%-48px)] xl:w-full max-w-[1338px]"
        // style={{ scrollBehavior: "smooth" }}
      >
        {sliders.map((slider, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start"
            id={`slide-${index}`}
          >
            <div className="flex flex-col w-[300px] lg:w-[505px] h-[300px] lg:h-[373px] p-[20px] lg:p-[30px] gap-[30px] lg:gap-[60px] bg-white rounded-[30px] lg:rounded-[50px]">
              <div className="flex justify-between items-center w-full">
                <h4>{slider.title}</h4>
                <div className="w-[40px] lg:w-[70px] h-[40px] lg:h-[70px] rounded-[8.059px] lg:rounded-[20px] bg-[#858BEC] shadow-[2.418px_-1.612px_0px_0px_#C1C5FF] lg:shadow-[4px_-4px_0px_0px_#C1C5FF] flex items-center justify-center">
                  {slider.icon}
                </div>
              </div>

              <p className="max-w-[260px] lg:max-w-[445px]">{slider.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <div className="custom_container flex justify-center md:justify-between items-center">
        {/* Dots */}
        <div className="flex gap-[5px] lg:gap-[4px]">
          {sliders.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                scrollToSlide(index);
              }}
              className={`w-[5px] lg:w-[10px] h-[5px] lg:h-[10px] rounded-full ${
                index === currentSlide
                  ? "bg-[#0F193E]"
                  : "bg-[rgba(15,25,62,0.2)]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrows*/}
        <div className="hidden md:flex gap-[6px]">
          <button
            onClick={prevSlide}
            className="p-4 rounded-[120px] bg-white"
            aria-label="Previous slide"
          >
            <PrevArrow />
          </button>
          <button
            onClick={nextSlide}
            className="p-4 rounded-[120px] bg-white"
            aria-label="Next slide"
          >
            <NextArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionSlider;
