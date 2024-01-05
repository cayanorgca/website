import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Cayan - Contact',
    description: "Get in Touch - We're Here to Assist You. Contact Cayan for help, volunteering and More.",
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
