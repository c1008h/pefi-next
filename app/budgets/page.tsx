import React from 'react'
import { Layout } from '@/components'

export default function Budgets() {
  return (
    <Layout>
    <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">Budget</h1>
        <div className="my-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Budget
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example Budget Category Card */}
            <div className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold text-gray-700">Groceries</h2>
                <p className="text-gray-900 text-xl">$300 / $500</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <div className="mt-2 flex justify-between">
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded text-xs">
                        Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs">
                        Delete
                    </button>
                </div>
            </div>
            
            {/* Repeat for each budget category */}
        </div>
    </div>
</Layout>
  )
}
