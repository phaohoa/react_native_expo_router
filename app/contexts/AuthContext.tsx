// app/contexts/AuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, useSegments } from 'expo-router';

type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  isLoading: boolean;
};

type User = {
  id: string;
  email: string;
  name: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const segments = useSegments();

  // Check if user is authenticated on mount
  useEffect(() => {
    // Simulate checking stored auth token
    const checkAuth = async () => {
      try {
        // In real app: check AsyncStorage for token
        // const token = await AsyncStorage.getItem('authToken');
        // if (token) { setUser(decodedUser); }
        
        // For demo: check if user exists in state
        setIsLoading(false);
      } catch (error) {
        console.error('Auth check failed:', error);
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Protect routes based on authentication
  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === '(auth)';
    const inProtectedGroup = segments[0] === '(protected)';

    if (!user && inProtectedGroup) {
      // Redirect to sign in if trying to access protected route
      router.replace('/(auth)/sign-in');
    } else if (user && inAuthGroup) {
      // Redirect to home if already signed in
      router.replace('/(protected)/home');
    }
  }, [user, segments, isLoading]);

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In real app: call your API
      // const response = await fetch('/api/login', { ... });
      // const data = await response.json();
      
      // Mock user data
      const mockUser: User = {
        id: '1',
        email: email,
        name: 'John Doe',
      };
      
      setUser(mockUser);
      
      // In real app: store token
      // await AsyncStorage.setItem('authToken', token);
      
      router.replace('/(protected)/home');
    } catch (error) {
      console.error('Sign in failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setUser(null);
      
      // In real app: clear token
      // await AsyncStorage.removeItem('authToken');
      
      router.replace('/(auth)/sign-in');
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}