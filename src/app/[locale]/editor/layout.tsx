import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/nav/app-sidebar.component";
import { AppTopbar } from "@/components/nav/app-topbar.component";

import { cn } from "@/lib/utils";

export default function Layout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar>{sidebar}</AppSidebar>
      <div className="flex w-full flex-col md:p-4 md:px-2 md:pb-2">
        <div className="mb-2 flex items-center justify-between px-4">
          <div></div>
          <AppTopbar />
        </div>
        <SidebarInset className={cn("rounded-xl shadow-sm")}>
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
