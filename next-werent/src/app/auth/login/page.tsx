import React from 'react';
import AuthLayout from '@/components/layout/AuthLayout';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h1>
        <p className="text-center text-gray-600 mb-8">Hi, good to see you again! Please enter your details.</p>
        <LoginForm />
      </div>
    </AuthLayout>
  );
}