'use client';

import React from 'react';
import Link from 'next/link';
import SearchBar from '../ui/SearchBar';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center">
        <Link href="/" className="text-xl font-bold text-green-600 mr-6">WeRent</Link>
        
        <div className="flex-grow mx-4">
          <SearchBar />
        </div>
        
        <div className="flex space-x-3">
          <Link href="/auth/login">
            <button className="px-3 py-1 text-sm rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 bg-transparent border border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500">
              Login
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="px-3 py-1 text-sm rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 bg-green-600 hover:bg-green-700 text-white focus:ring-green-00">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;