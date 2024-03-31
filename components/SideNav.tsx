import React from 'react'
import Link from 'next/link'

interface SideNavProps {
    className: string;
    showNav:boolean;
    setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideNav({ className, showNav, setShowNav }: SideNavProps) {
    const toggleNav = () => setShowNav(!showNav);

    return (
        <div className={`${className} fixed top-0 left-0 h-full z-10`}>
            <button
                onClick={toggleNav}
                className={`absolute top-1/2 z-30 bg-blue-500 text-white p-2 rounded-full 
                            transform -translate-y-1/2 transition-transform duration-300 ease-in-out
                            ${showNav ? 'left-64' : 'left-0'}`}
                aria-label="Toggle Navigation"
            >
                <i className={`fas ${showNav ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
            <nav className={`${showNav ? 'translate-x-0' : '-translate-x-full'}
                             absolute top-0 left-0 w-64 h-full bg-gray-800 text-white
                             transition-transform duration-300 ease-in-out`}>
                <ul className='p-5'>
                    <Link href='/dashboard'><li className="py-2 hover:bg-gray-700">Home</li></Link>
                    <Link href='/overview'><li className="py-2 hover:bg-gray-700">Overview</li></Link>
                    <Link href='/transactions'><li className="py-2 hover:bg-gray-700">Transactions</li></Link>
                    <Link href='/accounts'><li className="py-2 hover:bg-gray-700">Accounts</li></Link>
                    <Link href='/budgets'><li className="py-2 hover:bg-gray-700">Budgets</li></Link>
                    <Link href='/goals'><li className="py-2 hover:bg-gray-700">Goals</li></Link>
                    <Link href='/investments'><li className="py-2 hover:bg-gray-700">Investments</li></Link>
                    <Link href='/report'><li className="py-2 hover:bg-gray-700">Reports/Analytics</li></Link>
                    <Link href='/settings'><li className="py-2 hover:bg-gray-700">Settings</li></Link>
                    <Link href='/support'><li className="py-2 hover:bg-gray-700">Support/Help Center</li></Link>
                    <Link href='/profile'><li className="py-2 hover:bg-gray-700">Profile</li></Link>
                </ul>
            </nav>
        </div>
    );
}
