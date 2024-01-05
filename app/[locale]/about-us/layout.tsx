import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Cayan - About',
    description: "A non-profit youth organization and an open house for all youth with cultural diversity",
  }

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            {children}
        </>
    )
  }
