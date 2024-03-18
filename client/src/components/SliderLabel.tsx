import { RangeSlider } from "@mantine/core";

export function SliderLabel() {
  return (
    <RangeSlider
      labelAlwaysOn
      defaultValue={[20, 60]}
      classNames={{
        root: "relative",
        label:
          "top-0 h-7 leading-7 w-8 p-0 flex justify-center items-center font-bold bg-transparent",
        thumb: "bg-blue-500 h-7 w-8 border-none",
      }}
    />
  );
}

export default SliderLabel;
