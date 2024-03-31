import React from 'react'
import { Layout } from '@/components'

export default function Support() {
  return (
    <Layout>
    <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">Support/Help Center</h1>
        <div className="my-4">
            <div className="bg-white shadow rounded-lg p-4 mb-4">
                <h2 className="text-lg font-semibold text-gray-700">FAQs</h2>
                <div className="mt-2">
                    {/* List of frequently asked questions and answers */}
                    <p className="font-bold text-gray-600">How can I reset my password?</p>
                    <p className="text-gray-500">You can reset your password by going to Settings > Account Information > Change Password.</p>
                    {/* Repeat for other FAQs */}
                </div>
            </div>

            <div className="bg-white shadow rounded-lg p-4 mb-4">
                <h2 className="text-lg font-semibold text-gray-700">Troubleshooting Guide</h2>
                <div className="mt-2">
                    {/* Troubleshooting steps or common issues with solutions */}
                    <p className="font-bold text-gray-600">What should I do if I encounter an error while using the app?</p>
                    <p className="text-gray-500">Please try restarting the app. If the issue persists, contact our support team.</p>
                    {/* Repeat for other troubleshooting tips */}
                </div>
            </div>

            <div className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold text-gray-700">Contact Support</h2>
                <div className="mt-2">
                    <p className="text-gray-600">If you need further assistance, please reach out to us:</p>
                    <ul className="list-disc list-inside text-gray-500">
                        <li>Email: support@financeapp.com</li>
                        <li>Phone: 1-800-FINANCE (1-800-346-2623)</li>
                        <li>Live Chat: Available 24/7 on our website</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</Layout>
  )
}
