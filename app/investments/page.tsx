import React from 'react'
import { Layout } from '@/components'

export default function Investments() {
  return (
    <Layout>
    <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">Investments</h1>
        <div className="my-4 flex justify-between items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Investment
            </button>
            <div>
                <label htmlFor="investment-filter" className="mr-2">Filter by:</label>
                <select id="investment-filter" className="rounded">
                    <option value="all">All</option>
                    <option value="stocks">Stocks</option>
                    <option value="bonds">Bonds</option>
                    <option value="funds">Funds</option>
                    <option value="others">Others</option>
                </select>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example Investment Card */}
            <div className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold text-gray-700">Tech Stock Fund</h2>
                <p className="text-gray-900 text-xl">$15,000</p>
                <div className="mt-2">
                    <div className="text-sm text-gray-600">Yearly Growth: <span className="text-green-500">+5%</span></div>
                    <div className="text-sm text-gray-600">Risk Level: <span className="text-yellow-500">Medium</span></div>
                </div>
                <div className="mt-2 flex justify-between">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-xs">
                        View Details
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs">
                        Sell
                    </button>
                </div>
            </div>
            
            {/* Repeat for each investment */}
        </div>
    </div>
</Layout>
  )
}
