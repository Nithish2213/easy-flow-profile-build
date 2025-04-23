
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
    <div className="min-h-screen bg-green-300 flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        <Card>
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-2">Buyer Login</h2>
          <p className="text-center text-gray-600 mb-6">
            Enter your phone number to receive OTP
          </p>
          
          <form onSubmit={handleSubmit}>
            <Input
              prefix={<span className="text-gray-500">+91</span>}
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            
            <Button
              variant="primary"
              fullWidth
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>}
            >
              Send OTP
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-600">
            By continuing, you agree to our
            <div className="flex justify-center space-x-1">
              <a href="#" className="text-green-600 hover:underline">Terms of Service</a>
              <span>&amp;</span>
              <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default LoginPage;
