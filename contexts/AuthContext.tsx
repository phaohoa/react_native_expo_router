// app/contexts/AuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, useSegments } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define user roles
export enum UserRole {
  GUEST = 'guest',
  USER = 'user',
  ADMIN = 'admin',
  SUPER_ADMIN = 'super_admin',
}

// Define permissions
export enum Permission {
  VIEW_DASHBOARD = 'view_dashboard',
  VIEW_PROFILE = 'view_profile',
  EDIT_PROFILE = 'edit_profile',
  VIEW_ADMIN = 'view_admin',
  MANAGE_USERS = 'manage_users',
  VIEW_ANALYTICS = 'view_analytics',
  DELETE_CONTENT = 'delete_content',
}

type User = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  permissions: Permission[];
};

type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string, role?: UserRole) => Promise<void>;
  signOut: () => void;
  isLoading: boolean;
  hasPermission: (permission: Permission) => boolean;
  hasRole: (role: UserRole | UserRole[]) => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Role-based permissions mapping
const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  [UserRole.GUEST]: [],
  [UserRole.USER]: [
    Permission.VIEW_DASHBOARD,
    Permission.VIEW_PROFILE,
    Permission.EDIT_PROFILE,
  ],
  [UserRole.ADMIN]: [
    Permission.VIEW_DASHBOARD,
    Permission.VIEW_PROFILE,
    Permission.EDIT_PROFILE,
    Permission.VIEW_ADMIN,
    Permission.MANAGE_USERS,
    Permission.VIEW_ANALYTICS,
  ],
  [UserRole.SUPER_ADMIN]: [
    Permission.VIEW_DASHBOARD,
    Permission.VIEW_PROFILE,
    Permission.EDIT_PROFILE,
    Permission.VIEW_ADMIN,
    Permission.MANAGE_USERS,
    Permission.VIEW_ANALYTICS,
    Permission.DELETE_CONTENT,
  ],
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const segments = useSegments();

  // Check stored auth on mount
  useEffect(() => {
    checkStoredAuth();
  }, []);

  // Route protection logic
  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === '(auth)';
    const inProtectedGroup = segments[0] === '(protected)';
    const inAdminGroup = segments[0] === '(admin)';

    if (!user && (inProtectedGroup || inAdminGroup)) {
      // Redirect to sign in if trying to access protected routes
      router.replace('/(auth)/sign-in');
    } else if (user && inAuthGroup) {
      // Redirect to appropriate home based on role
      if (user.role === UserRole.ADMIN || user.role === UserRole.SUPER_ADMIN) {
        router.replace('/(admin)/dashboard');
      } else {
        router.replace('/(protected)/home');
      }
    } else if (user && inAdminGroup) {
      // Check if user has admin access
      if (user.role !== UserRole.ADMIN && user.role !== UserRole.SUPER_ADMIN) {
        router.replace('/(protected)/home');
      }
    }
  }, [user, segments, isLoading]);

  const checkStoredAuth = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      const storedToken = await AsyncStorage.getItem('authToken');
      
      if (storedUser && storedToken) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error('Error checking stored auth:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (email: string, password: string, role: UserRole = UserRole.USER) => {
    try {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get permissions based on role
      const permissions = ROLE_PERMISSIONS[role];
      
      // Mock user data
      const mockUser: User = {
        id: Math.random().toString(),
        email: email,
        name: email.split('@')[0],
        role: role,
        permissions: permissions,
      };
      
      // Store auth data
      await AsyncStorage.setItem('user', JSON.stringify(mockUser));
      await AsyncStorage.setItem('authToken', 'mock-jwt-token-' + Date.now());
      
      setUser(mockUser);
      
      // Navigate based on role
      if (role === UserRole.ADMIN || role === UserRole.SUPER_ADMIN) {
        router.replace('/(admin)/dashboard');
      } else {
        router.replace('/(protected)/home');
      }
    } catch (error) {
      console.error('Sign in failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      // Clear stored data
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('authToken');
      
      setUser(null);
      router.replace('/(auth)/sign-in');
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  const hasPermission = (permission: Permission): boolean => {
    if (!user) return false;
    return user.permissions.includes(permission);
  };

  const hasRole = (role: UserRole | UserRole[]): boolean => {
    if (!user) return false;
    if (Array.isArray(role)) {
      return role.includes(user.role);
    }
    return user.role === role;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      signIn, 
      signOut, 
      isLoading, 
      hasPermission, 
      hasRole 
    }}>
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