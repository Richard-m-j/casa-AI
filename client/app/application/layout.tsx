"use client";

import { DefaultSidebar } from "@/components/ui/siderbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className="flex">
      <div className="flex">
        <DefaultSidebar />
        <main className="flex-grow">{children}</main>
      </div>
    </body>
  );
}
