import React from 'react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='container m-0 p-0'>
      {children}
    </div>
  )
}
