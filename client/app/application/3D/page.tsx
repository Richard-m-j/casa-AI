import React from "react";

import DropZoneButton from "@/components/ui/DropZoneButton";
import Extrude from "@/components/ui/Extrude";

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-rows-1 grid-cols-2 gap-8">
        <div className="col-span-1 w-[30rem] px-16 py-10">
          <DropZoneButton />
        </div>
        <div className="col-span-1">
          <div style={{ width: "100px", height: "400px" }}>
            <Extrude />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
