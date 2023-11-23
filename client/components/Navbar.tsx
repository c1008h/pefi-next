"use client"
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isLogged, setIsLogged] = React.useState(false)
  const router = useRouter();

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/transactions', label: 'Transactions' },
    { href: '/goals', label: 'Goals' },
    { href: '/finance', label: 'Finances' },
    { href: '/profile', label: 'Profile' },
  ];

  return (
    <nav className="container flex flex-row justify-center items-center bg-cyan-900 w-full m-0">
        <ul className='flex items-center space-x-4'>
            <li>Pefi</li>
            {isLogged ? (
              <>
                <Link href='/login'><li>Login</li></Link>
                <Link href='/signup'><li>Signup</li></Link>
              </>
              ) : (
                <>
                  {navLinks.map((link) => (
                    <li key={link.href} className={router.pathname === link.href ? 'active' : ''}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                  <li className="text-red-500">Logout</li>
                </>
              )
            }
        </ul>
    </nav>
  )
}
