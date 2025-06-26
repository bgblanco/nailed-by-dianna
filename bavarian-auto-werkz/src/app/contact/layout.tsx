import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Bavarian Auto Werkz - BMW & Exotic Car Service',
  description: 'Contact Bavarian Auto Werkz for BMW and exotic car service. Call (123) 456-7890, email, or visit our shop. Professional automotive service you can trust.',
  keywords: 'BMW service contact, exotic car repair contact, automotive service, BMW specialist phone, car repair quote',
  openGraph: {
    title: 'Contact Us | Bavarian Auto Werkz - BMW & Exotic Car Service',
    description: 'Contact Bavarian Auto Werkz for BMW and exotic car service. Professional automotive service you can trust.',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}