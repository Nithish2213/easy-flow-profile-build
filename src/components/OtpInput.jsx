
import React, { useState, useRef, useEffect } from 'react';

function OtpInput({ length = 6, onComplete }) {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // Allow only one digit
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Check if we've filled the current box and there is a next box
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Check if the OTP is complete
    const joinedOtp = newOtp.join('');
    if (joinedOtp.length === length) {
      onComplete(joinedOtp);
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to previous input on backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, length);
    
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length; i++) {
      if (i < length) {
        newOtp[i] = pastedData[i];
        if (inputRefs.current[i]) {
          inputRefs.current[i].value = pastedData[i];
        }
      }
    }

    setOtp(newOtp);
    
    // Focus on the next empty input or the last one
    const focusIndex = Math.min(pastedData.length, length - 1);
    if (inputRefs.current[focusIndex]) {
      inputRefs.current[focusIndex].focus();
    }

    // Check if OTP is complete after paste
    const joinedOtp = newOtp.join('');
    if (joinedOtp.length === length) {
      onComplete(joinedOtp);
    }
  };

  return (
    <div className="flex gap-2">
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg"
        />
      ))}
    </div>
  );
}

export default OtpInput;
