"use client";

import * as React from "react";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeSwitcherButton() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const handleOnClick = () => {
    if (theme === "system") {
      setTheme(resolvedTheme === "light" ? "dark" : "light");
      return;
    }
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      className="cursor-pointer"
      variant="ghost"
      size="default"
      onClick={handleOnClick}
    >
      <IconSunFilled className="!size-6 scale-0 rotate-90 transition-all dark:scale-100 dark:-rotate-0" />
      <IconMoonFilled className="absolute !size-6 scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
