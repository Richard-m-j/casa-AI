
"use client";
import { MantineProvider } from "@mantine/core";
import { DropzoneButton } from "@/components/DropzoneButton";
import CardsCarousel from "@/components/CardsCarousel";
import { PromptTextarea } from "@/components/PromptTextArea";
import { CarpetSlider } from "@/components/CarpetSlider";

const Page = () => {
  return (
    <MantineProvider>
      <div className='flex justify-center items-center h-screen'>
        <div className='flex gap-8'>
          <div>
            <PromptTextarea />
            <div>
              <p>Enter Carpet Area</p>
            </div>   
            <CarpetSlider />
          </div>
          <div style={{ width: '512px', height: '512px' }}>
                <CardsCarousel />
          </div>
        </div>
      </div>
    </MantineProvider>
  );
};

export default Page;