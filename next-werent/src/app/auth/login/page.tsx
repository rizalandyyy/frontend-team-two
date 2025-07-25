import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign In to Your Account</h1>
          <LoginForm />
        </div>
      </div>
    </MainLayout>
  );
}