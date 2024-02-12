import type { Metadata } from 'next';
import '../globals.css';



export const metadata: Metadata = {
  title: 'Case Studeies | Netcode',
  description: 'Our Comprehensive Researches on Various Fields',
}

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
     
    </section>
  )
}