"use client";

import { DefaultSidebar } from "@/components/ui/siderbar";

export default function AppLayout() {
  return (
    <div className="flex">
        <DefaultSidebar/>
        <div></div>
    </div>
  );
}
