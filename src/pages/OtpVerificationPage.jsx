
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Lock, ArrowLeft } from 'lucide-react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../components/ui/input-otp";

function OtpVerificationPage() {
  const { phoneNumber, verifyOTP } = useAuth();
  const [otp, setOtp] = useState("");
  const [seconds, setSeconds] = useState(30);
  
  useEffect(() => {
    const timer = seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);
  
  const resendOTP = () => {
    setSeconds(30);
  };
  
  const handleComplete = (value) => {
    verifyOTP(value);
  };

  const maskedPhone = phoneNumber ? `+91 •••••${phoneNumber.slice(-5)}` : "";

  return (
    <div className="min-h-screen bg-green-300 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <Logo />
          <h2 className="text-2xl font-bold text-slate-800">Verify Your Phone</h2>
          <p className="text-slate-600">Enter the 6-digit code sent to</p>
          <p className="font-medium text-slate-800">{maskedPhone}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center my-6">
            <InputOTP
              value={otp}
              onChange={setOtp}
              maxLength={6}
              onComplete={handleComplete}
            >
              <InputOTPGroup>
                {Array.from({ length: 6 }).map((_, i) => (
                  <InputOTPSlot key={i} index={i} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>
          
          <div className="text-center text-sm text-slate-600">
            Resend code in{" "}
            {seconds > 0 ? (
              <span>{seconds}s</span>
            ) : (
              <button 
                onClick={resendOTP} 
                className="text-green-600 font-medium hover:underline"
              >
                Resend code
              </button>
            )}
          </div>
          
          <Button 
            onClick={() => verifyOTP(otp)}
            className="w-full bg-green-500 hover:bg-green-600"
          >
            <Lock className="w-5 h-5 mr-2" />
            Verify & Continue
          </Button>
          
          <Link 
            to="/" 
            className="flex items-center justify-center text-slate-600 hover:text-slate-800 mt-4"
          >
            <ArrowLeft className="w-5 h-5 mr-1" />
            Back to Login
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

export default OtpVerificationPage;
