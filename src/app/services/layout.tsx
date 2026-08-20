import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'From personal styling to corporate uniforms — every REGALIA service is crafted with the meticulous attention to detail that defines the House of June.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
