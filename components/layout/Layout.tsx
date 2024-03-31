"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { SideNav } from '..';

export default function Layout({ 
    children 
}: {     
    children: React.ReactNode
}) {
    const [showNav, setShowNav] = useState<boolean>(true);

    return (
        <>
            <SideNav className="" showNav={showNav} setShowNav={setShowNav} />
            <div className={`transition-transform duration-300 ${showNav ? 'ml-64' : 'ml-0'}`}>
                {children}
            </div>
        </>
    )
}
