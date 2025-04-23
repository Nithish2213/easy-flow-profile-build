
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { RequestProvider } from './context/RequestContext';
import LoginPage from "./pages/LoginPage";
import OtpVerificationPage from "./pages/OtpVerificationPage";
import CompleteProfilePage from "./pages/CompleteProfilePage";
import PurchaseRequestsPage from "./pages/PurchaseRequestsPage";
import PostRequestPage from "./pages/PostRequestPage";
import RequestDetailPage from "./pages/RequestDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import './index.css';

// Protected route component
const ProtectedRoute = ({ children }) => {
  // In a real app, check authentication status 
  // For demo purposes, we'll just render the children
  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <RequestProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/verify" element={<OtpVerificationPage />} />
            <Route path="/complete-profile" element={<CompleteProfilePage />} />
            
            <Route 
              path="/purchase-requests" 
              element={
                <ProtectedRoute>
                  <PurchaseRequestsPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/post-request" 
              element={
                <ProtectedRoute>
                  <PostRequestPage />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/request/:id" 
              element={
                <ProtectedRoute>
                  <RequestDetailPage />
                </ProtectedRoute>
              } 
            />
            
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </RequestProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
