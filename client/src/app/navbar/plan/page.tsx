"use client";
import { MantineProvider } from "@mantine/core";
import CardsCarousel from "@/components/CardsCarousel";
import SliderLabel from "@/components/SliderLabel";
const Page = () => {
  return (
    <MantineProvider>
      <div className='flex justify-center items-center h-screen'>
        <div className='flex gap-8'>
          <div className='width=540px border-4'>
            <CardsCarousel />
          </div>
        </div>
      </div>
    </MantineProvider>
  );
};

export default Page;
