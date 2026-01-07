import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email, password, rememberMe) => {
    // Simple mock authentication - replace with real API call
    // For demo: accepts any credentials OR dummy credentials
    if (email && password) {
      const userData = {
        email,
        name: email.split("@")[0],
        loggedInAt: new Date().toISOString(),
      };
      
      setUser(userData);
      setIsAuthenticated(true);
      
      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify(userData));
      }
      
      return { success: true };
    }
    
    return { success: false, error: "Invalid credentials" };
  };

  const register = (email, password, name) => {
    // Simple mock registration - replace with real API call
    if (email && password && name) {
      const userData = {
        email,
        name,
        registeredAt: new Date().toISOString(),
      };
      
      // Auto-login after registration
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(userData));
      
      return { success: true };
    }
    
    return { success: false, error: "Please fill all fields" };
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  
  return context;
}
