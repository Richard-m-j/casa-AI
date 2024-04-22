"use client";

import CardsCarousel from "@/components/ui/CardsCarousel";
import { PromptTextarea } from "@/components/ui/PromptTextArea";
import { CarpetSlider } from "@/components/ui/CarpetSlider";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Page = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-40 px-10 py-10">
      <div className="px-16 py-12 w-[44vw] gap-8 grid grid-rows-2">
        <Card>
          <div className="flex-col p-4">
            <p className="pb-6">Enter Carpet Area</p>
            <CarpetSlider />
            <div className="flex justify-between pt-4">
              <p>100 sq ft</p>
              <p>4000 sq ft</p>
            </div>
          </div>
        </Card>
        <Card>
          <PromptTextarea />
        </Card>
      </div>
      <div className="row-span-1 col-span-1">
        <CardsCarousel />
      </div>
    </div>
  );
};

export default Page;
