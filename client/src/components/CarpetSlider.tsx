"use client";
import { Slider } from "@material-tailwind/react";
 
export function CarpetSlider() {
  return (
    <div className="flex w-96 flex-col gap-8">
      <Slider color="amber" defaultValue={50} />
    </div>
  );
}