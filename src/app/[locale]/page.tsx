import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { ThemeSwitcherButton } from "@/components/ui/theme-switcher-button.component";
import { LanguageSwitcher } from "@/components/ui/language-switcher.component";

import { MainMenuOptGroup } from "@/components/nav/main-menu-opt-group.component";

export default async function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center p-6">
      <header>
        <div className="flex items-center justify-between">
          <div>Logo</div>
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
        </div>
      </header>

      <main className="row-start-2 flex flex-col items-center gap-8">
        {/* TODO: Implement welcome page main menu */}
        <MainMenuOptGroup />
      </main>

      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
        MIT 2025
      </footer>
    </div>
  );
}
