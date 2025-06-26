import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | Bavarian Auto Werkz - BMW & Exotic Car Projects',
  description: 'View our BMW and exotic car projects. See performance builds, maintenance work, and owner\'s personal fleet including twin-turbo Lamborghinis.',
  keywords: 'BMW projects, exotic car builds, performance modifications, twin turbo Lamborghini, BMW gallery, automotive projects',
  openGraph: {
    title: 'Gallery | Bavarian Auto Werkz - BMW & Exotic Car Projects',
    description: 'View our BMW and exotic car projects. See performance builds and owner\'s personal fleet.',
    type: 'website',
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}