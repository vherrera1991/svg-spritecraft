"use client";

import Link from "next/link";

import { IconBrandGithub } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { ThemeSwitcherButton } from "@/components/ui/theme-switcher-button.component";
import { LanguageSwitcher } from "@/components/ui/language-switcher.component";

export function AppTopbar() {
  return (
    <nav className="flex gap-2">
      <LanguageSwitcher />

      <ThemeSwitcherButton />

      <Button asChild variant="ghost" size="default">
        <Link
          href="https://github.com/vherrera1991/svg-spritecraft"
          target="_blank"
        >
          <IconBrandGithub className="!size-6" />
        </Link>
      </Button>
    </nav>
  );
}
