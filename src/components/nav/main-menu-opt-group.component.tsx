"use client";

import { useTranslations } from "next-intl";
import {
  IconLinkPlus,
  IconUpload,
  IconClipboard,
  IconSparkles,
} from "@tabler/icons-react";

import { useSvgStore } from "@/lib/store";

import { Card, CardContent } from "@/components/ui/card";

export function MainMenuOptGroup() {
  const t = useTranslations("HomePage");
  const { setSvg } = useSvgStore();

  const mainMenuItems = [
    {
      title: t("menu_create_from_scratch_label"),
      desc: t("menu_create_from_scratch_desc"),
      icon: IconSparkles,
      onClick: () => {
        setSvg(
          `<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" style="display: none;"></svg>`,
        );
      },
    },
    {
      title: t("menu_open_from_file_label"),
      desc: t("menu_open_from_file_desc"),
      icon: IconUpload,
      onClick: () => null,
    },
    {
      title: t("menu_open_from_url_label"),
      desc: t("menu_open_from_url_desc"),
      icon: IconLinkPlus,
      onClick: () => null,
    },

    {
      title: t("menu_open_from_clipboard_label"),
      desc: t("menu_open_from_clipboard_desc"),
      icon: IconClipboard,
      onClick: () => null,
    },
  ];

  return (
    <Card className="w-md p-0">
      <CardContent className="p-0">
        {mainMenuItems.map((el, index) => (
          <a
            key={index}
            href="#"
            className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex border-b p-4 text-sm leading-tight whitespace-nowrap first:rounded-t-lg last:rounded-b-lg last:border-b-0"
            onClick={(e) => {
              e.preventDefault();
              el.onClick();
            }}
          >
            <div className="flex items-center gap-3">
              <el.icon size={32} />
              <div className="flex flex-col items-start gap-2">
                <span className="font-medium">{el.title}</span>
                <span className="text-xs whitespace-break-spaces">
                  {el.desc}
                </span>
              </div>
            </div>
          </a>
        ))}
      </CardContent>
    </Card>
  );
}
