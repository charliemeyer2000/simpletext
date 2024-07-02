import DashboardRedirect from "@/components/custom/pages/dashboard/dashboardRedirect"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <DashboardRedirect />
            {children}
        </section>
    )
}
