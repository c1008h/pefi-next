import React from 'react'
import { Layout } from '@/components'

export default function Dashboard() {
  return (
    <Layout>
    <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {/* Existing Widgets */}
            <div className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold text-gray-700">Account Balance</h2>
                <p className="text-gray-900 text-xl">$15,270.30</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold text-gray-700">Monthly Spending</h2>
                <p className="text-gray-900 text-xl">$2,450.50</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold text-gray-700">Investments</h2>
                <p className="text-gray-900 text-xl">$8,200.00</p>
            </div>
            
            {/* Recent Transactions Widget */}
            <div className="bg-white shadow rounded-lg p-4 col-span-1 md:col-span-2 lg:col-span-3">
                <h2 className="text-lg font-semibold text-gray-700">Recent Transactions</h2>
                {/* Transaction Table */}
            </div>

            {/* Goals Widget */}
            <div className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold text-gray-700">Financial Goals</h2>
                <div className="mt-2">
                    {/* Example Goal */}
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <h3 className="text-md font-medium text-gray-600">Vacation Fund</h3>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '55%' }}></div>
                            </div>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">$1,100/$2,000</span>
                    </div>
                    {/* Add more goals as needed */}
                </div>
            </div>

            {/* Budget Widget */}
            <div className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold text-gray-700">Budget Overview</h2>
                <div className="mt-2">
                    {/* Example Budget */}
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <h3 className="text-md font-medium text-gray-600">Groceries</h3>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">$375/$500</span>
                    </div>
                    {/* Add more budget categories as needed */}

                    
                </div>
                
            </div>

            <div className="mt-4 bg-white shadow rounded-lg p-4">
                    <h2 className="text-lg font-semibold text-gray-700">Net Worth Over Time</h2>
                    <div>
                        {/* Placeholder for graph */}
                        <p className="text-center text-gray-500">Graph showing net worth over time will be here</p>
                    </div>
                </div>
        </div>
    </div>
</Layout>
);
}
