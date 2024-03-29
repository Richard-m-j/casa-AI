import { useRef } from "react";
import { Text, Group, Button, useMantineTheme } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";

export function DropzoneButton() {
  const openRef = useRef<() => void>(null);

  return (
    <div className='flex justify-center items-center border-dotted border-2 border-[#b69865] p-4 h-[60vh]'>
      <Dropzone
        openRef={openRef}
        onDrop={() => {}}
        className='flex align-middle rounded-md'
        radius='md'
        accept={[MIME_TYPES.pdf]}
        maxSize={30 * 1024 ** 2}>
        <div className='pointer-events-none w-300 h-1500'>
          <Group justify='center' className='w-300 h-450'>
            <Dropzone.Accept>
              <IconDownload className='w-12 h-12 text-blue-500' stroke={1.5} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX className='w-12 h-12 text-red-500' stroke={1.0} />
            </Dropzone.Reject>
          </Group>

          <Text className='font-bold text-lg mt-4'>
            <Dropzone.Accept>Drop files here</Dropzone.Accept>
            <Dropzone.Reject>svg file less than 30mb</Dropzone.Reject>
            <Dropzone.Idle>Upload building plan</Dropzone.Idle>
          </Text>
          <Text className='text-sm mt-2 text-gray-500'>
            Drag'n'drop files here to upload. We can accept only <i>.svg</i>{" "}
            files that are less than 30mb in size.
          </Text>
        </div>
        <Dropzone.Idle>
          <div className='flex flex-col items-center justify-center'>
            <IconCloudUpload className='w-12 h-12' stroke={1.2} />
            <Button
              className='w-40 left-1/2 bottom-5 bg-[#B69865] text-white rounded-md'
              size='md'
              radius='xl'
              onClick={() => openRef.current?.()}>
              Upload Plan
            </Button>
          </div>
        </Dropzone.Idle>
      </Dropzone>
    </div>
  );
}
