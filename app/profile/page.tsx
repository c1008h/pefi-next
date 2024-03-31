import React from 'react'
import { Layout } from '@/components'

export default function Profile() {
  return (
    <Layout>
    <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        <div className="bg-white shadow rounded-lg p-4 mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Personal Information</h2>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Personal information form fields */}
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="fullName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="John Doe" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="john.doe@example.com" />
                </div>
                {/* Additional fields as needed */}
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save Changes
            </button>
        </div>

        {/* Security Settings */}
        <div className="bg-white shadow rounded-lg p-4 mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Security</h2>
            <div className="mt-2">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                    Change Password
                </button>
            </div>
        </div>

        {/* Other settings or information sections */}
    </div>
</Layout>
  )
}
