import type { Metadata } from 'next';
import '../globals.css';
import Footer from '@/components/Footer';


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
      <Footer/>
    </section>
  )
}