
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

function CompleteProfilePage() {
  const { phoneNumber, completeProfile } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    location: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    completeProfile({
      fullName: formData.fullName,
      location: formData.location,
      phone: phoneNumber,
      email: formData.email
    });
  };

  return (
    <div className="min-h-screen bg-green-300 flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        <Card>
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-2">Complete Your Profile</h2>
          <p className="text-center text-gray-600 mb-6">
            Help us personalize your experience
          </p>
          
          <form onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
            />
            
            <Input
              label="Location"
              name="location"
              placeholder="Select your location"
              value={formData.location}
              onChange={handleChange}
              required
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>}
            />
            
            <Input
              label="Phone Number"
              value={`+91 ${phoneNumber}`}
              readOnly
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>}
            />
            
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>}
            />
            
            <div className="mt-6">
              <Button
                type="submit"
                variant="primary"
                fullWidth
              >
                Complete Profile
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default CompleteProfilePage;
