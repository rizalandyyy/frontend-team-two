'use client';

import React from 'react';
import Link from 'next/link';
import SearchBar from '../ui/SearchBar';
import Button from '../ui/Button';

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
            <Button variant="outline" size="sm">Login</Button>
          </Link>
          <Link href="/auth/signup">
            <Button variant="primary" size="sm">Register</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;