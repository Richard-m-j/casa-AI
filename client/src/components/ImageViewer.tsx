import { Card, Overlay, Button, Text } from "@mantine/core";

export function ImageViewer() {
  return (
    <Card
      radius='md'
      className='relative overflow-hidden bg-[#f3f9ff] rounded-md'>
      <Overlay className='absolute inset-0 bg-black opacity-55' zIndex={0} />

      <div className='p-6 text-white'>
        <Text size='lg' fw={700} className='text-2xl mb-2'>
          Plan & save
        </Text>

        <Text size='sm' className='text-base mb-4'>
          Save up to 25% at Fifth Season Hotels in Europe, the Middle East,
          Africa and Asia Pacific
        </Text>

        <Button
          className='bg-white text-dark'
          variant='white'
          color='dark'
          size='xs'>
          Book now
        </Button>
      </div>
    </Card>
  );
}
