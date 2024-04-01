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
    <div className="">
      <div className="px-16 py-12 w-[44vw] gap-10">
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
      </div>
      <div className="px-16 py-8 flex h-[42vh] gap-64">
        <Card>
          <div className="p-4">
            <PromptTextarea />
          </div>
        </Card>
        <CardsCarousel />
      </div>
    </div>
  );
};

export default Page;