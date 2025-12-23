// app/Dashboard/layout.tsx
"use client";

import Header from "./Dashboard-components/header";
import Sidebar from "./Dashboard-components/sidebar";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const hideHeader = pathname.includes("/Dashboard/Dinos/Trex");

    return (
        <main className="h-screen w-screen flex overflow-hidden">
            <aside className="shrink-0">
                <Sidebar />
            </aside>

            <section className="flex-1 flex flex-col">
                {!hideHeader && (
                    <header className="h-16 shrink-0">
                        <Header />
                    </header>
                )}

                <div className="flex-1 overflow-y-auto p-4">
                    {children}
                </div>
            </section>
        </main>
    );
}
