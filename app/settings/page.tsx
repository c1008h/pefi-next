import React, { useContext } from 'react';
import { Layout } from '@/components'

export default function Settings() {
  // const { theme, setTheme } = useContext(ThemeContext);

  // const toggleTheme = () => {
  //     setTheme(theme === 'dark' ? 'light' : 'dark');
  // };

  return (
      <Layout>
          <div className="p-4">
              <h1 className="text-2xl font-bold text-gray-800">Settings</h1>

              {/* Account Information Section */}
              <div className="bg-white shadow rounded-lg p-4 mb-4">
                  <h2 className="text-lg font-semibold text-gray-700">Account Information</h2>
                  <div className="mt-2">
                      {/* Placeholder for account information form */}
                      <p>Email: user@example.com</p>
                      <p>Username: user123</p>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm mt-2">
                          Edit
                      </button>
                  </div>
              </div>

              {/* Password Change Section */}
              <div className="bg-white shadow rounded-lg p-4 mb-4">
                  <h2 className="text-lg font-semibold text-gray-700">Change Password</h2>
                  <div className="mt-2">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm">
                          Change Password
                      </button>
                  </div>
              </div>

              {/* Notification Settings */}
              <div className="bg-white shadow rounded-lg p-4 mb-4">
                  <h2 className="text-lg font-semibold text-gray-700">Notifications</h2>
                  <div className="mt-2">
                      <label className="inline-flex items-center mt-3">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" checked />
                          <span className="ml-2 text-gray-700">Receive email notifications</span>
                      </label>
                  </div>
              </div>

              {/* Security Settings */}
              <div className="bg-white shadow rounded-lg p-4">
                  <h2 className="text-lg font-semibold text-gray-700">Security</h2>
                  <div className="mt-2">
                      <label className="inline-flex items-center mt-3">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                          <span className="ml-2 text-gray-700">Enable two-factor authentication</span>
                      </label>
                  </div>
              </div>
 {/* Theme Toggle Section */}
 <div className="bg-white shadow rounded-lg p-4 mb-4">
                    <h2 className="text-lg font-semibold text-gray-700">Appearance</h2>
                    <div className="mt-2">
                        <label className="inline-flex items-center cursor-pointer">
                            <span className="mr-2 text-gray-700">Dark Mode</span>
                            <input 
                                type="checkbox" 
                                className="form-toggle" 
                                // checked={theme === 'dark'} 
                                // onChange={toggleTheme} 
                            />
                        </label>
                    </div>
                </div>
              {/* More settings as needed */}
          </div>
      </Layout>
  )
}
