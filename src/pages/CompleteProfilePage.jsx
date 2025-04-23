
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { User, MapPin, Phone, Mail } from 'lucide-react';

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
    <div className="min-h-screen bg-green-300 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <Logo />
          <h2 className="text-2xl font-bold text-slate-800">Complete Your Profile</h2>
          <p className="text-slate-600">
            Help us personalize your experience
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Full Name</label>
              <div className="relative">
                <Input
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="pl-10"
                />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Location</label>
              <div className="relative">
                <Input
                  name="location"
                  placeholder="Select your location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="pl-10"
                />
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Phone Number</label>
              <div className="relative">
                <Input
                  value={`+91 ${phoneNumber}`}
                  readOnly
                  className="pl-10 bg-slate-50"
                />
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Email Address</label>
              <div className="relative">
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              </div>
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 mt-6"
            >
              Complete Profile
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CompleteProfilePage;
