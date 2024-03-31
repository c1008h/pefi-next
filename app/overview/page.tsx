import React from 'react'
import { Layout } from '@/components'

export default function Overview() {
  return (
      <Layout>
          <div className="p-4">
              <h1 className="text-2xl font-bold text-gray-800">Overview</h1>

              {/* Account Summary Section */}
              <div className="bg-white shadow rounded-lg p-4 mb-4">
                  <h2 className="text-lg font-semibold text-gray-700">Account Summary</h2>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* Example Account Summary */}
                      <div className="bg-gray-100 p-4 rounded-lg">
                          <h3 className="text-md font-semibold text-gray-600">Checking Account</h3>
                          <p className="text-lg font-bold text-gray-800">$3,250.30</p>
                      </div>
                      {/* Repeat for other accounts */}
                  </div>
              </div>

              {/* Recent Transactions Section */}
              <div className="bg-white shadow rounded-lg p-4 mb-4">
                  <h2 className="text-lg font-semibold text-gray-700">Recent Transactions</h2>
                  <div className="mt-2">
                      {/* Transactions list */}
                      <p className="text-sm text-gray-600">Grocery Store - <span className="text-red-500">-$50.00</span></p>
                      <p className="text-sm text-gray-600">Salary - <span className="text-green-500">+$3,000.00</span></p>
                      {/* More transactions */}
                  </div>
              </div>

              {/* Upcoming Bills Section */}
              <div className="bg-white shadow rounded-lg p-4 mb-4">
                  <h2 className="text-lg font-semibold text-gray-700">Upcoming Bills</h2>
                  <div className="mt-2">
                      {/* Bills list */}
                      <p className="text-sm text-gray-600">Electric Bill - <span className="text-red-500">Due 05/25</span></p>
                      <p className="text-sm text-gray-600">Mortgage - <span className="text-red-500">Due 05/30</span></p>
                      {/* More bills */}
                  </div>
              </div>

              {/* Budget Overview Section */}
              <div className="bg-white shadow rounded-lg p-4">
                  <h2 className="text-lg font-semibold text-gray-700">Budget Overview</h2>
                  <div className="mt-2">
                      {/* Budget summary */}
                      <p className="text-sm text-gray-600">Groceries - <span className="text-green-500">$300/$500</span></p>
                      <p className="text-sm text-gray-600">Entertainment - <span className="text-orange-500">$200/$250</span></p>
                      {/* More budget categories */}
                  </div>
              </div>
          </div>
      </Layout>
  )
}
