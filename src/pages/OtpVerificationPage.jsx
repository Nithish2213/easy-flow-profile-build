
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';
import Card from '../components/Card';
import Button from '../components/Button';
import OtpInput from '../components/OtpInput';

function OtpVerificationPage() {
  const { phoneNumber, verifyOTP } = useAuth();
  const [seconds, setSeconds] = useState(30);
  
  useEffect(() => {
    const timer = seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);
  
  const resendOTP = () => {
    // In a real app, this would call an API to resend OTP
    setSeconds(30);
  };
  
  const handleVerify = (otp) => {
    verifyOTP(otp);
  };

  return (
    <div className="min-h-screen bg-green-300 flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        <Card>
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-2">Verify Your Phone</h2>
          <p className="text-center text-gray-600 mb-4">
            Enter the 6-digit code sent to
          </p>
          <p className="text-center font-medium mb-6">
            +91 •••••{phoneNumber.slice(-5)}
          </p>
          
          <div className="flex justify-center mb-6">
            <OtpInput length={6} onComplete={handleVerify} />
          </div>
          
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600">
              Resend code in {seconds}
              {seconds === 0 && (
                <button 
                  onClick={resendOTP} 
                  className="ml-1 text-green-600 font-medium hover:underline"
                >
                  Resend code
                </button>
              )}
            </p>
          </div>
          
          <Button
            variant="primary"
            fullWidth
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
            onClick={() => verifyOTP("123456")}
          >
            Verify &amp; Continue
          </Button>
          
          <div className="mt-6 text-center">
            <Link to="/" className="flex items-center justify-center text-gray-600 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left mr-1"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
              Back to Login
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default OtpVerificationPage;
