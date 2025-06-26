import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Bavarian Auto Werkz - BMW & Exotic Car Specialists',
  description: 'Meet the owner and team behind Bavarian Auto Werkz. 15+ years experience, owner operates twin-turbo Lamborghinis, BMW certified technicians.',
  keywords: 'BMW specialist, exotic car expert, automotive experience, twin turbo Lamborghini, BMW certified, performance builds',
  openGraph: {
    title: 'About Us | Bavarian Auto Werkz - BMW & Exotic Car Specialists',
    description: 'Meet the owner and team behind Bavarian Auto Werkz. 15+ years experience with BMW and exotic vehicles.',
    type: 'website',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}