"use client";
import { DropzoneButton } from "@/components/DropzoneButton";
import CardsCarousel from "@/components/CardsCarousel";
import { PromptTextarea } from "@/components/PromptTextArea";
import { CarpetSlider } from "@/components/CarpetSlider";
import { CardDefault } from "@/components/CardDefault";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Page = () => {
  return (
    <div className="">
      <div className="px-16 py-12 w-[44vw] gap-10">
        <Card>
          <div className="flex-col p-4">
            <p className="pb-6">Enter Carpet Area</p>
            <CarpetSlider />
            <div className="flex justify-between pt-4">
              <p>100 sq ft</p>
              <p>4000 sq ft</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="px-16 py-8 flex h-[42vh] gap-64">
        <Card>
          <div className="p-4">
            <PromptTextarea />
          </div>
        </Card>
        <CardsCarousel />
      </div>
    </div>
    // <div className=" flex-col mt-16 ml-16" style={{ width: "80vw", height: "100vh" }}>
    //   <div className="flex gap-64" style={{ width: "80vw", height: "55vh" }}>
    //   <div style={{ width: "45vw", height: "55vh" }}>
    //     <Card>
    //       <div className="mt-4 ml-3">
    //         <PromptTextarea />
    //       </div>
    //     </Card>
    //     </div>
    //     <div style={{  width: "35vw", height: "55vh" }}>
    //       <CardsCarousel />
    //     </div>
    //   </div>
    //   <div style={{  width: "40vw", height: "45vh" }}>
    //   <Card className=" flex-col gap-10">
    //     <div className=" flex-col px-8">
    //       <p>Enter Carpet Area</p>
    //       <CarpetSlider />
    //       <div className="flex justify-between">
    //         <p>100 sq ft</p>
    //         <p>4000 sq ft</p>
    //       </div>
    //     </div>
    //   </Card>
    //   </div>
    // </div>
  );
};

export default Page;
