import SidebarNavigation from "@/components/layout/sidebarnavigation";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <SidebarNavigation children={children} />
        </main>
    )
}