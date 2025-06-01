"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { IconEye, IconCode } from "@tabler/icons-react";

import { useSvgStore } from "@/lib/store";

import { Button } from "@/components/ui/button";

export default function Page() {
  const router = useRouter();
  const svgContent = useSvgStore((state) => state.svgContent);

  useEffect(() => {
    if (!svgContent) {
      router.replace("/");
    }
  }, [svgContent, router]);

  return (
    <>
      <nav className="flex w-full gap-2 border-b p-2">
        <Button variant="secondary" size="sm">
          <IconEye /> Preview
        </Button>
        <Button variant="ghost" size="sm">
          <IconCode /> Code
        </Button>
      </nav>
    </>
  );
}
