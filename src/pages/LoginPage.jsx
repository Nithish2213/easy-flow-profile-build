
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { AlertTriangle } from 'lucide-react';

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
    <div className="min-h-screen bg-green-300 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <Logo />
          <h2 className="text-2xl font-bold text-slate-800">Buyer Login</h2>
          <p className="text-slate-600">
            Enter your phone number to receive OTP
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="pl-12"
                required
                maxLength={10}
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600">
                +91
              </span>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-green-500 hover:bg-green-600"
            >
              <AlertTriangle className="w-5 h-5 mr-2" />
              Send OTP
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-600">
            By continuing, you agree to our{' '}
            <div className="flex justify-center gap-1">
              <a href="#" className="text-green-600 hover:underline">Terms of Service</a>
              <span>&amp;</span>
              <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;
