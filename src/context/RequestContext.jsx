
import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const RequestContext = createContext();

export function RequestProvider({ children }) {
  const [requests, setRequests] = useState([
    {
      id: "REQ-2024-001",
      cropName: "Organic Tomatoes",
      quantity: "100 kg",
      quantityValue: 100,
      date: "Jan 15, 2024",
      requiredDate: "January 25, 2024",
      status: "open",
      location: "Mumbai",
      notes: "Need fresh, ripe tomatoes for restaurant use. Prefer locally grown.",
      farmer: {
        name: "Rajesh Kumar",
        location: "Nashik",
        rating: 4.8
      }
    },
    {
      id: "REQ-2024-002",
      cropName: "Premium Rice",
      quantity: "500 kg",
      quantityValue: 500,
      date: "Jan 10, 2024",
      requiredDate: "January 30, 2024",
      status: "accepted",
      location: "Delhi",
      notes: "Basmati rice for hotel supply",
      farmer: {
        name: "Amit Singh",
        location: "Haryana",
        rating: 4.5
      }
    },
    {
      id: "REQ-2024-003",
      cropName: "Fresh Potatoes",
      quantity: "200 kg",
      quantityValue: 200,
      date: "Jan 5, 2024",
      requiredDate: "January 15, 2024",
      status: "completed",
      location: "Pune",
      notes: "Need large size potatoes",
      farmer: {
        name: "Suresh Patel",
        location: "Gujarat",
        rating: 4.7
      }
    }
  ]);

  const [activeFilter, setActiveFilter] = useState("All Requests");
  const navigate = useNavigate();

  const addRequest = (request) => {
    const newRequest = {
      id: `REQ-2024-${(requests.length + 1).toString().padStart(3, '0')}`,
      date: new Date().toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'}),
      status: "open",
      ...request
    };
    
    setRequests([newRequest, ...requests]);
    navigate("/purchase-requests");
  };

  const getRequestById = (id) => {
    return requests.find(request => request.id === id);
  };

  const getFilteredRequests = () => {
    switch (activeFilter.toLowerCase()) {
      case 'open':
        return requests.filter(req => req.status === 'open');
      case 'accepted':
        return requests.filter(req => req.status === 'accepted');
      case 'completed':
        return requests.filter(req => req.status === 'completed');
      default:
        return requests;
    }
  };

  return (
    <RequestContext.Provider
      value={{ 
        requests,
        getFilteredRequests,
        addRequest,
        getRequestById,
        activeFilter,
        setActiveFilter
      }}
    >
      {children}
    </RequestContext.Provider>
  );
}

export const useRequests = () => useContext(RequestContext);
