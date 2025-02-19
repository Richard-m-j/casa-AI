"use client";
import { Slider } from "@material-tailwind/react";
import { useState } from "react";

export function CarpetSlider() {
  const [area, setArea] = useState(0);
  return (
    <div className="flex w-[33vw]">
      <Slider
        color="amber"
        max={4000}
        min={100}
        onChange={(event) => {
          setArea(Math.round(parseInt(event.target.value) / 100) * 100);
          console.log(area);
        }}
      />
    </div>
  );
}
