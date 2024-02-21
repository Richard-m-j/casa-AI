"use client";
import { MantineProvider } from "@mantine/core";
import { DropzoneButton } from "@/components/DropzoneButton";
import Extrude from "@/components/Extrude";

const Page = () => {
  return (
    <MantineProvider>
      <div className='flex justify-center items-center h-screen'>
        <div className='flex gap-8'>
          <div>
            <DropzoneButton />
          </div>
          <div className='w-20 border-8'>
            <Extrude />
          </div>
        </div>
      </div>
    </MantineProvider>
  );
};

export default Page;
