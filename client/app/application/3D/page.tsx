import React from "react";

import DropZoneButton from "@/components/ui/DropZoneButton";
import Extrude from "@/components/ui/Extrude";

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-rows-1 grid-cols-2 gap-8">
        <div className="col-span-1">
          <DropZoneButton />
        </div>
        <div style={{ width: "50px", height: "50px" }} col-span-1>
          <Extrude />
        </div>
      </div>
    </div>
  );
};

export default Page;
