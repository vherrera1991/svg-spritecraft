"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { IconWorld, IconCheck, IconSelector } from "@tabler/icons-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(locale);

  const languages = [
    {
      id: "en",
      title: "English",
    },
    {
      id: "es",
      title: "Español",
    },
    {
      id: "pt",
      title: "Português",
    },
  ];

  const currentLanguage = languages.find((el) => el.id === locale);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className="cursor-pointer" variant="ghost" size="default">
          <IconWorld className="!size-6" />
          {currentLanguage?.title}
          <IconSelector className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[130px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {languages.map((el) => (
                <CommandItem
                  key={el.id}
                  value={el.id}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    router.replace(
                      // @ts-expect-error -- TypeScript will validate that only known `params`
                      // are used in combination with a given `pathname`. Since the two will
                      // always match for the current route, we can skip runtime checks.
                      { pathname, params },
                      { locale: currentValue },
                    );
                  }}
                >
                  {el.title}
                  <IconCheck
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === el.id ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
