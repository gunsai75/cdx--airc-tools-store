import Navigation from "@/components/layout/navigation-menu";

export default function ToolsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Navigation />
          {children}
        </main>
    );
  }
  