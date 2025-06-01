import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { children, ...rest } = props;
  return (
    <Sidebar variant="inset" {...rest}>
      <SidebarHeader className="h-13 justify-center pl-4">
        SVG SpriteCraft
      </SidebarHeader>
      <SidebarContent>{children}</SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
