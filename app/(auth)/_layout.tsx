// app/(auth)/_layout.tsx
import { Stack } from 'expo-router';
import { Pressable, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AuthLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <Pressable 
            onPress={() => router.push('/mode-selector')}
            style={{ marginLeft: 15, flexDirection: 'row', alignItems: 'center', gap: 5 }}
          >
            <Ionicons name="arrow-back" size={20} color="#fff" />
            <Text style={{ color: '#fff', fontSize: 16 }}>Modes</Text>
          </Pressable>
        ),
      }}
    >
      <Stack.Screen 
        name="sign-in" 
        options={{ 
          title: 'Sign In',
        }} 
      />
      <Stack.Screen 
        name="sign-up" 
        options={{ 
          title: 'Sign Up',
        }} 
      />
    </Stack>
  );
}