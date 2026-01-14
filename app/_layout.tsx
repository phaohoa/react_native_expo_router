// app/_layout.tsx
import { Stack } from 'expo-router';
import { AuthProvider } from './contexts/AuthContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="mode-selector" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(protected)" />
          <Stack.Screen name="(demo)" />
        </Stack>
      </AuthProvider>
    </SafeAreaProvider>
  );
}