import { Stack } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ProtectedLayout() {
  const { signOut } = useAuth();
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
            onPress={() => {
              signOut();
              router.push('/mode-selector');
            }}
            style={{ marginLeft: 15, flexDirection: 'row', alignItems: 'center', gap: 5 }}
          >
            <Ionicons name="apps-outline" size={20} color="#fff" />
            <Text style={{ color: '#fff', fontSize: 16 }}>Modes</Text>
          </Pressable>
        ),
        headerRight: () => (
          <Pressable 
            onPress={signOut}
            style={{ marginRight: 15, flexDirection: 'row', alignItems: 'center', gap: 5 }}
          >
            <Ionicons name="log-out-outline" size={20} color="#fff" />
            <Text style={{ color: '#fff', fontSize: 16 }}>Logout</Text>
          </Pressable>
        ),
      }}
    >
      <Stack.Screen 
        name="home" 
        options={{ title: 'Protected Home' }} 
      />
    </Stack>
  );
}