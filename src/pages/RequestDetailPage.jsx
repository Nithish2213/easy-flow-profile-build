
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRequests } from '../context/RequestContext';
import Logo from '../components/Logo';
import Card from '../components/Card';
import Button from '../components/Button';

function RequestDetailPage() {
  const { id } = useParams();
  const { getRequestById } = useRequests();
  const request = getRequestById(id);
  
  if (!request) {
    return (
      <div className="min-h-screen bg-green-300 flex items-center justify-center">
        <Card className="text-center p-8">
          <h2 className="text-xl font-bold mb-4">Request Not Found</h2>
          <Link to="/purchase-requests">
            <Button variant="outline">Back to Requests</Button>
          </Link>
        </Card>
      </div>
    );
  }

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
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold">{request.cropName}</h2>
            <span className={`px-3 py-1 rounded-full text-sm ${
              request.status === 'open' ? 'bg-green-100 text-green-800' :
              request.status === 'accepted' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
            </span>
          </div>
          
          <div className="text-sm text-gray-600 mb-1">Request ID: {request.id}</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-gray-500 text-sm">Quantity</h3>
              <p className="font-medium">{request.quantity}</p>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm">Required Date</h3>
              <p className="font-medium">{request.requiredDate}</p>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm">Delivery Location</h3>
              <p className="font-medium">{request.location}</p>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm">Request Created</h3>
              <p className="font-medium">{request.date}</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-gray-500 text-sm mb-1">Additional Notes</h3>
            <p className="text-gray-800">{request.notes || "No additional notes provided."}</p>
          </div>
          
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Farmer Details</h3>
            
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 flex items-center justify-center text-xs">
                64 x 64
              </div>
              <div>
                <p className="font-medium">{request.farmer.name}</p>
                <p className="text-sm text-gray-600">{request.farmer.location}</p>
              </div>
              <div className="ml-auto">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="gold" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <span className="font-medium">{request.farmer.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>}
                className="flex-1"
              >
                Contact Farmer
              </Button>
              
              <Button
                variant="outline"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>}
                className="flex-1"
              >
                Mark as Fulfilled
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default RequestDetailPage;
