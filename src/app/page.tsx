import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { ThemeSwitcherButton } from "@/components/ui/theme-switcher-button.component";

export default function Home() {
  return (
    <>
      <header>
        <div className="flex items-center justify-between p-6">
          <div>Logo</div>
          <nav className="flex gap-2">
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

      <main></main>
    </>
  );
}
