import React from 'react';
import AuthLayout from '@/components/layout/AuthLayout';
import SignupForm from '@/components/auth/SignupForm';

export default function SignupPage() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Create an Account</h1>
        <p className="text-center text-gray-600 mb-8">Please register your account by filling this form!</p>
        <SignupForm />
      </div>
    </AuthLayout>
  );
}