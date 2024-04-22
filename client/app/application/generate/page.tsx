"use client";

import CardsCarousel from "@/components/ui/CardsCarousel";
import { PromptTextarea } from "@/components/ui/PromptTextArea";
import { useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Slider,
} from "@material-tailwind/react";

const Page = () => {
  const [prompt, setPrompt] = useState("");
  const [area, setArea] = useState(0);
  const [image64, setImage64] = useState("");
  async function CallBack(text: string) {
    setPrompt(text);

    try {
      const response = await fetch("http://127.0.0.1:5000/get_image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: prompt + "of area " + area + " sq ft",
        }),
      });
      const data = await response.json();
      setImage64(data.image);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className='grid grid-rows-2 grid-cols-2 gap-40 px-10 py-10'>
      <div className='px-16 py-12 w-[44vw] gap-8 grid grid-rows-2'>
        <Card>
          <div className='flex-col p-4'>
            <p className='pb-6'>Enter Carpet Area</p>
            <Slider
              color='amber'
              max={4000}
              min={100}
              onChange={(event) => {
                setArea(Math.round(parseInt(event.target.value) / 100) * 100);
              }}
            />
            <div className='flex justify-between pt-4'>
              <p>100 sq ft</p>
              <p>4000 sq ft</p>
            </div>
          </div>
        </Card>
        <Card>
          <PromptTextarea handleCallBack={CallBack} />
        </Card>
      </div>
      <div className='row-span-1 col-span-1'>
        <CardsCarousel image={image64} />
      </div>
    </div>
  );
};

export default Page;
