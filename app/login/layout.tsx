import LoginRedirect from "@/components/custom/pages/login/loginRedirect"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <LoginRedirect />
      {children}
    </section>
  )
}
