"use client";

import { Carousel, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import Img1 from "@/public/images/casaHouse3_20230913050406_e000196_01.png";
import Img2 from "@/public/images/casaHouse3_20230913050406_e000196_01.png";
import Img3 from "@/public/images/casaHouse3_20230913051208_e000217_01.png";

export function CardsCarousel() {
  return (
    <Carousel
      className="rounded-xl w-full h-full"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="orange"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="orange"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <div className="h-full w-full">
        <Image src={Img1} alt="image 1" className="h-full w-full" />
      </div>
      <div className="h-full w-full">
        <Image src={Img2} alt="image 1" className="h-full w-full" />
      </div>
      <div className="h-full w-full">
        <Image src={Img3} alt="image 1" className="h-full w-full" />
      </div>
      <div className="h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </div>
    </Carousel>
  );
}

export default CardsCarousel;
