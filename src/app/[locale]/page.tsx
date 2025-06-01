"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSvgStore } from "@/lib/store";

import { AppTopbar } from "@/components/nav/app-topbar.component";
import { MainMenuOptGroup } from "@/components/nav/main-menu-opt-group.component";

export default function Home() {
  const router = useRouter();
  const svgContent = useSvgStore((state) => state.svgContent);

  useEffect(() => {
    if (svgContent) {
      router.replace("/editor");
    }
  }, [svgContent, router]);

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center p-6">
      <header>
        <div className="flex items-center justify-between">
          <div>SVG SpriteCraft</div>
          <AppTopbar />
        </div>
      </header>

      <main className="row-start-2 flex flex-col items-center gap-8">
        <MainMenuOptGroup />
      </main>

      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
        MIT 2025
      </footer>
    </div>
  );
}
