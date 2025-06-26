import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BMW Code Checker | Bavarian Auto Werkz | Instant BMW Diagnostic',
  description: 'Free BMW error code checker with instant explanations, repair suggestions, and cost estimates. Professional BMW diagnostic database built by BMW specialists.',
  keywords: 'BMW codes, BMW error codes, BMW diagnostic, P0171, P0300, BMW scanner, BMW repair, BMW troubleshooting',
  openGraph: {
    title: 'BMW Code Checker | Instant BMW Diagnostic Tool',
    description: 'Free BMW error code checker with professional explanations and repair suggestions.',
    type: 'website',
  },
}

export default function CodeCheckerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}