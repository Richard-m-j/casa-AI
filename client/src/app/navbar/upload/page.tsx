"use client";
import { MantineProvider } from "@mantine/core";
import { DropzoneButton } from "@/components/DropzoneButton";
import { ImageViewer } from "@/components/ImageViewer";

const page = () => {
  return (
    <MantineProvider>
      <div className='flex justify-center items-center h-screen gap-4'>
        <div className='grid grid-cols-2 gap-8'>
          <DropzoneButton />
          <ImageViewer />
        </div>
      </div>
    </MantineProvider>
  );
};

export default page;
