import React, { useState } from 'react'
import { FiChevronDown, FiUser, FiSettings, FiLogOut, FiHelpCircle } from 'react-icons/fi'

const Header = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="w-1/4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">TESTWALE.AI</h1>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center">
          <nav className="hidden md:flex items-center space-x-6 bg-[#F0DDFF] px-8 py-2 rounded-full">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About Us
            </a>
          </nav>
        </div>

        <div className="w-1/4 flex items-center justify-end space-x-4">
          {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Login
          </button> */}
          
          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <FiUser className="w-4 h-4" />
              </div>
              <span className="hidden md:block">Hello, Samantha</span>
              <FiChevronDown className="w-4 h-4" />
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                  <FiUser className="w-4 h-4 mr-3" />
                  Profile
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                  <FiSettings className="w-4 h-4 mr-3" />
                  Settings
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                  <FiHelpCircle className="w-4 h-4 mr-3" />
                  Help
                </a>
                <hr className="my-2" />
                <a href="#" className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50">
                  <FiLogOut className="w-4 h-4 mr-3" />
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
