
import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const loginWithPhone = (phone) => {
    // In a real app, this would call an API to send an OTP
    setPhoneNumber(phone);
    navigate("/verify");
  };

  const verifyOTP = (otp) => {
    // In a real app, this would verify the OTP with an API
    if (otp === "123456") { // Mock verification
      navigate("/complete-profile");
    }
  };

  const completeProfile = (profile) => {
    setUser({ ...profile, phoneNumber });
    navigate("/purchase-requests");
  };

  return (
    <AuthContext.Provider
      value={{ 
        user, 
        phoneNumber, 
        loginWithPhone, 
        verifyOTP, 
        completeProfile,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
