
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

function LoginPage() {
  const [phone, setPhone] = useState("");
  const { loginWithPhone } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.trim()) {
      loginWithPhone(phone);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>
          
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Buyer Login</h2>
          <p className="text-center text-gray-600 mb-8">
            Enter your phone number to receive OTP
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              prefix={<span className="text-gray-500">+91</span>}
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>}
            />
            
            <Button
              variant="primary"
              fullWidth
              type="submit"
            >
              Send OTP
            </Button>
          </form>
          
          <div className="mt-8 text-center text-sm text-gray-600">
            By continuing, you agree to our
            <div className="flex justify-center gap-1 mt-1">
              <a href="#" className="text-green-600 hover:text-green-700 hover:underline">Terms of Service</a>
              <span>&amp;</span>
              <a href="#" className="text-green-600 hover:text-green-700 hover:underline">Privacy Policy</a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default LoginPage;
