"use client";

// react
import { useState } from "react";

// icons
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

// components
import SliderItem from "./SliderItem";

// data
import slidesData from "@/slides.json";

export default function Slider() {
  const [currSlide, setCurrSlide] = useState(0);

  const slides = Object.entries(slidesData);
  const slide = slides[currSlide];

  function handleSlideChange(prev = false) {
    if (!prev) {
      setCurrSlide((id) => (id < slides.length - 1 ? id + 1 : 0));
    } else {
      setCurrSlide((id) => (id !== 0 ? id - 1 : slides.length - 1));
    }
  }

  return (
    <div className="flex h-full w-full justify-between py-20">
      <button
        className="my-auto p-6"
        onClick={() => {
          handleSlideChange(true);
        }}
      >
        <FiArrowLeft size={40} />
      </button>
      <div className="w-3/5 align-top">
        <SliderItem slide={slide} />
      </div>
      <button
        className="m-6 my-auto"
        onClick={() => {
          handleSlideChange();
        }}
      >
        <FiArrowRight size={40} />
      </button>
    </div>
  );
}
