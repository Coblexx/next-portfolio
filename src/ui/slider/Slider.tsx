"use client";

// components
import SliderItem from "./SliderItem";

// icons
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

// data
import slidesData from "@/slides.json";
import { useState } from "react";

export default function Slider() {
  const [currSlide, setCurrSlide] = useState(0);

  const slides = Object.entries(slidesData);
  const [title, { desc, link }] = slides[currSlide];

  function handleSlideChange(prev = false) {
    if (!prev) {
      setCurrSlide((id) => (id < slides.length - 1 ? id + 1 : 0));
    } else {
      setCurrSlide((id) => (id !== 0 ? id - 1 : slides.length - 1));
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          handleSlideChange(true);
        }}
      >
        <FiArrowLeft size={40} />
      </button>
      <div>
        <SliderItem title={title} desc={desc} link={link} />
      </div>
      <button
        onClick={() => {
          handleSlideChange();
        }}
      >
        <FiArrowRight size={40} />
      </button>
    </div>
  );
}
