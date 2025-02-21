import SidebarNavigation from "@/components/layout/sidebarnavigation";



export default function ToolsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main>
     {children}
   </main>
  );
}
