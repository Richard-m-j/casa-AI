"use client";
import { Slider } from "@material-tailwind/react";
 
export function CarpetSlider() {
  return (
    <div className="flex w-[33vw]">
      <Slider color="amber" defaultValue={50} />
    </div>
  );
}