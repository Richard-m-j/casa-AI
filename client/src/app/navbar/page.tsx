"use client";
import { MantineProvider } from "@mantine/core";
import { DropzoneButton } from "@/components/DropzoneButton";
import { ImageViewer } from "@/components/ImageViewer";

const page = () => {
  return (
    <div className='flex p-8 justify-center items-center h-screen gap-4'>
      <MantineProvider>
        <div className='grid grid-cols-2 gap-8'>
          <DropzoneButton />
          <ImageViewer />
        </div>
      </MantineProvider>
    </div>
  );
};

export default page;
