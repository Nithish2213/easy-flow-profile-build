
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRequests } from '../context/RequestContext';
import Logo from '../components/Logo';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import TextArea from '../components/TextArea';

function PostRequestPage() {
  const { addRequest } = useRequests();
  const [formData, setFormData] = useState({
    cropName: '',
    quantity: '',
    location: '',
    requiredDate: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRequest({
      cropName: formData.cropName,
      quantity: `${formData.quantity} kg`,
      quantityValue: parseInt(formData.quantity, 10),
      location: formData.location,
      requiredDate: new Date(formData.requiredDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }),
      notes: formData.notes
    });
  };

  return (
    <div className="min-h-screen bg-green-300">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <Logo />
          <Link to="/purchase-requests">
            <Button
              variant="outline"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>}
            >
              Back to Dashboard
            </Button>
          </Link>
        </div>
        
        <Card>
          <h2 className="text-2xl font-bold mb-2">Post New Request</h2>
          <p className="text-gray-600 mb-6">
            Fill in the details below to create a new purchase request
          </p>
          
          <form onSubmit={handleSubmit}>
            <Input
              label="Crop Name"
              name="cropName"
              placeholder="Select or type crop name"
              value={formData.cropName}
              onChange={handleChange}
              required
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>}
            />
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Quantity (kg)</label>
              <div className="relative">
                <input
                  type="number"
                  name="quantity"
                  placeholder="Enter quantity in kilograms"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-gray-500">kg</span>
                </div>
              </div>
            </div>
            
            <Input
              label="Delivery Location"
              name="location"
              placeholder="Select delivery location"
              value={formData.location}
              onChange={handleChange}
              required
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>}
            />
            
            <Input
              label="Required Date"
              name="requiredDate"
              type="date"
              value={formData.requiredDate}
              onChange={handleChange}
              required
            />
            
            <TextArea
              label="Additional Notes (Optional)"
              name="notes"
              placeholder="Add any specific requirements or notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
            />
            
            <div className="mt-6">
              <Button
                type="submit"
                variant="secondary"
                fullWidth
              >
                Post Request
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default PostRequestPage;
