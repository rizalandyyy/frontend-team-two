import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Elegance</h3>
            <p className="text-gray-200">
              Curating exceptional attire for your most memorable occasions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-200 hover:text-white transition-colors">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="/auth/login" className="text-gray-200 hover:text-white transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/auth/signup" className="text-gray-200 hover:text-white transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <p className="text-gray-200 mb-2">Email: concierge@elegance.com</p>
            <p className="text-gray-200 mb-2">Phone: +62 812 3456 7890</p>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-6 text-center text-gray-200">
          <p>&copy; {new Date().getFullYear()} Elegance. Crafting memorable experiences through exceptional attire.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;