import { useEffect, useMemo, useState } from 'react';
import { apiRequest } from '../utils/api';
import { AuthContext } from './authContext';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshUser = async () => {
    try {
      const response = await apiRequest('/profile');
      setUser(response.user);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const register = async (payload) => {
    const response = await apiRequest('/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    setUser(response.user);
    return response;
  };

  const login = async (payload) => {
    const response = await apiRequest('/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    setUser(response.user);
    return response;
  };

  const logout = async () => {
    await apiRequest('/logout', { method: 'POST' });
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isLoading,
      register,
      login,
      logout,
      refreshUser,
    }),
    [user, isLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
