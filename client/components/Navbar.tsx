import Link from 'next/link';
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li>Pefi</li>

            <Link href='/dashboard'><li>Dashboard</li> </Link>
            <Link href='/transaction'><li>Transactions</li></Link>
            <Link href='/goals'><li>Goals</li></Link>
            <Link href='/finance'><li>Finances</li></Link>
            <Link href='/profile'><li>Profile</li></Link>

            <Link href='/login'><li>Login</li></Link>
            <Link href='/signup'><li>Signup</li></Link>
        </ul>
    </nav>
  )
}
