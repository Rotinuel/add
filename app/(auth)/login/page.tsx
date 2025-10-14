'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    remember: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setMessage('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Something went wrong');
      setMessage(isLogin ? 'Login successful!' : 'Registration successful!');
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: resetEmail }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error sending reset link');
      setMessage('Password reset link sent to your email.');
      setShowReset(false);
      setResetEmail('');
    } catch (err: any) {
      setMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* ===== LEFT SIDE IMAGE ===== */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <Image
          src="/ADDHNI.png" // replace with your image path in /public
          alt="Login background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white px-6">
          <h2 className="text-3xl font-semibold mb-2">Welcome Back!</h2>
          <p className="text-center text-sm md:text-base max-w-md">
            {isLogin
              ? 'Access your account and continue where you left off.'
              : 'Join our platform and start exploring today.'}
          </p>
        </div>
      </div>

      {/* ===== RIGHT SIDE FORM ===== */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-green-50 to-green-50">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 relative">
          <h2 className="text-2xl font-semibold text-center mb-6">
            {isLogin ? 'Login to your Abuja Detty December Account' : 'Create a new Abuja Detty December Account'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-400"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* REMEMBER + FORGOT PASSWORD */}
            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={form.remember}
                    onChange={handleChange}
                    className="accent-green-600"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  onClick={() => setShowReset(true)}
                  className="text-green-600 hover:underline font-medium"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition disabled:opacity-50"
            >
              {loading ? 'Processing...' : isLogin ? 'Login' : 'Register'}
            </button>
          </form>

          {/* TOGGLE MODE */}
          <p className="text-center mt-4 text-sm">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={toggleMode}
              className="text-green-600 hover:underline font-medium"
              type="button"
            >
              {isLogin ? 'Sign up' : 'Login'}
            </button>
          </p>

          {message && (
            <p className="text-center mt-4 text-sm text-gray-700">{message}</p>
          )}

          {/* FORGOT PASSWORD MODAL */}
          {showReset && (
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl p-6 shadow-inner">
              <h3 className="text-lg font-semibold mb-4">Reset your password</h3>
              <form onSubmit={handlePasswordReset} className="w-full space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-400"
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700"
                >
                  Send reset link
                </button>
              </form>
              <button
                onClick={() => setShowReset(false)}
                className="mt-4 text-sm text-gray-600 hover:underline"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
