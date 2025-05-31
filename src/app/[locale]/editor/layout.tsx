export default function Layout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Left sidebar */}
      <div className="bg-muted/30 w-80 border-r">
        <div className="border-b p-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">SVG SpriteCraft</h2>
          </div>
        </div>
        <div className="p-4">{sidebar}</div>
      </div>

      {/* Main content area */}
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}
