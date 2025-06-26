import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Service | Bavarian Auto Werkz - BMW & Exotic Car Appointments',
  description: 'Schedule your BMW or exotic car service appointment online. Easy booking, expert technicians, and fast turnaround times. Book your appointment today.',
  keywords: 'book BMW service, schedule car appointment, BMW maintenance booking, exotic car service appointment, automotive service booking',
  openGraph: {
    title: 'Book Service | Bavarian Auto Werkz - BMW & Exotic Car Appointments',
    description: 'Schedule your BMW or exotic car service appointment online. Easy booking and expert service.',
    type: 'website',
  },
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}