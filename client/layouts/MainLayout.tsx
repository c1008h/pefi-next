import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='container m-0 p-0'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
