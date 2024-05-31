import Sidebar from "@/components/Sidebar/Sidebar";
import DashboardNavbar from "@/components/navbar/DashboardNavbar";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Dashboard",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="main flex w-full h-full ">

            <div className="relative">

                <Sidebar />
            </div>
            <main className="flex-grow flex gap-5 flex-col  p-6">
                <DashboardNavbar />

                {children}

            </main>
        </div>
    );
}