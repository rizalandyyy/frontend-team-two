import React from 'react';
import Link from 'next/link';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="p-4">
          <Link href="/" className="text-xl font-bold text-green-600 inline-block">
            WeRent
          </Link>
        </div>
        <div className="flex-grow flex items-center justify-center">
          {children}
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 bg-cover bg-center" 
           style={{ backgroundImage: "url('/testimage.webp')" }}>
      </div>
    </div>
  );
};

export default AuthLayout;