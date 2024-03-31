"use client"
import React, { useState } from 'react'
import { Layout } from '@/components'
import transactions from '@/constants/example/transaction.json'

export default function Transactions() {
    const [selectedMonth, setSelectedMonth] = useState<Date>(new Date().getMonth() + 1);

    const handleMonthChange = (event: { target: { value: React.SetStateAction<Date>; }; }) => {
        setSelectedMonth(event.target.value);
    };

    return (
        <Layout>
            <div className="p-4">
                <h1 className="text-2xl font-bold text-gray-800">Transactions</h1>

                <div className="my-4 flex justify-between items-center">
                    <div>
                        <span className="text-lg font-semibold">Total Spent This Month:</span> $2,450.50
                        <br />
                        <span className="text-lg font-semibold">Total Earned This Month:</span> $3,500.00
                    </div>
                    <div>
                        <label htmlFor="month-select" className="mr-2">Filter by Month:</label>
                        <select id="month-select" value={selectedMonth} onChange={handleMonthChange}>
                            {/* Option values can be dynamic based on available data */}
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            {/* Add options for all months */}
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Date</th>
                                <th className="py-3 px-6 text-left">Description</th>
                                <th className="py-3 px-6 text-center">Amount</th>
                                <th className="py-3 px-6 text-center">Type</th>
                                <th className="py-3 px-6 text-center">Category</th>
                                <th className="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {transactions.map((transaction) => (
                                <tr className="border-b border-gray-200 hover:bg-gray-100" key={transaction.id}>
                                    <td className="py-3 px-6 text-left">{transaction.date}</td>
                                    <td className="py-3 px-6 text-left">{transaction.category}</td>
                                    <td className="py-3 px-6 text-center">{transaction.amount}</td>
                                    <td className="py-3 px-6 text-center">{transaction.type}</td>
                                    <td className="py-3 px-6 text-center">{transaction.category}</td>
                                    <td className="py-3 px-6 text-center">
                                        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}
