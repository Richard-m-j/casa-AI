"use client";
import { MantineProvider } from "@mantine/core";
import { DropzoneButton } from "@/components/DropzoneButton";
import Extrude from "@/components/Extrude";

const Page = () => {
  return (
    <MantineProvider>
      <div className='flex justify-center items-center h-screen'>
        <div className='grid grid-cols-2 gap-8'>
          <div className='col-span-1'>
            <DropzoneButton />
          </div>
          <div className='col-span-1'>
            <Extrude />
          </div>
        </div>
      </div>
    </MantineProvider>
  );
};

export default Page;
