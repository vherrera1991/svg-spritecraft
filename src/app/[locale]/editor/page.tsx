"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSvgStore } from "@/lib/store";

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
      <h1>Editor</h1>
    </>
  );
}
