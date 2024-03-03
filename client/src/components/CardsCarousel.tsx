import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
} from "@mantine/core";

interface CardProps {
  image: string;
  title: string;
  category: string;
}

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Best forests to visit in North America",
      category: "nature",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Hawaii beaches review: better than you think",
      category: "beach",
    },
    // Add more data objects here...
  ];

  const slides = data.map((item, index) => (
    <Carousel.Slide key={index}>
      <Paper
        shadow='md'
        p='xl'
        radius='md'
        style={{ backgroundImage: `url(${item.image})` }}
        className='h-72 flex flex-col justify-between bg-cover bg-center'>
        <div>
          <Text className='text-white opacity-70 text-xs'>{item.category}</Text>
          <Title order={3} className='text-white font-semibold text-lg mt-xs'>
            {item.title}
          </Title>
        </div>
        <Button variant='white' color='dark' className='mt-xs'>
          Read article
        </Button>
      </Paper>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: "100%", sm: "50%" }}
      slideGap={{ base: rem(2), sm: "xl" }}
      align='start'
      slidesToScroll={mobile ? 1 : 2}>
      {slides}
    </Carousel>
  );
}

export default CardsCarousel;
