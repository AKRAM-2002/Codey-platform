import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/codey-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center">
              <img src={Logo} className="logo" alt="Codey Logo" />
              <h1 className="ml-2 text-2xl font-bold text-black">Codey</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-green-500 border-b border-green-500 font-semibold">
                Home
              </Link>
              {['Teams', 'Events', 'Programs', 'Donate'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-800 hover:text-green-500 hover:-translate-y-0.5 transition-all duration-200 font-semibold"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Search and CTA Section */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaSearch className="text-gray-800 w-4 h-4" />
              </button>
              <button className="bg-green-500 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-green-600 transition-colors duration-200">
                <span>Join Us</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="bg-gray-100 p-3 rounded-full"
              >
                <FaSearch className="text-gray-800 w-4 h-4" />
              </button>
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-gray-600 p-2"
              >
                {isMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden bg-white border-t`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className="block px-4 py-2 text-green-500 font-semibold"
            >
              Home
            </Link>
            {['Teams', 'Events', 'Programs', 'Donate'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block px-4 py-2 text-gray-800 hover:text-green-500 font-semibold"
              >
                {item}
              </Link>
            ))}
            <div className="mt-4 flex items-center space-x-4 px-4">
              <button className="bg-green-500 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-green-600 transition-colors duration-200 w-full justify-center">
                <span>Join Us</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Search</h2>
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={() => setIsSearchOpen(false)}
              >
                <FaTimes />
              </button>
            </div>
            <input
              type="text"
              placeholder="Search courses, events, programs..."
              className="w-full border rounded-lg p-3 mb-4"
            />
            <div className="text-center text-gray-600">No results found.</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
