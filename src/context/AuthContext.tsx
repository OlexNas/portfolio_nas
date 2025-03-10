'use client';


import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Define types for login and registration data
interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

// Define the shape of the auth context
interface AuthContextProps {
  isAuthenticated: boolean;
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://192.168.1.155:4000/auth/check", {
          method: "GET",
          credentials: "include",
        });
        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error verifying auth:", error);
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  // Call your login API endpoint and update state on success.
  const login = async (data: LoginData) => {
    try {
      const response = await fetch("http://192.168.1.155:4000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Ensure http‑only cookies are sent/received
        credentials: "include",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      // If login is successful, update the auth state
      setIsAuthenticated(true);
    } catch (error) {
      throw error;
    }
  };

  // Call your registration API endpoint.
  const register = async (data: RegisterData) => {
    try {
      const response = await fetch("http://192.168.1.155:4000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Registration failed");
      }
      // Registration successful.
      // Optionally, you could auto-login here by calling login().
    } catch (error) {
      throw error;
    }
  };

  // Call your logout API endpoint and update state on success.
  const logout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }
      setIsAuthenticated(false);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
