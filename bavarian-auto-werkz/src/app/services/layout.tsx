import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BMW & Exotic Car Services | Bavarian Auto Werkz',
  description: 'Professional BMW maintenance, performance tuning, and exotic car service. Factory-trained technicians, genuine parts, and expert care for your high-performance vehicle.',
  keywords: 'BMW service, exotic car repair, performance tuning, BMW maintenance, Lamborghini service, Ferrari repair, McLaren service, automotive performance',
  openGraph: {
    title: 'BMW & Exotic Car Services | Bavarian Auto Werkz',
    description: 'Professional BMW maintenance, performance tuning, and exotic car service.',
    type: 'website',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}