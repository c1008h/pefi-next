import React from 'react'
import { Layout } from '@/components'

export default function Accounts() {
  return (
    <Layout>
    <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">Accounts</h1>
        <div className="my-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Account
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example Account Card */}
            <div className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold text-gray-700">Checking Account</h2>
                <p className="text-gray-900 text-xl">$3,250.00</p>
                <div className="mt-2">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-xs">
                        View Transactions
                    </button>
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded text-xs">
                        Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs">
                        Delete
                    </button>
                </div>
            </div>
            
            {/* Repeat for each account */}
        </div>
    </div>
</Layout>
  )
}
