import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import SignupForm from '@/components/auth/SignupForm';

export default function SignupPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Create an Account</h1>
          <SignupForm />
        </div>
      </div>
    </MainLayout>
  );
}