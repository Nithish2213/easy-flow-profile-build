
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useRequests } from '../context/RequestContext';
import Logo from '../components/Logo';
import Card from '../components/Card';
import Button from '../components/Button';

function PurchaseRequestsPage() {
  const { user } = useAuth();
  const { getFilteredRequests, activeFilter, setActiveFilter } = useRequests();
  
  const filteredRequests = getFilteredRequests();
  
  const tabs = ["All Requests", "Open", "Accepted", "Completed"];
  
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'bg-green-100 text-green-800';
      case 'accepted':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="min-h-screen bg-green-300">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <Logo />
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              {user?.fullName?.charAt(0) || "U"}
            </div>
            <span className="text-gray-700">{user?.fullName || "User"}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Purchase Requests</h2>
          <Link to="/post-request">
            <Button
              variant="primary"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>}
            >
              Post New Request
            </Button>
          </Link>
        </div>
        
        <Card>
          <div className="flex border-b mb-4 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-gray-600 whitespace-nowrap ${
                  activeFilter === tab
                    ? 'border-b-2 border-green-500 text-green-700 font-medium'
                    : ''
                }`}
                onClick={() => setActiveFilter(tab)}
              >
                {tab}
              </button>
            ))}
            <div className="ml-auto">
              <Button
                variant="outline"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>}
              >
                Filters
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredRequests.map((request) => (
              <Link
                key={request.id}
                to={`/request/${request.id}`}
                className="block"
              >
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 mr-3 bg-gray-200 rounded flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{request.cropName}</h3>
                        <p className="text-gray-600 text-sm">Quantity: {request.quantity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-600">{request.date}</span>
                      <div className="mt-1">
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusClass(request.status)}`}>
                          {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            
            {filteredRequests.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No requests found</p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default PurchaseRequestsPage;
